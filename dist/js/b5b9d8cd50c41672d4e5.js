(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~mobile.fui"],{

/***/ "028r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImageFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ImageLoadState; });
/**
 * The possible methods that can be used to fit the image.
 * {@docCategory Image}
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped
     * from the top and bottom, or the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height and width is less than the Image frame's height and width,
     * but if either natural height or width are larger than the frame it will behave as ImageFit.contain.
     */
    ImageFit[ImageFit["centerContain"] = 5] = "centerContain";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 * {@docCategory Image}
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
/**
 * {@docCategory Image}
 */
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * @deprecated Not used. Use `onLoadingStateChange` and re-render the Image with a different src.
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));
//# sourceMappingURL=Image.types.js.map

/***/ }),

/***/ "0nTY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Overlay; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js
var lib_scroll = __webpack_require__("4H/l");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Overlay/Overlay.base.js



var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var Overlay_base_OverlayBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(OverlayBase, _super);
    function OverlayBase(props) {
        var _this = _super.call(this, props) || this;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        return _this;
    }
    OverlayBase.prototype.componentDidMount = function () {
        !this._allowTouchBodyScroll && Object(lib_scroll["c" /* disableBodyScroll */])();
    };
    OverlayBase.prototype.componentWillUnmount = function () {
        !this._allowTouchBodyScroll && Object(lib_scroll["d" /* enableBodyScroll */])();
    };
    OverlayBase.prototype.render = function () {
        var _a = this.props, isDark = _a.isDarkThemed, className = _a.className, theme = _a.theme, styles = _a.styles;
        var divProps = Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isDark: isDark,
        });
        return react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, divProps, { className: classNames.root }));
    };
    return OverlayBase;
}(react["Component"]));

//# sourceMappingURL=Overlay.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Overlay/Overlay.styles.js

var GlobalClassNames = {
    root: 'ms-Overlay',
    rootDark: 'ms-Overlay--dark',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, theme = props.theme, isNone = props.isNone, isDark = props.isDark;
    var palette = theme.palette;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        border: '1px solid WindowText',
                        opacity: 0,
                    },
                    _a),
            },
            isNone && {
                visibility: 'hidden',
            },
            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40,
                },
            ],
            className,
        ],
    };
};
//# sourceMappingURL=Overlay.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Overlay/Overlay.js



var Overlay = Object(styled["a" /* styled */])(Overlay_base_OverlayBase, getStyles, undefined, {
    scope: 'Overlay',
});
//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "1rtd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BaseButton_BaseButton; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/createMergedRef.js
var createMergedRef = __webpack_require__("FTRa");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/portalContainsElement.js
var portalContainsElement = __webpack_require__("+YGA");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnConditionallyRequiredProps.js
var warnConditionallyRequiredProps = __webpack_require__("jVf8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js
var warnDeprecations = __webpack_require__("uxh7");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js
var object = __webpack_require__("FTLG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/BaseComponent.js
var BaseComponent = __webpack_require__("3eXo");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/aria.js
var aria = __webpack_require__("Vc0M");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/FontIcon.js
var FontIcon = __webpack_require__("KIfy");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.js + 2 modules
var Image = __webpack_require__("CmtH");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.styles.js
var Icon_styles = __webpack_require__("y/yH");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/ImageIcon.js





/**
 * Fast icon component which only supports images (not font glyphs) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
var ImageIcon = function (props) {
    var className = props.className, imageProps = props.imageProps;
    var nativeProps = Object(properties["h" /* getNativeProps */])(props, properties["i" /* htmlElementProperties */], [
        'aria-label',
        'aria-labelledby',
        'title',
        'aria-describedby',
    ]);
    var altText = imageProps.alt || props['aria-label'];
    var hasName = altText ||
        props['aria-labelledby'] ||
        props.title ||
        imageProps['aria-label'] ||
        imageProps['aria-labelledby'] ||
        imageProps.title;
    // move naming or describing attributes from the container (where they are invalid) to the image
    var imageNameProps = {
        'aria-labelledby': props['aria-labelledby'],
        'aria-describedby': props['aria-describedby'],
        title: props.title,
    };
    var containerProps = hasName
        ? {}
        : {
            'aria-hidden': true,
        };
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, containerProps, nativeProps, { className: Object(css["a" /* css */])(Icon_styles["a" /* MS_ICON */], Icon_styles["b" /* classNames */].root, Icon_styles["b" /* classNames */].image, className) }),
        react["createElement"](Image["a" /* Image */], Object(tslib_es6["a" /* __assign */])({}, imageNameProps, imageProps, { alt: hasName ? altText : '' }))));
};
//# sourceMappingURL=ImageIcon.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.types.js
var ContextualMenu_types = __webpack_require__("USl6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getDocument.js
var getDocument = __webpack_require__("41aL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/focus.js
var lib_focus = __webpack_require__("lE+F");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/osDetector.js
var osDetector = __webpack_require__("cgK4");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/mobileDetector.js
var mobileDetector = __webpack_require__("bsd9");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/componentAs/composeComponentAs.js
var composeComponentAs = __webpack_require__("T+Fs");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/contextualMenu/contextualMenuUtility.js
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
function hasSubmenu(item) {
    // eslint-disable-next-line deprecation/deprecation
    return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}
function getMenuItemAriaRole(item) {
    var isChecked = getIsChecked(item);
    var canCheck = isChecked !== null;
    return canCheck ? 'menuitemcheckbox' : 'menuitem';
}
//# sourceMappingURL=contextualMenuUtility.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js + 4 modules
var Callout = __webpack_require__("dXTB");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItem.base.js





var defaultIconRenderer = function (props) {
    var item = props.item, classNames = props.classNames;
    var iconProps = item.iconProps;
    return react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({}, iconProps, { className: classNames.icon }));
};
var renderItemIcon = function (props) {
    var item = props.item, hasIcons = props.hasIcons;
    if (!hasIcons) {
        return null;
    }
    if (item.onRenderIcon) {
        return item.onRenderIcon(props, defaultIconRenderer);
    }
    return defaultIconRenderer(props);
};
var renderCheckMarkIcon = function (_a) {
    var onCheckmarkClick = _a.onCheckmarkClick, item = _a.item, classNames = _a.classNames;
    var isItemChecked = getIsChecked(item);
    if (onCheckmarkClick) {
        // Ensures that the item is passed as the first argument to the checkmark click callback.
        var onClick = function (e) { return onCheckmarkClick(item, e); };
        return (react["createElement"](Icon["a" /* Icon */], { iconName: item.canCheck !== false && isItemChecked ? 'CheckMark' : '', className: classNames.checkmarkIcon, 
            // eslint-disable-next-line react/jsx-no-bind
            onClick: onClick }));
    }
    return null;
};
var renderItemName = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    /* eslint-disable deprecation/deprecation */
    if (item.text || item.name) {
        return react["createElement"]("span", { className: classNames.label }, item.text || item.name);
    }
    /* eslint-enable deprecation/deprecation */
    return null;
};
var renderSecondaryText = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.secondaryText) {
        return react["createElement"]("span", { className: classNames.secondaryText }, item.secondaryText);
    }
    return null;
};
var renderSubMenuIcon = function (_a) {
    var item = _a.item, classNames = _a.classNames, theme = _a.theme;
    if (hasSubmenu(item)) {
        return (react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({ iconName: Object(rtl["a" /* getRTL */])(theme) ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon })));
    }
    return null;
};
var ContextualMenuItem_base_ContextualMenuItemBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ContextualMenuItemBase, _super);
    function ContextualMenuItemBase(props) {
        var _this = _super.call(this, props) || this;
        _this.openSubMenu = function () {
            var _a = _this.props, item = _a.item, openSubMenu = _a.openSubMenu, getSubmenuTarget = _a.getSubmenuTarget;
            if (getSubmenuTarget) {
                var submenuTarget = getSubmenuTarget();
                if (hasSubmenu(item) && openSubMenu && submenuTarget) {
                    openSubMenu(item, submenuTarget);
                }
            }
        };
        _this.dismissSubMenu = function () {
            var _a = _this.props, item = _a.item, dismissSubMenu = _a.dismissSubMenu;
            if (hasSubmenu(item) && dismissSubMenu) {
                dismissSubMenu();
            }
        };
        _this.dismissMenu = function (dismissAll) {
            var dismissMenu = _this.props.dismissMenu;
            if (dismissMenu) {
                dismissMenu(undefined /* ev */, dismissAll);
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        return _this;
    }
    ContextualMenuItemBase.prototype.render = function () {
        var _a = this.props, item = _a.item, classNames = _a.classNames;
        var renderContent = item.onRenderContent || this._renderLayout;
        return (react["createElement"]("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent }, renderContent(this.props, {
            renderCheckMarkIcon: renderCheckMarkIcon,
            renderItemIcon: renderItemIcon,
            renderItemName: renderItemName,
            renderSecondaryText: renderSecondaryText,
            renderSubMenuIcon: renderSubMenuIcon,
        })));
    };
    ContextualMenuItemBase.prototype._renderLayout = function (props, defaultRenders) {
        return (react["createElement"](react["Fragment"], null,
            defaultRenders.renderCheckMarkIcon(props),
            defaultRenders.renderItemIcon(props),
            defaultRenders.renderItemName(props),
            defaultRenders.renderSecondaryText(props),
            defaultRenders.renderSubMenuIcon(props)));
    };
    return ContextualMenuItemBase;
}(react["Component"]));

//# sourceMappingURL=ContextualMenuItem.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Divider/VerticalDivider.classNames.js


/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */
var VerticalDivider_classNames_getDividerClassNames = Object(memoize["b" /* memoizeFunction */])(
// eslint-disable-next-line deprecation/deprecation
function (theme) {
    return Object(lib["E" /* mergeStyleSets */])({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center',
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
    });
});
//# sourceMappingURL=VerticalDivider.classNames.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js



var CONTEXTUAL_MENU_ITEM_HEIGHT = 36;
var MediumScreenSelector = Object(lib["A" /* getScreenSelector */])(0, lib["i" /* ScreenWidthMaxMedium */]);
var getMenuItemStyles = Object(memoize["b" /* memoizeFunction */])(function (theme) {
    var _a, _b, _c, _d, _e;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, palette = theme.palette;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemTextHoverColor = semanticColors.menuItemTextHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundPressed;
    var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box',
            },
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: ContextualMenuItemDividerColor,
            position: 'relative',
        },
        root: [
            Object(lib["u" /* getFocusStyle */])(theme),
            fonts.medium,
            {
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 8px 0 4px',
                textAlign: 'left',
            },
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: (_a = {},
                _a[lib["f" /* HighContrastSelector */]] = {
                    // ensure disabled text looks different than enabled
                    color: 'GrayText',
                    opacity: 1,
                },
                _a),
        },
        rootHovered: {
            backgroundColor: ContextualMenuItemBackgroundHoverColor,
            color: ContextualMenuItemTextHoverColor,
            selectors: {
                '.ms-ContextualMenu-icon': {
                    color: palette.themeDarkAlt,
                },
                '.ms-ContextualMenu-submenuIcon': {
                    color: palette.neutralPrimary,
                },
            },
        },
        rootFocused: {
            backgroundColor: palette.white,
        },
        rootChecked: {
            selectors: {
                '.ms-ContextualMenu-checkmarkIcon': {
                    color: palette.neutralPrimary,
                },
            },
        },
        rootPressed: {
            backgroundColor: ContextualMenuItemBackgroundSelectedColor,
            selectors: {
                '.ms-ContextualMenu-icon': {
                    color: palette.themeDark,
                },
                '.ms-ContextualMenu-submenuIcon': {
                    color: palette.neutralPrimary,
                },
            },
        },
        rootExpanded: {
            backgroundColor: ContextualMenuItemBackgroundSelectedColor,
            color: semanticColors.bodyTextChecked,
            selectors: (_b = {
                    '.ms-ContextualMenu-submenuIcon': (_c = {},
                        _c[lib["f" /* HighContrastSelector */]] = {
                            // icons inside of anchor tags are not properly inheriting color in high contrast
                            color: 'inherit',
                        },
                        _c)
                },
                _b[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({}, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _b),
        },
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
        },
        anchorLink: {
            padding: '0px 8px 0 4px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box',
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        secondaryText: {
            color: theme.palette.neutralSecondary,
            paddingLeft: '20px',
            textAlign: 'right',
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            fontSize: lib["h" /* IconFontSizes */].medium,
            width: lib["h" /* IconFontSizes */].medium,
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0',
            selectors: (_d = {},
                _d[MediumScreenSelector] = {
                    fontSize: lib["h" /* IconFontSizes */].large,
                    width: lib["h" /* IconFontSizes */].large,
                },
                _d),
        },
        iconColor: {
            color: semanticColors.menuIcon,
        },
        iconDisabled: {
            color: semanticColors.disabledBodyText,
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
        },
        subMenuIcon: {
            height: CONTEXTUAL_MENU_ITEM_HEIGHT,
            lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            color: palette.neutralSecondary,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: lib["h" /* IconFontSizes */].small,
            selectors: (_e = {
                    ':hover': {
                        color: palette.neutralPrimary,
                    },
                    ':active': {
                        color: palette.neutralPrimary,
                    }
                },
                _e[MediumScreenSelector] = {
                    fontSize: lib["h" /* IconFontSizes */].medium, // 16px
                },
                _e),
        },
        splitButtonFlexContainer: [
            Object(lib["u" /* getFocusStyle */])(theme),
            {
                display: 'flex',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
        ],
    };
    return Object(lib["r" /* concatStyleSets */])(menuItemStyles);
});
//# sourceMappingURL=ContextualMenu.cnstyles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.classNames.js




var CONTEXTUAL_SPLIT_MENU_MINWIDTH = '28px';
var ContextualMenu_classNames_MediumScreenSelector = Object(lib["A" /* getScreenSelector */])(0, lib["i" /* ScreenWidthMaxMedium */]);
var getSplitButtonVerticalDividerClassNames = Object(memoize["b" /* memoizeFunction */])(
/* eslint-disable deprecation/deprecation */
function (theme) {
    var _a;
    return Object(lib["E" /* mergeStyleSets */])(VerticalDivider_classNames_getDividerClassNames(theme), {
        /* eslint-enable deprecation/deprecation */
        wrapper: {
            position: 'absolute',
            right: 28,
            selectors: (_a = {},
                _a[ContextualMenu_classNames_MediumScreenSelector] = {
                    right: 32, // fontSize of the icon increased from 12px to 16px
                },
                _a),
        },
        divider: {
            height: 16,
            width: 1,
        },
    });
});
var GlobalClassNames = {
    item: 'ms-ContextualMenu-item',
    divider: 'ms-ContextualMenu-divider',
    root: 'ms-ContextualMenu-link',
    isChecked: 'is-checked',
    isExpanded: 'is-expanded',
    isDisabled: 'is-disabled',
    linkContent: 'ms-ContextualMenu-linkContent',
    linkContentMenu: 'ms-ContextualMenu-linkContent',
    icon: 'ms-ContextualMenu-icon',
    iconColor: 'ms-ContextualMenu-iconColor',
    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
    label: 'ms-ContextualMenu-itemText',
    secondaryText: 'ms-ContextualMenu-secondaryText',
    splitMenu: 'ms-ContextualMenu-splitMenu',
    screenReaderText: 'ms-ContextualMenu-screenReaderText',
};
/**
 * @deprecated Will be removed in \>= 7.0.
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * @internal
 */
// TODO: Audit perf. impact of and potentially remove memoizeFunction.
// https://github.com/microsoft/fluentui/issues/5534
var ContextualMenu_classNames_getItemClassNames = Object(memoize["b" /* memoizeFunction */])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
    var _a, _b, _c, _d;
    var styles = getMenuItemStyles(theme);
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return Object(lib["E" /* mergeStyleSets */])({
        item: [classNames.item, styles.item, itemClassName],
        divider: [classNames.divider, styles.divider, dividerClassName],
        root: [
            classNames.root,
            styles.root,
            checked && [classNames.isChecked, styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && [classNames.isExpanded, styles.rootExpanded],
            disabled && [classNames.isDisabled, styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_a = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        // eslint-disable-next-line @fluentui/max-len
                        _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, .").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:hover")] = styles.rootFocused,
                        _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:hover")] = {
                            background: 'inherit;',
                        },
                        _a),
                },
            ],
            className,
        ],
        splitPrimary: [
            styles.root,
            {
                width: "calc(100% - ".concat(CONTEXTUAL_SPLIT_MENU_MINWIDTH, ")"),
            },
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: (_b = {
                            ':hover': styles.rootHovered
                        },
                        // when hovering over the splitPrimary also affect the splitMenu
                        _b[":hover ~ .".concat(classNames.splitMenu)] = styles.rootHovered,
                        _b[':active'] = styles.rootPressed,
                        // eslint-disable-next-line @fluentui/max-len
                        _b[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, .").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:hover")] = styles.rootFocused,
                        _b[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:hover")] = {
                            background: 'inherit;',
                        },
                        _b),
                },
            ],
        ],
        splitMenu: [
            classNames.splitMenu,
            styles.root,
            {
                flexBasis: '0',
                padding: '0 8px',
                minWidth: CONTEXTUAL_SPLIT_MENU_MINWIDTH,
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_c = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        // eslint-disable-next-line @fluentui/max-len
                        _c[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, .").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:hover")] = styles.rootFocused,
                        _c[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:hover")] = {
                            background: 'inherit;',
                        },
                        _c),
                },
            ],
        ],
        anchorLink: styles.anchorLink,
        linkContent: [classNames.linkContent, styles.linkContent],
        linkContentMenu: [
            classNames.linkContentMenu,
            styles.linkContent,
            {
                justifyContent: 'center',
            },
        ],
        icon: [
            classNames.icon,
            knownIcon && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && [classNames.isDisabled, styles.iconDisabled],
        ],
        iconColor: styles.iconColor,
        checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
        subMenuIcon: [
            classNames.subMenuIcon,
            styles.subMenuIcon,
            subMenuClassName,
            expanded && { color: theme.palette.neutralPrimary },
            disabled && [styles.iconDisabled],
        ],
        label: [classNames.label, styles.label],
        secondaryText: [classNames.secondaryText, styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            !disabled &&
                !checked && [
                {
                    selectors: (_d = {},
                        // eslint-disable-next-line @fluentui/max-len
                        _d[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, .").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:hover, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:hover")] = styles.rootFocused,
                        _d),
                },
            ],
        ],
        screenReaderText: [
            classNames.screenReaderText,
            styles.screenReaderText,
            lib["C" /* hiddenContentStyle */],
            { visibility: 'hidden' },
        ],
    });
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props - the ContextualMenuItem style props used to generate its styles.
 */
var getItemStyles = function (props) {
    var theme = props.theme, disabled = props.disabled, expanded = props.expanded, checked = props.checked, isAnchorLink = props.isAnchorLink, knownIcon = props.knownIcon, itemClassName = props.itemClassName, dividerClassName = props.dividerClassName, iconClassName = props.iconClassName, subMenuClassName = props.subMenuClassName, primaryDisabled = props.primaryDisabled, className = props.className;
    // eslint-disable-next-line deprecation/deprecation
    return ContextualMenu_classNames_getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};
//# sourceMappingURL=ContextualMenu.classNames.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItem.js



/**
 * ContextualMenuItem description
 */
var ContextualMenuItem = Object(styled["a" /* styled */])(ContextualMenuItem_base_ContextualMenuItemBase, getItemStyles, undefined, { scope: 'ContextualMenuItem' });
//# sourceMappingURL=ContextualMenuItem.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js



var ContextualMenuItemWrapper_ContextualMenuItemWrapper = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        return _this;
    }
    ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
        return !Object(object["c" /* shallowCompare */])(newProps, this.props);
    };
    return ContextualMenuItemWrapper;
}(react["Component"]));

//# sourceMappingURL=ContextualMenuItemWrapper.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/keytips/KeytipConstants.js
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var DATAKTP_ARIA_TARGET = 'data-ktp-aria-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useConst.js
var useConst = __webpack_require__("mFKB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/usePrevious.js
var usePrevious = __webpack_require__("kWOt");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("9yo2");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/keytips/KeytipManager.js



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager_KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = {};
        this.persistedKeytips = {};
        this.sequenceMapping = {};
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
        // Boolean to indicate whether to delay firing an event to update subscribers of
        // keytip data changed.
        this.delayUpdatingKeytipChange = false;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Initialization code to set set parameters to define
     * how the KeytipManager handles keytip data.
     *
     * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
     * of keytip changes
     */
    KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
        this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
            this.sequenceMapping[props.keySequences.toString()] = props;
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to dictionary
        persisted
            ? (this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip)
            : (this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip);
        // We only want to add something new if we are currently showing keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            var event_1 = persisted ? KeytipEvents.PERSISTED_KEYTIP_ADDED : KeytipEvents.KEYTIP_ADDED;
            EventGroup["a" /* EventGroup */].raise(this, event_1, {
                keytip: props,
                uniqueID: uniqueKeytip.uniqueID,
            });
        }
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var oldKeyTip = this.keytips[uniqueID];
        if (oldKeyTip) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible;
            // Update keytip in this.keytips
            this.keytips[uniqueID] = uniqueKeytip;
            // Update the sequence to be up to date
            delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
            this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip;
            // Raise event only if we are currently in keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                EventGroup["a" /* EventGroup */].raise(this, KeytipEvents.KEYTIP_UPDATED, {
                    keytip: uniqueKeytip.keytip,
                    uniqueID: uniqueKeytip.uniqueID,
                });
            }
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
        !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
        var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_REMOVED : KeytipEvents.KEYTIP_REMOVED;
        // Update keytips only if we're in keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            EventGroup["a" /* EventGroup */].raise(this, event, {
                keytip: keytipToRemove,
                uniqueID: uniqueID,
            });
        }
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        EventGroup["a" /* EventGroup */].raise(this, KeytipEvents.ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        EventGroup["a" /* EventGroup */].raise(this, KeytipEvents.EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        var _this = this;
        return Object.keys(this.keytips).map(function (key) { return _this.keytips[key].keytip; });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = Object(tslib_es6["f" /* __spreadArray */])([], keytipProps.keySequences, true);
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = this.sequenceMapping[fullSequence.toString()];
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, keytipProps), { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        EventGroup["a" /* EventGroup */].raise(this, KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences,
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(getId["a" /* getId */])(); }
        return { keytip: Object(tslib_es6["a" /* __assign */])({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());
//# sourceMappingURL=KeytipManager.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/array.js
var array = __webpack_require__("S+0K");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/keytips/KeytipUtils.js



/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + KTP_SEPARATOR + keySequence.split('').join(KTP_SEPARATOR);
    }, KTP_PREFIX);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = Object(tslib_es6["f" /* __spreadArray */])([], overflowKeySequences, true).pop();
    var newKeySequences = Object(tslib_es6["f" /* __spreadArray */])([], keySequences, true);
    return Object(array["a" /* addElementAtIndex */])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + DATAKTP_TARGET + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + DATAKTP_EXECUTE_TARGET + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + KTP_LAYER_ID;
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}
//# sourceMappingURL=KeytipUtils.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/KeytipData/useKeytipData.js





/**
 * Hook that creates attributes for components which are enabled with Keytip.
 */
function useKeytipData(options) {
    var uniqueId = react["useRef"]();
    var keytipProps = options.keytipProps
        ? Object(tslib_es6["a" /* __assign */])({ disabled: options.disabled }, options.keytipProps) : undefined;
    var keytipManager = Object(useConst["a" /* useConst */])(KeytipManager_KeytipManager.getInstance());
    var prevOptions = Object(usePrevious["a" /* usePrevious */])(options);
    // useLayoutEffect used to strictly emulate didUpdate/didMount behavior
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        if (uniqueId.current &&
            keytipProps &&
            ((prevOptions === null || prevOptions === void 0 ? void 0 : prevOptions.keytipProps) !== options.keytipProps || (prevOptions === null || prevOptions === void 0 ? void 0 : prevOptions.disabled) !== options.disabled)) {
            keytipManager.update(keytipProps, uniqueId.current);
        }
    });
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        // Register Keytip in KeytipManager
        if (keytipProps) {
            uniqueId.current = keytipManager.register(keytipProps);
        }
        return function () {
            // Unregister Keytip in KeytipManager
            keytipProps && keytipManager.unregister(keytipProps, uniqueId.current);
        };
        // this is meant to run only at mount, and updates are handled separately
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var nativeKeytipProps = {
        ariaDescribedBy: undefined,
        keytipId: undefined,
    };
    if (keytipProps) {
        nativeKeytipProps = getKeytipData(keytipManager, keytipProps, options.ariaDescribedBy);
    }
    return nativeKeytipProps;
}
/**
 * Gets the aria- and data- attributes to attach to the component
 * @param keytipProps - options for Keytip
 * @param describedByPrepend - ariaDescribedBy value to prepend
 */
function getKeytipData(keytipManager, keytipProps, describedByPrepend) {
    // Add the parent overflow sequence if necessary
    var newKeytipProps = keytipManager.addParentOverflow(keytipProps);
    // Construct aria-describedby and data-ktp-id attributes
    var ariaDescribedBy = Object(aria["a" /* mergeAriaAttributeValues */])(describedByPrepend, getAriaDescribedBy(newKeytipProps.keySequences));
    var keySequences = Object(tslib_es6["f" /* __spreadArray */])([], newKeytipProps.keySequences, true);
    if (newKeytipProps.overflowSetSequence) {
        keySequences = mergeOverflows(keySequences, newKeytipProps.overflowSetSequence);
    }
    var keytipId = sequencesToID(keySequences);
    return {
        ariaDescribedBy: ariaDescribedBy,
        keytipId: keytipId,
    };
}
//# sourceMappingURL=useKeytipData.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/KeytipData/KeytipData.js



/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = function (props) {
    var _a;
    var children = props.children, keytipDataProps = Object(tslib_es6["e" /* __rest */])(props, ["children"]);
    var _b = useKeytipData(keytipDataProps), keytipId = _b.keytipId, ariaDescribedBy = _b.ariaDescribedBy;
    return children((_a = {},
        _a[DATAKTP_TARGET] = keytipId,
        _a[DATAKTP_EXECUTE_TARGET] = keytipId,
        _a['aria-describedby'] = ariaDescribedBy,
        _a));
};
//# sourceMappingURL=KeytipData.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js







var ContextualMenuAnchor_ContextualMenuAnchor = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ContextualMenuAnchor, _super);
    function ContextualMenuAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = react["createRef"]();
        _this._getMemoizedMenuButtonKeytipProps = Object(memoize["b" /* memoizeFunction */])(function (keytipProps) {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, keytipProps), { hasMenu: true });
        });
        _this._getSubmenuTarget = function () {
            return _this._anchor.current ? _this._anchor.current : undefined;
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
            if (onItemClick) {
                onItemClick(item, ev);
            }
        };
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react["createElement"]("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        return _this;
    }
    ContextualMenuAnchor.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var ChildrenRenderer = ContextualMenuItem;
        if (this.props.item.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(this.props.item.contextualMenuItemAs, ChildrenRenderer);
        }
        if (this.props.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(this.props.contextualMenuItemAs, ChildrenRenderer);
        }
        var anchorRel = item.rel;
        if (item.target && item.target.toLowerCase() === '_blank') {
            anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
        }
        var itemHasSubmenu = hasSubmenu(item);
        var nativeProps = Object(properties["h" /* getNativeProps */])(item, properties["a" /* anchorProperties */]);
        var disabled = isItemDisabled(item);
        var itemProps = item.itemProps, ariaDescription = item.ariaDescription;
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        if (ariaDescription) {
            this._ariaDescriptionId = Object(getId["a" /* getId */])();
        }
        var ariaDescribedByIds = Object(aria["a" /* mergeAriaAttributeValues */])(item.ariaDescribedBy, ariaDescription ? this._ariaDescriptionId : undefined, nativeProps['aria-describedby']);
        var additionalItemProperties = {
            'aria-describedby': ariaDescribedByIds,
        };
        return (react["createElement"]("div", null,
            react["createElement"](KeytipData, { keytipProps: item.keytipProps, ariaDescribedBy: ariaDescribedByIds, disabled: disabled }, function (keytipAttributes) { return (react["createElement"]("a", Object(tslib_es6["a" /* __assign */])({}, additionalItemProperties, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": isItemDisabled(item), 
                // eslint-disable-next-line deprecation/deprecation
                style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onMouseMove: _this._onItemMouseMove, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined }),
                react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)),
                _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); })));
    };
    return ContextualMenuAnchor;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuAnchor.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Divider/VerticalDivider.styles.js
var getStyles = function (props) {
    // eslint-disable-next-line deprecation/deprecation
    var theme = props.theme, getClassNames = props.getClassNames, className = props.className;
    if (!theme) {
        throw new Error('Theme is undefined or null.');
    }
    if (getClassNames) {
        var names = getClassNames(theme);
        return {
            wrapper: [names.wrapper],
            divider: [names.divider],
        };
    }
    return {
        wrapper: [
            {
                display: 'inline-flex',
                height: '100%',
                alignItems: 'center',
            },
            className,
        ],
        divider: [
            {
                width: 1,
                height: '100%',
                backgroundColor: theme.palette.neutralTertiaryAlt,
            },
        ],
    };
};
//# sourceMappingURL=VerticalDivider.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Divider/VerticalDivider.base.js


var VerticalDivider_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var VerticalDividerBase = react["forwardRef"](function (props, ref) {
    // eslint-disable-next-line deprecation/deprecation
    var styles = props.styles, theme = props.theme, deprecatedGetClassNames = props.getClassNames, className = props.className;
    var classNames = VerticalDivider_base_getClassNames(styles, { theme: theme, getClassNames: deprecatedGetClassNames, className: className });
    return (react["createElement"]("span", { className: classNames.wrapper, ref: ref },
        react["createElement"]("span", { className: classNames.divider })));
});
VerticalDividerBase.displayName = 'VerticalDividerBase';
//# sourceMappingURL=VerticalDivider.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Divider/VerticalDivider.js



var VerticalDivider = Object(styled["a" /* styled */])(VerticalDividerBase, getStyles, undefined, {
    scope: 'VerticalDivider',
});
//# sourceMappingURL=VerticalDivider.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js









var TouchIdleDelay = 500; /* ms */
var ContextualMenuSplitButton_ContextualMenuSplitButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ContextualMenuSplitButton, _super);
    function ContextualMenuSplitButton(props) {
        var _this = _super.call(this, props) || this;
        _this._getMemoizedMenuButtonKeytipProps = Object(memoize["b" /* memoizeFunction */])(function (keytipProps) {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, keytipProps), { hasMenu: true });
        });
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === KeyCodes["a" /* KeyCodes */].enter) {
                _this._executeItemClick(ev);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._getSubmenuTarget = function () {
            return _this._splitButton;
        };
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react["createElement"]("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        _this._onItemMouseEnterPrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseEnterIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, _this._splitButton);
            }
        };
        _this._onItemMouseMovePrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseMoveIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, _this._splitButton);
            }
        };
        _this._onIconItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
            }
        };
        _this._executeItemClick = function (ev) {
            var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
            if (item.disabled || item.isDisabled) {
                return;
            }
            if (_this._processingTouch && !item.canCheck && onItemClick) {
                return onItemClick(item, ev);
            }
            if (executeItemClick) {
                executeItemClick(item, ev);
            }
        };
        _this._onTouchStart = function (ev) {
            if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                _this._handleTouchAndPointerEvent(ev);
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent(ev);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        _this._async = new Async["a" /* Async */](_this);
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        _this._dismissLabelId = Object(getId["a" /* getId */])();
        return _this;
    }
    ContextualMenuSplitButton.prototype.componentDidMount = function () {
        if (this._splitButton && 'onpointerdown' in this._splitButton) {
            this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
        }
    };
    ContextualMenuSplitButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    ContextualMenuSplitButton.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, item = _b.item, classNames = _b.classNames, index = _b.index, focusableElementIndex = _b.focusableElementIndex, totalItemCount = _b.totalItemCount, hasCheckmarks = _b.hasCheckmarks, hasIcons = _b.hasIcons, onItemMouseLeave = _b.onItemMouseLeave, expandedMenuItemKey = _b.expandedMenuItemKey;
        var itemHasSubmenu = hasSubmenu(item);
        var keytipProps = item.keytipProps;
        if (keytipProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        var ariaDescription = item.ariaDescription;
        if (ariaDescription) {
            this._ariaDescriptionId = Object(getId["a" /* getId */])();
        }
        var ariaChecked = (_a = getIsChecked(item)) !== null && _a !== void 0 ? _a : undefined;
        return (react["createElement"](KeytipData, { keytipProps: keytipProps, disabled: isItemDisabled(item) }, function (keytipAttributes) { return (react["createElement"]("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: getMenuItemAriaRole(item), "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": isItemDisabled(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": Object(aria["a" /* mergeAriaAttributeValues */])(item.ariaDescribedBy, ariaDescription ? _this._ariaDescriptionId : undefined, keytipAttributes['aria-describedby']), "aria-checked": ariaChecked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
            _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
            _this._renderSplitDivider(item),
            _this._renderSplitIconButton(item, classNames, index, keytipAttributes),
            _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); }));
    };
    ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem : _b, onItemClick = _a.onItemClick;
        var itemProps = {
            key: item.key,
            disabled: isItemDisabled(item) || item.primaryDisabled,
            /* eslint-disable deprecation/deprecation */
            name: item.name,
            text: item.text || item.name,
            secondaryText: item.secondaryText,
            /* eslint-enable deprecation/deprecation */
            className: classNames.splitPrimary,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            iconProps: item.iconProps,
            id: this._dismissLabelId,
            onClick: item.onClick,
            onRenderIcon: item.onRenderIcon,
            data: item.data,
            'data-is-focusable': false,
        };
        var itemComponentProps = item.itemProps;
        return (react["createElement"]("button", Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(itemProps, properties["c" /* buttonProperties */])),
            react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({ "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
        var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || getSplitButtonVerticalDividerClassNames;
        return react["createElement"](VerticalDivider, { getClassNames: getDividerClassNames });
    };
    ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, // eslint-disable-line deprecation/deprecation
    index, keytipAttributes) {
        var _a = this.props, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var ChildrenRenderer = ContextualMenuItem;
        if (this.props.item.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(this.props.item.contextualMenuItemAs, ChildrenRenderer);
        }
        if (this.props.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(this.props.contextualMenuItemAs, ChildrenRenderer);
        }
        var itemProps = {
            onClick: this._onIconItemClick,
            disabled: isItemDisabled(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
            key: item.key,
            'aria-labelledby': this._dismissLabelId,
        };
        var buttonProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(itemProps, properties["c" /* buttonProperties */])), {
            onMouseEnter: this._onItemMouseEnterIcon,
            onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
            onMouseDown: function (ev) {
                return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
            },
            onMouseMove: this._onItemMouseMoveIcon,
            'data-is-focusable': false,
            'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
            'aria-haspopup': true,
        });
        var itemComponentProps = item.itemProps;
        return (react["createElement"]("button", Object(tslib_es6["a" /* __assign */])({}, buttonProps),
            react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({ componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
        var _this = this;
        var onTap = this.props.onTap;
        if (onTap) {
            onTap(ev);
        }
        // If we already have an existing timeout from a previous touch/pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    return ContextualMenuSplitButton;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuSplitButton.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js







var ContextualMenuButton_ContextualMenuButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = react["createRef"]();
        _this._getMemoizedMenuButtonKeytipProps = Object(memoize["b" /* memoizeFunction */])(function (keytipProps) {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, keytipProps), { hasMenu: true });
        });
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react["createElement"]("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, contextualMenuItemAs = _a.contextualMenuItemAs, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var ChildrenRenderer = ContextualMenuItem;
        if (item.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(item.contextualMenuItemAs, ChildrenRenderer);
        }
        if (contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(contextualMenuItemAs, ChildrenRenderer);
        }
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = getMenuItemAriaRole(item);
        var itemHasSubmenu = hasSubmenu(item);
        var itemProps = item.itemProps, ariaLabel = item.ariaLabel, ariaDescription = item.ariaDescription;
        var buttonNativeProperties = Object(properties["h" /* getNativeProps */])(item, properties["c" /* buttonProperties */]);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemRole = item.role || defaultRole;
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        if (ariaDescription) {
            this._ariaDescriptionId = Object(getId["a" /* getId */])();
        }
        var ariaDescribedByIds = Object(aria["a" /* mergeAriaAttributeValues */])(item.ariaDescribedBy, ariaDescription ? this._ariaDescriptionId : undefined, buttonNativeProperties['aria-describedby']);
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) {
                return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
            },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-describedby': ariaDescribedByIds,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': isItemDisabled(item),
            'aria-checked': (itemRole === 'menuitemcheckbox' || itemRole === 'menuitemradio') && canCheck ? !!isChecked : undefined,
            'aria-selected': itemRole === 'menuitem' && canCheck ? !!isChecked : undefined,
            role: itemRole,
            // eslint-disable-next-line deprecation/deprecation
            style: item.style,
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        return (react["createElement"](KeytipData, { keytipProps: keytipProps, ariaDescribedBy: ariaDescribedByIds, disabled: isItemDisabled(item) }, function (keytipAttributes) { return (react["createElement"]("button", Object(tslib_es6["a" /* __assign */])({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)),
            _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); }));
    };
    return ContextualMenuButton;
}(ContextualMenuItemWrapper_ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuButton.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useAsync.js
var useAsync = __webpack_require__("Eo9X");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useWarnings.js
var useWarnings = __webpack_require__("Te7Q");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useTarget.js
var useTarget = __webpack_require__("MMVL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/hooks/useResponsiveMode.js
var useResponsiveMode = __webpack_require__("OpsB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__("hDQx");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/MenuContext/MenuContext.js

var MenuContext = react["createContext"]({});
var useMenuContext = function () {
    return react["useContext"](MenuContext);
};
//# sourceMappingURL=MenuContext.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.base.js















var ContextualMenu_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var getContextualMenuItemClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
// The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
var DEFAULT_PROPS = {
    items: [],
    shouldFocusOnMount: true,
    gapSpace: 0,
    directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge,
    beakWidth: 16,
};
/* return number of menu items, excluding headers and dividers */
function getItemCount(items) {
    var totalItemCount = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Divider && item.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Header) {
            var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
            totalItemCount += itemCount;
        }
    }
    return totalItemCount;
}
function getSubmenuItems(item, options) {
    var target = options === null || options === void 0 ? void 0 : options.target;
    // eslint-disable-next-line deprecation/deprecation
    var items = item.subMenuProps ? item.subMenuProps.items : item.items;
    if (items) {
        var overrideItems = [];
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var subItem = items_2[_i];
            if (subItem.preferMenuTargetAsEventTarget) {
                // For sub-items which need an overridden target, intercept `onClick`
                var onClick = subItem.onClick, contextItem = Object(tslib_es6["e" /* __rest */])(subItem, ["onClick"]);
                overrideItems.push(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, contextItem), { onClick: getOnClickWithOverrideTarget(onClick, target) }));
            }
            else {
                overrideItems.push(subItem);
            }
        }
        return overrideItems;
    }
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
var NavigationIdleDelay = 250; /* ms */
var COMPONENT_NAME = 'ContextualMenu';
var _getMenuItemStylesFunction = Object(memoize["b" /* memoizeFunction */])(function () {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return function (styleProps) {
        return lib["s" /* concatStyleSetsWithProps */].apply(void 0, Object(tslib_es6["f" /* __spreadArray */])([styleProps, getItemStyles], styles, false));
    };
});
//#region Custom hooks
function useVisibility(props, targetWindow) {
    var _a = props.hidden, hidden = _a === void 0 ? false : _a, onMenuDismissed = props.onMenuDismissed, onMenuOpened = props.onMenuOpened;
    var previousHidden = Object(usePrevious["a" /* usePrevious */])(hidden);
    var onMenuOpenedRef = react["useRef"](onMenuOpened);
    var onMenuClosedRef = react["useRef"](onMenuDismissed);
    var propsRef = react["useRef"](props);
    onMenuOpenedRef.current = onMenuOpened;
    onMenuClosedRef.current = onMenuDismissed;
    propsRef.current = props;
    react["useEffect"](function () {
        var _a, _b;
        // Don't issue dismissed callbacks on initial mount
        if (hidden && previousHidden === false) {
            (_a = onMenuClosedRef.current) === null || _a === void 0 ? void 0 : _a.call(onMenuClosedRef, propsRef.current);
        }
        else if (!hidden && previousHidden !== false) {
            (_b = onMenuOpenedRef.current) === null || _b === void 0 ? void 0 : _b.call(onMenuOpenedRef, propsRef.current);
        }
    }, [hidden, previousHidden]);
    // Issue onDismissedCallback on unmount
    react["useEffect"](function () { return function () { var _a; return (_a = onMenuClosedRef.current) === null || _a === void 0 ? void 0 : _a.call(onMenuClosedRef, propsRef.current); }; }, []);
}
function useSubMenuState(_a, dismiss) {
    var hidden = _a.hidden, items = _a.items, theme = _a.theme, className = _a.className, id = _a.id, menuTarget = _a.target;
    var _b = react["useState"](), expandedMenuItemKey = _b[0], setExpandedMenuItemKey = _b[1];
    var _c = react["useState"](), submenuTarget = _c[0], setSubmenuTarget = _c[1];
    /** True if the menu was expanded by mouse click OR hover (as opposed to by keyboard) */
    var _d = react["useState"](), shouldFocusOnContainer = _d[0], setShouldFocusOnContainer = _d[1];
    var subMenuId = Object(useId["a" /* useId */])(COMPONENT_NAME, id);
    var closeSubMenu = react["useCallback"](function () {
        setShouldFocusOnContainer(undefined);
        setExpandedMenuItemKey(undefined);
        setSubmenuTarget(undefined);
    }, []);
    var openSubMenu = react["useCallback"](function (_a, target, focusContainer) {
        var submenuItemKey = _a.key;
        if (expandedMenuItemKey === submenuItemKey) {
            return;
        }
        target.focus();
        setShouldFocusOnContainer(focusContainer);
        setExpandedMenuItemKey(submenuItemKey);
        setSubmenuTarget(target);
    }, [expandedMenuItemKey]);
    react["useEffect"](function () {
        if (hidden) {
            closeSubMenu();
        }
    }, [hidden, closeSubMenu]);
    var onSubMenuDismiss = useOnSubmenuDismiss(dismiss, closeSubMenu);
    var getSubmenuProps = function () {
        var item = findItemByKeyFromItems(expandedMenuItemKey, items);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item, { target: menuTarget }),
                target: submenuTarget,
                onDismiss: onSubMenuDismiss,
                isSubMenu: true,
                id: subMenuId,
                shouldFocusOnMount: true,
                shouldFocusOnContainer: shouldFocusOnContainer,
                directionalHint: Object(rtl["a" /* getRTL */])(theme) ? DirectionalHint["a" /* DirectionalHint */].leftTopEdge : DirectionalHint["a" /* DirectionalHint */].rightTopEdge,
                className: className,
                gapSpace: 0,
                isBeakVisible: false,
            };
            if (item.subMenuProps) {
                Object(object["a" /* assign */])(submenuProps, item.subMenuProps);
            }
            if (item.preferMenuTargetAsEventTarget) {
                var onItemClick = item.onItemClick;
                submenuProps.onItemClick = getOnClickWithOverrideTarget(onItemClick, menuTarget);
            }
        }
        return submenuProps;
    };
    return [expandedMenuItemKey, openSubMenu, getSubmenuProps, onSubMenuDismiss];
}
function useShouldUpdateFocusOnMouseMove(_a) {
    var delayUpdateFocusOnHover = _a.delayUpdateFocusOnHover, hidden = _a.hidden;
    var shouldUpdateFocusOnMouseEvent = react["useRef"](!delayUpdateFocusOnHover);
    var gotMouseMove = react["useRef"](false);
    react["useEffect"](function () {
        shouldUpdateFocusOnMouseEvent.current = !delayUpdateFocusOnHover;
        gotMouseMove.current = hidden ? false : !delayUpdateFocusOnHover && gotMouseMove.current;
    }, [delayUpdateFocusOnHover, hidden]);
    var onMenuFocusCapture = react["useCallback"](function () {
        if (delayUpdateFocusOnHover) {
            shouldUpdateFocusOnMouseEvent.current = false;
        }
    }, [delayUpdateFocusOnHover]);
    return [shouldUpdateFocusOnMouseEvent, gotMouseMove, onMenuFocusCapture];
}
function usePreviousActiveElement(_a, targetWindow, hostElement) {
    var hidden = _a.hidden, onRestoreFocus = _a.onRestoreFocus;
    var previousActiveElement = react["useRef"]();
    var tryFocusPreviousActiveElement = react["useCallback"](function (options) {
        var _a, _b;
        if (onRestoreFocus) {
            onRestoreFocus(options);
        }
        else if (options === null || options === void 0 ? void 0 : options.documentContainsFocus) {
            // Make sure that the focus method actually exists
            // In some cases the object might exist but not be a real element.
            // This is primarily for IE 11 and should be removed once IE 11 is no longer in use.
            (_b = (_a = previousActiveElement.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    }, [onRestoreFocus]);
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        var _a, _b;
        if (!hidden) {
            var newElement = targetWindow === null || targetWindow === void 0 ? void 0 : targetWindow.document.activeElement;
            if (!((_a = hostElement.current) === null || _a === void 0 ? void 0 : _a.contains(newElement)) && newElement.tagName !== 'BODY') {
                previousActiveElement.current = newElement;
            }
        }
        else if (previousActiveElement.current) {
            tryFocusPreviousActiveElement({
                originalElement: previousActiveElement.current,
                containsFocus: true,
                documentContainsFocus: ((_b = Object(getDocument["a" /* getDocument */])()) === null || _b === void 0 ? void 0 : _b.hasFocus()) || false,
            });
            previousActiveElement.current = undefined;
        }
    }, [hidden, targetWindow === null || targetWindow === void 0 ? void 0 : targetWindow.document.activeElement, tryFocusPreviousActiveElement, hostElement]);
    return [tryFocusPreviousActiveElement];
}
function useKeyHandlers(_a, dismiss, hostElement, openSubMenu) {
    var theme = _a.theme, isSubMenu = _a.isSubMenu, _b = _a.focusZoneProps, _c = _b === void 0 ? {} : _b, checkForNoWrap = _c.checkForNoWrap, _d = _c.direction, focusZoneDirection = _d === void 0 ? FocusZone_types["a" /* FocusZoneDirection */].vertical : _d;
    /** True if the most recent keydown event was for alt (option) or meta (command). */
    var lastKeyDownWasAltOrMeta = react["useRef"]();
    /**
     * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
     * if so, stops event propagation and dismisses menu(s).
     * @param ev - The keyboard event.
     * @param shouldHandleKey - Returns whether we should handle this keyboard event.
     * @param dismissAllMenus - If true, dismiss all menus. Otherwise, dismiss only the current menu.
     * Only does anything if `shouldHandleKey` returns true.
     * @returns Whether the event was handled.
     */
    var keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
        var handled = false;
        if (shouldHandleKey(ev)) {
            dismiss(ev, dismissAllMenus);
            ev.preventDefault();
            ev.stopPropagation();
            handled = true;
        }
        return handled;
    };
    /**
     * Checks if the submenu should be closed
     */
    var shouldCloseSubMenu = function (ev) {
        var submenuCloseKey = Object(rtl["a" /* getRTL */])(theme) ? KeyCodes["a" /* KeyCodes */].right : KeyCodes["a" /* KeyCodes */].left;
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which !== submenuCloseKey || !isSubMenu) {
            return false;
        }
        return !!(focusZoneDirection === FocusZone_types["a" /* FocusZoneDirection */].vertical ||
            (checkForNoWrap && !Object(lib_focus["p" /* shouldWrapFocus */])(ev.target, 'data-no-horizontal-wrap')));
    };
    var shouldHandleKeyDown = function (ev) {
        return (
        // eslint-disable-next-line deprecation/deprecation
        ev.which === KeyCodes["a" /* KeyCodes */].escape ||
            shouldCloseSubMenu(ev) ||
            // eslint-disable-next-line deprecation/deprecation
            (ev.which === KeyCodes["a" /* KeyCodes */].up && (ev.altKey || ev.metaKey)));
    };
    var onKeyDown = function (ev) {
        // Take note if we are processing an alt (option) or meta (command) keydown.
        // See comment in shouldHandleKeyUp for reasoning.
        lastKeyDownWasAltOrMeta.current = isAltOrMeta(ev);
        // On Mac, pressing escape dismisses all levels of native context menus
        // eslint-disable-next-line deprecation/deprecation
        var dismissAllMenus = ev.which === KeyCodes["a" /* KeyCodes */].escape && (Object(osDetector["a" /* isMac */])() || Object(mobileDetector["a" /* isIOS */])());
        return keyHandler(ev, shouldHandleKeyDown, dismissAllMenus);
    };
    /**
     * We close the menu on key up only if ALL of the following are true:
     * - Most recent key down was alt or meta (command)
     * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
     *   expand/collapse the menu)
     * - We're not on a Mac (or iOS)
     *
     * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
     * closing any open context menus. There is not a similar behavior on Macs.
     */
    var shouldHandleKeyUp = function (ev) {
        var keyPressIsAltOrMetaAlone = lastKeyDownWasAltOrMeta.current && isAltOrMeta(ev);
        lastKeyDownWasAltOrMeta.current = false;
        return !!keyPressIsAltOrMetaAlone && !(Object(mobileDetector["a" /* isIOS */])() || Object(osDetector["a" /* isMac */])());
    };
    var onKeyUp = function (ev) {
        return keyHandler(ev, shouldHandleKeyUp, true /* dismissAllMenus */);
    };
    var onMenuKeyDown = function (ev) {
        // Mark as handled if onKeyDown returns true (for handling collapse cases)
        // or if we are attempting to expand a submenu
        var handled = onKeyDown(ev);
        if (handled || !hostElement.current) {
            return;
        }
        // If we have a modifier key being pressed, we do not want to move focus.
        // Otherwise, handle up and down keys.
        var hasModifier = !!(ev.altKey || ev.metaKey);
        // eslint-disable-next-line deprecation/deprecation
        var isUp = ev.which === KeyCodes["a" /* KeyCodes */].up;
        // eslint-disable-next-line deprecation/deprecation
        var isDown = ev.which === KeyCodes["a" /* KeyCodes */].down;
        if (!hasModifier && (isUp || isDown)) {
            var elementToFocus = isUp
                ? Object(lib_focus["h" /* getLastFocusable */])(hostElement.current, hostElement.current.lastChild, true)
                : Object(lib_focus["e" /* getFirstFocusable */])(hostElement.current, hostElement.current.firstChild, true);
            if (elementToFocus) {
                elementToFocus.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    var onItemKeyDown = function (item, ev) {
        var openKey = Object(rtl["a" /* getRTL */])(theme) ? KeyCodes["a" /* KeyCodes */].left : KeyCodes["a" /* KeyCodes */].right;
        if (!item.disabled &&
            // eslint-disable-next-line deprecation/deprecation
            (ev.which === openKey || ev.which === KeyCodes["a" /* KeyCodes */].enter || (ev.which === KeyCodes["a" /* KeyCodes */].down && (ev.altKey || ev.metaKey)))) {
            openSubMenu(item, ev.currentTarget);
            ev.preventDefault();
        }
    };
    return [onKeyDown, onKeyUp, onMenuKeyDown, onItemKeyDown];
}
function useScrollHandler(asyncTracker) {
    var isScrollIdle = react["useRef"](true);
    var scrollIdleTimeoutId = react["useRef"]();
    /**
     * Scroll handler for the callout to make sure the mouse events
     * for updating focus are not interacting during scroll
     */
    var onScroll = function () {
        if (!isScrollIdle.current && scrollIdleTimeoutId.current !== undefined) {
            asyncTracker.clearTimeout(scrollIdleTimeoutId.current);
            scrollIdleTimeoutId.current = undefined;
        }
        else {
            isScrollIdle.current = false;
        }
        scrollIdleTimeoutId.current = asyncTracker.setTimeout(function () {
            isScrollIdle.current = true;
        }, NavigationIdleDelay);
    };
    return [onScroll, isScrollIdle];
}
function useOnSubmenuDismiss(dismiss, closeSubMenu) {
    var isMountedRef = react["useRef"](false);
    react["useEffect"](function () {
        isMountedRef.current = true;
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    /**
     * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
     * after the component is unmounted. The isMountedRef is added to prevent
     * from calling setState() after unmount. Do NOT copy this pattern in synchronous
     * code.
     */
    var onSubMenuDismiss = function (ev, dismissAll) {
        if (dismissAll) {
            dismiss(ev, dismissAll);
        }
        else if (isMountedRef.current) {
            closeSubMenu();
        }
    };
    return onSubMenuDismiss;
}
function useSubmenuEnterTimer(_a, asyncTracker) {
    var _b = _a.subMenuHoverDelay, subMenuHoverDelay = _b === void 0 ? NavigationIdleDelay : _b;
    var enterTimerRef = react["useRef"](undefined);
    var cancelSubMenuTimer = function () {
        if (enterTimerRef.current !== undefined) {
            asyncTracker.clearTimeout(enterTimerRef.current);
            enterTimerRef.current = undefined;
        }
    };
    var startSubmenuTimer = function (onTimerExpired) {
        enterTimerRef.current = asyncTracker.setTimeout(function () {
            onTimerExpired();
            cancelSubMenuTimer();
        }, subMenuHoverDelay);
    };
    return [cancelSubMenuTimer, startSubmenuTimer, enterTimerRef];
}
function useMouseHandlers(props, isScrollIdle, subMenuEntryTimer, targetWindow, shouldUpdateFocusOnMouseEvent, gotMouseMove, expandedMenuItemKey, hostElement, startSubmenuTimer, cancelSubMenuTimer, openSubMenu, onSubMenuDismiss, dismiss) {
    var menuTarget = props.target;
    var onItemMouseEnterBase = function (item, ev, target) {
        if (shouldUpdateFocusOnMouseEvent.current) {
            gotMouseMove.current = true;
        }
        if (shouldIgnoreMouseEvent()) {
            return;
        }
        updateFocusOnMouseEvent(item, ev, target);
    };
    var onItemMouseMoveBase = function (item, ev, target) {
        var targetElement = ev.currentTarget;
        // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)
        if (shouldUpdateFocusOnMouseEvent.current) {
            gotMouseMove.current = true;
        }
        else {
            return;
        }
        if (!isScrollIdle.current ||
            subMenuEntryTimer.current !== undefined ||
            targetElement === (targetWindow === null || targetWindow === void 0 ? void 0 : targetWindow.document.activeElement)) {
            return;
        }
        updateFocusOnMouseEvent(item, ev, target);
    };
    var shouldIgnoreMouseEvent = function () {
        return !isScrollIdle.current || !gotMouseMove.current;
    };
    var onMouseItemLeave = function (item, ev) {
        var _a;
        if (shouldIgnoreMouseEvent()) {
            return;
        }
        cancelSubMenuTimer();
        if (expandedMenuItemKey !== undefined) {
            return;
        }
        /**
         * IE11 focus() method forces parents to scroll to top of element.
         * Edge and IE expose a setActive() function for focusable divs that
         * sets the page focus but does not scroll the parent element.
         */
        if (hostElement.current.setActive) {
            try {
                hostElement.current.setActive();
            }
            catch (e) {
                /* no-op */
            }
        }
        else {
            (_a = hostElement.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    /**
     * Handles updating focus when mouseEnter or mouseMove fire.
     * As part of updating focus, This function will also update
     * the expand/collapse state accordingly.
     */
    var updateFocusOnMouseEvent = function (item, ev, target) {
        var targetElement = target ? target : ev.currentTarget;
        if (item.key === expandedMenuItemKey) {
            return;
        }
        cancelSubMenuTimer();
        // If the menu is not expanded we can update focus without any delay
        if (expandedMenuItemKey === undefined) {
            targetElement.focus();
        }
        // Delay updating expanding/dismissing the submenu
        // and only set focus if we have not already done so
        if (hasSubmenu(item)) {
            ev.stopPropagation();
            startSubmenuTimer(function () {
                targetElement.focus();
                openSubMenu(item, targetElement, true);
            });
        }
        else {
            startSubmenuTimer(function () {
                onSubMenuDismiss(ev);
                targetElement.focus();
            });
        }
    };
    var onItemClick = function (item, ev) {
        onItemClickBase(item, ev, ev.currentTarget);
    };
    var onItemClickBase = function (item, ev, target) {
        var items = getSubmenuItems(item, { target: menuTarget });
        // Cancel an async menu item hover timeout action from being taken and instead
        // just trigger the click event instead.
        cancelSubMenuTimer();
        if (!hasSubmenu(item) && (!items || !items.length)) {
            // This is an item without a menu. Click it.
            executeItemClick(item, ev);
        }
        else {
            if (item.key !== expandedMenuItemKey) {
                // This has a collapsed sub menu. Expand it.
                // focus on the container by default when the menu is opened with a click event
                // this differentiates from a keyboard interaction triggering the click event
                var shouldFocusOnContainer = typeof props.shouldFocusOnContainer === 'boolean'
                    ? props.shouldFocusOnContainer
                    : ev.nativeEvent.pointerType === 'mouse';
                openSubMenu(item, target, shouldFocusOnContainer);
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    var onAnchorClick = function (item, ev) {
        executeItemClick(item, ev);
        ev.stopPropagation();
    };
    var executeItemClick = function (item, ev) {
        if (item.disabled || item.isDisabled) {
            return;
        }
        if (item.preferMenuTargetAsEventTarget) {
            overrideTarget(ev, menuTarget);
        }
        var shouldDismiss = false;
        if (item.onClick) {
            shouldDismiss = !!item.onClick(ev, item);
        }
        else if (props.onItemClick) {
            shouldDismiss = !!props.onItemClick(ev, item);
        }
        if (shouldDismiss || !ev.defaultPrevented) {
            dismiss(ev, true);
        }
    };
    return [
        onItemMouseEnterBase,
        onItemMouseMoveBase,
        onMouseItemLeave,
        onItemClick,
        onAnchorClick,
        executeItemClick,
        onItemClickBase,
    ];
}
//#endregion
var ContextualMenuBase = react["memo"](react["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var _a;
    var _b = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults), ref = _b.ref, props = Object(tslib_es6["e" /* __rest */])(_b, ["ref"]);
    var hostElement = react["useRef"](null);
    var asyncTracker = Object(useAsync["a" /* useAsync */])();
    var menuId = Object(useId["a" /* useId */])(COMPONENT_NAME, props.id);
    Object(useWarnings["a" /* useWarnings */])({
        name: COMPONENT_NAME,
        props: props,
        deprecations: {
            getMenuClassNames: 'styles',
        },
    });
    var dismiss = function (ev, dismissAll) { var _a; return (_a = props.onDismiss) === null || _a === void 0 ? void 0 : _a.call(props, ev, dismissAll); };
    var _c = Object(useTarget["a" /* useTarget */])(props.target, hostElement), targetRef = _c[0], targetWindow = _c[1];
    var tryFocusPreviousActiveElement = usePreviousActiveElement(props, targetWindow, hostElement)[0];
    var _d = useSubMenuState(props, dismiss), expandedMenuItemKey = _d[0], openSubMenu = _d[1], getSubmenuProps = _d[2], onSubMenuDismiss = _d[3];
    var _e = useShouldUpdateFocusOnMouseMove(props), shouldUpdateFocusOnMouseEvent = _e[0], gotMouseMove = _e[1], onMenuFocusCapture = _e[2];
    var _f = useScrollHandler(asyncTracker), onScroll = _f[0], isScrollIdle = _f[1];
    var _g = useSubmenuEnterTimer(props, asyncTracker), cancelSubMenuTimer = _g[0], startSubmenuTimer = _g[1], subMenuEntryTimer = _g[2];
    var responsiveMode = Object(useResponsiveMode["a" /* useResponsiveMode */])(hostElement, props.responsiveMode);
    useVisibility(props, targetWindow);
    var _h = useKeyHandlers(props, dismiss, hostElement, openSubMenu), onKeyDown = _h[0], onKeyUp = _h[1], onMenuKeyDown = _h[2], onItemKeyDown = _h[3];
    var _j = useMouseHandlers(props, isScrollIdle, subMenuEntryTimer, targetWindow, shouldUpdateFocusOnMouseEvent, gotMouseMove, expandedMenuItemKey, hostElement, startSubmenuTimer, cancelSubMenuTimer, openSubMenu, onSubMenuDismiss, dismiss), onItemMouseEnterBase = _j[0], onItemMouseMoveBase = _j[1], onMouseItemLeave = _j[2], onItemClick = _j[3], onAnchorClick = _j[4], executeItemClick = _j[5], onItemClickBase = _j[6];
    //#region Render helpers
    var onDefaultRenderMenuList = function (menuListProps, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames, defaultRender) {
        var indexCorrection = 0;
        var items = menuListProps.items, totalItemCount = menuListProps.totalItemCount, hasCheckmarks = menuListProps.hasCheckmarks, hasIcons = menuListProps.hasIcons;
        return (react["createElement"]("ul", { className: menuClassNames.list, onKeyDown: onKeyDown, onKeyUp: onKeyUp, role: 'presentation' }, items.map(function (item, index) {
            var menuItem = renderMenuItem(item, index, indexCorrection, totalItemCount, hasCheckmarks, hasIcons, menuClassNames);
            if (item.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Divider && item.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Header) {
                var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                indexCorrection += indexIncrease;
            }
            return menuItem;
        })));
    };
    var renderFocusZone = function (children, adjustedFocusZoneProps) {
        var _a = props.focusZoneAs, ChildrenRenderer = _a === void 0 ? FocusZone["a" /* FocusZone */] : _a;
        return react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({}, adjustedFocusZoneProps), children);
    };
    /**
     * !!!IMPORTANT!!! Avoid mutating `item: IContextualMenuItem` argument. It will
     * cause the menu items to always re-render because the component update is based on shallow comparison.
     */
    var renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames) {
        var _a;
        var renderedItems = [];
        var iconProps = item.iconProps || { iconName: 'None' };
        var getItemClassNames = item.getItemClassNames, // eslint-disable-line deprecation/deprecation
        itemProps = item.itemProps;
        var styles = itemProps ? itemProps.styles : undefined;
        // We only send a dividerClassName when the item to be rendered is a divider.
        // For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === ContextualMenu_types["a" /* ContextualMenuItemType */].Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        // eslint-disable-next-line deprecation/deprecation
        var itemClassNames;
        // IContextualMenuItem#getItemClassNames for backwards compatibility
        // otherwise uses mergeStyles for class names.
        if (getItemClassNames) {
            itemClassNames = getItemClassNames(props.theme, isItemDisabled(item), expandedMenuItemKey === item.key, !!getIsChecked(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
        }
        else {
            var itemStyleProps = {
                theme: props.theme,
                disabled: isItemDisabled(item),
                expanded: expandedMenuItemKey === item.key,
                checked: !!getIsChecked(item),
                isAnchorLink: !!item.href,
                knownIcon: iconProps.iconName !== 'None',
                itemClassName: item.className,
                dividerClassName: dividerClassName,
                iconClassName: iconProps.className,
                subMenuClassName: subMenuIconClassName,
                primaryDisabled: item.primaryDisabled,
            };
            // We need to generate default styles then override if styles are provided
            // since the ContextualMenu currently handles item classNames.
            itemClassNames = getContextualMenuItemClassNames(_getMenuItemStylesFunction((_a = menuClassNames.subComponentStyles) === null || _a === void 0 ? void 0 : _a.menuItem, styles), itemStyleProps);
        }
        // eslint-disable-next-line deprecation/deprecation
        if (item.text === '-' || item.name === '-') {
            item.itemType = ContextualMenu_types["a" /* ContextualMenuItemType */].Divider;
        }
        switch (item.itemType) {
            case ContextualMenu_types["a" /* ContextualMenuItemType */].Divider:
                renderedItems.push(renderSeparator(index, itemClassNames));
                break;
            case ContextualMenu_types["a" /* ContextualMenuItemType */].Header:
                renderedItems.push(renderSeparator(index, itemClassNames));
                var headerItem = renderHeaderMenuItem(item, itemClassNames, menuClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case ContextualMenu_types["a" /* ContextualMenuItemType */].Section:
                renderedItems.push(renderSectionItem(item, itemClassNames, menuClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var defaultRenderNormalItem = function () {
                    return renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                };
                var menuItem = props.onRenderContextualMenuItem
                    ? props.onRenderContextualMenuItem(item, defaultRenderNormalItem)
                    : defaultRenderNormalItem();
                renderedItems.push(renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        // Since multiple nodes *could* be rendered, wrap them all in a fragment with this item's key.
        // This ensures the reconciler handles multi-item output per-node correctly and does not re-mount content.
        return react["createElement"](react["Fragment"], { key: item.key }, renderedItems);
    };
    var defaultMenuItemRenderer = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames) {
        var index = item.index, focusableElementIndex = item.focusableElementIndex, totalItemCount = item.totalItemCount, hasCheckmarks = item.hasCheckmarks, hasIcons = item.hasIcons;
        return renderMenuItem(item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons, menuClassNames);
    };
    var renderSectionItem = function (sectionItem, 
    // eslint-disable-next-line deprecation/deprecation
    itemClassNames, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames, index, hasCheckmarks, hasIcons) {
        var sectionProps = sectionItem.sectionProps;
        if (!sectionProps) {
            return;
        }
        var headerItem;
        var groupProps;
        if (sectionProps.title) {
            var headerContextualMenuItem = undefined;
            var ariaLabelledby = '';
            if (typeof sectionProps.title === 'string') {
                // Since title is a user-facing string, it needs to be stripped
                // of whitespace in order to build a valid element ID
                var id_1 = menuId + sectionProps.title.replace(/\s/g, '');
                headerContextualMenuItem = {
                    key: "section-".concat(sectionProps.title, "-title"),
                    itemType: ContextualMenu_types["a" /* ContextualMenuItemType */].Header,
                    text: sectionProps.title,
                    id: id_1,
                };
                ariaLabelledby = id_1;
            }
            else {
                var id_2 = sectionProps.title.id || menuId + sectionProps.title.key.replace(/\s/g, '');
                headerContextualMenuItem = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, sectionProps.title), { id: id_2 });
                ariaLabelledby = id_2;
            }
            if (headerContextualMenuItem) {
                groupProps = {
                    role: 'group',
                    'aria-labelledby': ariaLabelledby,
                };
                headerItem = renderHeaderMenuItem(headerContextualMenuItem, itemClassNames, menuClassNames, index, hasCheckmarks, hasIcons);
            }
        }
        if (sectionProps.items && sectionProps.items.length > 0) {
            var correctedIndex_1 = 0;
            return (react["createElement"]("li", { role: "presentation", key: sectionProps.key || sectionItem.key || "section-".concat(index) },
                react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, groupProps),
                    react["createElement"]("ul", { className: menuClassNames.list, role: "presentation" },
                        sectionProps.topDivider && renderSeparator(index, itemClassNames, true, true),
                        headerItem && renderListItem(headerItem, sectionItem.key || index, itemClassNames, sectionItem.title),
                        sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
                            var menuItem = renderMenuItem(contextualMenuItem, itemsIndex, correctedIndex_1, getItemCount(sectionProps.items), hasCheckmarks, hasIcons, menuClassNames);
                            if (contextualMenuItem.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Divider &&
                                contextualMenuItem.itemType !== ContextualMenu_types["a" /* ContextualMenuItemType */].Header) {
                                var indexIncrease = contextualMenuItem.customOnRenderListLength
                                    ? contextualMenuItem.customOnRenderListLength
                                    : 1;
                                correctedIndex_1 += indexIncrease;
                            }
                            return menuItem;
                        }),
                        sectionProps.bottomDivider && renderSeparator(index, itemClassNames, false, true)))));
        }
    };
    var renderListItem = function (content, key, classNames, // eslint-disable-line deprecation/deprecation
    title) {
        return (react["createElement"]("li", { role: "presentation", title: title, key: key, className: classNames.item }, content));
    };
    var renderSeparator = function (index, classNames, // eslint-disable-line deprecation/deprecation
    top, fromSection) {
        if (fromSection || index > 0) {
            return (react["createElement"]("li", { role: "separator", key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'), className: classNames.divider, "aria-hidden": "true" }));
        }
        return null;
    };
    var renderNormalItem = function (item, classNames, // eslint-disable-line deprecation/deprecation
    index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return item.onRender(Object(tslib_es6["a" /* __assign */])({ 'aria-posinset': focusableElementIndex + 1, 'aria-setsize': totalItemCount }, item), dismiss);
        }
        var contextualMenuItemAs = props.contextualMenuItemAs;
        var commonProps = {
            item: item,
            classNames: classNames,
            index: index,
            focusableElementIndex: focusableElementIndex,
            totalItemCount: totalItemCount,
            hasCheckmarks: hasCheckmarks,
            hasIcons: hasIcons,
            contextualMenuItemAs: contextualMenuItemAs,
            onItemMouseEnter: onItemMouseEnterBase,
            onItemMouseLeave: onMouseItemLeave,
            onItemMouseMove: onItemMouseMoveBase,
            onItemMouseDown: ContextualMenu_base_onItemMouseDown,
            executeItemClick: executeItemClick,
            onItemKeyDown: onItemKeyDown,
            expandedMenuItemKey: expandedMenuItemKey,
            openSubMenu: openSubMenu,
            dismissSubMenu: onSubMenuDismiss,
            dismissMenu: dismiss,
        };
        if (item.href) {
            var ContextualMenuAnchorAs = ContextualMenuAnchor_ContextualMenuAnchor;
            if (item.contextualMenuItemWrapperAs) {
                ContextualMenuAnchorAs = Object(composeComponentAs["a" /* composeComponentAs */])(item.contextualMenuItemWrapperAs, ContextualMenuAnchorAs);
            }
            return react["createElement"](ContextualMenuAnchorAs, Object(tslib_es6["a" /* __assign */])({}, commonProps, { onItemClick: onAnchorClick }));
        }
        if (item.split && hasSubmenu(item)) {
            var ContextualMenuSplitButtonAs = ContextualMenuSplitButton_ContextualMenuSplitButton;
            if (item.contextualMenuItemWrapperAs) {
                ContextualMenuSplitButtonAs = Object(composeComponentAs["a" /* composeComponentAs */])(item.contextualMenuItemWrapperAs, ContextualMenuSplitButtonAs);
            }
            return (react["createElement"](ContextualMenuSplitButtonAs, Object(tslib_es6["a" /* __assign */])({}, commonProps, { onItemClick: onItemClick, onItemClickBase: onItemClickBase, onTap: cancelSubMenuTimer })));
        }
        var ContextualMenuButtonAs = ContextualMenuButton_ContextualMenuButton;
        if (item.contextualMenuItemWrapperAs) {
            ContextualMenuButtonAs = Object(composeComponentAs["a" /* composeComponentAs */])(item.contextualMenuItemWrapperAs, ContextualMenuButtonAs);
        }
        return react["createElement"](ContextualMenuButtonAs, Object(tslib_es6["a" /* __assign */])({}, commonProps, { onItemClick: onItemClick, onItemClickBase: onItemClickBase }));
    };
    var renderHeaderMenuItem = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    itemClassNames, 
    // eslint-disable-next-line deprecation/deprecation
    menuClassNames, index, hasCheckmarks, hasIcons) {
        var ChildrenRenderer = ContextualMenuItem;
        if (item.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(item.contextualMenuItemAs, ChildrenRenderer);
        }
        if (props.contextualMenuItemAs) {
            ChildrenRenderer = Object(composeComponentAs["a" /* composeComponentAs */])(props.contextualMenuItemAs, ChildrenRenderer);
        }
        var itemProps = item.itemProps, id = item.id;
        var divHtmlProperties = itemProps && Object(properties["h" /* getNativeProps */])(itemProps, properties["f" /* divProperties */]);
        return (
        // eslint-disable-next-line deprecation/deprecation
        react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ id: id, className: menuClassNames.header }, divHtmlProperties, { style: item.style }),
            react["createElement"](ChildrenRenderer, Object(tslib_es6["a" /* __assign */])({ item: item, classNames: itemClassNames, index: index, onCheckmarkClick: hasCheckmarks ? onItemClick : undefined, hasIcons: hasIcons }, itemProps))));
    };
    //#endregion
    //#region Main render
    var isBeakVisible = props.isBeakVisible;
    var items = props.items, labelElementId = props.labelElementId, id = props.id, className = props.className, beakWidth = props.beakWidth, directionalHint = props.directionalHint, directionalHintForRTL = props.directionalHintForRTL, alignTargetEdge = props.alignTargetEdge, gapSpace = props.gapSpace, coverTarget = props.coverTarget, ariaLabel = props.ariaLabel, doNotLayer = props.doNotLayer, target = props.target, bounds = props.bounds, useTargetWidth = props.useTargetWidth, useTargetAsMinWidth = props.useTargetAsMinWidth, directionalHintFixed = props.directionalHintFixed, shouldFocusOnMount = props.shouldFocusOnMount, shouldFocusOnContainer = props.shouldFocusOnContainer, title = props.title, styles = props.styles, theme = props.theme, calloutProps = props.calloutProps, _k = props.onRenderSubMenu, onRenderSubMenu = _k === void 0 ? onDefaultRenderSubMenu : _k, _l = props.onRenderMenuList, onRenderMenuList = _l === void 0 ? function (menuListProps, defaultRender) { return onDefaultRenderMenuList(menuListProps, classNames, defaultRender); } : _l, focusZoneProps = props.focusZoneProps, 
    // eslint-disable-next-line deprecation/deprecation
    getMenuClassNames = props.getMenuClassNames;
    var classNames = getMenuClassNames
        ? getMenuClassNames(theme, className)
        : ContextualMenu_base_getClassNames(styles, {
            theme: theme,
            className: className,
        });
    var hasIcons = itemsHaveIcons(items);
    function itemsHaveIcons(contextualMenuItems) {
        for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
            var item = contextualMenuItems_1[_i];
            if (item.iconProps) {
                return true;
            }
            if (item.itemType === ContextualMenu_types["a" /* ContextualMenuItemType */].Section &&
                item.sectionProps &&
                itemsHaveIcons(item.sectionProps.items)) {
                return true;
            }
        }
        return false;
    }
    var adjustedFocusZoneProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ direction: FocusZone_types["a" /* FocusZoneDirection */].vertical, handleTabKey: FocusZone_types["b" /* FocusZoneTabbableElements */].all, isCircularNavigation: true, 'data-tabster': '{"uncontrolled": {}, "focusable": { "excludeFromMover": true }}' }, focusZoneProps), { className: Object(css["a" /* css */])(classNames.root, (_a = props.focusZoneProps) === null || _a === void 0 ? void 0 : _a.className) });
    var hasCheckmarks = canAnyMenuItemsCheck(items);
    var submenuProps = expandedMenuItemKey && props.hidden !== true ? getSubmenuProps() : null;
    isBeakVisible = isBeakVisible === undefined ? responsiveMode <= withResponsiveMode["a" /* ResponsiveMode */].medium : isBeakVisible;
    /**
     * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
     */
    var contextMenuStyle;
    var targetAsHtmlElement = targetRef.current;
    if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
        var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
        var targetWidth = targetBoundingRect.width - 2; /* Accounts for 1px border */
        if (useTargetWidth) {
            contextMenuStyle = {
                width: targetWidth,
            };
        }
        else if (useTargetAsMinWidth) {
            contextMenuStyle = {
                minWidth: targetWidth,
            };
        }
    }
    // The menu should only return if items were provided, if no items were provided then it should not appear.
    if (items && items.length > 0) {
        var totalItemCount_1 = getItemCount(items);
        var calloutStyles_1 = classNames.subComponentStyles
            ? classNames.subComponentStyles.callout
            : undefined;
        return (react["createElement"](MenuContext.Consumer, null, function (menuContext) { return (react["createElement"](Callout["a" /* Callout */], Object(tslib_es6["a" /* __assign */])({ styles: calloutStyles_1, onRestoreFocus: tryFocusPreviousActiveElement }, calloutProps, { target: target || menuContext.target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: Object(css["a" /* css */])('ms-ContextualMenu-Callout', calloutProps && calloutProps.className), setInitialFocus: shouldFocusOnMount, onDismiss: props.onDismiss || menuContext.onDismiss, onScroll: onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed, alignTargetEdge: alignTargetEdge, hidden: props.hidden || menuContext.hidden, ref: forwardedRef }),
            react["createElement"]("div", { style: contextMenuStyle, ref: hostElement, id: id, className: classNames.container, tabIndex: shouldFocusOnContainer ? 0 : -1, onKeyDown: onMenuKeyDown, onKeyUp: onKeyUp, onFocusCapture: onMenuFocusCapture, "aria-label": ariaLabel, "aria-labelledby": labelElementId, role: 'menu' },
                title && react["createElement"]("div", { className: classNames.title },
                    " ",
                    title,
                    " "),
                items && items.length
                    ? renderFocusZone(onRenderMenuList({
                        ariaLabel: ariaLabel,
                        items: items,
                        totalItemCount: totalItemCount_1,
                        hasCheckmarks: hasCheckmarks,
                        hasIcons: hasIcons,
                        defaultMenuItemRenderer: function (item) {
                            return defaultMenuItemRenderer(item, classNames);
                        },
                        labelElementId: labelElementId,
                    }, function (menuListProps, defaultRender) { return onDefaultRenderMenuList(menuListProps, classNames, defaultRender); }), adjustedFocusZoneProps)
                    : null,
                submenuProps && onRenderSubMenu(submenuProps, onDefaultRenderSubMenu)),
            react["createElement"](useFocusRects["a" /* FocusRects */], null))); }));
    }
    else {
        return null;
    }
    //#endregion
}), function (prevProps, newProps) {
    if (!newProps.shouldUpdateWhenHidden && prevProps.hidden && newProps.hidden) {
        // Do not update when hidden.
        return true;
    }
    return Object(object["c" /* shallowCompare */])(prevProps, newProps);
});
ContextualMenuBase.displayName = 'ContextualMenuBase';
/**
 * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
 */
function isAltOrMeta(ev) {
    // eslint-disable-next-line deprecation/deprecation
    return ev.which === KeyCodes["a" /* KeyCodes */].alt || ev.key === 'Meta';
}
function ContextualMenu_base_onItemMouseDown(item, ev) {
    var _a;
    (_a = item.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(item, item, ev);
}
function onDefaultRenderSubMenu(subMenuProps, defaultRender) {
    throw Error('ContextualMenuBase: onRenderSubMenu callback is null or undefined. ' +
        'Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.');
}
/**
 * Returns the item that matches a given key if any.
 * @param key - The key of the item to match
 * @param items - The items to look for the key
 */
function findItemByKeyFromItems(key, items) {
    for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
        var item = items_3[_i];
        if (item.itemType === ContextualMenu_types["a" /* ContextualMenuItemType */].Section && item.sectionProps) {
            var match = findItemByKeyFromItems(key, item.sectionProps.items);
            if (match) {
                return match;
            }
        }
        else if (item.key && item.key === key) {
            return item;
        }
    }
}
function getOnClickWithOverrideTarget(onClick, target) {
    return onClick
        ? function (ev, item) {
            overrideTarget(ev, target);
            return onClick(ev, item);
        }
        : onClick;
}
function overrideTarget(ev, target) {
    if (ev && target) {
        ev.persist();
        if (target instanceof Event) {
            ev.target = target.target;
        }
        else if (target instanceof Element) {
            ev.target = target;
        }
    }
}
//# sourceMappingURL=ContextualMenu.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.styles.js


var ContextualMenu_styles_GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open',
};
var ContextualMenu_styles_getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(ContextualMenu_styles_GlobalClassNames, theme);
    var fonts = theme.fonts, semanticColors = theme.semanticColors, effects = theme.effects;
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            classNames.isopen,
            {
                backgroundColor: semanticColors.menuBackground,
                minWidth: '180px',
            },
            className,
        ],
        container: [
            classNames.container,
            {
                selectors: {
                    ':focus': { outline: 0 },
                },
            },
        ],
        list: [
            classNames.list,
            classNames.isopen,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
            },
        ],
        header: [
            classNames.header,
            fonts.small,
            {
                fontWeight: lib["e" /* FontWeights */].semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left',
            },
        ],
        title: [
            classNames.title,
            {
                fontSize: fonts.mediumPlus.fontSize,
                paddingRight: '14px',
                paddingLeft: '14px',
                paddingBottom: '5px',
                paddingTop: '5px',
                backgroundColor: semanticColors.menuItemBackgroundPressed,
            },
        ],
        subComponentStyles: {
            callout: {
                root: {
                    boxShadow: effects.elevation8,
                },
            },
            menuItem: {},
        },
    };
};
//# sourceMappingURL=ContextualMenu.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.js





function ContextualMenu_onRenderSubMenu(subMenuProps) {
    return react["createElement"](LocalContextualMenu, Object(tslib_es6["a" /* __assign */])({}, subMenuProps));
}
// This is to prevent cyclic import with ContextualMenu.base.tsx.
var LocalContextualMenu = Object(styled["a" /* styled */])(ContextualMenuBase, ContextualMenu_styles_getStyles, function (props) { return ({
    onRenderSubMenu: props.onRenderSubMenu
        ? Object(composeRenderFunction["a" /* composeRenderFunction */])(props.onRenderSubMenu, ContextualMenu_onRenderSubMenu)
        : ContextualMenu_onRenderSubMenu,
}); }, { scope: 'ContextualMenu' });
/**
 * ContextualMenu description
 */
var ContextualMenu = LocalContextualMenu;
ContextualMenu.displayName = 'ContextualMenu';
//# sourceMappingURL=ContextualMenu.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.classNames.js
var BaseButton_classNames = __webpack_require__("M1CV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/SplitButton/SplitButton.classNames.js


var SplitButtonGlobalClassNames = {
    msSplitButtonDivider: 'ms-SplitButton-divider',
};
var SplitButton_classNames_getSplitButtonClassNames = Object(memoize["b" /* memoizeFunction */])(function (styles, disabled, expanded, checked, primaryDisabled) {
    return {
        root: Object(lib["F" /* mergeStyles */])(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked], primaryDisabled &&
            !disabled && [
            {
                ':focus': styles.splitButtonMenuFocused,
            },
        ]),
        splitButtonContainer: Object(lib["F" /* mergeStyles */])(styles.splitButtonContainer, !disabled &&
            checked && [
            styles.splitButtonContainerChecked,
            {
                ':hover': styles.splitButtonContainerCheckedHovered,
            },
        ], !disabled &&
            !checked && [
            {
                ':hover': styles.splitButtonContainerHovered,
                ':focus': styles.splitButtonContainerFocused,
            },
        ], disabled && styles.splitButtonContainerDisabled),
        icon: Object(lib["F" /* mergeStyles */])(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled, !disabled && primaryDisabled && styles.splitButtonMenuIcon),
        flexContainer: Object(lib["F" /* mergeStyles */])(styles.splitButtonFlexContainer),
        divider: Object(lib["F" /* mergeStyles */])(SplitButtonGlobalClassNames.msSplitButtonDivider, styles.splitButtonDivider, (primaryDisabled || disabled) && styles.splitButtonDividerDisabled),
    };
});
//# sourceMappingURL=SplitButton.classNames.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.js










var BaseButton_TouchIdleDelay = 500; /* ms */
var BaseButton_COMPONENT_NAME = 'BaseButton';
/**
 * {@docCategory Button}
 */
var BaseButton_BaseButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BaseButton, _super);
    function BaseButton(props) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = react["createRef"]();
        _this._splitButtonContainer = react["createRef"]();
        _this._mergedRef = Object(createMergedRef["a" /* createMergedRef */])();
        _this._renderedVisibleMenu = false;
        _this._getMemoizedMenuButtonKeytipProps = Object(memoize["b" /* memoizeFunction */])(function (keytipProps) {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, keytipProps), { hasMenu: true });
        });
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
                var className = iconProps.className, imageProps = iconProps.imageProps, rest = Object(tslib_es6["e" /* __rest */])(iconProps, ["className", "imageProps"]);
                // If the styles prop is specified as part of iconProps, fall back to regular Icon as FontIcon and ImageIcon
                // do not have this prop.
                if (iconProps.styles) {
                    return react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({ className: Object(css["a" /* css */])(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
                if (iconProps.iconName) {
                    return react["createElement"](FontIcon["a" /* FontIcon */], Object(tslib_es6["a" /* __assign */])({ className: Object(css["a" /* css */])(_this._classNames.icon, className) }, rest));
                }
                if (imageProps) {
                    return react["createElement"](ImageIcon, Object(tslib_es6["a" /* __assign */])({ className: Object(css["a" /* css */])(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a, _b, _c, _d;
            var text = (_a = _this.props, _a.text), children = _a.children, 
            // eslint-disable-next-line deprecation/deprecation
            secondaryText = (_b = _a.secondaryText, _b === void 0 ? _this.props.description : _b), onRenderText = (_c = _a.onRenderText, _c === void 0 ? _this._onRenderText : _c), onRenderDescription = (_d = _a.onRenderDescription, _d === void 0 ? _this._onRenderDescription : _d);
            if (text || typeof children === 'string' || secondaryText) {
                return (react["createElement"]("span", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (react["createElement"]("span", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            var _a;
            // eslint-disable-next-line deprecation/deprecation
            var secondaryText = (_a = props.secondaryText, _a === void 0 ? _this.props.description : _a);
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (react["createElement"]("span", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (react["createElement"]("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return react["createElement"](FontIcon["a" /* FontIcon */], Object(tslib_es6["a" /* __assign */])({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var MenuType = _this.props.menuAs ? Object(composeComponentAs["a" /* composeComponentAs */])(_this.props.menuAs, ContextualMenu) : ContextualMenu;
            return react["createElement"](MenuType, Object(tslib_es6["a" /* __assign */])({}, menuProps));
        };
        _this._onDismissMenu = function (ev) {
            var menuProps = _this.props.menuProps;
            if (menuProps && menuProps.onDismiss) {
                menuProps.onDismiss(ev);
            }
            if (!ev || !ev.defaultPrevented) {
                _this._dismissMenu();
            }
        };
        _this._dismissMenu = function () {
            _this._menuShouldFocusOnMount = undefined;
            _this._menuShouldFocusOnContainer = undefined;
            _this.setState({ menuHidden: true });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                _this._menuShouldFocusOnContainer = shouldFocusOnContainer;
                _this._menuShouldFocusOnMount = shouldFocusOnMount;
                _this._renderedVisibleMenu = true;
                _this.setState({ menuHidden: false });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            _this.state.menuHidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
        };
        _this._onSplitContainerFocusCapture = function (ev) {
            var container = _this._splitButtonContainer.current;
            // If the target is coming from the portal we do not need to set focus on the container.
            if (!container || (ev.target && Object(portalContainsElement["a" /* portalContainsElement */])(ev.target, container))) {
                return;
            }
            // We should never be able to focus the individual buttons in a split button. Focus
            // should always remain on the container.
            container.focus();
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (!_this.state.menuHidden) {
                _this._dismissMenu();
            }
            // toggle split buttons need two separate targets, even for touch
            var singleTouchTarget = _this._processingTouch && !_this.props.toggle;
            if (!singleTouchTarget && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (singleTouchTarget) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            // eslint-disable-next-line deprecation/deprecation
            if (_this.props.disabled && (ev.which === KeyCodes["a" /* KeyCodes */].enter || ev.which === KeyCodes["a" /* KeyCodes */].space)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                // eslint-disable-next-line deprecation/deprecation
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === KeyCodes["a" /* KeyCodes */].enter || ev.which === KeyCodes["a" /* KeyCodes */].space) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            var _a;
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // eslint-disable-next-line deprecation/deprecation
            var isUp = ev.which === KeyCodes["a" /* KeyCodes */].up;
            // eslint-disable-next-line deprecation/deprecation
            var isDown = ev.which === KeyCodes["a" /* KeyCodes */].down;
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this.props);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === KeyCodes["a" /* KeyCodes */].enter || ev.which === KeyCodes["a" /* KeyCodes */].space) {
                // We manually set the focus visibility to true if opening via Enter or Space to account for the scenario where
                // a user clicks on the button, closes the menu and then opens it via keyboard. In this scenario our default logic
                // for setting focus visibility is not triggered since there is no keyboard navigation present beforehand.
                Object(setFocusVisibility["b" /* setFocusVisibility */])(true, ev.target, (_a = _this.context) === null || _a === void 0 ? void 0 : _a.registeredProviders);
            }
            if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
                // Suppose a menu, with shouldFocusOnMount: false, is open, and user wants to keyboard to the menu items
                // We need to re-render the menu with shouldFocusOnMount as true.
                if (!_this.state.menuHidden && _this.props.menuProps) {
                    var currentShouldFocusOnMount = _this._menuShouldFocusOnMount !== undefined
                        ? _this._menuShouldFocusOnMount
                        : _this.props.menuProps.shouldFocusOnMount;
                    if (!currentShouldFocusOnMount) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        _this._menuShouldFocusOnMount = true;
                        _this.forceUpdate();
                    }
                }
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton &&
                _this._splitButtonContainer.current &&
                !('onpointerdown' in _this._splitButtonContainer.current)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var _a;
            var onMenuClick = (_a = _this.props, _a.onMenuClick), menuProps = _a.menuProps;
            if (onMenuClick) {
                onMenuClick(ev, _this.props);
            }
            // focus on the container by default when the menu is opened with a click event
            // this differentiates from a keyboard interaction triggering the click event
            var shouldFocusOnContainer = typeof (menuProps === null || menuProps === void 0 ? void 0 : menuProps.shouldFocusOnContainer) === 'boolean'
                ? menuProps.shouldFocusOnContainer
                : ev.nativeEvent.pointerType === 'mouse';
            if (!ev.defaultPrevented) {
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        Object(warnConditionallyRequiredProps["a" /* warnConditionallyRequiredProps */])(BaseButton_COMPONENT_NAME, props, ['menuProps', 'onClick'], 'split', _this.props.split);
        Object(warnDeprecations["a" /* warnDeprecations */])(BaseButton_COMPONENT_NAME, props, {
            rootProps: undefined,
            description: 'secondaryText',
            toggled: 'checked',
        });
        _this._labelId = Object(getId["a" /* getId */])();
        _this._descriptionId = Object(getId["a" /* getId */])();
        _this._ariaDescriptionId = Object(getId["a" /* getId */])();
        _this.state = {
            menuHidden: true,
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: false,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        var ariaDescription = (_a = this.props, _a.ariaDescription), ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, primaryDisabled = _a.primaryDisabled, 
        // eslint-disable-next-line deprecation/deprecation
        secondaryText = (_b = _a.secondaryText, _b === void 0 ? this.props.description : _b), href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, toggle = _a.toggle, getClassNames = _a.getClassNames, role = _a.role;
        var menuHidden = this.state.menuHidden;
        // Button is disabled if the whole button (in case of splitButton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !menuHidden, !!this.props.menuProps, this.props.split, !!allowDisabledFocus)
            : Object(BaseButton_classNames["b" /* getBaseButtonClassNames */])(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, !!this.props.menuProps, checked, !menuHidden, this.props.split);
        var _ariaDescriptionId = (_c = this, _c._ariaDescriptionId), _labelId = _c._labelId, _descriptionId = _c._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Object(properties["h" /* getNativeProps */])(
        // eslint-disable-next-line deprecation/deprecation
        Object(object["a" /* assign */])(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? properties["a" /* anchorProperties */] : properties["c" /* buttonProperties */], [
            'disabled', // let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props
        var resolvedAriaLabel = ariaLabel || nativeProps['aria-label'];
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of
        // aria-describedby. Otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText && this.props.onRenderDescription !== BaseComponent["a" /* nullRender */]) {
            // for buttons like CompoundButton with a valid onRenderDescription, we need to set an ariaDescribedBy
            // for buttons that do not render anything (via nullRender), we should not set an ariaDescribedBy
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute)
        // and no ariaLabel is specified, set the labelledby element.
        // Otherwise, the button is labeled implicitly by the descendent text on the button (if it exists).
        var ariaLabelledBy = undefined;
        if (nativeProps['aria-labelledby']) {
            ariaLabelledBy = nativeProps['aria-labelledby'];
        }
        else if (ariaDescribedBy && !resolvedAriaLabel) {
            ariaLabelledBy = this._hasText() ? _labelId : undefined;
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton
            ? false
            : true;
        var isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox';
        // if isCheckboxTypeRole, always return a checked value.
        // Otherwise only return checked value if toggle is set to true.
        // This is because role="checkbox" always needs to have an aria-checked value
        // but our checked prop only sets aria-pressed if we mark the button as a toggle="true"
        var checkedOrPressedValue = isCheckboxTypeRole ? !!checked : toggle === true ? !!checked : undefined;
        var buttonProps = Object(object["a" /* assign */])(nativeProps, (_d = {
                className: this._classNames.root,
                // eslint-disable-next-line deprecation/deprecation
                ref: this._mergedRef(this.props.elementRef, this._buttonElement),
                disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
                onKeyDown: this._onKeyDown,
                onKeyPress: this._onKeyPress,
                onKeyUp: this._onKeyUp,
                onMouseDown: this._onMouseDown,
                onMouseUp: this._onMouseUp,
                onClick: this._onClick,
                'aria-label': resolvedAriaLabel,
                'aria-labelledby': ariaLabelledBy,
                'aria-describedby': ariaDescribedBy,
                'aria-disabled': isPrimaryButtonDisabled,
                'data-is-focusable': dataIsFocusable
            },
            // aria-pressed attribute should only be present for toggle buttons
            // aria-checked attribute should only be present for toggle buttons with checkbox type role
            _d[isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed'] = checkedOrPressedValue,
            _d));
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            var id = (_e = this.props.menuProps.id, _e === void 0 ? "".concat(this._labelId, "-menu") : _e);
            Object(object["a" /* assign */])(buttonProps, {
                'aria-expanded': !menuHidden,
                'aria-controls': !menuHidden ? id : null,
                'aria-haspopup': true,
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the
        // primary action. This gives more hit target space for touch environments. We're setting the onpointerdown here,
        // because React does not support Pointer events yet.
        if (this._isSplitButton && this._splitButtonContainer.current) {
            if ('onpointerdown' in this._splitButtonContainer.current) {
                this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
            }
            if ('onpointerup' in this._splitButtonContainer.current && this.props.onPointerUp) {
                this._events.on(this._splitButtonContainer.current, 'pointerup', this.props.onPointerUp, true);
            }
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss.
        if (this.props.onAfterMenuDismiss && !prevState.menuHidden && this.state.menuHidden) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    BaseButton.prototype.focus = function () {
        var _a, _b;
        if (this._isSplitButton && this._splitButtonContainer.current) {
            Object(setFocusVisibility["b" /* setFocusVisibility */])(true, undefined, (_a = this.context) === null || _a === void 0 ? void 0 : _a.registeredProviders);
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            Object(setFocusVisibility["b" /* setFocusVisibility */])(true, undefined, (_b = this.context) === null || _b === void 0 ? void 0 : _b.registeredProviders);
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, onRenderIcon = (_a = props.onRenderIcon, _a === void 0 ? this._onRenderIcon : _a), onRenderAriaDescription = (_b = props.onRenderAriaDescription, _b === void 0 ? this._onRenderAriaDescription : _b), onRenderChildren = (_c = props.onRenderChildren, _c === void 0 ? this._onRenderChildren : _c), 
        // eslint-disable-next-line deprecation/deprecation
        onRenderMenu = (_d = props.onRenderMenu, _d === void 0 ? this._onRenderMenu : _d), onRenderMenuIcon = (_e = props.onRenderMenuIcon, _e === void 0 ? this._onRenderMenuIcon : _e), disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var Button = function (keytipAttributes) { return (react["createElement"](Tag, Object(tslib_es6["a" /* __assign */])({}, buttonProps, keytipAttributes),
            react["createElement"]("span", { className: _this._classNames.flexContainer, "data-automationid": "splitbuttonprimary" },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                menuProps &&
                    !menuProps.doNotLayer &&
                    _this._shouldRenderMenu() &&
                    onRenderMenu(_this._getMenuProps(menuProps), _this._onRenderMenu)))); };
        var Content = keytipProps ? (
        // If we're making a split button, we won't put the keytip here
        react["createElement"](KeytipData, { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return Button(keytipAttributes); })) : (Button());
        if (menuProps && menuProps.doNotLayer) {
            return (react["createElement"](react["Fragment"], null,
                Content,
                this._shouldRenderMenu() && onRenderMenu(this._getMenuProps(menuProps), this._onRenderMenu)));
        }
        return (react["createElement"](react["Fragment"], null,
            Content,
            react["createElement"](useFocusRects["a" /* FocusRects */], null)));
    };
    /**
     * Method to help determine if the menu's component tree should
     * be rendered. It takes into account whether the menu is expanded,
     * whether it is a persisted menu and whether it has been shown to the user.
     */
    BaseButton.prototype._shouldRenderMenu = function () {
        var _a;
        var menuHidden = this.state.menuHidden;
        // eslint-disable-next-line deprecation/deprecation
        var persistMenu = (_a = this.props, _a.persistMenu), renderPersistedMenuHiddenOnMount = _a.renderPersistedMenuHiddenOnMount;
        if (!menuHidden) {
            // Always should render a menu when it is expanded
            return true;
        }
        else if (persistMenu && (this._renderedVisibleMenu || renderPersistedMenuHiddenOnMount)) {
            // _renderedVisibleMenu ensures that the first rendering of
            // the menu happens on-screen, as edge's scrollbar calculations are off if done while hidden.
            return true;
        }
        return false;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText
        // used to have before the refactor that introduced this function. _onRenderTextContents does not require props.
        // text to be undefined in order for props.children to be used as a fallback.
        // Purely a code maintainability/reuse issue, but logged as Issue #4979.
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._getMenuProps = function (menuProps) {
        var persistMenu = this.props.persistMenu;
        var menuHidden = this.state.menuHidden;
        // the accessible menu label (accessible name) has a relationship to the button.
        // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
        // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
        if (!menuProps.ariaLabel && !menuProps.labelElementId && this._hasText()) {
            menuProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, menuProps), { labelElementId: this._labelId });
        }
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ id: this._labelId + '-menu', directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge }, menuProps), { shouldFocusOnContainer: this._menuShouldFocusOnContainer, shouldFocusOnMount: this._menuShouldFocusOnMount, hidden: persistMenu ? menuHidden : undefined, className: Object(css["a" /* css */])('ms-BaseButton-menuhost', menuProps.className), target: this._isSplitButton ? this._splitButtonContainer.current : this._buttonElement.current, onDismiss: this._onDismissMenu });
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _a, _b;
        var _this = this;
        var styles = (_a = this.props, _b = _a.styles, _b === void 0 ? {} : _b), disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps, toggle = _a.toggle, role = _a.role, primaryActionButtonProps = _a.primaryActionButtonProps;
        var keytipProps = this.props.keytipProps;
        var menuHidden = this.state.menuHidden;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, !menuHidden, !!checked, !!allowDisabledFocus)
            : styles && SplitButton_classNames_getSplitButtonClassNames(styles, !!disabled, !menuHidden, !!checked, !!primaryDisabled);
        Object(object["a" /* assign */])(buttonProps, {
            onClick: undefined,
            onPointerDown: undefined,
            onPointerUp: undefined,
            tabIndex: -1,
            'data-is-focusable': false,
        });
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var containerProps = Object(properties["h" /* getNativeProps */])(buttonProps, [], ['disabled']);
        // Add additional props to apply on primary action button
        if (primaryActionButtonProps) {
            Object(object["a" /* assign */])(buttonProps, primaryActionButtonProps);
        }
        var SplitButton = function (keytipAttributes) { return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, containerProps, { "data-ktp-target": keytipAttributes ? keytipAttributes['data-ktp-target'] : undefined, role: role ? role : 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": !menuHidden, "aria-pressed": toggle ? !!checked : undefined, "aria-describedby": Object(aria["a" /* mergeAriaAttributeValues */])(buttonProps['aria-describedby'], keytipAttributes ? keytipAttributes['aria-describedby'] : undefined), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: (!disabled && !primaryDisabled) || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'], onFocusCapture: _this._onSplitContainerFocusCapture }),
            react["createElement"]("span", { style: { display: 'flex', width: '100%' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); };
        return keytipProps ? (react["createElement"](KeytipData, { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return SplitButton(keytipAttributes); })) : (SplitButton());
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            var onClick = function (ev) {
                ev.stopPropagation();
            };
            return react["createElement"]("span", { className: classNames.divider, "aria-hidden": true, onClick: onClick });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a;
        var allowDisabledFocus = (_a = this.props, _a.allowDisabledFocus), checked = _a.checked, disabled = _a.disabled, splitButtonMenuProps = _a.splitButtonMenuProps, splitButtonAriaLabel = _a.splitButtonAriaLabel, primaryDisabled = _a.primaryDisabled;
        var menuHidden = this.state.menuHidden;
        var menuIconProps = this.props.menuIconProps;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown',
            };
        }
        var splitButtonProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, splitButtonMenuProps), { styles: classNames, checked: checked, disabled: disabled, allowDisabledFocus: allowDisabledFocus, onClick: this._onMenuClick, menuProps: undefined, iconProps: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, menuIconProps), { className: this._classNames.menuIcon }), ariaLabel: splitButtonAriaLabel, 'aria-haspopup': true, 'aria-expanded': !menuHidden, 'data-is-focusable': false });
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (react["createElement"](BaseButton, Object(tslib_es6["a" /* __assign */])({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes ? keytipAttributes['data-ktp-execute-target'] : keytipAttributes, onMouseDown: this._onMouseDown, tabIndex: primaryDisabled && !allowDisabledFocus ? 0 : -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        var onPointerDown = this.props.onPointerDown;
        if (onPointerDown) {
            onPointerDown(ev);
        }
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeout from a previous touch and pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
            // Touch and pointer events don't focus the button naturally,
            // so adding an imperative focus call to guarantee this behavior.
            // Only focus the button if a splitbutton menu is not open
            if (_this.state.menuHidden) {
                _this.focus();
            }
        }, BaseButton_TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === KeyCodes["a" /* KeyCodes */].down && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false,
    };
    // needed to access registeredProviders when manually setting focus visibility
    BaseButton.contextType = useFocusRects["b" /* FocusRectsContext */];
    return BaseButton;
}(react["Component"]));
//# sourceMappingURL=BaseButton.js.map

/***/ }),

/***/ "2xtc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandButton; });
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BFcr");

/**
 * {@docCategory Button}
 */
var CommandButton = _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__[/* ActionButton */ "a"];
//# sourceMappingURL=CommandButton.js.map

/***/ }),

/***/ "3m8w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Dialog; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogContent.types.js
var DialogContent_types = __webpack_require__("dt+D");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Modal/Modal.js + 4 modules
var Modal = __webpack_require__("brIe");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__("hDQx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js
var warnDeprecations = __webpack_require__("uxh7");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__("9bYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogFooter.js + 2 modules
var DialogFooter = __webpack_require__("IEJz");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogContent.base.js







var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DialogFooterType = (react["createElement"](DialogFooter["a" /* DialogFooter */], null)).type;
var COMPONENT_NAME = 'DialogContent';
// eslint-disable-next-line deprecation/deprecation
var DialogContent_base_DialogContentBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DialogContentBase, _super);
    function DialogContentBase(props) {
        var _this = _super.call(this, props) || this;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        Object(warnDeprecations["a" /* warnDeprecations */])(COMPONENT_NAME, props, {
            titleId: 'titleProps.id',
        });
        return _this;
    }
    DialogContentBase.prototype.render = function () {
        var _a, _b;
        var showCloseButton = (_a = this.props, _a.showCloseButton), className = _a.className, closeButtonAriaLabel = _a.closeButtonAriaLabel, onDismiss = _a.onDismiss, subTextId = _a.subTextId, subText = _a.subText, titleProps = (_b = _a.titleProps, _b === void 0 ? {} : _b), 
        // eslint-disable-next-line deprecation/deprecation
        titleId = _a.titleId, title = _a.title, type = _a.type, styles = _a.styles, theme = _a.theme, draggableHeaderClassName = _a.draggableHeaderClassName;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isLargeHeader: type === DialogContent_types["a" /* DialogType */].largeHeader,
            isClose: type === DialogContent_types["a" /* DialogType */].close,
            draggableHeaderClassName: draggableHeaderClassName,
        });
        var groupings = this._groupChildren();
        var subTextContent;
        if (subText) {
            subTextContent = (react["createElement"]("p", { className: classNames.subText, id: subTextId }, subText));
        }
        return (react["createElement"]("div", { className: classNames.content },
            react["createElement"]("div", { className: classNames.header },
                react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ id: titleId, role: "heading", "aria-level": 1 }, titleProps, { className: Object(css["a" /* css */])(classNames.title, titleProps.className) }), title),
                react["createElement"]("div", { className: classNames.topButton },
                    this.props.topButtonsProps.map(function (props, index) { return (react["createElement"](IconButton["a" /* IconButton */], Object(tslib_es6["a" /* __assign */])({ key: props.uniqueId || index }, props))); }),
                    (type === DialogContent_types["a" /* DialogType */].close || (showCloseButton && type !== DialogContent_types["a" /* DialogType */].largeHeader)) && (react["createElement"](IconButton["a" /* IconButton */], { className: classNames.button, iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss })))),
            react["createElement"]("div", { className: classNames.inner },
                react["createElement"]("div", { className: classNames.innerContent },
                    subTextContent,
                    groupings.contents),
                groupings.footers)));
    };
    // @TODO - typing the footers as an array of DialogFooter is difficult because
    // casing "child as DialogFooter" causes a problem because
    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
    DialogContentBase.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: [],
        };
        react["Children"].map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooterType) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    DialogContentBase.defaultProps = {
        showCloseButton: false,
        className: '',
        topButtonsProps: [],
        closeButtonAriaLabel: 'Close',
    };
    DialogContentBase = Object(tslib_es6["b" /* __decorate */])([
        withResponsiveMode["d" /* withResponsiveMode */]
    ], DialogContentBase);
    return DialogContentBase;
}(react["Component"]));
//# sourceMappingURL=DialogContent.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogContent.styles.js

var GlobalClassNames = {
    contentLgHeader: 'ms-Dialog-lgHeader',
    close: 'ms-Dialog--close',
    subText: 'ms-Dialog-subText',
    header: 'ms-Dialog-header',
    headerLg: 'ms-Dialog--lgHeader',
    button: 'ms-Dialog-button ms-Dialog-button--close',
    inner: 'ms-Dialog-inner',
    content: 'ms-Dialog-content',
    title: 'ms-Dialog-title',
};
var getStyles = function (props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme, isLargeHeader = props.isLargeHeader, isClose = props.isClose, hidden = props.hidden, isMultiline = props.isMultiline, draggableHeaderClassName = props.draggableHeaderClassName;
    var palette = theme.palette, fonts = theme.fonts, effects = theme.effects, semanticColors = theme.semanticColors;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        content: [
            isLargeHeader && [
                classNames.contentLgHeader,
                {
                    borderTop: "4px solid ".concat(palette.themePrimary),
                },
            ],
            isClose && classNames.close,
            {
                flexGrow: 1,
                overflowY: 'hidden', // required for allowScrollOnElement
            },
            className,
        ],
        subText: [
            classNames.subText,
            fonts.medium,
            {
                margin: '0 0 24px 0',
                color: semanticColors.bodySubtext,
                lineHeight: '1.5',
                wordWrap: 'break-word',
                fontWeight: lib["e" /* FontWeights */].regular,
            },
        ],
        header: [
            classNames.header,
            {
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box',
            },
            isClose && classNames.close,
            draggableHeaderClassName && [
                draggableHeaderClassName,
                {
                    cursor: 'move',
                },
            ],
        ],
        button: [
            classNames.button,
            hidden && {
                selectors: {
                    '.ms-Icon.ms-Icon--Cancel': {
                        color: semanticColors.buttonText,
                        fontSize: lib["h" /* IconFontSizes */].medium,
                    },
                },
            },
        ],
        inner: [
            classNames.inner,
            {
                padding: '0 24px 24px',
                selectors: (_a = {},
                    _a["@media (min-width: ".concat(lib["m" /* ScreenWidthMinSmall */], "px) and (max-width: ").concat(lib["j" /* ScreenWidthMaxSmall */], "px)")] = {
                        padding: '0 16px 16px',
                    },
                    _a),
            },
        ],
        innerContent: [
            classNames.content,
            {
                position: 'relative',
                width: '100%',
            },
        ],
        title: [
            classNames.title,
            fonts.xLarge,
            {
                color: semanticColors.bodyText,
                margin: '0',
                minHeight: fonts.xLarge.fontSize,
                padding: '16px 46px 20px 24px',
                lineHeight: 'normal',
                selectors: (_b = {},
                    _b["@media (min-width: ".concat(lib["m" /* ScreenWidthMinSmall */], "px) and (max-width: ").concat(lib["j" /* ScreenWidthMaxSmall */], "px)")] = {
                        padding: '16px 46px 16px 16px',
                    },
                    _b),
            },
            isLargeHeader && {
                color: semanticColors.menuHeader,
            },
            isMultiline && { fontSize: fonts.xxLarge.fontSize },
        ],
        topButton: [
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: '0',
                right: '0',
                padding: '15px 15px 0 0',
                selectors: (_c = {
                        '> *': {
                            flex: '0 0 auto',
                        },
                        '.ms-Dialog-button': {
                            color: semanticColors.buttonText,
                        },
                        '.ms-Dialog-button:hover': {
                            color: semanticColors.buttonTextHovered,
                            borderRadius: effects.roundedCorner2,
                        }
                    },
                    _c["@media (min-width: ".concat(lib["m" /* ScreenWidthMinSmall */], "px) and (max-width: ").concat(lib["j" /* ScreenWidthMaxSmall */], "px)")] = {
                        padding: '15px 8px 0 0',
                    },
                    _c),
            },
        ],
    };
};
//# sourceMappingURL=DialogContent.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogContent.js



var DialogContent = Object(styled["a" /* styled */])(DialogContent_base_DialogContentBase, getStyles, undefined, { scope: 'DialogContent' });
DialogContent.displayName = 'DialogContent';
//# sourceMappingURL=DialogContent.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/Dialog.base.js






var Dialog_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();

var DefaultModalProps = {
    isDarkOverlay: false,
    isBlocking: false,
    className: '',
    containerClassName: '',
    topOffsetFixed: false,
    enableAriaHiddenSiblings: true,
};
var DefaultDialogContentProps = {
    type: DialogContent_types["a" /* DialogType */].normal,
    className: '',
    topButtonsProps: [],
};
// eslint-disable-next-line deprecation/deprecation
var Dialog_base_DialogBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DialogBase, _super);
    function DialogBase(props) {
        var _this = _super.call(this, props) || this;
        _this._getSubTextId = function () {
            var _a;
            // eslint-disable-next-line deprecation/deprecation
            var ariaDescribedById = (_a = _this.props, _a.ariaDescribedById), modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, subText = _a.subText;
            var id = (modalProps && modalProps.subtitleAriaId) || ariaDescribedById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.subText) || subText) && _this._defaultSubTextId;
            }
            return id;
        };
        _this._getTitleTextId = function () {
            var _a;
            // eslint-disable-next-line deprecation/deprecation
            var ariaLabelledById = (_a = _this.props, _a.ariaLabelledById), modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, title = _a.title;
            var id = (modalProps && modalProps.titleAriaId) || ariaLabelledById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.title) || title) && _this._defaultTitleTextId;
            }
            return id;
        };
        _this._id = Object(getId["a" /* getId */])('Dialog');
        _this._defaultTitleTextId = _this._id + '-title';
        _this._defaultSubTextId = _this._id + '-subText';
        if (false) {}
        return _this;
    }
    DialogBase.prototype.render = function () {
        var _a, _b;
        var _c, _d, _e;
        var props = this.props;
        var 
        /* eslint-disable deprecation/deprecation */
        className = props.className, containerClassName = props.containerClassName, contentClassName = props.contentClassName, elementToFocusOnDismiss = props.elementToFocusOnDismiss, firstFocusableSelector = props.firstFocusableSelector, forceFocusInsideTrap = props.forceFocusInsideTrap, styles = props.styles, hidden = props.hidden, disableRestoreFocus = (_a = props.disableRestoreFocus, _a === void 0 ? props.ignoreExternalFocusing : _a), isBlocking = props.isBlocking, isClickableOutsideFocusTrap = props.isClickableOutsideFocusTrap, isDarkOverlay = props.isDarkOverlay, isOpen = (_b = props.isOpen, _b === void 0 ? !hidden : _b), onDismiss = props.onDismiss, onDismissed = props.onDismissed, onLayerDidMount = props.onLayerDidMount, responsiveMode = props.responsiveMode, subText = props.subText, theme = props.theme, title = props.title, topButtonsProps = props.topButtonsProps, type = props.type, 
        /* eslint-enable deprecation/deprecation */
        minWidth = props.minWidth, maxWidth = props.maxWidth, modalProps = props.modalProps;
        var mergedLayerProps = Object(tslib_es6["a" /* __assign */])({ onLayerDidMount: onLayerDidMount }, modalProps === null || modalProps === void 0 ? void 0 : modalProps.layerProps);
        var dialogDraggableClassName;
        var dragOptions;
        // If dragOptions are provided, but no drag handle is specified, we supply a drag handle,
        // and inform dialog contents to add class to draggable class to the header
        if ((modalProps === null || modalProps === void 0 ? void 0 : modalProps.dragOptions) && !((_c = modalProps.dragOptions) === null || _c === void 0 ? void 0 : _c.dragHandleSelector)) {
            // spread options to avoid mutating props
            dragOptions = Object(tslib_es6["a" /* __assign */])({}, modalProps.dragOptions);
            dialogDraggableClassName = 'ms-Dialog-draggable-header';
            dragOptions.dragHandleSelector = ".".concat(dialogDraggableClassName);
        }
        var mergedModalProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, DefaultModalProps), { elementToFocusOnDismiss: elementToFocusOnDismiss, firstFocusableSelector: firstFocusableSelector, forceFocusInsideTrap: forceFocusInsideTrap, disableRestoreFocus: disableRestoreFocus, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap, responsiveMode: responsiveMode, className: className, containerClassName: containerClassName, isBlocking: isBlocking, isDarkOverlay: isDarkOverlay, onDismissed: onDismissed }), modalProps), { dragOptions: dragOptions, layerProps: mergedLayerProps, isOpen: isOpen });
        var dialogContentProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ className: contentClassName, subText: subText, title: title, topButtonsProps: topButtonsProps, type: type }, DefaultDialogContentProps), props.dialogContentProps), { draggableHeaderClassName: dialogDraggableClassName, titleProps: Object(tslib_es6["a" /* __assign */])({ 
                // eslint-disable-next-line deprecation/deprecation
                id: ((_d = props.dialogContentProps) === null || _d === void 0 ? void 0 : _d.titleId) || this._defaultTitleTextId }, (_e = props.dialogContentProps) === null || _e === void 0 ? void 0 : _e.titleProps) });
        var classNames = Dialog_base_getClassNames(styles, {
            theme: theme,
            className: mergedModalProps.className,
            containerClassName: mergedModalProps.containerClassName,
            hidden: hidden,
            dialogDefaultMinWidth: minWidth,
            dialogDefaultMaxWidth: maxWidth,
        });
        return (react["createElement"](Modal["a" /* Modal */], Object(tslib_es6["a" /* __assign */])({}, mergedModalProps, { className: classNames.root, containerClassName: classNames.main, onDismiss: onDismiss || mergedModalProps.onDismiss, subtitleAriaId: this._getSubTextId(), titleAriaId: this._getTitleTextId() }),
            react["createElement"](DialogContent, Object(tslib_es6["a" /* __assign */])({ subTextId: this._defaultSubTextId, showCloseButton: mergedModalProps.isBlocking, onDismiss: onDismiss }, dialogContentProps), props.children)));
    };
    DialogBase.defaultProps = {
        hidden: true,
    };
    DialogBase = Object(tslib_es6["b" /* __decorate */])([
        withResponsiveMode["d" /* withResponsiveMode */]
    ], DialogBase);
    return DialogBase;
}(react["Component"]));
//# sourceMappingURL=Dialog.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/Dialog.styles.js

var Dialog_styles_GlobalClassNames = {
    root: 'ms-Dialog',
};
var Dialog_styles_getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, // eslint-disable-line deprecation/deprecation
    _b = props.dialogDefaultMinWidth, // eslint-disable-line deprecation/deprecation
    dialogDefaultMinWidth = _b === void 0 ? '288px' : _b, _c = props.dialogDefaultMaxWidth, dialogDefaultMaxWidth = _c === void 0 ? '340px' : _c, hidden = props.hidden, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(Dialog_styles_GlobalClassNames, theme);
    return {
        root: [classNames.root, theme.fonts.medium, className],
        main: [
            {
                width: dialogDefaultMinWidth,
                outline: '3px solid transparent',
                selectors: (_a = {},
                    _a["@media (min-width: ".concat(lib["l" /* ScreenWidthMinMedium */], "px)")] = {
                        width: 'auto',
                        maxWidth: dialogDefaultMaxWidth,
                        minWidth: dialogDefaultMinWidth,
                    },
                    _a),
            },
            !hidden && { display: 'flex' },
            containerClassName,
        ],
    };
};
//# sourceMappingURL=Dialog.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/Dialog.js



var Dialog = Object(styled["a" /* styled */])(Dialog_base_DialogBase, Dialog_styles_getStyles, undefined, { scope: 'Dialog' });
Dialog.displayName = 'Dialog';
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "51aq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Shimmer; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.styles.js



var GlobalClassNames = {
    root: 'ms-Shimmer-container',
    shimmerWrapper: 'ms-Shimmer-shimmerWrapper',
    shimmerGradient: 'ms-Shimmer-shimmerGradient',
    dataWrapper: 'ms-Shimmer-dataWrapper',
};
var BACKGROUND_OFF_SCREEN_POSITION = '100%';
var shimmerAnimation = Object(memoize["b" /* memoizeFunction */])(function () {
    return Object(lib["D" /* keyframes */])({
        '0%': {
            transform: "translateX(-".concat(BACKGROUND_OFF_SCREEN_POSITION, ")"),
        },
        '100%': {
            transform: "translateX(".concat(BACKGROUND_OFF_SCREEN_POSITION, ")"),
        },
    });
});
var shimmerAnimationRTL = Object(memoize["b" /* memoizeFunction */])(function () {
    return Object(lib["D" /* keyframes */])({
        '100%': {
            transform: "translateX(-".concat(BACKGROUND_OFF_SCREEN_POSITION, ")"),
        },
        '0%': {
            transform: "translateX(".concat(BACKGROUND_OFF_SCREEN_POSITION, ")"),
        },
    });
});
function getStyles(props) {
    var _a;
    var isDataLoaded = props.isDataLoaded, className = props.className, theme = props.theme, transitionAnimationInterval = props.transitionAnimationInterval, shimmerColor = props.shimmerColor, shimmerWaveColor = props.shimmerWaveColor, improveCSSPerformance = props.improveCSSPerformance;
    var semanticColors = theme.semanticColors;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var isRTL = Object(rtl["a" /* getRTL */])(theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'relative',
                height: 'auto',
            },
            className,
        ],
        shimmerWrapper: [
            classNames.shimmerWrapper,
            {
                position: 'relative',
                overflow: 'hidden',
                transform: 'translateZ(0)',
                backgroundColor: shimmerColor || semanticColors.disabledBackground,
                transition: "opacity ".concat(transitionAnimationInterval, "ms"),
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ background: "WindowText\n                        linear-gradient(\n                          to right,\n                          transparent 0%,\n                          Window 50%,\n                          transparent 100%)\n                        0 0 / 90% 100%\n                        no-repeat" }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _a),
            },
            isDataLoaded && {
                opacity: '0',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            improveCSSPerformance
                ? {
                    selectors: {
                        '> div:last-child': {
                            transform: 'translateZ(0)',
                        },
                    },
                }
                : {
                    selectors: {
                        '> *': {
                            transform: 'translateZ(0)',
                        },
                    },
                },
        ],
        shimmerGradient: [
            classNames.shimmerGradient,
            {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: "".concat(shimmerColor || semanticColors.disabledBackground, "\n                      linear-gradient(\n                        to right,\n                        ").concat(shimmerColor || semanticColors.disabledBackground, " 0%,\n                        ").concat(shimmerWaveColor || semanticColors.bodyDivider, " 50%,\n                        ").concat(shimmerColor || semanticColors.disabledBackground, " 100%)\n                      0 0 / 90% 100%\n                      no-repeat"),
                transform: "translateX(-".concat(BACKGROUND_OFF_SCREEN_POSITION, ")"),
                animationDuration: '2s',
                animationTimingFunction: 'ease-in-out',
                animationDirection: 'normal',
                animationIterationCount: 'infinite',
                animationName: isRTL ? shimmerAnimationRTL() : shimmerAnimation(),
            },
        ],
        dataWrapper: [
            classNames.dataWrapper,
            {
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                opacity: '0',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                transition: "opacity ".concat(transitionAnimationInterval, "ms"),
            },
            isDataLoaded && {
                opacity: '1',
                position: 'static',
            },
        ],
        screenReaderText: lib["C" /* hiddenContentStyle */],
    };
}
//# sourceMappingURL=Shimmer.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/DelayedRender.js
var DelayedRender = __webpack_require__("5sqY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.js + 11 modules
var ShimmerElementsGroup = __webpack_require__("NMIT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useConst.js
var useConst = __webpack_require__("mFKB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useSetTimeout.js
var useSetTimeout = __webpack_require__("VBIn");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.base.js





var TRANSITION_ANIMATION_INTERVAL = 200; /* ms */
var COMPONENT_NAME = 'Shimmer';
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Shimmer}
 */
var ShimmerBase = react["forwardRef"](function (props, ref) {
    var styles = props.styles, shimmerElements = props.shimmerElements, children = props.children, width = props.width, className = props.className, customElementsGroup = props.customElementsGroup, theme = props.theme, ariaLabel = props.ariaLabel, shimmerColors = props.shimmerColors, _a = props.isDataLoaded, isDataLoaded = _a === void 0 ? false : _a, improveCSSPerformance = props.improveCSSPerformance;
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */]);
    var classNames = getClassNames(styles, {
        theme: theme,
        isDataLoaded: isDataLoaded,
        className: className,
        transitionAnimationInterval: TRANSITION_ANIMATION_INTERVAL,
        shimmerColor: shimmerColors && shimmerColors.shimmer,
        shimmerWaveColor: shimmerColors && shimmerColors.shimmerWave,
        improveCSSPerformance: improveCSSPerformance || !customElementsGroup,
    });
    var internalState = Object(useConst["a" /* useConst */])({
        lastTimeoutId: 0,
    });
    var _b = Object(useSetTimeout["a" /* useSetTimeout */])(), setTimeout = _b.setTimeout, clearTimeout = _b.clearTimeout;
    /**
     * Flag for knowing when to remove the shimmerWrapper from the DOM.
     */
    var _c = react["useState"](isDataLoaded), contentLoaded = _c[0], setContentLoaded = _c[1];
    var divStyleProp = { width: width ? width : '100%' };
    react["useEffect"](function () {
        if (isDataLoaded !== contentLoaded) {
            if (isDataLoaded) {
                internalState.lastTimeoutId = setTimeout(function () {
                    setContentLoaded(true);
                }, TRANSITION_ANIMATION_INTERVAL);
                return function () { return clearTimeout(internalState.lastTimeoutId); };
            }
            else {
                setContentLoaded(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- Should only run when isDataLoaded changes.
    }, [isDataLoaded]);
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, divProps, { className: classNames.root, ref: ref }),
        !contentLoaded && (react["createElement"]("div", { style: divStyleProp, className: classNames.shimmerWrapper },
            react["createElement"]("div", { className: classNames.shimmerGradient }),
            customElementsGroup ? (customElementsGroup) : (react["createElement"](ShimmerElementsGroup["a" /* ShimmerElementsGroup */], { shimmerElements: shimmerElements, backgroundColor: shimmerColors && shimmerColors.background })))),
        children && react["createElement"]("div", { className: classNames.dataWrapper }, children),
        ariaLabel && !isDataLoaded && (react["createElement"]("div", { role: "status", "aria-live": "polite" },
            react["createElement"](DelayedRender["a" /* DelayedRender */], null,
                react["createElement"]("div", { className: classNames.screenReaderText }, ariaLabel))))));
});
ShimmerBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=Shimmer.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.js



var Shimmer = Object(styled["a" /* styled */])(ShimmerBase, getStyles, undefined, {
    scope: 'Shimmer',
});
//# sourceMappingURL=Shimmer.js.map

/***/ }),

/***/ "9bYq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ IconButton_IconButton; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.js + 24 modules
var BaseButton = __webpack_require__("1rtd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/BaseComponent.js
var BaseComponent = __webpack_require__("3eXo");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/customizable.js + 1 modules
var customizable = __webpack_require__("GAaB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.styles.js
var BaseButton_styles = __webpack_require__("d4Kq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/SplitButton/SplitButton.styles.js
var SplitButton_styles = __webpack_require__("9gkV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.styles.js




var getStyles = Object(memoize["b" /* memoizeFunction */])(function (theme, customStyles) {
    var _a;
    var baseButtonStyles = Object(BaseButton_styles["a" /* getStyles */])(theme);
    var splitButtonStyles = Object(SplitButton_styles["a" /* getStyles */])(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            color: semanticColors.link,
        },
        rootHovered: (_a = {
                color: palette.themeDarkAlt,
                backgroundColor: palette.neutralLighter
            },
            _a[lib["f" /* HighContrastSelector */]] = {
                borderColor: 'Highlight',
                color: 'Highlight',
            },
            _a),
        rootHasMenu: {
            width: 'auto',
        },
        rootPressed: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootExpanded: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootChecked: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootCheckedHovered: {
            color: palette.themeDark,
            backgroundColor: palette.neutralQuaternaryAlt,
        },
        rootDisabled: {
            color: palette.neutralTertiaryAlt,
        },
    };
    return Object(lib["r" /* concatStyleSets */])(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});
//# sourceMappingURL=IconButton.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js





/**
 * {@docCategory Button}
 */
var IconButton_IconButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.render = function () {
        var _a;
        var styles = (_a = this.props, _a.styles), theme = _a.theme;
        return (react["createElement"](BaseButton["a" /* BaseButton */], Object(tslib_es6["a" /* __assign */])({}, this.props, { variantClassName: "ms-Button--icon", styles: getStyles(theme, styles), onRenderText: BaseComponent["a" /* nullRender */], onRenderDescription: BaseComponent["a" /* nullRender */] })));
    };
    IconButton = Object(tslib_es6["b" /* __decorate */])([
        Object(customizable["a" /* customizable */])('IconButton', ['theme', 'styles'], true)
    ], IconButton);
    return IconButton;
}(react["Component"]));
//# sourceMappingURL=IconButton.js.map

/***/ }),

/***/ "9gkV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("02QY");



var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* memoizeFunction */ "b"])(function (theme, customStyles) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var effects = theme.effects, palette = theme.palette, semanticColors = theme.semanticColors;
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none',
    };
    var splitButtonDividerBaseStyles = {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8,
    };
    var splitButtonStyles = {
        splitButtonContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { highContrastStyle: buttonHighContrastFocus, inset: 2, pointerEvents: 'none' }),
            {
                display: 'inline-flex',
                '.ms-Button--default': {
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    borderRight: 'none',
                    flexGrow: '1',
                },
                '.ms-Button--primary': (_a = {
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0',
                        border: 'none',
                        flexGrow: '1',
                        ':hover': {
                            border: 'none',
                        },
                        ':active': {
                            border: 'none',
                        }
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ color: 'WindowText', backgroundColor: 'Window', border: '1px solid WindowText', borderRightWidth: '0' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()), { ':hover': {
                            backgroundColor: 'Highlight',
                            border: '1px solid Highlight',
                            borderRightWidth: '0',
                            color: 'HighlightText',
                        }, ':active': {
                            border: '1px solid Highlight',
                        } }),
                    _a),
                '.ms-Button--default + .ms-Button': (_b = {},
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        border: '1px solid WindowText',
                        borderLeftWidth: '0',
                        ':hover': {
                            backgroundColor: 'HighlightText',
                            borderColor: 'Highlight',
                            color: 'Highlight',
                            '.ms-Button-menuIcon': Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ backgroundColor: 'HighlightText', color: 'Highlight' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                        },
                    },
                    _b),
                '.ms-Button--default + .ms-Button[aria-expanded="true"]': (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        backgroundColor: 'HighlightText',
                        borderColor: 'Highlight',
                        color: 'Highlight',
                        '.ms-Button-menuIcon': Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ backgroundColor: 'HighlightText', color: 'Highlight' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                    },
                    _c),
                '.ms-Button--primary + .ms-Button': (_d = {
                        border: 'none'
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        border: '1px solid WindowText',
                        borderLeftWidth: '0',
                        ':hover': {
                            borderLeftWidth: '0',
                            backgroundColor: 'Highlight',
                            borderColor: 'Highlight',
                            color: 'HighlightText',
                            '.ms-Button-menuIcon': Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()), { color: 'HighlightText' }),
                        },
                    },
                    _d),
                '.ms-Button--primary + .ms-Button[aria-expanded="true"]': Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ backgroundColor: 'Highlight', borderColor: 'Highlight', color: 'HighlightText' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()), { '.ms-Button-menuIcon': {
                        color: 'HighlightText',
                    } }),
                '.ms-Button.is-disabled': (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        color: 'GrayText',
                        borderColor: 'GrayText',
                        backgroundColor: 'Window',
                    },
                    _e),
            },
        ],
        splitButtonContainerHovered: {
            '.ms-Button--default.is-disabled': (_f = {
                    backgroundColor: semanticColors.buttonBackgroundDisabled,
                    color: semanticColors.buttonTextDisabled
                },
                _f[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _f),
            '.ms-Button--primary.is-disabled': (_g = {
                    backgroundColor: semanticColors.primaryButtonBackgroundDisabled,
                    color: semanticColors.primaryButtonTextDisabled
                },
                _g[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _g),
        },
        splitButtonContainerChecked: {
            '.ms-Button--primary': (_h = {},
                _h[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ color: 'Window', backgroundColor: 'WindowText' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                _h),
        },
        splitButtonContainerCheckedHovered: {
            '.ms-Button--primary': (_j = {},
                _j[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ color: 'Window', backgroundColor: 'WindowText' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                _j),
        },
        splitButtonContainerFocused: {
            outline: 'none!important',
        },
        splitButtonMenuButton: (_k = {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderTopRightRadius: effects.roundedCorner2,
                borderBottomRightRadius: effects.roundedCorner2,
                border: "1px solid ".concat(palette.neutralSecondaryAlt),
                borderLeft: 'none',
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            },
            _k[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                '.ms-Button-menuIcon': {
                    color: 'WindowText',
                },
            },
            _k),
        splitButtonDivider: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, splitButtonDividerBaseStyles), (_l = {}, _l[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
            backgroundColor: 'WindowText',
        }, _l)),
        splitButtonDividerDisabled: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, splitButtonDividerBaseStyles), (_m = {}, _m[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
            backgroundColor: 'GrayText',
        }, _m)),
        splitButtonMenuButtonDisabled: (_o = {
                pointerEvents: 'none',
                border: 'none',
                ':hover': {
                    cursor: 'default',
                },
                '.ms-Button--primary': (_p = {},
                    _p[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        color: 'GrayText',
                        borderColor: 'GrayText',
                        backgroundColor: 'Window',
                    },
                    _p),
                '.ms-Button-menuIcon': (_q = {},
                    _q[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        color: 'GrayText',
                    },
                    _q)
            },
            _o[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                color: 'GrayText',
                border: '1px solid GrayText',
                backgroundColor: 'Window',
            },
            _o),
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
        },
        splitButtonContainerDisabled: (_r = {
                outline: 'none',
                border: 'none'
            },
            _r[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ color: 'GrayText', borderColor: 'GrayText', backgroundColor: 'Window' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
            _r),
        splitButtonMenuFocused: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { highContrastStyle: buttonHighContrastFocus, inset: 2 })),
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* concatStyleSets */ "r"])(splitButtonStyles, customStyles);
});
//# sourceMappingURL=SplitButton.styles.js.map

/***/ }),

/***/ "BFcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ActionButton_ActionButton; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.js + 24 modules
var BaseButton = __webpack_require__("1rtd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/BaseComponent.js
var BaseComponent = __webpack_require__("3eXo");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/customizable.js + 1 modules
var customizable = __webpack_require__("GAaB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.styles.js
var BaseButton_styles = __webpack_require__("d4Kq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/ActionButton/ActionButton.styles.js



var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var getStyles = Object(memoize["b" /* memoizeFunction */])(function (theme, customStyles) {
    var _a, _b, _c;
    var baseButtonStyles = Object(BaseButton_styles["a" /* getStyles */])(theme);
    var actionButtonStyles = {
        root: (_a = {
                padding: DEFAULT_PADDING,
                height: DEFAULT_BUTTON_HEIGHT,
                color: theme.palette.neutralPrimary,
                backgroundColor: 'transparent',
                border: '1px solid transparent'
            },
            _a[lib["f" /* HighContrastSelector */]] = {
                borderColor: 'Window',
            },
            _a),
        rootHovered: (_b = {
                color: theme.palette.themePrimary
            },
            _b[lib["f" /* HighContrastSelector */]] = {
                color: 'Highlight',
            },
            _b),
        iconHovered: {
            color: theme.palette.themePrimary,
        },
        rootPressed: {
            color: theme.palette.black,
        },
        rootExpanded: {
            color: theme.palette.themePrimary,
        },
        iconPressed: {
            color: theme.palette.themeDarker,
        },
        rootDisabled: (_c = {
                color: theme.palette.neutralTertiary,
                backgroundColor: 'transparent',
                borderColor: 'transparent'
            },
            _c[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
            },
            _c),
        rootChecked: {
            color: theme.palette.black,
        },
        iconChecked: {
            color: theme.palette.themeDarker,
        },
        flexContainer: {
            justifyContent: 'flex-start',
        },
        icon: {
            color: theme.palette.themeDarkAlt,
        },
        iconDisabled: {
            color: 'inherit',
        },
        menuIcon: {
            color: theme.palette.neutralSecondary,
        },
        textContainer: {
            flexGrow: 0,
        },
    };
    return Object(lib["r" /* concatStyleSets */])(baseButtonStyles, actionButtonStyles, customStyles);
});
//# sourceMappingURL=ActionButton.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/ActionButton/ActionButton.js





/**
 * {@docCategory Button}
 */
var ActionButton_ActionButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ActionButton, _super);
    function ActionButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionButton.prototype.render = function () {
        var _a;
        var styles = (_a = this.props, _a.styles), theme = _a.theme;
        return (react["createElement"](BaseButton["a" /* BaseButton */], Object(tslib_es6["a" /* __assign */])({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: getStyles(theme, styles), onRenderDescription: BaseComponent["a" /* nullRender */] })));
    };
    ActionButton = Object(tslib_es6["b" /* __decorate */])([
        Object(customizable["a" /* customizable */])('ActionButton', ['theme', 'styles'], true)
    ], ActionButton);
    return ActionButton;
}(react["Component"]));
//# sourceMappingURL=ActionButton.js.map

/***/ }),

/***/ "CmtH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Image; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.types.js
var Image_types = __webpack_require__("028r");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("9yo2");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var SVG_REGEX = /\.svg$/i;
var KEY_PREFIX = 'fabricImage';
function useLoadState(props, imageElement) {
    var onLoadingStateChange = props.onLoadingStateChange, onLoad = props.onLoad, onError = props.onError, src = props.src;
    var _a = react["useState"](Image_types["c" /* ImageLoadState */].notLoaded), loadState = _a[0], setLoadState = _a[1];
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        // If the src property changes, reset the load state
        // (does nothing if the load state is already notLoaded)
        setLoadState(Image_types["c" /* ImageLoadState */].notLoaded);
    }, [src]);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intended to run every render
    react["useEffect"](function () {
        if (loadState === Image_types["c" /* ImageLoadState */].notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = imageElement.current
                ? (src && imageElement.current.naturalWidth > 0 && imageElement.current.naturalHeight > 0) ||
                    (imageElement.current.complete && SVG_REGEX.test(src))
                : false;
            if (isLoaded) {
                setLoadState(Image_types["c" /* ImageLoadState */].loaded);
            }
        }
    });
    react["useEffect"](function () {
        onLoadingStateChange === null || onLoadingStateChange === void 0 ? void 0 : onLoadingStateChange(loadState);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run when loadState changes
    }, [loadState]);
    var onImageLoaded = react["useCallback"](function (ev) {
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(ev);
        if (src) {
            setLoadState(Image_types["c" /* ImageLoadState */].loaded);
        }
    }, [src, onLoad]);
    var onImageError = react["useCallback"](function (ev) {
        onError === null || onError === void 0 ? void 0 : onError(ev);
        setLoadState(Image_types["c" /* ImageLoadState */].error);
    }, [onError]);
    return [loadState, onImageLoaded, onImageError];
}
var ImageBase = react["forwardRef"](function (props, forwardedRef) {
    var frameElement = react["useRef"]();
    var imageElement = react["useRef"]();
    var _a = useLoadState(props, imageElement), loadState = _a[0], onImageLoaded = _a[1], onImageError = _a[2];
    var imageProps = Object(properties["h" /* getNativeProps */])(props, properties["k" /* imgProperties */], [
        'width',
        'height',
    ]);
    var src = props.src, alt = props.alt, width = props.width, height = props.height, _b = props.shouldFadeIn, shouldFadeIn = _b === void 0 ? true : _b, shouldStartVisible = props.shouldStartVisible, className = props.className, imageFit = props.imageFit, role = props.role, maximizeFrame = props.maximizeFrame, styles = props.styles, theme = props.theme, loading = props.loading;
    var coverStyle = useCoverStyle(props, loadState, imageElement, frameElement);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        width: width,
        height: height,
        maximizeFrame: maximizeFrame,
        shouldFadeIn: shouldFadeIn,
        shouldStartVisible: shouldStartVisible,
        isLoaded: loadState === Image_types["c" /* ImageLoadState */].loaded || (loadState === Image_types["c" /* ImageLoadState */].notLoaded && props.shouldStartVisible),
        isLandscape: coverStyle === Image_types["a" /* ImageCoverStyle */].landscape,
        isCenter: imageFit === Image_types["b" /* ImageFit */].center,
        isCenterContain: imageFit === Image_types["b" /* ImageFit */].centerContain,
        isCenterCover: imageFit === Image_types["b" /* ImageFit */].centerCover,
        isContain: imageFit === Image_types["b" /* ImageFit */].contain,
        isCover: imageFit === Image_types["b" /* ImageFit */].cover,
        isNone: imageFit === Image_types["b" /* ImageFit */].none,
        isError: loadState === Image_types["c" /* ImageLoadState */].error,
        isNotImageFit: imageFit === undefined,
    });
    // If image dimensions aren't specified, the natural size of the image is used.
    return (react["createElement"]("div", { className: classNames.root, style: { width: width, height: height }, ref: frameElement },
        react["createElement"]("img", Object(tslib_es6["a" /* __assign */])({}, imageProps, { onLoad: onImageLoaded, onError: onImageError, key: KEY_PREFIX + props.src || '', className: classNames.image, ref: Object(useMergedRefs["a" /* useMergedRefs */])(imageElement, forwardedRef), src: src, alt: alt, role: role, loading: loading }))));
});
ImageBase.displayName = 'ImageBase';
function useCoverStyle(props, loadState, imageElement, frameElement) {
    var previousLoadState = react["useRef"](loadState);
    var coverStyle = react["useRef"]();
    if (coverStyle === undefined ||
        (previousLoadState.current === Image_types["c" /* ImageLoadState */].notLoaded && loadState === Image_types["c" /* ImageLoadState */].loaded)) {
        coverStyle.current = computeCoverStyle(props, loadState, imageElement, frameElement);
    }
    previousLoadState.current = loadState;
    return coverStyle.current;
}
function computeCoverStyle(props, loadState, imageElement, frameElement) {
    var imageFit = props.imageFit, width = props.width, height = props.height;
    // Do not compute cover style if it was already specified in props
    if (props.coverStyle !== undefined) {
        return props.coverStyle;
    }
    else if (loadState === Image_types["c" /* ImageLoadState */].loaded &&
        (imageFit === Image_types["b" /* ImageFit */].cover ||
            imageFit === Image_types["b" /* ImageFit */].contain ||
            imageFit === Image_types["b" /* ImageFit */].centerContain ||
            imageFit === Image_types["b" /* ImageFit */].centerCover) &&
        imageElement.current &&
        frameElement.current) {
        // Determine the desired ratio using the width and height props.
        // If those props aren't available, measure measure the frame.
        var desiredRatio = void 0;
        if (typeof width === 'number' &&
            typeof height === 'number' &&
            imageFit !== Image_types["b" /* ImageFit */].centerContain &&
            imageFit !== Image_types["b" /* ImageFit */].centerCover) {
            desiredRatio = width / height;
        }
        else {
            desiredRatio = frameElement.current.clientWidth / frameElement.current.clientHeight;
        }
        // Examine the source image to determine its original ratio.
        var naturalRatio = imageElement.current.naturalWidth / imageElement.current.naturalHeight;
        // Should we crop from the top or the sides?
        if (naturalRatio > desiredRatio) {
            return Image_types["a" /* ImageCoverStyle */].landscape;
        }
    }
    return Image_types["a" /* ImageCoverStyle */].portrait;
}
//# sourceMappingURL=Image.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.styles.js


var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageCenterContain: 'ms-Image-image--centerContain',
    imageCenterCover: 'ms-Image-image--centerCover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait',
};
var getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isCenterContain = props.isCenterContain, isCenterCover = props.isCenterCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)', // @todo test RTL renders transform: translate(50%,-50%);
    };
    // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit
    var window = Object(getWindow["a" /* getWindow */])();
    var supportsObjectFit = window !== undefined &&
        // eslint-disable-next-line @fluentui/max-len
        // cast needed as vendor prefixed `msMaxTouchPoints` api is no longer part of TS lib declaration - introduced with TS 4.4
        window.navigator.msMaxTouchPoints === undefined;
    var fallbackObjectFitStyles = (isContain && isLandscape) || (isCover && !isLandscape)
        ? { width: '100%', height: 'auto' }
        : { width: 'auto', height: '100%' };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                overflow: 'hidden',
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%',
                },
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && lib["a" /* AnimationClassNames */].fadeIn400,
            (isCenter || isContain || isCover || isCenterContain || isCenterCover) && {
                position: 'relative',
            },
            className,
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0,
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1,
                },
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                !supportsObjectFit && ImageFitStyles,
            ],
            isCover && [
                classNames.imageCover,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                !supportsObjectFit && ImageFitStyles,
            ],
            isCenterContain && [
                classNames.imageCenterContain,
                isLandscape && {
                    maxWidth: '100%',
                },
                !isLandscape && {
                    maxHeight: '100%',
                },
                ImageFitStyles,
            ],
            isCenterCover && [
                classNames.imageCenterCover,
                isLandscape && {
                    maxHeight: '100%',
                },
                !isLandscape && {
                    maxWidth: '100%',
                },
                ImageFitStyles,
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto',
                },
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%',
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto',
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%',
                },
            ],
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error',
        ],
    };
};
//# sourceMappingURL=Image.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.js



var Image = Object(styled["a" /* styled */])(ImageBase, getStyles, undefined, {
    scope: 'Image',
}, true);
Image.displayName = 'Image';
//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "Favm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DefaultButton_DefaultButton; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.js + 24 modules
var BaseButton = __webpack_require__("1rtd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/BaseComponent.js
var BaseComponent = __webpack_require__("3eXo");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/customizable.js + 1 modules
var customizable = __webpack_require__("GAaB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.styles.js
var BaseButton_styles = __webpack_require__("d4Kq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/SplitButton/SplitButton.styles.js
var SplitButton_styles = __webpack_require__("9gkV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/ButtonThemes.js



var splitButtonDividerBaseStyles = function () {
    return {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8,
    };
};
function standardStyles(theme) {
    var _a, _b, _c, _d, _e;
    var s = theme.semanticColors, p = theme.palette;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundPressed = s.buttonBackgroundPressed;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonBackgroundDisabled = s.buttonBackgroundDisabled;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextDisabled = s.buttonTextDisabled;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText,
        },
        rootHovered: (_a = {
                backgroundColor: buttonBackgroundHovered,
                color: buttonTextHovered
            },
            _a[lib["f" /* HighContrastSelector */]] = {
                borderColor: 'Highlight',
                color: 'Highlight',
            },
            _a),
        rootPressed: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootChecked: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootCheckedHovered: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextCheckedHovered,
        },
        rootDisabled: (_b = {
                color: buttonTextDisabled,
                backgroundColor: buttonBackgroundDisabled
            },
            _b[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
                borderColor: 'GrayText',
                backgroundColor: 'Window',
            },
            _b),
        // Split button styles
        splitButtonContainer: (_c = {},
            _c[lib["f" /* HighContrastSelector */]] = {
                border: 'none',
            },
            _c),
        splitButtonMenuButton: {
            color: p.white,
            backgroundColor: 'transparent',
            ':hover': (_d = {
                    backgroundColor: p.neutralLight
                },
                _d[lib["f" /* HighContrastSelector */]] = {
                    color: 'Highlight',
                },
                _d),
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.buttonBackgroundDisabled,
            ':hover': {
                backgroundColor: s.buttonBackgroundDisabled,
            },
        },
        splitButtonDivider: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, splitButtonDividerBaseStyles()), (_e = { backgroundColor: p.neutralTertiaryAlt }, _e[lib["f" /* HighContrastSelector */]] = {
            backgroundColor: 'WindowText',
        }, _e)),
        splitButtonDividerDisabled: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: p.neutralQuaternaryAlt,
            ':hover': {
                backgroundColor: p.neutralQuaternaryAlt,
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: p.neutralQuaternaryAlt,
            ':hover': {
                backgroundColor: p.neutralQuaternaryAlt,
            },
        },
        splitButtonMenuIcon: {
            color: s.buttonText,
        },
        splitButtonMenuIconDisabled: {
            color: s.buttonTextDisabled,
        },
    };
}
function primaryStyles(theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var p = theme.palette, s = theme.semanticColors;
    return {
        root: (_a = {
                backgroundColor: s.primaryButtonBackground,
                border: "1px solid ".concat(s.primaryButtonBackground),
                color: s.primaryButtonText
            },
            _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'Window', backgroundColor: 'WindowText', borderColor: 'WindowText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
            _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus")] = {
                ':after': {
                    border: "none",
                    outlineColor: p.white,
                },
            },
            _a),
        rootHovered: (_b = {
                backgroundColor: s.primaryButtonBackgroundHovered,
                border: "1px solid ".concat(s.primaryButtonBackgroundHovered),
                color: s.primaryButtonTextHovered
            },
            _b[lib["f" /* HighContrastSelector */]] = {
                color: 'Window',
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
            },
            _b),
        rootPressed: (_c = {
                backgroundColor: s.primaryButtonBackgroundPressed,
                border: "1px solid ".concat(s.primaryButtonBackgroundPressed),
                color: s.primaryButtonTextPressed
            },
            _c[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'Window', backgroundColor: 'WindowText', borderColor: 'WindowText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
            _c),
        rootExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootCheckedHovered: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootDisabled: (_d = {
                color: s.primaryButtonTextDisabled,
                backgroundColor: s.primaryButtonBackgroundDisabled
            },
            _d[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
                borderColor: 'GrayText',
                backgroundColor: 'Window',
            },
            _d),
        // Split button styles
        splitButtonContainer: (_e = {},
            _e[lib["f" /* HighContrastSelector */]] = {
                border: 'none',
            },
            _e),
        splitButtonDivider: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, splitButtonDividerBaseStyles()), (_f = { backgroundColor: p.white }, _f[lib["f" /* HighContrastSelector */]] = {
            backgroundColor: 'Window',
        }, _f)),
        splitButtonMenuButton: (_g = {
                backgroundColor: s.primaryButtonBackground,
                color: s.primaryButtonText
            },
            _g[lib["f" /* HighContrastSelector */]] = {
                backgroundColor: 'Canvas',
            },
            _g[':hover'] = (_h = {
                    backgroundColor: s.primaryButtonBackgroundHovered
                },
                _h[lib["f" /* HighContrastSelector */]] = {
                    color: 'Highlight',
                },
                _h),
            _g),
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.primaryButtonBackgroundDisabled,
            ':hover': {
                backgroundColor: s.primaryButtonBackgroundDisabled,
            },
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            ':hover': {
                backgroundColor: s.primaryButtonBackgroundPressed,
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            ':hover': {
                backgroundColor: s.primaryButtonBackgroundPressed,
            },
        },
        splitButtonMenuIcon: {
            color: s.primaryButtonText,
        },
        splitButtonMenuIconDisabled: (_j = {
                color: p.neutralTertiary
            },
            _j[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
            },
            _j),
    };
}
//# sourceMappingURL=ButtonThemes.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.styles.js





var DEFAULT_BUTTON_MIN_HEIGHT = '32px';
var DEFAULT_BUTTON_MIN_WIDTH = '80px';
var getStyles = Object(memoize["b" /* memoizeFunction */])(function (theme, customStyles, primary) {
    var baseButtonStyles = Object(BaseButton_styles["a" /* getStyles */])(theme);
    var splitButtonStyles = Object(SplitButton_styles["a" /* getStyles */])(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MIN_WIDTH,
            minHeight: DEFAULT_BUTTON_MIN_HEIGHT,
        },
        label: {
            fontWeight: lib["e" /* FontWeights */].semibold,
        },
    };
    return Object(lib["r" /* concatStyleSets */])(baseButtonStyles, defaultButtonStyles, primary ? primaryStyles(theme) : standardStyles(theme), splitButtonStyles, customStyles);
});
//# sourceMappingURL=DefaultButton.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js





/**
 * {@docCategory Button}
 */
var DefaultButton_DefaultButton = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DefaultButton, _super);
    function DefaultButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultButton.prototype.render = function () {
        var _a, _b;
        var primary = (_a = this.props, _b = _a.primary, _b === void 0 ? false : _b), styles = _a.styles, theme = _a.theme;
        return (react["createElement"](BaseButton["a" /* BaseButton */], Object(tslib_es6["a" /* __assign */])({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: getStyles(theme, styles, primary), onRenderDescription: BaseComponent["a" /* nullRender */] })));
    };
    DefaultButton = Object(tslib_es6["b" /* __decorate */])([
        Object(customizable["a" /* customizable */])('DefaultButton', ['theme', 'styles'], true)
    ], DefaultButton);
    return DefaultButton;
}(react["Component"]));
//# sourceMappingURL=DefaultButton.js.map

/***/ }),

/***/ "Ggpd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PersonaSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PersonaPresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaInitialsColor; });
/**
 * {@docCategory Persona}
 */
var PersonaSize;
(function (PersonaSize) {
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size8` instead.
     */
    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size24` instead.
     */
    PersonaSize[PersonaSize["extraExtraSmall"] = 1] = "extraExtraSmall";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size32` instead.
     */
    PersonaSize[PersonaSize["extraSmall"] = 2] = "extraSmall";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size40` instead.
     */
    PersonaSize[PersonaSize["small"] = 3] = "small";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size48` instead.
     */
    PersonaSize[PersonaSize["regular"] = 4] = "regular";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size72` instead.
     */
    PersonaSize[PersonaSize["large"] = 5] = "large";
    /**
     * Deprecated in favor of standardized numeric sizing.
     * @deprecated Use `size100` instead.
     */
    PersonaSize[PersonaSize["extraLarge"] = 6] = "extraLarge";
    /**
     * No `PersonaCoin` is rendered.
     */
    PersonaSize[PersonaSize["size8"] = 17] = "size8";
    /**
     * No `PersonaCoin` is rendered. Deprecated to align with design specifications.
     * @deprecated Use `size8` instead.
     */
    PersonaSize[PersonaSize["size10"] = 9] = "size10";
    /**
     * Renders a 16px `PersonaCoin`.
     * @deprecated Deprecated due to not being in the design specification.
     */
    PersonaSize[PersonaSize["size16"] = 8] = "size16";
    /**
     * Renders a 24px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size24"] = 10] = "size24";
    /**
     * Renders a 28px `PersonaCoin`.
     * @deprecated Deprecated due to not being in the design specification.
     */
    PersonaSize[PersonaSize["size28"] = 7] = "size28";
    /**
     * Renders a 32px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size32"] = 11] = "size32";
    /**
     * Renders a 40px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size40"] = 12] = "size40";
    /**
     * Renders a 48px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size48"] = 13] = "size48";
    /**
     * Renders a 56px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size56"] = 16] = "size56";
    /**
     * Renders a 72px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size72"] = 14] = "size72";
    /**
     * Renders a 100px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size100"] = 15] = "size100";
    /**
     * Renders a 120px `PersonaCoin`.
     */
    PersonaSize[PersonaSize["size120"] = 18] = "size120";
})(PersonaSize || (PersonaSize = {}));
/**
 * {@docCategory Persona}
 */
var PersonaPresence;
(function (PersonaPresence) {
    PersonaPresence[PersonaPresence["none"] = 0] = "none";
    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
    PersonaPresence[PersonaPresence["online"] = 2] = "online";
    PersonaPresence[PersonaPresence["away"] = 3] = "away";
    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
    PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
})(PersonaPresence || (PersonaPresence = {}));
/**
 * {@docCategory Persona}
 */
var PersonaInitialsColor;
(function (PersonaInitialsColor) {
    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
    /**
     * @deprecated `black` is a color that can result in offensive persona coins with some initials combinations,
     * so it can only be set with overrides. Will be removed in a future major release.
     */
    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
    /**
     * @deprecated `red` is a color that often has a special meaning, so it is considered a reserved color and
     * can only be set with overrides. Will be removed in a future major release.
     */
    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
    /**
     * Transparent is not intended to be used with typical initials due to accessibility issues.
     * Its primary use is for overflow buttons, so it is considered a reserved color and can only be set with overrides.
     */
    PersonaInitialsColor[PersonaInitialsColor["transparent"] = 15] = "transparent";
    PersonaInitialsColor[PersonaInitialsColor["violet"] = 16] = "violet";
    PersonaInitialsColor[PersonaInitialsColor["lightRed"] = 17] = "lightRed";
    PersonaInitialsColor[PersonaInitialsColor["gold"] = 18] = "gold";
    PersonaInitialsColor[PersonaInitialsColor["burgundy"] = 19] = "burgundy";
    PersonaInitialsColor[PersonaInitialsColor["warmGray"] = 20] = "warmGray";
    PersonaInitialsColor[PersonaInitialsColor["coolGray"] = 21] = "coolGray";
    /**
     * `gray` is a color that can result in offensive persona coins with some initials combinations,
     * so it can only be set with overrides.
     */
    PersonaInitialsColor[PersonaInitialsColor["gray"] = 22] = "gray";
    PersonaInitialsColor[PersonaInitialsColor["cyan"] = 23] = "cyan";
    PersonaInitialsColor[PersonaInitialsColor["rust"] = 24] = "rust";
})(PersonaInitialsColor || (PersonaInitialsColor = {}));
//# sourceMappingURL=Persona.types.js.map

/***/ }),

/***/ "I0MF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bf8k");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uxh7");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e6CW");



var COMPONENT_NAME = 'PivotItem';
var PivotItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(PivotItem, _super);
    function PivotItem(props) {
        var _this = _super.call(this, props) || this;
        Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__[/* initializeComponentRef */ "a"])(_this);
        Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__[/* warnDeprecations */ "a"])(COMPONENT_NAME, props, {
            linkText: 'headerText',
        });
        return _this;
    }
    PivotItem.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__[/* getNativeProps */ "h"])(this.props, _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__[/* divProperties */ "f"])), this.props.children);
    };
    return PivotItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=PivotItem.js.map

/***/ }),

/***/ "I0jv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Spinner; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.types.js
/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize || (SpinnerSize = {}));
/**
 * @deprecated Use `SpinnerSize` instead. Will be removed at \>= 2.0.0.
 * {@docCategory Spinner}
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * @deprecated Use `SpinnerSize.medium` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * @deprecated Use `SpinnerSize.large` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType || (SpinnerType = {}));
//# sourceMappingURL=Spinner.types.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/DelayedRender.js
var DelayedRender = __webpack_require__("5sqY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.base.js




var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var Spinner_base_SpinnerBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SpinnerBase, _super);
    function SpinnerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerBase.prototype.render = function () {
        var _a;
        // eslint-disable-next-line deprecation/deprecation
        var type = (_a = this.props, _a.type), size = _a.size, ariaLabel = _a.ariaLabel, ariaLive = _a.ariaLive, styles = _a.styles, label = _a.label, theme = _a.theme, className = _a.className, labelPosition = _a.labelPosition;
        var statusMessage = ariaLabel;
        var nativeProps = Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */], ['size']);
        // SpinnerType is deprecated. If someone is still using this property, rather than putting the SpinnerType into the
        // ISpinnerStyleProps, we'll map SpinnerType to its equivalent SpinnerSize and pass that in. Once SpinnerType
        // finally goes away we should delete this.
        var styleSize = size;
        if (styleSize === undefined && type !== undefined) {
            // eslint-disable-next-line deprecation/deprecation
            styleSize = type === SpinnerType.large ? SpinnerSize.large : SpinnerSize.medium;
        }
        var classNames = getClassNames(styles, {
            theme: theme,
            size: styleSize,
            className: className,
            labelPosition: labelPosition,
        });
        return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, nativeProps, { className: classNames.root }),
            react["createElement"]("div", { className: classNames.circle }),
            label && react["createElement"]("div", { className: classNames.label }, label),
            statusMessage && (react["createElement"]("div", { role: "status", "aria-live": ariaLive },
                react["createElement"](DelayedRender["a" /* DelayedRender */], null,
                    react["createElement"]("div", { className: classNames.screenReaderText }, statusMessage))))));
    };
    SpinnerBase.defaultProps = {
        size: SpinnerSize.medium,
        ariaLive: 'polite',
        labelPosition: 'bottom',
    };
    return SpinnerBase;
}(react["Component"]));
//# sourceMappingURL=Spinner.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.styles.js




var GlobalClassNames = {
    root: 'ms-Spinner',
    circle: 'ms-Spinner-circle',
    label: 'ms-Spinner-label',
};
var spinAnimation = Object(memoize["b" /* memoizeFunction */])(function () {
    return Object(lib["D" /* keyframes */])({
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    });
});
var getStyles = function (props) {
    var _a;
    var theme = props.theme, size = props.size, className = props.className, labelPosition = props.labelPosition;
    var palette = theme.palette;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            labelPosition === 'top' && {
                flexDirection: 'column-reverse',
            },
            labelPosition === 'right' && {
                flexDirection: 'row',
            },
            labelPosition === 'left' && {
                flexDirection: 'row-reverse',
            },
            className,
        ],
        circle: [
            classNames.circle,
            {
                boxSizing: 'border-box',
                borderRadius: '50%',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderTopColor: palette.themePrimary,
                borderRightColor: palette.themeLight,
                borderBottomColor: palette.themeLight,
                borderLeftColor: palette.themeLight,
                animationName: spinAnimation(),
                animationDuration: '1.3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderTopColor: 'Highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _a),
            },
            size === SpinnerSize.xSmall && [
                'ms-Spinner--xSmall',
                {
                    width: 12,
                    height: 12,
                },
            ],
            size === SpinnerSize.small && [
                'ms-Spinner--small',
                {
                    width: 16,
                    height: 16,
                },
            ],
            size === SpinnerSize.medium && [
                'ms-Spinner--medium',
                {
                    width: 20,
                    height: 20,
                },
            ],
            size === SpinnerSize.large && [
                'ms-Spinner--large',
                {
                    width: 28,
                    height: 28,
                },
            ],
        ],
        label: [
            classNames.label,
            theme.fonts.small,
            {
                color: palette.themePrimary,
                margin: '8px 0 0',
                textAlign: 'center',
            },
            labelPosition === 'top' && {
                margin: '0 0 8px',
            },
            labelPosition === 'right' && {
                margin: '0 0 0 8px',
            },
            labelPosition === 'left' && {
                margin: '0 8px 0 0',
            },
        ],
        screenReaderText: lib["C" /* hiddenContentStyle */],
    };
};
//# sourceMappingURL=Spinner.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.js



var Spinner = Object(styled["a" /* styled */])(Spinner_base_SpinnerBase, getStyles, undefined, { scope: 'Spinner' });
//# sourceMappingURL=Spinner.js.map

/***/ }),

/***/ "IEJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DialogFooter; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogFooter.base.js



var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DialogFooter_base_DialogFooterBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DialogFooterBase, _super);
    function DialogFooterBase(props) {
        var _this = _super.call(this, props) || this;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        return _this;
    }
    DialogFooterBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (react["createElement"]("div", { className: this._classNames.actions },
            react["createElement"]("div", { className: this._classNames.actionsRight }, this._renderChildrenAsActions())));
    };
    DialogFooterBase.prototype._renderChildrenAsActions = function () {
        var _this = this;
        return react["Children"].map(this.props.children, function (child) {
            return child ? react["createElement"]("span", { className: _this._classNames.action }, child) : null;
        });
    };
    return DialogFooterBase;
}(react["Component"]));

//# sourceMappingURL=DialogFooter.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogFooter.styles.js

var GlobalClassNames = {
    actions: 'ms-Dialog-actions',
    action: 'ms-Dialog-action',
    actionsRight: 'ms-Dialog-actionsRight',
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        actions: [
            classNames.actions,
            {
                position: 'relative',
                width: '100%',
                minHeight: '24px',
                lineHeight: '24px',
                margin: '16px 0 0',
                fontSize: '0',
                selectors: {
                    '.ms-Button': {
                        lineHeight: 'normal',
                        verticalAlign: 'middle',
                    },
                },
            },
            className,
        ],
        action: [
            classNames.action,
            {
                margin: '0 4px',
            },
        ],
        actionsRight: [
            classNames.actionsRight,
            {
                alignItems: 'center',
                display: 'flex',
                fontSize: '0',
                justifyContent: 'flex-end',
                marginRight: '-4px',
            },
        ],
    };
};
//# sourceMappingURL=DialogFooter.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dialog/DialogFooter.js



var DialogFooter = Object(styled["a" /* styled */])(DialogFooter_base_DialogFooterBase, getStyles, undefined, { scope: 'DialogFooter' });
DialogFooter.displayName = 'DialogFooter';
//# sourceMappingURL=DialogFooter.js.map

/***/ }),

/***/ "KIfy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIconContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontIcon; });
/* unused harmony export getFontIcon */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y/yH");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("02QY");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e6CW");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WjVC");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ogYq");





var getIconContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* memoizeFunction */ "b"])(function (iconName) {
    var _a = Object(_Styling__WEBPACK_IMPORTED_MODULE_6__[/* getIcon */ "x"])(iconName) || {
        subset: {},
        code: undefined,
    }, code = _a.code, subset = _a.subset;
    if (!code) {
        return null;
    }
    return {
        children: code,
        iconClassName: subset.className,
        fontFamily: subset.fontFace && subset.fontFace.fontFamily,
        mergeImageProps: subset.mergeImageProps,
    };
}, undefined, true /*ignoreNullOrUndefinedResult */);
/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
var FontIcon = function (props) {
    var iconName = props.iconName, className = props.className, _a = props.style, style = _a === void 0 ? {} : _a;
    var iconContent = getIconContent(iconName) || {};
    var iconClassName = iconContent.iconClassName, children = iconContent.children, fontFamily = iconContent.fontFamily, mergeImageProps = iconContent.mergeImageProps;
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getNativeProps */ "h"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_4__[/* htmlElementProperties */ "i"]);
    var accessibleName = props['aria-label'] || props.title;
    var containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
        ? {
            role: mergeImageProps ? undefined : 'img',
        }
        : {
            'aria-hidden': true,
        };
    var finalChildren = children;
    if (mergeImageProps) {
        if (typeof children === 'object' && typeof children.props === 'object' && accessibleName) {
            finalChildren = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](children, { alt: accessibleName });
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ "data-icon-name": iconName }, containerProps, nativeProps, (mergeImageProps
        ? {
            title: undefined,
            'aria-label': undefined,
        }
        : {}), { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* css */ "a"])(_Icon_styles__WEBPACK_IMPORTED_MODULE_2__[/* MS_ICON */ "a"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__[/* classNames */ "b"].root, iconClassName, !iconName && _Icon_styles__WEBPACK_IMPORTED_MODULE_2__[/* classNames */ "b"].placeholder, className), 
        // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
        // https://github.com/microsoft/fluentui/issues/10449
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ fontFamily: fontFamily }, style) }), finalChildren));
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */
var getFontIcon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* memoizeFunction */ "b"])(function (iconName, className, ariaLabel) {
    return FontIcon({ iconName: iconName, className: className, 'aria-label': ariaLabel });
});
//# sourceMappingURL=FontIcon.js.map

/***/ }),

/***/ "KSXz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationState; });
/**
 * Validation state of the user's input.
 * {@docCategory Pickers}
 */
var ValidationState;
(function (ValidationState) {
    /** User input is valid. */
    ValidationState[ValidationState["valid"] = 0] = "valid";
    /** User input could be valid or invalid, its state is not known yet. */
    ValidationState[ValidationState["warning"] = 1] = "warning";
    /** User input is invalid. */
    ValidationState[ValidationState["invalid"] = 2] = "invalid";
})(ValidationState || (ValidationState = {}));
//# sourceMappingURL=BasePicker.types.js.map

/***/ }),

/***/ "M1CV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBaseButtonClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02QY");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");


var ButtonGlobalClassNames = {
    msButton: 'ms-Button',
    msButtonHasMenu: 'ms-Button--hasMenu',
    msButtonIcon: 'ms-Button-icon',
    msButtonMenuIcon: 'ms-Button-menuIcon',
    msButtonLabel: 'ms-Button-label',
    msButtonDescription: 'ms-Button-description',
    msButtonScreenReaderText: 'ms-Button-screenReaderText',
    msButtonFlexContainer: 'ms-Button-flexContainer',
    msButtonTextContainer: 'ms-Button-textContainer',
};
var getBaseButtonClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__[/* memoizeFunction */ "b"])(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, hasMenu, checked, expanded, isSplit) {
    var _a, _b;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalClassNames */ "v"])(ButtonGlobalClassNames, theme || {});
    var isExpanded = expanded && !isSplit;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyleSets */ "E"])(styles.__shadowConfig__, {
        root: [
            classNames.msButton,
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                (_a = {},
                    _a[":hover .".concat(classNames.msButtonIcon)] = styles.iconExpandedHovered,
                    // menuIcon falls back to rootExpandedHovered to support original behavior
                    _a[":hover .".concat(classNames.msButtonMenuIcon)] = styles.menuIconExpandedHovered || styles.rootExpandedHovered,
                    _a[':hover'] = styles.rootExpandedHovered,
                    _a),
            ],
            hasMenu && [ButtonGlobalClassNames.msButtonHasMenu, styles.rootHasMenu],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && (_b = {
                    ':hover': styles.rootHovered
                },
                _b[":hover .".concat(classNames.msButtonLabel)] = styles.labelHovered,
                _b[":hover .".concat(classNames.msButtonIcon)] = styles.iconHovered,
                _b[":hover .".concat(classNames.msButtonDescription)] = styles.descriptionHovered,
                _b[":hover .".concat(classNames.msButtonMenuIcon)] = styles.menuIconHovered,
                _b[':focus'] = styles.rootFocused,
                _b[':active'] = styles.rootPressed,
                _b[":active .".concat(classNames.msButtonIcon)] = styles.iconPressed,
                _b[":active .".concat(classNames.msButtonDescription)] = styles.descriptionPressed,
                _b[":active .".concat(classNames.msButtonMenuIcon)] = styles.menuIconPressed,
                _b),
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                ':hover': styles.rootCheckedHovered,
                ':active': styles.rootCheckedPressed,
            },
            className,
        ],
        flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
        textContainer: [classNames.msButtonTextContainer, styles.textContainer],
        icon: [
            classNames.msButtonIcon,
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled,
        ],
        label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            classNames.msButtonMenuIcon,
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && !isSplit && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                ':hover': styles.menuIconHovered,
                ':active': styles.menuIconPressed,
            },
            isExpanded && ['is-expanded', styles.menuIconExpanded],
        ],
        description: [
            classNames.msButtonDescription,
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled,
        ],
        screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText],
    });
});
//# sourceMappingURL=BaseButton.classNames.js.map

/***/ }),

/***/ "N1b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Panel; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__("9bYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.js + 6 modules
var Layer = __webpack_require__("TG3e");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Overlay/Overlay.js + 2 modules
var Overlay = __webpack_require__("0nTY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Popup/Popup.js
var Popup = __webpack_require__("glTW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js
var lib_scroll = __webpack_require__("4H/l");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js
var warnDeprecations = __webpack_require__("uxh7");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/elementContains.js
var elementContains = __webpack_require__("H5Ur");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/FocusTrapZone/FocusTrapZone.js
var FocusTrapZone = __webpack_require__("lLjQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Panel/Panel.types.js
var Panel_types = __webpack_require__("mxb3");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Panel/Panel.base.js











var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var COMPONENT_NAME = 'Panel';
var PanelVisibilityState;
(function (PanelVisibilityState) {
    PanelVisibilityState[PanelVisibilityState["closed"] = 0] = "closed";
    PanelVisibilityState[PanelVisibilityState["animatingOpen"] = 1] = "animatingOpen";
    PanelVisibilityState[PanelVisibilityState["open"] = 2] = "open";
    PanelVisibilityState[PanelVisibilityState["animatingClosed"] = 3] = "animatingClosed";
})(PanelVisibilityState || (PanelVisibilityState = {}));
var Panel_base_PanelBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(PanelBase, _super);
    function PanelBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this._panel = react["createRef"]();
        _this._animationCallback = null;
        _this._hasCustomNavigation = !!(_this.props.onRenderNavigation || _this.props.onRenderNavigationContent);
        _this.dismiss = function (ev) {
            if (_this.props.onDismiss && _this.isActive) {
                _this.props.onDismiss(ev);
            }
            if (!ev || (ev && !ev.defaultPrevented)) {
                _this.close();
            }
        };
        // Allow the user to scroll within the panel but not on the body
        _this._allowScrollOnPanel = function (elt) {
            if (elt) {
                if (_this._allowTouchBodyScroll) {
                    Object(lib_scroll["a" /* allowOverscrollOnElement */])(elt, _this._events);
                }
                else {
                    Object(lib_scroll["b" /* allowScrollOnElement */])(elt, _this._events);
                }
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this._onRenderNavigation = function (props) {
            var _a;
            if (!_this.props.onRenderNavigationContent && !_this.props.onRenderNavigation && !_this.props.hasCloseButton) {
                return null;
            }
            var onRenderNavigationContent = (_a = _this.props.onRenderNavigationContent, _a === void 0 ? _this._onRenderNavigationContent : _a);
            return (react["createElement"]("div", { className: _this._classNames.navigation }, onRenderNavigationContent(props, _this._onRenderNavigationContent)));
        };
        _this._onRenderNavigationContent = function (props) {
            var _a;
            var _b;
            var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton, onRenderHeader = (_a = props.onRenderHeader, _a === void 0 ? _this._onRenderHeader : _a);
            if (hasCloseButton) {
                var iconButtonStyles = (_b = _this._classNames.subComponentStyles) === null || _b === void 0 ? void 0 : _b.closeButton();
                return (react["createElement"](react["Fragment"], null,
                    !_this._hasCustomNavigation && onRenderHeader(_this.props, _this._onRenderHeader, _this._headerTextId),
                    react["createElement"](IconButton["a" /* IconButton */], { styles: iconButtonStyles, className: _this._classNames.closeButton, onClick: _this._onPanelClick, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } })));
            }
            return null;
        };
        _this._onRenderHeader = function (props, defaultRender, headerTextId) {
            var _a;
            var headerText = props.headerText, headerTextProps = (_a = props.headerTextProps, _a === void 0 ? {} : _a);
            if (headerText) {
                return (react["createElement"]("div", { className: _this._classNames.header },
                    react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ id: headerTextId, role: "heading", "aria-level": 1 }, headerTextProps, { className: Object(css["a" /* css */])(_this._classNames.headerText, headerTextProps.className) }), headerText)));
            }
            return null;
        };
        _this._onRenderBody = function (props) {
            return react["createElement"]("div", { className: _this._classNames.content }, props.children);
        };
        _this._onRenderFooter = function (props) {
            var _a;
            var onRenderFooterContent = (_a = _this.props.onRenderFooterContent, _a === void 0 ? null : _a);
            if (onRenderFooterContent) {
                return (react["createElement"]("div", { className: _this._classNames.footer },
                    react["createElement"]("div", { className: _this._classNames.footerInner }, onRenderFooterContent())));
            }
            return null;
        };
        _this._animateTo = function (newVisibilityState) {
            if (newVisibilityState === PanelVisibilityState.open && _this.props.onOpen) {
                _this.props.onOpen();
            }
            _this._animationCallback = _this._async.setTimeout(function () {
                _this.setState({ visibility: newVisibilityState });
                _this._onTransitionComplete(newVisibilityState);
            }, 200);
        };
        _this._clearExistingAnimationTimer = function () {
            if (_this._animationCallback !== null) {
                _this._async.clearTimeout(_this._animationCallback);
            }
        };
        _this._onPanelClick = function (ev) {
            _this.dismiss(ev);
        };
        _this._onTransitionComplete = function (newVisibilityState) {
            _this._updateFooterPosition();
            if (newVisibilityState === PanelVisibilityState.open && _this.props.onOpened) {
                _this.props.onOpened();
            }
            if (newVisibilityState === PanelVisibilityState.closed && _this.props.onDismissed) {
                _this.props.onDismissed();
            }
        };
        var allowTouchBodyScroll = (_a = _this.props.allowTouchBodyScroll, _a === void 0 ? false : _a);
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        Object(warnDeprecations["a" /* warnDeprecations */])(COMPONENT_NAME, props, {
            ignoreExternalFocusing: 'focusTrapZoneProps',
            forceFocusInsideTrap: 'focusTrapZoneProps',
            firstFocusableSelector: 'focusTrapZoneProps',
        });
        _this.state = {
            isFooterSticky: false,
            // intentionally ignore props so animation takes place during componentDidMount
            visibility: PanelVisibilityState.closed,
            id: Object(getId["a" /* getId */])('Panel'),
        };
        return _this;
    }
    PanelBase.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.isOpen === undefined) {
            return null; // no state update
        }
        if (nextProps.isOpen &&
            (prevState.visibility === PanelVisibilityState.closed ||
                prevState.visibility === PanelVisibilityState.animatingClosed)) {
            return { visibility: PanelVisibilityState.animatingOpen };
        }
        if (!nextProps.isOpen &&
            (prevState.visibility === PanelVisibilityState.open ||
                prevState.visibility === PanelVisibilityState.animatingOpen)) {
            return { visibility: PanelVisibilityState.animatingClosed };
        }
        return null;
    };
    PanelBase.prototype.componentDidMount = function () {
        this._async = new Async["a" /* Async */](this);
        this._events = new EventGroup["a" /* EventGroup */](this);
        var win = Object(dom["b" /* getWindowEx */])(this.context);
        var doc = Object(dom["a" /* getDocumentEx */])(this.context);
        this._events.on(win, 'resize', this._updateFooterPosition);
        if (this._shouldListenForOuterClick(this.props)) {
            this._events.on(doc === null || doc === void 0 ? void 0 : doc.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        if (this.props.isOpen) {
            this.setState({ visibility: PanelVisibilityState.animatingOpen });
        }
    };
    PanelBase.prototype.componentDidUpdate = function (previousProps, previousState) {
        var shouldListenOnOuterClick = this._shouldListenForOuterClick(this.props);
        var previousShouldListenOnOuterClick = this._shouldListenForOuterClick(previousProps);
        if (this.state.visibility !== previousState.visibility) {
            this._clearExistingAnimationTimer();
            if (this.state.visibility === PanelVisibilityState.animatingOpen) {
                this._animateTo(PanelVisibilityState.open);
            }
            else if (this.state.visibility === PanelVisibilityState.animatingClosed) {
                this._animateTo(PanelVisibilityState.closed);
            }
        }
        var doc = Object(dom["a" /* getDocumentEx */])(this.context);
        if (shouldListenOnOuterClick && !previousShouldListenOnOuterClick) {
            this._events.on(doc === null || doc === void 0 ? void 0 : doc.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        else if (!shouldListenOnOuterClick && previousShouldListenOnOuterClick) {
            this._events.off(doc === null || doc === void 0 ? void 0 : doc.body, 'mousedown', this._dismissOnOuterClick, true);
        }
    };
    PanelBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    PanelBase.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var className = (_a = this.props, _b = _a.className, _b === void 0 ? '' : _b), elementToFocusOnDismiss = _a.elementToFocusOnDismiss, 
        /* eslint-disable deprecation/deprecation */
        firstFocusableSelector = _a.firstFocusableSelector, focusTrapZoneProps = _a.focusTrapZoneProps, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, headerClassName = (_c = _a.headerClassName, _c === void 0 ? '' : _c), ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isFooterAtBottom = _a.isFooterAtBottom, isLightDismiss = _a.isLightDismiss, isHiddenOnDismiss = _a.isHiddenOnDismiss, layerProps = _a.layerProps, overlayProps = _a.overlayProps, popupProps = _a.popupProps, type = _a.type, styles = _a.styles, theme = _a.theme, customWidth = _a.customWidth, onLightDismissClick = (_d = _a.onLightDismissClick, _d === void 0 ? this._onPanelClick : _d), onRenderNavigation = (_e = _a.onRenderNavigation, _e === void 0 ? this._onRenderNavigation : _e), onRenderHeader = (_f = _a.onRenderHeader, _f === void 0 ? this._onRenderHeader : _f), onRenderBody = (_g = _a.onRenderBody, _g === void 0 ? this._onRenderBody : _g), onRenderFooter = (_h = _a.onRenderFooter, _h === void 0 ? this._onRenderFooter : _h);
        var isFooterSticky = (_j = this.state, _j.isFooterSticky), visibility = _j.visibility, id = _j.id;
        var isLeft = type === Panel_types["a" /* PanelType */].smallFixedNear || type === Panel_types["a" /* PanelType */].customNear ? true : false;
        var isRTL = Object(rtl["a" /* getRTL */])(theme);
        var isOnRightSide = isRTL ? isLeft : !isLeft;
        var customWidthStyles = type === Panel_types["a" /* PanelType */].custom || type === Panel_types["a" /* PanelType */].customNear ? { width: customWidth } : {};
        var nativeProps = Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */]);
        var isOpen = this.isActive;
        var isAnimating = visibility === PanelVisibilityState.animatingClosed || visibility === PanelVisibilityState.animatingOpen;
        this._headerTextId = headerText && id + '-headerText';
        if (!isOpen && !isAnimating && !isHiddenOnDismiss) {
            return null;
        }
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            focusTrapZoneClassName: focusTrapZoneProps ? focusTrapZoneProps.className : undefined,
            hasCloseButton: hasCloseButton,
            headerClassName: headerClassName,
            isAnimating: isAnimating,
            isFooterSticky: isFooterSticky,
            isFooterAtBottom: isFooterAtBottom,
            isOnRightSide: isOnRightSide,
            isOpen: isOpen,
            isHiddenOnDismiss: isHiddenOnDismiss,
            type: type,
            hasCustomNavigation: this._hasCustomNavigation,
        });
        var _classNames = (_k = this, _k._classNames), _allowTouchBodyScroll = _k._allowTouchBodyScroll;
        var overlay;
        if (isBlocking && isOpen) {
            overlay = (react["createElement"](Overlay["a" /* Overlay */], Object(tslib_es6["a" /* __assign */])({ className: _classNames.overlay, isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined, allowTouchBodyScroll: _allowTouchBodyScroll }, overlayProps)));
        }
        return (react["createElement"](Layer["a" /* Layer */], Object(tslib_es6["a" /* __assign */])({}, layerProps),
            react["createElement"](Popup["a" /* Popup */], Object(tslib_es6["a" /* __assign */])({ role: "dialog", "aria-modal": isBlocking ? 'true' : undefined, ariaLabelledBy: this._headerTextId ? this._headerTextId : undefined, onDismiss: this.dismiss, className: _classNames.hiddenPanel, enableAriaHiddenSiblings: isOpen ? true : false }, popupProps),
                react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ "aria-hidden": !isOpen && isAnimating }, nativeProps, { ref: this._panel, className: _classNames.root }),
                    overlay,
                    react["createElement"](FocusTrapZone["a" /* FocusTrapZone */], Object(tslib_es6["a" /* __assign */])({ ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: !isBlocking || (isHiddenOnDismiss && !isOpen) ? false : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, isClickableOutsideFocusTrap: true }, focusTrapZoneProps, { className: _classNames.main, style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss }),
                        react["createElement"]("div", { className: _classNames.contentInner },
                            react["createElement"]("div", { ref: this._allowScrollOnPanel, className: _classNames.scrollableContent, "data-is-scrollable": true },
                                react["createElement"]("div", { className: _classNames.commands, "data-is-visible": true }, onRenderNavigation(this.props, this._onRenderNavigation)),
                                (this._hasCustomNavigation || !hasCloseButton) &&
                                    onRenderHeader(this.props, this._onRenderHeader, this._headerTextId),
                                onRenderBody(this.props, this._onRenderBody),
                                onRenderFooter(this.props, this._onRenderFooter))))))));
    };
    PanelBase.prototype.open = function () {
        if (this.props.isOpen !== undefined) {
            return;
        }
        if (this.isActive) {
            return;
        }
        this.setState({ visibility: PanelVisibilityState.animatingOpen });
    };
    PanelBase.prototype.close = function () {
        if (this.props.isOpen !== undefined) {
            return;
        }
        if (!this.isActive) {
            return;
        }
        this.setState({ visibility: PanelVisibilityState.animatingClosed });
    };
    Object.defineProperty(PanelBase.prototype, "isActive", {
        /** isActive is true when panel is open or opening. */
        get: function () {
            return (this.state.visibility === PanelVisibilityState.open ||
                this.state.visibility === PanelVisibilityState.animatingOpen);
        },
        enumerable: false,
        configurable: true
    });
    PanelBase.prototype._shouldListenForOuterClick = function (props) {
        return !!props.isBlocking && !!props.isOpen;
    };
    PanelBase.prototype._updateFooterPosition = function () {
        var scrollableContent = this._scrollableContent;
        if (scrollableContent) {
            var height = scrollableContent.clientHeight;
            var innerHeight_1 = scrollableContent.scrollHeight;
            this.setState({
                isFooterSticky: height < innerHeight_1 ? true : false,
            });
        }
    };
    PanelBase.prototype._dismissOnOuterClick = function (ev) {
        var panel = this._panel.current;
        if (this.isActive && panel && !ev.defaultPrevented) {
            if (!Object(elementContains["a" /* elementContains */])(panel, ev.target)) {
                if (this.props.onOuterClick) {
                    this.props.onOuterClick(ev);
                }
                else {
                    this.dismiss(ev);
                }
            }
        }
    };
    PanelBase.defaultProps = {
        isHiddenOnDismiss: false,
        isOpen: undefined,
        isBlocking: true,
        hasCloseButton: true,
        type: Panel_types["a" /* PanelType */].smallFixedFar,
    };
    PanelBase.contextType = WindowProvider["a" /* WindowContext */];
    return PanelBase;
}(react["Component"]));
//# sourceMappingURL=Panel.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Panel/Panel.styles.js
var Panel_styles_a, Panel_styles_b, Panel_styles_c, Panel_styles_d, Panel_styles_e;



var GlobalClassNames = {
    root: 'ms-Panel',
    main: 'ms-Panel-main',
    commands: 'ms-Panel-commands',
    contentInner: 'ms-Panel-contentInner',
    scrollableContent: 'ms-Panel-scrollableContent',
    navigation: 'ms-Panel-navigation',
    closeButton: 'ms-Panel-closeButton ms-PanelAction-close',
    header: 'ms-Panel-header',
    headerText: 'ms-Panel-headerText',
    content: 'ms-Panel-content',
    footer: 'ms-Panel-footer',
    footerInner: 'ms-Panel-footerInner',
    isOpen: 'is-open',
    hasCloseButton: 'ms-Panel--hasCloseButton',
    smallFluid: 'ms-Panel--smFluid',
    smallFixedNear: 'ms-Panel--smLeft',
    smallFixedFar: 'ms-Panel--sm',
    medium: 'ms-Panel--md',
    large: 'ms-Panel--lg',
    largeFixed: 'ms-Panel--fixed',
    extraLarge: 'ms-Panel--xl',
    custom: 'ms-Panel--custom',
    customNear: 'ms-Panel--customLeft',
};
var panelWidth = {
    full: '100%',
    auto: 'auto',
    xs: 272,
    sm: 340,
    md1: 592,
    md2: 644,
    lg: 940,
};
var panelMargin = {
    auto: 'auto',
    none: 0,
    md: 48,
    lg: 428,
    xl: 176,
};
// Following consts are used below in `getPanelBreakpoints()` function to provide
// necessary fallbacks for different types of Panel in different breakpoints.
var smallPanelSelectors = (Panel_styles_a = {},
    Panel_styles_a["@media (min-width: ".concat(lib["l" /* ScreenWidthMinMedium */], "px)")] = {
        width: panelWidth.sm,
    },
    Panel_styles_a);
var mediumPanelSelectors = (Panel_styles_b = {},
    Panel_styles_b["@media (min-width: ".concat(lib["k" /* ScreenWidthMinLarge */], "px)")] = {
        width: panelWidth.md1,
    },
    Panel_styles_b["@media (min-width: ".concat(lib["o" /* ScreenWidthMinXLarge */], "px)")] = {
        width: panelWidth.md2,
    },
    Panel_styles_b);
var largePanelSelectors = (Panel_styles_c = {},
    Panel_styles_c["@media (min-width: ".concat(lib["n" /* ScreenWidthMinUhfMobile */], "px)")] = {
        left: panelMargin.md,
        width: panelWidth.auto,
    },
    Panel_styles_c["@media (min-width: ".concat(lib["p" /* ScreenWidthMinXXLarge */], "px)")] = {
        left: panelMargin.lg,
    },
    Panel_styles_c);
var largeFixedPanelSelectors = (Panel_styles_d = {},
    Panel_styles_d["@media (min-width: ".concat(lib["p" /* ScreenWidthMinXXLarge */], "px)")] = {
        left: panelMargin.auto,
        width: panelWidth.lg,
    },
    Panel_styles_d);
var extraLargePanelSelectors = (Panel_styles_e = {},
    Panel_styles_e["@media (min-width: ".concat(lib["p" /* ScreenWidthMinXXLarge */], "px)")] = {
        left: panelMargin.xl,
    },
    Panel_styles_e);
// Make sure Panels have fallbacks to different breakpoints by reusing same selectors.
// This is done in the effort to follow design redlines.
var getPanelBreakpoints = function (type) {
    var selectors;
    // Panel types `smallFluid`, `smallFixedNear`, `custom` and `customNear`
    // are not checked in here because they render the same in all the breakpoints
    // and have the checks done separately in the `getStyles` function below.
    switch (type) {
        case Panel_types["a" /* PanelType */].smallFixedFar:
            selectors = Object(tslib_es6["a" /* __assign */])({}, smallPanelSelectors);
            break;
        case Panel_types["a" /* PanelType */].medium:
            selectors = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, smallPanelSelectors), mediumPanelSelectors);
            break;
        case Panel_types["a" /* PanelType */].large:
            selectors = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors);
            break;
        case Panel_types["a" /* PanelType */].largeFixed:
            selectors = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), largeFixedPanelSelectors);
            break;
        case Panel_types["a" /* PanelType */].extraLarge:
            selectors = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, smallPanelSelectors), mediumPanelSelectors), largePanelSelectors), extraLargePanelSelectors);
            break;
        default:
            break;
    }
    return selectors;
};
var commandBarHeight = '44px';
var sharedPaddingStyles = {
    paddingLeft: '24px',
    paddingRight: '24px',
};
var getStyles = function (props) {
    var _a, _b, _c, _d;
    var className = props.className, focusTrapZoneClassName = props.focusTrapZoneClassName, hasCloseButton = props.hasCloseButton, headerClassName = props.headerClassName, isAnimating = props.isAnimating, isFooterSticky = props.isFooterSticky, isFooterAtBottom = props.isFooterAtBottom, isOnRightSide = props.isOnRightSide, isOpen = props.isOpen, isHiddenOnDismiss = props.isHiddenOnDismiss, hasCustomNavigation = props.hasCustomNavigation, theme = props.theme, _e = props.type, type = _e === void 0 ? Panel_types["a" /* PanelType */].smallFixedFar : _e;
    var effects = theme.effects, fonts = theme.fonts, semanticColors = theme.semanticColors;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var isCustomPanel = type === Panel_types["a" /* PanelType */].custom || type === Panel_types["a" /* PanelType */].customNear;
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isOpen && classNames.isOpen,
            hasCloseButton && classNames.hasCloseButton,
            {
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            isCustomPanel && isOnRightSide && classNames.custom,
            isCustomPanel && !isOnRightSide && classNames.customNear,
            className,
        ],
        overlay: [
            {
                pointerEvents: 'auto',
                cursor: 'pointer',
            },
            isOpen && isAnimating && lib["a" /* AnimationClassNames */].fadeIn100,
            !isOpen && isAnimating && lib["a" /* AnimationClassNames */].fadeOut100,
        ],
        hiddenPanel: [
            !isOpen &&
                !isAnimating &&
                isHiddenOnDismiss && {
                visibility: 'hidden',
            },
        ],
        main: [
            classNames.main,
            {
                backgroundColor: semanticColors.bodyBackground,
                boxShadow: effects.elevation64,
                pointerEvents: 'auto',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                bottom: 0,
                top: 0,
                // left, right, width are overridden depending on the type of the Panel and the screen breakpoint.
                left: panelMargin.auto,
                right: panelMargin.none,
                width: panelWidth.full,
                selectors: Object(tslib_es6["a" /* __assign */])((_a = {}, _a[lib["f" /* HighContrastSelector */]] = {
                    borderLeft: "3px solid ".concat(semanticColors.variantBorder),
                    borderRight: "3px solid ".concat(semanticColors.variantBorder),
                }, _a), getPanelBreakpoints(type)),
            },
            type === Panel_types["a" /* PanelType */].smallFluid && {
                left: panelMargin.none,
            },
            type === Panel_types["a" /* PanelType */].smallFixedNear && {
                left: panelMargin.none,
                right: panelMargin.auto,
                width: panelWidth.xs,
            },
            type === Panel_types["a" /* PanelType */].customNear && {
                right: 'auto',
                left: 0,
            },
            isCustomPanel && {
                maxWidth: '100vw',
            },
            isOpen && isAnimating && !isOnRightSide && lib["a" /* AnimationClassNames */].slideRightIn40,
            isOpen && isAnimating && isOnRightSide && lib["a" /* AnimationClassNames */].slideLeftIn40,
            !isOpen && isAnimating && !isOnRightSide && lib["a" /* AnimationClassNames */].slideLeftOut40,
            !isOpen && isAnimating && isOnRightSide && lib["a" /* AnimationClassNames */].slideRightOut40,
            focusTrapZoneClassName,
        ],
        commands: [
            classNames.commands,
            {
                // Ensures that the sticky header always has a background to prevent overlaps on scroll.
                backgroundColor: semanticColors.bodyBackground,
                paddingTop: 18,
                selectors: (_b = {},
                    _b["@media (min-height: ".concat(lib["l" /* ScreenWidthMinMedium */], "px)")] = {
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                    },
                    _b),
            },
            hasCustomNavigation && {
                paddingTop: 'inherit',
            },
        ],
        navigation: [
            classNames.navigation,
            {
                display: 'flex',
                justifyContent: 'flex-end',
            },
            hasCustomNavigation && {
                height: commandBarHeight,
            },
        ],
        contentInner: [
            classNames.contentInner,
            {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflowY: 'hidden',
            },
        ],
        header: [
            classNames.header,
            sharedPaddingStyles,
            {
                alignSelf: 'flex-start',
            },
            hasCloseButton &&
                !hasCustomNavigation && {
                flexGrow: 1,
            },
            hasCustomNavigation && {
                // Ensure that title doesn't shrink if screen is too small
                flexShrink: 0,
            },
        ],
        headerText: [
            classNames.headerText,
            fonts.xLarge,
            {
                color: semanticColors.bodyText,
                lineHeight: '27px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                hyphens: 'auto',
            },
            headerClassName,
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
            },
            isFooterAtBottom && {
                flexGrow: 1,
                display: 'inherit',
                flexDirection: 'inherit',
            },
        ],
        content: [
            classNames.content,
            sharedPaddingStyles,
            {
                paddingBottom: 20,
            },
            isFooterAtBottom && {
                selectors: (_c = {},
                    _c["@media (min-height: ".concat(lib["l" /* ScreenWidthMinMedium */], "px)")] = {
                        flexGrow: 1,
                    },
                    _c),
            },
        ],
        footer: [
            classNames.footer,
            {
                // Ensure that footer doesn't shrink if screen is too small
                flexShrink: 0,
                borderTop: '1px solid transparent',
                transition: "opacity ".concat(lib["c" /* AnimationVariables */].durationValue3, " ").concat(lib["c" /* AnimationVariables */].easeFunction2),
                selectors: (_d = {},
                    _d["@media (min-height: ".concat(lib["l" /* ScreenWidthMinMedium */], "px)")] = {
                        position: 'sticky',
                        bottom: 0,
                    },
                    _d),
            },
            isFooterSticky && {
                backgroundColor: semanticColors.bodyBackground,
                borderTopColor: semanticColors.variantBorder,
            },
        ],
        footerInner: [
            classNames.footerInner,
            sharedPaddingStyles,
            {
                paddingBottom: 16,
                paddingTop: 16,
            },
        ],
        subComponentStyles: {
            closeButton: {
                root: [
                    classNames.closeButton,
                    {
                        marginRight: 14,
                        color: theme.palette.neutralSecondary,
                        fontSize: lib["h" /* IconFontSizes */].large,
                    },
                    hasCustomNavigation && {
                        marginRight: 0,
                        height: 'auto',
                        width: '44px',
                    },
                ],
                rootHovered: {
                    color: theme.palette.neutralPrimary,
                },
            },
        },
    };
};
//# sourceMappingURL=Panel.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Panel/Panel.js



/**
 * Panel description
 */
var Panel = Object(styled["a" /* styled */])(Panel_base_PanelBase, getStyles, undefined, {
    scope: 'Panel',
});
//# sourceMappingURL=Panel.js.map

/***/ }),

/***/ "NMIT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ShimmerElementsGroup; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.types.js
var Shimmer_types = __webpack_require__("VOGN");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerLine/ShimmerLine.base.js


var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Shimmer}
 */
var ShimmerLineBase = function (props) {
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, styles = props.styles, _a = props.width, width = _a === void 0 ? '100%' : _a, borderStyle = props.borderStyle, theme = props.theme;
    var classNames = getClassNames(styles, {
        theme: theme,
        height: height,
        borderStyle: borderStyle,
    });
    return (react["createElement"]("div", { style: { width: width, minWidth: typeof width === 'number' ? "".concat(width, "px") : 'auto' }, className: classNames.root },
        react["createElement"]("svg", { width: "2", height: "2", className: classNames.topLeftCorner },
            react["createElement"]("path", { d: "M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z" })),
        react["createElement"]("svg", { width: "2", height: "2", className: classNames.topRightCorner },
            react["createElement"]("path", { d: "M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z" })),
        react["createElement"]("svg", { width: "2", height: "2", className: classNames.bottomRightCorner },
            react["createElement"]("path", { d: "M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z" })),
        react["createElement"]("svg", { width: "2", height: "2", className: classNames.bottomLeftCorner },
            react["createElement"]("path", { d: "M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z" }))));
};
//# sourceMappingURL=ShimmerLine.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerLine/ShimmerLine.styles.js

var GlobalClassNames = {
    root: 'ms-ShimmerLine-root',
    topLeftCorner: 'ms-ShimmerLine-topLeftCorner',
    topRightCorner: 'ms-ShimmerLine-topRightCorner',
    bottomLeftCorner: 'ms-ShimmerLine-bottomLeftCorner',
    bottomRightCorner: 'ms-ShimmerLine-bottomRightCorner',
};
function getStyles(props) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var globalClassNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var borderStyles = borderStyle || {};
    var sharedCornerStyles = {
        position: 'absolute',
        fill: semanticColors.bodyBackground,
    };
    return {
        root: [
            globalClassNames.root,
            theme.fonts.medium,
            {
                height: "".concat(height, "px"),
                boxSizing: 'content-box',
                position: 'relative',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                borderColor: semanticColors.bodyBackground,
                borderWidth: 0,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        borderColor: 'Window',
                        selectors: {
                            '> *': {
                                fill: 'Window',
                            },
                        },
                    },
                    _a),
            },
            borderStyles,
        ],
        topLeftCorner: [
            globalClassNames.topLeftCorner,
            {
                top: '0',
                left: '0',
            },
            sharedCornerStyles,
        ],
        topRightCorner: [
            globalClassNames.topRightCorner,
            {
                top: '0',
                right: '0',
            },
            sharedCornerStyles,
        ],
        bottomRightCorner: [
            globalClassNames.bottomRightCorner,
            {
                bottom: '0',
                right: '0',
            },
            sharedCornerStyles,
        ],
        bottomLeftCorner: [
            globalClassNames.bottomLeftCorner,
            {
                bottom: '0',
                left: '0',
            },
            sharedCornerStyles,
        ],
    };
}
//# sourceMappingURL=ShimmerLine.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerLine/ShimmerLine.js



var ShimmerLine = Object(styled["a" /* styled */])(ShimmerLineBase, getStyles, undefined, {
    scope: 'ShimmerLine',
});
//# sourceMappingURL=ShimmerLine.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerGap/ShimmerGap.base.js


var ShimmerGap_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Shimmer}
 */
var ShimmerGapBase = function (props) {
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, styles = props.styles, _a = props.width, width = _a === void 0 ? '10px' : _a, borderStyle = props.borderStyle, theme = props.theme;
    var classNames = ShimmerGap_base_getClassNames(styles, {
        theme: theme,
        height: height,
        borderStyle: borderStyle,
    });
    return (react["createElement"]("div", { style: { width: width, minWidth: typeof width === 'number' ? "".concat(width, "px") : 'auto' }, className: classNames.root }));
};
//# sourceMappingURL=ShimmerGap.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerGap/ShimmerGap.styles.js

var ShimmerGap_styles_GlobalClassNames = {
    root: 'ms-ShimmerGap-root',
};
function ShimmerGap_styles_getStyles(props) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var globalClassNames = Object(lib["v" /* getGlobalClassNames */])(ShimmerGap_styles_GlobalClassNames, theme);
    var borderStyles = borderStyle || {};
    return {
        root: [
            globalClassNames.root,
            theme.fonts.medium,
            {
                backgroundColor: semanticColors.bodyBackground,
                height: "".concat(height, "px"),
                boxSizing: 'content-box',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                borderColor: semanticColors.bodyBackground,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        backgroundColor: 'Window',
                        borderColor: 'Window',
                    },
                    _a),
            },
            borderStyles,
        ],
    };
}
//# sourceMappingURL=ShimmerGap.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerGap/ShimmerGap.js



var ShimmerGap = Object(styled["a" /* styled */])(ShimmerGapBase, ShimmerGap_styles_getStyles, undefined, {
    scope: 'ShimmerGap',
});
//# sourceMappingURL=ShimmerGap.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerCircle/ShimmerCircle.styles.js

var ShimmerCircle_styles_GlobalClassNames = {
    root: 'ms-ShimmerCircle-root',
    svg: 'ms-ShimmerCircle-svg',
};
function ShimmerCircle_styles_getStyles(props) {
    var _a, _b;
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var globalClassNames = Object(lib["v" /* getGlobalClassNames */])(ShimmerCircle_styles_GlobalClassNames, theme);
    var borderStyles = borderStyle || {};
    return {
        root: [
            globalClassNames.root,
            theme.fonts.medium,
            {
                width: "".concat(height, "px"),
                height: "".concat(height, "px"),
                minWidth: "".concat(height, "px"),
                boxSizing: 'content-box',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                borderColor: semanticColors.bodyBackground,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        borderColor: 'Window',
                    },
                    _a),
            },
            borderStyles,
        ],
        svg: [
            globalClassNames.svg,
            {
                display: 'block',
                fill: semanticColors.bodyBackground,
                selectors: (_b = {},
                    _b[lib["f" /* HighContrastSelector */]] = {
                        fill: 'Window',
                    },
                    _b),
            },
        ],
    };
}
//# sourceMappingURL=ShimmerCircle.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerCircle/ShimmerCircle.base.js


var ShimmerCircle_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var ShimmerCircleBase = function (props) {
    // eslint-disable-next-line deprecation/deprecation
    var height = props.height, styles = props.styles, borderStyle = props.borderStyle, theme = props.theme;
    var classNames = ShimmerCircle_base_getClassNames(styles, {
        theme: theme,
        height: height,
        borderStyle: borderStyle,
    });
    return (react["createElement"]("div", { className: classNames.root },
        react["createElement"]("svg", { viewBox: "0 0 10 10", width: height, height: height, className: classNames.svg },
            react["createElement"]("path", { d: "M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z" }))));
};
//# sourceMappingURL=ShimmerCircle.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerCircle/ShimmerCircle.js



var ShimmerCircle = Object(styled["a" /* styled */])(ShimmerCircleBase, ShimmerCircle_styles_getStyles, undefined, { scope: 'ShimmerCircle' });
//# sourceMappingURL=ShimmerCircle.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.base.js







var ShimmerElementsGroup_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Shimmer}
 */
var ShimmerElementsGroupBase = function (props) {
    var styles = props.styles, _a = props.width, width = _a === void 0 ? 'auto' : _a, shimmerElements = props.shimmerElements, _b = props.rowHeight, rowHeight = _b === void 0 ? findMaxElementHeight(shimmerElements || []) : _b, _c = props.flexWrap, flexWrap = _c === void 0 ? false : _c, theme = props.theme, backgroundColor = props.backgroundColor;
    var classNames = ShimmerElementsGroup_base_getClassNames(styles, {
        theme: theme,
        flexWrap: flexWrap,
    });
    return (react["createElement"]("div", { style: { width: width }, className: classNames.root }, getRenderedElements(shimmerElements, backgroundColor, rowHeight)));
};
function getRenderedElements(shimmerElements, backgroundColor, rowHeight) {
    var renderedElements = shimmerElements ? (shimmerElements.map(
    // false positive
    // eslint-disable-next-line array-callback-return
    function (element, index) {
        var type = element.type, filteredElem = Object(tslib_es6["e" /* __rest */])(element, ["type"]);
        var verticalAlign = filteredElem.verticalAlign, height = filteredElem.height;
        var styles = getElementStyles(verticalAlign, type, height, backgroundColor, rowHeight);
        switch (element.type) {
            case Shimmer_types["a" /* ShimmerElementType */].circle:
                return react["createElement"](ShimmerCircle, Object(tslib_es6["a" /* __assign */])({ key: index }, filteredElem, { styles: styles }));
            case Shimmer_types["a" /* ShimmerElementType */].gap:
                return react["createElement"](ShimmerGap, Object(tslib_es6["a" /* __assign */])({ key: index }, filteredElem, { styles: styles }));
            case Shimmer_types["a" /* ShimmerElementType */].line:
                return react["createElement"](ShimmerLine, Object(tslib_es6["a" /* __assign */])({ key: index }, filteredElem, { styles: styles }));
        }
    })) : (react["createElement"](ShimmerLine, { height: Shimmer_types["b" /* ShimmerElementsDefaultHeights */].line }));
    return renderedElements;
}
var getElementStyles = Object(memoize["b" /* memoizeFunction */])(function (verticalAlign, elementType, elementHeight, backgroundColor, rowHeight) {
    var dif = rowHeight && elementHeight ? rowHeight - elementHeight : 0;
    var borderStyle;
    if (!verticalAlign || verticalAlign === 'center') {
        borderStyle = {
            borderBottomWidth: "".concat(dif ? Math.floor(dif / 2) : 0, "px"),
            borderTopWidth: "".concat(dif ? Math.ceil(dif / 2) : 0, "px"),
        };
    }
    else if (verticalAlign && verticalAlign === 'top') {
        borderStyle = {
            borderBottomWidth: "".concat(dif, "px"),
            borderTopWidth: "0px",
        };
    }
    else if (verticalAlign && verticalAlign === 'bottom') {
        borderStyle = {
            borderBottomWidth: "0px",
            borderTopWidth: "".concat(dif, "px"),
        };
    }
    if (backgroundColor) {
        switch (elementType) {
            case Shimmer_types["a" /* ShimmerElementType */].circle:
                return {
                    root: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, borderStyle), { borderColor: backgroundColor }),
                    svg: { fill: backgroundColor },
                };
            case Shimmer_types["a" /* ShimmerElementType */].gap:
                return {
                    root: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, borderStyle), { borderColor: backgroundColor, backgroundColor: backgroundColor }),
                };
            case Shimmer_types["a" /* ShimmerElementType */].line:
                return {
                    root: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, borderStyle), { borderColor: backgroundColor }),
                    topLeftCorner: { fill: backgroundColor },
                    topRightCorner: { fill: backgroundColor },
                    bottomLeftCorner: { fill: backgroundColor },
                    bottomRightCorner: { fill: backgroundColor },
                };
        }
    }
    return {
        root: borderStyle,
    };
});
/**
 * User should not worry to provide which of the elements is the highest so we do the calculation for him.
 * Plus if user forgot to specify the height we assign their defaults.
 */
function findMaxElementHeight(shimmerElements) {
    var shimmerElementsDefaulted = shimmerElements.map(function (element) {
        switch (element.type) {
            case Shimmer_types["a" /* ShimmerElementType */].circle:
                if (!element.height) {
                    element.height = Shimmer_types["b" /* ShimmerElementsDefaultHeights */].circle;
                }
                break;
            case Shimmer_types["a" /* ShimmerElementType */].line:
                if (!element.height) {
                    element.height = Shimmer_types["b" /* ShimmerElementsDefaultHeights */].line;
                }
                break;
            case Shimmer_types["a" /* ShimmerElementType */].gap:
                if (!element.height) {
                    element.height = Shimmer_types["b" /* ShimmerElementsDefaultHeights */].gap;
                }
                break;
        }
        return element;
    });
    var rowHeight = shimmerElementsDefaulted.reduce(function (acc, next) {
        return next.height ? (next.height > acc ? next.height : acc) : acc;
    }, 0);
    return rowHeight;
}
//# sourceMappingURL=ShimmerElementsGroup.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.styles.js

var ShimmerElementsGroup_styles_GlobalClassNames = {
    root: 'ms-ShimmerElementsGroup-root',
};
function ShimmerElementsGroup_styles_getStyles(props) {
    var flexWrap = props.flexWrap, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(ShimmerElementsGroup_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: 'center',
                flexWrap: flexWrap ? 'wrap' : 'nowrap',
                position: 'relative',
            },
        ],
    };
}
//# sourceMappingURL=ShimmerElementsGroup.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.js



var ShimmerElementsGroup = Object(styled["a" /* styled */])(ShimmerElementsGroupBase, ShimmerElementsGroup_styles_getStyles, undefined, { scope: 'ShimmerElementsGroup' });
//# sourceMappingURL=ShimmerElementsGroup.js.map

/***/ }),

/***/ "OpsB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useResponsiveMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NZSY");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nTLZ");
/* harmony import */ var _decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hDQx");
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7R02");





/**
 * Hook to get the current responsive mode (window size category).
 * @param elementRef - Use this element's parent window when determining the responsive mode.
 * @param overrideResponsiveMode - Override the responsive mode. If this param is present, it's always returned.
 */
var useResponsiveMode = function (elementRef, overrideResponsiveMode) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__[/* getInitialResponsiveMode */ "b"])()), lastResponsiveMode = _a[0], setLastResponsiveMode = _a[1];
    var onResize = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
        var newResponsiveMode = Object(_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_3__[/* getResponsiveMode */ "c"])(Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* getWindow */ "a"])(elementRef.current));
        // Setting the same value should not cause a re-render.
        if (lastResponsiveMode !== newResponsiveMode) {
            setLastResponsiveMode(newResponsiveMode);
        }
    }, [elementRef, lastResponsiveMode]);
    var win = Object(_WindowProvider__WEBPACK_IMPORTED_MODULE_4__[/* useWindow */ "c"])();
    Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useOnEvent */ "a"])(win, 'resize', onResize);
    // Call resize function initially on mount, or if the override changes from defined to undefined
    // (the effect will run on all override changes, but onResize will only be called if it changed to undefined)
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (overrideResponsiveMode === undefined) {
            onResize();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only meant to run on mount or when override changes
    }, [overrideResponsiveMode]);
    return overrideResponsiveMode !== null && overrideResponsiveMode !== void 0 ? overrideResponsiveMode : lastResponsiveMode;
};
//# sourceMappingURL=useResponsiveMode.js.map

/***/ }),

/***/ "QHyR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeStyles; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useTheme.js
var useTheme = __webpack_require__("jFKp");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/merge-styles/lib/Stylesheet.js
var Stylesheet = __webpack_require__("lSY2");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js
var mergeStyleSets = __webpack_require__("LyZa");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/merge-styles/lib/fontFace.js
var lib_fontFace = __webpack_require__("9CTw");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/merge-styles/lib/keyframes.js
var lib_keyframes = __webpack_require__("uek1");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/styleRenderers/mergeStylesRenderer.js

var _seed = 0;
var mergeStylesRenderer = {
    reset: function () {
        // If the stylesheet reset call is made, invalidate the cache keys.
        Stylesheet["c" /* Stylesheet */].getInstance().onReset(function () { return _seed++; });
    },
    getId: function () { return _seed; },
    renderStyles: function (styleSet, options) {
        return Object(mergeStyleSets["a" /* mergeCssSets */])((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
    },
    renderFontFace: function (fontFace, options) {
        return Object(lib_fontFace["a" /* fontFace */])(fontFace);
    },
    renderKeyframes: function (keyframes) {
        return Object(lib_keyframes["a" /* keyframes */])(keyframes);
    },
};
//# sourceMappingURL=mergeStylesRenderer.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/makeStyles.js





var graphGet = function (graphNode, _a) {
    var _b, _c, _d;
    var windowId = _a[0], id = _a[1], theme = _a[2];
    return (_d = (_c = (_b = graphNode.get(windowId)) === null || _b === void 0 ? void 0 : _b.get(id)) === null || _c === void 0 ? void 0 : _c.get(theme)) === null || _d === void 0 ? void 0 : _d.classMap;
};
var graphSet = function (graphNode, _a, classMap) {
    var _b, _c;
    var windowId = _a[0], id = _a[1], theme = _a[2];
    var windowNode = (_b = graphNode.get(windowId)) !== null && _b !== void 0 ? _b : new Map();
    graphNode.set(windowId, windowNode);
    var idNode = (_c = windowNode.get(id)) !== null && _c !== void 0 ? _c : new Map();
    windowNode.set(id, idNode);
    idNode.set(theme, { classMap: classMap, refCount: 0 });
};
function graphRef(graphNode, _a) {
    var _b, _c;
    var windowId = _a[0], id = _a[1], theme = _a[2];
    var node = (_c = (_b = graphNode.get(windowId)) === null || _b === void 0 ? void 0 : _b.get(id)) === null || _c === void 0 ? void 0 : _c.get(theme);
    if (node) {
        node.refCount++;
    }
}
function graphDeref(graphNode, _a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var windowId = _a[0], id = _a[1], theme = _a[2];
    var node = (_c = (_b = graphNode.get(windowId)) === null || _b === void 0 ? void 0 : _b.get(id)) === null || _c === void 0 ? void 0 : _c.get(theme);
    if (node) {
        node.refCount--;
        if (node.refCount === 0) {
            (_e = (_d = graphNode.get(windowId)) === null || _d === void 0 ? void 0 : _d.get(id)) === null || _e === void 0 ? void 0 : _e.delete(theme);
            if (((_g = (_f = graphNode.get(windowId)) === null || _f === void 0 ? void 0 : _f.get(id)) === null || _g === void 0 ? void 0 : _g.size) === 0) {
                (_h = graphNode.get(windowId)) === null || _h === void 0 ? void 0 : _h.delete(id);
                if (((_j = graphNode.get(windowId)) === null || _j === void 0 ? void 0 : _j.size) === 0) {
                    graphNode.delete(windowId);
                }
            }
        }
    }
}
/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 *
 * @deprecated Use `mergeStyles` instead for v8 related code. We will be using a new implementation of `makeStyles` in
 * future versions of the library.
 */
function makeStyles(styleOrFunction) {
    // Create graph of inputs to map to output.
    var graph = new Map();
    // Retain a dictionary of window ids we're tracking
    var allWindows = new Set();
    // cleanupMapEntries will
    // 1. remove all the graph branches for the window,
    // 2. remove the event listener,
    // 3. delete the allWindows entry.
    var cleanupMapEntries = function (ev) {
        var win = ev.currentTarget;
        var winId = win.__id__;
        graph.delete(winId);
        win.removeEventListener('unload', cleanupMapEntries);
        allWindows.delete(winId);
    };
    // eslint-disable-next-line deprecation/deprecation
    return function (options) {
        if (options === void 0) { options = {}; }
        var theme = options.theme;
        var winId;
        var win = Object(WindowProvider["c" /* useWindow */])();
        if (win) {
            win.__id__ = win.__id__ || Object(getId["a" /* getId */])();
            winId = win.__id__;
            if (!allWindows.has(winId)) {
                allWindows.add(winId);
                win.addEventListener('unload', cleanupMapEntries);
            }
        }
        var contextualTheme = Object(useTheme["a" /* useTheme */])();
        theme = theme || contextualTheme;
        var renderer = mergeStylesRenderer;
        var id = renderer.getId();
        var path = [winId, id, theme];
        var value = graphGet(graph, path);
        // Don't keep around unused styles
        Object(react["useEffect"])(function () {
            graphRef(graph, [winId, id, theme]);
            return function () { return graphDeref(graph, [winId, id, theme]); };
        }, [winId, id, theme]);
        if (!value) {
            var styles = isStyleFunction(styleOrFunction)
                ? styleOrFunction(theme)
                : styleOrFunction;
            value = mergeStylesRenderer.renderStyles(styles, { targetWindow: win, rtl: !!theme.rtl });
            graphSet(graph, path, value);
        }
        return value;
    };
}
function isStyleFunction(styleOrFunction) {
    return typeof styleOrFunction === 'function';
}
//# sourceMappingURL=makeStyles.js.map

/***/ }),

/***/ "Qk2U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return personaSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return personaPresenceSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sizeBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sizeToPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return presenceBoolean; });
/* harmony import */ var _Persona_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ggpd");
var _a;

// Persona Sizes
var personaSize;
(function (personaSize) {
    personaSize.size8 = '20px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size10 = '20px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size16 = '16px';
    personaSize.size24 = '24px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size28 = '28px';
    personaSize.size32 = '32px';
    personaSize.size40 = '40px';
    personaSize.size48 = '48px';
    personaSize.size56 = '56px';
    personaSize.size72 = '72px';
    personaSize.size100 = '100px';
    personaSize.size120 = '120px';
})(personaSize || (personaSize = {}));
// Persona Presence Sizes
var personaPresenceSize;
(function (personaPresenceSize) {
    personaPresenceSize.size6 = '6px';
    personaPresenceSize.size8 = '8px';
    personaPresenceSize.size12 = '12px';
    personaPresenceSize.size16 = '16px';
    personaPresenceSize.size20 = '20px';
    personaPresenceSize.size28 = '28px';
    personaPresenceSize.size32 = '32px';
    /**
     * @deprecated This is now unused
     */
    personaPresenceSize.border = '2px';
})(personaPresenceSize || (personaPresenceSize = {}));
// TODO: remove the deprecated parts in a future major release.
var sizeBoolean = function (size) { return ({
    isSize8: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size8,
    /* eslint-disable deprecation/deprecation */
    isSize10: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size10 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].tiny,
    isSize16: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size16,
    isSize24: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size24 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraExtraSmall,
    isSize28: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size28 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraSmall,
    isSize32: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size32,
    isSize40: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size40 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].small,
    isSize48: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size48 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].regular,
    isSize56: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size56,
    isSize72: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size72 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].large,
    isSize100: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size100 || size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraLarge,
    isSize120: size === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size120,
}); };
var sizeToPixels = (_a = {},
    // Old deprecated sizes
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].tiny] = 10,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraExtraSmall] = 24,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraSmall] = 28,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].small] = 40,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].regular] = 48,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].large] = 72,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].extraLarge] = 100,
    // New sizes
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size8] = 8,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size10] = 10,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size16] = 16,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size24] = 24,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size28] = 28,
    /* eslint-enable deprecation/deprecation */
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size32] = 32,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size40] = 40,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size48] = 48,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size56] = 56,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size72] = 72,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size100] = 100,
    _a[_Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaSize */ "c"].size120] = 120,
    _a);
var presenceBoolean = function (presence) { return ({
    isAvailable: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].online,
    isAway: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].away,
    isBlocked: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].blocked,
    isBusy: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].busy,
    isDoNotDisturb: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].dnd,
    isOffline: presence === _Persona_types__WEBPACK_IMPORTED_MODULE_0__[/* PersonaPresence */ "b"].offline,
}); };
//# sourceMappingURL=PersonaConsts.js.map

/***/ }),

/***/ "Rel8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Label; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.base.js




var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])({
    // Label is used a lot by other components.
    // It's likely to see expected cases which pass different className to the Label.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
var Label_base_LabelBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(LabelBase, _super);
    function LabelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelBase.prototype.render = function () {
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'label' : _b, children = _a.children, className = _a.className, disabled = _a.disabled, styles = _a.styles, required = _a.required, theme = _a.theme;
        var classNames = getClassNames(styles, {
            className: className,
            disabled: disabled,
            required: required,
            theme: theme,
        });
        return (react["createElement"](RootType, Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */]), { className: classNames.root }), children));
    };
    return LabelBase;
}(react["Component"]));

//# sourceMappingURL=Label.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.styles.js


var getStyles = function (props) {
    var _a;
    var theme = props.theme, className = props.className, disabled = props.disabled, required = props.required;
    var semanticColors = theme.semanticColors;
    // Tokens
    var labelFontWeight = lib["e" /* FontWeights */].semibold;
    var labelColor = semanticColors.bodyText;
    var labelDisabledColor = semanticColors.disabledBodyText;
    var labelRequiredStarColor = semanticColors.errorText;
    return {
        root: [
            'ms-Label',
            theme.fonts.medium,
            {
                fontWeight: labelFontWeight,
                color: labelColor,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
            },
            disabled && {
                color: labelDisabledColor,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _a),
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: labelRequiredStarColor,
                        paddingRight: 12,
                    },
                },
            },
            className,
        ],
    };
};
//# sourceMappingURL=Label.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.js



var Label = Object(styled["a" /* styled */])(Label_base_LabelBase, getStyles, undefined, {
    scope: 'Label',
});
//# sourceMappingURL=Label.js.map

/***/ }),

/***/ "TG3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layer; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-portal-compat-context/lib/PortalCompatContext.js
var PortalCompatContext = __webpack_require__("BiK/");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-dom/index.js
var react_dom = __webpack_require__("7nmT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/FocusRectsProvider.js
var FocusRectsProvider = __webpack_require__("A49k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/Customizer.js + 2 modules
var Customizer = __webpack_require__("FKem");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getDocument.js
var getDocument = __webpack_require__("41aL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/theme/lib/createTheme.js + 1 modules
var createTheme = __webpack_require__("j03K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Fabric/Fabric.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var getFabricTheme = Object(memoize["b" /* memoizeFunction */])(function (theme, isRTL) { return Object(createTheme["a" /* createTheme */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, theme), { rtl: isRTL })); });
var getDir = function (_a) {
    var theme = _a.theme, dir = _a.dir;
    var contextDir = Object(rtl["a" /* getRTL */])(theme) ? 'rtl' : 'ltr';
    var pageDir = Object(rtl["a" /* getRTL */])() ? 'rtl' : 'ltr';
    var componentDir = dir ? dir : contextDir;
    return {
        // If Fabric dir !== contextDir
        // Or If contextDir !== pageDir
        // Then we need to set dir of the Fabric root
        rootDir: componentDir !== contextDir || componentDir !== pageDir ? componentDir : dir,
        // If dir !== contextDir || pageDir
        // then set contextual theme around content
        needsTheme: componentDir !== contextDir,
    };
};
var FabricBase = react["forwardRef"](function (props, ref) {
    var className = props.className, theme = props.theme, applyTheme = props.applyTheme, applyThemeToBody = props.applyThemeToBody, styles = props.styles;
    var classNames = getClassNames(styles, {
        theme: theme,
        applyTheme: applyTheme,
        className: className,
    });
    var rootElement = react["useRef"](null);
    useApplyThemeToBody(applyThemeToBody, classNames, rootElement);
    return react["createElement"](react["Fragment"], null, useRenderedContent(props, classNames, rootElement, ref));
});
FabricBase.displayName = 'FabricBase';
function useRenderedContent(props, _a, rootElement, ref) {
    var root = _a.root;
    var _b = props.as, Root = _b === void 0 ? 'div' : _b, dir = props.dir, theme = props.theme;
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */], ['dir']);
    var _c = getDir(props), rootDir = _c.rootDir, needsTheme = _c.needsTheme;
    var renderedContent = (react["createElement"](FocusRectsProvider["a" /* FocusRectsProvider */], { providerRef: rootElement },
        react["createElement"](Root, Object(tslib_es6["a" /* __assign */])({ dir: rootDir }, divProps, { className: root, ref: Object(useMergedRefs["a" /* useMergedRefs */])(rootElement, ref) }))));
    // Create the contextual theme if component direction does not match parent direction.
    if (needsTheme) {
        // Disabling ThemeProvider here because theme doesn't need to be re-provided by ThemeProvider if dir has changed.
        renderedContent = (
        // eslint-disable-next-line deprecation/deprecation
        react["createElement"](Customizer["a" /* Customizer */], { settings: { theme: getFabricTheme(theme, dir === 'rtl') } }, renderedContent));
    }
    return renderedContent;
}
function useApplyThemeToBody(applyThemeToBody, _a, rootElement) {
    var bodyThemed = _a.bodyThemed;
    react["useEffect"](function () {
        if (applyThemeToBody) {
            var currentDoc_1 = Object(getDocument["a" /* getDocument */])(rootElement.current);
            if (currentDoc_1) {
                currentDoc_1.body.classList.add(bodyThemed);
                return function () {
                    currentDoc_1.body.classList.remove(bodyThemed);
                };
            }
        }
    }, [bodyThemed, applyThemeToBody, rootElement]);
    return rootElement;
}
//# sourceMappingURL=Fabric.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Fabric/Fabric.styles.js

var inheritFont = { fontFamily: 'inherit' };
var GlobalClassNames = {
    root: 'ms-Fabric',
    bodyThemed: 'ms-Fabric-bodyThemed',
};
var getStyles = function (props) {
    var applyTheme = props.applyTheme, className = props.className, preventBlanketFontInheritance = props.preventBlanketFontInheritance, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
            },
            !preventBlanketFontInheritance && {
                '& button': inheritFont,
                '& input': inheritFont,
                '& textarea': inheritFont,
            },
            // apply theme to only if applyTheme is true
            applyTheme && {
                color: theme.semanticColors.bodyText,
                backgroundColor: theme.semanticColors.bodyBackground,
            },
            className,
        ],
        bodyThemed: [
            {
                backgroundColor: theme.semanticColors.bodyBackground,
            },
        ],
    };
};
//# sourceMappingURL=Fabric.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Fabric/Fabric.js



/**
 * @deprecated This component is deprecated as of `@fluentui/react` version 8. Use `ThemeProvider` instead.
 */
var Fabric = Object(styled["a" /* styled */])(FabricBase, getStyles, undefined, {
    scope: 'Fabric',
});
//# sourceMappingURL=Fabric.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/setPortalAttribute.js
var setPortalAttribute = __webpack_require__("eGzM");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/setVirtualParent.js
var setVirtualParent = __webpack_require__("razI");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.notification.js
var _layersByHostId = {};
var _layerHostsById = {};
var defaultHostId = 'fluent-default-layer-host';
var _defaultHostSelector = "#".concat(defaultHostId);
/**
 * Register a layer for a given host id
 * @param hostId - Id of the layer host
 * @param layer - Layer instance
 */
function registerLayer(hostId, callback) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(callback);
    var layerHosts = _layerHostsById[hostId];
    if (layerHosts) {
        for (var _i = 0, layerHosts_1 = layerHosts; _i < layerHosts_1.length; _i++) {
            var layerHost = layerHosts_1[_i];
            layerHost.notifyLayersChanged();
        }
    }
}
/**
 * Unregister a layer for a given host id
 * @param hostId - Id of the layer host
 * @param layer - Layer instance
 */
function unregisterLayer(hostId, callback) {
    var layers = _layersByHostId[hostId];
    if (layers) {
        var idx = layers.indexOf(callback);
        if (idx >= 0) {
            layers.splice(idx, 1);
            if (layers.length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
    var layerHosts = _layerHostsById[hostId];
    if (layerHosts) {
        for (var _i = 0, layerHosts_2 = layerHosts; _i < layerHosts_2.length; _i++) {
            var layerHost = layerHosts_2[_i];
            layerHost.notifyLayersChanged();
        }
    }
}
/**
 * Gets the number of layers currently registered with a host id.
 * @param hostId - Id of the layer host.
 * @returns The number of layers currently registered with the host.
 */
function getLayerCount(hostId) {
    var layers = _layerHostsById[hostId];
    return layers ? layers.length : 0;
}
/**
 * Gets the Layer Host instance associated with a hostId, if applicable.
 * @param hostId - Id of the layer host
 * @returns A component ref for the associated layer host.
 */
function getLayerHost(hostId) {
    var layerHosts = _layerHostsById[hostId];
    return (layerHosts && layerHosts[0]) || undefined;
}
/**
 * Registers a Layer Host with an associated hostId.
 * @param hostId - Id of the layer host
 * @param layerHost - layer host instance
 */
function registerLayerHost(hostId, layerHost) {
    var layerHosts = _layerHostsById[hostId] || (_layerHostsById[hostId] = []);
    // Insert this at the start of an array to avoid race conditions between mount and unmount.
    // If a LayerHost is re-mounted, and mount of the new instance may occur before the unmount of the old one.
    // Putting the new instance at the start of this array ensures that calls to `getLayerHost` will immediately
    // get the new one even if the old one is around briefly.
    layerHosts.unshift(layerHost);
}
/**
 * Unregisters a Layer Host from the associated hostId.
 * @param hostId - Id of the layer host
 * @param layerHost - layer host instance
 */
function unregisterLayerHost(hostId, layerHost) {
    var layerHosts = _layerHostsById[hostId];
    if (layerHosts) {
        var idx = layerHosts.indexOf(layerHost);
        if (idx >= 0) {
            layerHosts.splice(idx, 1);
        }
        if (layerHosts.length === 0) {
            delete _layerHostsById[hostId];
        }
    }
}
/**
 * When no default layer host is provided, this function is executed to create the default host.
 */
function createDefaultLayerHost(doc, shadowRoot) {
    if (shadowRoot === void 0) { shadowRoot = null; }
    var host = doc.createElement('div');
    host.setAttribute('id', defaultHostId);
    host.style.cssText = 'position:fixed;z-index:1000000';
    if (shadowRoot) {
        shadowRoot.appendChild(host);
    }
    else {
        doc === null || doc === void 0 ? void 0 : doc.body.appendChild(host);
    }
    // doc?.body.appendChild(host);
    return host;
}
/**
 * This function can be optionally called to clean up the default layer host as needed.
 */
function cleanupDefaultLayerHost(doc, shadowRoot) {
    if (shadowRoot === void 0) { shadowRoot = null; }
    var root = shadowRoot !== null && shadowRoot !== void 0 ? shadowRoot : doc;
    var host = root.querySelector("#".concat(defaultHostId));
    if (host) {
        root.removeChild(host);
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (callback) { return callback(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsy value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}
//# sourceMappingURL=Layer.notification.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("9yo2");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.base.js

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore "react-portal-compat-context" uses v9 configs via path aliases







var Layer_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var getFocusVisibility = function (providerRef) {
    if (providerRef === null || providerRef === void 0 ? void 0 : providerRef.current) {
        return providerRef.current.classList.contains(setFocusVisibility["a" /* IsFocusVisibleClassName */]);
    }
    return false;
};
var LayerBase = react["forwardRef"](function (props, ref) {
    var registerPortalEl = Object(PortalCompatContext["a" /* usePortalCompat */])();
    var rootRef = react["useRef"](null);
    var mergedRef = Object(useMergedRefs["a" /* useMergedRefs */])(rootRef, ref);
    var layerRef = react["useRef"]();
    var fabricElementRef = react["useRef"](null);
    var focusContext = react["useContext"](useFocusRects["b" /* FocusRectsContext */]);
    // Tracks if the layer mount events need to be raised.
    // Required to allow the DOM to render after the layer element is added.
    var _a = react["useState"](false), needRaiseLayerMount = _a[0], setNeedRaiseLayerMount = _a[1];
    // Sets the focus visible className when the FocusRectsProvider for the layer is rendered
    // This allows the current focus visibility style to be carried over to the layer content
    var focusRectsRef = react["useCallback"](function (el) {
        var isFocusVisible = getFocusVisibility(focusContext === null || focusContext === void 0 ? void 0 : focusContext.providerRef);
        if (el && isFocusVisible) {
            el.classList.add(setFocusVisibility["a" /* IsFocusVisibleClassName */]);
        }
    }, [focusContext]);
    var children = props.children, className = props.className, eventBubblingEnabled = props.eventBubblingEnabled, fabricProps = props.fabricProps, hostId = props.hostId, insertFirst = props.insertFirst, _b = props.onLayerDidMount, onLayerDidMount = _b === void 0 ? function () { return undefined; } : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.onLayerMounted, 
    // eslint-disable-next-line deprecation/deprecation
    onLayerMounted = _c === void 0 ? function () { return undefined; } : _c, onLayerWillUnmount = props.onLayerWillUnmount, styles = props.styles, theme = props.theme;
    var fabricRef = Object(useMergedRefs["a" /* useMergedRefs */])(fabricElementRef, fabricProps === null || fabricProps === void 0 ? void 0 : fabricProps.ref, focusRectsRef);
    var classNames = Layer_base_getClassNames(styles, {
        theme: theme,
        className: className,
        isNotHost: !hostId,
    });
    // Returns the user provided hostId props element, the default target selector,
    // or undefined if document doesn't exist.
    var getHost = function (doc, shadowRoot) {
        var _a, _b;
        if (shadowRoot === void 0) { shadowRoot = null; }
        var root = shadowRoot !== null && shadowRoot !== void 0 ? shadowRoot : doc;
        if (hostId) {
            var layerHost = getLayerHost(hostId);
            if (layerHost) {
                return (_a = layerHost.rootRef.current) !== null && _a !== void 0 ? _a : null;
            }
            return (_b = root.getElementById(hostId)) !== null && _b !== void 0 ? _b : null;
        }
        else {
            var defaultHostSelector = getDefaultTarget();
            // Find the host.
            var host = defaultHostSelector ? root.querySelector(defaultHostSelector) : null;
            // If no host is available, create a container for injecting layers in.
            // Having a container scopes layout computation.
            if (!host) {
                host = createDefaultLayerHost(doc, shadowRoot);
            }
            return host;
        }
    };
    // Removes the current layer element's parentNode and runs onLayerWillUnmount prop if provided.
    var removeLayerElement = function () {
        onLayerWillUnmount === null || onLayerWillUnmount === void 0 ? void 0 : onLayerWillUnmount();
        var elem = layerRef.current;
        // Clear ref before removing from the DOM
        layerRef.current = undefined;
        if (elem && elem.parentNode) {
            elem.parentNode.removeChild(elem);
        }
    };
    // If a doc or host exists, it will remove and update layer parentNodes.
    var createLayerElement = function () {
        var _a, _b, _c, _d;
        var doc = Object(getDocument["a" /* getDocument */])(rootRef.current);
        var shadowRoot = ((_b = (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.getRootNode()) === null || _b === void 0 ? void 0 : _b.host)
            ? (_c = rootRef === null || rootRef === void 0 ? void 0 : rootRef.current) === null || _c === void 0 ? void 0 : _c.getRootNode()
            : undefined;
        if (!doc || (!doc && !shadowRoot)) {
            return;
        }
        var host = getHost(doc, shadowRoot);
        if (!host) {
            return;
        }
        // Tabster in V9 sets aria-hidden on the elements outside of the modal dialog. And it doesn't set aria-hidden
        // on the virtual children of the dialog. But the host element itself is not a virtual child of a dialog, it
        // might contain virtual children. noDirectAriaHidden flag makes Tabster to poke inside the element and set
        // aria-hidden on the children (if they are not virtual children of the active V9 dialog) not on the host element.
        // To avoid importing Tabster as a dependency here, we just set a flag on the host element which is checked by
        // Tabster.
        if (!host.__tabsterElementFlags) {
            host.__tabsterElementFlags = {};
        }
        host.__tabsterElementFlags.noDirectAriaHidden = true;
        // Remove and re-create any previous existing layer elements.
        removeLayerElement();
        var el = ((_d = host.ownerDocument) !== null && _d !== void 0 ? _d : doc).createElement('div');
        el.className = classNames.root;
        Object(setPortalAttribute["b" /* setPortalAttribute */])(el);
        Object(setVirtualParent["a" /* setVirtualParent */])(el, rootRef.current);
        insertFirst ? host.insertBefore(el, host.firstChild) : host.appendChild(el);
        layerRef.current = el;
        setNeedRaiseLayerMount(true);
    };
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        createLayerElement();
        // Check if the user provided a hostId prop and register the layer with the ID.
        if (hostId) {
            registerLayer(hostId, createLayerElement);
        }
        var unregisterPortalEl = layerRef.current ? registerPortalEl(layerRef.current) : undefined;
        return function () {
            if (unregisterPortalEl) {
                unregisterPortalEl();
            }
            removeLayerElement();
            if (hostId) {
                unregisterLayer(hostId, createLayerElement);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should run if the hostId updates.
    }, [hostId]);
    react["useEffect"](function () {
        if (layerRef.current && needRaiseLayerMount) {
            onLayerMounted === null || onLayerMounted === void 0 ? void 0 : onLayerMounted();
            onLayerDidMount === null || onLayerDidMount === void 0 ? void 0 : onLayerDidMount();
            setNeedRaiseLayerMount(false);
        }
    }, [needRaiseLayerMount, onLayerMounted, onLayerDidMount]);
    useDebugWarnings(props);
    return (react["createElement"]("span", { className: "ms-layer", ref: mergedRef }, layerRef.current &&
        react_dom["createPortal"](react["createElement"](FocusRectsProvider["a" /* FocusRectsProvider */], { layerRoot: true, providerRef: fabricRef },
            react["createElement"](Fabric, Object(tslib_es6["a" /* __assign */])({}, (!eventBubblingEnabled && getFilteredEvents()), fabricProps, { className: Object(css["a" /* css */])(classNames.content, fabricProps === null || fabricProps === void 0 ? void 0 : fabricProps.className), ref: fabricRef }), children)), layerRef.current)));
});
LayerBase.displayName = 'LayerBase';
var filteredEventProps;
var onFilterEvent = function (ev) {
    // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though
    // mouseenter and mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on
    // event name rather than ev.bubble.
    if (ev.eventPhase === Event.BUBBLING_PHASE &&
        ev.type !== 'mouseenter' &&
        ev.type !== 'mouseleave' &&
        ev.type !== 'touchstart' &&
        ev.type !== 'touchend') {
        ev.stopPropagation();
    }
};
function getFilteredEvents() {
    if (!filteredEventProps) {
        filteredEventProps = {};
        [
            'onClick',
            'onContextMenu',
            'onDoubleClick',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOver',
            'onMouseOut',
            'onMouseUp',
            'onTouchMove',
            'onTouchStart',
            'onTouchCancel',
            'onTouchEnd',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onInvalid',
            'onSubmit',
        ].forEach(function (name) { return (filteredEventProps[name] = onFilterEvent); });
    }
    return filteredEventProps;
}
function useDebugWarnings(props) {
    if (false) {}
}
//# sourceMappingURL=Layer.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.styles.js

var Layer_styles_GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content',
};
var Layer_styles_getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(Layer_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: lib["q" /* ZIndexes */].Layer,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    visibility: 'hidden',
                },
            ],
            className,
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible',
            },
        ],
    };
};
//# sourceMappingURL=Layer.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.js



var Layer = Object(styled["a" /* styled */])(LayerBase, Layer_styles_getStyles, undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles'],
});
//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "USl6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextualMenuItemType; });

/**
 * {@docCategory ContextualMenu}
 */
var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));
//# sourceMappingURL=ContextualMenu.types.js.map

/***/ }),

/***/ "VOGN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShimmerElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShimmerElementsDefaultHeights; });
/**
 * Describes the possible types for shimmer elements used.
 * {@docCategory Shimmer}
 */
var ShimmerElementType;
(function (ShimmerElementType) {
    /**
     * Line element type
     */
    ShimmerElementType[ShimmerElementType["line"] = 1] = "line";
    /**
     * Circle element type
     */
    ShimmerElementType[ShimmerElementType["circle"] = 2] = "circle";
    /**
     * Gap element type
     */
    ShimmerElementType[ShimmerElementType["gap"] = 3] = "gap";
})(ShimmerElementType || (ShimmerElementType = {}));
/**
 * Describes the default heights for shimmer elements when omitted in implementation.
 * {@docCategory Shimmer}
 */
var ShimmerElementsDefaultHeights;
(function (ShimmerElementsDefaultHeights) {
    /**
     * Default height of the line element when not provided by user: 16px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["line"] = 16] = "line";
    /**
     * Default height of the gap element when not provided by user: 16px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["gap"] = 16] = "gap";
    /**
     * Default height of the circle element when not provided by user: 24px
     */
    ShimmerElementsDefaultHeights[ShimmerElementsDefaultHeights["circle"] = 24] = "circle";
})(ShimmerElementsDefaultHeights || (ShimmerElementsDefaultHeights = {}));
//# sourceMappingURL=Shimmer.types.js.map

/***/ }),

/***/ "XgkO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TextField; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.js + 2 modules
var Label = __webpack_require__("Rel8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/DelayedRender.js
var DelayedRender = __webpack_require__("5sqY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnControlledUsage.js
var warnControlledUsage = __webpack_require__("e6FP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warn.js
var warn = __webpack_require__("CDZR");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/controlled.js
var controlled = __webpack_require__("3yIe");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/ie11Detector.js
var ie11Detector = __webpack_require__("9fwj");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/TextField/TextField.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DEFAULT_STATE_VALUE = '';
var COMPONENT_NAME = 'TextField';
var REVEAL_ICON_NAME = 'RedEye';
var HIDE_ICON_NAME = 'Hide';
var TextField_base_TextFieldBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TextFieldBase, _super);
    function TextFieldBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this._textElement = react["createRef"]();
        _this._onFocus = function (ev) {
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
            _this.setState({ isFocused: true }, function () {
                if (_this.props.validateOnFocusIn) {
                    _this._validate(_this.value);
                }
            });
        };
        _this._onBlur = function (ev) {
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
            _this.setState({ isFocused: false }, function () {
                if (_this.props.validateOnFocusOut) {
                    _this._validate(_this.value);
                }
            });
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required;
            // IProcessedStyleSet definition requires casting for what Label expects as its styles prop
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            if (label) {
                return (react["createElement"](Label["a" /* Label */], { required: required, htmlFor: _this._id, styles: labelStyles, disabled: props.disabled, id: _this._labelId }, props.label));
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return react["createElement"]("span", { className: _this._classNames.description }, props.description);
            }
            return null;
        };
        _this._onRevealButtonClick = function (event) {
            _this.setState(function (prevState) { return ({ isRevealingPassword: !prevState.isRevealingPassword }); });
        };
        _this._onInputChange = function (event) {
            // Previously, we needed to call both onInput and onChange due to some weird IE/React issues,
            // which have *probably* been fixed now:
            // - https://github.com/microsoft/fluentui/issues/744 (likely fixed)
            // - https://github.com/microsoft/fluentui/issues/824 (confirmed fixed)
            var _a, _b;
            // TODO (Fabric 8?) - Switch to calling only onChange. This switch is pretty disruptive for
            // tests (ours and maybe consumers' too), so it seemed best to do the switch in a major bump.
            var element = event.target;
            var value = element.value;
            // Ignore this event if any of the following are true:
            // - the value is undefined (in case one of the IE bugs comes back)
            // - it's a duplicate event (important since onInputChange is called twice per actual user event)
            // - it's the same as the previous value
            var previousValue = _getValue(_this.props, _this.state) || '';
            if (value === undefined || value === _this._lastChangeValue || value === previousValue) {
                _this._lastChangeValue = undefined;
                return;
            }
            _this._lastChangeValue = value;
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event, value);
            if (!_this._isControlled) {
                // ONLY if this is an uncontrolled component, update the displayed value.
                // (Controlled components must update the `value` prop from `onChange`.)
                _this.setState({ uncontrolledValue: value });
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        if (false) {}
        _this._fallbackId = Object(getId["a" /* getId */])(COMPONENT_NAME);
        _this._descriptionId = Object(getId["a" /* getId */])(COMPONENT_NAME + 'Description');
        _this._labelId = Object(getId["a" /* getId */])(COMPONENT_NAME + 'Label');
        _this._prefixId = Object(getId["a" /* getId */])(COMPONENT_NAME + 'Prefix');
        _this._suffixId = Object(getId["a" /* getId */])(COMPONENT_NAME + 'Suffix');
        _this._warnControlledUsage();
        var defaultValue = (_a = props.defaultValue, _a === void 0 ? DEFAULT_STATE_VALUE : _a);
        if (typeof defaultValue === 'number') {
            // This isn't allowed per the props, but happens anyway.
            defaultValue = String(defaultValue);
        }
        _this.state = {
            uncontrolledValue: _this._isControlled ? undefined : defaultValue,
            isFocused: false,
            errorMessage: '',
        };
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        return _this;
    }
    Object.defineProperty(TextFieldBase.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return _getValue(this.props, this.state);
        },
        enumerable: false,
        configurable: true
    });
    TextFieldBase.prototype.componentDidMount = function () {
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.value);
        }
    };
    TextFieldBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    TextFieldBase.prototype.getSnapshotBeforeUpdate = function (prevProps, prevState) {
        return {
            selection: [this.selectionStart, this.selectionEnd],
        };
    };
    TextFieldBase.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _a;
        var props = this.props;
        var selection = (_a = (snapshot || {}).selection, _a === void 0 ? [null, null] : _a);
        var start = selection[0], end = selection[1];
        if (!!prevProps.multiline !== !!props.multiline && prevState.isFocused) {
            // The text field has just changed between single- and multi-line, so we need to reset focus
            // and selection/cursor.
            this.focus();
            if (start !== null && end !== null && start >= 0 && end >= 0) {
                this.setSelectionRange(start, end);
            }
        }
        if (prevProps.value !== props.value) {
            // Only if the value in props changed, reset the record of the last value seen by a
            // change/input event (don't do this if the value in state changed, since at least in tests
            // the state update may happen before the second event in a series)
            this._lastChangeValue = undefined;
        }
        var prevValue = _getValue(prevProps, prevState);
        var value = this.value;
        if (prevValue !== value) {
            // Handle controlled/uncontrolled warnings and status
            this._warnControlledUsage(prevProps);
            // Clear error message if needed
            // TODO: is there any way to do this without an extra render?
            if (this.state.errorMessage && !props.errorMessage) {
                this.setState({ errorMessage: '' });
            }
            // Adjust height if needed based on new value
            this._adjustInputHeight();
            // TODO: #5875 added logic to trigger validation in componentWillReceiveProps and other places.
            // This seems a bit odd and hard to integrate with the new approach.
            // (Starting to think we should just put the validation logic in a separate wrapper component...?)
            if (_shouldValidateAllChanges(props)) {
                this._delayedValidate(value);
            }
        }
    };
    TextFieldBase.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        var borderless = (_a = this.props, _a.borderless), className = _a.className, disabled = _a.disabled, invalid = _a.invalid, iconProps = _a.iconProps, inputClassName = _a.inputClassName, label = _a.label, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, prefix = _a.prefix, resizable = _a.resizable, suffix = _a.suffix, theme = _a.theme, styles = _a.styles, autoAdjustHeight = _a.autoAdjustHeight, canRevealPassword = _a.canRevealPassword, revealPasswordAriaLabel = _a.revealPasswordAriaLabel, type = _a.type, onRenderPrefix = (_b = _a.onRenderPrefix, _b === void 0 ? this._onRenderPrefix : _b), onRenderSuffix = (_c = _a.onRenderSuffix, _c === void 0 ? this._onRenderSuffix : _c), onRenderLabel = (_d = _a.onRenderLabel, _d === void 0 ? this._onRenderLabel : _d), onRenderDescription = (_e = _a.onRenderDescription, _e === void 0 ? this._onRenderDescription : _e);
        var isFocused = (_f = this.state, _f.isFocused), isRevealingPassword = _f.isRevealingPassword;
        var errorMessage = this._errorMessage;
        var isInvalid = typeof invalid === 'boolean' ? invalid : !!errorMessage;
        var hasRevealButton = !!canRevealPassword && type === 'password' && _browserNeedsRevealButton();
        var classNames = (this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            focused: isFocused,
            required: required,
            multiline: multiline,
            hasLabel: !!label,
            hasErrorMessage: isInvalid,
            borderless: borderless,
            resizable: resizable,
            hasIcon: !!iconProps,
            underlined: underlined,
            inputClassName: inputClassName,
            autoAdjustHeight: autoAdjustHeight,
            hasRevealButton: hasRevealButton,
        }));
        return (
        // eslint-disable-next-line deprecation/deprecation
        react["createElement"]("div", { ref: this.props.elementRef, className: classNames.root },
            react["createElement"]("div", { className: classNames.wrapper },
                onRenderLabel(this.props, this._onRenderLabel),
                react["createElement"]("div", { className: classNames.fieldGroup },
                    (prefix !== undefined || this.props.onRenderPrefix) && (react["createElement"]("div", { className: classNames.prefix, id: this._prefixId }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    iconProps && react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({ className: classNames.icon }, iconProps)),
                    hasRevealButton && (
                    // Explicitly set type="button" since the default button type within a form is "submit"
                    react["createElement"]("button", { "aria-label": revealPasswordAriaLabel, className: classNames.revealButton, onClick: this._onRevealButtonClick, "aria-pressed": !!isRevealingPassword, type: "button" },
                        react["createElement"]("span", { className: classNames.revealSpan },
                            react["createElement"](Icon["a" /* Icon */], { className: classNames.revealIcon, iconName: isRevealingPassword ? HIDE_ICON_NAME : REVEAL_ICON_NAME })))),
                    (suffix !== undefined || this.props.onRenderSuffix) && (react["createElement"]("div", { className: classNames.suffix, id: this._suffixId }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable && (react["createElement"]("span", { id: this._descriptionId },
                onRenderDescription(this.props, this._onRenderDescription),
                errorMessage && (react["createElement"]("div", { role: "alert" },
                    react["createElement"](DelayedRender["a" /* DelayedRender */], null, this._renderErrorMessage())))))));
    };
    /**
     * Sets focus on the text field
     */
    TextFieldBase.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Blurs the text field.
     */
    TextFieldBase.prototype.blur = function () {
        if (this._textElement.current) {
            this._textElement.current.blur();
        }
    };
    /**
     * Selects the text field
     */
    TextFieldBase.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    TextFieldBase.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextFieldBase.prototype._warnControlledUsage = function (prevProps) {
        // Show warnings if props are being used in an invalid way
        Object(warnControlledUsage["a" /* warnControlledUsage */])({
            componentId: this._id,
            componentName: COMPONENT_NAME,
            props: this.props,
            oldProps: prevProps,
            valueProp: 'value',
            defaultValueProp: 'defaultValue',
            onChangeProp: 'onChange',
            readOnlyProp: 'readOnly',
        });
        if (this.props.value === null && !this._hasWarnedNullValue) {
            this._hasWarnedNullValue = true;
            Object(warn["a" /* warn */])("Warning: 'value' prop on '".concat(COMPONENT_NAME, "' should not be null. Consider using an ") +
                'empty string to clear the component or undefined to indicate an uncontrolled component.');
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "_id", {
        /** Returns `props.id` if available, or a fallback if not. */
        get: function () {
            return this.props.id || this._fallbackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "_isControlled", {
        get: function () {
            return Object(controlled["a" /* isControlled */])(this.props, 'value');
        },
        enumerable: false,
        configurable: true
    });
    TextFieldBase.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return react["createElement"]("span", { style: { paddingBottom: '1px' } }, prefix);
    };
    TextFieldBase.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return react["createElement"]("span", { style: { paddingBottom: '1px' } }, suffix);
    };
    Object.defineProperty(TextFieldBase.prototype, "_errorMessage", {
        /**
         * Current error message from either `props.errorMessage` or the result of `props.onGetErrorMessage`.
         *
         * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
         * - If we have done the validation and there is validation error, errorMessage is the validation error message.
         */
        get: function () {
            var _a;
            var errorMessage = (_a = this.props.errorMessage, _a === void 0 ? this.state.errorMessage : _a);
            return errorMessage || '';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Renders error message based on the type of the message.
     *
     * - If error message is string, it will render using the built in styles.
     * - If error message is an element, user has full control over how it's rendered.
     */
    TextFieldBase.prototype._renderErrorMessage = function () {
        var errorMessage = this._errorMessage;
        return errorMessage ? (typeof errorMessage === 'string' ? (react["createElement"]("p", { className: this._classNames.errorMessage },
            react["createElement"]("span", { "data-automation-id": "error-message" }, errorMessage))) : (react["createElement"]("div", { className: this._classNames.errorMessage, "data-automation-id": "error-message" }, errorMessage))) : null;
    };
    Object.defineProperty(TextFieldBase.prototype, "_isDescriptionAvailable", {
        /**
         * If a custom description render function is supplied then treat description as always available.
         * Otherwise defer to the presence of description or error message text.
         */
        get: function () {
            var props = this.props;
            return !!(props.onRenderDescription || props.description || this._errorMessage);
        },
        enumerable: false,
        configurable: true
    });
    TextFieldBase.prototype._renderTextArea = function () {
        var _a;
        var invalid = (_a = this.props.invalid, _a === void 0 ? !!this._errorMessage : _a);
        var textAreaProps = Object(properties["h" /* getNativeProps */])(this.props, properties["t" /* textAreaProperties */], ['defaultValue']);
        var ariaLabelledBy = this.props['aria-labelledby'] || (this.props.label ? this._labelId : undefined);
        return (react["createElement"]("textarea", Object(tslib_es6["a" /* __assign */])({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.value || '', onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-labelledby": ariaLabelledBy, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": invalid, "aria-label": this.props.ariaLabel, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._renderInput = function () {
        var _a, _b, _c;
        var ariaLabel = (_a = this.props, _a.ariaLabel), invalid = (_b = _a.invalid, _b === void 0 ? !!this._errorMessage : _b), onRenderPrefix = _a.onRenderPrefix, onRenderSuffix = _a.onRenderSuffix, prefix = _a.prefix, suffix = _a.suffix, type = (_c = _a.type, _c === void 0 ? 'text' : _c), label = _a.label;
        // build aria-labelledby list from label, prefix, and suffix
        var labelIds = [];
        label && labelIds.push(this._labelId);
        (prefix !== undefined || onRenderPrefix) && labelIds.push(this._prefixId);
        (suffix !== undefined || onRenderSuffix) && labelIds.push(this._suffixId);
        var inputProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ type: this.state.isRevealingPassword ? 'text' : type, id: this._id }, Object(properties["h" /* getNativeProps */])(this.props, properties["l" /* inputProperties */], ['defaultValue', 'type'])), { 'aria-labelledby': this.props['aria-labelledby'] || (labelIds.length > 0 ? labelIds.join(' ') : undefined), ref: this._textElement, value: this.value || '', onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, 'aria-label': ariaLabel, 'aria-describedby': this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], 'aria-invalid': invalid, onFocus: this._onFocus, onBlur: this._onBlur });
        var defaultRender = function (updatedInputProps) {
            return react["createElement"]("input", Object(tslib_es6["a" /* __assign */])({}, updatedInputProps));
        };
        var onRenderInput = this.props.onRenderInput || defaultRender;
        return onRenderInput(inputProps, defaultRender);
    };
    TextFieldBase.prototype._validate = function (value) {
        var _this = this;
        // In case _validate is called again while validation promise is executing
        if (this._latestValidateValue === value && _shouldValidateAllChanges(this.props)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage && onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string' || !('then' in result)) {
                this.setState({ errorMessage: result });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextFieldBase.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (value === this.value && this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage, value);
        }
    };
    TextFieldBase.prototype._adjustInputHeight = function () {
        var _a, _b;
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var scrollTop = (_b = (_a = this.props.scrollContainerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollTop;
            var textField = this._textElement.current;
            textField.style.height = '';
            textField.style.height = textField.scrollHeight + 'px';
            if (scrollTop) {
                // Safe to assert not null, otherwise we wouldn't have a scrollTop;
                this.props.scrollContainerRef.current.scrollTop = scrollTop;
            }
        }
    };
    TextFieldBase.defaultProps = {
        resizable: true,
        deferredValidationTime: 200,
        validateOnLoad: true,
    };
    return TextFieldBase;
}(react["Component"]));
/** Get the value from the given state and props (converting from number to string if needed) */
function _getValue(props, state) {
    var _a = props.value, value = _a === void 0 ? state.uncontrolledValue : _a;
    if (typeof value === 'number') {
        // not allowed per typings, but happens anyway
        return String(value);
    }
    return value;
}
/**
 * If `validateOnFocusIn` or `validateOnFocusOut` is true, validation should run **only** on that event.
 * Otherwise, validation should run on every change.
 */
function _shouldValidateAllChanges(props) {
    return !(props.validateOnFocusIn || props.validateOnFocusOut);
}
// Only calculate this once across all TextFields, since will stay the same
var __browserNeedsRevealButton;
function _browserNeedsRevealButton() {
    if (typeof __browserNeedsRevealButton !== 'boolean') {
        var win = Object(getWindow["a" /* getWindow */])();
        if (win === null || win === void 0 ? void 0 : win.navigator) {
            // Edge, Chromium Edge
            var isEdge = /Edg/.test(win.navigator.userAgent || '');
            __browserNeedsRevealButton = !(Object(ie11Detector["a" /* isIE11 */])() || isEdge);
        }
        else {
            __browserNeedsRevealButton = true;
        }
    }
    return __browserNeedsRevealButton;
}
//# sourceMappingURL=TextField.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/TextField/TextField.styles.js


var globalClassNames = {
    root: 'ms-TextField',
    description: 'ms-TextField-description',
    errorMessage: 'ms-TextField-errorMessage',
    field: 'ms-TextField-field',
    fieldGroup: 'ms-TextField-fieldGroup',
    prefix: 'ms-TextField-prefix',
    suffix: 'ms-TextField-suffix',
    wrapper: 'ms-TextField-wrapper',
    revealButton: 'ms-TextField-reveal',
    multiline: 'ms-TextField--multiline',
    borderless: 'ms-TextField--borderless',
    underlined: 'ms-TextField--underlined',
    unresizable: 'ms-TextField--unresizable',
    required: 'is-required',
    disabled: 'is-disabled',
    active: 'is-active',
};
function getLabelStyles(props) {
    var underlined = props.underlined, disabled = props.disabled, focused = props.focused, theme = props.theme;
    var palette = theme.palette, fonts = theme.fonts;
    return function () {
        var _a;
        return ({
            root: [
                underlined &&
                    disabled && {
                    color: palette.neutralTertiary,
                },
                underlined && {
                    fontSize: fonts.medium.fontSize,
                    marginRight: 8,
                    paddingLeft: 12,
                    paddingRight: 0,
                    lineHeight: '22px',
                    height: 32,
                },
                underlined &&
                    focused && {
                    selectors: (_a = {},
                        _a[lib["f" /* HighContrastSelector */]] = {
                            height: 31, // -1px to prevent jumpiness in HC with the increased border-width to 2px
                        },
                        _a),
                },
            ],
        });
    };
}
function getStyles(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, className = props.className, disabled = props.disabled, focused = props.focused, required = props.required, multiline = props.multiline, hasLabel = props.hasLabel, borderless = props.borderless, underlined = props.underlined, hasIcon = props.hasIcon, resizable = props.resizable, hasErrorMessage = props.hasErrorMessage, inputClassName = props.inputClassName, autoAdjustHeight = props.autoAdjustHeight, hasRevealButton = props.hasRevealButton;
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(globalClassNames, theme);
    var fieldPrefixSuffix = {
        // Suffix/Prefix are not editable so the disabled slot perfectly fits.
        background: semanticColors.disabledBackground,
        color: !disabled ? semanticColors.inputPlaceholderText : semanticColors.disabledText,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        selectors: (_a = {},
            _a[lib["f" /* HighContrastSelector */]] = {
                background: 'Window',
                color: disabled ? 'GrayText' : 'WindowText',
            },
            _a),
    };
    // placeholder style constants
    var placeholderStyles = [
        {
            color: semanticColors.inputPlaceholderText,
            opacity: 1,
            selectors: (_b = {},
                _b[lib["f" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                },
                _b),
        },
    ];
    var disabledPlaceholderStyles = {
        color: semanticColors.disabledText,
        selectors: (_c = {},
            _c[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
            },
            _c),
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            required && classNames.required,
            disabled && classNames.disabled,
            focused && classNames.active,
            multiline && classNames.multiline,
            borderless && classNames.borderless,
            underlined && classNames.underlined,
            lib["H" /* normalize */],
            {
                position: 'relative',
            },
            className,
        ],
        wrapper: [
            classNames.wrapper,
            underlined && [
                {
                    display: 'flex',
                    borderBottom: "1px solid ".concat(!hasErrorMessage ? semanticColors.inputBorder : semanticColors.errorText),
                    width: '100%',
                },
                disabled && {
                    borderBottomColor: semanticColors.disabledBackground,
                    selectors: (_d = {},
                        _d[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                        _d),
                },
                !disabled && {
                    selectors: {
                        ':hover': {
                            borderBottomColor: !hasErrorMessage ? semanticColors.inputBorderHovered : semanticColors.errorText,
                            selectors: (_e = {},
                                _e[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderBottomColor: 'Highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                                _e),
                        },
                    },
                },
                focused && [
                    {
                        position: 'relative',
                    },
                    Object(lib["y" /* getInputFocusStyle */])(!hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText, 0, 'borderBottom'),
                ],
            ],
        ],
        fieldGroup: [
            classNames.fieldGroup,
            lib["H" /* normalize */],
            {
                border: "1px solid ".concat(semanticColors.inputBorder),
                borderRadius: effects.roundedCorner2,
                background: semanticColors.inputBackground,
                cursor: 'text',
                height: 32,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
            },
            multiline && {
                minHeight: '60px',
                height: 'auto',
                display: 'flex',
            },
            !focused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: semanticColors.inputBorderHovered,
                        selectors: (_f = {},
                            _f[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'Highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                            _f),
                    },
                },
            },
            focused &&
                !underlined &&
                Object(lib["y" /* getInputFocusStyle */])(!hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText, effects.roundedCorner2),
            disabled && {
                borderColor: semanticColors.disabledBackground,
                selectors: (_g = {},
                    _g[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _g),
                cursor: 'default',
            },
            borderless && {
                border: 'none',
            },
            borderless &&
                focused && {
                border: 'none',
                selectors: {
                    ':after': {
                        border: 'none',
                    },
                },
            },
            underlined && {
                flex: '1 1 0px',
                border: 'none',
                textAlign: 'left',
            },
            underlined &&
                disabled && {
                backgroundColor: 'transparent',
            },
            hasErrorMessage &&
                !underlined && {
                borderColor: semanticColors.errorText,
                selectors: {
                    '&:hover': {
                        borderColor: semanticColors.errorText,
                    },
                },
            },
            !hasLabel &&
                required && {
                selectors: (_h = {
                        ':before': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10,
                        }
                    },
                    _h[lib["f" /* HighContrastSelector */]] = {
                        selectors: {
                            ':before': {
                                color: 'WindowText',
                                right: -14, // moving the * 4 pixel to right to alleviate border clipping in HC mode.
                            },
                        },
                    },
                    _h),
            },
        ],
        field: [
            fonts.medium,
            classNames.field,
            lib["H" /* normalize */],
            {
                borderRadius: 0,
                border: 'none',
                background: 'none',
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                padding: '0 8px',
                width: '100%',
                minWidth: 0,
                textOverflow: 'ellipsis',
                outline: 0,
                selectors: (_j = {
                        '&:active, &:focus, &:hover': { outline: 0 },
                        '::-ms-clear': {
                            display: 'none',
                        }
                    },
                    _j[lib["f" /* HighContrastSelector */]] = {
                        background: 'Window',
                        color: disabled ? 'GrayText' : 'WindowText',
                    },
                    _j),
            },
            Object(lib["z" /* getPlaceholderStyles */])(placeholderStyles),
            multiline &&
                !resizable && [
                classNames.unresizable,
                {
                    resize: 'none',
                },
            ],
            multiline && {
                minHeight: 'inherit',
                lineHeight: 17,
                flexGrow: 1,
                paddingTop: 6,
                paddingBottom: 6,
                overflow: 'auto',
                width: '100%',
            },
            multiline &&
                autoAdjustHeight && {
                overflow: 'hidden',
            },
            hasIcon &&
                !hasRevealButton && {
                paddingRight: 24,
            },
            multiline &&
                hasIcon && {
                paddingRight: 40,
            },
            disabled && [
                {
                    backgroundColor: semanticColors.disabledBackground,
                    color: semanticColors.disabledText,
                    borderColor: semanticColors.disabledBackground,
                },
                Object(lib["z" /* getPlaceholderStyles */])(disabledPlaceholderStyles),
            ],
            underlined && {
                textAlign: 'left',
            },
            focused &&
                !borderless && {
                selectors: (_k = {},
                    _k[lib["f" /* HighContrastSelector */]] = {
                        paddingLeft: 11,
                        paddingRight: 11,
                    },
                    _k),
            },
            focused &&
                multiline &&
                !borderless && {
                selectors: (_l = {},
                    _l[lib["f" /* HighContrastSelector */]] = {
                        paddingTop: 4, // take into consideration the 2px increased border-width (not when borderless).
                    },
                    _l),
            },
            inputClassName,
        ],
        icon: [
            multiline && {
                paddingRight: 24,
                alignItems: 'flex-end',
            },
            {
                pointerEvents: 'none',
                position: 'absolute',
                bottom: 6,
                right: 8,
                top: 'auto',
                fontSize: lib["h" /* IconFontSizes */].medium,
                lineHeight: 18,
            },
            disabled && {
                color: semanticColors.disabledText,
            },
        ],
        description: [
            classNames.description,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.xSmall.fontSize,
            },
        ],
        errorMessage: [
            classNames.errorMessage,
            lib["a" /* AnimationClassNames */].slideDownIn20,
            fonts.small,
            {
                color: semanticColors.errorText,
                margin: 0,
                paddingTop: 5,
                display: 'flex',
                alignItems: 'center',
            },
        ],
        prefix: [classNames.prefix, fieldPrefixSuffix],
        suffix: [classNames.suffix, fieldPrefixSuffix],
        revealButton: [
            classNames.revealButton,
            'ms-Button',
            'ms-Button--icon',
            Object(lib["u" /* getFocusStyle */])(theme, { inset: 1 }),
            {
                height: 30,
                width: 32,
                border: 'none',
                padding: '0px 4px',
                backgroundColor: 'transparent',
                color: semanticColors.link,
                selectors: {
                    ':hover': {
                        outline: 0,
                        color: semanticColors.primaryButtonBackgroundHovered,
                        backgroundColor: semanticColors.buttonBackgroundHovered,
                        selectors: (_m = {},
                            _m[lib["f" /* HighContrastSelector */]] = {
                                borderColor: 'Highlight',
                                color: 'Highlight',
                            },
                            _m),
                    },
                    ':focus': { outline: 0 },
                },
            },
            hasIcon && {
                marginRight: 28,
            },
        ],
        revealSpan: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
        },
        revealIcon: {
            margin: '0px 4px',
            pointerEvents: 'none',
            bottom: 6,
            right: 8,
            top: 'auto',
            fontSize: lib["h" /* IconFontSizes */].medium,
            lineHeight: 18,
        },
        subComponentStyles: {
            label: getLabelStyles(props),
        },
    };
}
//# sourceMappingURL=TextField.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/TextField/TextField.js



var TextField = Object(styled["a" /* styled */])(TextField_base_TextFieldBase, getStyles, undefined, {
    scope: 'TextField',
});
//# sourceMappingURL=TextField.js.map

/***/ }),

/***/ "Y1ZV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipOverflowMode; });
/**
 * {@docCategory Tooltip}
 */
var TooltipOverflowMode;
(function (TooltipOverflowMode) {
    /** Only show tooltip if parent DOM element is overflowing */
    TooltipOverflowMode[TooltipOverflowMode["Parent"] = 0] = "Parent";
    /**
     * Only show tooltip if tooltip host's content is overflowing.
     * Note that this does not check the children for overflow, only the TooltipHost root.
     */
    TooltipOverflowMode[TooltipOverflowMode["Self"] = 1] = "Self";
})(TooltipOverflowMode || (TooltipOverflowMode = {}));
//# sourceMappingURL=TooltipHost.types.js.map

/***/ }),

/***/ "YFIV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useDocumentEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useWindowEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getWindowEx; });
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7R02");

/**
 * NOTE: the check for `window`/`document` is a bit verbose and perhaps
 * overkill but it ensures the prior assumbed behavior of directly
 * calling `window`/`document` is preserved.
 *
 * It is possible to set `window` to undefined on `WindowProvider` so
 * we'll fallback to directly accessing the global in that (hopefully unlikely)
 * case.
 */
/**
 * Get a reference to the `document` object.
 * Use this in place of the global `document` in React function components.
 * @returns Document | undefined
 */
var useDocumentEx = function () {
    var _a;
    // eslint-disable-next-line no-restricted-globals
    return (_a = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_0__[/* useDocument */ "b"])()) !== null && _a !== void 0 ? _a : (typeof document !== 'undefined' ? document : undefined);
};
/**
 * Get a reference to the `window` object.
 * Use this in place of the global `window` in React function components.
 * @returns Window | undefined
 */
var useWindowEx = function () {
    var _a;
    // eslint-disable-next-line no-restricted-globals
    return (_a = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_0__[/* useWindow */ "c"])()) !== null && _a !== void 0 ? _a : (typeof window !== 'undefined' ? window : undefined);
};
/**
 * Get a reference to the `document` object.
 * Use this in place of the global `document` in React class components.
 *
 * @param ctx - Class component WindowContext
 * @returns Document | undefined
 */
var getDocumentEx = function (ctx) {
    var _a, _b;
    // eslint-disable-next-line no-restricted-globals
    return (_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.window) === null || _a === void 0 ? void 0 : _a.document) !== null && _b !== void 0 ? _b : (typeof document !== 'undefined' ? document : undefined);
};
/**
 * Get a reference to the `window` object.
 * Use this in place of the global `window` in React class components.
 *
 * @param ctx - Class component WindowContext
 * @returns Window | undefined
 */
var getWindowEx = function (ctx) {
    var _a;
    // eslint-disable-next-line no-restricted-globals
    return (_a = ctx === null || ctx === void 0 ? void 0 : ctx.window) !== null && _a !== void 0 ? _a : (typeof window !== 'undefined' ? window : undefined);
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "YGsJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Icon; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.types.js
/**
 * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
 * {@docCategory Icon}
 */
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));
//# sourceMappingURL=Icon.types.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.js + 2 modules
var Image = __webpack_require__("CmtH");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.types.js
var Image_types = __webpack_require__("028r");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/FontIcon.js
var FontIcon = __webpack_require__("KIfy");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.base.js







var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])({
    // Icon is used a lot by other components.
    // It's likely to see expected cases which pass different className to the Icon.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
var Icon_base_IconBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === Image_types["c" /* ImageLoadState */].error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false,
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, theme = _a.theme;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = 
        // eslint-disable-next-line deprecation/deprecation
        !!this.props.imageProps || this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
        var iconContent = Object(FontIcon["b" /* getIconContent */])(iconName) || {};
        var iconClassName = iconContent.iconClassName, iconContentChildren = iconContent.children, mergeImageProps = iconContent.mergeImageProps;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder,
        });
        var RootType = isImage ? 'span' : 'i';
        var nativeProps = Object(properties["h" /* getNativeProps */])(this.props, properties["i" /* htmlElementProperties */], [
            'aria-label',
        ]);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this.props.imageProps), { onLoadingStateChange: this._onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || Image["a" /* Image */];
        // eslint-disable-next-line deprecation/deprecation
        var ariaLabel = this.props['aria-label'] || this.props.ariaLabel;
        var accessibleName = imageProps.alt || ariaLabel || this.props.title;
        var hasName = !!(accessibleName ||
            this.props['aria-labelledby'] ||
            imageProps['aria-label'] ||
            imageProps['aria-labelledby']);
        var containerProps = hasName
            ? {
                role: isImage || mergeImageProps ? undefined : 'img',
                'aria-label': isImage || mergeImageProps ? undefined : accessibleName,
            }
            : {
                'aria-hidden': true,
            };
        var finalIconContentChildren = iconContentChildren;
        if (mergeImageProps && iconContentChildren && typeof iconContentChildren === 'object' && accessibleName) {
            finalIconContentChildren = react["cloneElement"](iconContentChildren, {
                alt: accessibleName,
            });
        }
        return (react["createElement"](RootType, Object(tslib_es6["a" /* __assign */])({ "data-icon-name": iconName }, containerProps, nativeProps, (mergeImageProps
            ? {
                title: undefined,
                'aria-label': undefined,
            }
            : {}), { className: classNames.root }), isImage ? react["createElement"](ImageType, Object(tslib_es6["a" /* __assign */])({}, imageProps)) : children || finalIconContentChildren));
    };
    return IconBase;
}(react["Component"]));

//# sourceMappingURL=Icon.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.styles.js
var Icon_styles = __webpack_require__("y/yH");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js



/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */
var Icon = Object(styled["a" /* styled */])(Icon_base_IconBase, Icon_styles["c" /* getStyles */], undefined, {
    scope: 'Icon',
}, true);
Icon.displayName = 'Icon';
//# sourceMappingURL=Icon.js.map

/***/ }),

/***/ "brIe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Modal; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js
var lib_scroll = __webpack_require__("4H/l");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/elementContains.js
var elementContains = __webpack_require__("H5Ur");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/FocusTrapZone/FocusTrapZone.js
var FocusTrapZone = __webpack_require__("lLjQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Modal/Modal.styles.js

var animationDuration = lib["c" /* AnimationVariables */].durationValue2;
var globalClassNames = {
    root: 'ms-Modal',
    main: 'ms-Dialog-main',
    scrollableContent: 'ms-Modal-scrollableContent',
    isOpen: 'is-open',
    layer: 'ms-Modal-Layer',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, isOpen = props.isOpen, isVisible = props.isVisible, hasBeenOpened = props.hasBeenOpened, modalRectangleTop = props.modalRectangleTop, theme = props.theme, topOffsetFixed = props.topOffsetFixed, isModeless = props.isModeless, layerClassName = props.layerClassName, isDefaultDragHandle = props.isDefaultDragHandle, windowInnerHeight = props.windowInnerHeight;
    var palette = theme.palette, effects = theme.effects, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(globalClassNames, theme);
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                backgroundColor: 'transparent',
                position: 'fixed',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: 'none',
                transition: "opacity ".concat(animationDuration),
            },
            topOffsetFixed &&
                typeof modalRectangleTop === 'number' &&
                hasBeenOpened && {
                alignItems: 'flex-start',
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
            },
            isVisible &&
                !isModeless && {
                pointerEvents: 'auto',
            },
            className,
        ],
        main: [
            classNames.main,
            {
                boxShadow: effects.elevation64,
                borderRadius: effects.roundedCorner2,
                backgroundColor: palette.white,
                boxSizing: 'border-box',
                position: 'relative',
                textAlign: 'left',
                outline: '3px solid transparent',
                maxHeight: 'calc(100% - 32px)',
                maxWidth: 'calc(100% - 32px)',
                minHeight: '176px',
                minWidth: '288px',
                overflowY: 'auto',
                zIndex: isModeless ? lib["q" /* ZIndexes */].Layer : undefined,
            },
            isModeless && {
                pointerEvents: 'auto',
            },
            topOffsetFixed &&
                typeof modalRectangleTop === 'number' &&
                hasBeenOpened && {
                top: modalRectangleTop,
            },
            isDefaultDragHandle && {
                cursor: 'move',
            },
            containerClassName,
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
                flexGrow: 1,
                maxHeight: '100vh',
                selectors: (_a = {},
                    _a['@supports (-webkit-overflow-scrolling: touch)'] = {
                        maxHeight: windowInnerHeight,
                    },
                    _a),
            },
            scrollableContentClassName,
        ],
        layer: isModeless && [layerClassName, classNames.layer, { pointerEvents: 'none' }],
        keyboardMoveIconContainer: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '3px 0px',
        },
        keyboardMoveIcon: {
            // eslint-disable-next-line deprecation/deprecation
            fontSize: fonts.xLargePlus.fontSize,
            width: '24px',
        },
    };
};
//# sourceMappingURL=Modal.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Overlay/Overlay.js + 2 modules
var Overlay = __webpack_require__("0nTY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.js + 6 modules
var Layer = __webpack_require__("TG3e");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Popup/Popup.js
var Popup = __webpack_require__("glTW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/hooks/useResponsiveMode.js
var useResponsiveMode = __webpack_require__("OpsB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__("hDQx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/DraggableZone/DraggableZone.styles.js


var getClassNames = Object(memoize["b" /* memoizeFunction */])(function (className, isDragging) {
    return {
        root: Object(lib["F" /* mergeStyles */])(className, isDragging && {
            touchAction: 'none',
            selectors: {
                '& *': {
                    userSelect: 'none',
                },
            },
        }),
    };
});
//# sourceMappingURL=DraggableZone.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/on.js
var on = __webpack_require__("km5L");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/DraggableZone/DraggableZone.js






var eventMapping = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend',
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup',
    },
};
var DraggableZone_DraggableZone = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DraggableZone, _super);
    function DraggableZone(props) {
        var _this = _super.call(this, props) || this;
        _this._currentEventType = eventMapping.mouse;
        _this._events = [];
        _this._onMouseDown = function (event) {
            var onMouseDown = react["Children"].only(_this.props.children).props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStart(event);
        };
        _this._onMouseUp = function (event) {
            var onMouseUp = react["Children"].only(_this.props.children).props.onMouseUp;
            if (onMouseUp) {
                onMouseUp(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStop(event);
        };
        _this._onTouchStart = function (event) {
            var onTouchStart = react["Children"].only(_this.props.children).props.onTouchStart;
            if (onTouchStart) {
                onTouchStart(event);
            }
            _this._currentEventType = eventMapping.touch;
            return _this._onDragStart(event);
        };
        _this._onTouchEnd = function (event) {
            var onTouchEnd = react["Children"].only(_this.props.children).props.onTouchEnd;
            if (onTouchEnd) {
                onTouchEnd(event);
            }
            _this._currentEventType = eventMapping.touch;
            _this._onDragStop(event);
        };
        _this._onDragStart = function (event) {
            // Only handle left click for dragging
            if (typeof event.button === 'number' && event.button !== 0) {
                return false;
            }
            // If the target doesn't match the handleSelector OR
            // if the target does match the preventDragSelector, bail out
            if ((_this.props.handleSelector && !_this._matchesSelector(event.target, _this.props.handleSelector)) ||
                (_this.props.preventDragSelector &&
                    _this._matchesSelector(event.target, _this.props.preventDragSelector))) {
                return;
            }
            // Remember the touch identifier if this is a touch event so we can
            // distinguish between individual touches in multitouch scenarios
            // by remembering which touch point we were given
            _this._touchId = _this._getTouchId(event);
            var position = _this._getControlPosition(event);
            if (position === undefined) {
                return;
            }
            var dragData = _this._createDragDataFromPosition(position);
            _this.props.onStart && _this.props.onStart(event, dragData);
            _this.setState({
                isDragging: true,
                lastPosition: position,
            });
            // hook up the appropriate mouse/touch events to the body to ensure
            // smooth dragging
            var doc = Object(dom["a" /* getDocumentEx */])(_this.context);
            _this._events = [
                Object(on["a" /* on */])(doc.body, _this._currentEventType.move, _this._onDrag, true /* use capture phase */),
                Object(on["a" /* on */])(doc.body, _this._currentEventType.stop, _this._onDragStop, true /* use capture phase */),
            ];
        };
        _this._onDrag = function (event) {
            // Prevent scrolling on mobile devices
            if (event.type === 'touchmove') {
                event.preventDefault();
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            // create the updated drag data from the position data
            var updatedData = _this._createUpdatedDragData(_this._createDragDataFromPosition(position));
            var updatedPosition = updatedData.position;
            _this.props.onDragChange && _this.props.onDragChange(event, updatedData);
            _this.setState({
                position: updatedPosition,
                lastPosition: position,
            });
        };
        _this._onDragStop = function (event) {
            if (!_this.state.isDragging) {
                return;
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            var baseDragData = _this._createDragDataFromPosition(position);
            // Set dragging to false and reset the lastPosition
            _this.setState({
                isDragging: false,
                lastPosition: undefined,
            });
            _this.props.onStop && _this.props.onStop(event, baseDragData);
            if (_this.props.position) {
                _this.setState({
                    position: _this.props.position,
                });
            }
            // Remove event handlers
            _this._events.forEach(function (dispose) { return dispose(); });
        };
        _this.state = {
            isDragging: false,
            position: _this.props.position || { x: 0, y: 0 },
            lastPosition: undefined,
        };
        return _this;
    }
    DraggableZone.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.position && (!prevProps.position || this.props.position !== prevProps.position)) {
            this.setState({ position: this.props.position });
        }
    };
    DraggableZone.prototype.componentWillUnmount = function () {
        this._events.forEach(function (dispose) { return dispose(); });
    };
    DraggableZone.prototype.render = function () {
        var _a;
        var child = react["Children"].only(this.props.children);
        var props = child.props;
        var position = this.props.position;
        var statePosition = (_a = this.state, _a.position), isDragging = _a.isDragging;
        var x = statePosition.x;
        var y = statePosition.y;
        if (position && !isDragging) {
            x = position.x;
            y = position.y;
        }
        return react["cloneElement"](child, {
            style: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props.style), { transform: "translate(".concat(x, "px, ").concat(y, "px)") }),
            className: getClassNames(props.className, this.state.isDragging).root,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        });
    };
    /**
     * Get the control position based off the event that fired
     * @param event - The event to get offsets from
     */
    DraggableZone.prototype._getControlPosition = function (event) {
        var touchObj = this._getActiveTouch(event);
        // did we get the right touch?
        if (this._touchId !== undefined && !touchObj) {
            return undefined;
        }
        var eventToGetOffset = touchObj || event;
        return {
            x: eventToGetOffset.clientX,
            y: eventToGetOffset.clientY,
        };
    };
    /**
     * Get the active touch point that we have saved from the event's TouchList
     * @param event - The event used to get the TouchList for the active touch point
     */
    DraggableZone.prototype._getActiveTouch = function (event) {
        return ((event.targetTouches && this._findTouchInTouchList(event.targetTouches)) ||
            (event.changedTouches && this._findTouchInTouchList(event.changedTouches)));
    };
    /**
     * Get the initial touch identifier associated with the given event
     * @param event - The event that contains the TouchList
     */
    DraggableZone.prototype._getTouchId = function (event) {
        var touch = (event.targetTouches && event.targetTouches[0]) || (event.changedTouches && event.changedTouches[0]);
        if (touch) {
            return touch.identifier;
        }
    };
    /**
     * Returns if an element (or any of the element's parents) match the given selector
     */
    DraggableZone.prototype._matchesSelector = function (element, selector) {
        var _a;
        if (!element || element === ((_a = Object(dom["a" /* getDocumentEx */])(this.context)) === null || _a === void 0 ? void 0 : _a.body)) {
            return false;
        }
        var matchesSelectorFn = 
        // eslint-disable-next-line deprecation/deprecation
        element.matches || element.webkitMatchesSelector || element.msMatchesSelector; /* for IE */
        if (!matchesSelectorFn) {
            return false;
        }
        return matchesSelectorFn.call(element, selector) || this._matchesSelector(element.parentElement, selector);
    };
    /**
     * Attempts to find the Touch that matches the identifier  we stored in dragStart
     * @param touchList The TouchList to look for the stored identifier from dragStart
     */
    DraggableZone.prototype._findTouchInTouchList = function (touchList) {
        if (this._touchId === undefined) {
            return;
        }
        for (var i = 0; i < touchList.length; i++) {
            if (touchList[i].identifier === this._touchId) {
                return touchList[i];
            }
        }
        return undefined;
    };
    /**
     * Create DragData based off of the last known position and the new position passed in
     * @param position The new position as part of the drag
     */
    DraggableZone.prototype._createDragDataFromPosition = function (position) {
        var lastPosition = this.state.lastPosition;
        // If we have no lastPosition, use the given position
        // for last position
        if (lastPosition === undefined) {
            return {
                delta: { x: 0, y: 0 },
                lastPosition: position,
                position: position,
            };
        }
        return {
            delta: {
                x: position.x - lastPosition.x,
                y: position.y - lastPosition.y,
            },
            lastPosition: lastPosition,
            position: position,
        };
    };
    /**
     * Creates an updated DragData based off the current position and given baseDragData
     * @param baseDragData The base DragData (from _createDragDataFromPosition) used to calculate the updated positions
     */
    DraggableZone.prototype._createUpdatedDragData = function (baseDragData) {
        var position = this.state.position;
        return {
            position: {
                x: position.x + baseDragData.delta.x,
                y: position.y + baseDragData.delta.y,
            },
            delta: baseDragData.delta,
            lastPosition: position,
        };
    };
    DraggableZone.contextType = WindowProvider["a" /* WindowContext */];
    return DraggableZone;
}(react["Component"]));
//# sourceMappingURL=DraggableZone.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useSetTimeout.js
var useSetTimeout = __webpack_require__("VBIn");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useBoolean.js
var useBoolean = __webpack_require__("6MXf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useConst.js
var useConst = __webpack_require__("mFKB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useUnmount.js
var useUnmount = __webpack_require__("/jyJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Modal/Modal.base.js














var ZERO = { x: 0, y: 0 };
var DEFAULT_PROPS = {
    isOpen: false,
    isDarkOverlay: true,
    className: '',
    containerClassName: '',
    enableAriaHiddenSiblings: true,
};
var Modal_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var getMoveDelta = function (ev) {
    var delta = 10;
    if (ev.shiftKey) {
        if (!ev.ctrlKey) {
            delta = 50;
        }
    }
    else if (ev.ctrlKey) {
        delta = 1;
    }
    return delta;
};
var useComponentRef = function (props, focusTrapZone) {
    react["useImperativeHandle"](props.componentRef, function () { return ({
        focus: function () {
            if (focusTrapZone.current) {
                focusTrapZone.current.focus();
            }
        },
    }); }, [focusTrapZone]);
};
var ModalBase = react["forwardRef"](function (propsWithoutDefaults, ref) {
    var _a, _b, _c, _d, _e;
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults);
    var allowTouchBodyScroll = props.allowTouchBodyScroll, className = props.className, children = props.children, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, elementToFocusOnDismiss = props.elementToFocusOnDismiss, firstFocusableSelector = props.firstFocusableSelector, focusTrapZoneProps = props.focusTrapZoneProps, forceFocusInsideTrap = props.forceFocusInsideTrap, 
    // eslint-disable-next-line deprecation/deprecation
    _f = props.disableRestoreFocus, 
    // eslint-disable-next-line deprecation/deprecation
    disableRestoreFocus = _f === void 0 ? props.ignoreExternalFocusing : _f, isBlocking = props.isBlocking, isAlert = props.isAlert, isClickableOutsideFocusTrap = props.isClickableOutsideFocusTrap, isDarkOverlay = props.isDarkOverlay, onDismiss = props.onDismiss, layerProps = props.layerProps, overlay = props.overlay, isOpen = props.isOpen, titleAriaId = props.titleAriaId, styles = props.styles, subtitleAriaId = props.subtitleAriaId, theme = props.theme, topOffsetFixed = props.topOffsetFixed, responsiveMode = props.responsiveMode, 
    // eslint-disable-next-line deprecation/deprecation
    onLayerDidMount = props.onLayerDidMount, isModeless = props.isModeless, dragOptions = props.dragOptions, onDismissed = props.onDismissed, 
    // eslint-disable-next-line deprecation/deprecation
    enableAriaHiddenSiblings = props.enableAriaHiddenSiblings, popupProps = props.popupProps;
    var rootRef = react["useRef"](null);
    var focusTrapZone = react["useRef"](null);
    var focusTrapZoneRef = Object(useMergedRefs["a" /* useMergedRefs */])(focusTrapZone, focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.componentRef);
    var focusTrapZoneElm = react["useRef"](null);
    var mergedRef = Object(useMergedRefs["a" /* useMergedRefs */])(rootRef, ref);
    var modalResponsiveMode = Object(useResponsiveMode["a" /* useResponsiveMode */])(mergedRef);
    var focusTrapZoneId = Object(useId["a" /* useId */])('ModalFocusTrapZone', focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.id);
    var win = Object(WindowProvider["c" /* useWindow */])();
    var _g = Object(useSetTimeout["a" /* useSetTimeout */])(), setTimeout = _g.setTimeout, clearTimeout = _g.clearTimeout;
    var _h = react["useState"](isOpen), isModalOpen = _h[0], setIsModalOpen = _h[1];
    var _j = react["useState"](isOpen), isVisible = _j[0], setIsVisible = _j[1];
    var _k = react["useState"](ZERO), coordinates = _k[0], setCoordinates = _k[1];
    var _l = react["useState"](), modalRectangleTop = _l[0], setModalRectangleTop = _l[1];
    var _m = Object(useBoolean["a" /* useBoolean */])(false), isModalMenuOpen = _m[0], _o = _m[1], toggleModalMenuOpen = _o.toggle, setModalMenuClose = _o.setFalse;
    var internalState = Object(useConst["a" /* useConst */])(function () { return ({
        onModalCloseTimer: 0,
        allowTouchBodyScroll: allowTouchBodyScroll,
        scrollableContent: null,
        lastSetCoordinates: ZERO,
        events: new EventGroup["a" /* EventGroup */]({}),
    }); });
    var keepInBounds = (dragOptions || {}).keepInBounds;
    var isAlertRole = isAlert !== null && isAlert !== void 0 ? isAlert : (isBlocking && !isModeless);
    var layerClassName = layerProps === undefined ? '' : layerProps.className;
    var classNames = Modal_base_getClassNames(styles, {
        theme: theme,
        className: className,
        containerClassName: containerClassName,
        scrollableContentClassName: scrollableContentClassName,
        isOpen: isOpen,
        isVisible: isVisible,
        hasBeenOpened: internalState.hasBeenOpened,
        modalRectangleTop: modalRectangleTop,
        topOffsetFixed: topOffsetFixed,
        isModeless: isModeless,
        layerClassName: layerClassName,
        windowInnerHeight: win === null || win === void 0 ? void 0 : win.innerHeight,
        isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector,
    });
    var mergedLayerProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ eventBubblingEnabled: false }, layerProps), { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount, insertFirst: (layerProps === null || layerProps === void 0 ? void 0 : layerProps.insertFirst) || isModeless, className: classNames.layer });
    // Allow the user to scroll within the modal but not on the body
    var allowScrollOnModal = react["useCallback"](function (elt) {
        if (elt) {
            if (internalState.allowTouchBodyScroll) {
                Object(lib_scroll["a" /* allowOverscrollOnElement */])(elt, internalState.events);
            }
            else {
                Object(lib_scroll["b" /* allowScrollOnElement */])(elt, internalState.events);
            }
        }
        else {
            internalState.events.off(internalState.scrollableContent);
        }
        internalState.scrollableContent = elt;
    }, [internalState]);
    var registerInitialModalPosition = function () {
        var dialogMain = focusTrapZoneElm.current;
        var modalRectangle = dialogMain === null || dialogMain === void 0 ? void 0 : dialogMain.getBoundingClientRect();
        if (modalRectangle) {
            if (topOffsetFixed) {
                setModalRectangleTop(modalRectangle.top);
            }
            if (keepInBounds) {
                // x/y are unavailable in IE, so use the equivalent left/top
                internalState.minPosition = { x: -modalRectangle.left, y: -modalRectangle.top };
                internalState.maxPosition = { x: modalRectangle.left, y: modalRectangle.top };
            }
        }
    };
    /**
     * Clamps an axis to a specified min and max position.
     *
     * @param axis A string that represents the axis (x/y).
     * @param position The position on the axis.
     */
    var getClampedAxis = react["useCallback"](function (axis, position) {
        var minPosition = internalState.minPosition, maxPosition = internalState.maxPosition;
        if (keepInBounds && minPosition && maxPosition) {
            position = Math.max(minPosition[axis], position);
            position = Math.min(maxPosition[axis], position);
        }
        return position;
    }, [keepInBounds, internalState]);
    var handleModalClose = function () {
        var _a;
        internalState.lastSetCoordinates = ZERO;
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = false;
        setIsModalOpen(false);
        setCoordinates(ZERO);
        (_a = internalState.disposeOnKeyUp) === null || _a === void 0 ? void 0 : _a.call(internalState);
        onDismissed === null || onDismissed === void 0 ? void 0 : onDismissed();
    };
    var handleDragStart = react["useCallback"](function () {
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = false;
    }, [internalState, setModalMenuClose]);
    var handleDrag = react["useCallback"](function (ev, dragData) {
        setCoordinates(function (prevValue) { return ({
            x: getClampedAxis('x', prevValue.x + dragData.delta.x),
            y: getClampedAxis('y', prevValue.y + dragData.delta.y),
        }); });
    }, [getClampedAxis]);
    var handleDragStop = react["useCallback"](function () {
        if (focusTrapZone.current) {
            focusTrapZone.current.focus();
        }
    }, []);
    var handleEnterKeyboardMoveMode = function () {
        // We need a global handleKeyDown event when we are in the move mode so that we can
        // handle the key presses and the components inside the modal do not get the events
        var handleKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            if (ev.altKey && ev.ctrlKey && ev.keyCode === KeyCodes["a" /* KeyCodes */].space) {
                // CTRL + ALT + SPACE is handled during keyUp
                ev.preventDefault();
                ev.stopPropagation();
                return;
            }
            // eslint-disable-next-line deprecation/deprecation
            var newLocal = ev.altKey || ev.keyCode === KeyCodes["a" /* KeyCodes */].escape;
            if (isModalMenuOpen && newLocal) {
                setModalMenuClose();
            }
            // eslint-disable-next-line deprecation/deprecation
            if (internalState.isInKeyboardMoveMode && (ev.keyCode === KeyCodes["a" /* KeyCodes */].escape || ev.keyCode === KeyCodes["a" /* KeyCodes */].enter)) {
                internalState.isInKeyboardMoveMode = false;
                ev.preventDefault();
                ev.stopPropagation();
            }
            if (internalState.isInKeyboardMoveMode) {
                var handledEvent = true;
                var delta_1 = getMoveDelta(ev);
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.keyCode) {
                    /* eslint-disable no-fallthrough */
                    case KeyCodes["a" /* KeyCodes */].escape:
                        setCoordinates(internalState.lastSetCoordinates);
                    case KeyCodes["a" /* KeyCodes */].enter: {
                        // TODO: determine if fallthrough was intentional
                        /* eslint-enable no-fallthrough */
                        internalState.lastSetCoordinates = ZERO;
                        // setIsInKeyboardMoveMode(false);
                        break;
                    }
                    case KeyCodes["a" /* KeyCodes */].up: {
                        setCoordinates(function (prevValue) { return ({ x: prevValue.x, y: getClampedAxis('y', prevValue.y - delta_1) }); });
                        break;
                    }
                    case KeyCodes["a" /* KeyCodes */].down: {
                        setCoordinates(function (prevValue) { return ({ x: prevValue.x, y: getClampedAxis('y', prevValue.y + delta_1) }); });
                        break;
                    }
                    case KeyCodes["a" /* KeyCodes */].left: {
                        setCoordinates(function (prevValue) { return ({ x: getClampedAxis('x', prevValue.x - delta_1), y: prevValue.y }); });
                        break;
                    }
                    case KeyCodes["a" /* KeyCodes */].right: {
                        setCoordinates(function (prevValue) { return ({ x: getClampedAxis('x', prevValue.x + delta_1), y: prevValue.y }); });
                        break;
                    }
                    default: {
                        handledEvent = false;
                    }
                }
                if (handledEvent) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        internalState.lastSetCoordinates = coordinates;
        setModalMenuClose();
        internalState.isInKeyboardMoveMode = true;
        internalState.events.on(win, 'keydown', handleKeyDown, true /* useCapture */);
        internalState.disposeOnKeyDown = function () {
            internalState.events.off(win, 'keydown', handleKeyDown, true /* useCapture */);
            internalState.disposeOnKeyDown = undefined;
        };
    };
    var handleExitKeyboardMoveMode = function (ev) {
        var _a, _b;
        (_a = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(focusTrapZoneProps, ev);
        internalState.lastSetCoordinates = ZERO;
        internalState.isInKeyboardMoveMode = false;
        (_b = internalState.disposeOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(internalState);
    };
    var registerForKeyUp = function () {
        var handleKeyUp = function (ev) {
            // Needs to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
            // eslint-disable-next-line deprecation/deprecation
            if (ev.altKey && ev.ctrlKey && ev.keyCode === KeyCodes["a" /* KeyCodes */].space) {
                if (Object(elementContains["a" /* elementContains */])(internalState.scrollableContent, ev.target)) {
                    toggleModalMenuOpen();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        if (!internalState.disposeOnKeyUp) {
            internalState.events.on(win, 'keyup', handleKeyUp, true /* useCapture */);
            internalState.disposeOnKeyUp = function () {
                internalState.events.off(win, 'keyup', handleKeyUp, true /* useCapture */);
                internalState.disposeOnKeyUp = undefined;
            };
        }
    };
    react["useEffect"](function () {
        clearTimeout(internalState.onModalCloseTimer);
        // Opening the dialog
        if (isOpen) {
            // This must be done after the modal content has rendered
            requestAnimationFrame(function () { return setTimeout(registerInitialModalPosition, 0); });
            setIsModalOpen(true);
            // Add a keyUp handler for all key up events once the dialog is open.
            if (dragOptions) {
                registerForKeyUp();
            }
            internalState.hasBeenOpened = true;
            setIsVisible(true);
        }
        // Closing the dialog
        if (!isOpen && isModalOpen) {
            internalState.onModalCloseTimer = setTimeout(handleModalClose, parseFloat(animationDuration) * 1000);
            setIsVisible(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if isModalOpen or isOpen mutates.
    }, [isModalOpen, isOpen]);
    Object(useUnmount["a" /* useUnmount */])(function () {
        internalState.events.dispose();
    });
    useComponentRef(props, focusTrapZone);
    useDebugWarnings(props);
    var modalContent = (react["createElement"](FocusTrapZone["a" /* FocusTrapZone */], Object(tslib_es6["a" /* __assign */])({}, focusTrapZoneProps, { id: focusTrapZoneId, ref: focusTrapZoneElm, componentRef: focusTrapZoneRef, className: Object(css["a" /* css */])(classNames.main, focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.className), elementToFocusOnDismiss: (_a = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.elementToFocusOnDismiss) !== null && _a !== void 0 ? _a : elementToFocusOnDismiss, isClickableOutsideFocusTrap: (_b = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.isClickableOutsideFocusTrap) !== null && _b !== void 0 ? _b : (isModeless || isClickableOutsideFocusTrap || !isBlocking), disableRestoreFocus: (_c = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.disableRestoreFocus) !== null && _c !== void 0 ? _c : disableRestoreFocus, forceFocusInsideTrap: ((_d = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.forceFocusInsideTrap) !== null && _d !== void 0 ? _d : forceFocusInsideTrap) && !isModeless, 
        // eslint-disable-next-line deprecation/deprecation
        firstFocusableSelector: (focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.firstFocusableSelector) || firstFocusableSelector, focusPreviouslyFocusedInnerElement: (_e = focusTrapZoneProps === null || focusTrapZoneProps === void 0 ? void 0 : focusTrapZoneProps.focusPreviouslyFocusedInnerElement) !== null && _e !== void 0 ? _e : true, onBlur: internalState.isInKeyboardMoveMode ? handleExitKeyboardMoveMode : undefined }),
        dragOptions && internalState.isInKeyboardMoveMode && (react["createElement"]("div", { className: classNames.keyboardMoveIconContainer }, dragOptions.keyboardMoveIconProps ? (react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({}, dragOptions.keyboardMoveIconProps))) : (react["createElement"](Icon["a" /* Icon */], { iconName: "move", className: classNames.keyboardMoveIcon })))),
        react["createElement"]("div", { ref: allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true },
            dragOptions && isModalMenuOpen && (react["createElement"](dragOptions.menu, { items: [
                    { key: 'move', text: dragOptions.moveMenuItemText, onClick: handleEnterKeyboardMoveMode },
                    { key: 'close', text: dragOptions.closeMenuItemText, onClick: handleModalClose },
                ], onDismiss: setModalMenuClose, alignTargetEdge: true, coverTarget: true, directionalHint: DirectionalHint["a" /* DirectionalHint */].topLeftEdge, directionalHintFixed: true, shouldFocusOnMount: true, target: internalState.scrollableContent })),
            children)));
    return ((isModalOpen && modalResponsiveMode >= (responsiveMode || withResponsiveMode["a" /* ResponsiveMode */].small) && (react["createElement"](Layer["a" /* Layer */], Object(tslib_es6["a" /* __assign */])({ ref: mergedRef }, mergedLayerProps),
        react["createElement"](Popup["a" /* Popup */], Object(tslib_es6["a" /* __assign */])({ role: isAlertRole ? 'alertdialog' : 'dialog', ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss, shouldRestoreFocus: !disableRestoreFocus, 
            // Modeless modals shouldn't hide siblings.
            // Popup will automatically handle this based on the aria-modal setting.
            enableAriaHiddenSiblings: enableAriaHiddenSiblings, "aria-modal": !isModeless }, popupProps),
            react["createElement"]("div", { className: classNames.root, role: !isModeless ? 'document' : undefined },
                !isModeless && (react["createElement"](Overlay["a" /* Overlay */], Object(tslib_es6["a" /* __assign */])({ "aria-hidden": true, isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss, allowTouchBodyScroll: allowTouchBodyScroll }, overlay))),
                dragOptions ? (react["createElement"](DraggableZone_DraggableZone, { handleSelector: dragOptions.dragHandleSelector || "#".concat(focusTrapZoneId), preventDragSelector: "button", onStart: handleDragStart, onDragChange: handleDrag, onStop: handleDragStop, position: coordinates }, modalContent)) : (modalContent)))))) ||
        null);
});
ModalBase.displayName = 'Modal';
function useDebugWarnings(props) {
    if (false) {}
}
//# sourceMappingURL=Modal.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Modal/Modal.js



var Modal = Object(styled["a" /* styled */])(ModalBase, getStyles, undefined, {
    scope: 'Modal',
    fields: ['theme', 'styles', 'enableAriaHiddenSiblings'],
});
Modal.displayName = 'Modal';
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "d4Kq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStyles; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02QY");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");


var noOutline = {
    outline: 0,
};
var iconStyle = function (fontSize) {
    return {
        fontSize: fontSize,
        margin: '0 4px',
        height: '16px',
        lineHeight: '16px',
        textAlign: 'center',
        flexShrink: 0,
    };
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__[/* memoizeFunction */ "b"])(function (theme) {
    var _a, _b;
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        outlineColor: 'ButtonText',
    };
    return {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { inset: 1, highContrastStyle: buttonHighContrastFocus, borderColor: 'transparent' }),
            theme.fonts.medium,
            {
                border: '1px solid ' + border,
                borderRadius: effects.roundedCorner2,
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: 'inline-block',
                padding: '0 16px',
                textDecoration: 'none',
                textAlign: 'center',
                userSelect: 'none',
                // IE11 workaround for preventing shift of child elements of a button when active.
                ':active > span': {
                    position: 'relative',
                    left: 0,
                    top: 0,
                },
            },
        ],
        rootDisabled: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { inset: 1, highContrastStyle: buttonHighContrastFocus, borderColor: 'transparent' }),
            {
                backgroundColor: disabledBackground,
                borderColor: disabledBackground,
                color: disabledText,
                cursor: 'default',
                ':hover': noOutline,
                ':focus': noOutline,
            },
        ],
        iconDisabled: (_a = {
                color: disabledText
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                color: 'GrayText',
            },
            _a),
        menuIconDisabled: (_b = {
                color: disabledText
            },
            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                color: 'GrayText',
            },
            _b),
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
        },
        description: {
            display: 'block',
        },
        textContainer: {
            flexGrow: 1,
            display: 'block',
        },
        icon: iconStyle(fonts.mediumPlus.fontSize),
        menuIcon: iconStyle(fonts.small.fontSize),
        label: {
            margin: '0 4px',
            lineHeight: '100%',
            display: 'block',
        },
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_1__[/* hiddenContentStyle */ "C"],
    };
});
//# sourceMappingURL=BaseButton.styles.js.map

/***/ }),

/***/ "dXTB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Callout; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/focus.js
var lib_focus = __webpack_require__("lE+F");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/elementContains.js
var elementContains = __webpack_require__("H5Ur");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/on.js
var on = __webpack_require__("km5L");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js
var object = __webpack_require__("FTLG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js
var lib_scroll = __webpack_require__("4H/l");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/positioning/positioning.types.js
var positioning_types = __webpack_require__("m0LP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Rectangle.js
var Rectangle = __webpack_require__("+FUN");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/positioning/positioning.js
var positioning_a;





function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto,
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (positioning_a = {},
    positioning_a[DirectionalHint["a" /* DirectionalHint */].topLeftEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].top, positioning_types["a" /* RectangleEdge */].left),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].topCenter] = _createPositionData(positioning_types["a" /* RectangleEdge */].top),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].topRightEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].top, positioning_types["a" /* RectangleEdge */].right),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].topAutoEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].top, undefined, true),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].bottom, positioning_types["a" /* RectangleEdge */].left),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].bottomCenter] = _createPositionData(positioning_types["a" /* RectangleEdge */].bottom),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].bottomRightEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].bottom, positioning_types["a" /* RectangleEdge */].right),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].bottom, undefined, true),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].leftTopEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].left, positioning_types["a" /* RectangleEdge */].top),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].leftCenter] = _createPositionData(positioning_types["a" /* RectangleEdge */].left),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].leftBottomEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].left, positioning_types["a" /* RectangleEdge */].bottom),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].rightTopEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].right, positioning_types["a" /* RectangleEdge */].top),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].rightCenter] = _createPositionData(positioning_types["a" /* RectangleEdge */].right),
    positioning_a[DirectionalHint["a" /* DirectionalHint */].rightBottomEdge] = _createPositionData(positioning_types["a" /* RectangleEdge */].right, positioning_types["a" /* RectangleEdge */].bottom),
    positioning_a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = [];
    if (rect.top < boundingRect.top) {
        outOfBounds.push(positioning_types["a" /* RectangleEdge */].top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(positioning_types["a" /* RectangleEdge */].bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(positioning_types["a" /* RectangleEdge */].left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(positioning_types["a" /* RectangleEdge */].right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[positioning_types["a" /* RectangleEdge */][edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[positioning_types["a" /* RectangleEdge */][edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reserved in certain cases for the
 * "negative" edges.
 *
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2:
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 * if maintainSize is set to false, it will only adjust the specified edge value
 */
function _moveEdge(rect, edge, newValue, maintainSize) {
    if (maintainSize === void 0) { maintainSize = true; }
    var difference = _getEdgeValue(rect, edge) - newValue;
    var returnRect = _setEdgeValue(rect, edge, newValue);
    if (maintainSize) {
        returnRect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    }
    return returnRect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Returns a measure of how much a rectangle is out of bounds for a given alignment;
 * this can be used to compare which rectangle is more or less out of bounds.
 * A value of 0 means the rectangle is entirely in bounds
 */
function _getOutOfBoundsDegree(rect, bounds) {
    var breakingEdges = _getOutOfBoundsEdges(rect, bounds);
    var total = 0;
    for (var _i = 0, breakingEdges_1 = breakingEdges; _i < breakingEdges_1.length; _i++) {
        var edge = breakingEdges_1[_i];
        total += Math.pow(_getRelativeEdgeDifference(rect, bounds, edge), 2);
    }
    return total;
}
/**
 * Returns true if scroll-resizing will move the target edge within the bounding rectangle,
 * and there is room between the target edge and the bounding edge for scrolled content.
 * Returns false otherwise.
 */
function _canScrollResizeToFitEdge(target, bounding, targetEdge, minimumScrollResizeHeight) {
    if (minimumScrollResizeHeight === void 0) { minimumScrollResizeHeight = 200; }
    // Only scroll vertically to fit - cannot scroll to fit right or left edges
    if (targetEdge !== positioning_types["a" /* RectangleEdge */].bottom && targetEdge !== positioning_types["a" /* RectangleEdge */].top) {
        return false;
    }
    return _getRelativeEdgeDifference(target, bounding, targetEdge) >= minimumScrollResizeHeight;
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the least bad option should be returned.
 */
function _flipToFit(rect, target, bounding, positionData, shouldScroll, minimumScrollResizeHeight, gap) {
    if (shouldScroll === void 0) { shouldScroll = false; }
    if (gap === void 0) { gap = 0; }
    var directions = [
        positioning_types["a" /* RectangleEdge */].left,
        positioning_types["a" /* RectangleEdge */].right,
        positioning_types["a" /* RectangleEdge */].bottom,
        positioning_types["a" /* RectangleEdge */].top,
    ];
    // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, so the order should be updated.
    if (Object(rtl["a" /* getRTL */])()) {
        directions[0] *= -1;
        directions[1] *= -1;
    }
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // keep track of least bad option, in case no sides fit
    var oobDegree;
    var bestEdge = currentEdge;
    var bestAlignment = currentAlignment;
    // Keep switching sides until one is found with enough space.
    // If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            // Edge is in bounds, return current estimate
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment,
            };
        }
        else if (shouldScroll && _canScrollResizeToFitEdge(target, bounding, currentEdge, minimumScrollResizeHeight)) {
            // Scrolling will allow edge to fit, move the estimate currentEdge inside the bounds and return
            switch (currentEdge) {
                case positioning_types["a" /* RectangleEdge */].bottom:
                    currentEstimate.bottom = bounding.bottom;
                    break;
                case positioning_types["a" /* RectangleEdge */].top:
                    currentEstimate.top = bounding.top;
                    break;
            }
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment,
                forcedInBounds: true,
            };
        }
        else {
            // update least-bad edges
            var currentOOBDegree = _getOutOfBoundsDegree(currentEstimate, bounding);
            if (!oobDegree || currentOOBDegree < oobDegree) {
                oobDegree = currentOOBDegree;
                bestEdge = currentEdge;
                bestAlignment = currentAlignment;
            }
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.length > 0) {
                if (directions.indexOf(currentEdge * -1) > -1) {
                    currentEdge = currentEdge * -1;
                }
                else {
                    currentAlignment = currentEdge;
                    currentEdge = directions.slice(-1)[0];
                }
                currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
            }
        }
    }
    // nothing fits, use least-bad option
    currentEstimate = _estimatePosition(rect, target, { targetEdge: bestEdge, alignmentEdge: bestAlignment }, gap);
    return {
        elementRectangle: currentEstimate,
        targetEdge: bestEdge,
        alignmentEdge: bestAlignment,
    };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges
 * into position, when `alignTargetEdge` is specified.
 */
function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
    var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
    var oppositeEdge = alignmentEdge * -1;
    var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
    return {
        elementRectangle: newEstimate,
        targetEdge: targetEdge,
        alignmentEdge: oppositeEdge,
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, shouldScroll, minimumScrollResizeHeight, gap, directionalHintFixed, coverTarget) {
    if (shouldScroll === void 0) { shouldScroll = false; }
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge,
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, shouldScroll, minimumScrollResizeHeight, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(elementEstimate.elementRectangle, bounding);
    // if directionalHintFixed is specified, we need to force the target edge to not change
    // we need *-1 because targetEdge refers to the target's edge; the callout edge is the opposite
    var fixedEdge = directionalHintFixed ? -elementEstimate.targetEdge : undefined;
    if (outOfBounds.length > 0) {
        if (alignTargetEdge) {
            // The edge opposite to the alignment edge might be out of bounds.
            // Flip alignment to see if we can get it within bounds.
            if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
                var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
                if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                    return flippedElementEstimate;
                }
                else {
                    // If the flipped elements edges are still out of bounds, try nudging it.
                    elementEstimate = _alignOutOfBoundsEdges(_getOutOfBoundsEdges(flippedElementEstimate.elementRectangle, bounding), elementEstimate, bounding, fixedEdge);
                }
            }
            else {
                elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding, fixedEdge);
            }
        }
        else {
            elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding, fixedEdge);
        }
    }
    return elementEstimate;
}
/**
 * Iterates through a list of out of bounds edges and tries to nudge and align them.
 * @param outOfBoundsEdges - Array of edges that are out of bounds
 * @param elementEstimate - The current element positioning estimate
 * @param bounding - The current bounds
 * @param preserveEdge - Specify an edge that should not be modified
 */
function _alignOutOfBoundsEdges(outOfBoundsEdges, elementEstimate, bounding, preserveEdge) {
    for (var _i = 0, outOfBoundsEdges_1 = outOfBoundsEdges; _i < outOfBoundsEdges_1.length; _i++) {
        var direction = outOfBoundsEdges_1[_i];
        var edgeAttempt = void 0;
        // if preserveEdge is specified, do not call _alignEdges, skip directly to _moveEdge
        // this is because _alignEdges will move the opposite edge
        if (preserveEdge && preserveEdge === direction * -1) {
            edgeAttempt = _moveEdge(elementEstimate.elementRectangle, direction, _getEdgeValue(bounding, direction), false);
            elementEstimate.forcedInBounds = true;
        }
        else {
            edgeAttempt = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
            var inBounds = _isEdgeInBounds(edgeAttempt, bounding, direction * -1);
            // only update estimate if the attempt didn't break out of the opposite bounding edge
            if (!inBounds) {
                edgeAttempt = _moveEdge(edgeAttempt, direction * -1, _getEdgeValue(bounding, direction * -1), false);
                elementEstimate.forcedInBounds = true;
            }
        }
        elementEstimate.elementRectangle = edgeAttempt;
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition = new Rectangle["a" /* Rectangle */](elementToPosition.left, elementToPosition.right, elementToPosition.top, elementToPosition.bottom);
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(estimatedElementPosition, target, targetEdge, gap)
        : _alignOppositeEdges(estimatedElementPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 */
function _getFlankingEdges(edge) {
    if (edge === positioning_types["a" /* RectangleEdge */].top || edge === positioning_types["a" /* RectangleEdge */].bottom) {
        return {
            positiveEdge: positioning_types["a" /* RectangleEdge */].left,
            negativeEdge: positioning_types["a" /* RectangleEdge */].right,
        };
    }
    else {
        return {
            positiveEdge: positioning_types["a" /* RectangleEdge */].top,
            negativeEdge: positioning_types["a" /* RectangleEdge */].bottom,
        };
    }
}
/**
 * Retrieve the final value for the return edge of `elementRectangle`. If the `elementRectangle` is closer to one side
 * of the bounds versus the other, the return edge is flipped to grow inward.
 */
function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
    if (bounds &&
        Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
        return returnEdge * -1;
    }
    return returnEdge;
}
/**
 * Whether or not the considered edge of the elementRectangle is lying on the edge of the bounds
 * @param elementRectangle The rectangle whose edge we are considering
 * @param bounds The rectangle marking the bounds
 * @param edge The target edge we're considering
 * @returns If the target edge of the elementRectangle is in the same location as that edge of the bounds
 */
function _isEdgeOnBounds(elementRectangle, edge, bounds) {
    return bounds !== undefined && _getEdgeValue(elementRectangle, edge) === _getEdgeValue(bounds, edge);
}
/**
 * Finalizes the element position based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the Callout shrinks it shrinks towards that corner.
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge, forceWithinBounds) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    // If we are finalizing the return edge, choose the edge such that we grow away from the bounds
    // If we are not finalizing the return edge but the opposite edge is flush against the bounds,
    // choose that as the anchor edge so the element rect can grow away from the bounds' edge
    // In this case there will not be a visual difference because there is no more room for the elementRectangle to grow
    // in the usual direction
    if (!doNotFinalizeReturnEdge || _isEdgeOnBounds(elementRectangle, getOppositeEdge(returnEdge), bounds)) {
        returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
    }
    returnValue[positioning_types["a" /* RectangleEdge */][elementEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[positioning_types["a" /* RectangleEdge */][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    // if the positioned element will still overflow, return all four edges with in-bounds values
    if (forceWithinBounds) {
        returnValue[positioning_types["a" /* RectangleEdge */][elementEdge * -1]] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge * -1);
        returnValue[positioning_types["a" /* RectangleEdge */][returnEdge * -1]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge * -1);
    }
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
 * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
 *
 * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge,
        };
    }
    var positionInformation = Object(tslib_es6["a" /* __assign */])({}, DirectionalDictionary[directionalHint]);
    if (Object(rtl["a" /* getRTL */])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Gets the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    positionData.alignTargetEdge = alignTargetEdge;
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, shouldScroll, minimumScrollResizeHeight, directionalHintFixed, coverTarget) {
    if (shouldScroll === void 0) { shouldScroll = false; }
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge,
        };
    }
    else {
        return _adjustFitWithinBounds(estimatedElementPosition, target, bounding, positionData, shouldScroll, minimumScrollResizeHeight, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new Rectangle["a" /* Rectangle */](0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnValue = {};
    var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);
    // only show the beak if the callout is not fully covering the target
    var beakEdgeDifference = _getRelativeEdgeDifference(elementPosition.elementRectangle, elementPosition.targetRectangle, targetEdge);
    var showBeak = beakEdgeDifference > Math.abs(_getEdgeValue(positionedBeak, targetEdge));
    returnValue[positioning_types["a" /* RectangleEdge */][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[positioning_types["a" /* RectangleEdge */][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: Object(tslib_es6["a" /* __assign */])({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge,
        hideBeak: !showBeak,
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /**
     * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
     * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
     * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
     * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
     */
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new Rectangle["a" /* Rectangle */](beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPosition = new Rectangle["a" /* Rectangle */](0, beakWidth, 0, beakWidth);
    beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
    }
    return beakPosition;
}
function _getRectangleFromElement(element) {
    // eslint-disable-next-line deprecation/deprecation
    var clientRect = element.getBoundingClientRect();
    return new Rectangle["a" /* Rectangle */](clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new Rectangle["a" /* Rectangle */](rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!target.preventDefault) {
            var ev = target;
            targetRectangle = new Rectangle["a" /* Rectangle */](ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            // eslint-disable-next-line no-extra-boolean-cast
        }
        else if (!!target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var rectOrPoint = target;
            // eslint-disable-next-line deprecation/deprecation
            var left = rectOrPoint.left || rectOrPoint.x;
            // eslint-disable-next-line deprecation/deprecation
            var top_1 = rectOrPoint.top || rectOrPoint.y;
            var right = rectOrPoint.right || left;
            var bottom = rectOrPoint.bottom || top_1;
            targetRectangle = new Rectangle["a" /* Rectangle */](left, right, top_1, bottom);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
                var direction = outOfBounds_1[_i];
                targetRectangle[positioning_types["a" /* RectangleEdge */][direction]] = bounds[positioning_types["a" /* RectangleEdge */][direction]];
            }
        }
    }
    else {
        targetRectangle = new Rectangle["a" /* Rectangle */](0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === positioning_types["a" /* RectangleEdge */].top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === positioning_types["a" /* RectangleEdge */].bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions, shouldScroll, minimumScrollResizeHeight) {
    if (shouldScroll === void 0) { shouldScroll = false; }
    var gap = props.gapSpace ? props.gapSpace : 0;
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, shouldScroll, minimumScrollResizeHeight, props.directionalHintFixed, props.coverTarget);
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, positionedElement), { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge, positionedElement.forcedInBounds);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge,
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions, win) {
    var theWin = win !== null && win !== void 0 ? win : Object(getWindow["a" /* getWindow */])();
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle["a" /* Rectangle */](0, theWin.innerWidth - Object(lib_scroll["f" /* getScrollbarWidth */])(), 0, theWin.innerHeight);
    var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}
function _calculateGapSpace(isBeakVisible, beakWidth, gapSpace) {
    if (beakWidth === void 0) { beakWidth = 0; }
    if (gapSpace === void 0) { gapSpace = 0; }
    return _calculateActualBeakWidthInPixels(isBeakVisible ? beakWidth : 0) / 2 + gapSpace;
}
function _positionCallout(props, hostElement, callout, previousPositions, shouldScroll, minimumScrollResizeHeight, doNotFinalizeReturnEdge, win) {
    if (shouldScroll === void 0) { shouldScroll = false; }
    var theWin = win !== null && win !== void 0 ? win : Object(getWindow["a" /* getWindow */])();
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateGapSpace(props.isBeakVisible, props.beakWidth, props.gapSpace);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle["a" /* Rectangle */](0, theWin.innerWidth - Object(lib_scroll["f" /* getScrollbarWidth */])(), 0, theWin.innerHeight);
    var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions, shouldScroll, minimumScrollResizeHeight);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge)), { beakPosition: finalizedBeakPosition });
}
function _positionCard(props, hostElement, callout, previousPositions, win) {
    var theWin = win !== null && win !== void 0 ? win : Object(getWindow["a" /* getWindow */])();
    return _positionCallout(props, hostElement, callout, previousPositions, false, undefined, true, theWin);
}
function _getRectangleFromTarget(target) {
    var _a, _b, _c, _d;
    var mouseTarget = target;
    var elementTarget = target;
    var rectOrPointTarget = target;
    var targetRect;
    // eslint-disable-next-line deprecation/deprecation
    var left = (_a = rectOrPointTarget.left) !== null && _a !== void 0 ? _a : rectOrPointTarget.x;
    // eslint-disable-next-line deprecation/deprecation
    var top = (_b = rectOrPointTarget.top) !== null && _b !== void 0 ? _b : rectOrPointTarget.y;
    var right = (_c = rectOrPointTarget.right) !== null && _c !== void 0 ? _c : left;
    var bottom = (_d = rectOrPointTarget.bottom) !== null && _d !== void 0 ? _d : top;
    // eslint-disable-next-line no-extra-boolean-cast -- may not actually be a MouseEvent
    if (!!mouseTarget.stopPropagation) {
        targetRect = new Rectangle["a" /* Rectangle */](mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (left !== undefined && top !== undefined) {
        targetRect = new Rectangle["a" /* Rectangle */](left, right, top, bottom);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return targetRect;
}
// END PRIVATE FUNCTIONS
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _finalizeBeakPosition: _finalizeBeakPosition,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle,
};
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
 * repositions based on its previous targets rather than starting with directionalhint.
 */
function positionElement(props, hostElement, elementToPosition, previousPositions, win) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions, win);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions, shouldScroll, minimumScrollResizeHeight, win) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions, shouldScroll, minimumScrollResizeHeight, undefined, win);
}
function positionCard(props, hostElement, elementToPosition, previousPositions, win) {
    return _positionCard(props, hostElement, elementToPosition, previousPositions, win);
}
/**
 * Gets the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget, win) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var theWin = win !== null && win !== void 0 ? win : Object(getWindow["a" /* getWindow */])();
    var targetRect = _getRectangleFromTarget(target);
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new Rectangle["a" /* Rectangle */](0, theWin.innerWidth - Object(lib_scroll["f" /* getScrollbarWidth */])(), 0, theWin.innerHeight);
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
function _getBoundsFromTargetWindow(target, targetWindow) {
    var segments = undefined;
    if (targetWindow.getWindowSegments) {
        segments = targetWindow.getWindowSegments();
    }
    // Identify if we're dealing with single screen scenarios.
    if (segments === undefined || segments.length <= 1) {
        return {
            top: 0,
            left: 0,
            right: targetWindow.innerWidth,
            bottom: targetWindow.innerHeight,
            width: targetWindow.innerWidth,
            height: targetWindow.innerHeight,
        };
    }
    // Logic for determining dual screen scenarios.
    var x = 0;
    var y = 0;
    // If the target is an Element get coordinates for its center.
    if (target !== null && !!target.getBoundingClientRect) {
        var clientRect = target.getBoundingClientRect();
        x = (clientRect.left + clientRect.right) / 2;
        y = (clientRect.top + clientRect.bottom) / 2;
    }
    // If the target is not null get x-axis and y-axis coordinates directly.
    else if (target !== null) {
        // eslint-disable-next-line deprecation/deprecation
        x = target.left || target.x;
        // eslint-disable-next-line deprecation/deprecation
        y = target.top || target.y;
    }
    var bounds = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
    // Define which window segment are the coordinates in and calculate bounds based on that.
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var segment = segments_1[_i];
        if (x && segment.left <= x && segment.right >= x && y && segment.top <= y && segment.bottom >= y) {
            bounds = {
                top: segment.top,
                left: segment.left,
                right: segment.right,
                bottom: segment.bottom,
                width: segment.width,
                height: segment.height,
            };
        }
    }
    return bounds;
}
function getBoundsFromTargetWindow(target, targetWindow) {
    return _getBoundsFromTargetWindow(target, targetWindow);
}
function calculateGapSpace(isBeakVisible, beakWidth, gapSpace) {
    return _calculateGapSpace(isBeakVisible, beakWidth, gapSpace);
}
function getRectangleFromTarget(target) {
    return _getRectangleFromTarget(target);
}
//# sourceMappingURL=positioning.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Popup/Popup.js
var Popup = __webpack_require__("glTW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useAsync.js
var useAsync = __webpack_require__("Eo9X");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useOnEvent.js
var useOnEvent = __webpack_require__("nTLZ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useConst.js
var useConst = __webpack_require__("mFKB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useTarget.js
var useTarget = __webpack_require__("MMVL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/CalloutContent.base.js
var CalloutContent_base_a;











var COMPONENT_NAME = 'CalloutContentBase';
var ANIMATIONS = (CalloutContent_base_a = {},
    CalloutContent_base_a[positioning_types["a" /* RectangleEdge */].top] = lib["a" /* AnimationClassNames */].slideUpIn10,
    CalloutContent_base_a[positioning_types["a" /* RectangleEdge */].bottom] = lib["a" /* AnimationClassNames */].slideDownIn10,
    CalloutContent_base_a[positioning_types["a" /* RectangleEdge */].left] = lib["a" /* AnimationClassNames */].slideLeftIn10,
    CalloutContent_base_a[positioning_types["a" /* RectangleEdge */].right] = lib["a" /* AnimationClassNames */].slideRightIn10,
    CalloutContent_base_a);
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
// Also set pointer-events: none so that the callout will not occlude the element it is
// going to be positioned against
var OFF_SCREEN_STYLE = {
    opacity: 0,
    filter: 'opacity(0)',
    pointerEvents: 'none',
};
// role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
// This constant array can be used to filter these out of native props spread on callout root and apply them together on
// calloutMain (the Popup component within the callout)
var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];
var DEFAULT_PROPS = {
    preventDismissOnLostFocus: false,
    preventDismissOnScroll: false,
    preventDismissOnResize: false,
    isBeakVisible: true,
    beakWidth: 16,
    gapSpace: 0,
    minPagePadding: 8,
    directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomAutoEdge,
};
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])({
    disableCaching: true, // disabling caching because stylesProp.position mutates often
});
/**
 * (Hook) to return a function to lazily fetch the bounds of the target element for the callout.
 */
function useBounds(_a, targetRef, targetWindow) {
    var bounds = _a.bounds, _b = _a.minPagePadding, minPagePadding = _b === void 0 ? DEFAULT_PROPS.minPagePadding : _b, target = _a.target;
    var _c = react["useState"](false), targetWindowResized = _c[0], setTargetWindowResized = _c[1];
    var cachedBounds = react["useRef"]();
    var getBounds = react["useCallback"](function () {
        if (!cachedBounds.current || targetWindowResized) {
            var currentBounds = typeof bounds === 'function' ? (targetWindow ? bounds(target, targetWindow) : undefined) : bounds;
            if (!currentBounds && targetWindow) {
                currentBounds = getBoundsFromTargetWindow(targetRef.current, targetWindow);
                currentBounds = {
                    top: currentBounds.top + minPagePadding,
                    left: currentBounds.left + minPagePadding,
                    right: currentBounds.right - minPagePadding,
                    bottom: currentBounds.bottom - minPagePadding,
                    width: currentBounds.width - minPagePadding * 2,
                    height: currentBounds.height - minPagePadding * 2,
                };
            }
            cachedBounds.current = currentBounds;
            targetWindowResized && setTargetWindowResized(false);
        }
        return cachedBounds.current;
    }, [bounds, minPagePadding, target, targetRef, targetWindow, targetWindowResized]);
    var async = Object(useAsync["a" /* useAsync */])();
    Object(useOnEvent["a" /* useOnEvent */])(targetWindow, 'resize', async.debounce(function () {
        setTargetWindowResized(true);
    }, 500, { leading: true }));
    return getBounds;
}
/**
 * (Hook) to return the maximum available height for the Callout to render into.
 */
function useMaxHeight(_a, getBounds, targetRef, positions) {
    var _b;
    var calloutMaxHeight = _a.calloutMaxHeight, finalHeight = _a.finalHeight, directionalHint = _a.directionalHint, directionalHintFixed = _a.directionalHintFixed, hidden = _a.hidden, gapSpace = _a.gapSpace, beakWidth = _a.beakWidth, isBeakVisible = _a.isBeakVisible, coverTarget = _a.coverTarget;
    var _c = react["useState"](), maxHeight = _c[0], setMaxHeight = _c[1];
    var _d = (_b = positions === null || positions === void 0 ? void 0 : positions.elementPosition) !== null && _b !== void 0 ? _b : {}, top = _d.top, bottom = _d.bottom;
    var targetRect = (targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) ? getRectangleFromTarget(targetRef.current) : undefined;
    react["useEffect"](function () {
        var _a;
        var bounds = (_a = getBounds()) !== null && _a !== void 0 ? _a : {};
        var topBounds = bounds.top;
        var bottomBounds = bounds.bottom;
        var calculatedHeight;
        // If aligned to top edge of target and not covering target, update bottom bounds to the
        // top of the target (accounting for gap space and beak)
        if ((positions === null || positions === void 0 ? void 0 : positions.targetEdge) === positioning_types["a" /* RectangleEdge */].top && (targetRect === null || targetRect === void 0 ? void 0 : targetRect.top) && !coverTarget) {
            bottomBounds = targetRect.top - calculateGapSpace(isBeakVisible, beakWidth, gapSpace);
        }
        if (typeof top === 'number' && bottomBounds) {
            calculatedHeight = bottomBounds - top;
        }
        else if (typeof bottom === 'number' && typeof topBounds === 'number' && bottomBounds) {
            calculatedHeight = bottomBounds - topBounds - bottom;
        }
        if ((!calloutMaxHeight && !hidden) ||
            (calloutMaxHeight && calculatedHeight && calloutMaxHeight > calculatedHeight)) {
            setMaxHeight(calculatedHeight);
        }
        else if (calloutMaxHeight) {
            setMaxHeight(calloutMaxHeight);
        }
        else {
            setMaxHeight(undefined);
        }
    }, [
        bottom,
        calloutMaxHeight,
        finalHeight,
        directionalHint,
        directionalHintFixed,
        getBounds,
        hidden,
        positions,
        top,
        gapSpace,
        beakWidth,
        isBeakVisible,
        targetRect,
        coverTarget,
    ]);
    return maxHeight;
}
/**
 * (Hook) to find the current position of Callout. If Callout is resized then a new position is calculated.
 */
function usePositions(props, hostElement, calloutElement, targetRef, getBounds, popupRef) {
    var _a = react["useState"](), positions = _a[0], setPositions = _a[1];
    var positionAttempts = react["useRef"](0);
    var previousTarget = react["useRef"]();
    var async = Object(useAsync["a" /* useAsync */])();
    var hidden = props.hidden, target = props.target, finalHeight = props.finalHeight, calloutMaxHeight = props.calloutMaxHeight, onPositioned = props.onPositioned, directionalHint = props.directionalHint, hideOverflow = props.hideOverflow, preferScrollResizePositioning = props.preferScrollResizePositioning;
    var win = Object(dom["d" /* useWindowEx */])();
    var localRef = react["useRef"]();
    var popupStyles;
    if (localRef.current !== popupRef.current) {
        localRef.current = popupRef.current;
        popupStyles = popupRef.current ? win === null || win === void 0 ? void 0 : win.getComputedStyle(popupRef.current) : undefined;
    }
    var popupOverflowY = popupStyles === null || popupStyles === void 0 ? void 0 : popupStyles.overflowY;
    react["useEffect"](function () {
        if (!hidden) {
            var timerId_1 = async.requestAnimationFrame(function () {
                var _a, _b;
                if (hostElement.current && calloutElement) {
                    var currentProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { target: targetRef.current, bounds: getBounds() });
                    // duplicate calloutElement & remove useMaxHeight's maxHeight for position calc
                    var dupeCalloutElement = calloutElement.cloneNode(true);
                    dupeCalloutElement.style.maxHeight = calloutMaxHeight ? "".concat(calloutMaxHeight) : '';
                    dupeCalloutElement.style.visibility = 'hidden';
                    (_a = calloutElement.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(dupeCalloutElement);
                    var previousPositions = previousTarget.current === target ? positions : undefined;
                    // only account for scroll resizing if styles allow callout to scroll
                    // (popup styles determine if callout will scroll)
                    var isOverflowYHidden = hideOverflow || popupOverflowY === 'clip' || popupOverflowY === 'hidden';
                    var shouldScroll = preferScrollResizePositioning && !isOverflowYHidden;
                    // If there is a finalHeight given then we assume that the user knows and will handle
                    // additional positioning adjustments so we should call positionCard
                    var newPositions = finalHeight
                        ? positionCard(currentProps, hostElement.current, dupeCalloutElement, previousPositions, win)
                        : positionCallout(currentProps, hostElement.current, dupeCalloutElement, previousPositions, shouldScroll, undefined, win);
                    // clean up duplicate calloutElement
                    (_b = calloutElement.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(dupeCalloutElement);
                    // Set the new position only when the positions do not exist or one of the new callout positions
                    // is different. The position should not change if the position is within 2 decimal places.
                    if ((!positions && newPositions) ||
                        (positions && newPositions && !arePositionsEqual(positions, newPositions) && positionAttempts.current < 5)) {
                        // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                        // and we should stop trying to reposition to prevent a stack overflow.
                        positionAttempts.current++;
                        setPositions(newPositions);
                    }
                    else if (positionAttempts.current > 0) {
                        // Only call the onPositioned callback if the callout has been re-positioned at least once.
                        positionAttempts.current = 0;
                        onPositioned === null || onPositioned === void 0 ? void 0 : onPositioned(positions);
                    }
                }
            }, calloutElement);
            previousTarget.current = target;
            return function () {
                async.cancelAnimationFrame(timerId_1);
                previousTarget.current = undefined;
            };
        }
        else {
            // When the callout is hidden, clear position state so that it is not accidentally used next render.
            setPositions(undefined);
            positionAttempts.current = 0;
        }
    }, [
        hidden,
        directionalHint,
        async,
        calloutElement,
        calloutMaxHeight,
        hostElement,
        targetRef,
        finalHeight,
        getBounds,
        onPositioned,
        positions,
        props,
        target,
        hideOverflow,
        preferScrollResizePositioning,
        popupOverflowY,
        win,
    ]);
    return positions;
}
/**
 * (Hook) to set up behavior to automatically focus the callout when it appears, if indicated by props.
 */
function useAutoFocus(_a, positions, calloutElement) {
    var hidden = _a.hidden, setInitialFocus = _a.setInitialFocus;
    var async = Object(useAsync["a" /* useAsync */])();
    var hasPositions = !!positions;
    react["useEffect"](function () {
        if (!hidden && setInitialFocus && hasPositions && calloutElement) {
            var timerId_2 = async.requestAnimationFrame(function () { return Object(lib_focus["c" /* focusFirstChild */])(calloutElement); }, calloutElement);
            return function () { return async.cancelAnimationFrame(timerId_2); };
        }
    }, [hidden, hasPositions, async, calloutElement, setInitialFocus]);
}
/**
 * (Hook) to set up various handlers to dismiss the popup when it loses focus or the window scrolls or similar cases.
 */
function useDismissHandlers(_a, positions, hostElement, targetRef, targetWindow) {
    var hidden = _a.hidden, onDismiss = _a.onDismiss, 
    // eslint-disable-next-line deprecation/deprecation
    preventDismissOnScroll = _a.preventDismissOnScroll, 
    // eslint-disable-next-line deprecation/deprecation
    preventDismissOnResize = _a.preventDismissOnResize, 
    // eslint-disable-next-line deprecation/deprecation
    preventDismissOnLostFocus = _a.preventDismissOnLostFocus, dismissOnTargetClick = _a.dismissOnTargetClick, shouldDismissOnWindowFocus = _a.shouldDismissOnWindowFocus, preventDismissOnEvent = _a.preventDismissOnEvent;
    var isMouseDownOnPopup = react["useRef"](false);
    var async = Object(useAsync["a" /* useAsync */])();
    var mouseDownHandlers = Object(useConst["a" /* useConst */])([
        function () {
            isMouseDownOnPopup.current = true;
        },
        function () {
            isMouseDownOnPopup.current = false;
        },
    ]);
    var positionsExists = !!positions;
    react["useEffect"](function () {
        var dismissOnScroll = function (ev) {
            if (positionsExists && !preventDismissOnScroll) {
                dismissOnClickOrScroll(ev);
            }
        };
        var dismissOnResize = function (ev) {
            if (!preventDismissOnResize && !(preventDismissOnEvent && preventDismissOnEvent(ev))) {
                onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss(ev);
            }
        };
        var dismissOnLostFocus = function (ev) {
            if (!preventDismissOnLostFocus) {
                dismissOnClickOrScroll(ev);
            }
        };
        var dismissOnClickOrScroll = function (ev) {
            var eventPaths = ev.composedPath ? ev.composedPath() : [];
            var target = eventPaths.length > 0 ? eventPaths[0] : ev.target;
            var isEventTargetOutsideCallout = hostElement.current && !Object(elementContains["a" /* elementContains */])(hostElement.current, target);
            // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.
            if (isEventTargetOutsideCallout && isMouseDownOnPopup.current) {
                isMouseDownOnPopup.current = false;
                return;
            }
            if ((!targetRef.current && isEventTargetOutsideCallout) ||
                (ev.target !== targetWindow &&
                    isEventTargetOutsideCallout &&
                    (!targetRef.current ||
                        'stopPropagation' in targetRef.current ||
                        dismissOnTargetClick ||
                        (target !== targetRef.current && !Object(elementContains["a" /* elementContains */])(targetRef.current, target))))) {
                if (preventDismissOnEvent && preventDismissOnEvent(ev)) {
                    return;
                }
                onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss(ev);
            }
        };
        var dismissOnTargetWindowBlur = function (ev) {
            // Do nothing
            if (!shouldDismissOnWindowFocus) {
                return;
            }
            if (((preventDismissOnEvent && !preventDismissOnEvent(ev)) ||
                (!preventDismissOnEvent && !preventDismissOnLostFocus)) &&
                !(targetWindow === null || targetWindow === void 0 ? void 0 : targetWindow.document.hasFocus()) &&
                ev.relatedTarget === null) {
                onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss(ev);
            }
        };
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        var disposablesPromise = new Promise(function (resolve) {
            async.setTimeout(function () {
                if (!hidden && targetWindow) {
                    var disposables_1 = [
                        Object(on["a" /* on */])(targetWindow, 'scroll', dismissOnScroll, true),
                        Object(on["a" /* on */])(targetWindow, 'resize', dismissOnResize, true),
                        Object(on["a" /* on */])(targetWindow.document.documentElement, 'focus', dismissOnLostFocus, true),
                        Object(on["a" /* on */])(targetWindow.document.documentElement, 'click', dismissOnLostFocus, true),
                        Object(on["a" /* on */])(targetWindow, 'blur', dismissOnTargetWindowBlur, true),
                    ];
                    resolve(function () {
                        disposables_1.forEach(function (dispose) { return dispose(); });
                    });
                }
            }, 0);
        });
        return function () {
            disposablesPromise.then(function (dispose) { return dispose(); });
        };
    }, [
        hidden,
        async,
        hostElement,
        targetRef,
        targetWindow,
        onDismiss,
        shouldDismissOnWindowFocus,
        dismissOnTargetClick,
        preventDismissOnLostFocus,
        preventDismissOnResize,
        preventDismissOnScroll,
        positionsExists,
        preventDismissOnEvent,
    ]);
    return mouseDownHandlers;
}
var CalloutContentBase = react["memo"](react["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults);
    var styles = props.styles, style = props.style, ariaLabel = props.ariaLabel, ariaDescribedBy = props.ariaDescribedBy, ariaLabelledBy = props.ariaLabelledBy, className = props.className, isBeakVisible = props.isBeakVisible, children = props.children, beakWidth = props.beakWidth, calloutWidth = props.calloutWidth, calloutMaxWidth = props.calloutMaxWidth, calloutMinWidth = props.calloutMinWidth, doNotLayer = props.doNotLayer, finalHeight = props.finalHeight, _a = props.hideOverflow, hideOverflow = _a === void 0 ? !!finalHeight : _a, backgroundColor = props.backgroundColor, calloutMaxHeight = props.calloutMaxHeight, onScroll = props.onScroll, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.shouldRestoreFocus, 
    // eslint-disable-next-line deprecation/deprecation
    shouldRestoreFocus = _b === void 0 ? true : _b, target = props.target, hidden = props.hidden, onLayerMounted = props.onLayerMounted, popupProps = props.popupProps;
    var hostElement = react["useRef"](null);
    var popupRef = react["useRef"](null);
    var mergedPopupRefs = Object(useMergedRefs["a" /* useMergedRefs */])(popupRef, popupProps === null || popupProps === void 0 ? void 0 : popupProps.ref);
    var _c = react["useState"](null), calloutElement = _c[0], setCalloutElement = _c[1];
    var calloutCallback = react["useCallback"](function (calloutEl) {
        setCalloutElement(calloutEl);
    }, []);
    var rootRef = Object(useMergedRefs["a" /* useMergedRefs */])(hostElement, forwardedRef);
    var _d = Object(useTarget["a" /* useTarget */])(props.target, {
        current: calloutElement,
    }), targetRef = _d[0], targetWindow = _d[1];
    var getBounds = useBounds(props, targetRef, targetWindow);
    var positions = usePositions(props, hostElement, calloutElement, targetRef, getBounds, mergedPopupRefs);
    var maxHeight = useMaxHeight(props, getBounds, targetRef, positions);
    var _e = useDismissHandlers(props, positions, hostElement, targetRef, targetWindow), mouseDownOnPopup = _e[0], mouseUpOnPopup = _e[1];
    // do not set both top and bottom css props from positions
    // instead, use maxHeight
    var isForcedInBounds = (positions === null || positions === void 0 ? void 0 : positions.elementPosition.top) && (positions === null || positions === void 0 ? void 0 : positions.elementPosition.bottom);
    var cssPositions = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, positions === null || positions === void 0 ? void 0 : positions.elementPosition), { maxHeight: maxHeight });
    if (isForcedInBounds) {
        cssPositions.bottom = undefined;
    }
    useAutoFocus(props, positions, calloutElement);
    react["useEffect"](function () {
        if (!hidden) {
            onLayerMounted === null || onLayerMounted === void 0 ? void 0 : onLayerMounted();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if hidden changes
    }, [hidden]);
    // If there is no target window then we are likely in server side rendering and we should not render anything.
    if (!targetWindow) {
        return null;
    }
    var overflowYHidden = hideOverflow;
    var beakVisible = isBeakVisible && !!target;
    var classNames = getClassNames(styles, {
        theme: props.theme,
        className: className,
        overflowYHidden: overflowYHidden,
        calloutWidth: calloutWidth,
        positions: positions,
        beakWidth: beakWidth,
        backgroundColor: backgroundColor,
        calloutMaxWidth: calloutMaxWidth,
        calloutMinWidth: calloutMinWidth,
        doNotLayer: doNotLayer,
    });
    var overflowStyle = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ maxHeight: calloutMaxHeight ? calloutMaxHeight : '100%' }, style), (overflowYHidden && { overflowY: 'hidden' }));
    var visibilityStyle = props.hidden ? { visibility: 'hidden' } : undefined;
    // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
    return (react["createElement"]("div", { ref: rootRef, className: classNames.container, style: visibilityStyle },
        react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */], ARIA_ROLE_ATTRIBUTES), { className: Object(css["a" /* css */])(classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? Object(tslib_es6["a" /* __assign */])({}, cssPositions) : OFF_SCREEN_STYLE, 
            // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
            tabIndex: -1, ref: calloutCallback }),
            beakVisible && react["createElement"]("div", { className: classNames.beak, style: getBeakPosition(positions) }),
            beakVisible && react["createElement"]("div", { className: classNames.beakCurtain }),
            react["createElement"](Popup["a" /* Popup */]
            // don't use getNativeElementProps for role and roledescription because it will also
            // pass through data-* props (resulting in them being used in two places)
            , Object(tslib_es6["a" /* __assign */])({ 
                // don't use getNativeElementProps for role and roledescription because it will also
                // pass through data-* props (resulting in them being used in two places)
                role: props.role, "aria-roledescription": props['aria-roledescription'], ariaDescribedBy: ariaDescribedBy, ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy, className: classNames.calloutMain, onDismiss: props.onDismiss, onMouseDown: mouseDownOnPopup, onMouseUp: mouseUpOnPopup, onRestoreFocus: props.onRestoreFocus, onScroll: onScroll, shouldRestoreFocus: shouldRestoreFocus, style: overflowStyle }, popupProps, { ref: mergedPopupRefs }), children))));
}), function (previousProps, nextProps) {
    if (!nextProps.shouldUpdateWhenHidden && previousProps.hidden && nextProps.hidden) {
        // Do not update when hidden.
        return true;
    }
    return Object(object["c" /* shallowCompare */])(previousProps, nextProps);
});
/**
 * (Utility) to find and return the current `Callout` Beak position.
 *
 * @param positions
 */
function getBeakPosition(positions) {
    var _a, _b;
    var beakPositionStyle = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (_a = positions === null || positions === void 0 ? void 0 : positions.beakPosition) === null || _a === void 0 ? void 0 : _a.elementPosition), { display: ((_b = positions === null || positions === void 0 ? void 0 : positions.beakPosition) === null || _b === void 0 ? void 0 : _b.hideBeak) ? 'none' : undefined });
    if (!beakPositionStyle.top && !beakPositionStyle.bottom && !beakPositionStyle.left && !beakPositionStyle.right) {
        beakPositionStyle.left = BEAK_ORIGIN_POSITION.left;
        beakPositionStyle.top = BEAK_ORIGIN_POSITION.top;
    }
    return beakPositionStyle;
}
/**
 * (Utility) used to compare two different elementPositions to determine whether they are equal.
 *
 * @param prevElementPositions
 * @param newElementPosition
 */
function arePositionsEqual(prevElementPositions, newElementPosition) {
    return (comparePositions(prevElementPositions.elementPosition, newElementPosition.elementPosition) &&
        comparePositions(prevElementPositions.beakPosition.elementPosition, newElementPosition.beakPosition.elementPosition));
}
/**
 * (Utility) used in **arePositionsEqual** to compare two different elementPositions.
 *
 * @param prevElementPositions
 * @param newElementPositions
 */
function comparePositions(prevElementPositions, newElementPositions) {
    for (var key in newElementPositions) {
        if (newElementPositions.hasOwnProperty(key)) {
            var oldPositionEdge = prevElementPositions[key];
            var newPositionEdge = newElementPositions[key];
            if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    return true;
}
CalloutContentBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=CalloutContent.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/CalloutContent.styles.js

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth,
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth, calloutMinWidth = props.calloutMinWidth, doNotLayer = props.doNotLayer;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var semanticColors = theme.semanticColors, effects = theme.effects;
    return {
        container: [
            classNames.container,
            {
                position: 'relative',
            },
        ],
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'absolute',
                display: 'flex',
                zIndex: doNotLayer ? lib["q" /* ZIndexes */].Layer : undefined,
                boxSizing: 'border-box',
                borderRadius: effects.roundedCorner2,
                boxShadow: effects.elevation16,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText',
                    },
                    _a),
            },
            Object(lib["t" /* focusClear */])(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth },
            !!calloutMinWidth && { minWidth: calloutMinWidth },
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: semanticColors.menuBackground,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)',
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: semanticColors.menuBackground,
                borderRadius: effects.roundedCorner2,
            },
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: semanticColors.menuBackground,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative',
                width: '100%',
                borderRadius: effects.roundedCorner2,
            },
            overflowYHidden && {
                overflowY: 'hidden',
            },
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
    };
};
//# sourceMappingURL=CalloutContent.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/CalloutContent.js



var CalloutContent = Object(styled["a" /* styled */])(CalloutContentBase, getStyles, undefined, {
    scope: 'CalloutContent',
});
//# sourceMappingURL=CalloutContent.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.js + 6 modules
var Layer = __webpack_require__("TG3e");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js




var Callout = react["forwardRef"](function (_a, forwardedRef) {
    var layerProps = _a.layerProps, doNotLayer = _a.doNotLayer, rest = Object(tslib_es6["e" /* __rest */])(_a, ["layerProps", "doNotLayer"]);
    var content = react["createElement"](CalloutContent, Object(tslib_es6["a" /* __assign */])({}, rest, { doNotLayer: doNotLayer, ref: forwardedRef }));
    return doNotLayer ? content : react["createElement"](Layer["a" /* Layer */], Object(tslib_es6["a" /* __assign */])({}, layerProps), content);
});
Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map

/***/ }),

/***/ "dt+D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogType; });
/**
 * {@docCategory Dialog}
 */
var DialogType;
(function (DialogType) {
    /** Standard dialog */
    DialogType[DialogType["normal"] = 0] = "normal";
    /** Dialog with large header banner */
    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
    /** Dialog with an 'x' close button in the upper-right corner */
    DialogType[DialogType["close"] = 2] = "close";
})(DialogType || (DialogType = {}));
//# sourceMappingURL=DialogContent.types.js.map

/***/ }),

/***/ "euHG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NZSY");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H5Ur");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kujG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6ztV");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GBES");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zgRQ");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bf8k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("WjVC");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("obGf");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4H/l");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("41aL");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("lE+F");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Imro");




// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_SPAN_ATTRIBUTE_NAME = 'data-selection-span';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME = 'data-selection-touch-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
/**
 * {@docCategory Selection}
 */
var SelectionZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(SelectionZone, _super);
    function SelectionZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onSelectionChange = function () {
            var selection = _this.props.selection;
            var isModal = selection.isModal && selection.isModal();
            _this.setState({
                isModal: isModal,
            });
        };
        _this._onMouseDownCapture = function (ev) {
            var target = ev.target;
            var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])(_this._root.current);
            var doc = win === null || win === void 0 ? void 0 : win.document;
            if ((doc === null || doc === void 0 ? void 0 : doc.activeElement) !== target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* elementContains */ "a"])(doc === null || doc === void 0 ? void 0 : doc.activeElement, target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* elementContains */ "a"])(target, _this._root.current)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    var span = _this._getItemSpan(itemRoot);
                    if (span === undefined) {
                        if (isToggleModifierPressed) {
                            // set anchor only.
                            selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                            if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                                selection.setModal(true);
                                _this._setIsTouch(false);
                            }
                        }
                        else {
                            if (_this.props.isSelectedOnFocus) {
                                _this._onItemSurfaceClick('focus', index);
                            }
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var toggleWithoutModifierPressed = _this.props.toggleWithoutModifierPressed;
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target)) &&
                        !_this._isShiftPressed &&
                        !_this._isCtrlPressed &&
                        !_this._isMetaPressed &&
                        !toggleWithoutModifierPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot), _this._getItemSpan(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            var _a;
            var enableTouchInvocationTarget = (_a = _this.props.enableTouchInvocationTarget, _a === void 0 ? false : _a);
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    if (!isSelectionDisabled) {
                        _this._onToggleAllClick(ev);
                    }
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    var span = _this._getItemSpan(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (!isSelectionDisabled) {
                            if (_this._isShiftPressed) {
                                _this._onItemSurfaceClick('click', index, span);
                            }
                            else {
                                _this._onToggleClick(ev, index, span);
                            }
                        }
                        break;
                    }
                    else if ((_this._isTouch &&
                        enableTouchInvocationTarget &&
                        _this._hasAttribute(target, SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME)) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        if (span === undefined) {
                            // Items should be invokable even if selection is disabled.
                            _this._onInvokeClick(ev, index);
                        }
                        break;
                    }
                    else if (target === itemRoot) {
                        if (!isSelectionDisabled) {
                            _this._onItemSurfaceClick('click', index, span);
                        }
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var _a;
            var target = ev.target;
            var onItemContextMenu = (_a = _this.props, _a.onItemContextMenu), selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    _this._onInvokeMouseDown(ev, index);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or
         * input elements), we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            if (itemRoot && onItemInvoked && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            var _a;
            _this._updateModifiers(ev);
            var target = ev.target;
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            var selection = (_a = _this.props, _a.selection), selectionClearedOnEscapePress = _a.selectionClearedOnEscapePress;
            // eslint-disable-next-line deprecation/deprecation
            var isSelectAllKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].a && (_this._isCtrlPressed || _this._isMetaPressed);
            // eslint-disable-next-line deprecation/deprecation
            var isClearSelectionKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].escape;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].multiple && !selection.isAllSelected()) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(true);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed and the component is configured to clear on escape press,
            // clear selection (if any are selected.)
            if (selectionClearedOnEscapePress && isClearSelectionKey && selection.getSelectedCount() > 0) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(false);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                var span = _this._getItemSpan(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        if (!isSelectionDisabled && span === undefined) {
                            // If the event went to an element which should trigger auto-select, select it and then let
                            // the default behavior kick in.
                            _this._onInvokeMouseDown(ev, index, span);
                        }
                        break;
                    }
                    else if (
                    // eslint-disable-next-line deprecation/deprecation
                    (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].space) &&
                        (target.tagName === 'BUTTON' ||
                            target.tagName === 'A' ||
                            target.tagName === 'INPUT' ||
                            target.tagName === 'SUMMARY')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        // eslint-disable-next-line deprecation/deprecation
                        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].enter) {
                            if (span === undefined) {
                                // Items should be invokable even if selection is disabled.
                                _this._onInvokeClick(ev, index);
                                ev.preventDefault();
                            }
                            return;
                            // eslint-disable-next-line deprecation/deprecation
                        }
                        else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].space) {
                            if (!isSelectionDisabled) {
                                _this._onToggleClick(ev, index, span);
                            }
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
                }
            }
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_6__[/* EventGroup */ "a"](_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_7__[/* Async */ "a"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_8__[/* initializeComponentRef */ "a"])(_this);
        var selection = _this.props.selection;
        // Reflect the initial modal state of selection into the state.
        var isModal = selection.isModal && selection.isModal();
        _this.state = {
            isModal: isModal,
        };
        return _this;
    }
    SelectionZone.getDerivedStateFromProps = function (nextProps, prevState) {
        var isModal = nextProps.selection.isModal && nextProps.selection.isModal();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, prevState), { isModal: isModal });
    };
    SelectionZone.prototype.componentDidMount = function () {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])(this._root.current);
        var doc = win === null || win === void 0 ? void 0 : win.document;
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(doc, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(doc === null || doc === void 0 ? void 0 : doc.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(doc === null || doc === void 0 ? void 0 : doc.body, 'touchend', this._onTouchStartCapture, true);
        // Subscribe to the selection to keep modal state updated.
        this._events.on(this.props.selection, 'change', this._onSelectionChange);
    };
    SelectionZone.prototype.render = function () {
        var isModal = this.state.isModal;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_9__[/* css */ "a"])('ms-SelectionZone', this.props.className, {
                'ms-SelectionZone--modal': !!isModal,
            }), ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: "presentation", onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu, onMouseDownCapture: this._onMouseDownCapture, onFocusCapture: this._onFocus, "data-selection-is-modal": isModal ? true : undefined },
            this.props.children,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_10__[/* FocusRects */ "a"], null)));
    };
    SelectionZone.prototype.componentDidUpdate = function (previousProps) {
        var selection = this.props.selection;
        if (selection !== previousProps.selection) {
            // Whenever selection changes, update the subscripton to keep modal state updated.
            this._events.off(previousProps.selection);
            this._events.on(selection, 'change', this._onSelectionChange);
        }
    };
    SelectionZone.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        if (this._getSelectionMode() === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].none) {
            return true;
        }
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index, span) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch &&
            this._isTouch &&
            (span !== undefined ? !selection.isRangeSelected(index, span) : !selection.isIndexSelected(index)) &&
            selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].multiple) {
            if (span !== undefined) {
                selection.toggleRangeSelected(index, span);
            }
            else {
                selection.toggleIndexSelected(index);
            }
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].single) {
            if (span === undefined || span === 1) {
                var isSelected = selection.isIndexSelected(index);
                var isModal = selection.isModal && selection.isModal();
                selection.setAllSelected(false);
                selection.setIndexSelected(index, !isSelected, true);
                if (isModal && selection.setModal) {
                    // Since the above call to setAllSelected(false) clears modal state,
                    // restore it. This occurs because the SelectionMode of the Selection
                    // may differ from the SelectionZone.
                    selection.setModal(true);
                }
            }
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a;
        var selection = (_a = this.props, _a.selection), onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (type, index, span) {
        var _a;
        var _b;
        var selection = (_a = this.props, _a.selection), toggleWithoutModifierPressed = _a.toggleWithoutModifierPressed;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].multiple) {
            if (this._isShiftPressed && !this._isTabPressed) {
                if (span !== undefined) {
                    (_b = selection.selectToRange) === null || _b === void 0 ? void 0 : _b.call(selection, index, span, !isToggleModifierPressed);
                }
                else {
                    selection.selectToIndex(index, !isToggleModifierPressed);
                }
            }
            else if (type === 'click' && (isToggleModifierPressed || toggleWithoutModifierPressed)) {
                if (span !== undefined) {
                    selection.toggleRangeSelected(index, span);
                }
                else {
                    selection.toggleIndexSelected(index);
                }
            }
            else {
                this._clearAndSelectIndex(index, span);
            }
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].single) {
            this._clearAndSelectIndex(index, span);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index, span) {
        var selection = this.props.selection;
        if (span !== undefined) {
            if (selection.isRangeSelected(index, span)) {
                return;
            }
        }
        else {
            // Only do work if item is not selected.
            if (selection.isIndexSelected(index)) {
                return;
            }
        }
        this._clearAndSelectIndex(index, span);
    };
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    SelectionZone.prototype._findScrollParentAndTryClearOnEmptyClick = function (ev) {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])(this._root.current);
        var doc = win === null || win === void 0 ? void 0 : win.document;
        var scrollParent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_11__[/* findScrollableParent */ "e"])(this._root.current);
        // unbind this handler and replace binding with a binding on the actual scrollable parent
        this._events.off(doc, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick);
        // If we clicked inside the scrollable parent, call through to the handler on this click.
        if ((scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target)) || scrollParent === ev.target) {
            this._tryClearOnEmptyClick(ev);
        }
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index, span) {
        var _a, _b;
        var _c;
        var selection = (_a = this.props, _a.selection), selectionClearedOnSurfaceClick = (_b = _a.selectionClearedOnSurfaceClick, _b === void 0 ? true : _b);
        var isAlreadySingleSelected = (span === undefined || span === 1) && selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected && selectionClearedOnSurfaceClick) {
            var isModal = selection.isModal && selection.isModal();
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            if (span !== undefined) {
                (_c = selection.setRangeSelected) === null || _c === void 0 ? void 0 : _c.call(selection, index, span, true, true);
            }
            else {
                selection.setIndexSelected(index, true, true);
            }
            if (isModal || (this.props.enterModalOnTouch && this._isTouch)) {
                if (selection.setModal) {
                    selection.setModal(true);
                }
                if (this._isTouch) {
                    this._setIsTouch(false);
                }
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
        // eslint-disable-next-line deprecation/deprecation
        var keyCode = ev.keyCode;
        this._isTabPressed = keyCode ? keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_5__[/* KeyCodes */ "a"].tab : false;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        var _a;
        var indexValue = parseInt((_a = itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME)) !== null && _a !== void 0 ? _a : '', 10);
        return isNaN(indexValue) ? -1 : indexValue;
    };
    SelectionZone.prototype._getItemSpan = function (itemRoot) {
        var _a;
        var spanValue = parseInt((_a = itemRoot.getAttribute(SELECTION_SPAN_ATTRIBUTE_NAME)) !== null && _a !== void 0 ? _a : '', 10);
        return isNaN(spanValue) ? undefined : spanValue;
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            var value = element.getAttribute(attributeName);
            if (value === 'false') {
                isToggle = false;
                break;
            }
            isToggle = value === 'true';
            element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return (element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.getAttribute('contenteditable') === 'true' ||
            element.getAttribute('contenteditable') === '');
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_12__[/* getDocument */ "a"])();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_13__[/* isElementTabbable */ "n"])(element) || element.hasAttribute('data-selection-index')) {
                    return false;
                }
                element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getParent */ "a"])(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var _a;
        var selection = this.props.selection;
        var selectionMode = (_a = this.props.selectionMode, _a === void 0 ? selection ? selection.mode : _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].none : _a);
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isSelectedOnFocus: true,
        toggleWithoutModifierPressed: false,
        selectionMode: _interfaces__WEBPACK_IMPORTED_MODULE_14__[/* SelectionMode */ "c"].multiple,
        selectionClearedOnEscapePress: true,
    };
    return SelectionZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
//# sourceMappingURL=SelectionZone.js.map

/***/ }),

/***/ "fh99":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Announced; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/DelayedRender.js
var DelayedRender = __webpack_require__("5sqY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Announced/Announced.base.js



var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Announced}
 */
var Announced_base_AnnouncedBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(AnnouncedBase, _super);
    function AnnouncedBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnouncedBase.prototype.render = function () {
        var _a, _b;
        var message = (_a = this.props, _a.message), styles = _a.styles, Root = (_b = _a.as, _b === void 0 ? 'div' : _b), className = _a.className;
        var classNames = getClassNames(styles, { className: className });
        return (react["createElement"](Root, Object(tslib_es6["a" /* __assign */])({ role: "status", className: classNames.root }, Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */], ['className'])),
            react["createElement"](DelayedRender["a" /* DelayedRender */], null,
                react["createElement"]("div", { className: classNames.screenReaderText }, message))));
    };
    AnnouncedBase.defaultProps = {
        'aria-live': 'polite',
    };
    return AnnouncedBase;
}(react["Component"]));
//# sourceMappingURL=Announced.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Announced/Announced.styles.js

var getStyles = function (props) {
    return {
        root: props.className,
        screenReaderText: lib["C" /* hiddenContentStyle */],
    };
};
//# sourceMappingURL=Announced.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Announced/Announced.js



var Announced = Object(styled["a" /* styled */])(Announced_base_AnnouncedBase, getStyles, undefined, { scope: 'Announced' });
//# sourceMappingURL=Announced.js.map

/***/ }),

/***/ "gGwy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NormalPeoplePicker; });

// UNUSED EXPORTS: BasePeoplePicker, MemberListPeoplePicker, NormalPeoplePickerBase, CompactPeoplePickerBase, ListPeoplePickerBase, createGenericItem, CompactPeoplePicker, ListPeoplePicker

// NAMESPACE OBJECT: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/Suggestions.scss.js
var Suggestions_scss_namespaceObject = {};
__webpack_require__.r(Suggestions_scss_namespaceObject);
__webpack_require__.d(Suggestions_scss_namespaceObject, "root", function() { return root; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsItem", function() { return suggestionsItem; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "closeButton", function() { return closeButton; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsItemIsSuggested", function() { return suggestionsItemIsSuggested; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "itemButton", function() { return itemButton; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "actionButton", function() { return actionButton; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "buttonSelected", function() { return buttonSelected; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsTitle", function() { return suggestionsTitle; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsContainer", function() { return suggestionsContainer; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsNone", function() { return suggestionsNone; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsSpinner", function() { return suggestionsSpinner; });
__webpack_require__.d(Suggestions_scss_namespaceObject, "suggestionsAvailable", function() { return Suggestions_scss_suggestionsAvailable; });

// NAMESPACE OBJECT: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.scss.js
var BasePicker_scss_namespaceObject = {};
__webpack_require__.r(BasePicker_scss_namespaceObject);
__webpack_require__.d(BasePicker_scss_namespaceObject, "picker", function() { return picker; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "pickerText", function() { return pickerText; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "inputFocused", function() { return inputFocused; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "inputDisabled", function() { return inputDisabled; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "pickerInput", function() { return pickerInput; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "pickerItems", function() { return pickerItems; });
__webpack_require__.d(BasePicker_scss_namespaceObject, "screenReaderOnly", function() { return screenReaderOnly; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initials.js
var initials = __webpack_require__("tS8V");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/elementContains.js
var elementContains = __webpack_require__("H5Ur");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/string.js
var string = __webpack_require__("pSSv");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js + 4 modules
var Callout = __webpack_require__("dXTB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.js
var Selection = __webpack_require__("lgi8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/selection/SelectionZone.js
var SelectionZone = __webpack_require__("euHG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js
var Selection_types = __webpack_require__("Imro");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/CommandButton/CommandButton.js
var CommandButton = __webpack_require__("2xtc");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.js + 3 modules
var Spinner = __webpack_require__("I0jv");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Announced/Announced.js + 2 modules
var Announced = __webpack_require__("fh99");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/Suggestions.types.js
/**
 * Enum to help identify which suggestions action button is selected.
 * {@docCategory Pickers}
 */
var SuggestionActionType;
(function (SuggestionActionType) {
    /** None of the actions is selected. */
    SuggestionActionType[SuggestionActionType["none"] = 0] = "none";
    /** ForceResolve action is selected. */
    SuggestionActionType[SuggestionActionType["forceResolve"] = 1] = "forceResolve";
    /** SearchMore action is selected. */
    SuggestionActionType[SuggestionActionType["searchMore"] = 2] = "searchMore";
})(SuggestionActionType || (SuggestionActionType = {}));
//# sourceMappingURL=Suggestions.types.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__("9bYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@microsoft/load-themed-styles/lib-es6/index.js
var lib_es6 = __webpack_require__("47X3");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/Suggestions.scss.js
/* eslint-disable */

Object(lib_es6["a" /* loadStyles */])([{ "rawString": ".root_8c91000a{min-width:260px}.suggestionsItem_8c91000a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative;overflow:hidden}.suggestionsItem_8c91000a:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f3f2f1" }, { "rawString": "}.suggestionsItem_8c91000a:hover .closeButton_8c91000a{display:block}.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c6c4" }, { "rawString": "}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a:hover{background:Highlight;color:HighlightText}}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a{background:Highlight;color:HighlightText;-ms-high-contrast-adjust:none}}.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a .closeButton_8c91000a:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#323130" }, { "rawString": "}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.suggestionsItem_8c91000a.suggestionsItemIsSuggested_8c91000a .itemButton_8c91000a{color:HighlightText}}.suggestionsItem_8c91000a .closeButton_8c91000a{display:none;color:" }, { "theme": "neutralSecondary", "defaultValue": "#605e5c" }, { "rawString": "}.suggestionsItem_8c91000a .closeButton_8c91000a:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.actionButton_8c91000a{background-color:transparent;border:0;cursor:pointer;margin:0;position:relative;border-top:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";height:40px;width:100%;font-size:12px}[dir=ltr] .actionButton_8c91000a{padding-left:8px}[dir=rtl] .actionButton_8c91000a{padding-right:8px}html[dir=ltr] .actionButton_8c91000a{text-align:left}html[dir=rtl] .actionButton_8c91000a{text-align:right}.actionButton_8c91000a:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": ";cursor:pointer}.actionButton_8c91000a:active,.actionButton_8c91000a:focus{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.actionButton_8c91000a .ms-Button-icon{font-size:16px;width:25px}.actionButton_8c91000a .ms-Button-label{margin:0 4px 0 9px}html[dir=rtl] .actionButton_8c91000a .ms-Button-label{margin:0 9px 0 4px}.buttonSelected_8c91000a{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.suggestionsTitle_8c91000a{padding:0 12px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";font-size:12px;line-height:40px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsContainer_8c91000a{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#edebe9" }, { "rawString": "}.suggestionsNone_8c91000a{text-align:center;color:#797775;font-size:12px;line-height:30px}.suggestionsSpinner_8c91000a{margin:5px 0;white-space:nowrap;line-height:20px;font-size:12px}html[dir=ltr] .suggestionsSpinner_8c91000a{padding-left:14px}html[dir=rtl] .suggestionsSpinner_8c91000a{padding-right:14px}html[dir=ltr] .suggestionsSpinner_8c91000a{text-align:left}html[dir=rtl] .suggestionsSpinner_8c91000a{text-align:right}.suggestionsSpinner_8c91000a .ms-Spinner-circle{display:inline-block;vertical-align:middle}.suggestionsSpinner_8c91000a .ms-Spinner-label{display:inline-block;margin:0 10px 0 16px;vertical-align:middle}html[dir=rtl] .suggestionsSpinner_8c91000a .ms-Spinner-label{margin:0 16px 0 10px}.itemButton_8c91000a.itemButton_8c91000a{width:100%;padding:0;min-width:0;height:100%}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.itemButton_8c91000a.itemButton_8c91000a{color:WindowText}}.itemButton_8c91000a.itemButton_8c91000a:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#201f1e" }, { "rawString": "}.closeButton_8c91000a.closeButton_8c91000a{padding:0 4px;height:auto;width:32px}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.closeButton_8c91000a.closeButton_8c91000a{color:WindowText}}.closeButton_8c91000a.closeButton_8c91000a:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c6c4" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#201f1e" }, { "rawString": "}.suggestionsAvailable_8c91000a{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}" }]);
var root = "root_8c91000a";
var suggestionsItem = "suggestionsItem_8c91000a";
var closeButton = "closeButton_8c91000a";
var suggestionsItemIsSuggested = "suggestionsItemIsSuggested_8c91000a";
var itemButton = "itemButton_8c91000a";
var actionButton = "actionButton_8c91000a";
var buttonSelected = "buttonSelected_8c91000a";
var suggestionsTitle = "suggestionsTitle_8c91000a";
var suggestionsContainer = "suggestionsContainer_8c91000a";
var suggestionsNone = "suggestionsNone_8c91000a";
var suggestionsSpinner = "suggestionsSpinner_8c91000a";
var Suggestions_scss_suggestionsAvailable = "suggestionsAvailable_8c91000a";
//# sourceMappingURL=Suggestions.scss.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/SuggestionsItem.js





var legacyStyles = Suggestions_scss_namespaceObject;
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * {@docCategory Pickers}
 */
var SuggestionsItem_SuggestionsItem = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SuggestionsItem, _super);
    function SuggestionsItem(props) {
        var _this = _super.call(this, props) || this;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        return _this;
    }
    SuggestionsItem.prototype.render = function () {
        var _a;
        var _b = this.props, suggestionModel = _b.suggestionModel, RenderSuggestion = _b.RenderSuggestion, onClick = _b.onClick, className = _b.className, id = _b.id, onRemoveItem = _b.onRemoveItem, isSelectedOverride = _b.isSelectedOverride, removeButtonAriaLabel = _b.removeButtonAriaLabel, styles = _b.styles, theme = _b.theme, removeButtonIconProps = _b.removeButtonIconProps;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from SuggestionsItem class because it
        // might be used by consumers separately from pickers extending from BasePicker
        // and have not used the new 'styles' prop. Because it's expecting a type parameter,
        // we can not use the 'styled' function without adding some helpers which can break
        // downstream consumers who did not use the new helpers.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // in Suggestions when the typed SuggestionsItem class is ready to be rendered. If the
        // check passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                suggested: suggestionModel.selected || isSelectedOverride,
            })
            : {
                root: Object(css["a" /* css */])('ms-Suggestions-item', legacyStyles.suggestionsItem, (_a = {},
                    _a['is-suggested ' + legacyStyles.suggestionsItemIsSuggested] = suggestionModel.selected || isSelectedOverride,
                    _a), className),
                itemButton: Object(css["a" /* css */])('ms-Suggestions-itemButton', legacyStyles.itemButton),
                closeButton: Object(css["a" /* css */])('ms-Suggestions-closeButton', legacyStyles.closeButton),
            };
        return (react["createElement"]("div", { className: classNames.root, role: "presentation" },
            react["createElement"](CommandButton["a" /* CommandButton */], { onClick: onClick, className: classNames.itemButton, id: id, "aria-selected": suggestionModel.selected, role: "option", "aria-label": suggestionModel.ariaLabel }, RenderSuggestion(suggestionModel.item, this.props)),
            this.props.showRemoveButton ? (react["createElement"](IconButton["a" /* IconButton */], { iconProps: removeButtonIconProps !== null && removeButtonIconProps !== void 0 ? removeButtonIconProps : { iconName: 'Cancel' }, styles: { icon: { fontSize: '12px' } }, title: removeButtonAriaLabel, ariaLabel: removeButtonAriaLabel, onClick: onRemoveItem, className: classNames.closeButton })) : null));
    };
    return SuggestionsItem;
}(react["Component"]));

//# sourceMappingURL=SuggestionsItem.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/SuggestionsItem.styles.js



var SuggestionsItemGlobalClassNames = {
    root: 'ms-Suggestions-item',
    itemButton: 'ms-Suggestions-itemButton',
    closeButton: 'ms-Suggestions-closeButton',
    isSuggested: 'is-suggested',
};
function getStyles(props) {
    var _a, _b, _c, _d, _e, _f;
    var className = props.className, theme = props.theme, suggested = props.suggested;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(SuggestionsItemGlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
                width: '100%',
                position: 'relative',
                selectors: {
                    '&:hover': {
                        background: semanticColors.menuItemBackgroundHovered,
                    },
                    '&:hover .ms-Suggestions-closeButton': {
                        display: 'block',
                    },
                },
            },
            suggested && {
                selectors: (_a = {},
                    _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &")] = {
                        selectors: (_b = {},
                            _b[".".concat(classNames.closeButton)] = {
                                display: 'block',
                                background: semanticColors.menuItemBackgroundPressed,
                            },
                            _b),
                    },
                    _a[':after'] = {
                        pointerEvents: 'none',
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        border: "1px solid ".concat(theme.semanticColors.focusBorder),
                    },
                    _a),
            },
            className,
        ],
        itemButton: [
            classNames.itemButton,
            {
                width: '100%',
                padding: 0,
                border: 'none',
                height: '100%',
                // Force the item button to be collapsible so it can always shrink
                // to accommodate the close button as a peer in its flex container.
                minWidth: 0,
                // Require for IE11 to truncate the component.
                overflow: 'hidden',
                selectors: (_c = {},
                    _c[lib["f" /* HighContrastSelector */]] = {
                        color: 'WindowText',
                        selectors: {
                            ':hover': Object(tslib_es6["a" /* __assign */])({ background: 'Highlight', color: 'HighlightText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                        },
                    },
                    _c[':hover'] = {
                        color: semanticColors.menuItemTextHovered,
                    },
                    _c),
            },
            suggested && [
                classNames.isSuggested,
                {
                    background: semanticColors.menuItemBackgroundPressed,
                    selectors: (_d = {
                            ':hover': {
                                background: semanticColors.menuDivider,
                            }
                        },
                        _d[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ background: 'Highlight', color: 'HighlightText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                        _d),
                },
            ],
        ],
        closeButton: [
            classNames.closeButton,
            {
                display: 'none',
                color: palette.neutralSecondary,
                padding: '0 4px',
                height: 'auto',
                width: 32,
                selectors: (_e = {
                        ':hover, :active': {
                            background: palette.neutralTertiaryAlt,
                            color: palette.neutralDark,
                        }
                    },
                    _e[lib["f" /* HighContrastSelector */]] = {
                        color: 'WindowText',
                    },
                    _e),
            },
            suggested && (_f = {},
                _f[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &")] = {
                    selectors: {
                        ':hover, :active': {
                            background: palette.neutralTertiary,
                        },
                    },
                },
                _f.selectors = {
                    ':hover, :active': {
                        background: palette.neutralTertiary,
                        color: palette.neutralPrimary,
                    },
                },
                _f),
        ],
    };
}
//# sourceMappingURL=SuggestionsItem.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/Suggestions.js










var Suggestions_legacyStyles = Suggestions_scss_namespaceObject;
var Suggestions_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var StyledSuggestionsItem = Object(styled["a" /* styled */])(SuggestionsItem_SuggestionsItem, getStyles, undefined, {
    scope: 'SuggestionItem',
});
/**
 * {@docCategory Pickers}
 */
var Suggestions_Suggestions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(Suggestions, _super);
    function Suggestions(suggestionsProps) {
        var _this = _super.call(this, suggestionsProps) || this;
        _this._forceResolveButton = react["createRef"]();
        _this._searchForMoreButton = react["createRef"]();
        _this._selectedElement = react["createRef"]();
        _this._scrollContainer = react["createRef"]();
        /**
         * Returns true if the event was handled, false otherwise
         */
        _this.tryHandleKeyDown = function (keyCode, currentSuggestionIndex) {
            var isEventHandled = false;
            var newSelectedActionType = null;
            var currentSelectedAction = _this.state.selectedActionType;
            var suggestionLength = _this.props.suggestions.length;
            if (keyCode === KeyCodes["a" /* KeyCodes */].down) {
                switch (currentSelectedAction) {
                    case SuggestionActionType.forceResolve:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else if (_this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        else {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                    case SuggestionActionType.searchMore:
                        if (_this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        break;
                    case SuggestionActionType.none:
                        if (currentSuggestionIndex === -1 && _this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                }
            }
            else if (keyCode === KeyCodes["a" /* KeyCodes */].up) {
                switch (currentSelectedAction) {
                    case SuggestionActionType.forceResolve:
                        if (_this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        break;
                    case SuggestionActionType.searchMore:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else if (_this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                    case SuggestionActionType.none:
                        if (currentSuggestionIndex === -1 && _this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        break;
                }
            }
            if (newSelectedActionType !== null) {
                _this.setState({ selectedActionType: newSelectedActionType });
                isEventHandled = true;
            }
            return isEventHandled;
        };
        _this._getAlertText = function () {
            var _a = _this.props, isLoading = _a.isLoading, isSearching = _a.isSearching, suggestions = _a.suggestions, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText, noResultsFoundText = _a.noResultsFoundText, isExtendedLoading = _a.isExtendedLoading, loadingText = _a.loadingText;
            if (!isLoading && !isSearching) {
                if (suggestions.length > 0) {
                    return suggestionsAvailableAlertText || '';
                }
                if (noResultsFoundText) {
                    return noResultsFoundText;
                }
            }
            else if (isLoading && isExtendedLoading) {
                return loadingText || '';
            }
            return '';
        };
        _this._getMoreResults = function () {
            if (_this.props.onGetMoreResults) {
                _this.props.onGetMoreResults();
                // Reset selected action type as it will be of type SuggestionActionType.none after more results are gotten
                _this.setState({ selectedActionType: SuggestionActionType.none });
            }
        };
        _this._forceResolve = function () {
            if (_this.props.createGenericItem) {
                _this.props.createGenericItem();
            }
        };
        _this._shouldShowForceResolve = function () {
            return _this.props.showForceResolve ? _this.props.showForceResolve() : false;
        };
        _this._onClickTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                _this.props.onSuggestionClick(ev, item, index);
            };
        };
        _this._refocusOnSuggestions = function (keyCode) {
            if (typeof _this.props.refocusSuggestions === 'function') {
                _this.props.refocusSuggestions(keyCode);
            }
        };
        _this._onRemoveTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                var onSuggestionRemove = _this.props.onSuggestionRemove;
                onSuggestionRemove(ev, item, index);
                ev.stopPropagation();
            };
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this.state = {
            selectedActionType: SuggestionActionType.none,
        };
        return _this;
    }
    Suggestions.prototype.componentDidMount = function () {
        this.scrollSelected();
        this.activeSelectedElement = this._selectedElement ? this._selectedElement.current : null;
    };
    Suggestions.prototype.componentDidUpdate = function () {
        // Only scroll to selected element if the selected element has changed. Otherwise do nothing.
        // This prevents some odd behavior where scrolling the active element out of view and clicking on a selected element
        // will trigger a focus event and not give the clicked element the click.
        if (this._selectedElement.current && this.activeSelectedElement !== this._selectedElement.current) {
            this.scrollSelected();
            this.activeSelectedElement = this._selectedElement.current;
        }
    };
    Suggestions.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, forceResolveText = _c.forceResolveText, mostRecentlyUsedHeaderText = _c.mostRecentlyUsedHeaderText, searchForMoreIcon = _c.searchForMoreIcon, searchForMoreText = _c.searchForMoreText, className = _c.className, moreSuggestionsAvailable = _c.moreSuggestionsAvailable, noResultsFoundText = _c.noResultsFoundText, suggestions = _c.suggestions, isLoading = _c.isLoading, isSearching = _c.isSearching, loadingText = _c.loadingText, onRenderNoResultFound = _c.onRenderNoResultFound, searchingText = _c.searchingText, isMostRecentlyUsedVisible = _c.isMostRecentlyUsedVisible, resultsMaximumNumber = _c.resultsMaximumNumber, resultsFooterFull = _c.resultsFooterFull, resultsFooter = _c.resultsFooter, _d = _c.isResultsFooterVisible, isResultsFooterVisible = _d === void 0 ? true : _d, suggestionsHeaderText = _c.suggestionsHeaderText, suggestionsClassName = _c.suggestionsClassName, theme = _c.theme, styles = _c.styles, suggestionsListId = _c.suggestionsListId, suggestionsContainerAriaLabel = _c.suggestionsContainerAriaLabel;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from Suggestions class because it
        // might be used by consumers separately from pickers extending from BasePicker
        // and have not used the new 'styles' prop. Because it's expecting a type parameter,
        // we can not use the 'styled' function without adding some helpers which can break
        // downstream consumers who did not use the new helpers.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // in BasePicker when the typed Suggestions class is ready to be rendered. If the check
        // passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        this._classNames = styles
            ? Suggestions_getClassNames(styles, {
                theme: theme,
                className: className,
                suggestionsClassName: suggestionsClassName,
                forceResolveButtonSelected: this.state.selectedActionType === SuggestionActionType.forceResolve,
                searchForMoreButtonSelected: this.state.selectedActionType === SuggestionActionType.searchMore,
            })
            : {
                root: Object(css["a" /* css */])('ms-Suggestions', className, Suggestions_legacyStyles.root),
                title: Object(css["a" /* css */])('ms-Suggestions-title', Suggestions_legacyStyles.suggestionsTitle),
                searchForMoreButton: Object(css["a" /* css */])('ms-SearchMore-button', Suggestions_legacyStyles.actionButton, (_a = {},
                    _a['is-selected ' + Suggestions_legacyStyles.buttonSelected] = this.state.selectedActionType === SuggestionActionType.searchMore,
                    _a)),
                forceResolveButton: Object(css["a" /* css */])('ms-forceResolve-button', Suggestions_legacyStyles.actionButton, (_b = {},
                    _b['is-selected ' + Suggestions_legacyStyles.buttonSelected] = this.state.selectedActionType === SuggestionActionType.forceResolve,
                    _b)),
                suggestionsAvailable: Object(css["a" /* css */])('ms-Suggestions-suggestionsAvailable', Suggestions_legacyStyles.suggestionsAvailable),
                suggestionsContainer: Object(css["a" /* css */])('ms-Suggestions-container', Suggestions_legacyStyles.suggestionsContainer, suggestionsClassName),
                noSuggestions: Object(css["a" /* css */])('ms-Suggestions-none', Suggestions_legacyStyles.suggestionsNone),
            };
        var spinnerStyles = this._classNames.subComponentStyles
            ? this._classNames.subComponentStyles.spinner
            : undefined;
        // TODO: cleanup after refactor of pickers to composition pattern and remove SASS support.
        var spinnerClassNameOrStyles = styles
            ? { styles: spinnerStyles }
            : {
                className: Object(css["a" /* css */])('ms-Suggestions-spinner', Suggestions_legacyStyles.suggestionsSpinner),
            };
        var noResults = function () {
            var defaultRender = function () {
                return react["createElement"]("div", { className: _this._classNames.noSuggestions }, noResultsFoundText);
            };
            return (
            // This ID can be used by the parent to set aria-activedescendant to this
            react["createElement"]("div", { id: "sug-noResultsFound", role: "option" }, onRenderNoResultFound ? onRenderNoResultFound(undefined, defaultRender) : defaultRender()));
        };
        // MostRecently Used text should supercede the header text if it's there and available.
        var headerText = suggestionsHeaderText;
        if (isMostRecentlyUsedVisible && mostRecentlyUsedHeaderText) {
            headerText = mostRecentlyUsedHeaderText;
        }
        var footerTitle = undefined;
        if (isResultsFooterVisible) {
            footerTitle = suggestions.length >= resultsMaximumNumber ? resultsFooterFull : resultsFooter;
        }
        var hasNoSuggestions = (!suggestions || !suggestions.length) && !isLoading;
        var forceResolveId = this.state.selectedActionType === SuggestionActionType.forceResolve ? 'sug-selectedAction' : undefined;
        var searchForMoreId = this.state.selectedActionType === SuggestionActionType.searchMore ? 'sug-selectedAction' : undefined;
        return (react["createElement"]("div", { className: this._classNames.root, "aria-label": suggestionsContainerAriaLabel || headerText, id: suggestionsListId, role: "listbox" },
            react["createElement"](Announced["a" /* Announced */], { message: this._getAlertText(), "aria-live": "polite" }),
            headerText ? react["createElement"]("div", { className: this._classNames.title }, headerText) : null,
            forceResolveText && this._shouldShowForceResolve() && (react["createElement"](CommandButton["a" /* CommandButton */], { componentRef: this._forceResolveButton, className: this._classNames.forceResolveButton, id: forceResolveId, onClick: this._forceResolve, "data-automationid": 'sug-forceResolve' }, forceResolveText)),
            isLoading && react["createElement"](Spinner["a" /* Spinner */], Object(tslib_es6["a" /* __assign */])({}, spinnerClassNameOrStyles, { ariaLabel: loadingText, label: loadingText })),
            hasNoSuggestions ? noResults() : this._renderSuggestions(),
            searchForMoreText && moreSuggestionsAvailable && (react["createElement"](CommandButton["a" /* CommandButton */], { componentRef: this._searchForMoreButton, className: this._classNames.searchForMoreButton, iconProps: searchForMoreIcon || { iconName: 'Search' }, id: searchForMoreId, onClick: this._getMoreResults, "data-automationid": 'sug-searchForMore', role: 'option' }, searchForMoreText)),
            isSearching ? react["createElement"](Spinner["a" /* Spinner */], Object(tslib_es6["a" /* __assign */])({}, spinnerClassNameOrStyles, { ariaLabel: searchingText, label: searchingText })) : null,
            footerTitle && !moreSuggestionsAvailable && !isMostRecentlyUsedVisible && !isSearching ? (react["createElement"]("div", { className: this._classNames.title }, footerTitle(this.props))) : null));
    };
    Suggestions.prototype.hasSuggestedAction = function () {
        return !!this._searchForMoreButton.current || !!this._forceResolveButton.current;
    };
    Suggestions.prototype.hasSuggestedActionSelected = function () {
        return this.state.selectedActionType !== SuggestionActionType.none;
    };
    Suggestions.prototype.executeSelectedAction = function () {
        switch (this.state.selectedActionType) {
            case SuggestionActionType.forceResolve:
                this._forceResolve();
                break;
            case SuggestionActionType.searchMore:
                this._getMoreResults();
                break;
        }
    };
    Suggestions.prototype.focusAboveSuggestions = function () {
        if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.forceResolve });
        }
        else if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.searchMore });
        }
    };
    Suggestions.prototype.focusBelowSuggestions = function () {
        if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.searchMore });
        }
        else if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.forceResolve });
        }
    };
    Suggestions.prototype.focusSearchForMoreButton = function () {
        if (this._searchForMoreButton.current) {
            this._searchForMoreButton.current.focus();
        }
    };
    Suggestions.prototype.scrollSelected = function () {
        if (this._selectedElement.current &&
            this._scrollContainer.current &&
            this._scrollContainer.current.scrollTo !== undefined) {
            var _a = this._selectedElement.current, offsetHeight = _a.offsetHeight, offsetTop = _a.offsetTop;
            var _b = this._scrollContainer.current, parentOffsetHeight = _b.offsetHeight, scrollTop = _b.scrollTop;
            var isAbove = offsetTop < scrollTop;
            var isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
            if (isAbove) {
                this._scrollContainer.current.scrollTo(0, offsetTop);
            }
            else if (isBelow) {
                this._scrollContainer.current.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
            }
        }
    };
    Suggestions.prototype._renderSuggestions = function () {
        var _this = this;
        var _a = this.props, onRenderSuggestion = _a.onRenderSuggestion, removeSuggestionAriaLabel = _a.removeSuggestionAriaLabel, suggestionsItemClassName = _a.suggestionsItemClassName, resultsMaximumNumber = _a.resultsMaximumNumber, showRemoveButtons = _a.showRemoveButtons, removeButtonIconProps = _a.removeButtonIconProps;
        var suggestions = this.props.suggestions;
        var StyledTypedSuggestionsItem = StyledSuggestionsItem;
        var selectedIndex = -1;
        suggestions.some(function (element, index) {
            if (element.selected) {
                selectedIndex = index;
                return true;
            }
            return false;
        });
        if (resultsMaximumNumber) {
            suggestions =
                selectedIndex >= resultsMaximumNumber
                    ? suggestions.slice(selectedIndex - resultsMaximumNumber + 1, selectedIndex + 1)
                    : suggestions.slice(0, resultsMaximumNumber);
        }
        if (suggestions.length === 0) {
            return null;
        }
        return (react["createElement"]("div", { className: this._classNames.suggestionsContainer, ref: this._scrollContainer, role: "presentation" }, suggestions.map(function (suggestion, index) { return (react["createElement"]("div", { ref: suggestion.selected ? _this._selectedElement : undefined, key: suggestion.item.key ? suggestion.item.key : index, role: "presentation" },
            react["createElement"](StyledTypedSuggestionsItem, { suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: _this._onClickTypedSuggestionsItem(suggestion.item, index), className: suggestionsItemClassName, showRemoveButton: showRemoveButtons, removeButtonAriaLabel: removeSuggestionAriaLabel, onRemoveItem: _this._onRemoveTypedSuggestionsItem(suggestion.item, index), id: 'sug-' + index, removeButtonIconProps: removeButtonIconProps }))); })));
    };
    return Suggestions;
}(react["Component"]));

//# sourceMappingURL=Suggestions.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/Suggestions.styles.js


var GlobalClassNames = {
    root: 'ms-Suggestions',
    suggestionsContainer: 'ms-Suggestions-container',
    title: 'ms-Suggestions-title',
    forceResolveButton: 'ms-forceResolve-button',
    searchForMoreButton: 'ms-SearchMore-button',
    spinner: 'ms-Suggestions-spinner',
    noSuggestions: 'ms-Suggestions-none',
    suggestionsAvailable: 'ms-Suggestions-suggestionsAvailable',
    isSelected: 'is-selected',
};
function Suggestions_styles_getStyles(props) {
    var _a;
    var className = props.className, suggestionsClassName = props.suggestionsClassName, theme = props.theme, forceResolveButtonSelected = props.forceResolveButtonSelected, searchForMoreButtonSelected = props.searchForMoreButtonSelected;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var actionButtonStyles = {
        backgroundColor: 'transparent',
        border: 0,
        cursor: 'pointer',
        margin: 0,
        paddingLeft: 8,
        position: 'relative',
        borderTop: "1px solid ".concat(palette.neutralLight),
        height: 40,
        textAlign: 'left',
        width: '100%',
        fontSize: fonts.small.fontSize,
        selectors: {
            ':hover': {
                backgroundColor: semanticColors.menuItemBackgroundPressed,
                cursor: 'pointer',
            },
            ':focus, :active': {
                backgroundColor: palette.themeLight,
            },
            '.ms-Button-icon': {
                fontSize: fonts.mediumPlus.fontSize,
                width: 25,
            },
            '.ms-Button-label': {
                margin: '0 4px 0 9px',
            },
        },
    };
    var actionButtonSelectedStyles = {
        backgroundColor: palette.themeLight,
        selectors: (_a = {},
            _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ backgroundColor: 'Highlight', borderColor: 'Highlight', color: 'HighlightText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
            _a[':after'] = {
                pointerEvents: 'none',
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                border: "1px solid ".concat(theme.semanticColors.focusBorder),
            },
            _a),
    };
    return {
        root: [
            classNames.root,
            {
                minWidth: 260,
            },
            className,
        ],
        suggestionsContainer: [
            classNames.suggestionsContainer,
            {
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: 300,
                transform: 'translate3d(0,0,0)',
            },
            suggestionsClassName,
        ],
        title: [
            classNames.title,
            {
                padding: '0 12px',
                fontSize: fonts.small.fontSize,
                color: palette.themePrimary,
                lineHeight: 40,
                borderBottom: "1px solid ".concat(semanticColors.menuItemBackgroundPressed),
            },
        ],
        forceResolveButton: [
            classNames.forceResolveButton,
            actionButtonStyles,
            forceResolveButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
        ],
        searchForMoreButton: [
            classNames.searchForMoreButton,
            actionButtonStyles,
            searchForMoreButtonSelected && [classNames.isSelected, actionButtonSelectedStyles],
        ],
        noSuggestions: [
            classNames.noSuggestions,
            {
                textAlign: 'center',
                color: palette.neutralSecondary,
                fontSize: fonts.small.fontSize,
                lineHeight: 30,
            },
        ],
        suggestionsAvailable: [classNames.suggestionsAvailable, lib["C" /* hiddenContentStyle */]],
        subComponentStyles: {
            spinner: {
                root: [
                    classNames.spinner,
                    {
                        margin: '5px 0',
                        paddingLeft: 14,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        lineHeight: 20,
                        fontSize: fonts.small.fontSize,
                    },
                ],
                circle: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                },
                label: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0 10px 0 16px',
                },
            },
        },
    };
}
//# sourceMappingURL=Suggestions.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/Suggestions/SuggestionsController.js
/**
 * {@docCategory Pickers}
 */
var SuggestionsController = /** @class */ (function () {
    function SuggestionsController() {
        var _this = this;
        this._isSuggestionModel = function (value) {
            return value.item !== undefined;
        };
        this._ensureSuggestionModel = function (suggestion) {
            if (_this._isSuggestionModel(suggestion)) {
                return suggestion;
            }
            else {
                return {
                    item: suggestion,
                    selected: false,
                    ariaLabel: suggestion.ariaLabel,
                };
            }
        };
        this.suggestions = [];
        this.currentIndex = -1;
    }
    SuggestionsController.prototype.updateSuggestions = function (newSuggestions, selectedIndex, maxCount) {
        if (newSuggestions && newSuggestions.length > 0) {
            if (maxCount && newSuggestions.length > maxCount) {
                var startIndex = selectedIndex && selectedIndex > maxCount ? selectedIndex + 1 - maxCount : 0;
                newSuggestions = newSuggestions.slice(startIndex, startIndex + maxCount - 1);
            }
            this.suggestions = this.convertSuggestionsToSuggestionItems(newSuggestions);
            this.currentIndex = selectedIndex ? selectedIndex : 0;
            if (selectedIndex === -1) {
                this.currentSuggestion = undefined;
            }
            else if (selectedIndex !== undefined) {
                this.suggestions[selectedIndex].selected = true;
                this.currentSuggestion = this.suggestions[selectedIndex];
            }
        }
        else {
            this.suggestions = [];
            this.currentIndex = -1;
            this.currentSuggestion = undefined;
        }
    };
    /**
     * Increments the suggestion index and gets the next suggestion in the list.
     */
    SuggestionsController.prototype.nextSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex < this.suggestions.length - 1) {
                this.setSelectedSuggestion(this.currentIndex + 1);
                return true;
            }
            else if (this.currentIndex === this.suggestions.length - 1) {
                this.setSelectedSuggestion(0);
                return true;
            }
        }
        return false;
    };
    /**
     * Decrements the suggestion index and gets the previous suggestion in the list.
     */
    SuggestionsController.prototype.previousSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex > 0) {
                this.setSelectedSuggestion(this.currentIndex - 1);
                return true;
            }
            else if (this.currentIndex === 0) {
                this.setSelectedSuggestion(this.suggestions.length - 1);
                return true;
            }
        }
        return false;
    };
    SuggestionsController.prototype.getSuggestions = function () {
        return this.suggestions;
    };
    SuggestionsController.prototype.getCurrentItem = function () {
        return this.currentSuggestion;
    };
    SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
        return this.suggestions[index];
    };
    SuggestionsController.prototype.hasSelectedSuggestion = function () {
        return this.currentSuggestion ? true : false;
    };
    SuggestionsController.prototype.removeSuggestion = function (index) {
        this.suggestions.splice(index, 1);
    };
    SuggestionsController.prototype.createGenericSuggestion = function (itemToConvert) {
        var itemToAdd = this.convertSuggestionsToSuggestionItems([itemToConvert])[0];
        this.currentSuggestion = itemToAdd;
    };
    SuggestionsController.prototype.convertSuggestionsToSuggestionItems = function (suggestions) {
        return Array.isArray(suggestions) ? suggestions.map(this._ensureSuggestionModel) : [];
    };
    SuggestionsController.prototype.deselectAllSuggestions = function () {
        if (this.currentIndex > -1) {
            this.suggestions[this.currentIndex].selected = false;
            this.currentIndex = -1;
        }
    };
    SuggestionsController.prototype.setSelectedSuggestion = function (index) {
        if (index > this.suggestions.length - 1 || index < 0) {
            this.currentIndex = 0;
            this.currentSuggestion.selected = false;
            this.currentSuggestion = this.suggestions[0];
            this.currentSuggestion.selected = true;
        }
        else {
            if (this.currentIndex > -1) {
                this.suggestions[this.currentIndex].selected = false;
            }
            this.suggestions[index].selected = true;
            this.currentIndex = index;
            this.currentSuggestion = this.suggestions[index];
        }
    };
    return SuggestionsController;
}());

//# sourceMappingURL=SuggestionsController.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.types.js
var BasePicker_types = __webpack_require__("KSXz");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/ie11Detector.js
var ie11Detector = __webpack_require__("9fwj");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getDocument.js
var getDocument = __webpack_require__("41aL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Autofill/Autofill.js




var SELECTION_FORWARD = 'forward';
var SELECTION_BACKWARD = 'backward';
/**
 * {@docCategory Autofill}
 */
var Autofill_Autofill = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(Autofill, _super);
    function Autofill(props) {
        var _this = _super.call(this, props) || this;
        _this._inputElement = react["createRef"]();
        _this._autoFillEnabled = true;
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and languages like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionStart = function (ev) {
            _this.setState({ isComposing: true });
            _this._autoFillEnabled = false;
        };
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and languages like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionUpdate = function () {
            if (Object(ie11Detector["a" /* isIE11 */])()) {
                _this._updateValue(_this._getCurrentInputValue(), true);
            }
        };
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and languages like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionEnd = function (ev) {
            var inputValue = _this._getCurrentInputValue();
            _this._tryEnableAutofill(inputValue, _this.value, false, true);
            _this.setState({ isComposing: false });
            // Due to timing, this needs to be async, otherwise no text will be selected.
            _this._async.setTimeout(function () {
                // it's technically possible that the value of isComposing is reset during this timeout,
                // so explicitly trigger this with composing=true here, since it is supposed to be the
                // update for composition end
                _this._updateValue(_this._getCurrentInputValue(), false);
            }, 0);
        };
        _this._onClick = function () {
            if (_this.value && _this.value !== '' && _this._autoFillEnabled) {
                _this._autoFillEnabled = false;
            }
        };
        _this._onKeyDown = function (ev) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the event is actively being composed, then don't alert autofill.
            // Right now typing does not have isComposing, once that has been fixed any should be removed.
            if (!ev.nativeEvent.isComposing) {
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case KeyCodes["a" /* KeyCodes */].backspace:
                        _this._autoFillEnabled = false;
                        break;
                    case KeyCodes["a" /* KeyCodes */].left:
                    case KeyCodes["a" /* KeyCodes */].right:
                        if (_this._autoFillEnabled) {
                            _this.setState(function (prev) { return ({
                                inputValue: _this.props.suggestedDisplayValue || prev.inputValue,
                            }); });
                            _this._autoFillEnabled = false;
                        }
                        break;
                    default:
                        if (!_this._autoFillEnabled) {
                            // eslint-disable-next-line deprecation/deprecation
                            if (_this.props.enableAutofillOnKeyPress.indexOf(ev.which) !== -1) {
                                _this._autoFillEnabled = true;
                            }
                        }
                        break;
                }
            }
        };
        _this._onInputChanged = function (ev) {
            var value = _this._getCurrentInputValue(ev);
            if (!_this.state.isComposing) {
                _this._tryEnableAutofill(value, _this.value, ev.nativeEvent.isComposing);
            }
            // If it is not IE11 and currently composing, update the value
            if (!(Object(ie11Detector["a" /* isIE11 */])() && _this.state.isComposing)) {
                var nativeEventComposing = ev.nativeEvent.isComposing;
                var isComposing = nativeEventComposing === undefined ? _this.state.isComposing : nativeEventComposing;
                _this._updateValue(value, isComposing);
            }
        };
        _this._onChanged = function () {
            // Swallow this event, we don't care about it
            // We must provide it because React PropTypes marks it as required, but onInput serves the correct purpose
            return;
        };
        /**
         * Updates the current input value as well as getting a new display value.
         * @param newValue - The new value from the input
         */
        _this._updateValue = function (newValue, composing) {
            var _a;
            // Only proceed if the value is nonempty and is different from the old value
            // This is to work around the fact that, in IE 11, inputs with a placeholder fire an onInput event on focus
            if (!newValue && newValue === _this.value) {
                return;
            }
            // eslint-disable-next-line deprecation/deprecation
            var onInputChange = (_a = _this.props, _a.onInputChange), onInputValueChange = _a.onInputValueChange;
            if (onInputChange) {
                newValue = (onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(newValue, composing)) || '';
            }
            _this.setState({ inputValue: newValue }, function () { return onInputValueChange === null || onInputValueChange === void 0 ? void 0 : onInputValueChange(newValue, composing); });
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        _this.state = {
            inputValue: props.defaultVisibleValue || '',
            isComposing: false,
        };
        return _this;
    }
    Autofill.getDerivedStateFromProps = function (props, state) {
        // eslint-disable-next-line deprecation/deprecation
        if (props.updateValueInWillReceiveProps) {
            // eslint-disable-next-line deprecation/deprecation
            var updatedInputValue = props.updateValueInWillReceiveProps();
            // Don't update if we have a null value or the value isn't changing
            // the value should still update if an empty string is passed in
            if (updatedInputValue !== null && updatedInputValue !== state.inputValue && !state.isComposing) {
                return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, state), { inputValue: updatedInputValue });
            }
        }
        return null;
    };
    Object.defineProperty(Autofill.prototype, "cursorLocation", {
        get: function () {
            if (this._inputElement.current) {
                var inputElement = this._inputElement.current;
                if (inputElement.selectionDirection !== SELECTION_FORWARD) {
                    return inputElement.selectionEnd;
                }
                else {
                    return inputElement.selectionStart;
                }
            }
            else {
                return -1;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "isValueSelected", {
        get: function () {
            return Boolean(this.inputElement && this.inputElement.selectionStart !== this.inputElement.selectionEnd);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "value", {
        get: function () {
            return this._getControlledValue() || this.state.inputValue || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionStart", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionStart : -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionEnd", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionEnd : -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "inputElement", {
        get: function () {
            return this._inputElement.current;
        },
        enumerable: false,
        configurable: true
    });
    Autofill.prototype.componentDidUpdate = function (_, _1, cursor) {
        var _a;
        var _b;
        var suggestedDisplayValue = (_a = this.props, _a.suggestedDisplayValue), shouldSelectFullInputValueInComponentDidUpdate = _a.shouldSelectFullInputValueInComponentDidUpdate, preventValueSelection = _a.preventValueSelection;
        var differenceIndex = 0;
        if (preventValueSelection) {
            return;
        }
        var document = ((_b = this.context) === null || _b === void 0 ? void 0 : _b.window.document) || Object(getDocument["a" /* getDocument */])(this._inputElement.current);
        var isFocused = this._inputElement.current && this._inputElement.current === (document === null || document === void 0 ? void 0 : document.activeElement);
        if (isFocused &&
            this._autoFillEnabled &&
            this.value &&
            suggestedDisplayValue &&
            _doesTextStartWith(suggestedDisplayValue, this.value)) {
            var shouldSelectFullRange = false;
            if (shouldSelectFullInputValueInComponentDidUpdate) {
                shouldSelectFullRange = shouldSelectFullInputValueInComponentDidUpdate();
            }
            if (shouldSelectFullRange) {
                this._inputElement.current.setSelectionRange(0, suggestedDisplayValue.length, SELECTION_BACKWARD);
            }
            else {
                while (differenceIndex < this.value.length &&
                    this.value[differenceIndex].toLocaleLowerCase() === suggestedDisplayValue[differenceIndex].toLocaleLowerCase()) {
                    differenceIndex++;
                }
                if (differenceIndex > 0) {
                    this._inputElement.current.setSelectionRange(differenceIndex, suggestedDisplayValue.length, SELECTION_BACKWARD);
                }
            }
        }
        else if (this._inputElement.current) {
            if (cursor !== null && !this._autoFillEnabled && !this.state.isComposing) {
                this._inputElement.current.setSelectionRange(cursor.start, cursor.end, cursor.dir);
            }
        }
    };
    Autofill.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    Autofill.prototype.render = function () {
        var nativeProps = Object(properties["h" /* getNativeProps */])(this.props, properties["l" /* inputProperties */]);
        var style = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this.props.style), { fontFamily: 'inherit' });
        return (react["createElement"]("input", Object(tslib_es6["a" /* __assign */])({ autoCapitalize: "off", autoComplete: "off", "aria-autocomplete": 'both' }, nativeProps, { style: style, ref: this._inputElement, value: this._getDisplayValue(), onCompositionStart: this._onCompositionStart, onCompositionUpdate: this._onCompositionUpdate, onCompositionEnd: this._onCompositionEnd, 
            // TODO (Fabric 8?) - switch to calling only onChange. See notes in TextField._onInputChange.
            onChange: this._onChanged, onInput: this._onInputChanged, onKeyDown: this._onKeyDown, onClick: this.props.onClick ? this.props.onClick : this._onClick, "data-lpignore": true })));
    };
    Autofill.prototype.focus = function () {
        this._inputElement.current && this._inputElement.current.focus();
    };
    Autofill.prototype.clear = function () {
        this._autoFillEnabled = true;
        this._updateValue('', false);
        this._inputElement.current && this._inputElement.current.setSelectionRange(0, 0);
    };
    Autofill.prototype.getSnapshotBeforeUpdate = function () {
        var _a, _b;
        var inel = this._inputElement.current;
        if (inel && inel.selectionStart !== this.value.length) {
            return {
                start: (_a = inel.selectionStart) !== null && _a !== void 0 ? _a : inel.value.length,
                end: (_b = inel.selectionEnd) !== null && _b !== void 0 ? _b : inel.value.length,
                dir: inel.selectionDirection || 'backward' || 'none',
            };
        }
        return null;
    };
    Autofill.prototype._getCurrentInputValue = function (ev) {
        if (ev && ev.target && ev.target.value) {
            return ev.target.value;
        }
        else if (this.inputElement && this.inputElement.value) {
            return this.inputElement.value;
        }
        else {
            return '';
        }
    };
    /**
     * Attempts to enable autofill. Whether or not autofill is enabled depends on the input value,
     * whether or not any text is selected, and only if the new input value is longer than the old input value.
     * Autofill should never be set to true if the value is composing. Once compositionEnd is called, then
     * it should be completed.
     * See https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent for more information on composition.
     * @param newValue - new input value
     * @param oldValue - old input value
     * @param isComposing - if true then the text is actively being composed and it has not completed.
     * @param isComposed - if the text is a composed text value.
     */
    Autofill.prototype._tryEnableAutofill = function (newValue, oldValue, isComposing, isComposed) {
        if (!isComposing &&
            newValue &&
            this._inputElement.current &&
            this._inputElement.current.selectionStart === newValue.length &&
            !this._autoFillEnabled &&
            (newValue.length > oldValue.length || isComposed)) {
            this._autoFillEnabled = true;
        }
    };
    Autofill.prototype._getDisplayValue = function () {
        if (this._autoFillEnabled) {
            return _getDisplayValue(this.value, this.props.suggestedDisplayValue);
        }
        return this.value;
    };
    Autofill.prototype._getControlledValue = function () {
        var value = this.props.value;
        if (value === undefined || typeof value === 'string') {
            return value;
        }
        // eslint-disable-next-line no-console
        console.warn("props.value of Autofill should be a string, but it is ".concat(value, " with type of ").concat(typeof value));
        return value.toString();
    };
    Autofill.defaultProps = {
        enableAutofillOnKeyPress: [KeyCodes["a" /* KeyCodes */].down, KeyCodes["a" /* KeyCodes */].up],
    };
    // need to check WindowContext to get the provided document
    Autofill.contextType = WindowProvider["a" /* WindowContext */];
    return Autofill;
}(react["Component"]));
/**
 * Returns a string that should be used as the display value.
 * It evaluates this based on whether or not the suggested value starts with the input value
 * and whether or not autofill is enabled.
 * @param inputValue - the value that the input currently has.
 * @param suggestedDisplayValue - the possible full value
 */
function _getDisplayValue(inputValue, suggestedDisplayValue) {
    var displayValue = inputValue;
    if (suggestedDisplayValue && inputValue && _doesTextStartWith(suggestedDisplayValue, displayValue)) {
        displayValue = suggestedDisplayValue;
    }
    return displayValue;
}
function _doesTextStartWith(text, startWith) {
    if (!text || !startWith) {
        return false;
    }
    if (false) { var val, _i, _a; }
    return text.toLocaleLowerCase().indexOf(startWith.toLocaleLowerCase()) === 0;
}
//# sourceMappingURL=Autofill.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.scss.js
/* eslint-disable */

Object(lib_es6["a" /* loadStyles */])([{ "rawString": ".picker_94f06b16{position:relative}.pickerText_94f06b16{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a19f9d" }, { "rawString": ";min-width:180px;min-height:30px}.pickerText_94f06b16:hover{border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#323130" }, { "rawString": "}.pickerText_94f06b16.inputFocused_94f06b16{position:relative;border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}.pickerText_94f06b16.inputFocused_94f06b16:after{pointer-events:none;content:\"\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;border:2px solid " }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.pickerText_94f06b16.inputDisabled_94f06b16{position:relative;border-color:GrayText}.pickerText_94f06b16.inputDisabled_94f06b16:after{pointer-events:none;content:\"\";position:absolute;left:0;top:0;bottom:0;right:0;background-color:Window}}.pickerInput_94f06b16{height:34px;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:0;padding:0 6px 0;-ms-flex-item-align:end;align-self:flex-end}.pickerItems_94f06b16{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}.screenReaderOnly_94f06b16{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}" }]);
var picker = "picker_94f06b16";
var pickerText = "pickerText_94f06b16";
var inputFocused = "inputFocused_94f06b16";
var inputDisabled = "inputDisabled_94f06b16";
var pickerInput = "pickerInput_94f06b16";
var pickerItems = "pickerItems_94f06b16";
var screenReaderOnly = "screenReaderOnly_94f06b16";
//# sourceMappingURL=BasePicker.scss.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.js














var BasePicker_legacyStyles = BasePicker_scss_namespaceObject;
var EXTENDED_LOAD_TIME = 3000;
var BasePicker_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * Should be removed once new picker without inheritance is created
 */
function getStyledSuggestions(suggestionsType) {
    return Object(styled["a" /* styled */])(suggestionsType, Suggestions_styles_getStyles, undefined, {
        scope: 'Suggestions',
    });
}
/**
 * {@docCategory Pickers}
 */
var BasePicker_BasePicker = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BasePicker, _super);
    function BasePicker(basePickerProps) {
        var _this = _super.call(this, basePickerProps) || this;
        // Refs
        _this.root = react["createRef"]();
        _this.input = react["createRef"]();
        _this.suggestionElement = react["createRef"]();
        /**
         * @deprecated this is no longer necessary as typescript now supports generic elements
         */
        _this.SuggestionOfProperType = Suggestions_Suggestions;
        // eslint-disable-next-line deprecation/deprecation
        _this._styledSuggestions = getStyledSuggestions(_this.SuggestionOfProperType);
        _this._overrideScrollDismiss = false;
        _this.dismissSuggestions = function (ev) {
            var selectItemFunction = function () {
                var addItemOnDismiss = true;
                if (_this.props.onDismiss) {
                    addItemOnDismiss = _this.props.onDismiss(ev, _this.suggestionStore.currentSuggestion ? _this.suggestionStore.currentSuggestion.item : undefined);
                }
                if (!ev || (ev && !ev.defaultPrevented)) {
                    // Select the first suggestion if one is available and permitted by onDismiss when user leaves.
                    if (addItemOnDismiss !== false &&
                        _this.canAddItems() &&
                        _this.suggestionStore.hasSelectedSuggestion() &&
                        _this.state.suggestedDisplayValue) {
                        _this.addItemByIndex(0);
                    }
                }
            };
            if (_this.currentPromise) {
                _this.currentPromise.then(function () { return selectItemFunction(); });
            }
            else {
                selectItemFunction();
            }
            _this.setState({ suggestionsVisible: false });
        };
        _this.refocusSuggestions = function (keyCode) {
            _this.resetFocus();
            if (_this.suggestionStore.suggestions && _this.suggestionStore.suggestions.length > 0) {
                if (keyCode === KeyCodes["a" /* KeyCodes */].up) {
                    _this.suggestionStore.setSelectedSuggestion(_this.suggestionStore.suggestions.length - 1);
                }
                else if (keyCode === KeyCodes["a" /* KeyCodes */].down) {
                    _this.suggestionStore.setSelectedSuggestion(0);
                }
            }
        };
        _this.onInputChange = function (value) {
            _this.updateValue(value);
            _this.setState({
                moreSuggestionsAvailable: true,
                isMostRecentlyUsedVisible: false,
            });
        };
        _this.onSuggestionClick = function (ev, item, index) {
            _this.addItemByIndex(index);
        };
        _this.onSuggestionRemove = function (ev, item, index) {
            if (_this.props.onRemoveSuggestion) {
                _this.props.onRemoveSuggestion(item);
            }
            _this.suggestionStore.removeSuggestion(index);
        };
        _this.onInputFocus = function (ev) {
            _this.selection.setAllSelected(false);
            // Only trigger all of the focus if this component isn't already focused.
            // For example when an item is selected or removed from the selected list it should be treated
            // as though the input is still focused.
            if (!_this.state.isFocused) {
                _this._userTriggeredSuggestions();
                if (_this.props.inputProps && _this.props.inputProps.onFocus) {
                    _this.props.inputProps.onFocus(ev);
                }
            }
        };
        _this.onInputBlur = function (ev) {
            if (_this.props.inputProps && _this.props.inputProps.onBlur) {
                _this.props.inputProps.onBlur(ev);
            }
        };
        _this.onBlur = function (ev) {
            if (_this.state.isFocused) {
                // Only blur the entire component if an unrelated element gets focus.
                // Otherwise treat it as though it still has focus.
                // Do nothing if the blur is coming from something
                // inside the comboBox root or the comboBox menu since
                // it we are not really bluring from the whole comboBox
                var relatedTarget = ev.relatedTarget;
                if (ev.relatedTarget === null) {
                    // In IE11, due to lack of support, event.relatedTarget is always
                    // null making every onBlur call to be "outside" of the ComboBox
                    // even when it's not. Using document.activeElement is another way
                    // for us to be able to get what the relatedTarget without relying
                    // on the event
                    relatedTarget = Object(dom["a" /* getDocumentEx */])(_this.context).activeElement;
                }
                if (relatedTarget && !Object(elementContains["a" /* elementContains */])(_this.root.current, relatedTarget)) {
                    _this.setState({ isFocused: false });
                    if (_this.props.onBlur) {
                        _this.props.onBlur(ev);
                    }
                }
            }
        };
        /**
         * Resets focus to last element in wrapper div if clicking back into Picker that has hit item limit
         */
        _this.onWrapperClick = function (ev) {
            if (_this.state.items.length && !_this.canAddItems()) {
                _this.resetFocus(_this.state.items.length - 1);
            }
        };
        /**
         * Reveals suggestions any time the user clicks on the input element
         * without shifting focus.
         */
        _this.onClick = function (ev) {
            if (_this.props.inputProps !== undefined && _this.props.inputProps.onClick !== undefined) {
                _this.props.inputProps.onClick(ev);
            }
            // Only primary (left) clicks show suggestions.
            if (ev.button === 0) {
                _this._userTriggeredSuggestions();
            }
        };
        _this.onFocus = function () {
            if (!_this.state.isFocused) {
                _this.setState({ isFocused: true });
            }
        };
        _this.onKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            var keyCode = ev.which;
            switch (keyCode) {
                case KeyCodes["a" /* KeyCodes */].escape:
                    if (_this.state.suggestionsVisible) {
                        _this.setState({ suggestionsVisible: false });
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].tab:
                case KeyCodes["a" /* KeyCodes */].enter:
                    if (_this.suggestionElement.current && _this.suggestionElement.current.hasSuggestedActionSelected()) {
                        _this.suggestionElement.current.executeSelectedAction();
                    }
                    else if (!ev.shiftKey && _this.suggestionStore.hasSelectedSuggestion() && _this.state.suggestionsVisible) {
                        _this.completeSuggestion();
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    else {
                        _this._completeGenericSuggestion();
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].backspace:
                    if (!_this.props.disabled) {
                        _this.onBackspace(ev);
                    }
                    ev.stopPropagation();
                    break;
                case KeyCodes["a" /* KeyCodes */].del:
                    if (!_this.props.disabled) {
                        if (_this.input.current &&
                            ev.target === _this.input.current.inputElement &&
                            _this.state.suggestionsVisible &&
                            _this.suggestionStore.currentIndex !== -1) {
                            if (_this.props.onRemoveSuggestion) {
                                _this.props.onRemoveSuggestion(_this.suggestionStore.currentSuggestion.item);
                            }
                            _this.suggestionStore.removeSuggestion(_this.suggestionStore.currentIndex);
                            _this.forceUpdate();
                        }
                        else {
                            _this.onBackspace(ev);
                        }
                    }
                    ev.stopPropagation();
                    break;
                case KeyCodes["a" /* KeyCodes */].up:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current &&
                            _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this.forceUpdate();
                        }
                        else {
                            if (_this.suggestionElement.current &&
                                _this.suggestionElement.current.hasSuggestedAction() &&
                                _this.suggestionStore.currentIndex === 0) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusAboveSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.previousSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].down:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current &&
                            _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this.forceUpdate();
                        }
                        else {
                            if (_this.suggestionElement.current &&
                                _this.suggestionElement.current.hasSuggestedAction() &&
                                _this.suggestionStore.currentIndex + 1 === _this.suggestionStore.suggestions.length) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusBelowSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.nextSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
            }
        };
        _this.onItemChange = function (changedItem, index) {
            var items = _this.state.items;
            if (index >= 0) {
                var newItems = items;
                newItems[index] = changedItem;
                _this._updateSelectedItems(newItems);
            }
        };
        _this.onGetMoreResults = function () {
            _this.setState({
                isSearching: true,
            }, function () {
                if (_this.props.onGetMoreResults && _this.input.current) {
                    var suggestions = _this.props.onGetMoreResults(_this.input.current.value, _this.state.items);
                    var suggestionsArray = suggestions;
                    var suggestionsPromiseLike = suggestions;
                    if (Array.isArray(suggestionsArray)) {
                        _this.updateSuggestions(suggestionsArray);
                        _this.setState({ isSearching: false });
                    }
                    else if (suggestionsPromiseLike.then) {
                        suggestionsPromiseLike.then(function (newSuggestions) {
                            _this.updateSuggestions(newSuggestions);
                            _this.setState({ isSearching: false });
                        });
                    }
                }
                else {
                    _this.setState({ isSearching: false });
                }
                if (_this.input.current) {
                    _this.input.current.focus();
                }
                _this.setState({
                    moreSuggestionsAvailable: false,
                    isResultsFooterVisible: true,
                });
            });
        };
        _this.completeSelection = function (item) {
            _this.addItem(item);
            _this.updateValue('');
            if (_this.input.current) {
                _this.input.current.clear();
            }
            _this.setState({ suggestionsVisible: false });
        };
        _this.addItemByIndex = function (index) {
            _this.completeSelection(_this.suggestionStore.getSuggestionAtIndex(index).item);
        };
        _this.addItem = function (item) {
            var processedItem = _this.props.onItemSelected
                ? _this.props.onItemSelected(item)
                : item;
            if (processedItem === null) {
                return;
            }
            var processedItemObject = processedItem;
            var processedItemPromiseLike = processedItem;
            if (processedItemPromiseLike && processedItemPromiseLike.then) {
                processedItemPromiseLike.then(function (resolvedProcessedItem) {
                    var newItems = _this.state.items.concat([resolvedProcessedItem]);
                    _this._updateSelectedItems(newItems);
                });
            }
            else {
                var newItems = _this.state.items.concat([processedItemObject]);
                _this._updateSelectedItems(newItems);
            }
            _this.setState({ suggestedDisplayValue: '', selectionRemoved: undefined });
        };
        _this.removeItem = function (item) {
            var items = _this.state.items;
            var index = items.indexOf(item);
            if (index >= 0) {
                var newItems = items.slice(0, index).concat(items.slice(index + 1));
                _this.setState({ selectionRemoved: item });
                _this._updateSelectedItems(newItems);
                // reset selection removed text after a timeout so it isn't reached by screen reader virtual cursor.
                // the exact timing isn't important, the live region will fully read even if the text is removed.
                _this._async.setTimeout(function () {
                    _this.setState({ selectionRemoved: undefined });
                }, 1000);
            }
        };
        _this.removeItems = function (itemsToRemove) {
            var items = _this.state.items;
            var newItems = items.filter(function (item) { return itemsToRemove.indexOf(item) === -1; });
            _this._updateSelectedItems(newItems);
        };
        /**
         * @deprecated this is no longer necessary as focuszone has been removed
         */
        _this._shouldFocusZoneEnterInnerZone = function (ev) {
            // If suggestions are shown const up/down keys control them, otherwise allow them through to control the focusZone.
            if (_this.state.suggestionsVisible) {
                // eslint-disable-next-line deprecation/deprecation
                switch (ev.which) {
                    case KeyCodes["a" /* KeyCodes */].up:
                    case KeyCodes["a" /* KeyCodes */].down:
                        return true;
                }
            }
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === KeyCodes["a" /* KeyCodes */].enter) {
                return true;
            }
            return false;
        };
        _this._onResolveSuggestions = function (updatedValue) {
            var suggestions = _this.props.onResolveSuggestions(updatedValue, _this.state.items);
            if (suggestions !== null) {
                _this.updateSuggestionsList(suggestions, updatedValue);
            }
        };
        _this._completeGenericSuggestion = function () {
            if (_this.props.onValidateInput &&
                _this.input.current &&
                _this.props.onValidateInput(_this.input.current.value) !== BasePicker_types["a" /* ValidationState */].invalid &&
                _this.props.createGenericItem) {
                var itemToConvert = _this.props.createGenericItem(_this.input.current.value, _this.props.onValidateInput(_this.input.current.value));
                _this.suggestionStore.createGenericSuggestion(itemToConvert);
                _this.completeSuggestion();
            }
        };
        /**
         * This should be called when the user does something other than use text entry to trigger suggestions.
         *
         */
        _this._userTriggeredSuggestions = function () {
            if (!_this.state.suggestionsVisible) {
                var input = _this.input.current ? _this.input.current.value : '';
                if (!input) {
                    _this.onEmptyInputFocus();
                }
                else {
                    if (_this.suggestionStore.suggestions.length === 0) {
                        _this._onResolveSuggestions(input);
                    }
                    else {
                        _this.setState({
                            isMostRecentlyUsedVisible: false,
                            suggestionsVisible: true,
                        });
                    }
                }
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        var items = basePickerProps.selectedItems || basePickerProps.defaultSelectedItems || [];
        _this._id = Object(getId["a" /* getId */])();
        _this._ariaMap = {
            selectedItems: "selected-items-".concat(_this._id),
            selectedSuggestionAlert: "selected-suggestion-alert-".concat(_this._id),
            suggestionList: "suggestion-list-".concat(_this._id),
            combobox: "combobox-".concat(_this._id),
        };
        _this.suggestionStore = new SuggestionsController();
        _this.selection = new Selection["a" /* Selection */]({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
        _this.selection.setItems(items);
        _this.state = {
            items: items,
            suggestedDisplayValue: '',
            isMostRecentlyUsedVisible: false,
            moreSuggestionsAvailable: false,
            isFocused: false,
            isSearching: false,
            selectedIndices: [],
            selectionRemoved: undefined,
        };
        return _this;
    }
    BasePicker.getDerivedStateFromProps = function (newProps) {
        if (newProps.selectedItems) {
            return { items: newProps.selectedItems };
        }
        return null;
    };
    Object.defineProperty(BasePicker.prototype, "items", {
        get: function () {
            return this.state.items;
        },
        enumerable: false,
        configurable: true
    });
    BasePicker.prototype.componentDidMount = function () {
        this.selection.setItems(this.state.items);
        this._onResolveSuggestions = this._async.debounce(this._onResolveSuggestions, this.props.resolveDelay);
    };
    BasePicker.prototype.componentDidUpdate = function (oldProps, oldState) {
        var _this = this;
        if (this.state.items && this.state.items !== oldState.items) {
            var currentSelectedIndex = this.selection.getSelectedIndices()[0];
            this.selection.setItems(this.state.items);
            if (this.state.isFocused) {
                // Reset focus and selection so that selected item stays in sync if something
                // has been removed
                if (this.state.items.length < oldState.items.length) {
                    this.selection.setIndexSelected(currentSelectedIndex, false, true);
                    this.resetFocus(currentSelectedIndex);
                }
                // Reset focus to last item if the input is removed
                else if (this.state.items.length > oldState.items.length && !this.canAddItems()) {
                    this.resetFocus(this.state.items.length - 1);
                }
            }
        }
        // handle dismiss buffer after suggestions are opened
        if (this.state.suggestionsVisible && !oldState.suggestionsVisible) {
            this._overrideScrollDismiss = true;
            this._async.clearTimeout(this._overrideScrollDimissTimeout);
            this._overrideScrollDimissTimeout = this._async.setTimeout(function () {
                _this._overrideScrollDismiss = false;
            }, 100);
        }
    };
    BasePicker.prototype.componentWillUnmount = function () {
        if (this.currentPromise) {
            this.currentPromise = undefined;
        }
        this._async.dispose();
    };
    BasePicker.prototype.focus = function () {
        if (this.input.current) {
            this.input.current.focus();
        }
    };
    BasePicker.prototype.focusInput = function () {
        if (this.input.current) {
            this.input.current.focus();
        }
    };
    BasePicker.prototype.completeSuggestion = function (forceComplete) {
        if (this.suggestionStore.hasSelectedSuggestion() && this.input.current) {
            this.completeSelection(this.suggestionStore.currentSuggestion.item);
        }
        else if (forceComplete) {
            this._completeGenericSuggestion();
        }
    };
    BasePicker.prototype.render = function () {
        var _a, _b, _c;
        var suggestedDisplayValue = (_a = this.state, _a.suggestedDisplayValue), isFocused = _a.isFocused, items = _a.items;
        var className = (_b = this.props, _b.className), inputProps = _b.inputProps, disabled = _b.disabled, selectionAriaLabel = _b.selectionAriaLabel, selectionRole = (_c = _b.selectionRole, _c === void 0 ? 'list' : _c), theme = _b.theme, styles = _b.styles;
        var suggestionsVisible = !!this.state.suggestionsVisible;
        var suggestionsAvailable = suggestionsVisible ? this._ariaMap.suggestionList : undefined;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from BasePicker class because it
        // might be used by consumers who created custom pickers from extending from
        // this base class and have not used the new 'styles' prop.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // for every other already existing picker variant (PeoplePicker, TagPicker)
        // so that we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? BasePicker_getClassNames(styles, {
                theme: theme,
                className: className,
                isFocused: isFocused,
                disabled: disabled,
                inputClassName: inputProps && inputProps.className,
            })
            : {
                root: Object(css["a" /* css */])('ms-BasePicker', className ? className : ''),
                text: Object(css["a" /* css */])('ms-BasePicker-text', BasePicker_legacyStyles.pickerText, this.state.isFocused && BasePicker_legacyStyles.inputFocused),
                itemsWrapper: BasePicker_legacyStyles.pickerItems,
                input: Object(css["a" /* css */])('ms-BasePicker-input', BasePicker_legacyStyles.pickerInput, inputProps && inputProps.className),
                screenReaderText: BasePicker_legacyStyles.screenReaderOnly,
            };
        var comboLabel = this.props['aria-label'] || (inputProps === null || inputProps === void 0 ? void 0 : inputProps['aria-label']);
        // selectionAriaLabel is contained in a separate <span> rather than an aria-label on the items list
        // because if the items list has an aria-label, the aria-describedby on the input will only read
        // that label instead of all the selected items. Using aria-labelledby instead fixes this, since
        // aria-describedby and aria-labelledby will not follow a second aria-labelledby
        return (react["createElement"]("div", { ref: this.root, className: classNames.root, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onWrapperClick },
            this.renderCustomAlert(classNames.screenReaderText),
            react["createElement"]("span", { id: "".concat(this._ariaMap.selectedItems, "-label"), hidden: true }, selectionAriaLabel || comboLabel),
            react["createElement"](SelectionZone["a" /* SelectionZone */], { selection: this.selection, selectionMode: Selection_types["c" /* SelectionMode */].multiple },
                react["createElement"]("div", { className: classNames.text, "aria-owns": suggestionsAvailable },
                    items.length > 0 && (react["createElement"]("span", { id: this._ariaMap.selectedItems, className: classNames.itemsWrapper, role: selectionRole, "aria-labelledby": "".concat(this._ariaMap.selectedItems, "-label") }, this.renderItems())),
                    this.canAddItems() && (react["createElement"](Autofill_Autofill, Object(tslib_es6["a" /* __assign */])({ spellCheck: false }, inputProps, { className: classNames.input, componentRef: this.input, id: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.id) ? inputProps.id : this._ariaMap.combobox, onClick: this.onClick, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": suggestionsVisible ? this.getActiveDescendant() : undefined, "aria-controls": suggestionsAvailable, "aria-describedby": items.length > 0 ? this._ariaMap.selectedItems : undefined, "aria-expanded": suggestionsVisible, "aria-haspopup": "listbox", "aria-label": comboLabel, role: "combobox", disabled: disabled, onInputChange: this.props.onInputChange }))))),
            this.renderSuggestions()));
    };
    BasePicker.prototype.canAddItems = function () {
        var items = this.state.items;
        var itemLimit = this.props.itemLimit;
        return itemLimit === undefined || items.length < itemLimit;
    };
    BasePicker.prototype.renderSuggestions = function () {
        var _this = this;
        var StyledTypedSuggestions = this._styledSuggestions;
        return this.state.suggestionsVisible && this.input ? (react["createElement"](Callout["a" /* Callout */], Object(tslib_es6["a" /* __assign */])({ isBeakVisible: false, gapSpace: 5, target: this.input.current ? this.input.current.inputElement : undefined, onDismiss: this.dismissSuggestions, directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge, directionalHintForRTL: DirectionalHint["a" /* DirectionalHint */].bottomRightEdge, 
            // eslint-disable-next-line react/jsx-no-bind
            preventDismissOnEvent: function (ev) { return _this._preventDismissOnScrollOrResize(ev); } }, this.props.pickerCalloutProps),
            react["createElement"](StyledTypedSuggestions
            // Assumed to set in derived component's defaultProps
            , Object(tslib_es6["a" /* __assign */])({ 
                // Assumed to set in derived component's defaultProps
                onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, onSuggestionRemove: this.onSuggestionRemove, suggestions: this.suggestionStore.getSuggestions(), componentRef: this.suggestionElement, onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading, isExtendedLoading: this.state.suggestionsExtendedLoading, isSearching: this.state.isSearching, isMostRecentlyUsedVisible: this.state.isMostRecentlyUsedVisible, isResultsFooterVisible: this.state.isResultsFooterVisible, refocusSuggestions: this.refocusSuggestions, removeSuggestionAriaLabel: this.props.removeButtonAriaLabel, suggestionsListId: this._ariaMap.suggestionList, createGenericItem: this._completeGenericSuggestion }, this.props.pickerSuggestionsProps)))) : null;
    };
    BasePicker.prototype.renderItems = function () {
        var _a, _b;
        var _this = this;
        var disabled = (_a = this.props, _a.disabled), removeButtonAriaLabel = _a.removeButtonAriaLabel, removeButtonIconProps = _a.removeButtonIconProps;
        var onRenderItem = this.props.onRenderItem;
        var items = (_b = this.state, _b.items), selectedIndices = _b.selectedIndices;
        return items.map(function (item, index) {
            return onRenderItem({
                item: item,
                index: index,
                key: item.key ? item.key : index,
                selected: selectedIndices.indexOf(index) !== -1,
                onRemoveItem: function () { return _this.removeItem(item); },
                disabled: disabled,
                onItemChange: _this.onItemChange,
                removeButtonAriaLabel: removeButtonAriaLabel,
                removeButtonIconProps: removeButtonIconProps,
            });
        });
    };
    BasePicker.prototype.resetFocus = function (index) {
        var items = this.state.items;
        if (items.length) {
            // default to focusing the last item
            index = index !== null && index !== void 0 ? index : items.length - 1;
            var newEl = this.root.current &&
                this.root.current.querySelectorAll('[data-selection-index] > button')[Math.min(index, items.length - 1)];
            if (newEl) {
                newEl.focus();
            }
        }
        else {
            if (this.input.current) {
                this.input.current.focus();
            }
        }
    };
    BasePicker.prototype.onSuggestionSelect = function () {
        if (this.suggestionStore.currentSuggestion) {
            var currentValue = this.input.current ? this.input.current.value : '';
            var itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, currentValue);
            this.setState({ suggestedDisplayValue: itemValue });
        }
    };
    BasePicker.prototype.onSelectionChange = function () {
        this.setState({
            selectedIndices: this.selection.getSelectedIndices(),
        });
    };
    BasePicker.prototype.updateSuggestions = function (suggestions) {
        var _a;
        var maxSuggestionsCount = (_a = this.props.pickerSuggestionsProps) === null || _a === void 0 ? void 0 : _a.resultsMaximumNumber;
        this.suggestionStore.updateSuggestions(suggestions, 0, maxSuggestionsCount);
        this.forceUpdate();
    };
    /**
     * Only to be called when there is nothing in the input. Checks to see if the consumer has
     * provided a function to resolve suggestions
     */
    BasePicker.prototype.onEmptyInputFocus = function () {
        var emptyResolveSuggestions = this.props.onEmptyResolveSuggestions
            ? this.props.onEmptyResolveSuggestions
            : // eslint-disable-next-line deprecation/deprecation
                this.props.onEmptyInputFocus;
        // Only attempt to resolve suggestions if it exists
        if (emptyResolveSuggestions) {
            var suggestions = emptyResolveSuggestions(this.state.items);
            this.updateSuggestionsList(suggestions);
            this.setState({
                isMostRecentlyUsedVisible: true,
                suggestionsVisible: true,
                moreSuggestionsAvailable: false,
            });
        }
    };
    BasePicker.prototype.updateValue = function (updatedValue) {
        this._onResolveSuggestions(updatedValue);
    };
    BasePicker.prototype.updateSuggestionsList = function (suggestions, updatedValue) {
        var _this = this;
        var _a;
        // Check to see if the returned value is an array, if it is then just pass it into the next function .
        // If the returned value is not an array then check to see if it's a promise or PromiseLike.
        // If it is then resolve it asynchronously.
        if (Array.isArray(suggestions)) {
            this._updateAndResolveValue(updatedValue, suggestions);
        }
        else if (suggestions && suggestions.then) {
            this.setState({
                suggestionsLoading: true,
            });
            this._startLoadTimer();
            // Clear suggestions
            this.suggestionStore.updateSuggestions([]);
            if (updatedValue !== undefined) {
                this.setState({
                    suggestionsVisible: this._getShowSuggestions(),
                });
            }
            else {
                this.setState({
                    suggestionsVisible: this.input.current && this.input.current.inputElement === ((_a = Object(dom["a" /* getDocumentEx */])(this.context)) === null || _a === void 0 ? void 0 : _a.activeElement),
                });
            }
            // Ensure that the promise will only use the callback if it was the most recent one.
            this.currentPromise = suggestions;
            suggestions.then(function (newSuggestions) {
                if (suggestions === _this.currentPromise) {
                    _this._updateAndResolveValue(updatedValue, newSuggestions);
                }
            });
        }
    };
    BasePicker.prototype.resolveNewValue = function (updatedValue, suggestions) {
        var _this = this;
        this.updateSuggestions(suggestions);
        var itemValue = undefined;
        if (this.suggestionStore.currentSuggestion) {
            itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, updatedValue);
        }
        // Only set suggestionloading to false after there has been time for the new suggestions to flow
        // to the suggestions list. This is to ensure that the suggestions are available before aria-activedescendant
        // is set so that screen readers will read out the first selected option.
        this.setState({
            suggestedDisplayValue: itemValue,
            suggestionsVisible: this._getShowSuggestions(),
        }, function () { return _this.setState({ suggestionsLoading: false, suggestionsExtendedLoading: false }); });
    };
    BasePicker.prototype.onChange = function (items) {
        if (this.props.onChange) {
            this.props.onChange(items);
        }
    };
    // This is protected because we may expect the backspace key to work differently in a different kind of picker.
    // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
    BasePicker.prototype.onBackspace = function (ev) {
        if ((this.state.items.length && !this.input.current) ||
            (this.input.current && !this.input.current.isValueSelected && this.input.current.cursorLocation === 0)) {
            if (this.selection.getSelectedCount() > 0) {
                this.removeItems(this.selection.getSelection());
            }
            else {
                this.removeItem(this.state.items[this.state.items.length - 1]);
            }
        }
    };
    BasePicker.prototype.getActiveDescendant = function () {
        var _a;
        if (this.state.suggestionsLoading) {
            return undefined;
        }
        var currentIndex = this.suggestionStore.currentIndex;
        if (currentIndex < 0) {
            // if the suggestions element has actions and the currentIndex does not point to a suggestion,
            // return the action id
            if ((_a = this.suggestionElement.current) === null || _a === void 0 ? void 0 : _a.hasSuggestedAction()) {
                return 'sug-selectedAction';
            }
            // If there are no suggestions and no action suggested, then return the ID for the no results found.
            if (this.suggestionStore.suggestions.length === 0) {
                return 'sug-noResultsFound';
            }
            return undefined;
        }
        else {
            return "sug-".concat(currentIndex);
        }
    };
    /** @deprecated use renderCustomAlert instead */
    BasePicker.prototype.getSuggestionsAlert = function (suggestionAlertClassName) {
        if (suggestionAlertClassName === void 0) { suggestionAlertClassName = BasePicker_legacyStyles.screenReaderOnly; }
        var currentIndex = this.suggestionStore.currentIndex;
        if (this.props.enableSelectedSuggestionAlert) {
            var selectedSuggestion = currentIndex > -1 ? this.suggestionStore.getSuggestionAtIndex(this.suggestionStore.currentIndex) : undefined;
            var selectedSuggestionAlertText = selectedSuggestion ? selectedSuggestion.ariaLabel : undefined;
            // keeping the id/className here for legacy support
            return (react["createElement"]("div", { id: this._ariaMap.selectedSuggestionAlert, className: suggestionAlertClassName }, "".concat(selectedSuggestionAlertText, " ")));
        }
    };
    BasePicker.prototype.renderCustomAlert = function (alertClassName) {
        var _a;
        if (alertClassName === void 0) { alertClassName = BasePicker_legacyStyles.screenReaderOnly; }
        var suggestionRemovedText = (_a = this.props.suggestionRemovedText, _a === void 0 ? 'removed {0}' : _a);
        var removedItemText = '';
        if (this.state.selectionRemoved) {
            var itemName = this._getTextFromItem(this.state.selectionRemoved, '');
            removedItemText = Object(string["a" /* format */])(suggestionRemovedText, itemName);
        }
        return (react["createElement"]("div", { className: alertClassName, id: this._ariaMap.selectedSuggestionAlert, "aria-live": "assertive" },
            // eslint-disable-next-line deprecation/deprecation
            this.getSuggestionsAlert(alertClassName),
            removedItemText));
    };
    // do not dismiss if the window resizes or scrolls within 100ms of opening
    // this prevents the Android issue where pickers immediately dismiss on open, because the keyboard appears
    BasePicker.prototype._preventDismissOnScrollOrResize = function (ev) {
        if (this._overrideScrollDismiss && (ev.type === 'scroll' || ev.type === 'resize')) {
            return true;
        }
        return false;
    };
    /** If suggestions are still loading after a predefined amount of time, set state to show user alert */
    BasePicker.prototype._startLoadTimer = function () {
        var _this = this;
        this._async.setTimeout(function () {
            if (_this.state.suggestionsLoading) {
                _this.setState({ suggestionsExtendedLoading: true });
            }
        }, EXTENDED_LOAD_TIME);
    };
    /**
     * Takes in the current updated value and either resolves it with the new suggestions
     * or if updated value is undefined then it clears out currently suggested items
     */
    BasePicker.prototype._updateAndResolveValue = function (updatedValue, newSuggestions) {
        var _a;
        if (updatedValue !== undefined) {
            this.resolveNewValue(updatedValue, newSuggestions);
        }
        else {
            var maxSuggestionsCount = (_a = this.props.pickerSuggestionsProps) === null || _a === void 0 ? void 0 : _a.resultsMaximumNumber;
            this.suggestionStore.updateSuggestions(newSuggestions, -1, maxSuggestionsCount);
            if (this.state.suggestionsLoading) {
                this.setState({
                    suggestionsLoading: false,
                    suggestionsExtendedLoading: false,
                });
            }
        }
    };
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If `selectedItems` is provided, this will act as a controlled component and it will not update its own state.
     */
    BasePicker.prototype._updateSelectedItems = function (items) {
        var _this = this;
        if (this.props.selectedItems) {
            // If the component is a controlled component then the controlling component will need to add or remove the items.
            this.onChange(items);
        }
        else {
            this.setState({ items: items }, function () {
                _this._onSelectedItemsUpdated(items);
            });
        }
    };
    BasePicker.prototype._onSelectedItemsUpdated = function (items) {
        this.onChange(items);
    };
    /**
     * Suggestions are normally shown after the user updates text and the text
     * is non-empty, but also when the user clicks on the input element.
     * @returns True if suggestions should be shown.
     */
    BasePicker.prototype._getShowSuggestions = function () {
        var _a;
        var areSuggestionsVisible = this.input.current !== undefined &&
            this.input.current !== null &&
            this.input.current.inputElement === ((_a = Object(dom["a" /* getDocumentEx */])(this.context)) === null || _a === void 0 ? void 0 : _a.activeElement) &&
            this.input.current.value !== '';
        return areSuggestionsVisible;
    };
    BasePicker.prototype._getTextFromItem = function (item, currentValue) {
        if (this.props.getTextFromItem) {
            return this.props.getTextFromItem(item, currentValue);
        }
        else {
            return '';
        }
    };
    BasePicker.contextType = WindowProvider["a" /* WindowContext */];
    return BasePicker;
}(react["Component"]));
var BasePicker_BasePickerListBelow = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BasePickerListBelow, _super);
    function BasePickerListBelow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePickerListBelow.prototype.render = function () {
        var _a = this.state, suggestedDisplayValue = _a.suggestedDisplayValue, isFocused = _a.isFocused;
        var _b = this.props, className = _b.className, inputProps = _b.inputProps, disabled = _b.disabled, selectionAriaLabel = _b.selectionAriaLabel, _c = _b.selectionRole, selectionRole = _c === void 0 ? 'list' : _c, theme = _b.theme, styles = _b.styles;
        var suggestionsVisible = !!this.state.suggestionsVisible;
        var suggestionsAvailable = suggestionsVisible ? this._ariaMap.suggestionList : undefined;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from BasePicker class because it
        // might be used by consumers who created custom pickers from extending from
        // this base class and have not used the new 'styles' prop.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // for every other already existing picker variant (PeoplePicker, TagPicker)
        // so that we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? BasePicker_getClassNames(styles, {
                theme: theme,
                className: className,
                isFocused: isFocused,
                inputClassName: inputProps && inputProps.className,
            })
            : {
                root: Object(css["a" /* css */])('ms-BasePicker', BasePicker_legacyStyles.picker, className ? className : ''),
                text: Object(css["a" /* css */])('ms-BasePicker-text', BasePicker_legacyStyles.pickerText, this.state.isFocused && BasePicker_legacyStyles.inputFocused, disabled && BasePicker_legacyStyles.inputDisabled),
                itemsWrapper: BasePicker_legacyStyles.pickerItems,
                input: Object(css["a" /* css */])('ms-BasePicker-input', BasePicker_legacyStyles.pickerInput, inputProps && inputProps.className),
                screenReaderText: BasePicker_legacyStyles.screenReaderOnly,
            };
        var comboLabel = this.props['aria-label'] || (inputProps === null || inputProps === void 0 ? void 0 : inputProps['aria-label']);
        return (react["createElement"]("div", { ref: this.root, onBlur: this.onBlur, onFocus: this.onFocus },
            react["createElement"]("div", { className: classNames.root, onKeyDown: this.onKeyDown },
                this.renderCustomAlert(classNames.screenReaderText),
                react["createElement"]("span", { id: "".concat(this._ariaMap.selectedItems, "-label"), hidden: true }, selectionAriaLabel || comboLabel),
                react["createElement"]("div", { className: classNames.text, "aria-owns": suggestionsAvailable },
                    react["createElement"](Autofill_Autofill, Object(tslib_es6["a" /* __assign */])({}, inputProps, { className: classNames.input, componentRef: this.input, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onClick: this.onClick, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": suggestionsVisible ? this.getActiveDescendant() : undefined, "aria-controls": suggestionsAvailable, "aria-expanded": suggestionsVisible, "aria-haspopup": "listbox", "aria-label": comboLabel, "aria-describedby": this.state.items.length > 0 ? this._ariaMap.selectedItems : undefined, role: "combobox", id: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.id) ? inputProps.id : this._ariaMap.combobox, disabled: disabled, onInputChange: this.props.onInputChange })))),
            this.renderSuggestions(),
            react["createElement"](SelectionZone["a" /* SelectionZone */], { selection: this.selection, selectionMode: Selection_types["c" /* SelectionMode */].single },
                react["createElement"]("div", { id: this._ariaMap.selectedItems, className: "ms-BasePicker-selectedItems" // just a className hook without any styles applied to it.
                    , role: selectionRole, "aria-labelledby": "".concat(this._ariaMap.selectedItems, "-label") }, this.renderItems()))));
    };
    BasePickerListBelow.prototype.onBackspace = function (ev) {
        // override the existing backspace method to not do anything because the list items appear below.
    };
    return BasePickerListBelow;
}(BasePicker_BasePicker));

//# sourceMappingURL=BasePicker.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.js + 1 modules
var PeoplePickerItem = __webpack_require__("xndG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.js + 2 modules
var Persona = __webpack_require__("tYdO");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.types.js
var Persona_types = __webpack_require__("Ggpd");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItemSuggestion.styles.js


var PeoplePickerItemSuggestion_styles_GlobalClassNames = {
    root: 'ms-PeoplePicker-personaContent',
    personaWrapper: 'ms-PeoplePicker-Persona',
};
function PeoplePickerItemSuggestion_styles_getStyles(props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(PeoplePickerItemSuggestion_styles_GlobalClassNames, theme);
    var textSelectorsStyles = {
        selectors: (_a = {},
            _a[".".concat(SuggestionsItemGlobalClassNames.isSuggested, " &")] = {
                selectors: (_b = {},
                    _b[lib["f" /* HighContrastSelector */]] = {
                        color: 'HighlightText',
                    },
                    _b),
            },
            _a[".".concat(classNames.root, ":hover &")] = {
                selectors: (_c = {},
                    _c[lib["f" /* HighContrastSelector */]] = {
                        color: 'HighlightText',
                    },
                    _c),
            },
            _a),
    };
    return {
        root: [
            classNames.root,
            {
                width: '100%',
                padding: '4px 12px',
            },
            className,
        ],
        personaWrapper: [
            classNames.personaWrapper,
            {
                width: 180,
            },
        ],
        subComponentStyles: {
            persona: {
                primaryText: textSelectorsStyles,
                secondaryText: textSelectorsStyles,
            },
        },
    };
}
//# sourceMappingURL=PeoplePickerItemSuggestion.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItemSuggestion.js





var PeoplePickerItemSuggestion_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var PeoplePickerItemSuggestionBase = function (props) {
    var personaProps = props.personaProps, suggestionsProps = props.suggestionsProps, compact = props.compact, styles = props.styles, theme = props.theme, className = props.className;
    var classNames = PeoplePickerItemSuggestion_getClassNames(styles, {
        theme: theme,
        className: (suggestionsProps && suggestionsProps.suggestionsItemClassName) || className,
    });
    var personaStyles = classNames.subComponentStyles && classNames.subComponentStyles.persona
        ? classNames.subComponentStyles.persona
        : undefined;
    return (react["createElement"]("div", { className: classNames.root },
        react["createElement"](Persona["a" /* Persona */], Object(tslib_es6["a" /* __assign */])({ size: Persona_types["c" /* PersonaSize */].size24, styles: personaStyles, className: classNames.personaWrapper, showSecondaryText: !compact, showOverflowTooltip: false }, personaProps))));
};
var PeoplePickerItemSuggestion = Object(styled["a" /* styled */])(PeoplePickerItemSuggestionBase, PeoplePickerItemSuggestion_styles_getStyles, undefined, { scope: 'PeoplePickerItemSuggestion' });
//# sourceMappingURL=PeoplePickerItemSuggestion.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.styles.js

var BasePicker_styles_GlobalClassNames = {
    root: 'ms-BasePicker',
    text: 'ms-BasePicker-text',
    itemsWrapper: 'ms-BasePicker-itemsWrapper',
    input: 'ms-BasePicker-input',
};
function BasePicker_styles_getStyles(props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme, isFocused = props.isFocused, inputClassName = props.inputClassName, disabled = props.disabled;
    if (!theme) {
        throw new Error('theme is undefined or null in base BasePicker getStyles function.');
    }
    var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var inputBorder = semanticColors.inputBorder, inputBorderHovered = semanticColors.inputBorderHovered, inputFocusBorderAlt = semanticColors.inputFocusBorderAlt;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(BasePicker_styles_GlobalClassNames, theme);
    // placeholder style constants
    var placeholderStyles = [
        fonts.medium,
        {
            color: semanticColors.inputPlaceholderText,
            opacity: 1,
            selectors: (_a = {},
                _a[lib["f" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                },
                _a),
        },
    ];
    var disabledPlaceholderStyles = {
        color: semanticColors.disabledText,
        selectors: (_b = {},
            _b[lib["f" /* HighContrastSelector */]] = {
                color: 'GrayText',
            },
            _b),
    };
    // The following lines are to create a semi-transparent color overlay for the disabled state with designer's approval.
    // @todo: investigate the performance cost of the calculation below and apply if negligible.
    //   Replacing with a static color for now.
    // const rgbColor: IRGB | undefined = cssColor(palette.neutralQuaternaryAlt);
    // const disabledOverlayColor = rgbColor ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.29)` : 'transparent';
    var disabledOverlayColor = 'rgba(218, 218, 218, 0.29)';
    return {
        root: [classNames.root, className, { position: 'relative' }],
        text: [
            classNames.text,
            {
                display: 'flex',
                position: 'relative',
                flexWrap: 'wrap',
                alignItems: 'center',
                boxSizing: 'border-box',
                minWidth: 180,
                minHeight: 30,
                border: "1px solid ".concat(inputBorder),
                borderRadius: effects.roundedCorner2,
            },
            !isFocused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: inputBorderHovered,
                    },
                },
            },
            isFocused && !disabled && Object(lib["y" /* getInputFocusStyle */])(inputFocusBorderAlt, effects.roundedCorner2),
            disabled && {
                borderColor: disabledOverlayColor,
                selectors: (_c = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            background: disabledOverlayColor,
                        }
                    },
                    _c[lib["f" /* HighContrastSelector */]] = {
                        borderColor: 'GrayText',
                        selectors: {
                            ':after': {
                                background: 'none',
                            },
                        },
                    },
                    _c),
            },
        ],
        itemsWrapper: [
            classNames.itemsWrapper,
            {
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '100%',
            },
        ],
        input: [
            classNames.input,
            fonts.medium,
            {
                height: 30,
                border: 'none',
                flexGrow: 1,
                outline: 'none',
                padding: '0 6px 0',
                alignSelf: 'flex-end',
                borderRadius: effects.roundedCorner2,
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                    '&:placeholder-shown': {
                        textOverflow: 'ellipsis',
                    },
                },
            },
            Object(lib["z" /* getPlaceholderStyles */])(placeholderStyles),
            disabled && Object(lib["z" /* getPlaceholderStyles */])(disabledPlaceholderStyles),
            inputClassName,
        ],
        screenReaderText: lib["C" /* hiddenContentStyle */],
    };
}
//# sourceMappingURL=BasePicker.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePicker.js








/**
 * {@docCategory PeoplePicker}
 */
var PeoplePicker_BasePeoplePicker = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BasePeoplePicker, _super);
    function BasePeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeoplePicker;
}(BasePicker_BasePicker));

/**
 * {@docCategory PeoplePicker}
 */
var PeoplePicker_MemberListPeoplePicker = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(MemberListPeoplePicker, _super);
    function MemberListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MemberListPeoplePicker;
}(BasePicker_BasePickerListBelow));

/**
 * Standard People Picker.
 * {@docCategory PeoplePicker}
 */
var PeoplePicker_NormalPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(NormalPeoplePickerBase, _super);
    function NormalPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for NormalPeoplePicker. */
    NormalPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react["createElement"](PeoplePickerItem["a" /* PeoplePickerItem */], Object(tslib_es6["a" /* __assign */])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react["createElement"](PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return NormalPeoplePickerBase;
}(PeoplePicker_BasePeoplePicker));
/**
 * Compact layout. It uses personas without secondary text when displaying search results.
 * {@docCategory PeoplePicker}
 */
var PeoplePicker_CompactPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(CompactPeoplePickerBase, _super);
    function CompactPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for CompactPeoplePicker. */
    CompactPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react["createElement"](PeoplePickerItem["a" /* PeoplePickerItem */], Object(tslib_es6["a" /* __assign */])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react["createElement"](PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps, compact: true })); },
        createGenericItem: createGenericItem,
    };
    return CompactPeoplePickerBase;
}(PeoplePicker_BasePeoplePicker));
/**
 * MemberList layout. The selected people show up below the search box.
 * {@docCategory PeoplePicker}
 */
var PeoplePicker_ListPeoplePickerBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ListPeoplePickerBase, _super);
    function ListPeoplePickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Default props for ListPeoplePicker. */
    ListPeoplePickerBase.defaultProps = {
        onRenderItem: function (props) { return react["createElement"](PeoplePickerItem["a" /* PeoplePickerItem */], Object(tslib_es6["a" /* __assign */])({}, props)); },
        onRenderSuggestionsItem: function (personaProps, suggestionsProps) { return (react["createElement"](PeoplePickerItemSuggestion, { personaProps: personaProps, suggestionsProps: suggestionsProps })); },
        createGenericItem: createGenericItem,
    };
    return ListPeoplePickerBase;
}(PeoplePicker_MemberListPeoplePicker));
/**
 * {@docCategory PeoplePicker}
 */
function createGenericItem(name, currentValidationState) {
    var personaToConvert = {
        key: name,
        primaryText: name,
        imageInitials: '!',
        ValidationState: currentValidationState,
    };
    if (currentValidationState !== BasePicker_types["a" /* ValidationState */].warning) {
        personaToConvert.imageInitials = Object(initials["a" /* getInitials */])(name, Object(rtl["a" /* getRTL */])());
    }
    return personaToConvert;
}
var NormalPeoplePicker = Object(styled["a" /* styled */])(PeoplePicker_NormalPeoplePickerBase, BasePicker_styles_getStyles, undefined, {
    scope: 'NormalPeoplePicker',
});
var CompactPeoplePicker = Object(styled["a" /* styled */])(PeoplePicker_CompactPeoplePickerBase, BasePicker_styles_getStyles, undefined, {
    scope: 'CompactPeoplePicker',
});
var ListPeoplePicker = Object(styled["a" /* styled */])(PeoplePicker_ListPeoplePickerBase, BasePicker_styles_getStyles, undefined, {
    scope: 'ListPeoplePickerBase',
});
//# sourceMappingURL=PeoplePicker.js.map

/***/ }),

/***/ "ghfI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ProgressIndicator; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ProgressIndicator/ProgressIndicator.base.js



var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
// if the percentComplete is near 0, don't animate it.
// This prevents animations on reset to 0 scenarios
var ZERO_THRESHOLD = 0.01;
/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var ProgressIndicator_base_ProgressIndicatorBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ProgressIndicatorBase, _super);
    function ProgressIndicatorBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderProgress = function (props) {
            var _a, _b;
            var ariaLabel = (_a = _this.props, _a.ariaLabel), ariaValueText = _a.ariaValueText, barHeight = _a.barHeight, className = _a.className, description = _a.description, 
            // eslint-disable-next-line deprecation/deprecation
            label = (_b = _a.label, _b === void 0 ? _this.props.title : _b), styles = _a.styles, theme = _a.theme;
            var percentComplete = typeof _this.props.percentComplete === 'number'
                ? Math.min(100, Math.max(0, _this.props.percentComplete * 100))
                : undefined;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                barHeight: barHeight,
                indeterminate: percentComplete === undefined ? true : false,
            });
            var progressBarStyles = {
                width: percentComplete !== undefined ? percentComplete + '%' : undefined,
                transition: percentComplete !== undefined && percentComplete < ZERO_THRESHOLD ? 'none' : undefined,
            };
            var ariaValueMin = percentComplete !== undefined ? 0 : undefined;
            var ariaValueMax = percentComplete !== undefined ? 100 : undefined;
            var ariaValueNow = percentComplete !== undefined ? Math.floor(percentComplete) : undefined;
            return (react["createElement"]("div", { className: classNames.itemProgress },
                react["createElement"]("div", { className: classNames.progressTrack }),
                react["createElement"]("div", { className: classNames.progressBar, style: progressBarStyles, role: "progressbar", "aria-describedby": description ? _this._descriptionId : undefined, "aria-label": ariaLabel, "aria-labelledby": label ? _this._labelId : undefined, "aria-valuemin": ariaValueMin, "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText })));
        };
        var id = Object(getId["a" /* getId */])('progress-indicator');
        _this._labelId = id + '-label';
        _this._descriptionId = id + '-description';
        return _this;
    }
    ProgressIndicatorBase.prototype.render = function () {
        var _a, _b, _c;
        var barHeight = (_a = this.props, _a.barHeight), className = _a.className, 
        // eslint-disable-next-line deprecation/deprecation
        label = (_b = _a.label, _b === void 0 ? this.props.title : _b), // Fall back to deprecated value.
        description = _a.description, styles = _a.styles, theme = _a.theme, progressHidden = _a.progressHidden, onRenderProgress = (_c = _a.onRenderProgress, _c === void 0 ? this._onRenderProgress : _c);
        var percentComplete = typeof this.props.percentComplete === 'number'
            ? Math.min(100, Math.max(0, this.props.percentComplete * 100))
            : undefined;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            barHeight: barHeight,
            indeterminate: percentComplete === undefined ? true : false,
        });
        return (react["createElement"]("div", { className: classNames.root },
            label ? (react["createElement"]("div", { id: this._labelId, className: classNames.itemName }, label)) : null,
            !progressHidden
                ? onRenderProgress(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this.props), { percentComplete: percentComplete }), this._onRenderProgress)
                : null,
            description ? (react["createElement"]("div", { id: this._descriptionId, className: classNames.itemDescription }, description)) : null));
    };
    ProgressIndicatorBase.defaultProps = {
        label: '',
        description: '',
        width: 180,
    };
    return ProgressIndicatorBase;
}(react["Component"]));
//# sourceMappingURL=ProgressIndicator.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ProgressIndicator/ProgressIndicator.styles.js



var GlobalClassNames = {
    root: 'ms-ProgressIndicator',
    itemName: 'ms-ProgressIndicator-itemName',
    itemDescription: 'ms-ProgressIndicator-itemDescription',
    itemProgress: 'ms-ProgressIndicator-itemProgress',
    progressTrack: 'ms-ProgressIndicator-progressTrack',
    progressBar: 'ms-ProgressIndicator-progressBar',
};
var IndeterminateProgress = Object(memoize["b" /* memoizeFunction */])(function () {
    return Object(lib["D" /* keyframes */])({
        '0%': {
            left: '-30%',
        },
        '100%': {
            left: '100%',
        },
    });
});
var IndeterminateProgressRTL = Object(memoize["b" /* memoizeFunction */])(function () {
    return Object(lib["D" /* keyframes */])({
        '100%': {
            right: '-30%',
        },
        '0%': {
            right: '100%',
        },
    });
});
var getStyles = function (props) {
    var _a, _b, _c;
    var isRTL = Object(rtl["a" /* getRTL */])(props.theme);
    var className = props.className, indeterminate = props.indeterminate, theme = props.theme, _d = props.barHeight, barHeight = _d === void 0 ? 2 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var marginBetweenText = 8;
    var textHeight = 18;
    var progressTrackColor = palette.neutralLight;
    return {
        root: [classNames.root, fonts.medium, className],
        itemName: [
            classNames.itemName,
            lib["G" /* noWrap */],
            {
                color: semanticColors.bodyText,
                paddingTop: marginBetweenText / 2,
                lineHeight: textHeight + 2,
            },
        ],
        itemDescription: [
            classNames.itemDescription,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.small.fontSize,
                lineHeight: textHeight,
            },
        ],
        itemProgress: [
            classNames.itemProgress,
            {
                position: 'relative',
                overflow: 'hidden',
                height: barHeight,
                padding: "".concat(marginBetweenText, "px 0"),
            },
        ],
        progressTrack: [
            classNames.progressTrack,
            {
                position: 'absolute',
                width: '100%',
                height: barHeight,
                backgroundColor: progressTrackColor,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
        ],
        progressBar: [
            {
                backgroundColor: palette.themePrimary,
                height: barHeight,
                position: 'absolute',
                transition: 'width .3s ease',
                width: 0,
                selectors: (_b = {},
                    _b[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ backgroundColor: 'highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _b),
            },
            indeterminate
                ? {
                    position: 'absolute',
                    minWidth: '33%',
                    background: "linear-gradient(to right, ".concat(progressTrackColor, " 0%, ") +
                        "".concat(palette.themePrimary, " 50%, ").concat(progressTrackColor, " 100%)"),
                    animation: "".concat(isRTL ? IndeterminateProgressRTL() : IndeterminateProgress(), " 3s infinite"),
                    selectors: (_c = {},
                        _c[lib["f" /* HighContrastSelector */]] = {
                            background: "highlight",
                        },
                        _c),
                }
                : {
                    transition: 'width .15s linear',
                },
            classNames.progressBar,
        ],
    };
};
//# sourceMappingURL=ProgressIndicator.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ProgressIndicator/ProgressIndicator.js



/**
 * ProgressIndicator description
 */
var ProgressIndicator = Object(styled["a" /* styled */])(ProgressIndicator_base_ProgressIndicatorBase, getStyles, undefined, { scope: 'ProgressIndicator' });
//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ "glTW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NZSY");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("41aL");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lE+F");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jY6u");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("BLix");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6ztV");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("e6CW");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Eo9X");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nTLZ");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("owwJ");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("7R02");





function useScrollbarAsync(props, root) {
    var async = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_9__[/* useAsync */ "a"])();
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), needsVerticalScrollBarState = _a[0], setNeedsVerticalScrollBar = _a[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        async.requestAnimationFrame(function () {
            var _a;
            // If overflowY is overridden, don't waste time calculating whether the scrollbar is necessary.
            if (props.style && props.style.overflowY) {
                return;
            }
            var needsVerticalScrollBar = false;
            if (root && root.current && ((_a = root.current) === null || _a === void 0 ? void 0 : _a.firstElementChild)) {
                // ClientHeight returns the client height of an element rounded to an
                // integer. On some browsers at different zoom levels this rounding
                // can generate different results for the root container and child even
                // though they are the same height. This causes us to show a scroll bar
                // when not needed. Ideally we would use BoundingClientRect().height
                // instead however seems that the API is 90% slower than using ClientHeight.
                // Therefore instead we will calculate the difference between heights and
                // allow for a 1px difference to still be considered ok and not show the
                // scroll bar.
                var rootHeight = root.current.clientHeight;
                var firstChildHeight = root.current.firstElementChild.clientHeight;
                if (rootHeight > 0 && firstChildHeight > rootHeight) {
                    needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
                }
            }
            if (needsVerticalScrollBarState !== needsVerticalScrollBar) {
                setNeedsVerticalScrollBar(needsVerticalScrollBar);
            }
        });
        return function () { return async.dispose(); };
    });
    return needsVerticalScrollBarState;
}
function defaultFocusRestorer(options) {
    var originalElement = options.originalElement, containsFocus = options.containsFocus;
    if (originalElement && containsFocus && originalElement !== Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "a"])()) {
        // Make sure that the focus method actually exists
        // In some cases the object might exist but not be a real element.
        // This is primarily for IE 11 and should be removed once IE 11 is no longer in use.
        // This is wrapped in a setTimeout because of a React 16 bug that is resolved in 17.
        // Once we move to 17, the setTimeout should be removed (ref: https://github.com/facebook/react/issues/17894#issuecomment-656094405)
        setTimeout(function () {
            var _a;
            (_a = originalElement.focus) === null || _a === void 0 ? void 0 : _a.call(originalElement);
        }, 0);
    }
}
function useRestoreFocus(props, root) {
    var _a = props.onRestoreFocus, onRestoreFocus = _a === void 0 ? defaultFocusRestorer : _a;
    var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var containsFocus = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        originalFocusedElement.current = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* getDocument */ "a"])().activeElement;
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* doesElementContainFocus */ "a"])(root.current)) {
            containsFocus.current = true;
        }
        return function () {
            var _a;
            onRestoreFocus === null || onRestoreFocus === void 0 ? void 0 : onRestoreFocus({
                originalElement: originalFocusedElement.current,
                containsFocus: containsFocus.current,
                documentContainsFocus: ((_a = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* getDocument */ "a"])()) === null || _a === void 0 ? void 0 : _a.hasFocus()) || false,
            });
            // De-reference DOM Node to avoid retainment via transpiled closure of _onKeyDown
            originalFocusedElement.current = undefined;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []);
    Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_10__[/* useOnEvent */ "a"])(root, 'focus', react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
        containsFocus.current = true;
    }, []), true);
    Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_10__[/* useOnEvent */ "a"])(root, 'blur', react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        /** The popup should update this._containsFocus when:
         * relatedTarget exists AND
         * the relatedTarget is not contained within the popup.
         * If the relatedTarget is within the popup, that means the popup still has focus
         * and focused moved from one element to another within the popup.
         * If relatedTarget is undefined or null that usually means that a
         * keyboard event occurred and focus didn't change
         */
        if (root.current && ev.relatedTarget && !root.current.contains(ev.relatedTarget)) {
            containsFocus.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []), true);
}
function useHideSiblingNodes(props, root) {
    // eslint-disable-next-line deprecation/deprecation
    var shouldHideSiblings = String(props['aria-modal']).toLowerCase() === 'true' && props.enableAriaHiddenSiblings;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!(shouldHideSiblings && root.current)) {
            return;
        }
        var unmodalize = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* modalize */ "a"])(root.current);
        return unmodalize;
    }, [root, shouldHideSiblings]);
}
/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var props = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* getPropsWithDefaults */ "a"])({ shouldRestoreFocus: true, enableAriaHiddenSiblings: true }, propsWithoutDefaults);
    var root = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var mergedRootRef = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_11__[/* useMergedRefs */ "a"])(root, forwardedRef);
    useHideSiblingNodes(props, root);
    useRestoreFocus(props, root);
    var role = props.role, className = props.className, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, style = props.style, children = props.children, onDismiss = props.onDismiss;
    var needsVerticalScrollBar = useScrollbarAsync(props, root);
    var onKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case _Utilities__WEBPACK_IMPORTED_MODULE_7__[/* KeyCodes */ "a"].escape:
                if (onDismiss) {
                    onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    }, [onDismiss]);
    var win = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_12__[/* useWindow */ "c"])();
    Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_10__[/* useOnEvent */ "a"])(win, 'keydown', onKeyDown);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ ref: mergedRootRef }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_8__[/* getNativeProps */ "h"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_8__[/* divProperties */ "f"]), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: onKeyDown, style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ overflowY: needsVerticalScrollBar ? 'scroll' : undefined, outline: 'none' }, style) }), children));
});
Popup.displayName = 'Popup';
//# sourceMappingURL=Popup.js.map

/***/ }),

/***/ "hDQx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveMode; });
/* unused harmony export setResponsiveMode */
/* unused harmony export initializeResponsiveMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInitialResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return withResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getResponsiveMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x09k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NZSY");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GBES");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uj5P");
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7R02");





var ResponsiveMode;
(function (ResponsiveMode) {
    /** Width \<= 479px */
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    /** Width \> 479px and \<= 639px */
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    /** Width \> 639px and \<= 1023px */
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    /** Width \> 1023px and \<= 1365px */
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    /** Width \> 1365px and \<= 1919px */
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    /** Width \> 1919px */
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
    ResponsiveMode[ResponsiveMode["unknown"] = 999] = "unknown";
})(ResponsiveMode || (ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
/**
 * User specified mode to default to, useful for server side rendering scenarios.
 */
var _defaultMode;
/**
 * Tracking the last mode we successfully rendered, which allows us to
 * paint initial renders with the correct size.
 */
var _lastMode;
/**
 * Allows a server rendered scenario to provide a **default** responsive mode.
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
/**
 * Initializes the responsive mode to the current window size. This can be used to avoid
 * a re-render during first component mount since the window would otherwise not be measured
 * until after mounting.
 *
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function initializeResponsiveMode(element) {
    var currentWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* getWindow */ "a"])(element);
    if (currentWindow) {
        getResponsiveMode(currentWindow);
    }
}
function getInitialResponsiveMode() {
    var _a;
    return (_a = _defaultMode !== null && _defaultMode !== void 0 ? _defaultMode : _lastMode) !== null && _a !== void 0 ? _a : ResponsiveMode.large;
}
/**
 * @deprecated Decorator usage is deprecated. Either call `getResponsiveMode` manually, or
 * use the `useResponsiveMode` hook within a function component.
 */
function withResponsiveMode(ComposedComponent) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    var resultClass = (_a = /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(WithResponsiveMode, _super);
            function WithResponsiveMode(props) {
                var _this = _super.call(this, props) || this;
                _this._onResize = function () {
                    var responsiveMode = getResponsiveMode(_this.context.window);
                    if (responsiveMode !== _this.state.responsiveMode) {
                        _this.setState({
                            responsiveMode: responsiveMode,
                        });
                    }
                };
                _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_4__[/* EventGroup */ "a"](_this);
                _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
                _this.state = {
                    responsiveMode: getInitialResponsiveMode(),
                };
                return _this;
            }
            WithResponsiveMode.prototype.componentDidMount = function () {
                this._events.on(this.context.window, 'resize', this._onResize);
                this._onResize();
            };
            WithResponsiveMode.prototype.componentWillUnmount = function () {
                this._events.dispose();
            };
            WithResponsiveMode.prototype.render = function () {
                var responsiveMode = this.state.responsiveMode;
                return responsiveMode === ResponsiveMode.unknown ? null : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
            };
            return WithResponsiveMode;
        }(_BaseDecorator__WEBPACK_IMPORTED_MODULE_2__[/* BaseDecorator */ "a"])),
        _a.contextType = _WindowProvider__WEBPACK_IMPORTED_MODULE_6__[/* WindowContext */ "a"],
        _a);
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* hoistStatics */ "a"])(ComposedComponent, resultClass);
}
function getWidthOfCurrentWindow(currentWindow) {
    try {
        return currentWindow.document.documentElement.clientWidth;
    }
    catch (e) {
        return currentWindow.innerWidth;
    }
}
/**
 * Hook to get the current responsive mode (window size category).
 * @param currentWindow - Use this window when determining the responsive mode.
 */
function getResponsiveMode(currentWindow) {
    var responsiveMode = ResponsiveMode.small;
    if (currentWindow) {
        try {
            while (getWidthOfCurrentWindow(currentWindow) > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                responsiveMode++;
            }
        }
        catch (e) {
            // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
            responsiveMode = getInitialResponsiveMode();
        }
        // Tracking last mode just gives us a better default in future renders,
        // which avoids starting with the wrong value if we've measured once.
        _lastMode = responsiveMode;
    }
    else {
        if (_defaultMode !== undefined) {
            responsiveMode = _defaultMode;
        }
        else {
            throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                'Call setResponsiveMode to define what the responsive mode is.');
        }
    }
    return responsiveMode;
}
//# sourceMappingURL=withResponsiveMode.js.map

/***/ }),

/***/ "huLr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
//# sourceMappingURL=ThemeContext.js.map

/***/ }),

/***/ "jFKp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KbVg");
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("j03K");
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("huLr");




/**
 * Get theme from CustomizerContext or Customizations singleton.
 */
function useCompatTheme() {
    return Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* useCustomizationSettings */ "a"])(['theme']).theme;
}
/**
 * React hook for programmatically accessing the theme.
 */
var useTheme = function () {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__[/* ThemeContext */ "a"]);
    var legacyTheme = useCompatTheme();
    return theme || legacyTheme || Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_2__[/* createTheme */ "a"])({});
};
//# sourceMappingURL=useTheme.js.map

/***/ }),

/***/ "kqob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Checkbox; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useControllableValue.js
var useControllableValue = __webpack_require__("Txh6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var CheckboxBase = react["forwardRef"](function (props, forwardedRef) {
    var disabled = props.disabled, required = props.required, inputProps = props.inputProps, name = props.name, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, ariaPositionInSet = props.ariaPositionInSet, ariaSetSize = props.ariaSetSize, title = props.title, checkmarkIconProps = props.checkmarkIconProps, styles = props.styles, theme = props.theme, className = props.className, _a = props.boxSide, boxSide = _a === void 0 ? 'start' : _a;
    var id = Object(useId["a" /* useId */])('checkbox-', props.id);
    var rootRef = react["useRef"](null);
    var mergedRootRefs = Object(useMergedRefs["a" /* useMergedRefs */])(rootRef, forwardedRef);
    var inputRef = react["useRef"](null);
    var _b = Object(useControllableValue["a" /* useControllableValue */])(props.checked, props.defaultChecked, props.onChange), isChecked = _b[0], setIsChecked = _b[1];
    var _c = Object(useControllableValue["a" /* useControllableValue */])(props.indeterminate, props.defaultIndeterminate), isIndeterminate = _c[0], setIsIndeterminate = _c[1];
    Object(useFocusRects["c" /* useFocusRects */])(rootRef);
    useDebugWarning(props);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        disabled: disabled,
        indeterminate: isIndeterminate,
        checked: isChecked,
        reversed: boxSide !== 'start',
        isUsingCustomLabelRender: !!props.onRenderLabel,
    });
    var onChange = react["useCallback"](function (event) {
        if (isIndeterminate) {
            // If indeterminate, clicking the checkbox *only* removes the indeterminate state (or if
            // controlled, lets the consumer know to change it by calling onChange). It doesn't
            // change the checked state.
            setIsChecked(!!isChecked, event);
            setIsIndeterminate(false);
        }
        else {
            setIsChecked(!isChecked, event);
        }
    }, [setIsChecked, setIsIndeterminate, isIndeterminate, isChecked]);
    var defaultLabelRenderer = react["useCallback"](function (checkboxProps) {
        if (!checkboxProps) {
            return null;
        }
        return checkboxProps.label ? (react["createElement"]("span", { className: classNames.text, title: checkboxProps.title }, checkboxProps.label)) : null;
    }, [classNames.text]);
    var setNativeIndeterminate = react["useCallback"](function (indeterminate) {
        if (!inputRef.current) {
            return;
        }
        var value = !!indeterminate;
        inputRef.current.indeterminate = value;
        setIsIndeterminate(value);
    }, [setIsIndeterminate]);
    useComponentRef(props, isChecked, isIndeterminate, setNativeIndeterminate, inputRef);
    react["useEffect"](function () { return setNativeIndeterminate(isIndeterminate); }, [setNativeIndeterminate, isIndeterminate]);
    var onRenderLabel = props.onRenderLabel || defaultLabelRenderer;
    var ariaChecked = isIndeterminate
        ? 'mixed'
        : undefined;
    var mergedInputProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ className: classNames.input, type: 'checkbox' }, inputProps), { checked: !!isChecked, disabled: disabled, required: required, name: name, id: id, title: title, onChange: onChange, 'aria-disabled': disabled, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, 'aria-posinset': ariaPositionInSet, 'aria-setsize': ariaSetSize, 'aria-checked': ariaChecked });
    return (react["createElement"]("div", { className: classNames.root, title: title, ref: mergedRootRefs },
        react["createElement"]("input", Object(tslib_es6["a" /* __assign */])({}, mergedInputProps, { ref: inputRef, title: title, "data-ktp-execute-target": true })),
        react["createElement"]("label", { className: classNames.label, htmlFor: id },
            react["createElement"]("div", { className: classNames.checkbox, "data-ktp-target": true },
                react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({ iconName: "CheckMark" }, checkmarkIconProps, { className: classNames.checkmark }))),
            onRenderLabel(props, defaultLabelRenderer))));
});
CheckboxBase.displayName = 'CheckboxBase';
function useDebugWarning(props) {
    if (false) {}
}
function useComponentRef(props, isChecked, isIndeterminate, setIndeterminate, checkBoxRef) {
    react["useImperativeHandle"](props.componentRef, function () { return ({
        get checked() {
            return !!isChecked;
        },
        get indeterminate() {
            return !!isIndeterminate;
        },
        set indeterminate(indeterminate) {
            setIndeterminate(indeterminate);
        },
        focus: function () {
            if (checkBoxRef.current) {
                checkBoxRef.current.focus();
            }
        },
    }); }, [checkBoxRef, isChecked, isIndeterminate, setIndeterminate]);
}
//# sourceMappingURL=Checkbox.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.styles.js



var GlobalClassNames = {
    root: 'ms-Checkbox',
    label: 'ms-Checkbox-label',
    checkbox: 'ms-Checkbox-checkbox',
    checkmark: 'ms-Checkbox-checkmark',
    text: 'ms-Checkbox-text',
};
var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender, indeterminate = props.indeterminate;
    var semanticColors = theme.semanticColors, effects = theme.effects, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBorder
    var checkmarkFontColorHovered = palette.neutralSecondary;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var checkboxBorderColor = palette.neutralPrimary;
    var checkboxBorderIndeterminateColor = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBorderIndeterminateHoveredColor = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping the following 2 tokens need to be
    // semanticColors.inputBackgroundCheckedHovered
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.inputTextHovered;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    var indeterminateDotStyles = [
        (_a = {
                content: '""',
                borderRadius: effects.roundedCorner2,
                position: 'absolute',
                width: 10,
                height: 10,
                top: 4,
                left: 4,
                boxSizing: 'border-box',
                borderWidth: 5,
                borderStyle: 'solid',
                borderColor: disabled ? checkboxBorderColorDisabled : checkboxBorderIndeterminateColor,
                transitionProperty: 'border-width, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING
            },
            _a[lib["f" /* HighContrastSelector */]] = {
                borderColor: 'WindowText',
            },
            _a),
    ];
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                display: 'flex',
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            !disabled && [
                !checked && (_b = {},
                    _b[":hover .".concat(classNames.checkbox)] = (_c = {
                            borderColor: checkboxBorderHoveredColor
                        },
                        _c[lib["f" /* HighContrastSelector */]] = {
                            borderColor: 'Highlight',
                        },
                        _c),
                    _b[":focus .".concat(classNames.checkbox)] = { borderColor: checkboxBorderHoveredColor },
                    _b[":hover .".concat(classNames.checkmark)] = (_d = {
                            color: checkmarkFontColorHovered,
                            opacity: '1'
                        },
                        _d[lib["f" /* HighContrastSelector */]] = {
                            color: 'Highlight',
                        },
                        _d),
                    _b),
                checked &&
                    !indeterminate && (_e = {},
                    _e[":hover .".concat(classNames.checkbox)] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[":focus .".concat(classNames.checkbox)] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[lib["f" /* HighContrastSelector */]] = (_f = {},
                        _f[":hover .".concat(classNames.checkbox)] = {
                            background: 'Highlight',
                            borderColor: 'Highlight',
                        },
                        _f[":focus .".concat(classNames.checkbox)] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover .".concat(classNames.checkbox)] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover .".concat(classNames.checkmark)] = {
                            color: 'Window',
                        },
                        _f[":hover .".concat(classNames.checkmark)] = {
                            color: 'Window',
                        },
                        _f),
                    _e),
                indeterminate && (_g = {},
                    _g[":hover .".concat(classNames.checkbox, ", :hover .").concat(classNames.checkbox, ":after")] = (_h = {
                            borderColor: checkboxBorderIndeterminateHoveredColor
                        },
                        _h[lib["f" /* HighContrastSelector */]] = {
                            borderColor: 'WindowText',
                        },
                        _h),
                    _g[":focus .".concat(classNames.checkbox)] = {
                        borderColor: checkboxBorderIndeterminateHoveredColor,
                    },
                    _g[":hover .".concat(classNames.checkmark)] = {
                        opacity: '0',
                    },
                    _g),
                (_j = {},
                    _j[":hover .".concat(classNames.text, ", :focus .").concat(classNames.text)] = (_k = {
                            color: checkboxHoveredTextColor
                        },
                        _k[lib["f" /* HighContrastSelector */]] = {
                            color: disabled ? 'GrayText' : 'WindowText',
                        },
                        _k),
                    _j),
            ],
            className,
        ],
        input: (_l = {
                position: 'absolute',
                background: 'none',
                opacity: 0
            },
            // eslint-disable-next-line @fluentui/max-len
            _l[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus + label::before, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus + label::before")] = (_m = {
                    outline: '1px solid ' + theme.palette.neutralSecondary,
                    outlineOffset: '2px'
                },
                _m[lib["f" /* HighContrastSelector */]] = {
                    outline: '1px solid WindowText',
                },
                _m),
            _l),
        label: [
            classNames.label,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
            },
            {
                '&::before': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    content: '""',
                    pointerEvents: 'none',
                },
            },
        ],
        checkbox: [
            classNames.checkbox,
            (_o = {
                    position: 'relative',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: MS_CHECKBOX_LABEL_SIZE,
                    width: MS_CHECKBOX_LABEL_SIZE,
                    border: "1px solid ".concat(checkboxBorderColor),
                    borderRadius: effects.roundedCorner2,
                    boxSizing: 'border-box',
                    transitionProperty: 'background, border, border-color',
                    transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                    transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
                    /* in case the icon is bigger than the box */
                    overflow: 'hidden',
                    ':after': indeterminate ? indeterminateDotStyles : null
                },
                _o[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'WindowText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _o),
            indeterminate && {
                borderColor: checkboxBorderIndeterminateColor,
            },
            !reversed
                ? // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
                    // is used, there will be only a 4px margin from checkbox to label. The label by default would have
                    // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
                    // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4,
                    }
                : {
                    marginLeft: 4,
                },
            !disabled &&
                !indeterminate &&
                checked && (_p = {
                    background: checkboxBackgroundChecked,
                    borderColor: checkboxBorderColorChecked
                },
                _p[lib["f" /* HighContrastSelector */]] = {
                    background: 'Highlight',
                    borderColor: 'Highlight',
                },
                _p),
            disabled && (_q = {
                    borderColor: checkboxBorderColorDisabled
                },
                _q[lib["f" /* HighContrastSelector */]] = {
                    borderColor: 'GrayText',
                },
                _q),
            checked &&
                disabled && (_r = {
                    background: checkboxBackgroundDisabledChecked,
                    borderColor: checkboxBorderColorDisabled
                },
                _r[lib["f" /* HighContrastSelector */]] = {
                    background: 'Window',
                },
                _r),
        ],
        checkmark: [
            classNames.checkmark,
            (_s = {
                    opacity: checked && !indeterminate ? '1' : '0',
                    color: checkmarkFontColor
                },
                _s[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: disabled ? 'GrayText' : 'Window' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _s),
        ],
        text: [
            classNames.text,
            (_t = {
                    color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                    fontSize: fonts.medium.fontSize,
                    lineHeight: '20px'
                },
                _t[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: disabled ? 'GrayText' : 'WindowText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _t),
            !reversed
                ? {
                    marginLeft: 4,
                }
                : {
                    marginRight: 4,
                },
        ],
    };
};
//# sourceMappingURL=Checkbox.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.js



var Checkbox = Object(styled["a" /* styled */])(CheckboxBase, getStyles, undefined, { scope: 'Checkbox' });
//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "kvDL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionalHint; });
var DirectionalHint = {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    topLeftEdge: 0,
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    topCenter: 1,
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    topRightEdge: 2,
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    topAutoEdge: 3,
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    bottomLeftEdge: 4,
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    bottomCenter: 5,
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    bottomRightEdge: 6,
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    bottomAutoEdge: 7,
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    leftTopEdge: 8,
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    leftCenter: 9,
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    leftBottomEdge: 10,
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    rightTopEdge: 11,
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    rightCenter: 12,
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    rightBottomEdge: 13,
};
//# sourceMappingURL=DirectionalHint.js.map

/***/ }),

/***/ "l3kg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Text; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/foundation-legacy/lib/createComponent.js
var createComponent = __webpack_require__("Y+2S");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/foundation-legacy/lib/slots.js
var slots = __webpack_require__("wevZ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Text/Text.view.js

/** @jsxRuntime classic */
/** @jsx withSlots */


var TextView = function (props) {
    // eslint-disable-next-line eqeqeq
    if (props.children == null) {
        return null;
    }
    var block = props.block, className = props.className, _a = props.as, RootType = _a === void 0 ? 'span' : _a, variant = props.variant, nowrap = props.nowrap, rest = Object(tslib_es6["e" /* __rest */])(props, ["block", "className", "as", "variant", "nowrap"]);
    var Slots = Object(slots["b" /* getSlots */])(props, {
        root: RootType,
    });
    return Object(slots["c" /* withSlots */])(Slots.root, Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(rest, properties["i" /* htmlElementProperties */])));
};
//# sourceMappingURL=Text.view.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Text/Text.styles.js
var TextStyles = function (props, theme) {
    var as = props.as, className = props.className, block = props.block, nowrap = props.nowrap, variant = props.variant;
    var fonts = theme.fonts, semanticColors = theme.semanticColors;
    var variantObject = fonts[variant || 'medium'];
    return {
        root: [
            variantObject,
            {
                color: variantObject.color || semanticColors.bodyText,
                display: block ? (as === 'td' ? 'table-cell' : 'block') : 'inline',
                mozOsxFontSmoothing: variantObject.MozOsxFontSmoothing,
                webkitFontSmoothing: variantObject.WebkitFontSmoothing,
            },
            nowrap && {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            className,
        ],
    };
};
//# sourceMappingURL=Text.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Text/Text.js



var Text = Object(createComponent["a" /* createComponent */])(TextView, {
    displayName: 'Text',
    styles: TextStyles,
});
/* harmony default export */ var Text_Text = (Text);
//# sourceMappingURL=Text.js.map

/***/ }),

/***/ "lLjQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusTrapZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ew1g");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BLix");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lE+F");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H5Ur");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JdDn");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("caK9");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("km5L");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jY6u");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("e6CW");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("owwJ");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("kWOt");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("mFKB");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("EO0U");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("uJoa");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("/jyJ");
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("7R02");
/* harmony import */ var _utilities_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("YFIV");






var COMPONENT_NAME = 'FocusTrapZone';
var DEFAULT_PROPS = {
    disabled: false,
    disableFirstFocus: false,
    forceFocusInsideTrap: true,
    isClickableOutsideFocusTrap: false,
    // Hardcoding completely uncontrolled flag for proper interop with FluentUI V9.
    'data-tabster': '{"uncontrolled": {"completely": true}}',
};
var useComponentRef = function (componentRef, previouslyFocusedElement, focusFTZ) {
    react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"](componentRef, function () { return ({
        get previouslyFocusedElement() {
            return previouslyFocusedElement;
        },
        focus: focusFTZ,
    }); }, [focusFTZ, previouslyFocusedElement]);
};
var FocusTrapZone = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (propsWithoutDefaults, ref) {
    var _a;
    var root = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var firstBumper = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var lastBumper = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var mergedRootRef = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_11__[/* useMergedRefs */ "a"])(root, ref);
    var doc = Object(_WindowProvider__WEBPACK_IMPORTED_MODULE_17__[/* useDocument */ "b"])();
    var win = Object(_utilities_dom__WEBPACK_IMPORTED_MODULE_18__[/* useWindowEx */ "d"])();
    var inShadow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* useHasMergeStylesShadowRootContext */ "a"])();
    var isFirstRender = (_a = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_12__[/* usePrevious */ "a"])(false)) !== null && _a !== void 0 ? _a : true;
    var props = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* getPropsWithDefaults */ "a"])(DEFAULT_PROPS, propsWithoutDefaults);
    var internalState = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_13__[/* useConst */ "a"])({
        hasFocus: false,
        focusStackId: Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_14__[/* useId */ "a"])('ftz-', props.id),
    });
    var children = props.children, componentRef = props.componentRef, disabled = props.disabled, disableFirstFocus = props.disableFirstFocus, forceFocusInsideTrap = props.forceFocusInsideTrap, focusPreviouslyFocusedInnerElement = props.focusPreviouslyFocusedInnerElement, 
    // eslint-disable-next-line deprecation/deprecation
    firstFocusableSelector = props.firstFocusableSelector, firstFocusableTarget = props.firstFocusableTarget, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.disableRestoreFocus, 
    // eslint-disable-next-line deprecation/deprecation
    disableRestoreFocus = _b === void 0 ? props.ignoreExternalFocusing : _b, isClickableOutsideFocusTrap = props.isClickableOutsideFocusTrap, enableAriaHiddenSiblings = props.enableAriaHiddenSiblings;
    var bumperProps = {
        'aria-hidden': true,
        style: {
            pointerEvents: 'none',
            position: 'fixed', // 'fixed' prevents browsers from scrolling to bumpers when viewport does not contain them
        },
        tabIndex: disabled ? -1 : 0,
        'data-is-visible': true,
        'data-is-focus-trap-zone-bumper': true,
    };
    var focusElementAsync = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (element) {
        if (element !== firstBumper.current && element !== lastBumper.current) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* focusAsync */ "b"])(element);
        }
    }, []);
    /**
     * Callback to force focus into FTZ (named to avoid overlap with global focus() callback).
     * useEventCallback always returns the same callback reference but updates the implementation
     * every render to avoid stale captured values.
     */
    var focusFTZ = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_15__[/* useEventCallback */ "a"])(function () {
        if (!root.current) {
            return; // not done mounting
        }
        var previouslyFocusedElementInTrapZone = internalState.previouslyFocusedElementInTrapZone;
        if (focusPreviouslyFocusedInnerElement &&
            previouslyFocusedElementInTrapZone &&
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* elementContains */ "a"])(root.current, previouslyFocusedElementInTrapZone)) {
            // focus on the last item that had focus in the zone before we left the zone
            focusElementAsync(previouslyFocusedElementInTrapZone);
            return;
        }
        var firstFocusableChild = null;
        if (typeof firstFocusableTarget === 'string') {
            firstFocusableChild = root.current.querySelector(firstFocusableTarget);
        }
        else if (firstFocusableTarget) {
            firstFocusableChild = firstFocusableTarget(root.current);
        }
        else if (firstFocusableSelector) {
            var focusSelector = typeof firstFocusableSelector === 'string' ? firstFocusableSelector : firstFocusableSelector();
            firstFocusableChild = root.current.querySelector('.' + focusSelector);
        }
        // Fall back to first element if query selector did not match any elements.
        if (!firstFocusableChild) {
            firstFocusableChild = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getNextElement */ "j"])(root.current, root.current.firstChild, false, false, false, true, undefined, undefined, undefined, inShadow);
        }
        if (firstFocusableChild) {
            focusElementAsync(firstFocusableChild);
        }
    });
    /** Used in root div focus/blur handlers */
    var focusBumper = function (isFirstBumper) {
        if (disabled || !root.current) {
            return;
        }
        var nextFocusable = isFirstBumper === internalState.hasFocus
            ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getLastTabbable */ "i"])(root.current, lastBumper.current, true, false, inShadow)
            : Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getFirstTabbable */ "f"])(root.current, firstBumper.current, true, false, inShadow);
        if (nextFocusable) {
            if (nextFocusable === firstBumper.current || nextFocusable === lastBumper.current) {
                // This can happen when FTZ contains no tabbable elements.
                // focusFTZ() will take care of finding a focusable element in FTZ.
                focusFTZ();
            }
            else {
                nextFocusable.focus();
            }
        }
    };
    /** Root div blur handler (doesn't need useCallback since it's for a native element) */
    var onRootBlurCapture = function (ev) {
        var _a;
        (_a = props.onBlurCapture) === null || _a === void 0 ? void 0 : _a.call(props, ev);
        var relatedTarget = ev.relatedTarget;
        if (ev.relatedTarget === null) {
            // In IE11, due to lack of support, event.relatedTarget is always
            // null making every onBlur call to be "outside" of the root
            // even when it's not. Using document.activeElement is another way
            // for us to be able to get what the relatedTarget without relying
            // on the event
            relatedTarget = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* getActiveElement */ "a"])(doc);
        }
        if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* elementContains */ "a"])(root.current, relatedTarget)) {
            internalState.hasFocus = false;
        }
    };
    /** Root div focus handler (doesn't need useCallback since it's for a native element) */
    var onRootFocusCapture = function (ev) {
        var _a;
        (_a = props.onFocusCapture) === null || _a === void 0 ? void 0 : _a.call(props, ev);
        if (ev.target === firstBumper.current) {
            focusBumper(true);
        }
        else if (ev.target === lastBumper.current) {
            focusBumper(false);
        }
        internalState.hasFocus = true;
        if (ev.target !== ev.currentTarget && !(ev.target === firstBumper.current || ev.target === lastBumper.current)) {
            // every time focus changes within the trap zone, remember the focused element so that
            // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
            internalState.previouslyFocusedElementInTrapZone = Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__[/* getEventTarget */ "a"])(ev.nativeEvent);
        }
    };
    /** Called to restore focus on unmount or props change. (useEventCallback ensures latest prop values are used.) */
    var returnFocusToInitiator = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_15__[/* useEventCallback */ "a"])(function (elementToFocusOnDismiss) {
        FocusTrapZone.focusStack = FocusTrapZone.focusStack.filter(function (value) { return internalState.focusStackId !== value; });
        if (!doc) {
            return;
        }
        // Do not use getActiveElement() here.
        // When the FTZ is in shadow DOM focus returns to the
        // shadow host rather than body so we need to be
        // able to inspect that
        var activeElement = doc.activeElement;
        if (!disableRestoreFocus &&
            typeof (elementToFocusOnDismiss === null || elementToFocusOnDismiss === void 0 ? void 0 : elementToFocusOnDismiss.focus) === 'function' &&
            // only restore focus if the current focused element is within the FTZ, or if nothing is focused
            (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* elementContains */ "a"])(root.current, activeElement) || activeElement === doc.body || activeElement.shadowRoot)) {
            focusElementAsync(elementToFocusOnDismiss);
        }
    });
    /** Called in window event handlers. (useEventCallback ensures latest prop values are used.) */
    var forceFocusOrClickInTrap = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_15__[/* useEventCallback */ "a"])(function (ev) {
        // be sure to use the latest values here
        if (disabled) {
            return;
        }
        if (internalState.focusStackId === FocusTrapZone.focusStack.slice(-1)[0]) {
            var targetElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__[/* getEventTarget */ "a"])(ev);
            if (targetElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* elementContains */ "a"])(root.current, targetElement)) {
                if (doc && Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* getActiveElement */ "a"])(doc) === doc.body) {
                    setTimeout(function () {
                        if (doc && Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* getActiveElement */ "a"])(doc) === doc.body) {
                            focusFTZ();
                            internalState.hasFocus = true; // set focus here since we stop event propagation
                        }
                    }, 0);
                }
                else {
                    focusFTZ();
                    internalState.hasFocus = true; // set focus here since we stop event propagation
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    });
    // Update window event handlers when relevant props change
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var disposables = [];
        if (forceFocusInsideTrap) {
            disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_8__[/* on */ "a"])(win, 'focus', forceFocusOrClickInTrap, true));
        }
        if (!isClickableOutsideFocusTrap) {
            disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_8__[/* on */ "a"])(win, 'click', forceFocusOrClickInTrap, true));
        }
        return function () {
            disposables.forEach(function (dispose) { return dispose(); });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run when these two props change
    }, [forceFocusInsideTrap, isClickableOutsideFocusTrap, win]);
    // On prop change or first render, focus the FTZ and update focusStack if appropriate
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        // Do nothing if disabled, or if it's a re-render and forceFocusInsideTrap is false
        // (to match existing behavior, the FTZ handles first focus even if forceFocusInsideTrap
        // is false, though it's debatable whether it should do this)
        if (disabled || (!isFirstRender && !forceFocusInsideTrap) || !root.current) {
            return;
        }
        // Transition from forceFocusInsideTrap / FTZ disabled to enabled (or initial mount)
        FocusTrapZone.focusStack.push(internalState.focusStackId);
        var elementToFocusOnDismiss = props.elementToFocusOnDismiss || Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* getActiveElement */ "a"])(doc);
        if (!disableFirstFocus && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* elementContains */ "a"])(root.current, elementToFocusOnDismiss)) {
            focusFTZ();
        }
        // To match existing behavior, always return focus on cleanup (even if we didn't handle
        // initial focus), but it's debatable whether that's correct
        return function () { return returnFocusToInitiator(elementToFocusOnDismiss); };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run when these two props change
    }, [forceFocusInsideTrap, disabled]);
    // Handle modalization separately from first focus
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!disabled && enableAriaHiddenSiblings) {
            var unmodalize = Object(_Utilities__WEBPACK_IMPORTED_MODULE_9__[/* modalize */ "a"])(root.current);
            return unmodalize;
        }
    }, [disabled, enableAriaHiddenSiblings, root]);
    // Cleanup lifecyle method for internalState.
    Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_16__[/* useUnmount */ "a"])(function () {
        // Dispose of element references so the DOM Nodes can be garbage-collected
        delete internalState.previouslyFocusedElementInTrapZone;
    });
    useComponentRef(componentRef, internalState.previouslyFocusedElementInTrapZone, focusFTZ);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ "aria-labelledby": props.ariaLabelledBy }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_10__[/* getNativeProps */ "h"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_10__[/* divProperties */ "f"]), { ref: mergedRootRef, onFocusCapture: onRootFocusCapture, onBlurCapture: onRootBlurCapture }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, bumperProps, { ref: firstBumper })),
        children,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, bumperProps, { ref: lastBumper }))));
});
FocusTrapZone.displayName = COMPONENT_NAME;
FocusTrapZone.focusStack = [];
//# sourceMappingURL=FocusTrapZone.js.map

/***/ }),

/***/ "lm3o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TooltipHost; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/overflow.js
var overflow = __webpack_require__("v4zd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/portalContainsElement.js
var portalContainsElement = __webpack_require__("+YGA");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js
var object = __webpack_require__("FTLG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.types.js
var TooltipHost_types = __webpack_require__("Y1ZV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js + 4 modules
var Callout = __webpack_require__("dXTB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var Tooltip_base_TooltipBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TooltipBase, _super);
    function TooltipBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderContent = function (props) {
            if (typeof props.content === 'string') {
                return react["createElement"]("p", { className: _this._classNames.subText }, props.content);
            }
            else {
                return react["createElement"]("div", { className: _this._classNames.subText }, props.content);
            }
        };
        return _this;
    }
    TooltipBase.prototype.render = function () {
        var _a, _b;
        var className = (_a = this.props, _a.className), calloutProps = _a.calloutProps, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, styles = _a.styles, id = _a.id, maxWidth = _a.maxWidth, onRenderContent = (_b = _a.onRenderContent, _b === void 0 ? this._onRenderContent : _b), targetElement = _a.targetElement, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className || (calloutProps && calloutProps.className),
            beakWidth: calloutProps && calloutProps.isBeakVisible ? calloutProps.beakWidth : 0,
            gapSpace: calloutProps && calloutProps.gapSpace,
            maxWidth: maxWidth,
        });
        return (react["createElement"](Callout["a" /* Callout */], Object(tslib_es6["a" /* __assign */])({ target: targetElement, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL }, calloutProps, Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */], ['id']), { className: this._classNames.root }),
            react["createElement"]("div", { className: this._classNames.content, id: id, onFocus: this.props.onFocus, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, onRenderContent(this.props, this._onRenderContent))));
    };
    // Specify default props values
    TooltipBase.defaultProps = {
        directionalHint: DirectionalHint["a" /* DirectionalHint */].topCenter,
        maxWidth: '364px',
        calloutProps: {
            isBeakVisible: true,
            beakWidth: 16,
            gapSpace: 0,
            setInitialFocus: true,
            doNotLayer: false,
        },
    };
    return TooltipBase;
}(react["Component"]));
//# sourceMappingURL=Tooltip.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.styles.js

var getStyles = function (props) {
    var className = props.className, _a = props.beakWidth, beakWidth = _a === void 0 ? 16 : _a, _b = props.gapSpace, gapSpace = _b === void 0 ? 0 : _b, maxWidth = props.maxWidth, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, effects = theme.effects;
    // The math here is done to account for the 45 degree rotation of the beak
    // and sub-pixel rounding that differs across browsers, which is more noticeable when
    // the device pixel ratio is larger
    var tooltipGapSpace = -(Math.sqrt((beakWidth * beakWidth) / 2) + gapSpace) +
        1 /
            // There isn't really a great way to pass in a `window` reference here so disabling the line rule
            // eslint-disable-next-line no-restricted-globals
            window.devicePixelRatio;
    return {
        root: [
            'ms-Tooltip',
            theme.fonts.medium,
            lib["a" /* AnimationClassNames */].fadeIn200,
            {
                background: semanticColors.menuBackground,
                boxShadow: effects.elevation8,
                padding: '8px',
                maxWidth: maxWidth,
                selectors: {
                    ':after': {
                        content: "''",
                        position: 'absolute',
                        bottom: tooltipGapSpace,
                        left: tooltipGapSpace,
                        right: tooltipGapSpace,
                        top: tooltipGapSpace,
                        zIndex: 0,
                    },
                },
            },
            className,
        ],
        content: [
            'ms-Tooltip-content',
            fonts.small,
            {
                position: 'relative',
                zIndex: 1,
                color: semanticColors.menuItemText,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                overflow: 'hidden',
            },
        ],
        subText: [
            'ms-Tooltip-subtext',
            {
                // Using inherit here to avoid unintentional global overrides of the <p> tag.
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: 'inherit',
                margin: 0,
            },
        ],
    };
};
//# sourceMappingURL=Tooltip.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.js



var Tooltip = Object(styled["a" /* styled */])(Tooltip_base_TooltipBase, getStyles, undefined, {
    scope: 'Tooltip',
});
//# sourceMappingURL=Tooltip.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.types.js
var Tooltip_types = __webpack_require__("rtnm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.base.js









var TooltipHost_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var TooltipHost_base_TooltipHostBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TooltipHostBase, _super);
    // Constructor
    function TooltipHostBase(props) {
        var _this = _super.call(this, props) || this;
        // The wrapping div that gets the hover events
        _this._tooltipHost = react["createRef"]();
        _this._defaultTooltipId = Object(getId["a" /* getId */])('tooltip');
        _this.show = function () {
            _this._toggleTooltip(true);
        };
        _this.dismiss = function () {
            _this._hideTooltip();
        };
        _this._getTargetElement = function () {
            if (!_this._tooltipHost.current) {
                return undefined;
            }
            var overflowMode = _this.props.overflowMode;
            // Select target element based on overflow mode. For parent mode, you want to position the tooltip relative
            // to the parent element, otherwise it might look off.
            if (overflowMode !== undefined) {
                switch (overflowMode) {
                    case TooltipHost_types["a" /* TooltipOverflowMode */].Parent:
                        return _this._tooltipHost.current.parentElement;
                    case TooltipHost_types["a" /* TooltipOverflowMode */].Self:
                        return _this._tooltipHost.current;
                }
            }
            return _this._tooltipHost.current;
        };
        _this._onTooltipFocus = function (ev) {
            if (_this._ignoreNextFocusEvent) {
                _this._ignoreNextFocusEvent = false;
                return;
            }
            _this._onTooltipMouseEnter(ev);
        };
        _this._onTooltipContentFocus = function (ev) {
            if (TooltipHostBase._currentVisibleTooltip && TooltipHostBase._currentVisibleTooltip !== _this) {
                TooltipHostBase._currentVisibleTooltip.dismiss();
            }
            TooltipHostBase._currentVisibleTooltip = _this;
            _this._clearDismissTimer();
            _this._clearOpenTimer();
        };
        _this._onTooltipBlur = function (ev) {
            var _a;
            // The focused element gets a blur event when the document loses focus
            // (e.g. switching tabs in the browser), but we don't want to show the
            // tooltip again when the document gets focus back. Handle this case by
            // checking if the blurred element is still the document's activeElement,
            // and ignoring when it next gets focus back.
            // See https://github.com/microsoft/fluentui/issues/13541
            _this._ignoreNextFocusEvent = ((_a = Object(dom["a" /* getDocumentEx */])(_this.context)) === null || _a === void 0 ? void 0 : _a.activeElement) === ev.target;
            _this._dismissTimerId = _this._async.setTimeout(function () {
                _this._hideTooltip();
            }, 0);
        };
        // Show Tooltip
        _this._onTooltipMouseEnter = function (ev) {
            var _a;
            var overflowMode = (_a = _this.props, _a.overflowMode), delay = _a.delay;
            var doc = Object(dom["a" /* getDocumentEx */])(_this.context);
            if (TooltipHostBase._currentVisibleTooltip && TooltipHostBase._currentVisibleTooltip !== _this) {
                TooltipHostBase._currentVisibleTooltip.dismiss();
            }
            TooltipHostBase._currentVisibleTooltip = _this;
            if (overflowMode !== undefined) {
                var overflowElement = _this._getTargetElement();
                if (overflowElement && !Object(overflow["a" /* hasOverflow */])(overflowElement)) {
                    return;
                }
            }
            if (ev.target && Object(portalContainsElement["a" /* portalContainsElement */])(ev.target, _this._getTargetElement(), doc)) {
                // Do not show tooltip when target is inside a portal relative to TooltipHost.
                return;
            }
            _this._clearDismissTimer();
            _this._clearOpenTimer();
            if (delay !== Tooltip_types["a" /* TooltipDelay */].zero) {
                var delayTime = _this._getDelayTime(delay); // non-null assertion because we set it in `defaultProps`
                _this._openTimerId = _this._async.setTimeout(function () {
                    _this._toggleTooltip(true);
                }, delayTime);
            }
            else {
                _this._toggleTooltip(true);
            }
        };
        // Hide Tooltip
        _this._onTooltipMouseLeave = function (ev) {
            var closeDelay = _this.props.closeDelay;
            _this._clearDismissTimer();
            _this._clearOpenTimer();
            if (closeDelay) {
                _this._dismissTimerId = _this._async.setTimeout(function () {
                    _this._toggleTooltip(false);
                }, closeDelay);
            }
            else {
                _this._toggleTooltip(false);
            }
            if (TooltipHostBase._currentVisibleTooltip === _this) {
                TooltipHostBase._currentVisibleTooltip = undefined;
            }
        };
        _this._onTooltipKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            if ((ev.which === KeyCodes["a" /* KeyCodes */].escape || ev.ctrlKey) && _this.state.isTooltipVisible) {
                _this._hideTooltip();
                ev.stopPropagation();
            }
        };
        _this._clearDismissTimer = function () {
            _this._async.clearTimeout(_this._dismissTimerId);
        };
        _this._clearOpenTimer = function () {
            _this._async.clearTimeout(_this._openTimerId);
        };
        // Hide Tooltip
        _this._hideTooltip = function () {
            _this._clearOpenTimer();
            _this._clearDismissTimer();
            _this._toggleTooltip(false);
        };
        _this._toggleTooltip = function (isTooltipVisible) {
            if (_this.state.isTooltipVisible !== isTooltipVisible) {
                _this.setState({ isTooltipVisible: isTooltipVisible }, function () { return _this.props.onTooltipToggle && _this.props.onTooltipToggle(isTooltipVisible); });
            }
        };
        _this._getDelayTime = function (delay) {
            switch (delay) {
                case Tooltip_types["a" /* TooltipDelay */].medium:
                    return 300;
                case Tooltip_types["a" /* TooltipDelay */].long:
                    return 500;
                default:
                    return 0;
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this.state = {
            isAriaPlaceholderRendered: false,
            isTooltipVisible: false,
        };
        return _this;
    }
    // Render
    TooltipHostBase.prototype.render = function () {
        var _a, _b;
        var calloutProps = (_a = this.props, _a.calloutProps), children = _a.children, content = _a.content, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, className = _a.hostClassName, id = _a.id, 
        // eslint-disable-next-line deprecation/deprecation
        setAriaDescribedBy = (_b = _a.setAriaDescribedBy, _b === void 0 ? true : _b), tooltipProps = _a.tooltipProps, styles = _a.styles, theme = _a.theme;
        this._classNames = TooltipHost_base_getClassNames(styles, {
            theme: theme,
            className: className,
        });
        var isTooltipVisible = this.state.isTooltipVisible;
        var tooltipId = id || this._defaultTooltipId;
        var tooltipRenderProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ id: "".concat(tooltipId, "--tooltip"), content: content, targetElement: this._getTargetElement(), directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, calloutProps: Object(object["a" /* assign */])({}, calloutProps, {
                onDismiss: this._hideTooltip,
                onFocus: this._onTooltipContentFocus,
                onMouseEnter: this._onTooltipMouseEnter,
                onMouseLeave: this._onTooltipMouseLeave,
            }), onMouseEnter: this._onTooltipMouseEnter, onMouseLeave: this._onTooltipMouseLeave }, Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */], ['id'])), tooltipProps);
        // Get the content of the tooltip for use in the hidden div used for screen readers
        var tooltipContent = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.onRenderContent)
            ? tooltipProps.onRenderContent(tooltipRenderProps, function (props) { return ((props === null || props === void 0 ? void 0 : props.content) ? react["createElement"](react["Fragment"], null, props.content) : null); })
            : content;
        var showTooltip = isTooltipVisible && !!tooltipContent;
        var ariaDescribedBy = setAriaDescribedBy && isTooltipVisible && !!tooltipContent ? tooltipId : undefined;
        return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ className: this._classNames.root, ref: this._tooltipHost }, { onFocusCapture: this._onTooltipFocus }, { onBlurCapture: this._onTooltipBlur }, { onMouseEnter: this._onTooltipMouseEnter, onMouseLeave: this._onTooltipMouseLeave, onKeyDown: this._onTooltipKeyDown, role: "none", "aria-describedby": ariaDescribedBy }),
            children,
            showTooltip && react["createElement"](Tooltip, Object(tslib_es6["a" /* __assign */])({}, tooltipRenderProps)),
            react["createElement"]("div", { hidden: true, id: tooltipId, style: lib["C" /* hiddenContentStyle */] }, tooltipContent)));
    };
    TooltipHostBase.prototype.componentDidMount = function () {
        this._async = new Async["a" /* Async */](this);
    };
    TooltipHostBase.prototype.componentWillUnmount = function () {
        if (TooltipHostBase._currentVisibleTooltip && TooltipHostBase._currentVisibleTooltip === this) {
            TooltipHostBase._currentVisibleTooltip = undefined;
        }
        this._async.dispose();
    };
    TooltipHostBase.defaultProps = {
        delay: Tooltip_types["a" /* TooltipDelay */].medium,
    };
    TooltipHostBase.contextType = WindowProvider["a" /* WindowContext */];
    return TooltipHostBase;
}(react["Component"]));
//# sourceMappingURL=TooltipHost.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.styles.js

var GlobalClassNames = {
    root: 'ms-TooltipHost',
    ariaPlaceholder: 'ms-TooltipHost-aria-placeholder',
};
var TooltipHost_styles_getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'inline',
            },
            className,
        ],
    };
};
//# sourceMappingURL=TooltipHost.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js



var TooltipHost = Object(styled["a" /* styled */])(TooltipHost_base_TooltipHostBase, TooltipHost_styles_getStyles, undefined, {
    scope: 'TooltipHost',
});
//# sourceMappingURL=TooltipHost.js.map

/***/ }),

/***/ "m0LP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RectangleEdge; });
/* unused harmony export Position */
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));
//# sourceMappingURL=positioning.types.js.map

/***/ }),

/***/ "mxb3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelType; });
/**
 * {@docCategory Panel}
 */
var PanelType;
(function (PanelType) {
    /**
     * Renders the Panel with a `fluid` (full screen) width.
     * Recommended for use on small screen breakpoints.
     * - Small (320-479): full screen width, 16px left/right padding
     * - Medium (480-639): full screen width, 16px left/right padding
     * - Large (640-1023): full screen width, 32px left/right padding
     * - XLarge (1024-1365): full screen width, 32px left/right padding
     * - XXLarge (1366-up): full screen width, 40px left/right padding
     */
    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): 340px width, 16px left/right padding
     * - Large (640-1023): 340px width, 32px left/right padding
     * - XLarge (1024-1365): 340px width, 32px left/right padding
     * - XXLarge (1366-up): 340px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).
     * - Small (320-479): 272px width, 16px left/right padding
     * - Medium (480-639): 272px width, 16px left/right padding
     * - Large (640-1023): 272px width, 32px left/right padding
     * - XLarge (1024-1365): 272px width, 32px left/right padding
     * - XXLarge (1366-up): 272px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
    /**
     * Renders the Panel in `medium` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): 592px width, 32px left/right padding
     * - XLarge (1024-1365): 644px width, 32px left/right padding
     * - XXLarge (1366-up): 644px width, 40px left/right padding
     */
    PanelType[PanelType["medium"] = 3] = "medium";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639):  adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 428px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["large"] = 4] = "large";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode), with a fixed width at
     * XX-Large breakpoint.
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 940px width, 40px left/right padding
     */
    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
    /**
     * Renders the Panel in `extra large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): adapts to `PanelType.large` at this breakpoint
     * - XXLarge (1366-1919): 176px fixed left margin, fluid width, 40px left/right padding
     * - XXXLarge (1920-up): 176px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the far side (right in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["custom"] = 7] = "custom";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the near side (left in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["customNear"] = 8] = "customNear";
})(PanelType || (PanelType = {}));
//# sourceMappingURL=Panel.types.js.map

/***/ }),

/***/ "rtnm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDelay; });
/**
 * {@docCategory Tooltip}
 */
var TooltipDelay;
(function (TooltipDelay) {
    TooltipDelay[TooltipDelay["zero"] = 0] = "zero";
    /** 300 ms delay before showing the tooltip */
    TooltipDelay[TooltipDelay["medium"] = 1] = "medium";
    /** 500 ms delay before showing the tooltip */
    TooltipDelay[TooltipDelay["long"] = 2] = "long";
})(TooltipDelay || (TooltipDelay = {}));
//# sourceMappingURL=Tooltip.types.js.map

/***/ }),

/***/ "tArt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PersonaCoin; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initials.js
var initials = __webpack_require__("tS8V");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.types.js
var Persona_types = __webpack_require__("Ggpd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaConsts.js
var PersonaConsts = __webpack_require__("Qk2U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaPresence/PersonaPresence.base.js






var coinSizeFontScaleFactor = 6;
var coinSizePresenceScaleFactor = 3;
var presenceMaxSize = 40;
var presenceFontMaxSize = 20;
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])({
    // There can be many PersonaPresence rendered with different sizes.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
/**
 * PersonaPresence with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var PersonaPresenceBase = react["forwardRef"](function (props, forwardedRef) {
    var coinSize = props.coinSize, isOutOfOffice = props.isOutOfOffice, styles = props.styles, // Use getStyles from props.
    presence = props.presence, theme = props.theme, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors;
    var rootRef = react["useRef"](null);
    var mergedRootRef = Object(useMergedRefs["a" /* useMergedRefs */])(forwardedRef, rootRef);
    var size = Object(PersonaConsts["d" /* sizeBoolean */])(props.size);
    // Render Presence Icon if Persona is above size 32.
    var renderIcon = !(size.isSize8 || size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) &&
        (coinSize ? coinSize > 32 : true);
    var presenceHeightWidth = coinSize
        ? coinSize / coinSizePresenceScaleFactor < presenceMaxSize
            ? coinSize / coinSizePresenceScaleFactor + 'px'
            : presenceMaxSize + 'px'
        : '';
    var presenceFontSize = coinSize
        ? coinSize / coinSizeFontScaleFactor < presenceFontMaxSize
            ? coinSize / coinSizeFontScaleFactor + 'px'
            : presenceFontMaxSize + 'px'
        : '';
    var coinSizeWithPresenceIconStyle = coinSize
        ? { fontSize: presenceFontSize, lineHeight: presenceHeightWidth }
        : undefined;
    var coinSizeWithPresenceStyle = coinSize ? { width: presenceHeightWidth, height: presenceHeightWidth } : undefined;
    // Use getStyles from props, or fall back to getStyles from styles file.
    var classNames = getClassNames(styles, {
        theme: theme,
        presence: presence,
        size: props.size,
        isOutOfOffice: isOutOfOffice,
        presenceColors: presenceColors,
    });
    if (presence === Persona_types["b" /* PersonaPresence */].none) {
        return null;
    }
    return (react["createElement"]("div", { role: "presentation", className: classNames.presence, style: coinSizeWithPresenceStyle, title: presenceTitle, ref: mergedRootRef }, renderIcon && (react["createElement"](Icon["a" /* Icon */], { className: classNames.presenceIcon, iconName: determineIcon(props.presence, props.isOutOfOffice), style: coinSizeWithPresenceIconStyle }))));
});
PersonaPresenceBase.displayName = 'PersonaPresenceBase';
function determineIcon(presence, isOutOfOffice) {
    if (!presence) {
        return undefined;
    }
    var oofIcon = 'SkypeArrow';
    switch (Persona_types["b" /* PersonaPresence */][presence]) {
        case 'online':
            return 'SkypeCheck';
        case 'away':
            return isOutOfOffice ? oofIcon : 'SkypeClock';
        case 'dnd':
            return 'SkypeMinus';
        case 'offline':
            return isOutOfOffice ? oofIcon : '';
    }
    return '';
}
//# sourceMappingURL=PersonaPresence.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaPresence/PersonaPresence.styles.js



var GlobalClassNames = {
    presence: 'ms-Persona-presence',
    presenceIcon: 'ms-Persona-presenceIcon',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var theme = props.theme, presenceColors = props.presenceColors;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var size = Object(PersonaConsts["d" /* sizeBoolean */])(props.size);
    var presence = Object(PersonaConsts["c" /* presenceBoolean */])(props.presence);
    // Presence colors
    var presenceColorAvailable = (presenceColors && presenceColors.available) || '#6BB700';
    var presenceColorAway = (presenceColors && presenceColors.away) || '#FFAA44';
    var presenceColorBusy = (presenceColors && presenceColors.busy) || '#C43148';
    var presenceColorDnd = (presenceColors && presenceColors.dnd) || '#C50F1F';
    var presenceColorOffline = (presenceColors && presenceColors.offline) || '#8A8886';
    var presenceColorOof = (presenceColors && presenceColors.oof) || '#B4009E';
    var presenceColorBackground = (presenceColors && presenceColors.background) || semanticColors.bodyBackground;
    var isOpenCirclePresence = presence.isOffline ||
        (props.isOutOfOffice && (presence.isAvailable || presence.isBusy || presence.isAway || presence.isDoNotDisturb));
    var borderSizeForSmallPersonas = '1px';
    var borderSizeForLargePersonas = '2px';
    var borderSize = size.isSize72 || size.isSize100 ? borderSizeForLargePersonas : borderSizeForSmallPersonas;
    return {
        presence: [
            classNames.presence,
            Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ position: 'absolute', height: PersonaConsts["a" /* personaPresenceSize */].size12, width: PersonaConsts["a" /* personaPresenceSize */].size12, borderRadius: '50%', top: 'auto', right: '-2px', bottom: '-2px', border: "2px solid ".concat(presenceColorBackground), textAlign: 'center', boxSizing: 'content-box', backgroundClip: 'border-box' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()), { selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        borderColor: 'Window',
                        backgroundColor: 'WindowText',
                    },
                    _a) }),
            (size.isSize8 || size.isSize10) && {
                right: 'auto',
                top: '7px',
                left: 0,
                border: 0,
                selectors: (_b = {},
                    _b[lib["f" /* HighContrastSelector */]] = {
                        top: '9px',
                        border: '1px solid WindowText',
                    },
                    _b),
            },
            (size.isSize8 || size.isSize10 || size.isSize24 || size.isSize28 || size.isSize32) &&
                makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size8),
            (size.isSize40 || size.isSize48) && makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size12),
            size.isSize16 && {
                height: PersonaConsts["a" /* personaPresenceSize */].size6,
                width: PersonaConsts["a" /* personaPresenceSize */].size6,
                borderWidth: '1.5px',
            },
            size.isSize56 && makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size16),
            size.isSize72 && makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size20),
            size.isSize100 && makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size28),
            size.isSize120 && makeSizeStyle(PersonaConsts["a" /* personaPresenceSize */].size32),
            presence.isAvailable && {
                backgroundColor: presenceColorAvailable,
                selectors: (_c = {},
                    _c[lib["f" /* HighContrastSelector */]] = backgroundColor('Highlight'),
                    _c),
            },
            presence.isAway && backgroundColor(presenceColorAway),
            presence.isBlocked && [
                {
                    selectors: (_d = {
                            // Only show :after at larger sizes
                            ':after': size.isSize40 || size.isSize48 || size.isSize72 || size.isSize100
                                ? {
                                    content: '""',
                                    width: '100%',
                                    height: borderSize,
                                    backgroundColor: presenceColorBusy,
                                    transform: 'translateY(-50%) rotate(-45deg)',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                }
                                : undefined
                        },
                        _d[lib["f" /* HighContrastSelector */]] = {
                            selectors: {
                                ':after': {
                                    width: "calc(100% - 4px)",
                                    left: '2px',
                                    backgroundColor: 'Window',
                                },
                            },
                        },
                        _d),
                },
            ],
            presence.isBusy && backgroundColor(presenceColorBusy),
            presence.isDoNotDisturb && backgroundColor(presenceColorDnd),
            presence.isOffline && backgroundColor(presenceColorOffline),
            (isOpenCirclePresence || presence.isBlocked) && [
                {
                    backgroundColor: presenceColorBackground,
                    selectors: (_e = {
                            ':before': {
                                content: '""',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                border: "".concat(borderSize, " solid ").concat(presenceColorBusy),
                                borderRadius: '50%',
                                boxSizing: 'border-box',
                            }
                        },
                        _e[lib["f" /* HighContrastSelector */]] = {
                            backgroundColor: 'WindowText',
                            selectors: {
                                ':before': {
                                    width: "calc(100% - 2px)",
                                    height: "calc(100% - 2px)",
                                    top: '1px',
                                    left: '1px',
                                    borderColor: 'Window',
                                },
                            },
                        },
                        _e),
                },
            ],
            isOpenCirclePresence && presence.isAvailable && makeBeforeBorderStyle(borderSize, presenceColorAvailable),
            isOpenCirclePresence && presence.isBusy && makeBeforeBorderStyle(borderSize, presenceColorBusy),
            isOpenCirclePresence && presence.isAway && makeBeforeBorderStyle(borderSize, presenceColorOof),
            isOpenCirclePresence && presence.isDoNotDisturb && makeBeforeBorderStyle(borderSize, presenceColorDnd),
            isOpenCirclePresence && presence.isOffline && makeBeforeBorderStyle(borderSize, presenceColorOffline),
            isOpenCirclePresence &&
                presence.isOffline &&
                props.isOutOfOffice &&
                makeBeforeBorderStyle(borderSize, presenceColorOof),
        ],
        presenceIcon: [
            classNames.presenceIcon,
            {
                color: presenceColorBackground,
                fontSize: '6px',
                lineHeight: PersonaConsts["a" /* personaPresenceSize */].size12,
                verticalAlign: 'top',
                selectors: (_f = {},
                    _f[lib["f" /* HighContrastSelector */]] = {
                        color: 'Window',
                    },
                    _f),
            },
            size.isSize56 && {
                fontSize: '8px',
                lineHeight: PersonaConsts["a" /* personaPresenceSize */].size16,
            },
            size.isSize72 && {
                fontSize: fonts.small.fontSize,
                lineHeight: PersonaConsts["a" /* personaPresenceSize */].size20,
            },
            size.isSize100 && {
                fontSize: fonts.medium.fontSize,
                lineHeight: PersonaConsts["a" /* personaPresenceSize */].size28,
            },
            size.isSize120 && {
                fontSize: fonts.medium.fontSize,
                lineHeight: PersonaConsts["a" /* personaPresenceSize */].size32,
            },
            presence.isAway && {
                position: 'relative',
                left: isOpenCirclePresence ? undefined : '1px',
            },
            isOpenCirclePresence && presence.isAvailable && makeOpenCircleIconStyle(presenceColorAvailable),
            isOpenCirclePresence && presence.isBusy && makeOpenCircleIconStyle(presenceColorBusy),
            isOpenCirclePresence && presence.isAway && makeOpenCircleIconStyle(presenceColorOof),
            isOpenCirclePresence && presence.isDoNotDisturb && makeOpenCircleIconStyle(presenceColorDnd),
            isOpenCirclePresence && presence.isOffline && makeOpenCircleIconStyle(presenceColorOffline),
            isOpenCirclePresence && presence.isOffline && props.isOutOfOffice && makeOpenCircleIconStyle(presenceColorOof),
        ],
    };
};
function makeOpenCircleIconStyle(color) {
    return {
        color: color,
        borderColor: color,
    };
}
function makeBeforeBorderStyle(borderSize, color) {
    return {
        selectors: {
            ':before': {
                border: "".concat(borderSize, " solid ").concat(color),
            },
        },
    };
}
function makeSizeStyle(size) {
    return {
        height: size,
        width: size,
    };
}
function backgroundColor(color) {
    return { backgroundColor: color };
}
//# sourceMappingURL=PersonaPresence.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaPresence/PersonaPresence.js



/**
 * PersonaPresence is used to render an individual's presence.
 */
var PersonaPresence = Object(styled["a" /* styled */])(PersonaPresenceBase, getStyles, undefined, { scope: 'PersonaPresence' });
//# sourceMappingURL=PersonaPresence.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.types.js
var Image_types = __webpack_require__("028r");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.js + 2 modules
var Image = __webpack_require__("CmtH");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaInitialsColor.js

/**
 * Following colors are considered reserved and can only be set with overrides, so they are excluded from this set:
 * - `gray` and `black` can result in offensive persona coins with some initials combinations
 * - `red` often has a special meaning
 * - `transparent` is not intended to be used with typical initials due to accessibility issues;
 *   its primary use is for Facepile overflow buttons.
 */
var COLOR_SWATCHES_LOOKUP = [
    Persona_types["a" /* PersonaInitialsColor */].lightBlue,
    Persona_types["a" /* PersonaInitialsColor */].blue,
    Persona_types["a" /* PersonaInitialsColor */].darkBlue,
    Persona_types["a" /* PersonaInitialsColor */].teal,
    Persona_types["a" /* PersonaInitialsColor */].green,
    Persona_types["a" /* PersonaInitialsColor */].darkGreen,
    Persona_types["a" /* PersonaInitialsColor */].lightPink,
    Persona_types["a" /* PersonaInitialsColor */].pink,
    Persona_types["a" /* PersonaInitialsColor */].magenta,
    Persona_types["a" /* PersonaInitialsColor */].purple,
    Persona_types["a" /* PersonaInitialsColor */].orange,
    Persona_types["a" /* PersonaInitialsColor */].lightRed,
    Persona_types["a" /* PersonaInitialsColor */].darkRed,
    Persona_types["a" /* PersonaInitialsColor */].violet,
    Persona_types["a" /* PersonaInitialsColor */].gold,
    Persona_types["a" /* PersonaInitialsColor */].burgundy,
    Persona_types["a" /* PersonaInitialsColor */].warmGray,
    Persona_types["a" /* PersonaInitialsColor */].cyan,
    Persona_types["a" /* PersonaInitialsColor */].rust,
    Persona_types["a" /* PersonaInitialsColor */].coolGray,
];
var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
function getInitialsColorFromName(displayName) {
    var color = Persona_types["a" /* PersonaInitialsColor */].blue;
    if (!displayName) {
        return color;
    }
    var hashCode = 0;
    for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
        var ch = displayName.charCodeAt(iLen);
        var shift = iLen % 8;
        // eslint-disable-next-line no-bitwise
        hashCode ^= (ch << shift) + (ch >> (8 - shift));
    }
    color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
    return color;
}
function personaInitialsColorToHexCode(personaInitialsColor) {
    switch (personaInitialsColor) {
        case Persona_types["a" /* PersonaInitialsColor */].lightBlue:
            return '#4F6BED';
        case Persona_types["a" /* PersonaInitialsColor */].blue:
            return '#0078D4';
        case Persona_types["a" /* PersonaInitialsColor */].darkBlue:
            return '#004E8C';
        case Persona_types["a" /* PersonaInitialsColor */].teal:
            return '#038387';
        case Persona_types["a" /* PersonaInitialsColor */].lightGreen:
        case Persona_types["a" /* PersonaInitialsColor */].green:
            return '#498205';
        case Persona_types["a" /* PersonaInitialsColor */].darkGreen:
            return '#0B6A0B';
        case Persona_types["a" /* PersonaInitialsColor */].lightPink:
            return '#C239B3';
        case Persona_types["a" /* PersonaInitialsColor */].pink:
            return '#E3008C';
        case Persona_types["a" /* PersonaInitialsColor */].magenta:
            return '#881798';
        case Persona_types["a" /* PersonaInitialsColor */].purple:
            return '#5C2E91';
        case Persona_types["a" /* PersonaInitialsColor */].orange:
            return '#CA5010';
        // eslint-disable-next-line deprecation/deprecation
        case Persona_types["a" /* PersonaInitialsColor */].red:
            return '#EE1111';
        case Persona_types["a" /* PersonaInitialsColor */].lightRed:
            return '#D13438';
        case Persona_types["a" /* PersonaInitialsColor */].darkRed:
            return '#A4262C';
        case Persona_types["a" /* PersonaInitialsColor */].transparent:
            return 'transparent';
        case Persona_types["a" /* PersonaInitialsColor */].violet:
            return '#8764B8';
        case Persona_types["a" /* PersonaInitialsColor */].gold:
            return '#986F0B';
        case Persona_types["a" /* PersonaInitialsColor */].burgundy:
            return '#750B1C';
        case Persona_types["a" /* PersonaInitialsColor */].warmGray:
            return '#7A7574';
        case Persona_types["a" /* PersonaInitialsColor */].cyan:
            return '#005B70';
        case Persona_types["a" /* PersonaInitialsColor */].rust:
            return '#8E562E';
        case Persona_types["a" /* PersonaInitialsColor */].coolGray:
            return '#69797E';
        // eslint-disable-next-line deprecation/deprecation
        case Persona_types["a" /* PersonaInitialsColor */].black:
            return '#1D1D1D';
        case Persona_types["a" /* PersonaInitialsColor */].gray:
            return '#393939';
    }
}
/** @deprecated Use `getPersonaInitialsColor` */
function initialsColorPropToColorCode(props) {
    return getPersonaInitialsColor(props);
}
/**
 * Gets the hex color string (prefixed with #) for the given persona props.
 * This is the logic used internally by the Persona control.
 * @param props - Current persona props
 * @returns Hex color string prefixed with #
 */
function getPersonaInitialsColor(props) {
    // eslint-disable-next-line deprecation/deprecation
    var primaryText = props.primaryText, text = props.text;
    var initialsColor = props.initialsColor;
    var initialsColorCode;
    if (typeof initialsColor === 'string') {
        initialsColorCode = initialsColor;
    }
    else {
        initialsColor = initialsColor !== undefined ? initialsColor : getInitialsColorFromName(text || primaryText);
        initialsColorCode = personaInitialsColorToHexCode(initialsColor);
    }
    return initialsColorCode;
}
//# sourceMappingURL=PersonaInitialsColor.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaCoin/PersonaCoin.base.js











var PersonaCoin_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])({
    // There can be many PersonaCoin rendered with different sizes.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
var getInitialsStyles = Object(memoize["b" /* memoizeFunction */])(function (className, initialsColor, initialsTextColor, text, primaryText, showUnknownPersonaCoin) {
    return Object(lib["F" /* mergeStyles */])(className, !showUnknownPersonaCoin && {
        backgroundColor: getPersonaInitialsColor({ text: text, initialsColor: initialsColor, primaryText: primaryText }),
        color: initialsTextColor,
    });
});
var DEFAULT_PROPS = {
    size: Persona_types["c" /* PersonaSize */].size48,
    presence: Persona_types["b" /* PersonaPresence */].none,
    imageAlt: '',
};
function useDebugWarnings(props) {
    if (false) {}
}
function useImageLoadState(_a) {
    var onPhotoLoadingStateChange = _a.onPhotoLoadingStateChange, imageUrl = _a.imageUrl;
    var _b = react["useState"](Image_types["c" /* ImageLoadState */].notLoaded), imageLoadState = _b[0], setImageLoadstate = _b[1];
    react["useEffect"](function () {
        setImageLoadstate(Image_types["c" /* ImageLoadState */].notLoaded);
    }, [imageUrl]);
    var onLoadingStateChange = function (loadState) {
        setImageLoadstate(loadState);
        onPhotoLoadingStateChange === null || onPhotoLoadingStateChange === void 0 ? void 0 : onPhotoLoadingStateChange(loadState);
    };
    return [imageLoadState, onLoadingStateChange];
}
/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var PersonaCoinBase = react["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults);
    useDebugWarnings(props);
    var _a = useImageLoadState(props), imageLoadState = _a[0], onLoadingStateChange = _a[1];
    var renderCoin = getCoinRenderer(onLoadingStateChange);
    var className = props.className, coinProps = props.coinProps, showUnknownPersonaCoin = props.showUnknownPersonaCoin, coinSize = props.coinSize, styles = props.styles, imageUrl = props.imageUrl, initialsColor = props.initialsColor, initialsTextColor = props.initialsTextColor, isOutOfOffice = props.isOutOfOffice, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.onRenderCoin, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderCoin = _b === void 0 ? renderCoin : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.onRenderPersonaCoin, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderPersonaCoin = _c === void 0 ? onRenderCoin : _c, _d = props.onRenderInitials, onRenderInitials = _d === void 0 ? renderPersonaCoinInitials : _d, presence = props.presence, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors, 
    // eslint-disable-next-line deprecation/deprecation
    primaryText = props.primaryText, showInitialsUntilImageLoads = props.showInitialsUntilImageLoads, text = props.text, theme = props.theme, size = props.size;
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */]);
    var divCoinProps = Object(properties["h" /* getNativeProps */])(coinProps || {}, properties["f" /* divProperties */]);
    var coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;
    var hideImage = showUnknownPersonaCoin;
    var personaPresenceProps = {
        coinSize: coinSize,
        isOutOfOffice: isOutOfOffice,
        presence: presence,
        presenceTitle: presenceTitle,
        presenceColors: presenceColors,
        size: size,
        theme: theme,
    };
    // Use getStyles from props, or fall back to getStyles from styles file.
    var classNames = PersonaCoin_base_getClassNames(styles, {
        theme: theme,
        className: coinProps && coinProps.className ? coinProps.className : className,
        size: size,
        coinSize: coinSize,
        showUnknownPersonaCoin: showUnknownPersonaCoin,
    });
    var shouldRenderInitials = Boolean(imageLoadState !== Image_types["c" /* ImageLoadState */].loaded &&
        ((showInitialsUntilImageLoads && imageUrl) || !imageUrl || imageLoadState === Image_types["c" /* ImageLoadState */].error || hideImage));
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ role: "presentation" }, divProps, { className: classNames.coin, ref: forwardedRef }),
        // Render PersonaCoin if size is not size8. size10 and tiny need to removed after a deprecation cleanup.
        // eslint-disable-next-line deprecation/deprecation
        size !== Persona_types["c" /* PersonaSize */].size8 && size !== Persona_types["c" /* PersonaSize */].size10 && size !== Persona_types["c" /* PersonaSize */].tiny ? (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ role: "presentation" }, divCoinProps, { className: classNames.imageArea, style: coinSizeStyle }),
            shouldRenderInitials && (react["createElement"]("div", { className: getInitialsStyles(classNames.initials, initialsColor, initialsTextColor, text, primaryText, showUnknownPersonaCoin), style: coinSizeStyle, "aria-hidden": "true" }, onRenderInitials(props, renderPersonaCoinInitials))),
            !hideImage && onRenderPersonaCoin(props, renderCoin),
            react["createElement"](PersonaPresence, Object(tslib_es6["a" /* __assign */])({}, personaPresenceProps)))) : // Otherwise, render just PersonaPresence.
            props.presence ? (react["createElement"](PersonaPresence, Object(tslib_es6["a" /* __assign */])({}, personaPresenceProps))) : (
            // Just render Contact Icon if there isn't a Presence prop.
            react["createElement"](Icon["a" /* Icon */], { iconName: "Contact", className: classNames.size10WithoutPresenceIcon })),
        props.children));
});
PersonaCoinBase.displayName = 'PersonaCoinBase';
var getCoinRenderer = function (onLoadingStateChange) {
    return function (_a) {
        var coinSize = _a.coinSize, styles = _a.styles, imageUrl = _a.imageUrl, imageAlt = _a.imageAlt, imageShouldFadeIn = _a.imageShouldFadeIn, imageShouldStartVisible = _a.imageShouldStartVisible, theme = _a.theme, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, _b = _a.size, size = _b === void 0 ? DEFAULT_PROPS.size : _b;
        // Render the Image component only if an image URL is provided
        if (!imageUrl) {
            return null;
        }
        var classNames = PersonaCoin_base_getClassNames(styles, {
            theme: theme,
            size: size,
            showUnknownPersonaCoin: showUnknownPersonaCoin,
        });
        var dimension = coinSize || PersonaConsts["e" /* sizeToPixels */][size];
        return (react["createElement"](Image["a" /* Image */], { className: classNames.image, imageFit: Image_types["b" /* ImageFit */].cover, src: imageUrl, width: dimension, height: dimension, alt: imageAlt, shouldFadeIn: imageShouldFadeIn, shouldStartVisible: imageShouldStartVisible, onLoadingStateChange: onLoadingStateChange }));
    };
};
var renderPersonaCoinInitials = function (_a) {
    var imageInitials = _a.imageInitials, allowPhoneInitials = _a.allowPhoneInitials, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, text = _a.text, 
    // eslint-disable-next-line deprecation/deprecation
    primaryText = _a.primaryText, theme = _a.theme;
    if (showUnknownPersonaCoin) {
        return react["createElement"](Icon["a" /* Icon */], { iconName: "Help" });
    }
    var isRTL = Object(rtl["a" /* getRTL */])(theme);
    imageInitials = imageInitials || Object(initials["a" /* getInitials */])(text || primaryText || '', isRTL, allowPhoneInitials);
    return imageInitials !== '' ? react["createElement"]("span", null, imageInitials) : react["createElement"](Icon["a" /* Icon */], { iconName: "Contact" });
};
//# sourceMappingURL=PersonaCoin.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaCoin/PersonaCoin.styles.js



var PersonaCoin_styles_GlobalClassNames = {
    coin: 'ms-Persona-coin',
    imageArea: 'ms-Persona-imageArea',
    image: 'ms-Persona-image',
    initials: 'ms-Persona-initials',
    size8: 'ms-Persona--size8',
    size10: 'ms-Persona--size10',
    size16: 'ms-Persona--size16',
    size24: 'ms-Persona--size24',
    size28: 'ms-Persona--size28',
    size32: 'ms-Persona--size32',
    size40: 'ms-Persona--size40',
    size48: 'ms-Persona--size48',
    size56: 'ms-Persona--size56',
    size72: 'ms-Persona--size72',
    size100: 'ms-Persona--size100',
    size120: 'ms-Persona--size120',
};
var PersonaCoin_styles_getStyles = function (props) {
    var _a;
    var className = props.className, theme = props.theme, coinSize = props.coinSize;
    var palette = theme.palette, fonts = theme.fonts;
    var size = Object(PersonaConsts["d" /* sizeBoolean */])(props.size);
    var classNames = Object(lib["v" /* getGlobalClassNames */])(PersonaCoin_styles_GlobalClassNames, theme);
    // Static colors used when displaying 'unknown persona' coin
    var unknownPersonaBackgroundColor = 'rgb(234, 234, 234)';
    var unknownPersonaFontColor = 'rgb(168, 0, 0)';
    var dimension = coinSize || (props.size && PersonaConsts["e" /* sizeToPixels */][props.size]) || 48;
    return {
        coin: [
            classNames.coin,
            fonts.medium,
            size.isSize8 && classNames.size8,
            size.isSize10 && classNames.size10,
            size.isSize16 && classNames.size16,
            size.isSize24 && classNames.size24,
            size.isSize28 && classNames.size28,
            size.isSize32 && classNames.size32,
            size.isSize40 && classNames.size40,
            size.isSize48 && classNames.size48,
            size.isSize56 && classNames.size56,
            size.isSize72 && classNames.size72,
            size.isSize100 && classNames.size100,
            size.isSize120 && classNames.size120,
            className,
        ],
        size10WithoutPresenceIcon: {
            fontSize: fonts.xSmall.fontSize,
            position: 'absolute',
            top: '5px',
            right: 'auto',
            left: 0,
        },
        imageArea: [
            classNames.imageArea,
            {
                position: 'relative',
                textAlign: 'center',
                flex: '0 0 auto',
                height: dimension,
                width: dimension,
            },
            dimension <= 10 && {
                overflow: 'visible',
                background: 'transparent',
                height: 0,
                width: 0,
            },
        ],
        image: [
            classNames.image,
            {
                marginRight: '10px',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
                borderRadius: '50%',
                perspective: '1px',
            },
            dimension <= 10 && {
                overflow: 'visible',
                background: 'transparent',
                height: 0,
                width: 0,
            },
            dimension > 10 && {
                height: dimension,
                width: dimension,
            },
        ],
        initials: [
            classNames.initials,
            {
                borderRadius: '50%',
                color: props.showUnknownPersonaCoin ? unknownPersonaFontColor : palette.white,
                fontSize: fonts.large.fontSize,
                fontWeight: lib["e" /* FontWeights */].semibold,
                // copying the logic for the dimensions; defaulted to 46 for size48
                lineHeight: dimension === 48 ? 46 : dimension,
                height: dimension,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ border: '1px solid WindowText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()), { color: 'WindowText', boxSizing: 'border-box', backgroundColor: 'Window !important' }),
                    _a.i = {
                        fontWeight: lib["e" /* FontWeights */].semibold,
                    },
                    _a),
            },
            props.showUnknownPersonaCoin && {
                backgroundColor: unknownPersonaBackgroundColor,
            },
            dimension < 32 && {
                fontSize: fonts.xSmall.fontSize,
            },
            dimension >= 32 &&
                dimension < 40 && {
                fontSize: fonts.medium.fontSize,
            },
            dimension >= 40 &&
                dimension < 56 && {
                fontSize: fonts.mediumPlus.fontSize,
            },
            dimension >= 56 &&
                dimension < 72 && {
                fontSize: fonts.xLarge.fontSize,
            },
            dimension >= 72 &&
                dimension < 100 && {
                fontSize: fonts.xxLarge.fontSize,
            },
            dimension >= 100 && {
                fontSize: fonts.superLarge.fontSize,
            },
        ],
    };
};
//# sourceMappingURL=PersonaCoin.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaCoin/PersonaCoin.js



/**
 * PersonaCoin is used to render an individual's avatar and presence.
 */
var PersonaCoin = Object(styled["a" /* styled */])(PersonaCoinBase, PersonaCoin_styles_getStyles, undefined, {
    scope: 'PersonaCoin',
});
//# sourceMappingURL=PersonaCoin.js.map

/***/ }),

/***/ "tYdO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Persona; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js + 5 modules
var TooltipHost = __webpack_require__("lm3o");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.types.js
var TooltipHost_types = __webpack_require__("Y1ZV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaCoin/PersonaCoin.js + 6 modules
var PersonaCoin = __webpack_require__("tArt");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.types.js
var Persona_types = __webpack_require__("Ggpd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.base.js








var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DEFAULT_PROPS = {
    size: Persona_types["c" /* PersonaSize */].size48,
    presence: Persona_types["b" /* PersonaPresence */].none,
    imageAlt: '',
    showOverflowTooltip: true,
};
function useDebugWarnings(props) {
    if (false) {}
}
/**
 * Persona with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var PersonaBase = react["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults);
    useDebugWarnings(props);
    var rootRef = react["useRef"](null);
    var mergedRootRef = Object(useMergedRefs["a" /* useMergedRefs */])(forwardedRef, rootRef);
    /**
     * Deprecation helper for getting text.
     */
    var getText = function () {
        // eslint-disable-next-line deprecation/deprecation
        return props.text || props.primaryText || '';
    };
    /**
     * Renders various types of Text (primaryText, secondaryText, etc)
     * based on the classNames passed
     * @param elementClassNames - element className
     * @param renderFunction - render function
     * @param defaultRenderFunction - default render function
     */
    var renderElement = function (elementClassNames, renderFunction, defaultRenderFunction) {
        var content = renderFunction && renderFunction(props, defaultRenderFunction);
        return content ? (react["createElement"]("div", { dir: "auto", className: elementClassNames }, content)) : undefined;
    };
    /**
     * using closure to wrap the default render behavior
     * to make it independent of the type of text passed
     * @param text - text to render
     */
    var onRenderText = function (text, tooltip) {
        if (tooltip === void 0) { tooltip = true; }
        // return default render behavior for valid text or undefined
        return text
            ? tooltip
                ? function () {
                    // default onRender behavior
                    return (react["createElement"](TooltipHost["a" /* TooltipHost */], { content: text, overflowMode: TooltipHost_types["a" /* TooltipOverflowMode */].Parent, directionalHint: DirectionalHint["a" /* DirectionalHint */].topLeftEdge }, text));
                }
                : function () { return react["createElement"](react["Fragment"], null, text); }
            : undefined;
    };
    var onInternalRenderPersonaCoin = function (providedCoinProps) {
        return react["createElement"](PersonaCoin["a" /* PersonaCoin */], Object(tslib_es6["a" /* __assign */])({}, providedCoinProps));
    };
    // wrapping default render behavior based on various props properties
    var onInternalRenderPrimaryText = onRenderText(getText(), props.showOverflowTooltip);
    var onInternalRenderSecondaryText = onRenderText(props.secondaryText, props.showOverflowTooltip);
    var onInternalRenderTertiaryText = onRenderText(props.tertiaryText, props.showOverflowTooltip);
    var onInternalRenderOptionalText = onRenderText(props.optionalText, props.showOverflowTooltip);
    var hidePersonaDetails = props.hidePersonaDetails, _a = props.onRenderOptionalText, onRenderOptionalText = _a === void 0 ? onInternalRenderOptionalText : _a, _b = props.onRenderPrimaryText, onRenderPrimaryText = _b === void 0 ? onInternalRenderPrimaryText : _b, _c = props.onRenderSecondaryText, onRenderSecondaryText = _c === void 0 ? onInternalRenderSecondaryText : _c, _d = props.onRenderTertiaryText, onRenderTertiaryText = _d === void 0 ? onInternalRenderTertiaryText : _d, _e = props.onRenderPersonaCoin, onRenderPersonaCoin = _e === void 0 ? onInternalRenderPersonaCoin : _e;
    var size = props.size;
    // These properties are to be explicitly passed into PersonaCoin because they are the only props directly used
    var allowPhoneInitials = props.allowPhoneInitials, className = props.className, coinProps = props.coinProps, showUnknownPersonaCoin = props.showUnknownPersonaCoin, coinSize = props.coinSize, styles = props.styles, imageAlt = props.imageAlt, imageInitials = props.imageInitials, imageShouldFadeIn = props.imageShouldFadeIn, imageShouldStartVisible = props.imageShouldStartVisible, imageUrl = props.imageUrl, initialsColor = props.initialsColor, initialsTextColor = props.initialsTextColor, isOutOfOffice = props.isOutOfOffice, onPhotoLoadingStateChange = props.onPhotoLoadingStateChange, 
    // eslint-disable-next-line deprecation/deprecation
    onRenderCoin = props.onRenderCoin, onRenderInitials = props.onRenderInitials, presence = props.presence, presenceTitle = props.presenceTitle, presenceColors = props.presenceColors, showInitialsUntilImageLoads = props.showInitialsUntilImageLoads, showSecondaryText = props.showSecondaryText, theme = props.theme;
    var personaCoinProps = Object(tslib_es6["a" /* __assign */])({ allowPhoneInitials: allowPhoneInitials, showUnknownPersonaCoin: showUnknownPersonaCoin, coinSize: coinSize, imageAlt: imageAlt, imageInitials: imageInitials, imageShouldFadeIn: imageShouldFadeIn, imageShouldStartVisible: imageShouldStartVisible, imageUrl: imageUrl, initialsColor: initialsColor, initialsTextColor: initialsTextColor, onPhotoLoadingStateChange: onPhotoLoadingStateChange, onRenderCoin: onRenderCoin, onRenderInitials: onRenderInitials, presence: presence, presenceTitle: presenceTitle, showInitialsUntilImageLoads: showInitialsUntilImageLoads, size: size, text: getText(), isOutOfOffice: isOutOfOffice, presenceColors: presenceColors }, coinProps);
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        showSecondaryText: showSecondaryText,
        presence: presence,
        size: size,
    });
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */]);
    var personaDetails = (react["createElement"]("div", { className: classNames.details },
        renderElement(classNames.primaryText, onRenderPrimaryText, onInternalRenderPrimaryText),
        renderElement(classNames.secondaryText, onRenderSecondaryText, onInternalRenderSecondaryText),
        renderElement(classNames.tertiaryText, onRenderTertiaryText, onInternalRenderTertiaryText),
        renderElement(classNames.optionalText, onRenderOptionalText, onInternalRenderOptionalText),
        props.children));
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, divProps, { ref: mergedRootRef, className: classNames.root, style: coinSize ? { height: coinSize, minWidth: coinSize } : undefined }),
        onRenderPersonaCoin(personaCoinProps, onRenderPersonaCoin),
        /* eslint-disable deprecation/deprecation */
        (!hidePersonaDetails ||
            size === Persona_types["c" /* PersonaSize */].size8 ||
            size === Persona_types["c" /* PersonaSize */].size10 ||
            size === Persona_types["c" /* PersonaSize */].tiny) &&
            personaDetails
    /* eslint-enable deprecation/deprecation */
    ));
});
PersonaBase.displayName = 'PersonaBase';
//# sourceMappingURL=Persona.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/PersonaConsts.js
var PersonaConsts = __webpack_require__("Qk2U");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.styles.js


var GlobalClassNames = {
    root: 'ms-Persona',
    size8: 'ms-Persona--size8',
    size10: 'ms-Persona--size10',
    size16: 'ms-Persona--size16',
    size24: 'ms-Persona--size24',
    size28: 'ms-Persona--size28',
    size32: 'ms-Persona--size32',
    size40: 'ms-Persona--size40',
    size48: 'ms-Persona--size48',
    size56: 'ms-Persona--size56',
    size72: 'ms-Persona--size72',
    size100: 'ms-Persona--size100',
    size120: 'ms-Persona--size120',
    available: 'ms-Persona--online',
    away: 'ms-Persona--away',
    blocked: 'ms-Persona--blocked',
    busy: 'ms-Persona--busy',
    doNotDisturb: 'ms-Persona--donotdisturb',
    offline: 'ms-Persona--offline',
    details: 'ms-Persona-details',
    primaryText: 'ms-Persona-primaryText',
    secondaryText: 'ms-Persona-secondaryText',
    tertiaryText: 'ms-Persona-tertiaryText',
    optionalText: 'ms-Persona-optionalText',
    textContent: 'ms-Persona-textContent',
};
var getStyles = function (props) {
    var className = props.className, showSecondaryText = props.showSecondaryText, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var size = Object(PersonaConsts["d" /* sizeBoolean */])(props.size);
    var presence = Object(PersonaConsts["c" /* presenceBoolean */])(props.presence);
    var showSecondaryTextDefaultHeight = '16px';
    var sharedTextStyles = {
        color: semanticColors.bodySubtext,
        fontWeight: lib["e" /* FontWeights */].regular,
        fontSize: fonts.small.fontSize,
    };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            lib["H" /* normalize */],
            {
                color: semanticColors.bodyText,
                position: 'relative',
                height: PersonaConsts["b" /* personaSize */].size48,
                minWidth: PersonaConsts["b" /* personaSize */].size48,
                display: 'flex',
                alignItems: 'center',
                selectors: {
                    '.contextualHost': {
                        display: 'none',
                    },
                },
            },
            size.isSize8 && [
                classNames.size8,
                {
                    height: PersonaConsts["b" /* personaSize */].size8,
                    minWidth: PersonaConsts["b" /* personaSize */].size8,
                },
            ],
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize10 && [
                classNames.size10,
                {
                    height: PersonaConsts["b" /* personaSize */].size10,
                    minWidth: PersonaConsts["b" /* personaSize */].size10,
                },
            ],
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize16 && [
                classNames.size16,
                {
                    height: PersonaConsts["b" /* personaSize */].size16,
                    minWidth: PersonaConsts["b" /* personaSize */].size16,
                },
            ],
            size.isSize24 && [
                classNames.size24,
                {
                    height: PersonaConsts["b" /* personaSize */].size24,
                    minWidth: PersonaConsts["b" /* personaSize */].size24,
                },
            ],
            size.isSize24 &&
                showSecondaryText && {
                height: '36px',
            },
            // TODO: Deprecated size and needs to be removed in a future major release.
            size.isSize28 && [
                classNames.size28,
                {
                    height: PersonaConsts["b" /* personaSize */].size28,
                    minWidth: PersonaConsts["b" /* personaSize */].size28,
                },
            ],
            size.isSize28 &&
                showSecondaryText && {
                height: '32px',
            },
            size.isSize32 && [
                classNames.size32,
                {
                    height: PersonaConsts["b" /* personaSize */].size32,
                    minWidth: PersonaConsts["b" /* personaSize */].size32,
                },
            ],
            size.isSize40 && [
                classNames.size40,
                {
                    height: PersonaConsts["b" /* personaSize */].size40,
                    minWidth: PersonaConsts["b" /* personaSize */].size40,
                },
            ],
            size.isSize48 && classNames.size48,
            size.isSize56 && [
                classNames.size56,
                {
                    height: PersonaConsts["b" /* personaSize */].size56,
                    minWidth: PersonaConsts["b" /* personaSize */].size56,
                },
            ],
            size.isSize72 && [
                classNames.size72,
                {
                    height: PersonaConsts["b" /* personaSize */].size72,
                    minWidth: PersonaConsts["b" /* personaSize */].size72,
                },
            ],
            size.isSize100 && [
                classNames.size100,
                {
                    height: PersonaConsts["b" /* personaSize */].size100,
                    minWidth: PersonaConsts["b" /* personaSize */].size100,
                },
            ],
            size.isSize120 && [
                classNames.size120,
                {
                    height: PersonaConsts["b" /* personaSize */].size120,
                    minWidth: PersonaConsts["b" /* personaSize */].size120,
                },
            ],
            /**
             * Modifiers: presence
             */
            presence.isAvailable && classNames.available,
            presence.isAway && classNames.away,
            presence.isBlocked && classNames.blocked,
            presence.isBusy && classNames.busy,
            presence.isDoNotDisturb && classNames.doNotDisturb,
            presence.isOffline && classNames.offline,
            className,
        ],
        details: [
            classNames.details,
            {
                padding: '0 24px 0 16px',
                minWidth: 0,
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            },
            (size.isSize8 || size.isSize10) && {
                paddingLeft: 17, // increased padding because we don't render a coin at this size
            },
            (size.isSize24 || size.isSize28 || size.isSize32) && {
                padding: '0 8px',
            },
            (size.isSize40 || size.isSize48) && {
                padding: '0 12px',
            },
        ],
        primaryText: [
            classNames.primaryText,
            lib["G" /* noWrap */],
            {
                color: semanticColors.bodyText,
                fontWeight: lib["e" /* FontWeights */].regular,
                fontSize: fonts.medium.fontSize,
                selectors: {
                    ':hover': {
                        color: semanticColors.inputTextHovered,
                    },
                },
            },
            showSecondaryText && {
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            },
            (size.isSize8 || size.isSize10) && {
                fontSize: fonts.small.fontSize,
                lineHeight: PersonaConsts["b" /* personaSize */].size8,
            },
            size.isSize16 && {
                lineHeight: PersonaConsts["b" /* personaSize */].size28,
            },
            (size.isSize24 || size.isSize28 || size.isSize32 || size.isSize40 || size.isSize48) &&
                showSecondaryText && {
                height: 18,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) && {
                fontSize: fonts.xLarge.fontSize,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) &&
                showSecondaryText && {
                height: 22,
            },
        ],
        secondaryText: [
            classNames.secondaryText,
            lib["G" /* noWrap */],
            sharedTextStyles,
            (size.isSize8 || size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) && {
                display: 'none',
            },
            showSecondaryText && {
                display: 'block',
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            },
            size.isSize24 &&
                showSecondaryText && {
                height: 18,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) && {
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize56 || size.isSize72 || size.isSize100 || size.isSize120) &&
                showSecondaryText && {
                height: 18,
            },
        ],
        tertiaryText: [
            classNames.tertiaryText,
            lib["G" /* noWrap */],
            sharedTextStyles,
            {
                display: 'none',
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize72 || size.isSize100 || size.isSize120) && {
                display: 'block',
            },
        ],
        optionalText: [
            classNames.optionalText,
            lib["G" /* noWrap */],
            sharedTextStyles,
            {
                display: 'none',
                fontSize: fonts.medium.fontSize,
            },
            (size.isSize100 || size.isSize120) && {
                display: 'block',
            },
        ],
        textContent: [classNames.textContent, lib["G" /* noWrap */]],
    };
};
//# sourceMappingURL=Persona.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.js



/**
 * Personas are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Persona = Object(styled["a" /* styled */])(PersonaBase, getStyles, undefined, {
    scope: 'Persona',
});
//# sourceMappingURL=Persona.js.map

/***/ }),

/***/ "tZX7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Stack; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/foundation-legacy/lib/slots.js
var slots = __webpack_require__("wevZ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/foundation-legacy/lib/createComponent.js
var createComponent = __webpack_require__("Y+2S");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js
var warnDeprecations = __webpack_require__("uxh7");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/StackItem/StackItem.styles.js

var GlobalClassNames = {
    root: 'ms-StackItem',
};
var alignMap = {
    start: 'flex-start',
    end: 'flex-end',
};
var StackItemStyles = function (props, theme, tokens) {
    var grow = props.grow, shrink = props.shrink, disableShrink = props.disableShrink, align = props.align, verticalFill = props.verticalFill, order = props.order, className = props.className, _a = props.basis, basis = _a === void 0 ? 'auto' : _a;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                flexBasis: basis,
                margin: tokens.margin,
                padding: tokens.padding,
                height: verticalFill ? '100%' : 'auto',
                width: 'auto',
            },
            grow && {
                flexGrow: grow === true ? 1 : grow,
            },
            (disableShrink || (!grow && !shrink)) && {
                flexShrink: 0,
            },
            shrink &&
                !disableShrink && {
                flexShrink: 1,
            },
            align && {
                alignSelf: alignMap[align] || align,
            },
            order && {
                order: order,
            },
            className,
        ],
        // TODO: this cast may be hiding some potential issues with styling and name
        //        lookups and should be removed
    };
};
//# sourceMappingURL=StackItem.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/StackUtils.js
// Helper function that converts a themed spacing key (if given) to the corresponding themed spacing value.
var _getThemedSpacing = function (space, theme) {
    if (theme.spacing.hasOwnProperty(space)) {
        return theme.spacing[space];
    }
    return space;
};
// Helper function that takes a gap as a string and converts it into a { value, unit } representation.
var _getValueUnitGap = function (gap) {
    var numericalPart = parseFloat(gap);
    var numericalValue = isNaN(numericalPart) ? 0 : numericalPart;
    var numericalString = isNaN(numericalPart) ? '' : numericalPart.toString();
    var unitPart = gap.substring(numericalString.toString().length);
    return {
        value: numericalValue,
        unit: unitPart || 'px',
    };
};
/**
 * Takes in a gap size in either a CSS-style format (e.g. 10 or "10px")
 *  or a key of a themed spacing value (e.g. "s1").
 * Returns the separate numerical value of the padding (e.g. 10)
 *  and the CSS unit (e.g. "px").
 */
var parseGap = function (gap, theme) {
    if (gap === undefined || gap === '') {
        return {
            rowGap: {
                value: 0,
                unit: 'px',
            },
            columnGap: {
                value: 0,
                unit: 'px',
            },
        };
    }
    if (typeof gap === 'number') {
        return {
            rowGap: {
                value: gap,
                unit: 'px',
            },
            columnGap: {
                value: gap,
                unit: 'px',
            },
        };
    }
    var splitGap = gap.split(' ');
    // If the array has more than two values, then return 0px.
    if (splitGap.length > 2) {
        return {
            rowGap: {
                value: 0,
                unit: 'px',
            },
            columnGap: {
                value: 0,
                unit: 'px',
            },
        };
    }
    // If the array has two values, then parse each one.
    if (splitGap.length === 2) {
        return {
            rowGap: _getValueUnitGap(_getThemedSpacing(splitGap[0], theme)),
            columnGap: _getValueUnitGap(_getThemedSpacing(splitGap[1], theme)),
        };
    }
    // Else, parse the numerical value and pass it as both the vertical and horizontal gap.
    var calculatedGap = _getValueUnitGap(_getThemedSpacing(gap, theme));
    return {
        rowGap: calculatedGap,
        columnGap: calculatedGap,
    };
};
/**
 * Takes in a padding in a CSS-style format (e.g. 10, "10px", "10px 10px", etc.)
 *  where the separate padding values can also be the key of a themed spacing value
 *  (e.g. "s1 m", "10px l1 20px l2", etc.).
 * Returns a CSS-style padding.
 */
var parsePadding = function (padding, theme) {
    if (padding === undefined || typeof padding === 'number' || padding === '') {
        return padding;
    }
    var paddingValues = padding.split(' ');
    if (paddingValues.length < 2) {
        return _getThemedSpacing(padding, theme);
    }
    return paddingValues.reduce(function (padding1, padding2) {
        return _getThemedSpacing(padding1, theme) + ' ' + _getThemedSpacing(padding2, theme);
    });
};
//# sourceMappingURL=StackUtils.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/Stack.styles.js




var nameMap = {
    start: 'flex-start',
    end: 'flex-end',
};
var Stack_styles_GlobalClassNames = {
    root: 'ms-Stack',
    inner: 'ms-Stack-inner',
    child: 'ms-Stack-child',
};
var styles = function (props, theme, tokens) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var className = props.className, disableShrink = props.disableShrink, enableScopedSelectors = props.enableScopedSelectors, grow = props.grow, horizontal = props.horizontal, horizontalAlign = props.horizontalAlign, reversed = props.reversed, verticalAlign = props.verticalAlign, verticalFill = props.verticalFill, wrap = props.wrap;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(Stack_styles_GlobalClassNames, theme);
    /* eslint-disable deprecation/deprecation */
    var childrenGap = tokens && tokens.childrenGap ? tokens.childrenGap : props.gap;
    var maxHeight = tokens && tokens.maxHeight ? tokens.maxHeight : props.maxHeight;
    var maxWidth = tokens && tokens.maxWidth ? tokens.maxWidth : props.maxWidth;
    var padding = tokens && tokens.padding ? tokens.padding : props.padding;
    /* eslint-enable deprecation/deprecation */
    var _p = parseGap(childrenGap, theme), rowGap = _p.rowGap, columnGap = _p.columnGap;
    var horizontalMargin = "".concat(-0.5 * columnGap.value).concat(columnGap.unit);
    var verticalMargin = "".concat(-0.5 * rowGap.value).concat(rowGap.unit);
    // styles to be applied to all direct children regardless of wrap or direction
    var childStyles = {
        textOverflow: 'ellipsis',
    };
    var childSelector = '> ' + (enableScopedSelectors ? '.' + Stack_styles_GlobalClassNames.child : '*');
    var disableShrinkStyles = (_a = {},
        // flexShrink styles are applied by the StackItem
        _a["".concat(childSelector, ":not(.").concat(GlobalClassNames.root, ")")] = {
            flexShrink: 0,
        },
        _a);
    if (wrap) {
        return {
            root: [
                classNames.root,
                {
                    flexWrap: 'wrap',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    width: 'auto',
                    overflow: 'visible',
                    height: '100%',
                },
                horizontalAlign && (_b = {},
                    _b[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                    _b),
                verticalAlign && (_c = {},
                    _c[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                    _c),
                className,
                {
                    // not allowed to be overridden by className
                    // since this is necessary in order to prevent collapsing margins
                    display: 'flex',
                },
                horizontal && {
                    height: verticalFill ? '100%' : 'auto',
                },
            ],
            inner: [
                classNames.inner,
                (_d = {
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginLeft: horizontalMargin,
                        marginRight: horizontalMargin,
                        marginTop: verticalMargin,
                        marginBottom: verticalMargin,
                        overflow: 'visible',
                        boxSizing: 'border-box',
                        padding: parsePadding(padding, theme),
                        // avoid unnecessary calc() calls if horizontal gap is 0
                        width: columnGap.value === 0 ? '100%' : "calc(100% + ".concat(columnGap.value).concat(columnGap.unit, ")"),
                        maxWidth: '100vw'
                    },
                    _d[childSelector] = Object(tslib_es6["a" /* __assign */])({ margin: "".concat(0.5 * rowGap.value).concat(rowGap.unit, " ").concat(0.5 * columnGap.value).concat(columnGap.unit) }, childStyles),
                    _d),
                disableShrink && disableShrinkStyles,
                horizontalAlign && (_e = {},
                    _e[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                    _e),
                verticalAlign && (_f = {},
                    _f[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                    _f),
                horizontal && (_g = {
                        flexDirection: reversed ? 'row-reverse' : 'row',
                        // avoid unnecessary calc() calls if vertical gap is 0
                        height: rowGap.value === 0 ? '100%' : "calc(100% + ".concat(rowGap.value).concat(rowGap.unit, ")")
                    },
                    _g[childSelector] = {
                        maxWidth: columnGap.value === 0 ? '100%' : "calc(100% - ".concat(columnGap.value).concat(columnGap.unit, ")"),
                    },
                    _g),
                !horizontal && (_h = {
                        flexDirection: reversed ? 'column-reverse' : 'column',
                        height: "calc(100% + ".concat(rowGap.value).concat(rowGap.unit, ")")
                    },
                    _h[childSelector] = {
                        maxHeight: rowGap.value === 0 ? '100%' : "calc(100% - ".concat(rowGap.value).concat(rowGap.unit, ")"),
                    },
                    _h),
            ],
        };
    }
    return {
        root: [
            classNames.root,
            (_j = {
                    display: 'flex',
                    flexDirection: horizontal ? (reversed ? 'row-reverse' : 'row') : reversed ? 'column-reverse' : 'column',
                    flexWrap: 'nowrap',
                    width: 'auto',
                    height: verticalFill ? '100%' : 'auto',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    padding: parsePadding(padding, theme),
                    boxSizing: 'border-box'
                },
                _j[childSelector] = childStyles,
                _j),
            disableShrink && disableShrinkStyles,
            grow && {
                flexGrow: grow === true ? 1 : grow,
            },
            horizontalAlign && (_k = {},
                _k[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                _k),
            verticalAlign && (_l = {},
                _l[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                _l),
            horizontal &&
                columnGap.value > 0 && (_m = {},
                // apply gap margin to every direct child except the first direct child if the direction is not reversed,
                // and the last direct one if it is
                _m[reversed ? "".concat(childSelector, ":not(:last-child)") : "".concat(childSelector, ":not(:first-child)")] = {
                    marginLeft: "".concat(columnGap.value).concat(columnGap.unit),
                },
                _m),
            !horizontal &&
                rowGap.value > 0 && (_o = {},
                // apply gap margin to every direct child except the first direct child if the direction is not reversed,
                // and the last direct one if it is
                _o[reversed ? "".concat(childSelector, ":not(:last-child)") : "".concat(childSelector, ":not(:first-child)")] = {
                    marginTop: "".concat(rowGap.value).concat(rowGap.unit),
                },
                _o),
            className,
        ],
        // TODO: this cast may be hiding some potential issues with styling and name
        //        lookups and should be removed
    };
};
//# sourceMappingURL=Stack.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/StackItem/StackItem.js




var StackItemView = function (props) {
    var children = props.children;
    var nativeProps = Object(properties["h" /* getNativeProps */])(props, properties["i" /* htmlElementProperties */]);
    // eslint-disable-next-line eqeqeq
    if (children == null) {
        return null;
    }
    var Slots = Object(slots["b" /* getSlots */])(props, {
        root: 'div',
    });
    return Object(slots["c" /* withSlots */])(Slots.root, Object(tslib_es6["a" /* __assign */])({}, nativeProps), children);
};
var StackItem = Object(createComponent["a" /* createComponent */])(StackItemView, {
    displayName: 'StackItem',
    styles: StackItemStyles,
});
/* harmony default export */ var StackItem_StackItem = (StackItem);
//# sourceMappingURL=StackItem.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Stack/Stack.js

/** @jsxRuntime classic */
/** @jsx withSlots */





var StackView = function (props) {
    var _a = props.as, RootType = _a === void 0 ? 'div' : _a, _b = props.disableShrink, disableShrink = _b === void 0 ? false : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.doNotRenderFalsyValues, 
    // eslint-disable-next-line deprecation/deprecation
    doNotRenderFalsyValues = _c === void 0 ? false : _c, _d = props.enableScopedSelectors, enableScopedSelectors = _d === void 0 ? false : _d, wrap = props.wrap, rest = Object(tslib_es6["e" /* __rest */])(props, ["as", "disableShrink", "doNotRenderFalsyValues", "enableScopedSelectors", "wrap"]);
    Object(warnDeprecations["a" /* warnDeprecations */])('Stack', props, {
        gap: 'tokens.childrenGap',
        maxHeight: 'tokens.maxHeight',
        maxWidth: 'tokens.maxWidth',
        padding: 'tokens.padding',
    });
    var stackChildren = _processStackChildren(props.children, {
        disableShrink: disableShrink,
        enableScopedSelectors: enableScopedSelectors,
        doNotRenderFalsyValues: doNotRenderFalsyValues,
    });
    var nativeProps = Object(properties["h" /* getNativeProps */])(rest, properties["i" /* htmlElementProperties */]);
    var Slots = Object(slots["b" /* getSlots */])(props, {
        root: RootType,
        inner: 'div',
    });
    if (wrap) {
        return (Object(slots["c" /* withSlots */])(Slots.root, Object(tslib_es6["a" /* __assign */])({}, nativeProps),
            Object(slots["c" /* withSlots */])(Slots.inner, null, stackChildren)));
    }
    return Object(slots["c" /* withSlots */])(Slots.root, Object(tslib_es6["a" /* __assign */])({}, nativeProps), stackChildren);
};
function _processStackChildren(children, _a) {
    var disableShrink = _a.disableShrink, enableScopedSelectors = _a.enableScopedSelectors, doNotRenderFalsyValues = _a.doNotRenderFalsyValues;
    var childrenArray = react["Children"].toArray(children);
    childrenArray = react["Children"].map(childrenArray, function (child) {
        if (!child) {
            return doNotRenderFalsyValues ? null : child;
        }
        // We need to allow children that aren't falsy values, but not valid elements since they could be
        // a string like <Stack>{'sample string'}</Stack>
        if (!react["isValidElement"](child)) {
            return child;
        }
        if (child.type === react["Fragment"]) {
            return child.props.children
                ? _processStackChildren(child.props.children, { disableShrink: disableShrink, enableScopedSelectors: enableScopedSelectors, doNotRenderFalsyValues: doNotRenderFalsyValues })
                : null;
        }
        var childAsReactElement = child;
        var defaultItemProps = {};
        if (_isStackItem(child)) {
            defaultItemProps = { shrink: !disableShrink };
        }
        var childClassName = childAsReactElement.props.className;
        return react["cloneElement"](childAsReactElement, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, defaultItemProps), childAsReactElement.props), (childClassName && { className: childClassName })), (enableScopedSelectors && { className: Object(css["a" /* css */])(Stack_styles_GlobalClassNames.child, childClassName) })));
    });
    return childrenArray;
}
function _isStackItem(item) {
    // In theory, we should be able to just check item.type === StackItem.
    // However, under certain unclear circumstances (see https://github.com/microsoft/fluentui/issues/10785),
    // the object identity is different despite the function implementation being the same.
    return (!!item &&
        typeof item === 'object' &&
        !!item.type &&
        // StackItem is generated by createComponent, so we need to check its displayName instead of name
        item.type.displayName === StackItem.displayName);
}
var StackStatics = {
    Item: StackItem,
};
var Stack = Object(createComponent["a" /* createComponent */])(StackView, {
    displayName: 'Stack',
    styles: styles,
    statics: StackStatics,
});
/* harmony default export */ var Stack_Stack = (Stack);
//# sourceMappingURL=Stack.js.map

/***/ }),

/***/ "v5UV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Pivot; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useControllableValue.js
var useControllableValue = __webpack_require__("Txh6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warn.js
var warn = __webpack_require__("CDZR");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var lib_rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/CommandButton/CommandButton.js
var CommandButton = __webpack_require__("2xtc");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useRefEffect.js
var useRefEffect = __webpack_require__("kbch");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("9yo2");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/observeResize.js

/**
 * Wrapper for ResizeObserver, with fallback for browsers that don't support ResizeObserver.
 *
 * Calls the onResize callback once layout is complete, and again whenever any of the target(s) change size.
 * Or if ResizeObserver isn't supported, calls the callback whenever the window changes size.
 *
 * @param target - Either a single element, or array of elements to watch for size changes.
 * @param onResize - Callback to be notified when layout is complete, and when the target(s) change size.
 *    If this browser supports ResizeObserver, the callback will be passed the ResizeObserverEntry[] array.
 *    Otherwise, the entries array will be undefined, and you'll need to find another way to get the element's size,
 *    (e.g. clientWidth/clientHeight or getBoundingClientRect).
 *
 * @returns A function to clean up the observer/listener.
 */
var observeResize = function (target, onResize) {
    if (typeof ResizeObserver !== 'undefined') {
        var observer_1 = new ResizeObserver(onResize);
        if (Array.isArray(target)) {
            target.forEach(function (t) { return observer_1.observe(t); });
        }
        else {
            observer_1.observe(target);
        }
        return function () { return observer_1.disconnect(); };
    }
    else {
        // Fallback for browsers that don't support ResizeObserver
        var onResizeWrapper_1 = function () { return onResize(undefined); };
        var win_1 = Object(getWindow["a" /* getWindow */])(Array.isArray(target) ? target[0] : target);
        if (!win_1) {
            // Can't listen for resize if we can't get the window object
            return function () {
                // Nothing to clean up
            };
        }
        // Listen for the first animation frame, which will happen after layout is complete
        var animationFrameId_1 = win_1.requestAnimationFrame(onResizeWrapper_1);
        win_1.addEventListener('resize', onResizeWrapper_1, false);
        return function () {
            win_1.cancelAnimationFrame(animationFrameId_1);
            win_1.removeEventListener('resize', onResizeWrapper_1, false);
        };
    }
};
//# sourceMappingURL=observeResize.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/useOverflow.js




/**
 * Track whether any items don't fit within their container, and move them to the overflow menu.
 * Items are moved into the overflow menu from back to front, excluding pinned items.
 *
 * The overflow menu button must be the last sibling of all of the items that can be put into the overflow, and it
 * must be hooked up to the `setMenuButtonRef` setter function that's returned by `useOverflow`:
 * ```ts
 * const overflow = useOverflow(...);
 * ```
 * ```jsx
 * <Container>
 *  <Item /> // Index 0
 *  <Item /> // Index 1
 *  ...
 *  <Button ref={overflow.setMenuButtonRef} /> // Can be any React.Component or HTMLElement
 * </Container>
 * ```
 */
var useOverflow = function (_a) {
    var onOverflowItemsChanged = _a.onOverflowItemsChanged, rtl = _a.rtl, pinnedIndex = _a.pinnedIndex;
    var updateOverflowRef = react["useRef"]();
    var containerWidthRef = react["useRef"]();
    // Attach a resize observer to the container
    var containerRef = Object(useRefEffect["a" /* useRefEffect */])(function (container) {
        var cleanupObserver = observeResize(container, function (entries) {
            containerWidthRef.current = entries ? entries[0].contentRect.width : container.clientWidth;
            if (updateOverflowRef.current) {
                updateOverflowRef.current();
            }
        });
        return function () {
            cleanupObserver();
            containerWidthRef.current = undefined;
        };
    });
    var menuButtonRef = Object(useRefEffect["a" /* useRefEffect */])(function (menuButton) {
        containerRef(menuButton.parentElement);
        return function () { return containerRef(null); };
    });
    Object(useIsomorphicLayoutEffect["a" /* useIsomorphicLayoutEffect */])(function () {
        var container = containerRef.current;
        var menuButton = menuButtonRef.current;
        if (!container || !menuButton) {
            return;
        }
        // items contains the container's children, excluding the overflow menu button itself
        var items = [];
        for (var i = 0; i < container.children.length; i++) {
            var item = container.children[i];
            if (item instanceof HTMLElement && item !== menuButton) {
                items.push(item);
            }
        }
        // Keep track of the minimum width of the container to fit each child index.
        // This cache is an integral part of the algorithm and not just a performance optimization: it allows us to
        // recalculate the overflowIndex on subsequent resizes even if some items are already inside the overflow.
        var minContainerWidth = [];
        var extraWidth = 0; // The accumulated width of items that don't move into the overflow
        updateOverflowRef.current = function () {
            var containerWidth = containerWidthRef.current;
            if (containerWidth === undefined) {
                return;
            }
            // Iterate the items in reverse order until we find one that fits within the bounds of the container
            for (var i = items.length - 1; i >= 0; i--) {
                // Calculate the min container width for this item if we haven't done so yet
                if (minContainerWidth[i] === undefined) {
                    var itemOffsetEnd = rtl ? containerWidth - items[i].offsetLeft : items[i].offsetLeft + items[i].offsetWidth;
                    // If the item after this one is pinned, reserve space for it
                    if (i + 1 < items.length && i + 1 === pinnedIndex) {
                        // Use distance between the end of the previous item and this one (rather than the
                        // pinned item's offsetWidth), to account for any margin between the items.
                        extraWidth = minContainerWidth[i + 1] - itemOffsetEnd;
                    }
                    // Reserve space for the menu button after the first item was added to the overflow
                    if (i === items.length - 2) {
                        extraWidth += menuButton.offsetWidth;
                    }
                    minContainerWidth[i] = itemOffsetEnd + extraWidth;
                }
                if (containerWidth > minContainerWidth[i]) {
                    setOverflowIndex(i + 1);
                    return;
                }
            }
            // If we got here, nothing fits outside the overflow
            setOverflowIndex(0);
        };
        var prevOverflowIndex = items.length;
        var setOverflowIndex = function (overflowIndex) {
            if (prevOverflowIndex !== overflowIndex) {
                prevOverflowIndex = overflowIndex;
                onOverflowItemsChanged(overflowIndex, items.map(function (ele, index) { return ({
                    ele: ele,
                    isOverflowing: index >= overflowIndex && index !== pinnedIndex,
                }); }));
            }
        };
        var cancelAnimationFrame = undefined;
        // If the container width is already known from a previous render, update the overflow with its width.
        // Do this in an animation frame to avoid forcing layout to happen early.
        if (containerWidthRef.current !== undefined) {
            var win_1 = Object(getWindow["a" /* getWindow */])(container);
            if (win_1) {
                var animationFrameId_1 = win_1.requestAnimationFrame(updateOverflowRef.current);
                cancelAnimationFrame = function () { return win_1.cancelAnimationFrame(animationFrameId_1); };
            }
        }
        return function () {
            if (cancelAnimationFrame) {
                cancelAnimationFrame();
            }
            // On cleanup, need to remove all items from the overflow
            // so they don't have stale properties on the next render
            setOverflowIndex(items.length);
            updateOverflowRef.current = undefined;
        };
    });
    return { menuButtonRef: menuButtonRef };
};
//# sourceMappingURL=useOverflow.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Pivot/PivotItem.js
var PivotItem = __webpack_require__("I0MF");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Pivot/Pivot.base.js










var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var COMPONENT_NAME = 'Pivot';
var getTabId = function (props, pivotId, itemKey, index) {
    if (props.getTabId) {
        return props.getTabId(itemKey, index);
    }
    return pivotId + "-Tab".concat(index);
};
// Gets the set of PivotLinks as array of IPivotItemProps
// The set of Links is determined by child components of type PivotItem
var getLinkItems = function (props, pivotId) {
    var result = {
        links: [],
        keyToIndexMapping: {},
        keyToTabIdMapping: {},
    };
    react["Children"].forEach(react["Children"].toArray(props.children), function (child, index) {
        if (isPivotItem(child)) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = child.props, linkText = _a.linkText, pivotItemProps = Object(tslib_es6["e" /* __rest */])(_a, ["linkText"]);
            var itemKey = child.props.itemKey || index.toString();
            result.links.push(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ headerText: linkText }, pivotItemProps), { itemKey: itemKey }));
            result.keyToIndexMapping[itemKey] = index;
            result.keyToTabIdMapping[itemKey] = getTabId(props, pivotId, itemKey, index);
        }
        else if (child) {
            Object(warn["a" /* warn */])('The children of a Pivot component must be of type PivotItem to be rendered.');
        }
    });
    return result;
};
var isPivotItem = function (item) {
    var _a;
    return react["isValidElement"](item) && ((_a = item.type) === null || _a === void 0 ? void 0 : _a.name) === PivotItem["a" /* PivotItem */].name;
};
var PivotBase = react["forwardRef"](function (props, ref) {
    var focusZoneRef = react["useRef"](null);
    var overflowMenuButtonComponentRef = react["useRef"](null);
    var pivotId = Object(useId["a" /* useId */])('Pivot');
    var _a = Object(useControllableValue["a" /* useControllableValue */])(props.selectedKey, props.defaultSelectedKey), selectedKey = _a[0], setSelectedKey = _a[1];
    var componentRef = props.componentRef, theme = props.theme, linkSize = props.linkSize, linkFormat = props.linkFormat, overflowBehavior = props.overflowBehavior, overflowAriaLabel = props.overflowAriaLabel, focusZoneProps = props.focusZoneProps, overflowButtonAs = props.overflowButtonAs;
    var classNames;
    var nameProps = {
        'aria-label': props['aria-label'],
        'aria-labelledby': props['aria-labelledby'],
    };
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */], [
        'aria-label',
        'aria-labelledby',
    ]);
    var linkCollection = getLinkItems(props, pivotId);
    react["useImperativeHandle"](componentRef, function () { return ({
        focus: function () {
            var _a;
            (_a = focusZoneRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
    }); });
    var renderLinkContent = function (link) {
        if (!link) {
            return null;
        }
        var itemCount = link.itemCount, itemIcon = link.itemIcon, headerText = link.headerText;
        return (react["createElement"]("span", { className: classNames.linkContent },
            itemIcon !== undefined && (react["createElement"]("span", { className: classNames.icon },
                react["createElement"](Icon["a" /* Icon */], { iconName: itemIcon }))),
            headerText !== undefined && react["createElement"]("span", { className: classNames.text },
                " ",
                link.headerText),
            itemCount !== undefined && react["createElement"]("span", { className: classNames.count },
                " (",
                itemCount,
                ")")));
    };
    var renderPivotLink = function (renderLinkCollection, link, renderPivotLinkSelectedKey, className) {
        var itemKey = link.itemKey, headerButtonProps = link.headerButtonProps, onRenderItemLink = link.onRenderItemLink;
        var tabId = renderLinkCollection.keyToTabIdMapping[itemKey];
        var linkContent;
        var isSelected = renderPivotLinkSelectedKey === itemKey;
        if (onRenderItemLink) {
            linkContent = onRenderItemLink(link, renderLinkContent);
        }
        else {
            linkContent = renderLinkContent(link);
        }
        var contentString = link.headerText || '';
        contentString += link.itemCount ? ' (' + link.itemCount + ')' : '';
        // Adding space supplementary for icon
        contentString += link.itemIcon ? ' xx' : '';
        var itemSemantics = link.role && link.role !== 'tab'
            ? {
                role: link.role,
            }
            : {
                role: 'tab',
                'aria-selected': isSelected,
            };
        return (react["createElement"](CommandButton["a" /* CommandButton */], Object(tslib_es6["a" /* __assign */])({}, headerButtonProps, itemSemantics, { id: tabId, key: itemKey, className: Object(css["a" /* css */])(className, isSelected && classNames.linkIsSelected), 
            // eslint-disable-next-line react/jsx-no-bind
            onClick: function (ev) { return onLinkClick(itemKey, ev); }, 
            // eslint-disable-next-line react/jsx-no-bind
            onKeyDown: function (ev) { return onKeyDown(itemKey, ev); }, "aria-label": link.ariaLabel, name: link.headerText, keytipProps: link.keytipProps, "data-content": contentString }), linkContent));
    };
    var onLinkClick = function (itemKey, ev) {
        ev.preventDefault();
        updateSelectedItem(itemKey, ev);
    };
    var onKeyDown = function (itemKey, ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes["a" /* KeyCodes */].enter) {
            ev.preventDefault();
            updateSelectedItem(itemKey);
        }
    };
    var updateSelectedItem = function (itemKey, ev) {
        var _a;
        setSelectedKey(itemKey);
        linkCollection = getLinkItems(props, pivotId);
        if (props.onLinkClick && linkCollection.keyToIndexMapping[itemKey] >= 0) {
            var selectedIndex = linkCollection.keyToIndexMapping[itemKey];
            var item = react["Children"].toArray(props.children)[selectedIndex];
            if (isPivotItem(item)) {
                props.onLinkClick(item, ev);
            }
        }
        (_a = overflowMenuButtonComponentRef.current) === null || _a === void 0 ? void 0 : _a.dismissMenu();
    };
    var renderPivotItem = function (itemKey, isActive) {
        if (props.headersOnly || !itemKey) {
            return null;
        }
        var index = linkCollection.keyToIndexMapping[itemKey];
        var selectedTabId = linkCollection.keyToTabIdMapping[itemKey];
        return (react["createElement"]("div", { role: "tabpanel", hidden: !isActive, key: itemKey, "aria-hidden": !isActive, "aria-labelledby": selectedTabId, className: classNames.itemContainer }, react["Children"].toArray(props.children)[index]));
    };
    var isKeyValid = function (itemKey) {
        return itemKey === null || (itemKey !== undefined && linkCollection.keyToIndexMapping[itemKey] !== undefined);
    };
    var getSelectedKey = function () {
        if (isKeyValid(selectedKey)) {
            return selectedKey;
        }
        if (linkCollection.links.length) {
            return linkCollection.links[0].itemKey;
        }
        return undefined;
    };
    classNames = getClassNames(props.styles, {
        theme: theme,
        linkSize: linkSize,
        linkFormat: linkFormat,
    });
    var renderedSelectedKey = getSelectedKey();
    var renderedSelectedIndex = renderedSelectedKey ? linkCollection.keyToIndexMapping[renderedSelectedKey] : 0;
    var items = linkCollection.links.map(function (l) {
        return renderPivotLink(linkCollection, l, renderedSelectedKey, classNames.link);
    });
    // The overflow menu starts empty and items[] is updated as the overflow items change
    var overflowMenuProps = react["useMemo"](function () { return ({
        items: [],
        alignTargetEdge: true,
        directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomRightEdge,
    }); }, []);
    var overflowMenuButtonRef = useOverflow({
        onOverflowItemsChanged: function (overflowIndex, elements) {
            // Set data-is-overflowing on each item
            elements.forEach(function (_a) {
                var ele = _a.ele, isOverflowing = _a.isOverflowing;
                return (ele.dataset.isOverflowing = "".concat(isOverflowing));
            });
            // Update the menu items
            overflowMenuProps.items = linkCollection.links
                .slice(overflowIndex)
                .filter(function (link) { return link.itemKey !== renderedSelectedKey; })
                .map(function (link, index) {
                link.role = 'menuitem';
                return {
                    key: link.itemKey || "".concat(overflowIndex + index),
                    onRender: function () { return renderPivotLink(linkCollection, link, renderedSelectedKey, classNames.linkInMenu); },
                };
            });
        },
        rtl: Object(lib_rtl["a" /* getRTL */])(theme),
        pinnedIndex: renderedSelectedIndex,
    }).menuButtonRef;
    var OverflowButton = overflowButtonAs ? overflowButtonAs : CommandButton["a" /* CommandButton */];
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ ref: ref }, divProps),
        react["createElement"](FocusZone["a" /* FocusZone */], Object(tslib_es6["a" /* __assign */])({ componentRef: focusZoneRef, role: "tablist" }, nameProps, { direction: FocusZone_types["a" /* FocusZoneDirection */].horizontal }, focusZoneProps, { className: Object(css["a" /* css */])(classNames.root, focusZoneProps === null || focusZoneProps === void 0 ? void 0 : focusZoneProps.className) }),
            items,
            overflowBehavior === 'menu' && (react["createElement"](OverflowButton, { className: Object(css["a" /* css */])(classNames.link, classNames.overflowMenuButton), elementRef: overflowMenuButtonRef, componentRef: overflowMenuButtonComponentRef, menuProps: overflowMenuProps, menuIconProps: { iconName: 'More', style: { color: 'inherit' } }, ariaLabel: overflowAriaLabel, role: "tab" }))),
        renderedSelectedKey &&
            linkCollection.links.map(function (link) {
                return (link.alwaysRender === true || renderedSelectedKey === link.itemKey) &&
                    renderPivotItem(link.itemKey, renderedSelectedKey === link.itemKey);
            })));
});
PivotBase.displayName = COMPONENT_NAME;
//# sourceMappingURL=Pivot.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Pivot/Pivot.styles.js



var globalClassNames = {
    count: 'ms-Pivot-count',
    icon: 'ms-Pivot-icon',
    linkIsSelected: 'is-selected',
    link: 'ms-Pivot-link',
    linkContent: 'ms-Pivot-linkContent',
    root: 'ms-Pivot',
    rootIsLarge: 'ms-Pivot--large',
    rootIsTabs: 'ms-Pivot--tabs',
    text: 'ms-Pivot-text',
    linkInMenu: 'ms-Pivot-linkInMenu',
    overflowMenuButton: 'ms-Pivot-overflowMenuButton',
};
var getLinkStyles = function (props, classNames, isLinkInOverflowMenu) {
    var _a, _b, _c;
    if (isLinkInOverflowMenu === void 0) { isLinkInOverflowMenu = false; }
    var linkSize = props.linkSize, linkFormat = props.linkFormat;
    var _d = props.theme, semanticColors = _d.semanticColors, fonts = _d.fonts;
    var rootIsLarge = linkSize === 'large';
    var rootIsTabs = linkFormat === 'tabs';
    return [
        fonts.medium,
        {
            color: semanticColors.actionLink,
            padding: '0 8px',
            position: 'relative',
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            selectors: {
                ':hover': {
                    backgroundColor: semanticColors.buttonBackgroundHovered,
                    color: semanticColors.buttonTextHovered,
                    cursor: 'pointer',
                },
                ':active': {
                    backgroundColor: semanticColors.buttonBackgroundPressed,
                    color: semanticColors.buttonTextHovered,
                },
                ':focus': {
                    outline: 'none',
                },
            },
        },
        !isLinkInOverflowMenu && [
            {
                display: 'inline-block',
                lineHeight: 44,
                height: 44,
                marginRight: 8,
                textAlign: 'center',
                selectors: (_a = {},
                    _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus")] = {
                        outline: "1px solid ".concat(semanticColors.focusBorder),
                    },
                    _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:after, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:after")] = {
                        content: 'attr(data-content)',
                        position: 'relative',
                        border: 0,
                    },
                    _a[':before'] = {
                        backgroundColor: 'transparent',
                        bottom: 0,
                        content: '""',
                        height: 2,
                        left: 8,
                        position: 'absolute',
                        right: 8,
                        transition: "left ".concat(lib["c" /* AnimationVariables */].durationValue2, " ").concat(lib["c" /* AnimationVariables */].easeFunction2, ",\n                        right ").concat(lib["c" /* AnimationVariables */].durationValue2, " ").concat(lib["c" /* AnimationVariables */].easeFunction2),
                    },
                    _a[':after'] = {
                        color: 'transparent',
                        content: 'attr(data-content)',
                        display: 'block',
                        fontWeight: lib["e" /* FontWeights */].bold,
                        height: 1,
                        overflow: 'hidden',
                        visibility: 'hidden',
                    },
                    _a),
            },
            rootIsLarge && {
                fontSize: fonts.large.fontSize,
            },
            rootIsTabs && [
                {
                    marginRight: 0,
                    height: 44,
                    lineHeight: 44,
                    backgroundColor: semanticColors.buttonBackground,
                    padding: '0 10px',
                    verticalAlign: 'top',
                    selectors: (_b = {
                            ':focus': {
                                outlineOffset: '-2px',
                            }
                        },
                        _b[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus::before, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus::before")] = {
                            height: 'auto',
                            background: 'transparent',
                            transition: 'none',
                        },
                        _b['&:hover, &:focus'] = {
                            color: semanticColors.buttonTextCheckedHovered,
                        },
                        _b['&:active, &:hover'] = {
                            color: semanticColors.primaryButtonText,
                            backgroundColor: semanticColors.primaryButtonBackground,
                        },
                        _b["&.".concat(classNames.linkIsSelected)] = {
                            backgroundColor: semanticColors.primaryButtonBackground,
                            color: semanticColors.primaryButtonText,
                            fontWeight: lib["e" /* FontWeights */].regular,
                            selectors: (_c = {
                                    ':before': {
                                        backgroundColor: 'transparent',
                                        transition: 'none',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        content: '""',
                                        height: 0,
                                    },
                                    ':hover': {
                                        backgroundColor: semanticColors.primaryButtonBackgroundHovered,
                                        color: semanticColors.primaryButtonText,
                                    },
                                    ':active': {
                                        backgroundColor: semanticColors.primaryButtonBackgroundPressed,
                                        color: semanticColors.primaryButtonText,
                                    }
                                },
                                _c[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ fontWeight: lib["e" /* FontWeights */].semibold, color: 'HighlightText', background: 'Highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                                _c),
                        },
                        // eslint-disable-next-line @fluentui/max-len
                        _b[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &.").concat(classNames.linkIsSelected, ":focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &.").concat(classNames.linkIsSelected, ":focus")] = {
                            outlineColor: semanticColors.primaryButtonText,
                        },
                        _b),
                },
            ],
        ],
    ];
};
var getStyles = function (props) {
    var _a, _b, _c, _d;
    var className = props.className, linkSize = props.linkSize, linkFormat = props.linkFormat, theme = props.theme;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(globalClassNames, theme);
    var rootIsLarge = linkSize === 'large';
    var rootIsTabs = linkFormat === 'tabs';
    return {
        root: [
            classNames.root,
            fonts.medium,
            lib["H" /* normalize */],
            {
                position: 'relative',
                color: semanticColors.link,
                whiteSpace: 'nowrap',
            },
            rootIsLarge && classNames.rootIsLarge,
            rootIsTabs && classNames.rootIsTabs,
            className,
        ],
        itemContainer: {
            selectors: {
                '&[hidden]': {
                    display: 'none',
                },
            },
        },
        link: Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([
            classNames.link
        ], getLinkStyles(props, classNames), true), [
            (_a = {},
                _a["&[data-is-overflowing='true']"] = {
                    display: 'none',
                },
                _a),
        ], false),
        overflowMenuButton: [
            classNames.overflowMenuButton,
            (_b = {
                    visibility: 'hidden',
                    position: 'absolute',
                    right: 0
                },
                _b[".".concat(classNames.link, "[data-is-overflowing='true'] ~ &")] = {
                    visibility: 'visible',
                    position: 'relative',
                },
                _b),
        ],
        linkInMenu: Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([
            classNames.linkInMenu
        ], getLinkStyles(props, classNames, true), true), [
            {
                textAlign: 'left',
                width: '100%',
                height: 36,
                lineHeight: 36,
            },
        ], false),
        linkIsSelected: [
            classNames.link,
            classNames.linkIsSelected,
            {
                fontWeight: lib["e" /* FontWeights */].semibold,
                selectors: (_c = {
                        ':before': {
                            backgroundColor: semanticColors.inputBackgroundChecked,
                            selectors: (_d = {},
                                _d[lib["f" /* HighContrastSelector */]] = {
                                    backgroundColor: 'Highlight',
                                },
                                _d),
                        },
                        ':hover::before': {
                            left: 0,
                            right: 0,
                        }
                    },
                    _c[lib["f" /* HighContrastSelector */]] = {
                        color: 'Highlight',
                    },
                    _c),
            },
        ],
        linkContent: [
            classNames.linkContent,
            {
                flex: '0 1 100%',
                selectors: {
                    '& > * ': {
                        marginLeft: 4,
                    },
                    '& > *:first-child': {
                        marginLeft: 0,
                    },
                },
            },
        ],
        text: [
            classNames.text,
            {
                display: 'inline-block',
                verticalAlign: 'top',
            },
        ],
        count: [
            classNames.count,
            {
                display: 'inline-block',
                verticalAlign: 'top',
            },
        ],
        icon: classNames.icon,
    };
};
//# sourceMappingURL=Pivot.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Pivot/Pivot.js



/**
 * The Pivot control and related tabs pattern are used for navigating frequently accessed,
 * distinct content categories. Pivots allow for navigation between two or more content
 * views and relies on text headers to articulate the different sections of content.
 */
var Pivot = Object(styled["a" /* styled */])(PivotBase, getStyles, undefined, {
    scope: 'Pivot',
});
//# sourceMappingURL=Pivot.js.map

/***/ }),

/***/ "x09k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDecorator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("csto");



var BaseDecorator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* hoistMethods */ "a"])(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* unhoistMethods */ "b"])(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=BaseDecorator.js.map

/***/ }),

/***/ "xRnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimaryButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3eXo");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GAaB");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Favm");




/**
 * {@docCategory Button}
 */
var PrimaryButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(PrimaryButton, _super);
    function PrimaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryButton.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__[/* DefaultButton */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this.props, { primary: true, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_2__[/* nullRender */ "a"] }));
    };
    PrimaryButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "b"])([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* customizable */ "a"])('PrimaryButton', ['theme', 'styles'], true)
    ], PrimaryButton);
    return PrimaryButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
//# sourceMappingURL=PrimaryButton.js.map

/***/ }),

/***/ "xndG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PeoplePickerItem; });

// UNUSED EXPORTS: PeoplePickerItemBase

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.js + 2 modules
var Persona = __webpack_require__("tYdO");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Persona/Persona.types.js
var Persona_types = __webpack_require__("Ggpd");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__("9bYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/BasePicker.types.js
var BasePicker_types = __webpack_require__("KSXz");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/BaseButton.classNames.js
var BaseButton_classNames = __webpack_require__("M1CV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.styles.js



var GlobalClassNames = {
    root: 'ms-PickerPersona-container',
    itemContent: 'ms-PickerItem-content',
    removeButton: 'ms-PickerItem-removeButton',
    isSelected: 'is-selected',
    isInvalid: 'is-invalid',
};
var REMOVE_BUTTON_SIZE = 24;
var PICKER_PERSONA_RADIUS = 15;
function getStyles(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var className = props.className, theme = props.theme, selected = props.selected, invalid = props.invalid, disabled = props.disabled;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var personaRootStyles = {
        color: 'inherit',
    };
    // set text color to inherit to allow focus styles to control persona text colors
    var personaPrimaryTextStyles = [
        selected &&
            !invalid &&
            !disabled && {
            color: 'inherit',
            selectors: (_a = {
                    ':hover': {
                        color: 'inherit',
                    }
                },
                _a[lib["f" /* HighContrastSelector */]] = {
                    color: 'HighlightText',
                },
                _a),
        },
        ((invalid && !selected) || (invalid && selected && disabled)) && {
            color: 'inherit',
            borderBottom: "2px dotted currentColor",
            selectors: (_b = {},
                _b[".".concat(classNames.root, ":hover &")] = {
                    // override Persona root:hover selector
                    color: 'inherit',
                },
                _b),
        },
        invalid &&
            selected &&
            !disabled && {
            color: 'inherit',
            borderBottom: "2px dotted currentColor",
            selectors: {
                ':hover': {
                    color: 'inherit',
                },
            },
        },
        disabled && {
            selectors: (_c = {},
                _c[lib["f" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                },
                _c),
        },
    ];
    var personaSecondaryTextStyles = [
        selected &&
            !invalid &&
            !disabled && {
            color: 'inherit',
            selectors: (_d = {
                    ':hover': {
                        color: 'inherit',
                    }
                },
                _d[lib["f" /* HighContrastSelector */]] = {
                    color: 'HighlightText',
                },
                _d),
        },
    ];
    var personaCoinInitialsStyles = [
        invalid && {
            fontSize: fonts.xLarge.fontSize,
        },
    ];
    return {
        root: [
            classNames.root,
            Object(lib["u" /* getFocusStyle */])(theme, { inset: -2 }),
            {
                borderRadius: PICKER_PERSONA_RADIUS,
                display: 'inline-flex',
                alignItems: 'center',
                background: palette.neutralLighter,
                margin: '1px 2px',
                cursor: 'default',
                userSelect: 'none',
                maxWidth: 300,
                verticalAlign: 'middle',
                minWidth: 0,
                selectors: (_e = {
                        ':hover': {
                            background: !selected && !disabled ? palette.neutralLight : '',
                        }
                    },
                    _e[lib["f" /* HighContrastSelector */]] = [{ border: '1px solid WindowText' }, disabled && { borderColor: 'GrayText' }],
                    _e),
            },
            selected &&
                !disabled && [
                classNames.isSelected,
                {
                    selectors: (_f = {
                            ':focus-within': {
                                background: palette.themePrimary,
                                color: palette.white,
                            }
                        },
                        _f[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'HighLight', background: 'Highlight' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                        _f),
                },
            ],
            invalid && [classNames.isInvalid],
            invalid &&
                selected &&
                !disabled && {
                ':focus-within': {
                    background: palette.redDark,
                    color: palette.white,
                },
            },
            ((invalid && !selected) || (invalid && selected && disabled)) && {
                color: palette.redDark,
            },
            className,
        ],
        itemContent: [
            classNames.itemContent,
            {
                flex: '0 1 auto',
                minWidth: 0,
                // CSS below is needed for IE 11 to properly truncate long persona names in the picker
                // and to clip the presence indicator (in all browsers)
                maxWidth: '100%',
                overflow: 'hidden',
            },
        ],
        removeButton: [
            classNames.removeButton,
            {
                borderRadius: PICKER_PERSONA_RADIUS,
                color: palette.neutralPrimary,
                flex: '0 0 auto',
                width: REMOVE_BUTTON_SIZE,
                height: REMOVE_BUTTON_SIZE,
                selectors: {
                    ':hover': {
                        background: palette.neutralTertiaryAlt,
                        color: palette.neutralDark,
                    },
                },
            },
            selected && [
                Object(lib["u" /* getFocusStyle */])(theme, {
                    inset: 2,
                    borderColor: 'transparent',
                    highContrastStyle: { inset: 2, left: 1, top: 1, bottom: 1, right: 1, outlineColor: 'ButtonText' },
                    outlineColor: palette.white,
                    borderRadius: PICKER_PERSONA_RADIUS,
                }),
                {
                    selectors: (_g = {
                            ':hover': {
                                color: palette.white,
                                background: palette.themeDark,
                            },
                            ':active': {
                                color: palette.white,
                                background: palette.themeDarker,
                            },
                            ':focus': {
                                color: palette.white,
                            }
                        },
                        _g[lib["f" /* HighContrastSelector */]] = {
                            color: 'HighlightText',
                        },
                        _g),
                },
                invalid && {
                    selectors: {
                        ':hover': {
                            color: palette.white,
                            background: palette.red,
                        },
                        ':active': {
                            color: palette.white,
                            background: palette.redDark,
                        },
                    },
                },
            ],
            disabled && {
                selectors: (_h = {},
                    _h[".".concat(BaseButton_classNames["a" /* ButtonGlobalClassNames */].msButtonIcon)] = {
                        color: semanticColors.buttonText,
                    },
                    _h),
            },
        ],
        subComponentStyles: {
            persona: {
                root: personaRootStyles,
                primaryText: personaPrimaryTextStyles,
                secondaryText: personaSecondaryTextStyles,
            },
            personaCoin: {
                initials: personaCoinInitialsStyles,
            },
        },
    };
}
//# sourceMappingURL=PeoplePickerItem.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.js







var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var PeoplePickerItemBase = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected, removeButtonAriaLabel = props.removeButtonAriaLabel, styles = props.styles, theme = props.theme, className = props.className, disabled = props.disabled, removeButtonIconProps = props.removeButtonIconProps;
    var buttonRef = react["createRef"]();
    var handleClick = function () {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var itemId = Object(getId["a" /* getId */])();
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        selected: selected,
        disabled: disabled,
        invalid: item.ValidationState === BasePicker_types["a" /* ValidationState */].warning,
    });
    var personaStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.persona
        : undefined;
    var personaCoinStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.personaCoin
        : undefined;
    return (react["createElement"]("div", { "data-selection-index": index, className: classNames.root, role: 'listitem', key: index, onClick: handleClick },
        react["createElement"]("div", { className: classNames.itemContent, id: 'selectedItemPersona-' + itemId },
            react["createElement"](Persona["a" /* Persona */], Object(tslib_es6["a" /* __assign */])({ size: Persona_types["c" /* PersonaSize */].size24, styles: personaStyles, coinProps: { styles: personaCoinStyles } }, item))),
        react["createElement"](IconButton["a" /* IconButton */], { componentRef: buttonRef, id: itemId, onClick: onRemoveItem, disabled: disabled, iconProps: removeButtonIconProps !== null && removeButtonIconProps !== void 0 ? removeButtonIconProps : { iconName: 'Cancel' }, styles: { icon: { fontSize: '12px' } }, className: classNames.removeButton, ariaLabel: removeButtonAriaLabel, "aria-labelledby": "".concat(itemId, " selectedItemPersona-").concat(itemId) })));
};
var PeoplePickerItem = Object(styled["a" /* styled */])(PeoplePickerItemBase, getStyles, undefined, { scope: 'PeoplePickerItem' });
//# sourceMappingURL=PeoplePickerItem.js.map

/***/ }),

/***/ "y/yH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MS_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ogYq");

/** Class names used in themeable and non-themeable Icon components */
var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyleSets */ "E"])({
    root: {
        display: 'inline-block',
        textDecoration: 'inherit',
    },
    placeholder: [
        'ms-Icon-placeHolder',
        {
            width: '1em',
        },
    ],
    image: [
        'ms-Icon-imageContainer',
        {
            overflow: 'hidden',
        },
    ],
});
/** Class name used only in non-themeable Icon components */
var MS_ICON = 'ms-Icon';
var getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isPlaceholder && classNames.placeholder,
            classNames.root,
            isImage && classNames.image,
            iconClassName,
            className,
            styles && styles.root,
            // eslint-disable-next-line deprecation/deprecation
            styles && styles.imageContainer,
        ],
    };
};
//# sourceMappingURL=Icon.styles.js.map

/***/ })

}]);