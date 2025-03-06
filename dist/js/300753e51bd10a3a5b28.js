(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main.fui"],{

/***/ "/Xe4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SPACER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSpacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SPACER_WIDTH = 36;
var GroupSpacer = function (props) {
    var count = props.count, _a = props.indentWidth, indentWidth = _a === void 0 ? SPACER_WIDTH : _a, _b = props.role, role = _b === void 0 ? 'presentation' : _b;
    var width = count * indentWidth;
    return count > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-GroupSpacer', style: { display: 'inline-block', width: width }, role: role })) : null;
};
//# sourceMappingURL=GroupSpacer.js.map

/***/ }),

/***/ "1+It":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ChoiceGroup; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.js + 2 modules
var Label = __webpack_require__("Rel8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/array.js
var array = __webpack_require__("S+0K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Image/Image.js + 2 modules
var Image = __webpack_require__("CmtH");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.base.js





var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var LARGE_IMAGE_SIZE = 71;
var DEFAULT_PROPS = {
    // This ensures default imageSize value doesn't mutate. Mutation can cause style re-calcuation.
    imageSize: { width: 32, height: 32 },
};
var ChoiceGroupOptionBase = function (propsWithoutDefaults) {
    // Mix the `key` prop back in since custom render functions may be expecting it
    // (React uses `key` internally rather than passing it through to the component)
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, DEFAULT_PROPS), { key: propsWithoutDefaults.itemKey }), propsWithoutDefaults);
    var ariaLabel = props.ariaLabel, focused = props.focused, required = props.required, theme = props.theme, iconProps = props.iconProps, imageSrc = props.imageSrc, imageSize = props.imageSize, disabled = props.disabled, checked = props.checked, id = props.id, styles = props.styles, name = props.name, rest = Object(tslib_es6["e" /* __rest */])(props, ["ariaLabel", "focused", "required", "theme", "iconProps", "imageSrc", "imageSize", "disabled", "checked", "id", "styles", "name"]);
    var classNames = getClassNames(styles, {
        theme: theme,
        hasIcon: !!iconProps,
        hasImage: !!imageSrc,
        checked: checked,
        disabled: disabled,
        imageIsLarge: !!imageSrc && (imageSize.width > LARGE_IMAGE_SIZE || imageSize.height > LARGE_IMAGE_SIZE),
        imageSize: imageSize,
        focused: focused,
    });
    var _a = Object(properties["h" /* getNativeProps */])(rest, properties["l" /* inputProperties */]), className = _a.className, nativeProps = Object(tslib_es6["e" /* __rest */])(_a, ["className"]);
    var defaultOnRenderLabel = function () {
        return (react["createElement"]("span", { id: props.labelId, className: "ms-ChoiceFieldLabel" }, props.text));
    };
    var defaultOnRenderField = function () {
        var _a = props.imageAlt, imageAlt = _a === void 0 ? '' : _a, selectedImageSrc = props.selectedImageSrc;
        var onRenderLabel = props.onRenderLabel
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(props.onRenderLabel, defaultOnRenderLabel)
            : defaultOnRenderLabel;
        var label = onRenderLabel(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { key: props.itemKey }));
        return (react["createElement"]("label", { htmlFor: id, className: classNames.field },
            imageSrc && (react["createElement"]("div", { className: classNames.innerField },
                react["createElement"]("div", { className: classNames.imageWrapper },
                    react["createElement"](Image["a" /* Image */], Object(tslib_es6["a" /* __assign */])({ src: imageSrc, alt: imageAlt }, imageSize))),
                react["createElement"]("div", { className: classNames.selectedImageWrapper },
                    react["createElement"](Image["a" /* Image */], Object(tslib_es6["a" /* __assign */])({ src: selectedImageSrc, alt: imageAlt }, imageSize))))),
            iconProps && (react["createElement"]("div", { className: classNames.innerField },
                react["createElement"]("div", { className: classNames.iconWrapper },
                    react["createElement"](Icon["a" /* Icon */], Object(tslib_es6["a" /* __assign */])({}, iconProps))))),
            imageSrc || iconProps ? react["createElement"]("div", { className: classNames.labelWrapper }, label) : label));
    };
    var _b = props.onRenderField, onRenderField = _b === void 0 ? defaultOnRenderField : _b;
    var onChange = function (evt) {
        var _a;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, evt, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { key: props.itemKey }));
    };
    var onBlur = function (evt) {
        var _a;
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, evt);
    };
    var onFocus = function (evt) {
        var _a;
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, evt, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { key: props.itemKey }));
    };
    return (react["createElement"]("div", { className: classNames.root },
        react["createElement"]("div", { className: classNames.choiceFieldWrapper },
            react["createElement"]("input", Object(tslib_es6["a" /* __assign */])({ "aria-label": ariaLabel, id: id, className: Object(css["a" /* css */])(classNames.input, className), type: "radio", name: name, disabled: disabled, checked: checked, required: required }, nativeProps, { onChange: onChange, onFocus: onFocus, onBlur: onBlur })),
            onRenderField(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { key: props.itemKey }), defaultOnRenderField))));
};
ChoiceGroupOptionBase.displayName = 'ChoiceGroupOption';
//# sourceMappingURL=ChoiceGroupOption.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.styles.js



var GlobalClassNames = {
    root: 'ms-ChoiceField',
    choiceFieldWrapper: 'ms-ChoiceField-wrapper',
    input: 'ms-ChoiceField-input',
    field: 'ms-ChoiceField-field',
    innerField: 'ms-ChoiceField-innerField',
    imageWrapper: 'ms-ChoiceField-imageWrapper',
    iconWrapper: 'ms-ChoiceField-iconWrapper',
    labelWrapper: 'ms-ChoiceField-labelWrapper',
    checked: 'is-checked',
};
var labelWrapperLineHeight = 15;
var labelWrapperHeight = labelWrapperLineHeight * 2 + 2; // adding 2px height to ensure text doesn't get cutoff
var iconSize = 32;
var choiceFieldSize = 20;
var choiceFieldTransitionDuration = '200ms';
var choiceFieldTransitionTiming = 'cubic-bezier(.4, 0, .23, 1)';
var radioButtonSpacing = 3;
var radioButtonInnerSize = 5;
function getChoiceGroupFocusStyle(focusBorderColor, hasIconOrImage) {
    var _a, _b;
    return [
        'is-inFocus',
        {
            selectors: (_a = {},
                _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &")] = {
                    position: 'relative',
                    outline: 'transparent',
                    selectors: {
                        '::-moz-focus-inner': {
                            border: 0,
                        },
                        ':after': {
                            content: '""',
                            top: -2,
                            right: -2,
                            bottom: -2,
                            left: -2,
                            pointerEvents: 'none',
                            border: "1px solid ".concat(focusBorderColor),
                            position: 'absolute',
                            selectors: (_b = {},
                                _b[lib["f" /* HighContrastSelector */]] = {
                                    borderColor: 'WindowText',
                                    borderWidth: hasIconOrImage ? 1 : 2,
                                },
                                _b),
                        },
                    },
                },
                _a),
        },
    ];
}
function getImageWrapperStyle(isSelectedImageWrapper, className, checked) {
    return [
        className,
        {
            paddingBottom: 2,
            transitionProperty: 'opacity',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: 'ease',
            selectors: {
                '.ms-Image': {
                    display: 'inline-block',
                    borderStyle: 'none',
                },
            },
        },
        (checked ? !isSelectedImageWrapper : isSelectedImageWrapper) && [
            'is-hidden',
            {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                opacity: 0,
            },
        ],
    ];
}
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, hasIcon = props.hasIcon, hasImage = props.hasImage, checked = props.checked, disabled = props.disabled, imageIsLarge = props.imageIsLarge, focused = props.focused, imageSize = props.imageSize;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    // Tokens
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var circleBorderColor = palette.neutralPrimary;
    var circleHoveredBorderColor = semanticColors.inputBorderHovered;
    var circleCheckedBorderColor = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var circleCheckedHoveredBorderColor = palette.themeDark;
    var circleDisabledBorderColor = semanticColors.disabledBodySubtext;
    var circleBackgroundColor = semanticColors.bodyBackground;
    var dotUncheckedHoveredColor = palette.neutralSecondary;
    var dotCheckedColor = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var dotCheckedHoveredColor = palette.themeDark;
    var dotDisabledColor = semanticColors.disabledBodySubtext;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.bodyTextChecked
    var labelHoverFocusColor = palette.neutralDark;
    var focusBorderColor = semanticColors.focusBorder;
    var iconOrImageChoiceBorderUncheckedHoveredColor = semanticColors.inputBorderHovered;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
    var iconOrImageChoiceBorderCheckedColor = semanticColors.inputBackgroundChecked;
    var iconOrImageChoiceBorderCheckedHoveredColor = palette.themeDark;
    var iconOrImageChoiceBackgroundColor = palette.neutralLighter;
    var fieldHoverOrFocusProperties = {
        selectors: {
            '.ms-ChoiceFieldLabel': {
                color: labelHoverFocusColor,
            },
            ':before': {
                borderColor: checked ? circleCheckedHoveredBorderColor : circleHoveredBorderColor,
            },
            ':after': [
                !hasIcon &&
                    !hasImage &&
                    !checked && {
                    content: '""',
                    transitionProperty: 'background-color',
                    left: 5,
                    top: 5,
                    width: 10,
                    height: 10,
                    backgroundColor: dotUncheckedHoveredColor,
                },
                checked && {
                    borderColor: dotCheckedHoveredColor,
                    background: dotCheckedHoveredColor,
                },
            ],
        },
    };
    var enabledFieldWithImageHoverOrFocusProperties = {
        borderColor: checked ? iconOrImageChoiceBorderCheckedHoveredColor : iconOrImageChoiceBorderUncheckedHoveredColor,
        selectors: {
            ':before': {
                opacity: 1,
                borderColor: checked ? circleCheckedHoveredBorderColor : circleHoveredBorderColor,
            },
        },
    };
    var circleAreaProperties = [
        {
            content: '""',
            display: 'inline-block',
            backgroundColor: circleBackgroundColor,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: circleBorderColor,
            width: choiceFieldSize,
            height: choiceFieldSize,
            fontWeight: 'normal',
            position: 'absolute',
            top: 0,
            left: 0,
            boxSizing: 'border-box',
            transitionProperty: 'border-color',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            borderRadius: '50%',
        },
        disabled && {
            borderColor: circleDisabledBorderColor,
            selectors: (_a = {},
                _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ borderColor: 'GrayText', background: 'Window' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _a),
        },
        checked && {
            borderColor: disabled ? circleDisabledBorderColor : circleCheckedBorderColor,
            selectors: (_b = {},
                _b[lib["f" /* HighContrastSelector */]] = {
                    borderColor: 'Highlight',
                    background: 'Window',
                    forcedColorAdjust: 'none',
                },
                _b),
        },
        (hasIcon || hasImage) && {
            top: radioButtonSpacing,
            right: radioButtonSpacing,
            left: 'auto',
            opacity: checked ? 1 : 0,
        },
    ];
    var dotAreaProperties = [
        {
            content: '""',
            width: 0,
            height: 0,
            borderRadius: '50%',
            position: 'absolute',
            left: choiceFieldSize / 2,
            right: 0,
            transitionProperty: 'border-width',
            transitionDuration: choiceFieldTransitionDuration,
            transitionTimingFunction: choiceFieldTransitionTiming,
            boxSizing: 'border-box',
        },
        checked && {
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: disabled ? dotDisabledColor : dotCheckedColor,
            background: dotCheckedColor,
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            selectors: (_c = {},
                _c[lib["f" /* HighContrastSelector */]] = {
                    borderColor: 'Highlight',
                    forcedColorAdjust: 'none',
                },
                _c),
        },
        checked &&
            (hasIcon || hasImage) && {
            top: radioButtonSpacing + radioButtonInnerSize,
            right: radioButtonSpacing + radioButtonInnerSize,
            left: 'auto', // To reset the value of 'left' to its default value, so that 'right' works
        },
    ];
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                color: semanticColors.bodyText,
                minHeight: 26,
                border: 'none',
                position: 'relative',
                marginTop: 8,
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        display: 'inline-block',
                    },
                },
            },
            !hasIcon &&
                !hasImage && {
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        paddingLeft: '26px',
                    },
                },
            },
            hasImage && 'ms-ChoiceField--image',
            hasIcon && 'ms-ChoiceField--icon',
            (hasIcon || hasImage) && {
                display: 'inline-flex',
                fontSize: 0,
                margin: '0 4px 4px 0',
                paddingLeft: 0,
                backgroundColor: iconOrImageChoiceBackgroundColor,
                height: '100%',
            },
        ],
        choiceFieldWrapper: [
            classNames.choiceFieldWrapper,
            focused && getChoiceGroupFocusStyle(focusBorderColor, hasIcon || hasImage),
        ],
        // The hidden input
        input: [
            classNames.input,
            {
                position: 'absolute',
                opacity: 0,
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                margin: 0,
            },
            disabled && 'is-disabled',
        ],
        field: [
            classNames.field,
            checked && classNames.checked,
            {
                display: 'inline-block',
                cursor: 'pointer',
                marginTop: 0,
                position: 'relative',
                verticalAlign: 'top',
                userSelect: 'none',
                minHeight: 20,
                selectors: {
                    ':hover': !disabled && fieldHoverOrFocusProperties,
                    ':focus': !disabled && fieldHoverOrFocusProperties,
                    // The circle
                    ':before': circleAreaProperties,
                    // The dot
                    ':after': dotAreaProperties,
                },
            },
            hasIcon && 'ms-ChoiceField--icon',
            hasImage && 'ms-ChoiceField-field--image',
            (hasIcon || hasImage) && {
                boxSizing: 'content-box',
                cursor: 'pointer',
                paddingTop: 22,
                margin: 0,
                textAlign: 'center',
                transitionProperty: 'all',
                transitionDuration: choiceFieldTransitionDuration,
                transitionTimingFunction: 'ease',
                border: '1px solid transparent',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            },
            checked && {
                borderColor: iconOrImageChoiceBorderCheckedColor,
            },
            (hasIcon || hasImage) &&
                !disabled && {
                selectors: {
                    ':hover': enabledFieldWithImageHoverOrFocusProperties,
                    ':focus': enabledFieldWithImageHoverOrFocusProperties,
                },
            },
            disabled && {
                cursor: 'default',
                selectors: {
                    '.ms-ChoiceFieldLabel': {
                        color: semanticColors.disabledBodyText,
                        selectors: (_d = {},
                            _d[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                            _d),
                    },
                },
            },
            checked &&
                disabled && {
                borderColor: iconOrImageChoiceBackgroundColor,
            },
        ],
        innerField: [
            classNames.innerField,
            hasImage && {
                // using non-null assertion because we have a default in `ChoiceGroupOptionBase` class.
                height: imageSize.height,
                width: imageSize.width,
            },
            (hasIcon || hasImage) && {
                position: 'relative',
                display: 'inline-block',
                paddingLeft: 30,
                paddingRight: 30,
            },
            (hasIcon || hasImage) &&
                imageIsLarge && {
                paddingLeft: 24,
                paddingRight: 24,
            },
            (hasIcon || hasImage) &&
                disabled && {
                opacity: 0.25,
                selectors: (_e = {},
                    _e[lib["f" /* HighContrastSelector */]] = {
                        color: 'GrayText',
                        opacity: 1,
                    },
                    _e),
            },
        ],
        imageWrapper: getImageWrapperStyle(false, classNames.imageWrapper, checked),
        selectedImageWrapper: getImageWrapperStyle(true, classNames.imageWrapper, checked),
        iconWrapper: [
            classNames.iconWrapper,
            {
                fontSize: iconSize,
                lineHeight: iconSize,
                height: iconSize,
            },
        ],
        labelWrapper: [
            classNames.labelWrapper,
            fonts.medium,
            (hasIcon || hasImage) && {
                display: 'block',
                position: 'relative',
                margin: '4px 8px 2px 8px',
                height: labelWrapperHeight,
                lineHeight: labelWrapperLineHeight,
                // using non-null assertion because we have a default in `ChoiceGroupOptionBase` class.
                maxWidth: imageSize.width * 2,
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
            },
        ],
    };
};
//# sourceMappingURL=ChoiceGroupOption.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.js



var ChoiceGroupOption = Object(styled["a" /* styled */])(ChoiceGroupOptionBase, getStyles, undefined, { scope: 'ChoiceGroupOption' });
//# sourceMappingURL=ChoiceGroupOption.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useId.js
var useId = __webpack_require__("EO0U");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useControllableValue.js
var useControllableValue = __webpack_require__("Txh6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.base.js







var ChoiceGroup_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var getOptionId = function (option, id) {
    return "".concat(id, "-").concat(option.key);
};
var findOption = function (options, key) {
    return key === undefined ? undefined : Object(array["c" /* find */])(options, function (value) { return value.key === key; });
};
var focusSelectedOption = function (options, keyChecked, id, focusProviders, doc) {
    var optionToFocus = findOption(options, keyChecked) || options.filter(function (option) { return !option.disabled; })[0];
    var elementToFocus = optionToFocus && (doc === null || doc === void 0 ? void 0 : doc.getElementById(getOptionId(optionToFocus, id)));
    if (elementToFocus) {
        elementToFocus.focus();
        Object(setFocusVisibility["b" /* setFocusVisibility */])(true, elementToFocus, focusProviders);
    }
};
var focusFromFocusTrapZone = function (evt) {
    return evt.relatedTarget instanceof HTMLElement && evt.relatedTarget.dataset.isFocusTrapZoneBumper === 'true';
};
var useComponentRef = function (options, keyChecked, id, componentRef, focusProviders) {
    var doc = Object(dom["c" /* useDocumentEx */])();
    react["useImperativeHandle"](componentRef, function () { return ({
        get checkedOption() {
            return findOption(options, keyChecked);
        },
        focus: function () {
            focusSelectedOption(options, keyChecked, id, focusProviders, doc);
        },
    }); }, [options, keyChecked, id, focusProviders, doc]);
};
var COMPONENT_NAME = 'ChoiceGroup';
var ChoiceGroupBase = react["forwardRef"](function (props, forwardedRef) {
    var className = props.className, theme = props.theme, styles = props.styles, _a = props.options, options = _a === void 0 ? [] : _a, label = props.label, required = props.required, disabled = props.disabled, name = props.name, defaultSelectedKey = props.defaultSelectedKey, componentRef = props.componentRef, onChange = props.onChange;
    var id = Object(useId["a" /* useId */])('ChoiceGroup');
    var labelId = Object(useId["a" /* useId */])('ChoiceGroupLabel');
    var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */], [
        'onChange',
        'className',
        'required',
    ]);
    var classNames = ChoiceGroup_base_getClassNames(styles, {
        theme: theme,
        className: className,
        optionsContainIconOrImage: options.some(function (option) { return !!(option.iconProps || option.imageSrc); }),
    });
    var ariaLabelledBy = props.ariaLabelledBy || (label ? labelId : props['aria-labelledby']);
    var _b = Object(useControllableValue["a" /* useControllableValue */])(props.selectedKey, defaultSelectedKey), keyChecked = _b[0], setKeyChecked = _b[1];
    var _c = react["useState"](), keyFocused = _c[0], setKeyFocused = _c[1];
    var rootRef = react["useRef"](null);
    var mergedRootRefs = Object(useMergedRefs["a" /* useMergedRefs */])(rootRef, forwardedRef);
    var focusContext = react["useContext"](useFocusRects["b" /* FocusRectsContext */]);
    useDebugWarnings(props);
    useComponentRef(options, keyChecked, id, componentRef, focusContext === null || focusContext === void 0 ? void 0 : focusContext.registeredProviders);
    Object(useFocusRects["c" /* useFocusRects */])(rootRef);
    var onFocus = react["useCallback"](function (ev, option) {
        var _a;
        if (option) {
            setKeyFocused(option.itemKey);
            (_a = option.onFocus) === null || _a === void 0 ? void 0 : _a.call(option, ev);
        }
    }, []);
    var onBlur = react["useCallback"](function (ev, option) {
        var _a;
        setKeyFocused(undefined);
        (_a = option === null || option === void 0 ? void 0 : option.onBlur) === null || _a === void 0 ? void 0 : _a.call(option, ev);
    }, []);
    var onOptionChange = react["useCallback"](function (evt, option) {
        var _a;
        if (!option) {
            return;
        }
        setKeyChecked(option.itemKey);
        (_a = option.onChange) === null || _a === void 0 ? void 0 : _a.call(option, evt);
        onChange === null || onChange === void 0 ? void 0 : onChange(evt, findOption(options, option.itemKey));
    }, [onChange, options, setKeyChecked]);
    var onRadioFocus = react["useCallback"](function (evt) {
        // Handles scenarios like this bug: https://github.com/microsoft/fluentui/issues/20173
        if (focusFromFocusTrapZone(evt)) {
            focusSelectedOption(options, keyChecked, id, focusContext === null || focusContext === void 0 ? void 0 : focusContext.registeredProviders);
        }
    }, [options, keyChecked, id, focusContext]);
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ className: classNames.root }, divProps, { ref: mergedRootRefs }),
        react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ role: "radiogroup" }, (ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }), { onFocus: onRadioFocus }),
            label && (react["createElement"](Label["a" /* Label */], { className: classNames.label, required: required, id: labelId, disabled: disabled }, label)),
            react["createElement"]("div", { className: classNames.flexContainer }, options.map(function (option) {
                return (react["createElement"](ChoiceGroupOption, Object(tslib_es6["a" /* __assign */])({ itemKey: option.key }, option, { key: option.key, onBlur: onBlur, onFocus: onFocus, onChange: onOptionChange, focused: option.key === keyFocused, checked: option.key === keyChecked, disabled: option.disabled || disabled, id: getOptionId(option, id), labelId: option.labelId || "".concat(labelId, "-").concat(option.key), name: name || id, required: required })));
            })))));
});
ChoiceGroupBase.displayName = COMPONENT_NAME;
function useDebugWarnings(props) {
    if (false) {}
}
//# sourceMappingURL=ChoiceGroup.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.styles.js

var ChoiceGroup_styles_GlobalClassNames = {
    root: 'ms-ChoiceFieldGroup',
    flexContainer: 'ms-ChoiceFieldGroup-flexContainer',
};
var ChoiceGroup_styles_getStyles = function (props) {
    var className = props.className, optionsContainIconOrImage = props.optionsContainIconOrImage, theme = props.theme;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(ChoiceGroup_styles_GlobalClassNames, theme);
    return {
        root: [
            className,
            classNames.root,
            theme.fonts.medium,
            {
                display: 'block',
            },
        ],
        flexContainer: [
            classNames.flexContainer,
            optionsContainIconOrImage && {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            },
        ],
    };
};
//# sourceMappingURL=ChoiceGroup.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.js



var ChoiceGroup = Object(styled["a" /* styled */])(ChoiceGroupBase, ChoiceGroup_styles_getStyles, undefined, { scope: 'ChoiceGroup' });
//# sourceMappingURL=ChoiceGroup.js.map

/***/ }),

/***/ "2Ah+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Nav; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/ActionButton/ActionButton.js + 1 modules
var ActionButton = __webpack_require__("BFcr");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Nav/Nav.styles.js

var GlobalClassNames = {
    root: 'ms-Nav',
    linkText: 'ms-Nav-linkText',
    compositeLink: 'ms-Nav-compositeLink',
    link: 'ms-Nav-link',
    chevronButton: 'ms-Nav-chevronButton',
    chevronIcon: 'ms-Nav-chevron',
    navItem: 'ms-Nav-navItem',
    navItems: 'ms-Nav-navItems',
    group: 'ms-Nav-group',
    groupContent: 'ms-Nav-groupContent',
};
var buttonStyles = {
    textContainer: {
        overflow: 'hidden',
    },
    label: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
};
var getStyles = function (props) {
    var _a;
    var className = props.className, theme = props.theme, isOnTop = props.isOnTop, isExpanded = props.isExpanded, isGroup = props.isGroup, isLink = props.isLink, isSelected = props.isSelected, isDisabled = props.isDisabled, isButtonEntry = props.isButtonEntry, _b = props.navHeight, navHeight = _b === void 0 ? 44 : _b, position = props.position, _c = props.leftPadding, leftPadding = _c === void 0 ? 20 : _c, _d = props.leftPaddingExpanded, leftPaddingExpanded = _d === void 0 ? 28 : _d, _e = props.rightPadding, rightPadding = _e === void 0 ? 20 : _e;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            className,
            fonts.medium,
            {
                overflowY: 'auto',
                userSelect: 'none',
                WebkitOverflowScrolling: 'touch',
            },
            isOnTop && [
                {
                    position: 'absolute',
                },
                lib["a" /* AnimationClassNames */].slideRightIn40,
            ],
        ],
        linkText: [
            classNames.linkText,
            {
                margin: '0 4px',
                overflow: 'hidden',
                verticalAlign: 'middle',
                textAlign: 'left',
                textOverflow: 'ellipsis',
            },
        ],
        compositeLink: [
            classNames.compositeLink,
            {
                display: 'block',
                position: 'relative',
                color: semanticColors.bodyText,
            },
            isExpanded && 'is-expanded',
            isSelected && 'is-selected',
            isDisabled && 'is-disabled',
            isDisabled && {
                color: semanticColors.disabledText,
            },
        ],
        link: [
            classNames.link,
            Object(lib["u" /* getFocusStyle */])(theme),
            {
                display: 'block',
                position: 'relative',
                height: navHeight,
                width: '100%',
                lineHeight: "".concat(navHeight, "px"),
                textDecoration: 'none',
                cursor: 'pointer',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                paddingLeft: leftPadding,
                paddingRight: rightPadding,
                color: semanticColors.bodyText,
                selectors: (_a = {},
                    _a[lib["f" /* HighContrastSelector */]] = {
                        border: 0,
                        selectors: {
                            ':focus': {
                                border: '1px solid WindowText',
                            },
                        },
                    },
                    _a),
            },
            !isDisabled && {
                selectors: {
                    '.ms-Nav-compositeLink:hover &': {
                        backgroundColor: semanticColors.bodyBackgroundHovered,
                    },
                },
            },
            isSelected && {
                color: semanticColors.bodyTextChecked,
                fontWeight: lib["e" /* FontWeights */].semibold,
                backgroundColor: semanticColors.bodyBackgroundChecked,
                selectors: {
                    '&:after': {
                        borderLeft: "2px solid ".concat(palette.themePrimary),
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        pointerEvents: 'none',
                    },
                },
            },
            isDisabled && {
                color: semanticColors.disabledText,
            },
            isButtonEntry && {
                color: palette.themePrimary,
            },
        ],
        chevronButton: [
            classNames.chevronButton,
            Object(lib["u" /* getFocusStyle */])(theme),
            fonts.small,
            {
                display: 'block',
                textAlign: 'left',
                lineHeight: "".concat(navHeight, "px"),
                margin: '5px 0',
                padding: "0px, ".concat(rightPadding, "px, 0px, ").concat(leftPaddingExpanded, "px"),
                border: 'none',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                cursor: 'pointer',
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                selectors: {
                    '&:visited': {
                        color: semanticColors.bodyText,
                    },
                },
            },
            isGroup && {
                fontSize: fonts.large.fontSize,
                width: '100%',
                height: navHeight,
                borderBottom: "1px solid ".concat(semanticColors.bodyDivider),
            },
            isLink && {
                display: 'block',
                width: leftPaddingExpanded - 2,
                height: navHeight - 2,
                position: 'absolute',
                top: '1px',
                left: "".concat(position, "px"),
                zIndex: lib["q" /* ZIndexes */].Nav,
                padding: 0,
                margin: 0,
            },
        ],
        chevronIcon: [
            classNames.chevronIcon,
            {
                position: 'absolute',
                left: '8px',
                height: navHeight,
                // inline-flex prevents the chevron from shifting with custom line height styles
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: "".concat(navHeight, "px"),
                fontSize: fonts.small.fontSize,
                transition: 'transform .1s linear',
            },
            isExpanded && {
                transform: 'rotate(-180deg)',
            },
            isLink && {
                top: 0,
            },
        ],
        navItem: [
            classNames.navItem,
            {
                padding: 0,
            },
        ],
        navItems: [
            classNames.navItems,
            {
                listStyleType: 'none',
                padding: 0,
                margin: 0, // remove default <UL> styles
            },
        ],
        group: [classNames.group, isExpanded && 'is-expanded'],
        groupContent: [
            classNames.groupContent,
            {
                display: 'none',
                marginBottom: '40px',
            },
            lib["a" /* AnimationClassNames */].slideDownIn20,
            isExpanded && {
                display: 'block',
            },
        ],
    };
};
//# sourceMappingURL=Nav.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/componentAs/composeComponentAs.js
var composeComponentAs = __webpack_require__("T+Fs");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Nav/Nav.base.js










// The number pixels per indentation level for Nav links.
var _indentationSize = 14;
// The number of pixels of left margin
var _baseIndent = 3;
// global var used in _isLinkSelectedKey
var _urlResolver;
function isRelativeUrl(url) {
    // A URL is relative if it has no protocol.
    return !!url && !/^[a-z0-9+-.]+:\/\//i.test(url);
}
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var Nav_base_NavBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(NavBase, _super);
    function NavBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusZone = react["createRef"]();
        _this._onRenderLink = function (link) {
            var _a;
            var styles = (_a = _this.props, _a.styles), groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, { theme: theme, groups: groups });
            return react["createElement"]("div", { className: classNames.linkText }, link.name);
        };
        _this._renderGroup = function (group, groupIndex) {
            var _a, _b;
            var styles = (_a = _this.props, _a.styles), groups = _a.groups, theme = _a.theme, onRenderGroupHeader = (_b = _a.onRenderGroupHeader, _b === void 0 ? _this._renderGroupHeader : _b);
            var isExpanded = _this._isGroupExpanded(group);
            var classNames = getClassNames(styles, {
                theme: theme,
                isGroup: true,
                isExpanded: isExpanded,
                groups: groups,
            });
            var finalOnHeaderClick = function (ev, isCollapsing) {
                _this._onGroupHeaderClicked(group, ev);
            };
            var groupProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, group), { isExpanded: isExpanded, onHeaderClick: finalOnHeaderClick });
            return (react["createElement"]("div", { key: groupIndex, className: classNames.group },
                groupProps.name ? onRenderGroupHeader(groupProps, _this._renderGroupHeader) : null,
                react["createElement"]("div", { className: classNames.groupContent }, _this._renderLinks(groupProps.links, 0 /* nestingLevel */))));
        };
        _this._renderGroupHeader = function (group) {
            var _a;
            var _b;
            // eslint-disable-next-line deprecation/deprecation
            var styles = (_a = _this.props, _a.styles), groups = _a.groups, theme = _a.theme, expandButtonAriaLabel = _a.expandButtonAriaLabel;
            var isExpanded = group.isExpanded;
            var classNames = getClassNames(styles, {
                theme: theme,
                isGroup: true,
                isExpanded: isExpanded,
                groups: groups,
            });
            // respect deprecated collapseAriaLabel, but default to expandAriaLabel for both states
            // eslint-disable-next-line deprecation/deprecation
            var collapseAriaLabel = (_b = group.collapseAriaLabel) !== null && _b !== void 0 ? _b : group.expandAriaLabel;
            var label = (isExpanded ? collapseAriaLabel : group.expandAriaLabel) || expandButtonAriaLabel;
            var onHeaderClick = group.onHeaderClick;
            var onClick = onHeaderClick
                ? function (ev) {
                    onHeaderClick(ev, isExpanded);
                }
                : undefined;
            return (react["createElement"]("button", { className: classNames.chevronButton, onClick: onClick, "aria-label": label, "aria-expanded": isExpanded },
                react["createElement"](Icon["a" /* Icon */], { className: classNames.chevronIcon, iconName: "ChevronDown" }),
                group.name));
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this.state = {
            isGroupCollapsed: {},
            isLinkExpandStateChanged: false,
            selectedKey: props.initialSelectedKey || props.selectedKey,
        };
        return _this;
    }
    NavBase.prototype.render = function () {
        var _a, _b;
        var styles = (_a = this.props, _a.styles), groups = _a.groups, className = _a.className, isOnTop = _a.isOnTop, role = (_b = _a.role, _b === void 0 ? 'navigation' : _b), theme = _a.theme;
        if (!groups) {
            return null;
        }
        var groupElements = groups.map(this._renderGroup);
        var classNames = getClassNames(styles, { theme: theme, className: className, isOnTop: isOnTop, groups: groups });
        return (react["createElement"](FocusZone["a" /* FocusZone */], Object(tslib_es6["a" /* __assign */])({ direction: FocusZone_types["a" /* FocusZoneDirection */].vertical, componentRef: this._focusZone }, this.props.focusZoneProps),
            react["createElement"]("nav", { role: role, className: classNames.root, "aria-label": this.props.ariaLabel }, groupElements)));
    };
    Object.defineProperty(NavBase.prototype, "selectedKey", {
        get: function () {
            return this.state.selectedKey;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    NavBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._focusZone && this._focusZone.current) {
            return this._focusZone.current.focus(forceIntoFirstElement);
        }
        return false;
    };
    NavBase.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
        var _a, _b;
        var styles = (_a = this.props, _a.styles), groups = _a.groups, theme = _a.theme;
        var isLinkWithIcon = link.icon || link.iconProps;
        var isSelectedLink = this._isLinkSelected(link);
        var ariaCurrent = (_b = link.ariaCurrent, _b === void 0 ? 'page' : _b);
        var classNames = getClassNames(styles, {
            theme: theme,
            isSelected: isSelectedLink,
            isDisabled: link.disabled,
            isButtonEntry: link.onClick && !link.forceAnchor,
            leftPadding: _indentationSize * nestingLevel + _baseIndent + (isLinkWithIcon ? 0 : 24),
            groups: groups,
        });
        // Prevent hijacking of the parent window if link.target is defined
        var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
        var LinkAs = this.props.linkAs ? Object(composeComponentAs["a" /* composeComponentAs */])(this.props.linkAs, ActionButton["a" /* ActionButton */]) : ActionButton["a" /* ActionButton */];
        var onRenderLink = this.props.onRenderLink
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(this.props.onRenderLink, this._onRenderLink)
            : this._onRenderLink;
        return (react["createElement"](LinkAs, { className: classNames.link, styles: buttonStyles, href: link.url || (link.forceAnchor ? '#' : undefined), iconProps: link.iconProps || { iconName: link.icon }, 
            // eslint-disable-next-line react/jsx-no-bind
            onClick: link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link), title: link.title !== undefined ? link.title : link.name, target: link.target, rel: rel, disabled: link.disabled, "aria-current": isSelectedLink ? ariaCurrent : undefined, "aria-label": link.ariaLabel ? link.ariaLabel : undefined, link: link }, onRenderLink(link)));
    };
    NavBase.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        var _a;
        var _b;
        var divProps = Object(tslib_es6["a" /* __assign */])({}, Object(properties["h" /* getNativeProps */])(link, properties["f" /* divProperties */], ['onClick']));
        // eslint-disable-next-line deprecation/deprecation
        var expandButtonAriaLabel = (_a = this.props, _a.expandButtonAriaLabel), styles = _a.styles, groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            isExpanded: !!link.isExpanded,
            isSelected: this._isLinkSelected(link),
            isLink: true,
            isDisabled: link.disabled,
            position: _indentationSize * nestingLevel + 1,
            groups: groups,
        });
        var finalExpandBtnAriaLabel = '';
        if (link.links && link.links.length > 0) {
            if (link.collapseAriaLabel || link.expandAriaLabel) {
                // still respect link.collapseAriaLabel, even though it's deprecated in favor of expandAriaLabel
                var collapseAriaLabel = (_b = link.collapseAriaLabel) !== null && _b !== void 0 ? _b : link.expandAriaLabel;
                finalExpandBtnAriaLabel = link.isExpanded ? collapseAriaLabel : link.expandAriaLabel;
            }
            else {
                // TODO remove when `expandButtonAriaLabel` is removed. This is not an ideal concatenation for localization.
                finalExpandBtnAriaLabel = expandButtonAriaLabel ? "".concat(link.name, " ").concat(expandButtonAriaLabel) : link.name;
            }
        }
        return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, divProps, { key: link.key || linkIndex, className: classNames.compositeLink }),
            link.links && link.links.length > 0 ? (react["createElement"]("button", { className: classNames.chevronButton, onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": finalExpandBtnAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false' },
                react["createElement"](Icon["a" /* Icon */], { className: classNames.chevronIcon, iconName: "ChevronDown" }))) : null,
            this._renderNavLink(link, linkIndex, nestingLevel)));
    };
    NavBase.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        var _a;
        var styles = (_a = this.props, _a.styles), groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, { theme: theme, groups: groups });
        return (react["createElement"]("li", { key: link.key || linkIndex, role: "listitem", className: classNames.navItem },
            this._renderCompositeLink(link, linkIndex, nestingLevel),
            link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null));
    };
    NavBase.prototype._renderLinks = function (links, nestingLevel) {
        var _a;
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) {
            return _this._renderLink(link, linkIndex, nestingLevel);
        });
        var styles = (_a = this.props, _a.styles), groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, { theme: theme, groups: groups });
        return (react["createElement"]("ul", { role: "list", className: classNames.navItems }, linkElements));
    };
    NavBase.prototype._onGroupHeaderClicked = function (group, ev) {
        if (group.onHeaderClick) {
            group.onHeaderClick(ev, this._isGroupExpanded(group));
        }
        if (group.isExpanded === undefined) {
            this._toggleCollapsed(group);
        }
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    NavBase.prototype._onLinkExpandClicked = function (link, ev) {
        var onLinkExpandClick = this.props.onLinkExpandClick;
        if (onLinkExpandClick) {
            onLinkExpandClick(ev, link);
        }
        if (!ev.defaultPrevented) {
            link.isExpanded = !link.isExpanded;
            this.setState({ isLinkExpandStateChanged: true });
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    NavBase.prototype._preventBounce = function (link, ev) {
        if (!link.url && link.forceAnchor) {
            ev.preventDefault();
        }
    };
    NavBase.prototype._onNavAnchorLinkClicked = function (link, ev) {
        // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
        this._preventBounce(link, ev);
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    NavBase.prototype._onNavButtonLinkClicked = function (link, ev) {
        // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
        this._preventBounce(link, ev);
        if (link.onClick) {
            link.onClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    NavBase.prototype._isLinkSelected = function (link) {
        // if caller passes in selectedKey, use it as first choice or
        // if current state.selectedKey (from addressbar) is match to the link or
        // check if URL is matching location.href (if link.url exists)
        if (this.props.selectedKey !== undefined) {
            return link.key === this.props.selectedKey;
        }
        else if (this.state.selectedKey !== undefined) {
            return link.key === this.state.selectedKey;
        }
        else if (typeof Object(getWindow["a" /* getWindow */])() === 'undefined' || !link.url) {
            // resolve is not supported for ssr
            return false;
        }
        else {
            var doc = Object(dom["a" /* getDocumentEx */])(this.context); // there is an SSR check above so this is safe
            // If selectedKey is undefined in props and state, then check URL
            _urlResolver = _urlResolver || doc.createElement('a');
            _urlResolver.href = link.url || '';
            var target = _urlResolver.href;
            if (location.href === target) {
                return true;
            }
            // If selectedKey is not defined in state, then check URL to determine link selected status
            if (location.protocol + '//' + location.host + location.pathname === target) {
                return true;
            }
            if (location.hash) {
                // Match the hash to the url.
                if (location.hash === link.url) {
                    return true;
                }
                // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
                _urlResolver.href = location.hash.substring(1);
                return _urlResolver.href === target;
            }
        }
        return false;
    };
    NavBase.prototype._isGroupExpanded = function (group) {
        if (group.isExpanded !== undefined) {
            return group.isExpanded;
        }
        if (group.name && this.state.isGroupCollapsed.hasOwnProperty(group.name)) {
            return !this.state.isGroupCollapsed[group.name];
        }
        if (group.collapseByDefault !== undefined) {
            return !group.collapseByDefault;
        }
        return true;
    };
    NavBase.prototype._toggleCollapsed = function (group) {
        var _a;
        if (group.name) {
            var newGroupCollapsed = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this.state.isGroupCollapsed), (_a = {}, _a[group.name] = this._isGroupExpanded(group), _a));
            this.setState({ isGroupCollapsed: newGroupCollapsed });
        }
    };
    NavBase.defaultProps = {
        groups: null,
    };
    NavBase.contextType = WindowProvider["a" /* WindowContext */];
    return NavBase;
}(react["Component"]));
//# sourceMappingURL=Nav.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Nav/Nav.js



var Nav = Object(styled["a" /* styled */])(Nav_base_NavBase, getStyles, undefined, {
    scope: 'Nav',
});
//# sourceMappingURL=Nav.js.map

/***/ }),

/***/ "5qKm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ThemeProvider; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/makeStyles.js + 1 modules
var makeStyles = __webpack_require__("QHyR");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useThemeProviderClasses.js




// eslint-disable-next-line deprecation/deprecation
var useThemeProviderStyles = Object(makeStyles["a" /* makeStyles */])(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    return {
        body: [
            {
                color: semanticColors.bodyText,
                background: semanticColors.bodyBackground,
                fontFamily: fonts.medium.fontFamily,
                fontWeight: fonts.medium.fontWeight,
                fontSize: fonts.medium.fontSize,
                MozOsxFontSmoothing: fonts.medium.MozOsxFontSmoothing,
                WebkitFontSmoothing: fonts.medium.WebkitFontSmoothing,
            },
        ],
    };
});
/**
 * Hook to add class to body element.
 */
function useApplyClassToBody(state, classesToApply) {
    var _a;
    var applyTo = state.applyTo;
    var applyToBody = applyTo === 'body';
    var body = (_a = Object(WindowProvider["b" /* useDocument */])()) === null || _a === void 0 ? void 0 : _a.body;
    react["useEffect"](function () {
        if (!applyToBody || !body) {
            return;
        }
        for (var _i = 0, classesToApply_1 = classesToApply; _i < classesToApply_1.length; _i++) {
            var classToApply = classesToApply_1[_i];
            if (classToApply) {
                body.classList.add(classToApply);
            }
        }
        return function () {
            if (!applyToBody || !body) {
                return;
            }
            for (var _i = 0, classesToApply_2 = classesToApply; _i < classesToApply_2.length; _i++) {
                var classToApply = classesToApply_2[_i];
                if (classToApply) {
                    body.classList.remove(classToApply);
                }
            }
        };
    }, [applyToBody, body, classesToApply]);
}
function useThemeProviderClasses(state) {
    var classes = useThemeProviderStyles(state);
    var className = state.className, applyTo = state.applyTo;
    useApplyClassToBody(state, [classes.root, classes.body]);
    state.className = Object(css["a" /* css */])(className, classes.root, applyTo === 'element' && classes.body);
}
//# sourceMappingURL=useThemeProviderClasses.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getNativeElementProps.js
var getNativeElementProps = __webpack_require__("vord");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js
var object = __webpack_require__("FTLG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/customizations/CustomizerContext.js
var CustomizerContext = __webpack_require__("pQvb");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/FocusRectsProvider.js
var FocusRectsProvider = __webpack_require__("A49k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/ThemeContext.js
var ThemeContext = __webpack_require__("huLr");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/renderThemeProvider.js




var renderThemeProvider = function (state) {
    var customizerContext = state.customizerContext, ref = state.ref, theme = state.theme;
    var Root = state.as || 'div';
    var rootProps = typeof state.as === 'string'
        ? Object(getNativeElementProps["a" /* getNativeElementProps */])(state.as, state)
        : state.as === react["Fragment"]
            ? { children: state.children }
            : Object(object["b" /* omit */])(state, ['as']);
    return (react["createElement"](ThemeContext["a" /* ThemeContext */].Provider, { value: theme },
        react["createElement"](CustomizerContext["a" /* CustomizerContext */].Provider, { value: customizerContext },
            react["createElement"](FocusRectsProvider["a" /* FocusRectsProvider */], { providerRef: ref },
                react["createElement"](Root, Object(tslib_es6["a" /* __assign */])({}, rootProps))))));
};
//# sourceMappingURL=renderThemeProvider.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/theme/lib/mergeThemes.js
var mergeThemes = __webpack_require__("ADyb");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useTheme.js
var useTheme = __webpack_require__("jFKp");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useThemeProviderState.js




var themeToIdMap = new Map();
var getThemeId = function () {
    var themes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        themes[_i] = arguments[_i];
    }
    var ids = [];
    for (var _a = 0, themes_1 = themes; _a < themes_1.length; _a++) {
        var theme = themes_1[_a];
        if (theme) {
            var id = theme.id || themeToIdMap.get(theme);
            if (!id) {
                id = Object(getId["a" /* getId */])('');
                themeToIdMap.set(theme, id);
            }
            ids.push(id);
        }
    }
    return ids.join('-');
};
var useThemeProviderState = function (draftState) {
    var userTheme = draftState.theme;
    // Pull contextual theme.
    var parentTheme = Object(useTheme["a" /* useTheme */])();
    // Update the incoming theme with a memoized version of the merged theme.
    var theme = (draftState.theme = react["useMemo"](function () {
        var mergedTheme = Object(mergeThemes["a" /* mergeThemes */])(parentTheme, userTheme);
        mergedTheme.id = getThemeId(parentTheme, userTheme);
        return mergedTheme;
    }, [parentTheme, userTheme]));
    draftState.customizerContext = react["useMemo"](function () { return ({
        customizations: {
            inCustomizerContext: true,
            settings: { theme: theme },
            scopedSettings: theme.components || {},
        },
    }); }, [theme]);
    if (draftState.theme.rtl !== parentTheme.rtl) {
        draftState.dir = draftState.theme.rtl ? 'rtl' : 'ltr';
    }
};
//# sourceMappingURL=useThemeProviderState.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/useThemeProvider.js



/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
var useThemeProvider = function (props, defaultProps) {
    var state = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(defaultProps, props);
    // Apply changes to state.
    useThemeProviderState(state);
    return {
        state: state,
        render: renderThemeProvider,
    };
};
//# sourceMappingURL=useThemeProvider.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/ThemeProvider/ThemeProvider.js




/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
var ThemeProvider = react["forwardRef"](function (props, ref) {
    var rootRef = Object(useMergedRefs["a" /* useMergedRefs */])(ref, react["useRef"](null));
    var _a = useThemeProvider(props, {
        ref: rootRef,
        as: 'div',
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Render styles.
    useThemeProviderClasses(state);
    // Return the rendered content.
    return render(state);
});
ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map

/***/ }),

/***/ "AH+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Dropdown; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/array.js
var array = __webpack_require__("S+0K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/safeRequestAnimationFrame.js
var safeRequestAnimationFrame = __webpack_require__("CdGp");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getDocument.js
var getDocument = __webpack_require__("41aL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/focus.js
var lib_focus = __webpack_require__("lE+F");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/aria.js
var aria = __webpack_require__("Vc0M");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/osDetector.js
var osDetector = __webpack_require__("cgK4");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/mobileDetector.js
var mobileDetector = __webpack_require__("bsd9");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Callout/Callout.js + 4 modules
var Callout = __webpack_require__("dXTB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/common/DirectionalHint.js
var DirectionalHint = __webpack_require__("kvDL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Button/CommandButton/CommandButton.js
var CommandButton = __webpack_require__("2xtc");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/selectableOption/SelectableOption.types.js
var SelectableOptionMenuItemType;
(function (SelectableOptionMenuItemType) {
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Normal"] = 0] = "Normal";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Divider"] = 1] = "Divider";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Header"] = 2] = "Header";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["SelectAll"] = 3] = "SelectAll";
})(SelectableOptionMenuItemType || (SelectableOptionMenuItemType = {}));
//# sourceMappingURL=SelectableOption.types.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dropdown/utilities/DropdownSizePosCache.js


/**
 * A utility class to cache size and position in cache.
 *
 * Dropdown options has non-selectable display types. It is therefore not cheap to determine
 * the total number of actual selectable options as well as the position an option is in the
 * list of options - O(n) cost for each lookup.
 *
 * Given that we potentially have to make this determination on every single render pass, this
 * cache should provide a little bit of relief.
 */
var DropdownSizePosCache_DropdownSizePosCache = /** @class */ (function () {
    function DropdownSizePosCache() {
        this._size = 0;
    }
    /**
     * Invalidates the cache and recalculate the size of selectable options.
     */
    DropdownSizePosCache.prototype.updateOptions = function (options) {
        var displayOnlyOptionsCache = [];
        var notSelectableOptionsCache = [];
        var size = 0;
        for (var i = 0; i < options.length; i++) {
            var _a = options[i], itemType = _a.itemType, hidden = _a.hidden;
            if (itemType === SelectableOptionMenuItemType.Divider || itemType === SelectableOptionMenuItemType.Header) {
                displayOnlyOptionsCache.push(i);
                notSelectableOptionsCache.push(i);
            }
            else if (hidden) {
                notSelectableOptionsCache.push(i);
            }
            else {
                size++;
            }
        }
        this._size = size;
        this._displayOnlyOptionsCache = displayOnlyOptionsCache;
        this._notSelectableOptionsCache = notSelectableOptionsCache;
        this._cachedOptions = Object(tslib_es6["f" /* __spreadArray */])([], options, true);
    };
    Object.defineProperty(DropdownSizePosCache.prototype, "optionSetSize", {
        /**
         * The size of all the selectable options.
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropdownSizePosCache.prototype, "cachedOptions", {
        /**
         * The chached options array.
         */
        get: function () {
            return this._cachedOptions;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the position of this option element relative to the full set of selectable option elements.
     * Note: the first selectable element is position 1 in the set.
     * @param index The raw index of the option element.
     */
    DropdownSizePosCache.prototype.positionInSet = function (index) {
        if (index === undefined) {
            return undefined;
        }
        // we could possibly memoize this too but this should be good enough, most of the time (the expectation is that
        // when you have a lot of options, the selectable options will heavily dominate over the non-selectable options.
        var offset = 0;
        while (index > this._notSelectableOptionsCache[offset]) {
            offset++;
        }
        if (this._displayOnlyOptionsCache[offset] === index) {
            throw new Error("Unexpected: Option at index ".concat(index, " is not a selectable element."));
        }
        if (this._notSelectableOptionsCache[offset] === index) {
            return undefined;
        }
        return index - offset + 1;
    };
    return DropdownSizePosCache;
}());

//# sourceMappingURL=DropdownSizePosCache.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Label/Label.js + 2 modules
var Label = __webpack_require__("Rel8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Panel/Panel.js + 2 modules
var Panel = __webpack_require__("N1b6");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/hooks/useResponsiveMode.js
var useResponsiveMode = __webpack_require__("OpsB");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/withResponsiveMode.js
var withResponsiveMode = __webpack_require__("hDQx");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/selectableOption/SelectableOption.js
function getAllSelectedOptions(options, selectedIndices) {
    var selectedOptions = [];
    for (var _i = 0, selectedIndices_1 = selectedIndices; _i < selectedIndices_1.length; _i++) {
        var index = selectedIndices_1[_i];
        var option = options[index];
        if (option) {
            selectedOptions.push(option);
        }
    }
    return selectedOptions;
}
//# sourceMappingURL=SelectableOption.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.js + 2 modules
var Checkbox = __webpack_require__("kqob");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getPropsWithDefaults.js
var getPropsWithDefaults = __webpack_require__("BLix");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/usePrevious.js
var usePrevious = __webpack_require__("kWOt");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dropdown/Dropdown.base.js













// import and use V7 Checkbox to ensure no breaking changes.





var COMPONENT_NAME = 'Dropdown';
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DEFAULT_PROPS = {
    options: [],
};
function useSelectedItemsState(_a) {
    var defaultSelectedKeys = _a.defaultSelectedKeys, selectedKeys = _a.selectedKeys, defaultSelectedKey = _a.defaultSelectedKey, selectedKey = _a.selectedKey, options = _a.options, multiSelect = _a.multiSelect;
    var oldOptions = Object(usePrevious["a" /* usePrevious */])(options);
    var _b = react["useState"]([]), selectedIndices = _b[0], setSelectedIndices = _b[1];
    // In controlled component usage where selectedKey is provided, update the selectedIndex
    // state if the key or options change.
    var selectedKeyPropToUse;
    // this does a shallow compare (assumes options are pure), for the purposes of determining whether
    // defaultSelectedKey/defaultSelectedKeys are respected.
    var didOptionsChange = options !== oldOptions;
    if (multiSelect) {
        if (didOptionsChange && defaultSelectedKeys !== undefined) {
            selectedKeyPropToUse = defaultSelectedKeys;
        }
        else {
            selectedKeyPropToUse = selectedKeys;
        }
    }
    else {
        if (didOptionsChange && defaultSelectedKey !== undefined) {
            selectedKeyPropToUse = defaultSelectedKey;
        }
        else {
            selectedKeyPropToUse = selectedKey;
        }
    }
    var oldSelectedKeyProp = Object(usePrevious["a" /* usePrevious */])(selectedKeyPropToUse);
    react["useEffect"](function () {
        /** Get all selected indexes for multi-select mode */
        var getSelectedIndexes = function () {
            if (selectedKeyPropToUse === undefined) {
                if (multiSelect) {
                    return getAllSelectedIndices();
                }
                var selectedIndex = getSelectedIndex(null);
                return selectedIndex !== -1 ? [selectedIndex] : [];
            }
            else if (!Array.isArray(selectedKeyPropToUse)) {
                var selectedIndex = getSelectedIndex(selectedKeyPropToUse);
                return selectedIndex !== -1 ? [selectedIndex] : [];
            }
            var returnValue = [];
            for (var _i = 0, selectedKeyPropToUse_1 = selectedKeyPropToUse; _i < selectedKeyPropToUse_1.length; _i++) {
                var key = selectedKeyPropToUse_1[_i];
                var selectedIndex = getSelectedIndex(key);
                selectedIndex !== -1 && returnValue.push(selectedIndex);
            }
            return returnValue;
        };
        var getAllSelectedIndices = function () {
            return options
                .map(function (option, index) { return (option.selected ? index : -1); })
                .filter(function (index) { return index !== -1; });
        };
        var getSelectedIndex = function (searchKey) {
            return Object(array["d" /* findIndex */])(options, function (option) {
                // eslint-disable-next-line eqeqeq
                if (searchKey != null) {
                    return option.key === searchKey;
                }
                else {
                    // eslint-disable-next-line deprecation/deprecation
                    return !!option.selected || !!option.isSelected;
                }
            });
        };
        if ((selectedKeyPropToUse !== undefined || !oldOptions) &&
            (selectedKeyPropToUse !== oldSelectedKeyProp || didOptionsChange)) {
            setSelectedIndices(getSelectedIndexes());
        }
    }, [didOptionsChange, multiSelect, oldOptions, oldSelectedKeyProp, options, selectedKeyPropToUse]);
    return [selectedIndices, setSelectedIndices];
}
var DropdownBase = react["forwardRef"](function (propsWithoutDefaults, forwardedRef) {
    var props = Object(getPropsWithDefaults["a" /* getPropsWithDefaults */])(DEFAULT_PROPS, propsWithoutDefaults);
    var rootRef = react["useRef"](null);
    var mergedRootRef = Object(useMergedRefs["a" /* useMergedRefs */])(forwardedRef, rootRef);
    var responsiveMode = Object(useResponsiveMode["a" /* useResponsiveMode */])(rootRef, props.responsiveMode);
    var _a = useSelectedItemsState(props), selectedIndices = _a[0], setSelectedIndices = _a[1];
    return (react["createElement"](Dropdown_base_DropdownInternal, Object(tslib_es6["a" /* __assign */])({}, props, { responsiveMode: responsiveMode, hoisted: { rootRef: mergedRootRef, selectedIndices: selectedIndices, setSelectedIndices: setSelectedIndices } })));
});
DropdownBase.displayName = 'DropdownBase';
var Dropdown_base_DropdownInternal = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DropdownInternal, _super);
    function DropdownInternal(props) {
        var _this = _super.call(this, props) || this;
        _this._host = react["createRef"]();
        _this._focusZone = react["createRef"]();
        _this._dropDown = react["createRef"]();
        _this._scrollIdleDelay = 250 /* ms */;
        _this._sizePosCache = new DropdownSizePosCache_DropdownSizePosCache();
        _this._requestAnimationFrame = Object(safeRequestAnimationFrame["a" /* safeRequestAnimationFrame */])(_this);
        /**
         * Close menu callout if it is open
         */
        _this.dismissMenu = function () {
            var isOpen = _this.state.isOpen;
            isOpen && _this.setState({ isOpen: false });
        };
        _this._onChange = function (event, options, index, checked, multiSelect) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged;
            if (onChange || onChanged) {
                // for single-select, option passed in will always be selected.
                // for multi-select, flip the checked value
                var changedOpt = multiSelect ? Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, options[index]), { selected: !checked }) : options[index];
                onChange && onChange(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { target: _this._dropDown.current }), changedOpt, index);
                onChanged && onChanged(changedOpt, index);
            }
        };
        /** Get either props.placeholder (new name) or props.placeHolder (old name) */
        _this._getPlaceholder = function () {
            // eslint-disable-next-line deprecation/deprecation
            return _this.props.placeholder || _this.props.placeHolder;
        };
        /** Get text in dropdown input as a string */
        _this._getTitle = function (items, _unused) {
            var _a = _this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
            return items.map(function (i) { return i.text; }).join(multiSelectDelimiter);
        };
        /** Render text in dropdown input */
        _this._onRenderTitle = function (items) {
            return react["createElement"](react["Fragment"], null, _this._getTitle(items));
        };
        /** Render placeholder text in dropdown input */
        _this._onRenderPlaceholder = function (props) {
            if (!_this._getPlaceholder()) {
                return null;
            }
            return react["createElement"](react["Fragment"], null, _this._getPlaceholder());
        };
        /** Render Callout or Panel container and pass in list */
        _this._onRenderContainer = function (props) {
            var calloutProps = props.calloutProps, panelProps = props.panelProps;
            var _a = _this.props, responsiveMode = _a.responsiveMode, dropdownWidth = _a.dropdownWidth;
            var isSmall = responsiveMode <= withResponsiveMode["a" /* ResponsiveMode */].medium;
            var focusTrapZoneProps = { firstFocusableTarget: "#".concat(_this._listId, "1") };
            var panelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.panel
                : undefined;
            var calloutWidth = undefined;
            var calloutMinWidth = undefined;
            if (dropdownWidth === 'auto') {
                calloutMinWidth = _this._dropDown.current ? _this._dropDown.current.clientWidth : 0;
            }
            else {
                calloutWidth = dropdownWidth || (_this._dropDown.current ? _this._dropDown.current.clientWidth : 0);
            }
            return isSmall ? (react["createElement"](Panel["a" /* Panel */], Object(tslib_es6["a" /* __assign */])({ closeButtonAriaLabel: "Close", focusTrapZoneProps: focusTrapZoneProps, hasCloseButton: true, isOpen: true, isLightDismiss: true, onDismiss: _this._onDismiss, styles: panelStyles }, panelProps), _this._renderFocusableList(props))) : (react["createElement"](Callout["a" /* Callout */], Object(tslib_es6["a" /* __assign */])({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHintFixed: false, directionalHint: DirectionalHint["a" /* DirectionalHint */].bottomLeftEdge, calloutWidth: calloutWidth, calloutMinWidth: calloutMinWidth }, calloutProps, { className: _this._classNames.callout, target: _this._dropDown.current, onDismiss: _this._onDismiss, onScroll: _this._onScroll, onPositioned: _this._onPositioned }), _this._renderFocusableList(props)));
        };
        /** Render Caret Down Icon */
        _this._onRenderCaretDown = function (props) {
            return react["createElement"](Icon["a" /* Icon */], { className: _this._classNames.caretDown, iconName: "ChevronDown", "aria-hidden": true });
        };
        /** Render List of items */
        _this._onRenderList = function (props) {
            var _a = props.onRenderItem, onRenderItem = _a === void 0 ? _this._onRenderItem : _a;
            var queue = { items: [] };
            var renderedList = [];
            var emptyQueue = function () {
                var newGroup = queue.id
                    ? [
                        react["createElement"]("div", { role: "group", key: queue.id, "aria-labelledby": queue.id }, queue.items),
                    ]
                    : queue.items;
                renderedList = Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], renderedList, true), newGroup, true);
                // Flush items and id
                queue = { items: [] };
            };
            var placeRenderedOptionIntoQueue = function (item, index) {
                /*
                  Case Header
                    empty queue if it's not already empty
                    ensure unique ID for header and set queue ID
                    push header into queue
                  Case Divider
                    push divider into queue if not first item
                    empty queue if not already empty
                  Default
                    push item into queue
                */
                switch (item.itemType) {
                    case SelectableOptionMenuItemType.Header:
                        queue.items.length > 0 && emptyQueue();
                        var id = _this._id + item.key;
                        queue.items.push(onRenderItem(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ id: id }, item), { index: index }), _this._onRenderItem));
                        queue.id = id;
                        break;
                    case SelectableOptionMenuItemType.Divider:
                        index > 0 && queue.items.push(onRenderItem(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { index: index }), _this._onRenderItem));
                        queue.items.length > 0 && emptyQueue();
                        break;
                    default:
                        queue.items.push(onRenderItem(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { index: index }), _this._onRenderItem));
                }
            };
            // Place options into the queue. Queue will be emptied anytime a Header or Divider is encountered
            props.options.forEach(function (item, index) {
                placeRenderedOptionIntoQueue(item, index);
            });
            // Push remaining items into all renderedList
            queue.items.length > 0 && emptyQueue();
            return react["createElement"](react["Fragment"], null, renderedList);
        };
        _this._onRenderItem = function (item) {
            switch (item.itemType) {
                case SelectableOptionMenuItemType.Divider:
                    return _this._renderSeparator(item);
                case SelectableOptionMenuItemType.Header:
                    return _this._renderHeader(item);
                default:
                    return _this._renderOption(item);
            }
        };
        _this._renderOption = function (item) {
            var _a;
            var _b = _this.props, _c = _b.onRenderOption, onRenderOption = _c === void 0 ? _this._onRenderOption : _c, _d = _b.hoisted.selectedIndices, selectedIndices = _d === void 0 ? [] : _d;
            var isItemSelected = item.index !== undefined && selectedIndices ? selectedIndices.indexOf(item.index) > -1 : false;
            // select the right className based on the combination of selected/disabled
            var itemClassName = item.hidden // predicate: item hidden
                ? _this._classNames.dropdownItemHidden
                : isItemSelected && item.disabled === true // predicate: both selected and disabled
                    ? _this._classNames.dropdownItemSelectedAndDisabled
                    : isItemSelected // predicate: selected only
                        ? _this._classNames.dropdownItemSelected
                        : item.disabled === true // predicate: disabled only
                            ? _this._classNames.dropdownItemDisabled
                            : _this._classNames.dropdownItem;
            var title = item.title;
            // define the id and label id (for multiselect checkboxes)
            var id = _this._listId + item.index;
            var labelId = (_a = item.id) !== null && _a !== void 0 ? _a : id + '-label';
            var multiSelectItemStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.multiSelectItem
                : undefined;
            return !_this.props.multiSelect ? (react["createElement"](CommandButton["a" /* CommandButton */], { id: id, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, className: itemClassName, onClick: _this._onItemClick(item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseEnter: _this._onItemMouseEnter.bind(_this, item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseLeave: _this._onMouseItemLeave.bind(_this, item), 
                // eslint-disable-next-line react/jsx-no-bind
                onMouseMove: _this._onItemMouseMove.bind(_this, item), role: "option", "aria-selected": isItemSelected ? 'true' : 'false', ariaLabel: item.ariaLabel, title: title, "aria-posinset": _this._sizePosCache.positionInSet(item.index), "aria-setsize": _this._sizePosCache.optionSetSize }, onRenderOption(item, _this._onRenderOption))) : (react["createElement"](Checkbox["a" /* Checkbox */], { id: id, key: item.key, disabled: item.disabled, onChange: _this._onItemClick(item), inputProps: Object(tslib_es6["a" /* __assign */])({ 'aria-selected': isItemSelected, onMouseEnter: _this._onItemMouseEnter.bind(_this, item), onMouseLeave: _this._onMouseItemLeave.bind(_this, item), onMouseMove: _this._onItemMouseMove.bind(_this, item), role: 'option' }, {
                    'data-index': item.index,
                    'data-is-focusable': !(item.disabled || item.hidden),
                }), label: item.text, title: title, 
                // eslint-disable-next-line react/jsx-no-bind
                onRenderLabel: _this._onRenderItemLabel.bind(_this, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, item), { id: labelId })), className: Object(css["a" /* css */])(itemClassName, 'is-multi-select'), checked: isItemSelected, styles: multiSelectItemStyles, ariaPositionInSet: !item.hidden ? _this._sizePosCache.positionInSet(item.index) : undefined, ariaSetSize: !item.hidden ? _this._sizePosCache.optionSetSize : undefined, ariaLabel: item.ariaLabel, ariaLabelledBy: item.ariaLabel ? undefined : labelId }));
        };
        /** Render content of item (i.e. text/icon inside of button) */
        _this._onRenderOption = function (item) {
            return react["createElement"]("span", { className: _this._classNames.dropdownOptionText }, item.text);
        };
        /*
         * Render content of a multiselect item label.
         * Text within the label is aria-hidden, to prevent duplicate input/label exposure
         */
        _this._onRenderMultiselectOption = function (item) {
            return (react["createElement"]("span", { id: item.id, "aria-hidden": "true", className: _this._classNames.dropdownOptionText }, item.text));
        };
        /** Render custom label for multiselect checkbox items */
        _this._onRenderItemLabel = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderMultiselectOption : _a;
            return onRenderOption(item, _this._onRenderMultiselectOption);
        };
        _this._onPositioned = function (positions) {
            if (_this._focusZone.current) {
                // Focusing an element can trigger a reflow. Making this wait until there is an animation
                // frame can improve perf significantly.
                _this._requestAnimationFrame(function () {
                    var selectedIndices = _this.props.hoisted.selectedIndices;
                    if (_this._focusZone.current) {
                        if (!_this._hasBeenPositioned &&
                            selectedIndices &&
                            selectedIndices[0] &&
                            !_this.props.options[selectedIndices[0]].disabled) {
                            var element = Object(getDocument["a" /* getDocument */])().getElementById("".concat(_this._id, "-list").concat(selectedIndices[0]));
                            if (element) {
                                _this._focusZone.current.focusElement(element);
                            }
                            _this._hasBeenPositioned = true;
                        }
                        else {
                            _this._focusZone.current.focus();
                        }
                    }
                });
            }
            if (!_this.state.calloutRenderEdge || _this.state.calloutRenderEdge !== positions.targetEdge) {
                _this.setState({
                    calloutRenderEdge: positions.targetEdge,
                });
            }
        };
        _this._onItemClick = function (item) {
            return function (event) {
                if (!item.disabled) {
                    _this.setSelectedIndex(event, item.index);
                    if (!_this.props.multiSelect) {
                        // only close the callout when it's in single-select mode
                        _this.setState({
                            isOpen: false,
                        });
                    }
                }
            };
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            var win = Object(dom["b" /* getWindowEx */])(_this.context); // can only be called on the client
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                win.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = win.setTimeout(function () {
                _this._isScrollIdle = true;
            }, _this._scrollIdleDelay);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.current) {
                if (_this._host.current.setActive) {
                    try {
                        _this._host.current.setActive();
                    }
                    catch (e) {
                        /* no-op */
                    }
                }
                else {
                    _this._host.current.focus();
                }
            }
        };
        _this._onDismiss = function () {
            _this.setState({ isOpen: false });
        };
        _this._onDropdownBlur = function (ev) {
            // If Dropdown disabled do not proceed with this logic.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            if (_this.state.isOpen) {
                // Do not call onBlur or update focus state when the callout is opened
                return;
            }
            _this.setState({ hasFocus: false });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onDropdownKeyDown = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            var newIndex;
            var selectedIndex = _this.props.hoisted.selectedIndices.length ? _this.props.hoisted.selectedIndices[0] : -1;
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            var isOpen = _this.state.isOpen;
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case KeyCodes["a" /* KeyCodes */].enter:
                    _this.setState({
                        isOpen: !isOpen,
                    });
                    break;
                case KeyCodes["a" /* KeyCodes */].escape:
                    if (!isOpen) {
                        return;
                    }
                    _this.setState({
                        isOpen: false,
                    });
                    break;
                case KeyCodes["a" /* KeyCodes */].up:
                    if (containsExpandCollapseModifier) {
                        if (isOpen) {
                            _this.setState({ isOpen: false });
                            break;
                        }
                        return;
                    }
                    if (_this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, -1, selectedIndex - 1, selectedIndex);
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].down:
                    if (containsExpandCollapseModifier) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }
                    if ((containsExpandCollapseModifier && !isOpen) || _this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, 1, selectedIndex + 1, selectedIndex);
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].home:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, 1, 0, selectedIndex);
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].end:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, -1, _this.props.options.length - 1, selectedIndex);
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].space:
                    // event handled in _onDropdownKeyUp
                    break;
                default:
                    return;
            }
            if (newIndex !== selectedIndex) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this._onDropdownKeyUp = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            var isOpen = _this.state.isOpen;
            if (_this.props.onKeyUp) {
                _this.props.onKeyUp(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case KeyCodes["a" /* KeyCodes */].space:
                    _this.setState({
                        isOpen: !isOpen,
                    });
                    break;
                default:
                    if (shouldHandleKey && isOpen) {
                        _this.setState({ isOpen: false });
                    }
                    return;
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyDown = function (ev) {
            var _a, _b;
            var elementToFocus;
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            // eslint-disable-next-line deprecation/deprecation
            switch (ev.which) {
                case KeyCodes["a" /* KeyCodes */].up:
                    if (containsExpandCollapseModifier) {
                        _this.setState({ isOpen: false });
                    }
                    else {
                        if (_this._host.current) {
                            elementToFocus = Object(lib_focus["h" /* getLastFocusable */])(_this._host.current, _this._host.current.lastChild, true);
                        }
                    }
                    break;
                // All directional keystrokes should be canceled when the zone is rendered.
                // This avoids the body scroll from reacting and thus dismissing the dropdown.
                case KeyCodes["a" /* KeyCodes */].home:
                case KeyCodes["a" /* KeyCodes */].end:
                case KeyCodes["a" /* KeyCodes */].pageUp:
                case KeyCodes["a" /* KeyCodes */].pageDown:
                    break;
                case KeyCodes["a" /* KeyCodes */].down:
                    if (!containsExpandCollapseModifier && _this._host.current) {
                        elementToFocus = Object(lib_focus["e" /* getFirstFocusable */])(_this._host.current, _this._host.current.firstChild, true);
                    }
                    break;
                case KeyCodes["a" /* KeyCodes */].escape:
                    _this.setState({ isOpen: false });
                    break;
                case KeyCodes["a" /* KeyCodes */].tab:
                    _this.setState({ isOpen: false });
                    var document_1 = Object(getDocument["a" /* getDocument */])();
                    if (document_1) {
                        if (ev.shiftKey) {
                            (_a = Object(lib_focus["k" /* getPreviousElement */])(document_1.body, _this._dropDown.current, false, false, true, true)) === null || _a === void 0 ? void 0 : _a.focus();
                        }
                        else {
                            (_b = Object(lib_focus["j" /* getNextElement */])(document_1.body, _this._dropDown.current, false, false, true, true)) === null || _b === void 0 ? void 0 : _b.focus();
                        }
                    }
                    break;
                default:
                    return;
            }
            if (elementToFocus) {
                elementToFocus.focus();
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyUp = function (ev) {
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            if (shouldHandleKey && _this.state.isOpen) {
                _this.setState({ isOpen: false });
                ev.preventDefault();
            }
        };
        _this._onDropdownClick = function (ev) {
            if (_this.props.onClick) {
                _this.props.onClick(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            var isOpen = _this.state.isOpen;
            var disabled = _this._isDisabled();
            if (!disabled && !_this._shouldOpenOnFocus()) {
                _this.setState({
                    isOpen: !isOpen,
                });
            }
            _this._isFocusedByClick = false; // reset
        };
        _this._onDropdownMouseDown = function () {
            _this._isFocusedByClick = true;
        };
        _this._onFocus = function (ev) {
            var disabled = _this._isDisabled();
            if (!disabled) {
                if (_this.props.onFocus) {
                    _this.props.onFocus(ev);
                }
                var state = { hasFocus: true };
                if (_this._shouldOpenOnFocus()) {
                    state.isOpen = true;
                }
                _this.setState(state);
            }
        };
        /**
         * Because the isDisabled prop is deprecated, we have had to repeat this logic all over the place.
         * This helper method avoids all the repetition.
         */
        _this._isDisabled = function () {
            var disabled = _this.props.disabled;
            // eslint-disable-next-line deprecation/deprecation
            var isDisabled = _this.props.isDisabled;
            // Remove this deprecation workaround at 1.0.0
            if (disabled === undefined) {
                disabled = isDisabled;
            }
            return disabled;
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required, disabled = props.disabled;
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            return label ? (react["createElement"](Label["a" /* Label */], { className: _this._classNames.label, id: _this._labelId, required: required, styles: labelStyles, disabled: disabled }, label)) : null;
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        var multiSelect = props.multiSelect, selectedKey = props.selectedKey, selectedKeys = props.selectedKeys, defaultSelectedKey = props.defaultSelectedKey, defaultSelectedKeys = props.defaultSelectedKeys, options = props.options;
        if (false) { var warnNotMultiSelect, warnMultiSelect; }
        _this._id = props.id || Object(getId["a" /* getId */])('Dropdown');
        _this._labelId = _this._id + '-label';
        _this._listId = _this._id + '-list';
        _this._optionId = _this._id + '-option';
        _this._isScrollIdle = true;
        _this._hasBeenPositioned = false;
        _this._sizePosCache.updateOptions(options);
        _this.state = {
            isOpen: false,
            hasFocus: false,
            calloutRenderEdge: undefined,
        };
        return _this;
    }
    Object.defineProperty(DropdownInternal.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            var _a = this.props, options = _a.options, selectedIndices = _a.hoisted.selectedIndices;
            return getAllSelectedOptions(options, selectedIndices);
        },
        enumerable: false,
        configurable: true
    });
    DropdownInternal.prototype.componentWillUnmount = function () {
        clearTimeout(this._scrollIdleTimeoutId);
    };
    DropdownInternal.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.isOpen === true && this.state.isOpen === false) {
            this._gotMouseMove = false;
            this._hasBeenPositioned = false;
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    DropdownInternal.prototype.render = function () {
        var id = this._id;
        var props = this.props;
        var className = props.className, label = props.label, options = props.options, ariaLabel = props.ariaLabel, required = props.required, errorMessage = props.errorMessage, propStyles = props.styles, theme = props.theme, panelProps = props.panelProps, calloutProps = props.calloutProps, _a = props.onRenderTitle, onRenderTitle = _a === void 0 ? this._getTitle : _a, _b = props.onRenderContainer, onRenderContainer = _b === void 0 ? this._onRenderContainer : _b, _c = props.onRenderCaretDown, onRenderCaretDown = _c === void 0 ? this._onRenderCaretDown : _c, _d = props.onRenderLabel, onRenderLabel = _d === void 0 ? this._onRenderLabel : _d, _e = props.onRenderItem, onRenderItem = _e === void 0 ? this._onRenderItem : _e, selectedIndices = props.hoisted.selectedIndices;
        var _f = this.state, isOpen = _f.isOpen, calloutRenderEdge = _f.calloutRenderEdge, hasFocus = _f.hasFocus;
        // eslint-disable-next-line deprecation/deprecation
        var onRenderPlaceholder = props.onRenderPlaceholder || props.onRenderPlaceHolder || this._getPlaceholder;
        // If our cached options are out of date update our cache
        if (options !== this._sizePosCache.cachedOptions) {
            this._sizePosCache.updateOptions(options);
        }
        var selectedOptions = getAllSelectedOptions(options, selectedIndices);
        var divProps = Object(properties["h" /* getNativeProps */])(props, properties["f" /* divProperties */]);
        var disabled = this._isDisabled();
        var errorMessageId = id + '-errorMessage';
        this._classNames = getClassNames(propStyles, {
            theme: theme,
            className: className,
            hasError: !!(errorMessage && errorMessage.length > 0),
            hasLabel: !!label,
            isOpen: isOpen,
            required: required,
            disabled: disabled,
            isRenderingPlaceholder: !selectedOptions.length,
            panelClassName: panelProps ? panelProps.className : undefined,
            calloutClassName: calloutProps ? calloutProps.className : undefined,
            calloutRenderEdge: calloutRenderEdge,
        });
        var hasErrorMessage = !!errorMessage && errorMessage.length > 0;
        return (react["createElement"]("div", { className: this._classNames.root, ref: this.props.hoisted.rootRef, "aria-owns": isOpen ? this._listId : undefined },
            onRenderLabel(this.props, this._onRenderLabel),
            react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ "data-is-focusable": !disabled, "data-ktp-target": true, ref: this._dropDown, id: id, tabIndex: disabled ? -1 : 0, role: "combobox", "aria-haspopup": "listbox", "aria-expanded": isOpen ? 'true' : 'false', "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? Object(aria["a" /* mergeAriaAttributeValues */])(this._labelId, this._optionId) : undefined, "aria-describedby": hasErrorMessage ? this._id + '-errorMessage' : undefined, "aria-required": required, "aria-disabled": disabled, "aria-controls": isOpen ? this._listId : undefined }, divProps, { className: this._classNames.dropdown, onBlur: this._onDropdownBlur, onKeyDown: this._onDropdownKeyDown, onKeyUp: this._onDropdownKeyUp, onClick: this._onDropdownClick, onMouseDown: this._onDropdownMouseDown, onFocus: this._onFocus }),
                react["createElement"]("span", { id: this._optionId, className: this._classNames.title, "aria-live": hasFocus ? 'polite' : undefined, "aria-atomic": hasFocus ? true : undefined, "aria-invalid": hasErrorMessage }, 
                // If option is selected render title, otherwise render the placeholder text
                selectedOptions.length
                    ? onRenderTitle(selectedOptions, this._onRenderTitle)
                    : onRenderPlaceholder(props, this._onRenderPlaceholder)),
                react["createElement"]("span", { className: this._classNames.caretDownWrapper }, onRenderCaretDown(props, this._onRenderCaretDown))),
            isOpen &&
                onRenderContainer(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, props), { onDismiss: this._onDismiss, onRenderItem: onRenderItem }), this._onRenderContainer),
            hasErrorMessage && (react["createElement"]("div", { role: "alert", id: errorMessageId, className: this._classNames.errorMessage }, errorMessage))));
    };
    DropdownInternal.prototype.focus = function (shouldOpenOnFocus) {
        if (this._dropDown.current) {
            this._dropDown.current.focus();
            if (shouldOpenOnFocus) {
                this.setState({
                    isOpen: true,
                });
            }
        }
    };
    DropdownInternal.prototype.setSelectedIndex = function (event, index) {
        var _a = this.props, options = _a.options, selectedKey = _a.selectedKey, selectedKeys = _a.selectedKeys, multiSelect = _a.multiSelect, notifyOnReselect = _a.notifyOnReselect, _b = _a.hoisted.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
        var checked = selectedIndices ? selectedIndices.indexOf(index) > -1 : false;
        var newIndexes = [];
        index = Math.max(0, Math.min(options.length - 1, index));
        // If this is a controlled component then no state change should take place.
        if (selectedKey !== undefined || selectedKeys !== undefined) {
            this._onChange(event, options, index, checked, multiSelect);
            return;
        }
        if (!multiSelect && !notifyOnReselect && index === selectedIndices[0]) {
            return;
        }
        else if (multiSelect) {
            newIndexes = selectedIndices ? this._copyArray(selectedIndices) : [];
            if (checked) {
                var position = newIndexes.indexOf(index);
                if (position > -1) {
                    // unchecked the current one
                    newIndexes.splice(position, 1);
                }
            }
            else {
                // add the new selected index into the existing one
                newIndexes.push(index);
            }
        }
        else {
            // Set the selected option if this is an uncontrolled component
            newIndexes = [index];
        }
        event.persist();
        // Call onChange after state is updated
        this.props.hoisted.setSelectedIndices(newIndexes);
        this._onChange(event, options, index, checked, multiSelect);
    };
    DropdownInternal.prototype._copyArray = function (array) {
        var newArray = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            newArray.push(element);
        }
        return newArray;
    };
    /**
     * Finds the next valid Dropdown option and sets the selected index to it.
     * @param stepValue - Value of how many items the function should traverse.  Should be -1 or 1.
     * @param index - Index of where the search should start
     * @param selectedIndex - The selectedIndex Dropdown's state
     * @returns The next valid dropdown option's index
     */
    DropdownInternal.prototype._moveIndex = function (event, stepValue, index, selectedIndex) {
        var options = this.props.options;
        // Return selectedIndex if nothing has changed or options is empty
        if (selectedIndex === index || options.length === 0) {
            return selectedIndex;
        }
        // If the user is pressing the up or down key we want to make
        // sure that the dropdown cycles through the options without
        // causing the screen to scroll. In _onDropdownKeyDown
        // at the very end is a check to see if newIndex !== selectedIndex.
        // If the index is less than 0 and we set it back to 0, then
        // newIndex will equal selectedIndex and not stop the action
        // of the key press happening and vice versa for indexes greater
        // than or equal to the options length.
        if (index >= options.length) {
            index = 0;
        }
        else if (index < 0) {
            index = options.length - 1;
        }
        var stepCounter = 0;
        // If current index is a header or divider, or disabled, increment by step
        while (options[index].itemType === SelectableOptionMenuItemType.Header ||
            options[index].itemType === SelectableOptionMenuItemType.Divider ||
            options[index].disabled) {
            // If stepCounter exceeds length of options, then return selectedIndex (-1)
            if (stepCounter >= options.length) {
                return selectedIndex;
            }
            // If index + stepValue is out of bounds, wrap around
            if (index + stepValue < 0) {
                index = options.length;
            }
            else if (index + stepValue >= options.length) {
                index = -1;
            }
            index = index + stepValue;
            stepCounter++;
        }
        this.setSelectedIndex(event, index);
        return index;
    };
    /** Wrap item list in a FocusZone */
    DropdownInternal.prototype._renderFocusableList = function (props) {
        var _a = props.onRenderList, onRenderList = _a === void 0 ? this._onRenderList : _a, label = props.label, ariaLabel = props.ariaLabel, multiSelect = props.multiSelect;
        return (react["createElement"]("div", { className: this._classNames.dropdownItemsWrapper, onKeyDown: this._onZoneKeyDown, onKeyUp: this._onZoneKeyUp, ref: this._host, tabIndex: 0 },
            react["createElement"](FocusZone["a" /* FocusZone */], { ref: this._focusZone, direction: FocusZone_types["a" /* FocusZoneDirection */].vertical, id: this._listId, className: this._classNames.dropdownItems, role: "listbox", "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? this._labelId : undefined, "aria-multiselectable": multiSelect }, onRenderList(props, this._onRenderList))));
    };
    DropdownInternal.prototype._renderSeparator = function (item) {
        var index = item.index, key = item.key;
        var separatorClassName = item.hidden ? this._classNames.dropdownDividerHidden : this._classNames.dropdownDivider;
        if (index > 0) {
            return react["createElement"]("div", { role: "presentation", key: key, className: separatorClassName });
        }
        return null;
    };
    DropdownInternal.prototype._renderHeader = function (item) {
        var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOption : _a;
        var key = item.key, id = item.id;
        var headerClassName = item.hidden
            ? this._classNames.dropdownItemHeaderHidden
            : this._classNames.dropdownItemHeader;
        return (react["createElement"]("div", { id: id, key: key, className: headerClassName }, onRenderOption(item, this._onRenderOption)));
    };
    DropdownInternal.prototype._onItemMouseEnter = function (item, ev) {
        if (this._shouldIgnoreMouseEvent()) {
            return;
        }
        var targetElement = ev.currentTarget;
        targetElement.focus();
    };
    DropdownInternal.prototype._onItemMouseMove = function (item, ev) {
        var doc = Object(dom["a" /* getDocumentEx */])(this.context); // can only be called on the client
        var targetElement = ev.currentTarget;
        this._gotMouseMove = true;
        if (!this._isScrollIdle || doc.activeElement === targetElement) {
            return;
        }
        targetElement.focus();
    };
    DropdownInternal.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    DropdownInternal.prototype._isAltOrMeta = function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        return ev.which === KeyCodes["a" /* KeyCodes */].alt || ev.key === 'Meta';
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
    DropdownInternal.prototype._shouldHandleKeyUp = function (ev) {
        var keyPressIsAltOrMetaAlone = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(ev);
        this._lastKeyDownWasAltOrMeta = false;
        return !!keyPressIsAltOrMetaAlone && !(Object(osDetector["a" /* isMac */])() || Object(mobileDetector["a" /* isIOS */])());
    };
    /**
     * Returns true if dropdown should set to open on focus.
     * Otherwise, isOpen state should be toggled on click
     */
    DropdownInternal.prototype._shouldOpenOnFocus = function () {
        var hasFocus = this.state.hasFocus;
        var openOnKeyboardFocus = this.props.openOnKeyboardFocus;
        return !this._isFocusedByClick && openOnKeyboardFocus === true && !hasFocus;
    };
    DropdownInternal.defaultProps = {
        options: [],
    };
    DropdownInternal.contextType = WindowProvider["a" /* WindowContext */];
    return DropdownInternal;
}(react["Component"]));
//# sourceMappingURL=Dropdown.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/positioning/positioning.types.js
var positioning_types = __webpack_require__("m0LP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dropdown/Dropdown.styles.js
var Dropdown_styles_a, Dropdown_styles_b, Dropdown_styles_c, Dropdown_styles_d, Dropdown_styles_e;




var GlobalClassNames = {
    root: 'ms-Dropdown-container',
    label: 'ms-Dropdown-label',
    dropdown: 'ms-Dropdown',
    title: 'ms-Dropdown-title',
    caretDownWrapper: 'ms-Dropdown-caretDownWrapper',
    caretDown: 'ms-Dropdown-caretDown',
    callout: 'ms-Dropdown-callout',
    panel: 'ms-Dropdown-panel',
    dropdownItems: 'ms-Dropdown-items',
    dropdownItem: 'ms-Dropdown-item',
    dropdownDivider: 'ms-Dropdown-divider',
    dropdownOptionText: 'ms-Dropdown-optionText',
    dropdownItemHeader: 'ms-Dropdown-header',
    titleIsPlaceHolder: 'ms-Dropdown-titleIsPlaceHolder',
    titleHasError: 'ms-Dropdown-title--hasError',
};
var DROPDOWN_HEIGHT = 32;
var DROPDOWN_ITEM_HEIGHT = 36;
var highContrastAdjustMixin = (Dropdown_styles_a = {},
    Dropdown_styles_a["".concat(lib["f" /* HighContrastSelector */], ", ").concat(lib["g" /* HighContrastSelectorWhite */].replace('@media ', ''))] = Object(tslib_es6["a" /* __assign */])({}, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
    Dropdown_styles_a);
var highContrastItemAndTitleStateMixin = {
    selectors: Object(tslib_es6["a" /* __assign */])((Dropdown_styles_b = {}, Dropdown_styles_b[lib["f" /* HighContrastSelector */]] = (Dropdown_styles_c = {
            backgroundColor: 'Highlight',
            borderColor: 'Highlight',
            color: 'HighlightText'
        },
        Dropdown_styles_c[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:after")] = {
            borderColor: 'HighlightText',
        },
        Dropdown_styles_c), Dropdown_styles_b['.ms-Checkbox-checkbox'] = (Dropdown_styles_d = {},
        Dropdown_styles_d[lib["f" /* HighContrastSelector */]] = {
            borderColor: 'HighlightText',
        },
        Dropdown_styles_d), Dropdown_styles_b), highContrastAdjustMixin),
};
var highContrastBorderState = {
    selectors: (Dropdown_styles_e = {},
        Dropdown_styles_e[lib["f" /* HighContrastSelector */]] = {
            borderColor: 'Highlight',
        },
        Dropdown_styles_e),
};
var MinimumScreenSelector = Object(lib["A" /* getScreenSelector */])(0, lib["l" /* ScreenWidthMinMedium */]);
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, hasError = props.hasError, hasLabel = props.hasLabel, className = props.className, isOpen = props.isOpen, disabled = props.disabled, required = props.required, isRenderingPlaceholder = props.isRenderingPlaceholder, panelClassName = props.panelClassName, calloutClassName = props.calloutClassName, calloutRenderEdge = props.calloutRenderEdge;
    if (!theme) {
        throw new Error('theme is undefined or null in base Dropdown getStyles function.');
    }
    var globalClassnames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var rootHoverFocusActiveSelectorNeutralDarkMixin = {
        color: semanticColors.menuItemTextHovered,
    };
    var rootHoverFocusActiveSelectorNeutralPrimaryMixin = {
        color: semanticColors.menuItemText,
    };
    var borderColorError = {
        borderColor: semanticColors.errorText,
    };
    var dropdownItemStyle = [
        globalClassnames.dropdownItem,
        {
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            width: '100%',
            minHeight: DROPDOWN_ITEM_HEIGHT,
            lineHeight: 20,
            height: 0,
            position: 'relative',
            border: '1px solid transparent',
            borderRadius: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            textAlign: 'left',
            '.ms-Button-flexContainer': {
                width: '100%',
            },
        },
    ];
    var dropdownHeaderStyle = [
        globalClassnames.dropdownItemHeader,
        Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, fonts.medium), { fontWeight: lib["e" /* FontWeights */].semibold, color: semanticColors.menuHeader, background: 'none', backgroundColor: 'transparent', border: 'none', height: DROPDOWN_ITEM_HEIGHT, lineHeight: DROPDOWN_ITEM_HEIGHT, cursor: 'default', padding: '0 8px', userSelect: 'none', textAlign: 'left', selectors: (_a = {},
                _a[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                _a) }),
    ];
    var selectedItemBackgroundColor = semanticColors.menuItemBackgroundPressed;
    var itemSelectors = function (isSelected) {
        var _a, _b;
        if (isSelected === void 0) { isSelected = false; }
        return {
            selectors: (_a = {
                    '&:hover': [
                        {
                            color: semanticColors.menuItemTextHovered,
                            backgroundColor: !isSelected ? semanticColors.menuItemBackgroundHovered : selectedItemBackgroundColor,
                        },
                        highContrastItemAndTitleStateMixin,
                    ],
                    '&.is-multi-select:hover': [
                        { backgroundColor: !isSelected ? 'transparent' : selectedItemBackgroundColor },
                        highContrastItemAndTitleStateMixin,
                    ],
                    '&:active:hover': [
                        {
                            color: semanticColors.menuItemTextHovered,
                            backgroundColor: !isSelected
                                ? semanticColors.menuItemBackgroundPressed
                                : semanticColors.menuItemBackgroundHovered,
                        },
                        highContrastItemAndTitleStateMixin,
                    ]
                },
                _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus:after, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus:after")] = (_b = {
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0
                    },
                    _b[lib["f" /* HighContrastSelector */]] = {
                        inset: '2px',
                    },
                    _b),
                _a[lib["f" /* HighContrastSelector */]] = {
                    border: 'none',
                },
                _a),
        };
    };
    var dropdownItemSelected = Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], dropdownItemStyle, true), [
        {
            backgroundColor: selectedItemBackgroundColor,
            color: semanticColors.menuItemTextHovered,
        },
        itemSelectors(true),
        highContrastItemAndTitleStateMixin,
    ], false);
    var dropdownItemDisabled = Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], dropdownItemStyle, true), [
        {
            color: semanticColors.disabledText,
            cursor: 'default',
            selectors: (_b = {},
                _b[lib["f" /* HighContrastSelector */]] = {
                    color: 'GrayText',
                    border: 'none',
                },
                _b),
        },
    ], false);
    var titleOpenBorderRadius = calloutRenderEdge === positioning_types["a" /* RectangleEdge */].bottom
        ? "".concat(effects.roundedCorner2, " ").concat(effects.roundedCorner2, " 0 0")
        : "0 0 ".concat(effects.roundedCorner2, " ").concat(effects.roundedCorner2);
    var calloutOpenBorderRadius = calloutRenderEdge === positioning_types["a" /* RectangleEdge */].bottom
        ? "0 0 ".concat(effects.roundedCorner2, " ").concat(effects.roundedCorner2)
        : "".concat(effects.roundedCorner2, " ").concat(effects.roundedCorner2, " 0 0");
    return {
        root: [globalClassnames.root, className],
        label: globalClassnames.label,
        dropdown: [
            globalClassnames.dropdown,
            lib["H" /* normalize */],
            fonts.medium,
            {
                color: semanticColors.menuItemText,
                borderColor: semanticColors.focusBorder,
                position: 'relative',
                outline: 0,
                userSelect: 'none',
                selectors: (_c = {},
                    _c['&:hover .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: isOpen ? palette.neutralSecondary : palette.neutralPrimary },
                        highContrastBorderState,
                    ],
                    _c['&:focus .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { selectors: (_d = {}, _d[lib["f" /* HighContrastSelector */]] = { color: 'Highlight' }, _d) },
                    ],
                    _c['&:focus:after'] = [
                        {
                            pointerEvents: 'none',
                            content: "''",
                            position: 'absolute',
                            boxSizing: 'border-box',
                            top: '0px',
                            left: '0px',
                            width: '100%',
                            height: '100%',
                            // see https://github.com/microsoft/fluentui/pull/9182 for semantic color disc
                            border: !disabled ? "2px solid ".concat(palette.themePrimary) : 'none',
                            borderRadius: '2px',
                            selectors: (_e = {},
                                _e[lib["f" /* HighContrastSelector */]] = {
                                    color: 'Highlight',
                                },
                                _e),
                        },
                    ],
                    _c['&:active .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: palette.themePrimary },
                        highContrastBorderState,
                    ],
                    _c['&:hover .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _c['&:focus .' + globalClassnames.caretDown] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                        { selectors: (_f = {}, _f[lib["f" /* HighContrastSelector */]] = { color: 'Highlight' }, _f) },
                    ],
                    _c['&:active .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _c['&:hover .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _c['&:focus .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _c['&:active .' + globalClassnames.titleIsPlaceHolder] = !disabled && rootHoverFocusActiveSelectorNeutralPrimaryMixin,
                    _c['&:hover .' + globalClassnames.titleHasError] = borderColorError,
                    _c['&:active .' + globalClassnames.titleHasError] = borderColorError,
                    _c),
            },
            isOpen && 'is-open',
            disabled && 'is-disabled',
            required && 'is-required',
            required &&
                !hasLabel && {
                selectors: (_g = {
                        ':before': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10,
                        }
                    },
                    _g[lib["f" /* HighContrastSelector */]] = {
                        selectors: {
                            ':after': {
                                right: -14, // moving the * 4 pixel to right to alleviate border clipping in HC mode.
                            },
                        },
                    },
                    _g),
            },
        ],
        title: [
            globalClassnames.title,
            lib["H" /* normalize */],
            {
                backgroundColor: semanticColors.inputBackground,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: semanticColors.inputBorder,
                borderRadius: isOpen ? titleOpenBorderRadius : effects.roundedCorner2,
                cursor: 'pointer',
                display: 'block',
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2,
                padding: "0 28px 0 8px",
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
            isRenderingPlaceholder && [globalClassnames.titleIsPlaceHolder, { color: semanticColors.inputPlaceholderText }],
            hasError && [globalClassnames.titleHasError, borderColorError],
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                border: 'none',
                color: semanticColors.disabledText,
                cursor: 'default',
                selectors: (_h = {},
                    _h[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ border: '1px solid GrayText', color: 'GrayText', backgroundColor: 'Window' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _h),
            },
        ],
        caretDownWrapper: [
            globalClassnames.caretDownWrapper,
            {
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2,
                paddingTop: 1,
                position: 'absolute',
                right: 8,
                top: 0,
            },
            !disabled && {
                cursor: 'pointer',
            },
        ],
        caretDown: [
            globalClassnames.caretDown,
            { color: palette.neutralSecondary, fontSize: fonts.small.fontSize, pointerEvents: 'none' },
            disabled && {
                color: semanticColors.disabledText,
                selectors: (_j = {},
                    _j[lib["f" /* HighContrastSelector */]] = Object(tslib_es6["a" /* __assign */])({ color: 'GrayText' }, Object(lib["w" /* getHighContrastNoAdjustStyle */])()),
                    _j),
            },
        ],
        errorMessage: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ color: semanticColors.errorText }, theme.fonts.small), { paddingTop: 5 }),
        callout: [
            globalClassnames.callout,
            {
                boxShadow: effects.elevation8,
                borderRadius: calloutOpenBorderRadius,
                selectors: (_k = {},
                    _k['.ms-Callout-main'] = { borderRadius: calloutOpenBorderRadius },
                    _k),
            },
            calloutClassName,
        ],
        dropdownItemsWrapper: { selectors: { '&:focus': { outline: 0 } } },
        dropdownItems: [globalClassnames.dropdownItems, { display: 'block' }],
        dropdownItem: Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], dropdownItemStyle, true), [itemSelectors()], false),
        dropdownItemSelected: dropdownItemSelected,
        dropdownItemDisabled: dropdownItemDisabled,
        dropdownItemSelectedAndDisabled: [dropdownItemSelected, dropdownItemDisabled, { backgroundColor: 'transparent' }],
        dropdownItemHidden: Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], dropdownItemStyle, true), [{ display: 'none' }], false),
        dropdownDivider: [globalClassnames.dropdownDivider, { height: 1, backgroundColor: semanticColors.bodyDivider }],
        dropdownDividerHidden: [globalClassnames.dropdownDivider, { display: 'none' }],
        dropdownOptionText: [
            globalClassnames.dropdownOptionText,
            {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                minWidth: 0,
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                margin: '1px',
            },
        ],
        dropdownItemHeader: dropdownHeaderStyle,
        dropdownItemHeaderHidden: Object(tslib_es6["f" /* __spreadArray */])(Object(tslib_es6["f" /* __spreadArray */])([], dropdownHeaderStyle, true), [{ display: 'none' }], false),
        subComponentStyles: {
            label: { root: { display: 'inline-block' } },
            multiSelectItem: {
                root: {
                    padding: 0,
                },
                label: {
                    alignSelf: 'stretch',
                    padding: '0 8px',
                    width: '100%',
                },
                input: {
                    selectors: (_l = {},
                        // eslint-disable-next-line @fluentui/max-len
                        _l[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus + label::before, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus + label::before")] = {
                            outlineOffset: '0px',
                        },
                        _l),
                },
            },
            panel: {
                root: [panelClassName],
                main: {
                    selectors: (_m = {},
                        // In case of extra small screen sizes
                        _m[MinimumScreenSelector] = {
                            // panelWidth xs
                            width: 272,
                        },
                        _m),
                },
                contentInner: { padding: '0 0 20px' },
            },
        },
    };
};
//# sourceMappingURL=Dropdown.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Dropdown/Dropdown.js



var Dropdown = Object(styled["a" /* styled */])(DropdownBase, getStyles, undefined, {
    scope: 'Dropdown',
});
Dropdown.displayName = 'Dropdown';
//# sourceMappingURL=Dropdown.js.map

/***/ }),

/***/ "BWz0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Check; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/FontIcon.js
var FontIcon = __webpack_require__("KIfy");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Check/Check.base.js



var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var CheckBase = react["forwardRef"](function (props, ref) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, className = props.className, theme = props.theme, styles = props.styles, _b = props.useFastIcons, useFastIcons = _b === void 0 ? true : _b;
    var classNames = getClassNames(styles, { theme: theme, className: className, checked: checked });
    var IconComponent = useFastIcons ? FontIcon["a" /* FontIcon */] : Icon["a" /* Icon */];
    return (react["createElement"]("div", { className: classNames.root, ref: ref },
        react["createElement"](IconComponent, { iconName: "CircleRing", className: classNames.circle }),
        react["createElement"](IconComponent, { iconName: "StatusCircleCheckmark", className: classNames.check })));
});
CheckBase.displayName = 'CheckBase';
//# sourceMappingURL=Check.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Check/Check.styles.js
var Check_styles = __webpack_require__("vWQh");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Check/Check.js



var Check = Object(styled["a" /* styled */])(CheckBase, Check_styles["b" /* getStyles */], undefined, {
    scope: 'Check',
}, true);
//# sourceMappingURL=Check.js.map

/***/ }),

/***/ "KEG9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ShimmeredDetailsList; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js
var Selection_types = __webpack_require__("Imro");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/memoize.js
var memoize = __webpack_require__("02QY");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/warn/warnMutuallyExclusive.js
var warnMutuallyExclusive = __webpack_require__("q2Xa");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/elementContains.js
var elementContains = __webpack_require__("H5Ur");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js
var DetailsList_types = __webpack_require__("hGA5");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.js + 5 modules
var DetailsHeader = __webpack_require__("Pn0s");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.types.js
var DetailsHeader_types = __webpack_require__("oxqj");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.js + 2 modules
var DetailsRow = __webpack_require__("eZeq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/selection/SelectionZone.js
var SelectionZone = __webpack_require__("euHG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.js
var Selection = __webpack_require__("lgi8");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dragdrop/DragDropHelper.js
var DragDropHelper = __webpack_require__("qgKT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupedList.styles.js

var GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell',
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                selectors: (_a = {},
                    _a[".".concat(classNames.listCell)] = {
                        minHeight: 38, // be consistent with DetailsList styles
                    },
                    _a),
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b[".".concat(classNames.listCell)] = {
                            minHeight: 32, // be consistent with DetailsList styles
                        },
                        _b),
                },
            ],
            className,
        ],
        group: [
            classNames.group,
            {
                transition: "background-color ".concat(lib["c" /* AnimationVariables */].durationValue2, " ").concat(beziers.easeInOutSine),
            },
        ],
        groupIsDropping: {
            backgroundColor: palette.neutralLight,
        },
    };
};
//# sourceMappingURL=GroupedList.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/setFocusVisibility.js
var setFocusVisibility = __webpack_require__("zRON");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.styles.js
var DetailsRow_styles = __webpack_require__("S6bb");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRowCheck.styles.js
var DetailsRowCheck_styles = __webpack_require__("n9G9");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupSpacer.js
var GroupSpacer = __webpack_require__("/Xe4");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupHeader.styles.js




// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GroupHeader_styles_GlobalClassNames = {
    root: 'ms-GroupHeader',
    compact: 'ms-GroupHeader--compact',
    check: 'ms-GroupHeader-check',
    dropIcon: 'ms-GroupHeader-dropIcon',
    expand: 'ms-GroupHeader-expand',
    isCollapsed: 'is-collapsed',
    title: 'ms-GroupHeader-title',
    isSelected: 'is-selected',
    iconTag: 'ms-Icon--Tag',
    group: 'ms-GroupedList-group',
    isDropping: 'is-dropping',
};
var GroupHeader_styles_beziers = {
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
};
var DEFAULT_GROUP_HEADER_HEIGHT = 48;
var COMPACT_GROUP_HEADER_HEIGHT = 40;
var GroupHeader_styles_getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
    // padding from the source to align GroupHeader title with DetailsRow's first cell.
    var cellLeftPadding = DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */].cellLeftPadding;
    var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GroupHeader_styles_GlobalClassNames, theme);
    var checkExpandResetStyles = [
        Object(lib["u" /* getFocusStyle */])(theme),
        {
            cursor: 'default',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0, // cancel default <button> padding
        },
    ];
    return {
        root: [
            classNames.root,
            Object(lib["u" /* getFocusStyle */])(theme),
            theme.fonts.medium,
            {
                // keep the border for height but color it so it's invisible.
                borderBottom: "1px solid ".concat(semanticColors.listBackground),
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {
                        ':hover': {
                            background: semanticColors.listItemBackgroundHovered,
                            color: semanticColors.actionLinkHovered,
                        }
                    },
                    _a["&:hover .".concat(classNames.check)] = {
                        opacity: 1,
                    },
                    // eslint-disable-next-line @fluentui/max-len
                    _a[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus .").concat(classNames.check, ", :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus .").concat(classNames.check)] = {
                        opacity: 1,
                    },
                    _a[":global(.".concat(classNames.group, ".").concat(classNames.isDropping, ")")] = {
                        selectors: (_b = {},
                            _b["& > .".concat(classNames.root, " .").concat(classNames.dropIcon)] = {
                                transition: "transform ".concat(lib["c" /* AnimationVariables */].durationValue4, " ").concat(GroupHeader_styles_beziers.easeOutCirc, " ") +
                                    "opacity ".concat(lib["c" /* AnimationVariables */].durationValue1, " ").concat(GroupHeader_styles_beziers.easeOutSine),
                                transitionDelay: lib["c" /* AnimationVariables */].durationValue3,
                                opacity: 1,
                                transform: "rotate(0.2deg) scale(1);", // rotation prevents jittery motion in IE
                            },
                            _b[".".concat(classNames.check)] = {
                                opacity: 0,
                            },
                            _b),
                    },
                    _a),
            },
            selected && [
                classNames.isSelected,
                {
                    background: semanticColors.listItemBackgroundChecked,
                    selectors: (_c = {
                            ':hover': {
                                background: semanticColors.listItemBackgroundCheckedHovered,
                            }
                        },
                        _c["".concat(classNames.check)] = {
                            opacity: 1,
                        },
                        _c),
                },
            ],
            compact && [classNames.compact, { border: 'none' }],
            className,
        ],
        groupHeaderContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                height: finalRowHeight,
            },
        ],
        headerCount: [
            {
                padding: '0px 4px',
            },
        ],
        check: [
            classNames.check,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                opacity: 0,
                width: DetailsRowCheck_styles["a" /* CHECK_CELL_WIDTH */],
                height: finalRowHeight,
                selectors: (_d = {},
                    _d[".".concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], " &:focus, :host(.").concat(setFocusVisibility["a" /* IsFocusVisibleClassName */], ") &:focus")] = {
                        opacity: 1,
                    },
                    _d),
            },
        ],
        expand: [
            classNames.expand,
            checkExpandResetStyles,
            {
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                width: GroupSpacer["b" /* SPACER_WIDTH */],
                height: finalRowHeight,
                color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight,
                    },
                    ':active': {
                        backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt,
                    },
                },
            },
        ],
        expandIsCollapsed: [
            isCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear',
                    },
                ]
                : {
                    transform: Object(rtl["a" /* getRTL */])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear',
                },
        ],
        title: [
            classNames.title,
            {
                paddingLeft: cellLeftPadding,
                fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
                fontWeight: isCollapsed ? lib["e" /* FontWeights */].regular : lib["e" /* FontWeights */].semibold,
                cursor: 'pointer',
                outline: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            },
        ],
        dropIcon: [
            classNames.dropIcon,
            {
                position: 'absolute',
                left: -26,
                fontSize: lib["h" /* IconFontSizes */].large,
                color: palette.neutralSecondary,
                transition: "transform ".concat(lib["c" /* AnimationVariables */].durationValue2, " ").concat(GroupHeader_styles_beziers.easeInBack, ", ") +
                    "opacity ".concat(lib["c" /* AnimationVariables */].durationValue4, " ").concat(GroupHeader_styles_beziers.easeOutSine),
                opacity: 0,
                transform: 'rotate(0.2deg) scale(0.65)',
                transformOrigin: '10px 10px',
                selectors: (_e = {},
                    _e[":global(.".concat(classNames.iconTag, ")")] = {
                        position: 'absolute',
                    },
                    _e),
            },
        ],
    };
};
//# sourceMappingURL=GroupHeader.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Check/Check.js + 1 modules
var Check = __webpack_require__("BWz0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Spinner/Spinner.js + 3 modules
var Spinner = __webpack_require__("I0jv");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupHeader.base.js









var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var GroupHeader_base_GroupHeaderBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(GroupHeaderBase, _super);
    function GroupHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleCollapse = function () {
            var _a;
            var group = (_a = _this.props, _a.group), onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
            var isCollapsed = _this.state.isCollapsed;
            var newCollapsed = !isCollapsed;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
            _this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible,
            });
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
        };
        _this._onKeyUp = function (ev) {
            var _a;
            var group = (_a = _this.props, _a.group), onGroupHeaderKeyUp = _a.onGroupHeaderKeyUp;
            if (onGroupHeaderKeyUp) {
                onGroupHeaderKeyUp(ev, group);
            }
            if (!ev.defaultPrevented) {
                // eslint-disable-next-line deprecation/deprecation
                var shouldOpen = _this.state.isCollapsed && ev.which === Object(rtl["b" /* getRTLSafeKeyCode */])(KeyCodes["a" /* KeyCodes */].right, _this.props.theme);
                // eslint-disable-next-line deprecation/deprecation
                var shouldClose = !_this.state.isCollapsed && ev.which === Object(rtl["b" /* getRTLSafeKeyCode */])(KeyCodes["a" /* KeyCodes */].left, _this.props.theme);
                if (shouldClose || shouldOpen) {
                    _this._toggleCollapse();
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
        };
        _this._onToggleClick = function (ev) {
            _this._toggleCollapse();
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onHeaderClick = function () {
            var _a;
            var group = (_a = _this.props, _a.group), onGroupHeaderClick = _a.onGroupHeaderClick;
            if (onGroupHeaderClick) {
                onGroupHeaderClick(group);
            }
        };
        _this._onRenderTitle = function (props) {
            var group = props.group;
            if (!group) {
                return null;
            }
            var onRenderName = props.onRenderName
                ? Object(composeRenderFunction["a" /* composeRenderFunction */])(props.onRenderName, _this._onRenderName)
                : _this._onRenderName;
            return (react["createElement"]("div", { className: _this._classNames.title, id: _this._id, onClick: _this._onHeaderClick, role: "gridcell", "aria-colspan": _this.props.ariaColSpan, "data-selection-invoke": true }, onRenderName(props)));
        };
        _this._onRenderName = function (props) {
            var group = props.group;
            if (!group) {
                return null;
            }
            return (react["createElement"](react["Fragment"], null,
                react["createElement"]("span", null, group.name),
                react["createElement"]("span", { className: _this._classNames.headerCount },
                    "(",
                    group.count,
                    group.hasMoreData && '+',
                    ")")));
        };
        _this._id = Object(getId["a" /* getId */])('GroupHeader');
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false,
        };
        return _this;
    }
    GroupHeaderBase.getDerivedStateFromProps = function (nextProps, previousState) {
        if (nextProps.group) {
            var newCollapsed = nextProps.group.isCollapsed;
            var isGroupLoading = nextProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(nextProps.group);
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, previousState), { isCollapsed: newCollapsed || false, isLoadingVisible: newLoadingVisible || false });
        }
        return previousState;
    };
    GroupHeaderBase.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        var group = (_a = this.props, _a.group), groupLevel = (_b = _a.groupLevel, _b === void 0 ? 0 : _b), viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, 
        // eslint-disable-next-line deprecation/deprecation
        isSelected = (_c = _a.isSelected, _c === void 0 ? false : _c), selected = (_d = _a.selected, _d === void 0 ? false : _d), indentWidth = _a.indentWidth, onRenderGroupHeaderCheckbox = _a.onRenderGroupHeaderCheckbox, isCollapsedGroupSelectVisible = (_e = _a.isCollapsedGroupSelectVisible, _e === void 0 ? true : _e), expandButtonProps = _a.expandButtonProps, expandButtonIcon = _a.expandButtonIcon, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, compact = _a.compact, ariaLevel = _a.ariaLevel, ariaPosInSet = _a.ariaPosInSet, ariaSetSize = _a.ariaSetSize, ariaRowIndex = _a.ariaRowIndex, useFastIcons = _a.useFastIcons;
        var onRenderTitle = this.props.onRenderTitle
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(this.props.onRenderTitle, this._onRenderTitle)
            : this._onRenderTitle;
        var defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;
        var onRenderCheckbox = onRenderGroupHeaderCheckbox
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
            : defaultCheckboxRender;
        var isCollapsed = (_f = this.state, _f.isCollapsed), isLoadingVisible = _f.isLoadingVisible;
        var canSelectGroup = selectionMode === Selection_types["c" /* SelectionMode */].multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = selected || isSelected;
        var isRTL = Object(rtl["a" /* getRTL */])(theme);
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            selected: currentlySelected,
            isCollapsed: isCollapsed,
            compact: compact,
        });
        if (!group) {
            return null;
        }
        return (react["createElement"]("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, role: "row", "aria-level": ariaLevel, "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, "aria-rowindex": ariaRowIndex, "data-is-focusable": true, onKeyUp: this._onKeyUp, "aria-label": group.ariaLabel, "aria-labelledby": group.ariaLabel ? undefined : this._id, "aria-expanded": !this.state.isCollapsed, "aria-selected": canSelectGroup ? currentlySelected : undefined, "data-selection-index": group.startIndex, "data-selection-span": group.count },
            react["createElement"]("div", { className: this._classNames.groupHeaderContainer, role: "presentation" },
                isSelectionCheckVisible ? (react["createElement"]("div", { role: "gridcell" },
                    react["createElement"]("button", Object(tslib_es6["a" /* __assign */])({ "data-is-focusable": false, type: "button", className: this._classNames.check, role: "checkbox", id: "".concat(this._id, "-check"), "aria-checked": currentlySelected, "aria-labelledby": "".concat(this._id, "-check ").concat(this._id), "data-selection-toggle": true }, selectAllButtonProps), onRenderCheckbox({ checked: currentlySelected, theme: theme }, onRenderCheckbox)))) : (
                // To make the group header align properly with the column headers, this spacer
                // needs to be the same width as the check cell in the column header.
                selectionMode !== Selection_types["c" /* SelectionMode */].none && react["createElement"](GroupSpacer["a" /* GroupSpacer */], { indentWidth: DetailsRowCheck_styles["a" /* CHECK_CELL_WIDTH */], count: 1 })),
                react["createElement"](GroupSpacer["a" /* GroupSpacer */], { indentWidth: indentWidth, count: groupLevel }),
                react["createElement"]("div", { className: this._classNames.dropIcon, role: "presentation" },
                    react["createElement"](Icon["a" /* Icon */], { iconName: "Tag" })),
                react["createElement"]("div", { role: "gridcell" },
                    react["createElement"]("button", Object(tslib_es6["a" /* __assign */])({ "data-is-focusable": false, "data-selection-disabled": true, type: "button", className: this._classNames.expand, onClick: this._onToggleClick, "aria-expanded": !this.state.isCollapsed }, expandButtonProps),
                        react["createElement"](Icon["a" /* Icon */], { className: this._classNames.expandIsCollapsed, iconName: expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed') }))),
                onRenderTitle(this.props),
                isLoadingVisible && react["createElement"](Spinner["a" /* Spinner */], { label: loadingText }))));
    };
    GroupHeaderBase.prototype._defaultCheckboxRender = function (checkboxProps) {
        return react["createElement"](Check["a" /* Check */], { checked: checkboxProps.checked });
    };
    GroupHeaderBase.prototype._fastDefaultCheckboxRender = function (checkboxProps) {
        return react["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
    };
    GroupHeaderBase.defaultProps = {
        expandButtonProps: { 'aria-label': 'expand collapse group' },
    };
    return GroupHeaderBase;
}(react["Component"]));
var FastCheck = react["memo"](function (props) {
    return react["createElement"](Check["a" /* Check */], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
//# sourceMappingURL=GroupHeader.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupHeader.js



var GroupHeader = Object(styled["a" /* styled */])(GroupHeader_base_GroupHeaderBase, GroupHeader_styles_getStyles, undefined, {
    scope: 'GroupHeader',
});
//# sourceMappingURL=GroupHeader.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupShowAll.styles.js

var GroupShowAll_styles_GlobalClassNames = {
    root: 'ms-GroupShowAll',
    link: 'ms-Link',
};
var GroupShowAll_styles_getStyles = function (props) {
    var _a;
    var theme = props.theme;
    var fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GroupShowAll_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                padding: '10px 84px',
                cursor: 'pointer',
                selectors: (_a = {},
                    _a[".".concat(classNames.link)] = {
                        fontSize: fonts.small.fontSize,
                    },
                    _a),
            },
        ],
    };
};
//# sourceMappingURL=GroupShowAll.styles.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/Link.js + 2 modules
var Link = __webpack_require__("v4N6");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupShowAll.base.js





var GroupShowAll_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var GroupShowAllBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, _a = props.showAllLinkText, showAllLinkText = _a === void 0 ? 'Show All' : _a, styles = props.styles, theme = props.theme, onToggleSummarize = props.onToggleSummarize;
    var classNames = GroupShowAll_base_getClassNames(styles, { theme: theme });
    var memoizedOnClick = Object(react["useCallback"])(function (ev) {
        onToggleSummarize(group);
        ev.stopPropagation();
        ev.preventDefault();
    }, [onToggleSummarize, group]);
    if (group) {
        return (react["createElement"]("div", { className: classNames.root },
            react["createElement"](GroupSpacer["a" /* GroupSpacer */], { count: groupLevel }),
            react["createElement"](Link["a" /* Link */], { onClick: memoizedOnClick }, showAllLinkText)));
    }
    return null;
};
//# sourceMappingURL=GroupShowAll.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupShowAll.js



var GroupShowAll = Object(styled["a" /* styled */])(GroupShowAllBase, GroupShowAll_styles_getStyles, undefined, { scope: 'GroupShowAll' });
//# sourceMappingURL=GroupShowAll.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupFooter.styles.js

var GroupFooter_styles_GlobalClassNames = {
    root: 'ms-groupFooter',
};
var GroupFooter_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GroupFooter_styles_GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                position: 'relative',
                padding: '5px 38px',
            },
            className,
        ],
    };
};
//# sourceMappingURL=GroupFooter.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupFooter.base.js



var GroupFooter_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var GroupFooterBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, footerText = props.footerText, indentWidth = props.indentWidth, styles = props.styles, theme = props.theme;
    var classNames = GroupFooter_base_getClassNames(styles, { theme: theme });
    if (group && footerText) {
        return (react["createElement"]("div", { className: classNames.root },
            react["createElement"](GroupSpacer["a" /* GroupSpacer */], { indentWidth: indentWidth, count: groupLevel }),
            footerText));
    }
    return null;
};
//# sourceMappingURL=GroupFooter.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupFooter.js



var GroupFooter = Object(styled["a" /* styled */])(GroupFooterBase, GroupFooter_styles_getStyles, undefined, {
    scope: 'GroupFooter',
});
//# sourceMappingURL=GroupFooter.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/canUseDOM.js
var canUseDOM = __webpack_require__("cLtT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/scroll.js
var lib_scroll = __webpack_require__("4H/l");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/dom-utilities/lib/getParent.js + 2 modules
var getParent = __webpack_require__("kujG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/array.js
var array = __webpack_require__("S+0K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getWindow.js
var getWindow = __webpack_require__("NZSY");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/List/List.types.js
/**
 * {@docCategory List}
 */
var ScrollToMode = {
    /**
     * Does not make any consideration to where in the viewport the item should align to.
     */
    auto: 0,
    /**
     * Attempts to scroll the list so the top of the desired item is aligned with the top of the viewport.
     */
    top: 1,
    /**
     * Attempts to scroll the list so the bottom of the desired item is aligned with the bottom of the viewport.
     */
    bottom: 2,
    /**
     * Attempts to scroll the list so the desired item is in the exact center of the viewport.
     */
    center: 3,
};
//# sourceMappingURL=List.types.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/List/utils/scroll.js
var getScrollHeight = function (el) {
    if (el === undefined) {
        return 0;
    }
    var scrollHeight = 0;
    if ('scrollHeight' in el) {
        scrollHeight = el.scrollHeight;
    }
    else if ('document' in el) {
        scrollHeight = el.document.documentElement.scrollHeight;
    }
    // No need to round as scrollHeight is already rounded for us.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
    return scrollHeight;
};
var getScrollYPosition = function (el) {
    if (el === undefined) {
        return 0;
    }
    var scrollPos = 0;
    if ('scrollTop' in el) {
        scrollPos = el.scrollTop;
    }
    else if ('scrollY' in el) {
        scrollPos = el.scrollY;
    }
    // Round this value to an integer as it may be fractional.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
    return Math.ceil(scrollPos);
};
var setScrollYPosition = function (el, pos) {
    if ('scrollTop' in el) {
        el.scrollTop = pos;
    }
    else if ('scrollY' in el) {
        el.scrollTo(el.scrollX, pos);
    }
};
//# sourceMappingURL=scroll.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js
var WindowProvider = __webpack_require__("7R02");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dom.js
var dom = __webpack_require__("YFIV");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/List/List.js








// import { ListDebugRenderer } from './utils/ListDebugRenderer';
var RESIZE_DELAY = 16;
var MIN_SCROLL_UPDATE_DELAY = 100;
var MAX_SCROLL_UPDATE_DELAY = 500;
var IDLE_DEBOUNCE_DELAY = 200;
// The amount of time to wait before declaring that the list isn't scrolling
var DONE_SCROLLING_WAIT = 500;
var DEFAULT_ITEMS_PER_PAGE = 10;
var DEFAULT_PAGE_HEIGHT = 30;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var PAGE_KEY_PREFIX = 'page-';
var SPACER_KEY_PREFIX = 'spacer-';
// Fraction of a page to have been scrolled before re-running expensive calculations
var SCROLL_RATIO = 1 / 3;
var EMPTY_RECT = {
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    width: 0,
    height: 0,
};
// Naming expensive measures so that they're named in profiles.
var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
var _measureSurfaceRect = _measurePageRect;
var _measureScrollRect = _measurePageRect;
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback
 * if provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if
 * provided by the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time.
 * And we start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
var List_List = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react["createRef"]();
        _this._surface = react["createRef"]();
        _this._pageRefs = {};
        _this._getDerivedStateFromProps = function (nextProps, previousState) {
            if (nextProps.items !== _this.props.items ||
                nextProps.renderCount !== _this.props.renderCount ||
                nextProps.startIndex !== _this.props.startIndex ||
                nextProps.version !== _this.props.version ||
                (!previousState.hasMounted && _this.props.renderEarly && Object(canUseDOM["a" /* canUseDOM */])())) {
                // We have received new items so we want to make sure that initially we only render a single window to
                // fill the currently visible rect, and then later render additional windows.
                _this._resetRequiredWindows();
                _this._requiredRect = null;
                _this._measureVersion++;
                _this._invalidatePageCache();
                return _this._updatePages(nextProps, previousState);
            }
            return previousState;
        };
        _this._onRenderRoot = function (props) {
            var rootRef = props.rootRef, surfaceElement = props.surfaceElement, divProps = props.divProps;
            return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ ref: rootRef }, divProps), surfaceElement));
        };
        _this._onRenderSurface = function (props) {
            var surfaceRef = props.surfaceRef, pageElements = props.pageElements, divProps = props.divProps;
            return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ ref: surfaceRef }, divProps), pageElements));
        };
        _this._onRenderPage = function (pageProps, defaultRender) {
            var _a, _b, _c;
            var _d;
            var onRenderCell = (_a = _this.props, _a.onRenderCell), onRenderCellConditional = _a.onRenderCellConditional, role = _a.role;
            var items = (_b = pageProps.page, _c = _b.items, _c === void 0 ? [] : _c), startIndex = _b.startIndex, divProps = Object(tslib_es6["e" /* __rest */])(pageProps, ["page"]);
            // only assign list item role if no role is assigned
            var cellRole = role === undefined ? 'listitem' : 'presentation';
            var cells = [];
            for (var i = 0; i < items.length; i++) {
                var index = startIndex + i;
                var item = items[i];
                var itemKey = _this.props.getKey ? _this.props.getKey(item, index) : item && item.key;
                if (itemKey === null || itemKey === undefined) {
                    itemKey = index;
                }
                var renderCell = onRenderCellConditional !== null && onRenderCellConditional !== void 0 ? onRenderCellConditional : onRenderCell;
                var cell = (_d = renderCell === null || renderCell === void 0 ? void 0 : renderCell(item, index, !_this.props.ignoreScrollingState ? _this.state.isScrolling : undefined)) !== null && _d !== void 0 ? _d : null;
                if (!onRenderCellConditional || cell) {
                    cells.push(react["createElement"]("div", { role: cellRole, className: 'ms-List-cell', key: itemKey, "data-list-index": index, "data-automationid": "ListCell" }, cell));
                }
            }
            return react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, divProps), cells);
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this.state = {
            pages: [],
            isScrolling: false,
            getDerivedStateFromProps: _this._getDerivedStateFromProps,
            hasMounted: false,
        };
        _this._estimatedPageHeight = 0;
        _this._totalEstimates = 0;
        _this._requiredWindowsAhead = 0;
        _this._requiredWindowsBehind = 0;
        // Track the measure version for everything.
        _this._measureVersion = 0;
        _this._cachedPageHeights = {};
        _this._estimatedPageHeight = 0;
        _this._focusedIndex = -1;
        _this._pageCache = {};
        return _this;
    }
    // private _debugRenderer: ListDebugRenderer;
    // private _debugRafId: number | undefined = undefined;
    List.getDerivedStateFromProps = function (nextProps, previousState) {
        return previousState.getDerivedStateFromProps(nextProps, previousState);
    };
    Object.defineProperty(List.prototype, "pageRefs", {
        get: function () {
            return this._pageRefs;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
     */
    List.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (scrollToMode === void 0) { scrollToMode = ScrollToMode.auto; }
        var startIndex = this.props.startIndex;
        var renderCount = this._getRenderCount();
        var endIndex = startIndex + renderCount;
        var allowedRect = this._allowedRect;
        var scrollTop = 0;
        var itemsPerPage = 1;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var pageSpecification = this._getPageSpecification(this.props, itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            itemsPerPage = pageSpecification.itemCount;
            var requestedIndexIsInPage = itemIndex <= index && itemIndex + itemsPerPage > index;
            if (requestedIndexIsInPage) {
                // We have found the page. If the user provided a way to measure an individual item, we will try to scroll in
                // just the given item, otherwise we'll only bring the page into view
                if (measureItem && this._scrollElement) {
                    var scrollRect = _measureScrollRect(this._scrollElement);
                    var scrollPosition = getScrollYPosition(this._scrollElement);
                    var scrollWindow = {
                        top: scrollPosition,
                        bottom: scrollPosition + scrollRect.height,
                    };
                    // Adjust for actual item position within page
                    var itemPositionWithinPage = index - itemIndex;
                    for (var itemIndexInPage = 0; itemIndexInPage < itemPositionWithinPage; ++itemIndexInPage) {
                        scrollTop += measureItem(itemIndex + itemIndexInPage);
                    }
                    var scrollBottom = scrollTop + measureItem(index);
                    // If scrollToMode is set to something other than auto, we always want to
                    // scroll the item into a specific position on the page.
                    switch (scrollToMode) {
                        case ScrollToMode.top:
                            setScrollYPosition(this._scrollElement, scrollTop);
                            return;
                        case ScrollToMode.bottom:
                            setScrollYPosition(this._scrollElement, scrollBottom - scrollRect.height);
                            return;
                        case ScrollToMode.center:
                            setScrollYPosition(this._scrollElement, (scrollTop + scrollBottom - scrollRect.height) / 2);
                            return;
                        case ScrollToMode.auto:
                        default:
                            break;
                    }
                    var itemIsFullyVisible = scrollTop >= scrollWindow.top && scrollBottom <= scrollWindow.bottom;
                    if (itemIsFullyVisible) {
                        // Item is already visible, do nothing.
                        return;
                    }
                    var itemIsPartiallyAbove = scrollTop < scrollWindow.top;
                    var itemIsPartiallyBelow = scrollBottom > scrollWindow.bottom;
                    if (itemIsPartiallyAbove) {
                        //  We will just scroll to 'scrollTop'
                        //  .------.   - scrollTop
                        //  |Item  |
                        //  | .----|-. - scrollWindow.top
                        //  '------' |
                        //    |      |
                        //    '------'
                    }
                    else if (itemIsPartiallyBelow) {
                        //  Adjust scrollTop position to just bring in the element
                        // .------.  - scrollTop
                        // |      |
                        // | .------.
                        // '-|----' | - scrollWindow.bottom
                        //   | Item |
                        //   '------' - scrollBottom
                        scrollTop = scrollBottom - scrollRect.height;
                    }
                }
                if (this._scrollElement) {
                    setScrollYPosition(this._scrollElement, scrollTop);
                }
                return;
            }
            scrollTop += pageHeight;
        }
    };
    List.prototype.getStartItemIndexInView = function (measureItem) {
        var pages = this.state.pages || [];
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            var isPageVisible = !page.isSpacer && (this._scrollTop || 0) >= page.top && (this._scrollTop || 0) <= page.top + page.height;
            if (isPageVisible) {
                if (!measureItem) {
                    var rowHeight = Math.floor(page.height / page.itemCount);
                    return page.startIndex + Math.floor((this._scrollTop - page.top) / rowHeight);
                }
                else {
                    var totalRowHeight = 0;
                    for (var itemIndex = page.startIndex; itemIndex < page.startIndex + page.itemCount; itemIndex++) {
                        var rowHeight = measureItem(itemIndex);
                        if (page.top + totalRowHeight <= this._scrollTop &&
                            this._scrollTop < page.top + totalRowHeight + rowHeight) {
                            return itemIndex;
                        }
                        else {
                            totalRowHeight += rowHeight;
                        }
                    }
                }
            }
        }
        return 0;
    };
    List.prototype.componentDidMount = function () {
        this._async = new Async["a" /* Async */](this);
        this._events = new EventGroup["a" /* EventGroup */](this);
        // Ensure that scrolls are lazy updated.
        this._onAsyncScrollDebounced = this._async.debounce(this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
            leading: false,
            maxWait: MAX_SCROLL_UPDATE_DELAY,
        });
        this._onAsyncIdleDebounced = this._async.debounce(this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
            leading: false,
        });
        this._onAsyncResizeDebounced = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
            leading: false,
        });
        this._onScrollingDoneDebounced = this._async.debounce(this._onScrollingDone, DONE_SCROLLING_WAIT, {
            leading: false,
        });
        this._scrollElement = Object(lib_scroll["e" /* findScrollableParent */])(this._root.current);
        this._scrollTop = 0;
        this.setState(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this._updatePages(this.props, this.state)), { hasMounted: true }));
        this._measureVersion++;
        var win = Object(dom["b" /* getWindowEx */])(this.context);
        this._events.on(win, 'resize', this._onAsyncResizeDebounced);
        if (this._root.current) {
            this._events.on(this._root.current, 'focus', this._onFocus, true);
        }
        if (this._scrollElement) {
            this._events.on(this._scrollElement, 'scroll', this._onScroll);
            this._events.on(this._scrollElement, 'scroll', this._onAsyncScrollDebounced);
        }
        // this._debugRenderer = new ListDebugRenderer();
        // const debugRender = () => {
        //   this._debugRenderer.render({
        //     visibleRect: this._visibleRect,
        //     allowedRect: this._allowedRect,
        //     requiredRect: this._requiredRect,
        //     materializedRect: this._materializedRect,
        //     surfaceRect: this._surfaceRect,
        //     totalListHeight: this.getTotalListHeight(),
        //     pages: this.state.pages,
        //     scrollTop: Math.abs(this._scrollTop - getScrollYPosition(this._scrollElement)),
        //     estimatedLine: this._estimatedPageHeight * SCROLL_RATIO,
        //     scrollY: getScrollYPosition(this._scrollElement),
        //   });
        //   this._debugRafId = requestAnimationFrame(debugRender);
        // };
        // debugRender();
    };
    List.prototype.componentDidUpdate = function (previousProps, previousState) {
        // Multiple updates may have been queued, so the callback will reflect all of them.
        // Re-fetch the current props and states to avoid using a stale props or state captured in the closure.
        var finalProps = this.props;
        var finalState = this.state;
        if (this.state.pagesVersion !== previousState.pagesVersion) {
            // If we weren't provided with the page height, measure the pages
            if (!finalProps.getPageHeight) {
                // If measured version is invalid since we've updated the DOM
                var heightsChanged = this._updatePageMeasurements(finalState.pages);
                // On first render, we should re-measure so that we don't get a visual glitch.
                if (heightsChanged) {
                    this._materializedRect = null;
                    if (!this._hasCompletedFirstRender) {
                        this._hasCompletedFirstRender = true;
                        this.setState(this._updatePages(finalProps, finalState));
                    }
                    else {
                        this._onAsyncScrollDebounced();
                    }
                }
                else {
                    // Enqueue an idle bump.
                    this._onAsyncIdleDebounced();
                }
            }
            else {
                // Enqueue an idle bump
                this._onAsyncIdleDebounced();
            }
            // Notify the caller that rendering the new pages has completed
            if (finalProps.onPagesUpdated) {
                finalProps.onPagesUpdated(finalState.pages);
            }
        }
    };
    List.prototype.componentWillUnmount = function () {
        var _a, _b;
        (_a = this._async) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this._events) === null || _b === void 0 ? void 0 : _b.dispose();
        delete this._scrollElement;
        // this._debugRenderer.dispose();
        // if (this._debugRafId) {
        //   cancelAnimationFrame(this._debugRafId);
        //   this._debugRafId = undefined;
        // }
    };
    List.prototype.shouldComponentUpdate = function (newProps, newState) {
        var oldPages = this.state.pages;
        var newPages = newState.pages;
        var shouldComponentUpdate = false;
        // Update if the page stops scrolling
        if (!newState.isScrolling && this.state.isScrolling) {
            return true;
        }
        if (newProps.version !== this.props.version) {
            return true;
        }
        if (newProps.className !== this.props.className) {
            return true;
        }
        if (newProps.items === this.props.items && oldPages.length === newPages.length) {
            for (var i = 0; i < oldPages.length; i++) {
                var oldPage = oldPages[i];
                var newPage = newPages[i];
                if (oldPage.key !== newPage.key || oldPage.itemCount !== newPage.itemCount) {
                    shouldComponentUpdate = true;
                    break;
                }
            }
        }
        else {
            shouldComponentUpdate = true;
        }
        return shouldComponentUpdate;
    };
    List.prototype.forceUpdate = function () {
        this._invalidatePageCache();
        // Ensure that when the list is force updated we update the pages first before render.
        this._updateRenderRects(this.props, this.state, true);
        this.setState(this._updatePages(this.props, this.state));
        this._measureVersion++;
        _super.prototype.forceUpdate.call(this);
    };
    /**
     * Get the current height the list and it's pages.
     */
    List.prototype.getTotalListHeight = function () {
        return this._surfaceRect.height;
    };
    List.prototype.render = function () {
        var _a, _b, _c;
        var className = (_a = this.props, _a.className), role = (_b = _a.role, _b === void 0 ? 'list' : _b), onRenderSurface = _a.onRenderSurface, onRenderRoot = _a.onRenderRoot;
        var pages = (_c = this.state.pages, _c === void 0 ? [] : _c);
        var pageElements = [];
        var divProps = Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */]);
        for (var _i = 0, pages_2 = pages; _i < pages_2.length; _i++) {
            var page = pages_2[_i];
            pageElements.push(this._renderPage(page));
        }
        var finalOnRenderSurface = onRenderSurface
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(onRenderSurface, this._onRenderSurface)
            : this._onRenderSurface;
        var finalOnRenderRoot = onRenderRoot
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(onRenderRoot, this._onRenderRoot)
            : this._onRenderRoot;
        return finalOnRenderRoot({
            rootRef: this._root,
            pages: pages,
            surfaceElement: finalOnRenderSurface({
                surfaceRef: this._surface,
                pages: pages,
                pageElements: pageElements,
                divProps: {
                    role: 'presentation',
                    className: 'ms-List-surface',
                },
            }),
            divProps: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, divProps), { className: Object(css["a" /* css */])('ms-List', className), role: pageElements.length > 0 ? role : undefined, 'aria-label': pageElements.length > 0 ? divProps['aria-label'] : undefined }),
        });
    };
    List.prototype._shouldVirtualize = function (props) {
        if (props === void 0) { props = this.props; }
        var onShouldVirtualize = props.onShouldVirtualize;
        return !onShouldVirtualize || onShouldVirtualize(props);
    };
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    List.prototype._invalidatePageCache = function () {
        this._pageCache = {};
    };
    List.prototype._renderPage = function (page) {
        var _a;
        var _this = this;
        var usePageCache = this.props.usePageCache;
        var cachedPage;
        // if usePageCache is set and cached page element can be found, just return cached page
        if (usePageCache) {
            cachedPage = this._pageCache[page.key];
            if (cachedPage && cachedPage.pageElement) {
                return cachedPage.pageElement;
            }
        }
        var pageStyle = this._getPageStyle(page);
        var onRenderPage = (_a = this.props.onRenderPage, _a === void 0 ? this._onRenderPage : _a);
        var pageElement = onRenderPage({
            page: page,
            className: 'ms-List-page',
            key: page.key,
            ref: function (newRef) {
                _this._pageRefs[page.key] = newRef;
            },
            style: pageStyle,
            role: 'presentation',
        }, this._onRenderPage);
        // cache the first page for now since it is re-rendered a lot times unnecessarily.
        // todo: a more aggresive caching mechanism is to cache pages constaining the items not changed.
        // now we re-render pages too frequently, for example, props.items increased from 30 to 60, although the
        // first 30 items did not change, we still re-rendered all of them in this props.items change.
        if (usePageCache && page.startIndex === 0) {
            this._pageCache[page.key] = {
                page: page,
                pageElement: pageElement,
            };
        }
        return pageElement;
    };
    /** Generate the style object for the page. */
    List.prototype._getPageStyle = function (page) {
        var getPageStyle = this.props.getPageStyle;
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (getPageStyle ? getPageStyle(page) : {})), (!page.items
            ? {
                height: page.height,
            }
            : {}));
    };
    /** Track the last item index focused so that we ensure we keep it rendered. */
    List.prototype._onFocus = function (ev) {
        var target = ev.target;
        while (target !== this._surface.current) {
            var indexString = target.getAttribute('data-list-index');
            if (indexString) {
                this._focusedIndex = Number(indexString);
                break;
            }
            target = Object(getParent["a" /* getParent */])(target);
        }
    };
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    List.prototype._onScroll = function () {
        if (!this.state.isScrolling && !this.props.ignoreScrollingState) {
            this.setState({ isScrolling: true });
        }
        this._resetRequiredWindows();
        this._onScrollingDoneDebounced();
    };
    List.prototype._resetRequiredWindows = function () {
        this._requiredWindowsAhead = 0;
        this._requiredWindowsBehind = 0;
    };
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    List.prototype._onAsyncScroll = function () {
        this._updateRenderRects(this.props, this.state);
        // Only update pages when the visible rect falls outside of the materialized rect.
        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
            this.setState(this._updatePages(this.props, this.state));
        }
        else {
            // console.log('requiredRect contained in materialized', this._requiredRect, this._materializedRect);
        }
    };
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    List.prototype._onAsyncIdle = function () {
        var _a, _b;
        var renderedWindowsAhead = (_a = this.props, _a.renderedWindowsAhead), renderedWindowsBehind = _a.renderedWindowsBehind;
        var requiredWindowsAhead = (_b = this, _b._requiredWindowsAhead), requiredWindowsBehind = _b._requiredWindowsBehind;
        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
            // console.log('idling', windowsBehind, windowsAhead);
            this._requiredWindowsAhead = windowsAhead;
            this._requiredWindowsBehind = windowsBehind;
            this._updateRenderRects(this.props, this.state);
            this.setState(this._updatePages(this.props, this.state));
        }
        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
            // Async increment on next tick.
            this._onAsyncIdleDebounced();
        }
    };
    /**
     * Function to call when the list is done scrolling.
     * This function is debounced.
     */
    List.prototype._onScrollingDone = function () {
        if (!this.props.ignoreScrollingState) {
            this.setState({ isScrolling: false });
            this._onAsyncIdle();
        }
    };
    List.prototype._onAsyncResize = function () {
        this.forceUpdate();
    };
    List.prototype._updatePages = function (nextProps, previousState) {
        // console.log('updating pages');
        if (!this._requiredRect) {
            this._updateRenderRects(nextProps, previousState);
        }
        var newListState = this._buildPages(nextProps, previousState);
        var oldListPages = previousState.pages;
        this._notifyPageChanges(oldListPages, newListState.pages, this.props);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, previousState), newListState), { pagesVersion: {} });
    };
    /**
     * Notify consumers that the rendered pages have changed
     * @param oldPages - The old pages
     * @param newPages - The new pages
     * @param props - The props to use
     */
    List.prototype._notifyPageChanges = function (oldPages, newPages, props) {
        var onPageAdded = props.onPageAdded, onPageRemoved = props.onPageRemoved;
        if (onPageAdded || onPageRemoved) {
            var renderedIndexes = {};
            for (var _i = 0, oldPages_1 = oldPages; _i < oldPages_1.length; _i++) {
                var page = oldPages_1[_i];
                if (page.items) {
                    renderedIndexes[page.startIndex] = page;
                }
            }
            for (var _a = 0, newPages_1 = newPages; _a < newPages_1.length; _a++) {
                var page = newPages_1[_a];
                if (page.items) {
                    if (!renderedIndexes[page.startIndex]) {
                        this._onPageAdded(page);
                    }
                    else {
                        delete renderedIndexes[page.startIndex];
                    }
                }
            }
            for (var index in renderedIndexes) {
                if (renderedIndexes.hasOwnProperty(index)) {
                    this._onPageRemoved(renderedIndexes[index]);
                }
            }
        }
    };
    List.prototype._updatePageMeasurements = function (pages) {
        var heightChanged = false;
        // when not in virtualize mode, we render all the items without page measurement
        if (!this._shouldVirtualize()) {
            return heightChanged;
        }
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page.items) {
                heightChanged = this._measurePage(page) || heightChanged;
            }
        }
        return heightChanged;
    };
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    List.prototype._measurePage = function (page) {
        var hasChangedHeight = false;
        var pageElement = this._pageRefs[page.key];
        var cachedHeight = this._cachedPageHeights[page.startIndex];
        // console.log('   * measure attempt', page.startIndex, cachedHeight);
        if (pageElement &&
            this._shouldVirtualize() &&
            (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
            var newClientRect = {
                width: pageElement.clientWidth,
                height: pageElement.clientHeight,
            };
            if (newClientRect.height || newClientRect.width) {
                hasChangedHeight = page.height !== newClientRect.height;
                // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
                page.height = newClientRect.height;
                this._cachedPageHeights[page.startIndex] = {
                    height: newClientRect.height,
                    measureVersion: this._measureVersion,
                };
                this._estimatedPageHeight = Math.round((this._estimatedPageHeight * this._totalEstimates + newClientRect.height) / (this._totalEstimates + 1));
                this._totalEstimates++;
            }
        }
        return hasChangedHeight;
    };
    /** Called when a page has been added to the DOM. */
    List.prototype._onPageAdded = function (page) {
        var onPageAdded = this.props.onPageAdded;
        // console.log('page added', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageAdded) {
            onPageAdded(page);
        }
    };
    /** Called when a page has been removed from the DOM. */
    List.prototype._onPageRemoved = function (page) {
        var onPageRemoved = this.props.onPageRemoved;
        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageRemoved) {
            onPageRemoved(page);
        }
    };
    /** Build up the pages that should be rendered. */
    List.prototype._buildPages = function (props, state) {
        var renderCount = props.renderCount;
        var items = props.items, startIndex = props.startIndex, getPageHeight = props.getPageHeight;
        renderCount = this._getRenderCount(props);
        var materializedRect = Object(tslib_es6["a" /* __assign */])({}, EMPTY_RECT);
        var pages = [];
        var itemsPerPage = 1;
        var pageTop = 0;
        var currentSpacer = null;
        var focusedIndex = this._focusedIndex;
        var endIndex = startIndex + renderCount;
        var shouldVirtualize = this._shouldVirtualize(props);
        // First render is very important to track; when we render cells, we have no idea of estimated page height.
        // So we should default to rendering only the first page so that we can get information.
        // However if the user provides a measure function, let's just assume they know the right heights.
        var isFirstRender = this._estimatedPageHeight === 0 && !getPageHeight;
        var allowedRect = this._allowedRect;
        var _loop_1 = function (itemIndex) {
            var pageSpecification = this_1._getPageSpecification(props, itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            var pageData = pageSpecification.data;
            var key = pageSpecification.key;
            itemsPerPage = pageSpecification.itemCount;
            var pageBottom = pageTop + pageHeight - 1;
            var isPageRendered = Object(array["d" /* findIndex */])(state.pages, function (page) { return !!page.items && page.startIndex === itemIndex; }) > -1;
            var isPageInAllowedRange = !allowedRect || (pageBottom >= allowedRect.top && pageTop <= allowedRect.bottom);
            var isPageInRequiredRange = !this_1._requiredRect || (pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom);
            var isPageVisible = (!isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered))) || !shouldVirtualize;
            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < itemIndex + itemsPerPage;
            var isFirstPage = itemIndex === startIndex;
            // Only render whats visible, focused, or first page,
            // or when running in fast rendering mode (not in virtualized mode), we render all current items in pages
            if (isPageVisible || isPageFocused || isFirstPage) {
                if (currentSpacer) {
                    pages.push(currentSpacer);
                    currentSpacer = null;
                }
                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
                var newPage = this_1._createPage(key, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex, undefined, undefined, pageData);
                newPage.top = pageTop;
                newPage.height = pageHeight;
                if (this_1._visibleRect && this_1._visibleRect.bottom) {
                    newPage.isVisible = pageBottom >= this_1._visibleRect.top && pageTop <= this_1._visibleRect.bottom;
                }
                pages.push(newPage);
                if (isPageInRequiredRange && this_1._allowedRect) {
                    _mergeRect(materializedRect, {
                        top: pageTop,
                        bottom: pageBottom,
                        height: pageHeight,
                        left: allowedRect.left,
                        right: allowedRect.right,
                        width: allowedRect.width,
                    });
                }
            }
            else {
                if (!currentSpacer) {
                    currentSpacer = this_1._createPage(SPACER_KEY_PREFIX + itemIndex, undefined, itemIndex, 0, undefined, pageData, true /*isSpacer*/);
                }
                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
                currentSpacer.itemCount += itemsPerPage;
            }
            pageTop += pageBottom - pageTop + 1;
            // in virtualized mode, we render need to render first page then break and measure,
            // otherwise, we render all items without measurement to make rendering fast
            if (isFirstRender && shouldVirtualize) {
                return "break";
            }
        };
        var this_1 = this;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var state_1 = _loop_1(itemIndex);
            if (state_1 === "break")
                break;
        }
        if (currentSpacer) {
            currentSpacer.key = SPACER_KEY_PREFIX + 'end';
            pages.push(currentSpacer);
        }
        this._materializedRect = materializedRect;
        // console.log('materialized: ', materializedRect);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, state), { pages: pages, measureVersion: this._measureVersion });
    };
    List.prototype._getPageSpecification = function (props, itemIndex, visibleRect) {
        var _a, _b;
        var getPageSpecification = props.getPageSpecification;
        if (getPageSpecification) {
            var pageData = getPageSpecification(itemIndex, visibleRect, props.items);
            var itemCount = (_a = pageData.itemCount, _a === void 0 ? this._getItemCountForPage(itemIndex, visibleRect) : _a);
            var height = (_b = pageData.height, _b === void 0 ? this._getPageHeight(itemIndex, visibleRect, itemCount) : _b);
            return {
                itemCount: itemCount,
                height: height,
                data: pageData.data,
                key: pageData.key,
            };
        }
        else {
            var itemCount = this._getItemCountForPage(itemIndex, visibleRect);
            return {
                itemCount: itemCount,
                height: this._getPageHeight(itemIndex, visibleRect, itemCount),
            };
        }
    };
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    List.prototype._getPageHeight = function (itemIndex, visibleRect, itemsPerPage) {
        if (this.props.getPageHeight) {
            return this.props.getPageHeight(itemIndex, visibleRect, itemsPerPage, this.props.items);
        }
        else {
            var cachedHeight = this._cachedPageHeights[itemIndex];
            return cachedHeight ? cachedHeight.height : this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT;
        }
    };
    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
        var itemsPerPage = this.props.getItemCountForPage
            ? this.props.getItemCountForPage(itemIndex, visibileRect)
            : DEFAULT_ITEMS_PER_PAGE;
        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
    };
    List.prototype._createPage = function (pageKey, items, startIndex, count, style, data, isSpacer) {
        if (startIndex === void 0) { startIndex = -1; }
        if (count === void 0) { count = items ? items.length : 0; }
        if (style === void 0) { style = {}; }
        pageKey = pageKey || PAGE_KEY_PREFIX + startIndex;
        var cachedPage = this._pageCache[pageKey];
        if (cachedPage && cachedPage.page) {
            return cachedPage.page;
        }
        return {
            key: pageKey,
            startIndex: startIndex,
            itemCount: count,
            items: items,
            style: style,
            top: 0,
            height: 0,
            data: data,
            isSpacer: isSpacer || false,
        };
    };
    List.prototype._getRenderCount = function (props) {
        var _a;
        var items = (_a = props || this.props, _a.items), startIndex = _a.startIndex, renderCount = _a.renderCount;
        return renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount;
    };
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    List.prototype._updateRenderRects = function (props, state, forceUpdate) {
        var renderedWindowsAhead = props.renderedWindowsAhead, renderedWindowsBehind = props.renderedWindowsBehind;
        var pages = state.pages;
        // when not in virtualize mode, we render all items without measurement to optimize page rendering perf
        if (!this._shouldVirtualize(props)) {
            return;
        }
        var surfaceRect = this._surfaceRect || Object(tslib_es6["a" /* __assign */])({}, EMPTY_RECT);
        var scrollHeight = getScrollHeight(this._scrollElement);
        var scrollTop = getScrollYPosition(this._scrollElement);
        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
        // This needs to be called to recalculate when new pages should be loaded.
        // We check to see how far we've scrolled and if it's further than a third of a page we run it again.
        if (this._surface.current &&
            (forceUpdate ||
                !pages ||
                !this._surfaceRect ||
                !scrollHeight ||
                scrollHeight !== this._scrollHeight ||
                Math.abs(this._scrollTop - scrollTop) > this._estimatedPageHeight * SCROLL_RATIO)) {
            surfaceRect = this._surfaceRect = _measureSurfaceRect(this._surface.current);
            this._scrollTop = scrollTop;
        }
        // If the scroll height has changed, something in the container likely resized and
        // we should redo the page heights incase their content resized.
        if (forceUpdate || !scrollHeight || scrollHeight !== this._scrollHeight) {
            this._measureVersion++;
        }
        this._scrollHeight = scrollHeight || 0;
        // If the surface is above the container top or below the container bottom, or if this is not the first
        // render return empty rect.
        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
        // used to calculate the width of the list items.
        var visibleTop = Math.max(0, -surfaceRect.top);
        var win = Object(getWindow["a" /* getWindow */])(this._root.current);
        var visibleRect = {
            top: visibleTop,
            left: surfaceRect.left,
            bottom: visibleTop + win.innerHeight,
            right: surfaceRect.right,
            width: surfaceRect.width,
            height: win.innerHeight,
        };
        // The required/allowed rects are adjusted versions of the visible rect.
        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
        // store the visible rect for later use.
        this._visibleRect = visibleRect;
    };
    List.defaultProps = {
        startIndex: 0,
        onRenderCell: function (item, index, containsFocus) { return react["createElement"](react["Fragment"], null, (item && item.name) || ''); },
        onRenderCellConditional: undefined,
        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND,
    };
    List.contextType = WindowProvider["a" /* WindowContext */];
    return List;
}(react["Component"]));
function _expandRect(rect, pagesBefore, pagesAfter) {
    var top = rect.top - pagesBefore * rect.height;
    var height = rect.height + (pagesBefore + pagesAfter) * rect.height;
    return {
        top: top,
        bottom: top + height,
        height: height,
        left: rect.left,
        right: rect.right,
        width: rect.width,
    };
}
function _isContainedWithin(innerRect, outerRect) {
    return (innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right);
}
function _mergeRect(targetRect, newRect) {
    targetRect.top = newRect.top < targetRect.top || targetRect.top === -1 ? newRect.top : targetRect.top;
    targetRect.left = newRect.left < targetRect.left || targetRect.left === -1 ? newRect.left : targetRect.left;
    targetRect.bottom =
        newRect.bottom > targetRect.bottom || targetRect.bottom === -1 ? newRect.bottom : targetRect.bottom;
    targetRect.right = newRect.right > targetRect.right || targetRect.right === -1 ? newRect.right : targetRect.right;
    targetRect.width = targetRect.right - targetRect.left + 1;
    targetRect.height = targetRect.bottom - targetRect.top + 1;
    return targetRect;
}
//# sourceMappingURL=List.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupedListSection.js








var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection_GroupedListSection = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react["createRef"]();
        _this._list = react["createRef"]();
        _this._subGroupRefs = {};
        _this._droppingClassName = '';
        _this._onRenderGroupHeader = function (props) {
            return react["createElement"](GroupHeader, Object(tslib_es6["a" /* __assign */])({}, props));
        };
        _this._onRenderGroupShowAll = function (props) {
            return react["createElement"](GroupShowAll, Object(tslib_es6["a" /* __assign */])({}, props));
        };
        _this._onRenderGroupFooter = function (props) {
            return react["createElement"](GroupFooter, Object(tslib_es6["a" /* __assign */])({}, props));
        };
        _this._renderSubGroup = function (subGroup, subGroupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, groupProps = _a.groupProps, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter, onShouldVirtualize = _a.onShouldVirtualize, group = _a.group, compact = _a.compact;
            var nestingDepth = subGroup.level ? subGroup.level + 1 : groupNestingDepth;
            return !subGroup || subGroup.count > 0 || (groupProps && groupProps.showEmptyGroups) ? (react["createElement"](GroupedListSection, { ref: function (ref) { return (_this._subGroupRefs['subGroup_' + subGroupIndex] = ref); }, key: _this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: nestingDepth, groupProps: groupProps, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter, onShouldVirtualize: onShouldVirtualize, groups: group ? group.children : [], compact: compact })) : null;
        };
        /**
         * collect all the data we need to enable drag/drop for a group
         */
        _this._getGroupDragDropOptions = function () {
            var _a = _this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
            var options = {
                eventMap: eventsToRegister,
                selectionIndex: -1,
                context: { data: group, index: groupIndex, isGroup: true },
                updateDropState: _this._updateDroppingState,
                canDrag: dragDropEvents.canDrag,
                canDrop: dragDropEvents.canDrop,
                onDrop: dragDropEvents.onDrop,
                onDragStart: dragDropEvents.onDragStart,
                onDragEnter: dragDropEvents.onDragEnter,
                onDragLeave: dragDropEvents.onDragLeave,
                onDragEnd: dragDropEvents.onDragEnd,
                onDragOver: dragDropEvents.onDragOver,
            };
            return options;
        };
        /**
         * update groupIsDropping state based on the input value, which is used to change style during drag and drop
         *
         * @param newValue - new isDropping state value
         * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newIsDropping, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, group = _a.group;
            if (isDropping !== newIsDropping) {
                if (isDropping) {
                    if (dragDropEvents && dragDropEvents.onDragLeave) {
                        dragDropEvents.onDragLeave(group, event);
                    }
                }
                else {
                    if (dragDropEvents && dragDropEvents.onDragEnter) {
                        _this._droppingClassName = dragDropEvents.onDragEnter(group, event);
                    }
                }
                _this.setState({ isDropping: newIsDropping });
            }
        };
        var selection = props.selection, group = props.group;
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._id = Object(getId["a" /* getId */])('GroupedListSection');
        _this.state = {
            isDropping: false,
            isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false,
        };
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, Selection_types["a" /* SELECTION_CHANGE */], this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        this._events.dispose();
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d, onShouldVirtualize = _a.onShouldVirtualize, groupedListClassNames = _a.groupedListClassNames, groups = _a.groups, compact = _a.compact, _e = _a.listProps, listProps = _e === void 0 ? {} : _e;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group &&
            !group.children &&
            !group.isCollapsed &&
            !group.isShowingAll &&
            (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var version = listProps.version;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            selected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode,
            groups: groups,
            compact: compact,
        };
        var ariaControlsProps = {
            groupedListId: this._id,
            ariaLevel: (group === null || group === void 0 ? void 0 : group.level) ? group.level + 1 : 1,
            ariaSetSize: groups ? groups.length : undefined,
            ariaPosInSet: groupIndex !== undefined ? groupIndex + 1 : undefined,
        };
        var groupHeaderProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, headerProps), dividerProps), ariaControlsProps);
        var groupShowAllProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, showAllProps), dividerProps);
        var groupFooterProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, footerProps), dividerProps);
        var isDraggable = !!this.props.dragDropHelper &&
            this._getGroupDragDropOptions().canDrag(group) &&
            !!this.props.dragDropEvents.canDragGroups;
        return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ ref: this._root }, (isDraggable && { draggable: true }), { className: Object(css["a" /* css */])(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()), role: "presentation" }),
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ? null : hasNestedGroups ? (react["createElement"](List_List, { role: "presentation", ref: this._list, items: group ? group.children : [], onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne, onShouldVirtualize: onShouldVirtualize, version: version, id: this._id })) : (this._onRenderGroup(renderCount)),
            group && group.isCollapsed
                ? null
                : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this._list.current) {
            this._list.current.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this._list.current.pageRefs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this._subGroupRefs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        if (selection && group) {
            var isSelected = selection.isRangeSelected(group.startIndex, group.count);
            if (isSelected !== this.state.isSelected) {
                this.setState({ isSelected: isSelected });
            }
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth, group) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex, group);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth, onShouldVirtualize = _a.onShouldVirtualize, groupProps = _a.groupProps;
        var count = group && !group.isShowingAll ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (react["createElement"](List_List, Object(tslib_es6["a" /* __assign */])({ role: groupProps && groupProps.role ? groupProps.role : 'rowgroup', "aria-label": group === null || group === void 0 ? void 0 : group.name, items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth, group), ref: this._list, renderCount: Math.min(count, renderCount), startIndex: startIndex, onShouldVirtualize: onShouldVirtualize, id: this._id }, listProps)));
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var _a = this.props, group = _a.group, groupedListClassNames = _a.groupedListClassNames;
        isDropping = !!(group && isDropping);
        return Object(css["a" /* css */])(isDropping && this._droppingClassName, isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
    };
    return GroupedListSection;
}(react["Component"]));

//# sourceMappingURL=GroupedListSection.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupedList.base.js








var GroupedList_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var ROW_HEIGHT = DetailsRow_styles["b" /* DEFAULT_ROW_HEIGHTS */].rowHeight, COMPACT_ROW_HEIGHT = DetailsRow_styles["b" /* DEFAULT_ROW_HEIGHTS */].compactRowHeight;
var GroupedList_base_GroupedListBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(GroupedListBase, _super);
    function GroupedListBase(props) {
        var _a, _b, _c;
        var _this = _super.call(this, props) || this;
        _this._list = react["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a;
            var dragDropEvents = (_a = _this.props, _a.dragDropEvents), dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
            // override group header/footer props as needed
            var dividerProps = {
                onToggleSelectGroup: _this._onToggleSelectGroup,
                onToggleCollapse: _this._onToggleCollapse,
                onToggleSummarize: _this._onToggleSummarize,
            };
            var headerProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupProps.headerProps), dividerProps);
            var showAllProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupProps.showAllProps), dividerProps);
            var footerProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupProps.footerProps), dividerProps);
            var groupNestingDepth = _this._getGroupNestingDepth();
            if (!groupProps.showEmptyGroups && group && group.count === 0) {
                return null;
            }
            var finalListProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (listProps || {})), { version: _this.state.version });
            return (react["createElement"](GroupedListSection_GroupedListSection, { key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: finalListProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
        };
        _this._getDefaultGroupItemLimit = function (group) {
            return group.children && group.children.length > 0 ? group.children.length : group.count;
        };
        _this._getGroupItemLimit = function (group) {
            var groupProps = _this.props.groupProps;
            var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
            return getGroupItemLimit(group);
        };
        _this._getGroupHeight = function (group) {
            var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
            return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
        };
        _this._getPageHeight = function (itemIndex) {
            var _a;
            var groups = _this.state.groups;
            var getGroupHeight = (_a = _this.props.getGroupHeight, _a === void 0 ? _this._getGroupHeight : _a);
            var pageGroup = groups && groups[itemIndex];
            if (pageGroup) {
                return getGroupHeight(pageGroup, itemIndex);
            }
            else {
                return 0;
            }
        };
        _this._onToggleCollapse = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
            if (group) {
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                group.isCollapsed = !group.isCollapsed;
                _this._updateIsSomeGroupExpanded();
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectGroup = function (group) {
            var _a;
            var selection = (_a = _this.props, _a.selection), selectionMode = _a.selectionMode;
            if (group && selection && selectionMode === Selection_types["c" /* SelectionMode */].multiple) {
                selection.toggleRangeSelected(group.startIndex, group.count);
            }
        };
        _this._isInnerZoneKeystroke = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === Object(rtl["b" /* getRTLSafeKeyCode */])(KeyCodes["a" /* KeyCodes */].right);
        };
        _this._onToggleSummarize = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
            if (onToggleSummarize) {
                onToggleSummarize(group);
            }
            else {
                if (group) {
                    group.isShowingAll = !group.isShowingAll;
                }
                _this.forceUpdate();
            }
        };
        _this._getPageSpecification = function (itemIndex) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return {
                key: pageGroup && pageGroup.key,
            };
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        var version = (_a = props.listProps, _b = _a === void 0 ? {} : _a, _c = _b.version, _c === void 0 ? {} : _c);
        _this.state = {
            groups: props.groups,
            items: props.items,
            listProps: props.listProps,
            version: version,
        };
        return _this;
    }
    GroupedListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        var groups = nextProps.groups, selectionMode = nextProps.selectionMode, compact = nextProps.compact, items = nextProps.items, listProps = nextProps.listProps;
        var listVersion = listProps && listProps.version;
        var nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, previousState), { selectionMode: selectionMode, compact: compact, groups: groups, listProps: listProps, items: items });
        var shouldForceUpdates = false;
        var previousListVersion = previousState.listProps && previousState.listProps.version;
        if (listVersion !== previousListVersion ||
            items !== previousState.items ||
            groups !== previousState.groups ||
            selectionMode !== previousState.selectionMode ||
            compact !== previousState.compact) {
            // If there are any props not passed explicitly to `List` which have an impact on the behavior of `onRenderCell`,
            // these need to 'force-update' this component by revving the version. Otherwise, the List might render with stale
            // data.
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, nextState), { version: {} });
        }
        return nextState;
    };
    GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (this._list.current) {
            this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        }
    };
    GroupedListBase.prototype.getStartItemIndexInView = function () {
        return this._list.current.getStartItemIndexInView() || 0;
    };
    GroupedListBase.prototype.componentDidMount = function () {
        var _a, _b;
        var groupProps = (_a = this.props, _a.groupProps), groups = (_b = _a.groups, _b === void 0 ? [] : _b);
        if (groupProps && groupProps.isAllGroupsCollapsed) {
            this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
        }
    };
    GroupedListBase.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        var className = (_a = this.props, _a.className), usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, theme = _a.theme, role = (_b = _a.role, _b === void 0 ? 'treegrid' : _b), styles = _a.styles, compact = _a.compact, focusZoneProps = (_c = _a.focusZoneProps, _c === void 0 ? {} : _c), rootListProps = (_d = _a.rootListProps, _d === void 0 ? {} : _d);
        var groups = (_e = this.state, _e.groups), version = _e.version;
        this._classNames = GroupedList_base_getClassNames(styles, {
            theme: theme,
            className: className,
            compact: compact,
        });
        var shouldEnterInnerZone = (_f = focusZoneProps.shouldEnterInnerZone, _f === void 0 ? this._isInnerZoneKeystroke : _f);
        return (react["createElement"](FocusZone["a" /* FocusZone */], Object(tslib_es6["a" /* __assign */])({ direction: FocusZone_types["a" /* FocusZoneDirection */].vertical, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" }, focusZoneProps, { shouldEnterInnerZone: shouldEnterInnerZone, className: Object(css["a" /* css */])(this._classNames.root, focusZoneProps.className) }),
            react["createElement"](useFocusRects["a" /* FocusRects */], null),
            !groups ? (this._renderGroup(undefined, 0)) : (react["createElement"](List_List, Object(tslib_es6["a" /* __assign */])({ ref: this._list, role: role, items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: this._getPageHeight, getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, version: version }, rootListProps)))));
    };
    GroupedListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
        var _a;
        var groups = (_a = this.state.groups, _a === void 0 ? [] : _a);
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups.length > 0) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            this._setGroupsCollapsedState(groups, allCollapsed);
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
        for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            groups[groupIndex].isCollapsed = isCollapsed;
        }
    };
    GroupedListBase.prototype._returnOne = function () {
        return 1;
    };
    GroupedListBase.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(index));
    };
    GroupedListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedListBase.prototype._forceListUpdates = function (groups) {
        this.setState({
            version: {},
        });
    };
    GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups &&
            groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
    };
    GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedListBase.defaultProps = {
        selectionMode: Selection_types["c" /* SelectionMode */].multiple,
        isHeaderVisible: true,
        groupProps: {},
        compact: false,
    };
    return GroupedListBase;
}(react["Component"]));
//# sourceMappingURL=GroupedList.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupedList.js



var GroupedList = Object(styled["a" /* styled */])(GroupedList_base_GroupedListBase, getStyles, undefined, {
    scope: 'GroupedList',
});
//# sourceMappingURL=GroupedList.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/BaseDecorator.js
var BaseDecorator = __webpack_require__("x09k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/dom/getRect.js
var getRect = __webpack_require__("H/r9");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/decorators/withViewport.js




var withViewport_RESIZE_DELAY = 500;
var MAX_RESIZE_ATTEMPTS = 3;
/**
 * A decorator to update decorated component on viewport or window resize events.
 *
 * @param ComposedComponent - decorated React component reference.
 */
function withViewport(ComposedComponent) {
    return /** @class */ (function (_super) {
        Object(tslib_es6["c" /* __extends */])(WithViewportComponent, _super);
        function WithViewportComponent(props) {
            var _this = _super.call(this, props) || this;
            _this._root = react["createRef"]();
            _this._registerResizeObserver = function () {
                var win = Object(getWindow["a" /* getWindow */])(_this._root.current);
                _this._viewportResizeObserver = new win.ResizeObserver(_this._onAsyncResize);
                _this._viewportResizeObserver.observe(_this._root.current);
            };
            _this._unregisterResizeObserver = function () {
                if (_this._viewportResizeObserver) {
                    _this._viewportResizeObserver.disconnect();
                    delete _this._viewportResizeObserver;
                }
            };
            /* Note: using lambda here because decorators don't seem to work in decorators. */
            _this._updateViewport = function (withForceUpdate) {
                var viewport = _this.state.viewport;
                var viewportElement = _this._root.current;
                var win = Object(getWindow["a" /* getWindow */])(viewportElement);
                var scrollElement = Object(lib_scroll["e" /* findScrollableParent */])(viewportElement);
                var scrollRect = Object(getRect["a" /* getRect */])(scrollElement, win);
                var clientRect = Object(getRect["a" /* getRect */])(viewportElement, win);
                var updateComponent = function () {
                    if (withForceUpdate && _this._composedComponentInstance) {
                        _this._composedComponentInstance.forceUpdate();
                    }
                };
                var isSizeChanged = (clientRect && clientRect.width) !== viewport.width || (scrollRect && scrollRect.height) !== viewport.height;
                if (isSizeChanged && _this._resizeAttempts < MAX_RESIZE_ATTEMPTS && clientRect && scrollRect) {
                    _this._resizeAttempts++;
                    _this.setState({
                        viewport: {
                            width: clientRect.width,
                            height: scrollRect.height,
                        },
                    }, function () {
                        _this._updateViewport(withForceUpdate);
                    });
                }
                else {
                    _this._resizeAttempts = 0;
                    updateComponent();
                }
            };
            _this._async = new Async["a" /* Async */](_this);
            _this._events = new EventGroup["a" /* EventGroup */](_this);
            _this._resizeAttempts = 0;
            _this.state = {
                viewport: {
                    width: 0,
                    height: 0,
                },
            };
            return _this;
        }
        WithViewportComponent.prototype.componentDidMount = function () {
            var _this = this;
            var _a = this.props, delayFirstMeasure = _a.delayFirstMeasure, disableResizeObserver = _a.disableResizeObserver, skipViewportMeasures = _a.skipViewportMeasures;
            var win = Object(getWindow["a" /* getWindow */])(this._root.current);
            this._onAsyncResize = this._async.debounce(this._onAsyncResize, withViewport_RESIZE_DELAY, {
                leading: false,
            });
            if (!skipViewportMeasures) {
                if (!disableResizeObserver && this._isResizeObserverAvailable()) {
                    this._registerResizeObserver();
                }
                else {
                    this._events.on(win, 'resize', this._onAsyncResize);
                }
                if (delayFirstMeasure) {
                    this._async.setTimeout(function () {
                        _this._updateViewport();
                    }, withViewport_RESIZE_DELAY);
                }
                else {
                    this._updateViewport();
                }
            }
        };
        WithViewportComponent.prototype.componentDidUpdate = function (previousProps) {
            var previousSkipViewportMeasures = previousProps.skipViewportMeasures;
            var _a = this.props, disableResizeObserver = _a.disableResizeObserver, skipViewportMeasures = _a.skipViewportMeasures;
            var win = Object(getWindow["a" /* getWindow */])(this._root.current);
            if (skipViewportMeasures !== previousSkipViewportMeasures) {
                if (!skipViewportMeasures) {
                    if (!disableResizeObserver && this._isResizeObserverAvailable()) {
                        if (!this._viewportResizeObserver) {
                            this._registerResizeObserver();
                        }
                    }
                    else {
                        this._events.on(win, 'resize', this._onAsyncResize);
                    }
                    this._updateViewport();
                }
                else {
                    this._unregisterResizeObserver();
                    this._events.off(win, 'resize', this._onAsyncResize);
                }
            }
        };
        WithViewportComponent.prototype.componentWillUnmount = function () {
            this._events.dispose();
            this._async.dispose();
            this._unregisterResizeObserver();
        };
        WithViewportComponent.prototype.render = function () {
            var viewport = this.state.viewport;
            var newViewport = viewport.width > 0 && viewport.height > 0 ? viewport : undefined;
            return (react["createElement"]("div", { className: "ms-Viewport", ref: this._root, style: { minWidth: 1, minHeight: 1 } },
                react["createElement"](ComposedComponent, Object(tslib_es6["a" /* __assign */])({ ref: this._updateComposedComponentRef, viewport: newViewport }, this.props))));
        };
        WithViewportComponent.prototype.forceUpdate = function () {
            this._updateViewport(true);
        };
        WithViewportComponent.prototype._onAsyncResize = function () {
            this._updateViewport();
        };
        WithViewportComponent.prototype._isResizeObserverAvailable = function () {
            var win = Object(getWindow["a" /* getWindow */])(this._root.current);
            return win && win.ResizeObserver;
        };
        return WithViewportComponent;
    }(BaseDecorator["a" /* BaseDecorator */]));
}
//# sourceMappingURL=withViewport.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/groupedList/GroupedListUtility.js

/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */
var GetGroupCount = function (groups) {
    var total = 0;
    if (groups) {
        var remainingGroups = Object(tslib_es6["f" /* __spreadArray */])([], groups, true);
        var currentGroup = void 0;
        while (remainingGroups && remainingGroups.length > 0) {
            ++total;
            currentGroup = remainingGroups.pop();
            if (currentGroup && currentGroup.children) {
                remainingGroups.push.apply(remainingGroups, currentGroup.children);
            }
        }
    }
    return total;
};
//# sourceMappingURL=GroupedListUtility.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/componentAs/composeComponentAs.js
var composeComponentAs = __webpack_require__("T+Fs");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useConst.js
var useConst = __webpack_require__("mFKB");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.base.js
















// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.





var DetailsList_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var COMPONENT_NAME = 'DetailsList';
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var DetailsList_base_DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DetailsList_base_DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var rowFocusZoneAddTabIndexProps = { tabIndex: 0 };
var rowFocusZoneNoTabIndexProps = {};
/**
 * Hooks-based implementation of DetailsList.
 * Since many existing consumers of DetailsList expect `ref` to return a `DetailsList`,
 * this inner component handles rendering while the outer maintains compatibility.
 */
var DetailsListInner = function (props) {
    var selection = props.selection;
    var ariaLabelForListHeader = props.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = props.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = props.ariaLabelForSelectionColumn, className = props.className, checkboxVisibility = props.checkboxVisibility, compact = props.compact, constrainMode = props.constrainMode, dragDropEvents = props.dragDropEvents, groups = props.groups, groupProps = props.groupProps, indentWidth = props.indentWidth, items = props.items, isPlaceholderData = props.isPlaceholderData, isHeaderVisible = props.isHeaderVisible, layoutMode = props.layoutMode, onItemInvoked = props.onItemInvoked, onItemContextMenu = props.onItemContextMenu, onColumnHeaderClick = props.onColumnHeaderClick, onColumnHeaderContextMenu = props.onColumnHeaderContextMenu, _a = props.selectionMode, selectionMode = _a === void 0 ? selection.mode : _a, selectionPreservedOnEmptyClick = props.selectionPreservedOnEmptyClick, selectionZoneProps = props.selectionZoneProps, 
    // eslint-disable-next-line deprecation/deprecation
    ariaLabel = props.ariaLabel, ariaLabelForGrid = props.ariaLabelForGrid, rowElementEventMap = props.rowElementEventMap, 
    // eslint-disable-next-line deprecation/deprecation
    _b = props.shouldApplyApplicationRole, 
    // eslint-disable-next-line deprecation/deprecation
    shouldApplyApplicationRole = _b === void 0 ? false : _b, getKey = props.getKey, listProps = props.listProps, usePageCache = props.usePageCache, onShouldVirtualize = props.onShouldVirtualize, viewport = props.viewport, minimumPixelsForDrag = props.minimumPixelsForDrag, getGroupHeight = props.getGroupHeight, styles = props.styles, theme = props.theme, _c = props.cellStyleProps, cellStyleProps = _c === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _c, onRenderCheckbox = props.onRenderCheckbox, useFastIcons = props.useFastIcons, dragDropHelper = props.dragDropHelper, adjustedColumns = props.adjustedColumns, isCollapsed = props.isCollapsed, isSizing = props.isSizing, isSomeGroupExpanded = props.isSomeGroupExpanded, version = props.version, rootRef = props.rootRef, listRef = props.listRef, focusZoneRef = props.focusZoneRef, columnReorderOptions = props.columnReorderOptions, groupedListRef = props.groupedListRef, headerRef = props.headerRef, onGroupExpandStateChanged = props.onGroupExpandStateChanged, onColumnIsSizingChanged = props.onColumnIsSizingChanged, onRowDidMount = props.onRowDidMount, onRowWillUnmount = props.onRowWillUnmount, disableSelectionZone = props.disableSelectionZone, _d = props.isSelectedOnFocus, isSelectedOnFocus = _d === void 0 ? true : _d, onColumnResized = props.onColumnResized, onColumnAutoResized = props.onColumnAutoResized, onToggleCollapse = props.onToggleCollapse, onActiveRowChanged = props.onActiveRowChanged, onBlur = props.onBlur, eventsToRegister = props.rowElementEventMap, onRenderMissingItem = props.onRenderMissingItem, onRenderItemColumn = props.onRenderItemColumn, onRenderField = props.onRenderField, getCellValueKey = props.getCellValueKey, getRowAriaLabel = props.getRowAriaLabel, getRowAriaDescribedBy = props.getRowAriaDescribedBy, checkButtonAriaLabel = props.checkButtonAriaLabel, checkButtonGroupAriaLabel = props.checkButtonGroupAriaLabel, checkboxCellClassName = props.checkboxCellClassName, useReducedRowRenderer = props.useReducedRowRenderer, enableUpdateAnimations = props.enableUpdateAnimations, enterModalSelectionOnTouch = props.enterModalSelectionOnTouch, onRenderDefaultRow = props.onRenderDefaultRow, selectionZoneRef = props.selectionZoneRef, focusZoneProps = props.focusZoneProps;
    var defaultRole = 'grid';
    var role = props.role ? props.role : defaultRole;
    var rowId = Object(getId["a" /* getId */])('row');
    var groupNestingDepth = getGroupNestingDepth(groups);
    var groupedDetailsListIndexMap = useGroupedDetailsListIndexMap(groups);
    var additionalListProps = react["useMemo"](function () {
        return Object(tslib_es6["a" /* __assign */])({ renderedWindowsAhead: isSizing ? 0 : DetailsList_base_DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DetailsList_base_DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey, version: version }, listProps);
    }, [isSizing, getKey, version, listProps]);
    var selectAllVisibility = DetailsHeader_types["a" /* SelectAllVisibility */].none; // for SelectionMode.none
    if (selectionMode === Selection_types["c" /* SelectionMode */].single) {
        selectAllVisibility = DetailsHeader_types["a" /* SelectAllVisibility */].hidden;
    }
    if (selectionMode === Selection_types["c" /* SelectionMode */].multiple) {
        // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
        var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
        if (isCollapsedGroupSelectVisible === undefined) {
            isCollapsedGroupSelectVisible = true;
        }
        var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
        selectAllVisibility = isSelectAllVisible ? DetailsHeader_types["a" /* SelectAllVisibility */].visible : DetailsHeader_types["a" /* SelectAllVisibility */].hidden;
    }
    if (checkboxVisibility === DetailsList_types["a" /* CheckboxVisibility */].hidden) {
        selectAllVisibility = DetailsHeader_types["a" /* SelectAllVisibility */].none;
    }
    var defaultOnRenderDetailsHeader = react["useCallback"](function (detailsHeaderProps) {
        return react["createElement"](DetailsHeader["a" /* DetailsHeader */], Object(tslib_es6["a" /* __assign */])({}, detailsHeaderProps));
    }, []);
    var defaultOnRenderDetailsFooter = react["useCallback"](function () {
        return null;
    }, []);
    var propsOnRenderDetailsHeader = props.onRenderDetailsHeader;
    var onRenderDetailsHeader = react["useMemo"](function () {
        return propsOnRenderDetailsHeader
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader)
            : defaultOnRenderDetailsHeader;
    }, [propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader]);
    var propsOnRenderDetailsFooter = props.onRenderDetailsFooter;
    var onRenderDetailsFooter = react["useMemo"](function () {
        return propsOnRenderDetailsFooter
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter)
            : defaultOnRenderDetailsFooter;
    }, [propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter]);
    var detailsFooterProps = react["useMemo"](function () {
        return {
            columns: adjustedColumns,
            groupNestingDepth: groupNestingDepth,
            selection: selection,
            selectionMode: selectionMode,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
        };
    }, [
        adjustedColumns,
        groupNestingDepth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        indentWidth,
        cellStyleProps,
    ]);
    var columnReorderOnDragEnd = columnReorderOptions && columnReorderOptions.onDragEnd;
    var onColumnDragEnd = react["useCallback"](function (_a, event) {
        var dropLocation = _a.dropLocation;
        var finalDropLocation = DetailsList_types["c" /* ColumnDragEndLocation */].outside;
        if (columnReorderOnDragEnd) {
            if (dropLocation && dropLocation !== DetailsList_types["c" /* ColumnDragEndLocation */].header) {
                finalDropLocation = dropLocation;
            }
            else if (rootRef.current) {
                var clientRect = rootRef.current.getBoundingClientRect();
                if (event.clientX > clientRect.left &&
                    event.clientX < clientRect.right &&
                    event.clientY > clientRect.top &&
                    event.clientY < clientRect.bottom) {
                    finalDropLocation = DetailsList_types["c" /* ColumnDragEndLocation */].surface;
                }
            }
            columnReorderOnDragEnd(finalDropLocation);
        }
    }, [columnReorderOnDragEnd, rootRef]);
    var columnReorderProps = react["useMemo"](function () {
        if (columnReorderOptions) {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, columnReorderOptions), { onColumnDragEnd: onColumnDragEnd });
        }
    }, [columnReorderOptions, onColumnDragEnd]);
    var rowCount = (isHeaderVisible ? 1 : 0) +
        (props.onRenderDetailsFooter ? 1 : 0) +
        GetGroupCount(groups) +
        (items ? items.length : 0);
    var colCount = (selectAllVisibility !== DetailsHeader_types["a" /* SelectAllVisibility */].none ? 1 : 0) +
        (adjustedColumns ? adjustedColumns.length : 0) +
        (groups ? 1 : 0);
    var classNames = react["useMemo"](function () {
        return DetailsList_base_getClassNames(styles, {
            theme: theme,
            compact: compact,
            isFixed: layoutMode === DetailsList_types["e" /* DetailsListLayoutMode */].fixedColumns,
            isHorizontalConstrained: constrainMode === DetailsList_types["d" /* ConstrainMode */].horizontalConstrained,
            className: className,
        });
    }, [styles, theme, compact, layoutMode, constrainMode, className]);
    var onRenderDetailsGroupFooter = groupProps && groupProps.onRenderFooter;
    var finalOnRenderDetailsGroupFooter = react["useMemo"](function () {
        return onRenderDetailsGroupFooter
            ? function (groupFooterProps, defaultRender) {
                return onRenderDetailsGroupFooter(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupFooterProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: selection, selectionMode: selectionMode, viewport: viewport, checkboxVisibility: checkboxVisibility, cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
    }, [
        onRenderDetailsGroupFooter,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var onRenderDetailsGroupHeader = groupProps && groupProps.onRenderHeader;
    var finalOnRenderDetailsGroupHeader = react["useMemo"](function () {
        return onRenderDetailsGroupHeader
            ? function (groupHeaderProps, defaultRender) {
                var _a, _b;
                var groupIndex = groupHeaderProps.groupIndex;
                var groupKey = groupIndex !== undefined ? (_b = (_a = groupHeaderProps.groups) === null || _a === void 0 ? void 0 : _a[groupIndex]) === null || _b === void 0 ? void 0 : _b.key : undefined;
                var totalRowCount = groupKey !== undefined && groupedDetailsListIndexMap[groupKey]
                    ? groupedDetailsListIndexMap[groupKey].totalRowCount
                    : 0;
                return onRenderDetailsGroupHeader(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupHeaderProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: selection, selectionMode: checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden ? selectionMode : Selection_types["c" /* SelectionMode */].none, viewport: viewport, checkboxVisibility: checkboxVisibility, cellStyleProps: cellStyleProps, ariaColSpan: adjustedColumns.length, ariaLevel: undefined, ariaPosInSet: undefined, ariaSetSize: undefined, ariaRowCount: undefined, ariaRowIndex: groupIndex !== undefined ? totalRowCount + (isHeaderVisible ? 1 : 0) : undefined }), defaultRender);
            }
            : function (groupHeaderProps, defaultRender) {
                var _a, _b;
                var groupIndex = groupHeaderProps.groupIndex;
                var groupKey = groupIndex !== undefined ? (_b = (_a = groupHeaderProps.groups) === null || _a === void 0 ? void 0 : _a[groupIndex]) === null || _b === void 0 ? void 0 : _b.key : undefined;
                var totalRowCount = groupKey !== undefined && groupedDetailsListIndexMap[groupKey]
                    ? groupedDetailsListIndexMap[groupKey].totalRowCount
                    : 0;
                return defaultRender(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupHeaderProps), { ariaColSpan: adjustedColumns.length, ariaLevel: undefined, ariaPosInSet: undefined, ariaSetSize: undefined, ariaRowCount: undefined, ariaRowIndex: groupIndex !== undefined ? totalRowCount + (isHeaderVisible ? 1 : 0) : undefined }));
            };
    }, [
        onRenderDetailsGroupHeader,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        isHeaderVisible,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
        groupedDetailsListIndexMap,
    ]);
    var finalGroupProps = react["useMemo"](function () {
        var _a;
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupProps), { role: role === defaultRole ? 'rowgroup' : 'presentation', onRenderFooter: finalOnRenderDetailsGroupFooter, onRenderHeader: finalOnRenderDetailsGroupHeader, 
            // pass through custom group header checkbox label
            headerProps: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, groupProps === null || groupProps === void 0 ? void 0 : groupProps.headerProps), { selectAllButtonProps: Object(tslib_es6["a" /* __assign */])({ 'aria-label': checkButtonGroupAriaLabel }, (_a = groupProps === null || groupProps === void 0 ? void 0 : groupProps.headerProps) === null || _a === void 0 ? void 0 : _a.selectAllButtonProps) }) });
    }, [groupProps, finalOnRenderDetailsGroupFooter, finalOnRenderDetailsGroupHeader, checkButtonGroupAriaLabel, role]);
    var sumColumnWidths = Object(useConst["a" /* useConst */])(function () {
        return Object(memoize["b" /* memoizeFunction */])(function (columns) {
            var totalWidth = 0;
            columns.forEach(function (column) { return (totalWidth += column.calculatedWidth || column.minWidth); });
            return totalWidth;
        });
    });
    var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
    var rowWidth = react["useMemo"](function () {
        return sumColumnWidths(adjustedColumns);
    }, [adjustedColumns, sumColumnWidths]);
    var onRenderCell = react["useCallback"](function (nestingDepth, item, index, group) {
        var finalOnRenderRow = props.onRenderRow
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(props.onRenderRow, onRenderDefaultRow)
            : onRenderDefaultRow;
        var groupKey = group ? group.key : undefined;
        var numOfGroupHeadersBeforeItem = groupKey && groupedDetailsListIndexMap[groupKey]
            ? groupedDetailsListIndexMap[groupKey].numOfGroupHeadersBeforeItem
            : 0;
        var rowRole = role === defaultRole ? undefined : 'presentation';
        // add tabindex="0" to first row so if the header isn't rendered or isn't focusable,
        // the focuszone still has content in the tab order.
        var rowFocusZoneProps = index > 0 ? rowFocusZoneNoTabIndexProps : rowFocusZoneAddTabIndexProps;
        var rowProps = {
            item: item,
            itemIndex: index,
            flatIndexOffset: (isHeaderVisible ? 2 : 1) + numOfGroupHeadersBeforeItem,
            compact: compact,
            columns: adjustedColumns,
            groupNestingDepth: nestingDepth,
            id: "".concat(rowId, "-").concat(index),
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: onRowDidMount,
            onWillUnmount: onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            onRenderField: onRenderField,
            getCellValueKey: getCellValueKey,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            getRowAriaDescribedBy: getRowAriaDescribedBy,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
            useReducedRowRenderer: useReducedRowRenderer,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
            onRenderDetailsCheckbox: onRenderCheckbox,
            enableUpdateAnimations: enableUpdateAnimations,
            rowWidth: rowWidth,
            useFastIcons: useFastIcons,
            role: rowRole,
            isGridRow: true,
            focusZoneProps: rowFocusZoneProps,
        };
        if (!item) {
            if (onRenderMissingItem) {
                return onRenderMissingItem(index, rowProps);
            }
            return null;
        }
        return finalOnRenderRow(rowProps);
    }, [
        compact,
        adjustedColumns,
        selectionMode,
        selection,
        rowId,
        onRowDidMount,
        onRowWillUnmount,
        onRenderItemColumn,
        onRenderField,
        getCellValueKey,
        eventsToRegister,
        dragDropEvents,
        dragDropHelper,
        viewport,
        checkboxVisibility,
        collapseAllVisibility,
        getRowAriaLabel,
        getRowAriaDescribedBy,
        isHeaderVisible,
        checkButtonAriaLabel,
        checkboxCellClassName,
        useReducedRowRenderer,
        indentWidth,
        cellStyleProps,
        onRenderCheckbox,
        enableUpdateAnimations,
        useFastIcons,
        onRenderDefaultRow,
        onRenderMissingItem,
        props.onRenderRow,
        rowWidth,
        role,
        groupedDetailsListIndexMap,
    ]);
    var onRenderListCell = react["useCallback"](function (nestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(nestingDepth, item, itemIndex);
        };
    }, [onRenderCell]);
    var isRightArrow = react["useCallback"](function (event) {
        // eslint-disable-next-line deprecation/deprecation
        return event.which === Object(rtl["b" /* getRTLSafeKeyCode */])(KeyCodes["a" /* KeyCodes */].right, theme);
    }, [theme]);
    var focusZoneInnerProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, focusZoneProps), { componentRef: focusZoneProps && focusZoneProps.componentRef ? focusZoneProps.componentRef : focusZoneRef, className: focusZoneProps && focusZoneProps.className
            ? Object(css["a" /* css */])(classNames.focusZone, focusZoneProps.className)
            : classNames.focusZone, direction: focusZoneProps ? focusZoneProps.direction : FocusZone_types["a" /* FocusZoneDirection */].vertical, shouldEnterInnerZone: focusZoneProps && focusZoneProps.shouldEnterInnerZone ? focusZoneProps.shouldEnterInnerZone : isRightArrow, onActiveElementChanged: focusZoneProps && focusZoneProps.onActiveElementChanged
            ? focusZoneProps.onActiveElementChanged
            : onActiveRowChanged, shouldRaiseClicksOnEnter: false, onBlur: focusZoneProps && focusZoneProps.onBlur ? focusZoneProps.onBlur : onBlur });
    var FinalGroupedList = groups && (groupProps === null || groupProps === void 0 ? void 0 : groupProps.groupedListAs) ? Object(composeComponentAs["a" /* composeComponentAs */])(groupProps.groupedListAs, GroupedList) : GroupedList;
    var list = groups ? (react["createElement"](FinalGroupedList, { focusZoneProps: focusZoneInnerProps, componentRef: groupedListRef, groups: groups, groupProps: finalGroupProps, items: items, onRenderCell: onRenderCell, role: "presentation", selection: selection, selectionMode: checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden ? selectionMode : Selection_types["c" /* SelectionMode */].none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (react["createElement"](FocusZone["a" /* FocusZone */], Object(tslib_es6["a" /* __assign */])({}, focusZoneInnerProps),
        react["createElement"](List_List, Object(tslib_es6["a" /* __assign */])({ ref: listRef, role: "presentation", items: items, onRenderCell: onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps))));
    var onHeaderKeyDown = react["useCallback"](function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes["a" /* KeyCodes */].down) {
            if (focusZoneRef.current && focusZoneRef.current.focus()) {
                // select the first item in list after down arrow key event
                // only if nothing was selected; otherwise start with the already-selected item
                if (isSelectedOnFocus && selection.getSelectedIndices().length === 0) {
                    selection.setIndexSelected(0, true, false);
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [selection, focusZoneRef, isSelectedOnFocus]);
    var onContentKeyDown = react["useCallback"](function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        if (ev.which === KeyCodes["a" /* KeyCodes */].up && !ev.altKey) {
            if (headerRef.current && headerRef.current.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [headerRef]);
    return (react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ ref: rootRef, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false" }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
        react["createElement"](useFocusRects["a" /* FocusRects */], null),
        react["createElement"]("div", { role: role, "aria-label": ariaLabelForGrid || ariaLabel, "aria-rowcount": isPlaceholderData ? 0 : rowCount, "aria-colcount": colCount, "aria-busy": isPlaceholderData },
            react["createElement"]("div", { onKeyDown: onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                onRenderDetailsHeader({
                    componentRef: headerRef,
                    selectionMode: selectionMode,
                    layoutMode: layoutMode,
                    selection: selection,
                    columns: adjustedColumns,
                    onColumnClick: onColumnHeaderClick,
                    onColumnContextMenu: onColumnHeaderContextMenu,
                    onColumnResized: onColumnResized,
                    onColumnIsSizingChanged: onColumnIsSizingChanged,
                    onColumnAutoResized: onColumnAutoResized,
                    groupNestingDepth: groupNestingDepth,
                    isAllCollapsed: isCollapsed,
                    onToggleCollapseAll: onToggleCollapse,
                    ariaLabel: ariaLabelForListHeader,
                    ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                    ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                    selectAllVisibility: selectAllVisibility,
                    collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                    viewport: viewport,
                    columnReorderProps: columnReorderProps,
                    minimumPixelsForDrag: minimumPixelsForDrag,
                    cellStyleProps: cellStyleProps,
                    checkboxVisibility: checkboxVisibility,
                    indentWidth: indentWidth,
                    onRenderDetailsCheckbox: onRenderCheckbox,
                    rowWidth: sumColumnWidths(adjustedColumns),
                    useFastIcons: useFastIcons,
                }, onRenderDetailsHeader)),
            react["createElement"]("div", { onKeyDown: onContentKeyDown, role: "presentation", className: classNames.contentWrapper }, !disableSelectionZone ? (react["createElement"](SelectionZone["a" /* SelectionZone */], Object(tslib_es6["a" /* __assign */])({ ref: selectionZoneRef, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, isSelectedOnFocus: isSelectedOnFocus, selectionClearedOnEscapePress: isSelectedOnFocus, toggleWithoutModifierPressed: !isSelectedOnFocus, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: enterModalSelectionOnTouch }, (selectionZoneProps || {})), list)) : (list)),
            onRenderDetailsFooter(Object(tslib_es6["a" /* __assign */])({}, detailsFooterProps)))));
};
var DetailsList_base_DetailsListBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DetailsListBase, _super);
    function DetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react["createRef"]();
        _this._header = react["createRef"]();
        _this._groupedList = react["createRef"]();
        _this._list = react["createRef"]();
        _this._focusZone = react["createRef"]();
        _this._selectionZone = react["createRef"]();
        _this._onRenderRow = function (props, defaultRender) {
            return react["createElement"](DetailsRow["a" /* DetailsRow */], Object(tslib_es6["a" /* __assign */])({}, props));
        };
        _this._getDerivedStateFromProps = function (nextProps, previousState) {
            var _a, _b, _c;
            var checkboxVisibility = (_a = _this.props, _a.checkboxVisibility), items = _a.items, setKey = _a.setKey, selectionMode = (_b = _a.selectionMode, _b === void 0 ? _this._selection.mode : _b), columns = _a.columns, viewport = _a.viewport, compact = _a.compact, dragDropEvents = _a.dragDropEvents;
            var isAllGroupsCollapsed = (_c = (_this.props.groupProps || {}).isAllGroupsCollapsed, _c === void 0 ? undefined : _c);
            var newViewportWidth = (nextProps.viewport && nextProps.viewport.width) || 0;
            var oldViewportWidth = (viewport && viewport.width) || 0;
            var shouldResetSelection = nextProps.setKey !== setKey || nextProps.setKey === undefined;
            var shouldForceUpdates = false;
            if (nextProps.layoutMode !== _this.props.layoutMode) {
                shouldForceUpdates = true;
            }
            var nextState = previousState;
            if (shouldResetSelection) {
                _this._initialFocusedIndex = nextProps.initialFocusedIndex;
                // reset focusedItemIndex when setKey changes
                nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, nextState), { focusedItemIndex: _this._initialFocusedIndex !== undefined ? _this._initialFocusedIndex : -1 });
            }
            if (!_this.props.disableSelectionZone && nextProps.items !== items) {
                _this._selection.setItems(nextProps.items, shouldResetSelection);
            }
            if (nextProps.checkboxVisibility !== checkboxVisibility ||
                nextProps.columns !== columns ||
                newViewportWidth !== oldViewportWidth ||
                nextProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, nextState), _this._adjustColumns(nextProps, nextState, true));
            if (nextProps.selectionMode !== selectionMode) {
                shouldForceUpdates = true;
            }
            if (isAllGroupsCollapsed === undefined &&
                nextProps.groupProps &&
                nextProps.groupProps.isAllGroupsCollapsed !== undefined) {
                nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, nextState), { isCollapsed: nextProps.groupProps.isAllGroupsCollapsed, isSomeGroupExpanded: !nextProps.groupProps.isAllGroupsCollapsed });
            }
            if (nextProps.dragDropEvents !== dragDropEvents) {
                _this._dragDropHelper && _this._dragDropHelper.dispose();
                _this._dragDropHelper = nextProps.dragDropEvents
                    ? new DragDropHelper["a" /* DragDropHelper */]({
                        selection: _this._selection,
                        minimumPixelsForDrag: nextProps.minimumPixelsForDrag,
                    })
                    : undefined;
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                nextState = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, nextState), { version: {} });
            }
            return nextState;
        };
        _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
            _this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
        };
        _this._onColumnIsSizingChanged = function (column, isSizing) {
            _this.setState({ isSizing: isSizing });
        };
        _this._onRowDidMount = function (row) {
            var _a;
            var item = (_a = row.props, _a.item), itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            _this._activeRows[itemKey] = row; // this is used for column auto resize
            _this._setFocusToRowIfPending(row);
            var onRowDidMount = _this.props.onRowDidMount;
            if (onRowDidMount) {
                onRowDidMount(item, itemIndex);
            }
        };
        _this._onRowWillUnmount = function (row) {
            var _a;
            var onRowWillUnmount = _this.props.onRowWillUnmount;
            var item = (_a = row.props, _a.item), itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            delete _this._activeRows[itemKey];
            if (onRowWillUnmount) {
                onRowWillUnmount(item, itemIndex);
            }
        };
        _this._onToggleCollapse = function (collapsed) {
            _this.setState({
                isCollapsed: collapsed,
            });
            if (_this._groupedList.current) {
                _this._groupedList.current.toggleCollapseAll(collapsed);
            }
        };
        _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
            var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
            }
            _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
            _this.setState(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, _this._adjustColumns(_this.props, _this.state, true, resizingColumnIndex)), { version: {} }));
        };
        /**
         * Callback function when double clicked on the details header column resizer
         * which will measure the column cells of all the active rows and resize the
         * column to the max cell width.
         *
         * @param column - double clicked column definition
         * @param columnIndex - double clicked column index
         * TODO: min width 100 should be changed to const value and should be consistent with the
         * value used on _onSizerMove method in DetailsHeader
         */
        _this._onColumnAutoResized = function (column, columnIndex) {
            var max = 0;
            var count = 0;
            var totalCount = Object.keys(_this._activeRows).length;
            for (var key in _this._activeRows) {
                if (_this._activeRows.hasOwnProperty(key)) {
                    var currentRow = _this._activeRows[key];
                    currentRow.measureCell(columnIndex, function (width) {
                        max = Math.max(max, width);
                        count++;
                        if (count === totalCount) {
                            _this._onColumnResized(column, max, columnIndex);
                        }
                    });
                }
            }
        };
        /**
         * Call back function when an element in FocusZone becomes active. It will translate it into item
         * and call onActiveItemChanged callback if specified.
         *
         * @param row - element that became active in Focus Zone
         * @param focus - event from Focus Zone
         */
        _this._onActiveRowChanged = function (el, ev) {
            var _a;
            var items = (_a = _this.props, _a.items), onActiveItemChanged = _a.onActiveItemChanged;
            if (!el) {
                return;
            }
            // Check and assign index only if the event was raised from any DetailsRow element
            if (el.getAttribute('data-item-index')) {
                var index = Number(el.getAttribute('data-item-index'));
                if (index >= 0) {
                    if (onActiveItemChanged) {
                        onActiveItemChanged(items[index], index, ev);
                    }
                    _this.setState({
                        focusedItemIndex: index,
                    });
                }
            }
        };
        _this._onBlur = function (event) {
            _this.setState({
                focusedItemIndex: -1,
            });
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this.state = {
            focusedItemIndex: -1,
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props, undefined),
            isSizing: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
            version: {},
            getDerivedStateFromProps: _this._getDerivedStateFromProps,
        };
        Object(warnMutuallyExclusive["a" /* warnMutuallyExclusive */])(COMPONENT_NAME, props, {
            selection: 'getKey',
        });
        _this._selection =
            props.selection ||
                new Selection["a" /* Selection */]({
                    onSelectionChanged: undefined,
                    getKey: props.getKey,
                    selectionMode: props.selectionMode,
                });
        if (!_this.props.disableSelectionZone) {
            _this._selection.setItems(props.items, false);
        }
        _this._dragDropHelper = props.dragDropEvents
            ? new DragDropHelper["a" /* DragDropHelper */]({
                selection: _this._selection,
                minimumPixelsForDrag: props.minimumPixelsForDrag,
            })
            : undefined;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return previousState.getDerivedStateFromProps(nextProps, previousState);
    };
    DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
    };
    DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var item = this.props.items[index];
        if (item) {
            this.scrollToIndex(index, measureItem, scrollToMode);
            var itemKey = this._getItemKey(item, index);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row, forceIntoFirstElement);
            }
        }
    };
    DetailsListBase.prototype.getStartItemIndexInView = function () {
        if (this._list && this._list.current) {
            return this._list.current.getStartItemIndexInView();
        }
        else if (this._groupedList && this._groupedList.current) {
            return this._groupedList.current.getStartItemIndexInView();
        }
        return 0;
    };
    DetailsListBase.prototype.updateColumn = function (column, options) {
        var _a, _b;
        var _c, _d;
        var NO_COLUMNS = [];
        var columns = (_a = this.props, _b = _a.columns, _b === void 0 ? NO_COLUMNS : _b), selectionMode = _a.selectionMode, checkboxVisibility = _a.checkboxVisibility, columnReorderOptions = _a.columnReorderOptions;
        var width = options.width, newColumnIndex = options.newColumnIndex;
        var index = columns.findIndex(function (col) { return col.key === column.key; });
        if (width) {
            this._onColumnResized(column, width, index);
        }
        if (newColumnIndex !== undefined && columnReorderOptions) {
            var isCheckboxColumnHidden = selectionMode === Selection_types["c" /* SelectionMode */].none || checkboxVisibility === DetailsList_types["a" /* CheckboxVisibility */].hidden;
            var showCheckbox = checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden;
            var columnIndex = (showCheckbox ? 2 : 1) + index;
            var draggedIndex = isCheckboxColumnHidden ? columnIndex - 1 : columnIndex - 2;
            var targetIndex = isCheckboxColumnHidden ? newColumnIndex - 1 : newColumnIndex - 2;
            var frozenColumnCountFromStart = (_c = columnReorderOptions.frozenColumnCountFromStart) !== null && _c !== void 0 ? _c : 0;
            var frozenColumnCountFromEnd = (_d = columnReorderOptions.frozenColumnCountFromEnd) !== null && _d !== void 0 ? _d : 0;
            var isValidTargetIndex = targetIndex >= frozenColumnCountFromStart && targetIndex < columns.length - frozenColumnCountFromEnd;
            if (isValidTargetIndex) {
                if (columnReorderOptions.onColumnDrop) {
                    var dragDropDetails = {
                        draggedIndex: draggedIndex,
                        targetIndex: targetIndex,
                    };
                    columnReorderOptions.onColumnDrop(dragDropDetails);
                    /* eslint-disable deprecation/deprecation */
                }
                else if (columnReorderOptions.handleColumnReorder) {
                    columnReorderOptions.handleColumnReorder(draggedIndex, targetIndex);
                    /* eslint-enable deprecation/deprecation */
                }
            }
        }
    };
    DetailsListBase.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
            this._dragDropHelper.dispose();
        }
        this._async.dispose();
    };
    DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._notifyColumnsResized();
        var doc = Object(dom["a" /* getDocumentEx */])(this.context);
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.items !== prevProps.items &&
            this.props.items.length > 0 &&
            this.state.focusedItemIndex !== -1 &&
            !Object(elementContains["a" /* elementContains */])(this._root.current, doc === null || doc === void 0 ? void 0 : doc.activeElement, false)) {
            // Item set has changed and previously-focused item is gone.
            // Set focus to item at index of previously-focused item if it is in range,
            // else set focus to the last item.
            var index = this.state.focusedItemIndex < this.props.items.length
                ? this.state.focusedItemIndex
                : this.props.items.length - 1;
            var item = this.props.items[index];
            var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row);
            }
            else {
                this._initialFocusedIndex = index;
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsListBase.prototype.render = function () {
        return (react["createElement"](DetailsListInner, Object(tslib_es6["a" /* __assign */])({}, this.props, this.state, { selection: this._selection, dragDropHelper: this._dragDropHelper, rootRef: this._root, listRef: this._list, groupedListRef: this._groupedList, focusZoneRef: this._focusZone, headerRef: this._header, selectionZoneRef: this._selectionZone, onGroupExpandStateChanged: this._onGroupExpandStateChanged, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onRowDidMount: this._onRowDidMount, onRowWillUnmount: this._onRowWillUnmount, onColumnResized: this._onColumnResized, onColumnAutoResized: this._onColumnAutoResized, onToggleCollapse: this._onToggleCollapse, onActiveRowChanged: this._onActiveRowChanged, onBlur: this._onBlur, onRenderDefaultRow: this._onRenderRow })));
    };
    DetailsListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            this._setFocusToRow(row);
            delete this._initialFocusedIndex;
        }
    };
    DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._selectionZone.current) {
            this._selectionZone.current.ignoreNextFocus();
        }
        this._async.setTimeout(function () {
            row.focus(forceIntoFirstElement);
        }, 0);
    };
    DetailsListBase.prototype._forceListUpdates = function () {
        if (this._groupedList.current) {
            this._groupedList.current.forceUpdate();
        }
        if (this._list.current) {
            this._list.current.forceUpdate();
        }
    };
    DetailsListBase.prototype._notifyColumnsResized = function () {
        this.state.adjustedColumns.forEach(function (column) {
            if (column.onColumnResize) {
                column.onColumnResize(column.currentWidth);
            }
        });
    };
    DetailsListBase.prototype._adjustColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var adjustedColumns = this._getAdjustedColumns(newProps, previousState, forceUpdate, resizingColumnIndex);
        var viewport = this.props.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, previousState), { adjustedColumns: adjustedColumns, lastWidth: viewportWidth });
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsListBase.prototype._getAdjustedColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var _this = this;
        var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode, viewport = newProps.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        var newColumns = newProps.columns;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = previousState ? previousState.lastWidth : -1;
        var lastSelectionMode = previousState ? previousState.lastSelectionMode : undefined;
        if (!forceUpdate &&
            lastWidth === viewportWidth &&
            lastSelectionMode === selectionMode &&
            (!columns || newColumns === columns)) {
            return newColumns || [];
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === DetailsList_types["e" /* DetailsListLayoutMode */].fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns, viewportWidth, newProps);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps);
            adjustedColumns.forEach(function (column) {
                _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
            });
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsListBase.prototype._getFixedColumns = function (newColumns, viewportWidth, props) {
        var _a, _b;
        var _this = this;
        var selectionMode = (_a = this.props, _b = _a.selectionMode, _b === void 0 ? this._selection.mode : _b), checkboxVisibility = _a.checkboxVisibility, flexMargin = _a.flexMargin, skipViewportMeasures = _a.skipViewportMeasures;
        var remainingWidth = viewportWidth - (flexMargin || 0);
        var sumProportionalWidth = 0;
        newColumns.forEach(function (col) {
            if (skipViewportMeasures || !col.flexGrow) {
                remainingWidth -= col.maxWidth || col.minWidth || MIN_COLUMN_WIDTH;
            }
            else {
                remainingWidth -= col.minWidth || MIN_COLUMN_WIDTH;
                sumProportionalWidth += col.flexGrow;
            }
            remainingWidth -= getPaddedWidth(col, props, true);
        });
        var rowCheckWidth = selectionMode !== Selection_types["c" /* SelectionMode */].none && checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden ? DetailsRowCheck_styles["a" /* CHECK_CELL_WIDTH */] : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * GroupSpacer["b" /* SPACER_WIDTH */];
        remainingWidth -= rowCheckWidth + groupExpandWidth;
        var widthFraction = remainingWidth / sumProportionalWidth;
        // Shrinks proportional columns to their max width and adds the remaining width to distribute to other columns.
        if (!skipViewportMeasures) {
            newColumns.forEach(function (column) {
                var newColumn = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, column), _this._columnOverrides[column.key]);
                if (newColumn.flexGrow && newColumn.maxWidth) {
                    var fullWidth = newColumn.flexGrow * widthFraction + newColumn.minWidth;
                    var shrinkWidth = fullWidth - newColumn.maxWidth;
                    if (shrinkWidth > 0) {
                        remainingWidth += shrinkWidth;
                        sumProportionalWidth -= (shrinkWidth / (fullWidth - newColumn.minWidth)) * newColumn.flexGrow;
                    }
                }
            });
        }
        widthFraction = remainingWidth > 0 ? remainingWidth / sumProportionalWidth : 0;
        return newColumns.map(function (column) {
            var newColumn = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, column), _this._columnOverrides[column.key]);
            // Delay computation until viewport width is available.
            if (!skipViewportMeasures && newColumn.flexGrow && remainingWidth <= 0 && viewportWidth === 0) {
                return newColumn;
            }
            if (!newColumn.calculatedWidth) {
                if (!skipViewportMeasures && newColumn.flexGrow) {
                    // Assigns the proportion of the remaining extra width after all columns have met minimum widths.
                    newColumn.calculatedWidth = newColumn.minWidth + newColumn.flexGrow * widthFraction;
                    newColumn.calculatedWidth = Math.min(newColumn.calculatedWidth, newColumn.maxWidth || Number.MAX_VALUE);
                }
                else {
                    newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
                }
            }
            return newColumn;
        });
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props) {
        var _a;
        var _this = this;
        var selectionMode = (_a = props.selectionMode, _a === void 0 ? this._selection.mode : _a), checkboxVisibility = props.checkboxVisibility, skipViewportMeasures = props.skipViewportMeasures;
        var rowCheckWidth = selectionMode !== Selection_types["c" /* SelectionMode */].none && checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden ? DetailsRowCheck_styles["a" /* CHECK_CELL_WIDTH */] : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * GroupSpacer["b" /* SPACER_WIDTH */];
        var totalWidth = 0; // offset because we have one less inner padding.
        var minimumWidth = 0;
        var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var baseColumn = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, column), { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH });
            var newColumn = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, baseColumn), _this._columnOverrides[column.key]);
            // eslint-disable-next-line deprecation/deprecation
            if (!(baseColumn.isCollapsible || baseColumn.isCollapsable)) {
                minimumWidth += getPaddedWidth(baseColumn, props);
            }
            totalWidth += getPaddedWidth(newColumn, props);
            return newColumn;
        });
        if (skipViewportMeasures) {
            return adjustedColumns;
        }
        var lastIndex = adjustedColumns.length - 1;
        // Shrink or remove collapsable columns.
        while (lastIndex >= 0 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
            var overflowWidth = totalWidth - availableWidth;
            // eslint-disable-next-line deprecation/deprecation
            if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
                var originalWidth = column.calculatedWidth;
                if (minimumWidth < availableWidth) {
                    // Only adjust in cases where all the columns fit within the viewport
                    column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                }
                totalWidth -= originalWidth - column.calculatedWidth;
            }
            else {
                totalWidth -= getPaddedWidth(column, props);
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var isLast = i === adjustedColumns.length - 1;
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth && !isLast) {
                continue;
            }
            var spaceLeft = availableWidth - totalWidth;
            var increment = void 0;
            if (isLast) {
                increment = spaceLeft;
            }
            else {
                var maxWidth = column.maxWidth;
                var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        return adjustedColumns;
    };
    DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._getColumnOverride(column.key);
        overrides.calculatedWidth = newCalculatedWidth;
        overrides.currentWidth = newCalculatedWidth;
    };
    DetailsListBase.prototype._getColumnOverride = function (key) {
        return (this._columnOverrides[key] = this._columnOverrides[key] || {});
    };
    DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsListBase.defaultProps = {
        layoutMode: DetailsList_types["e" /* DetailsListLayoutMode */].justified,
        selectionMode: Selection_types["c" /* SelectionMode */].multiple,
        constrainMode: DetailsList_types["d" /* ConstrainMode */].horizontalConstrained,
        checkboxVisibility: DetailsList_types["a" /* CheckboxVisibility */].onHover,
        isHeaderVisible: true,
        compact: false,
        useFastIcons: true,
    };
    DetailsListBase.contextType = WindowProvider["a" /* WindowContext */];
    DetailsListBase = Object(tslib_es6["b" /* __decorate */])([
        withViewport
    ], DetailsListBase);
    return DetailsListBase;
}(react["Component"]));
function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline, columnActionsMode) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsible: !!columns.length,
                    isMultiline: isMultiline === undefined ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: columnActionsMode !== null && columnActionsMode !== void 0 ? columnActionsMode : DetailsList_types["b" /* ColumnActionsMode */].clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName,
                });
            }
        }
    }
    return columns;
}
function getPaddedWidth(column, props, paddingOnly) {
    var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _a;
    return ((paddingOnly ? 0 : column.calculatedWidth) +
        cellStyleProps.cellLeftPadding +
        cellStyleProps.cellRightPadding +
        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
}
function getGroupNestingDepth(groups) {
    var level = 0;
    var groupsInLevel = groups;
    while (groupsInLevel && groupsInLevel.length > 0) {
        level++;
        groupsInLevel = groupsInLevel[0].children;
    }
    return level;
}
function useGroupedDetailsListIndexMap(groups) {
    return react["useMemo"](function () {
        var indexMap = {};
        if (groups) {
            var rowCount = 1;
            var numGroupHeaders = 1;
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var group = groups_1[_i];
                var key = group.key;
                indexMap[key] = { numOfGroupHeadersBeforeItem: numGroupHeaders, totalRowCount: rowCount };
                numGroupHeaders++;
                rowCount += group.count + 1;
            }
        }
        return indexMap;
    }, [groups]);
}
//# sourceMappingURL=DetailsList.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.styles.js

var DetailsList_styles_GlobalClassNames = {
    root: 'ms-DetailsList',
    compact: 'ms-DetailsList--Compact',
    contentWrapper: 'ms-DetailsList-contentWrapper',
    headerWrapper: 'ms-DetailsList-headerWrapper',
    isFixed: 'is-fixed',
    isHorizontalConstrained: 'is-horizontalConstrained',
    listCell: 'ms-List-cell',
};
var getDetailsListStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
    var semanticColors = theme.semanticColors;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(DetailsList_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                color: semanticColors.listText,
                selectors: (_a = {},
                    _a["& .".concat(classNames.listCell)] = {
                        minHeight: 38,
                        wordBreak: 'break-word',
                    },
                    _a),
            },
            isFixed && classNames.isFixed,
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b[".".concat(classNames.listCell)] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            isHorizontalConstrained && [
                classNames.isHorizontalConstrained,
                {
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch',
                },
            ],
            className,
        ],
        focusZone: [
            {
                display: 'inline-block',
                minWidth: '100%',
                minHeight: 1,
            },
        ],
        headerWrapper: classNames.headerWrapper,
        contentWrapper: classNames.contentWrapper,
    };
};
//# sourceMappingURL=DetailsList.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.js



var DetailsList = Object(styled["a" /* styled */])(DetailsList_base_DetailsListBase, getDetailsListStyles, undefined, {
    scope: 'DetailsList',
});
//# sourceMappingURL=DetailsList.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.js + 2 modules
var Shimmer = __webpack_require__("51aq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/ShimmerElementsGroup/ShimmerElementsGroup.js + 11 modules
var ShimmerElementsGroup = __webpack_require__("NMIT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Shimmer/Shimmer.types.js
var Shimmer_types = __webpack_require__("VOGN");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.base.js








var ShimmeredDetailsList_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var SHIMMER_INITIAL_ITEMS = 10;
var DEFAULT_SHIMMER_HEIGHT = 7;
var SHIMMER_LINE_VS_CELL_WIDTH_RATIO = 0.95;
var ShimmeredDetailsList_base_ShimmeredDetailsListBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ShimmeredDetailsListBase, _super);
    function ShimmeredDetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderShimmerPlaceholder = function (index, rowProps) {
            var onRenderCustomPlaceholder = _this.props.onRenderCustomPlaceholder;
            var placeholderElements = onRenderCustomPlaceholder
                ? onRenderCustomPlaceholder(rowProps, index, _this._renderDefaultShimmerPlaceholder)
                : _this._renderDefaultShimmerPlaceholder(rowProps);
            return react["createElement"](Shimmer["a" /* Shimmer */], { customElementsGroup: placeholderElements });
        };
        _this._renderDefaultShimmerPlaceholder = function (rowProps) {
            var columns = rowProps.columns, compact = rowProps.compact, selectionMode = rowProps.selectionMode, checkboxVisibility = rowProps.checkboxVisibility, _a = rowProps.cellStyleProps, cellStyleProps = _a === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _a;
            var rowHeight = DetailsRow_styles["b" /* DEFAULT_ROW_HEIGHTS */].rowHeight, compactRowHeight = DetailsRow_styles["b" /* DEFAULT_ROW_HEIGHTS */].compactRowHeight;
            // 1px to take into account the border-bottom of DetailsRow.
            var gapHeight = compact ? compactRowHeight : rowHeight + 1;
            var shimmerElementsRow = [];
            var showCheckbox = selectionMode !== Selection_types["c" /* SelectionMode */].none && checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden;
            if (showCheckbox) {
                shimmerElementsRow.push(react["createElement"](ShimmerElementsGroup["a" /* ShimmerElementsGroup */], { key: 'checkboxGap', shimmerElements: [{ type: Shimmer_types["a" /* ShimmerElementType */].gap, width: '40px', height: gapHeight }] }));
            }
            columns.forEach(function (column, columnIdx) {
                var shimmerElements = [];
                var groupWidth = cellStyleProps.cellLeftPadding +
                    cellStyleProps.cellRightPadding +
                    column.calculatedWidth +
                    (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
                shimmerElements.push({
                    type: Shimmer_types["a" /* ShimmerElementType */].gap,
                    width: cellStyleProps.cellLeftPadding,
                    height: gapHeight,
                });
                if (column.isIconOnly) {
                    shimmerElements.push({
                        type: Shimmer_types["a" /* ShimmerElementType */].line,
                        width: column.calculatedWidth,
                        height: column.calculatedWidth,
                    });
                    shimmerElements.push({
                        type: Shimmer_types["a" /* ShimmerElementType */].gap,
                        width: cellStyleProps.cellRightPadding,
                        height: gapHeight,
                    });
                }
                else {
                    shimmerElements.push({
                        type: Shimmer_types["a" /* ShimmerElementType */].line,
                        width: column.calculatedWidth * SHIMMER_LINE_VS_CELL_WIDTH_RATIO,
                        height: DEFAULT_SHIMMER_HEIGHT,
                    });
                    shimmerElements.push({
                        type: Shimmer_types["a" /* ShimmerElementType */].gap,
                        width: cellStyleProps.cellRightPadding +
                            (column.calculatedWidth - column.calculatedWidth * SHIMMER_LINE_VS_CELL_WIDTH_RATIO) +
                            (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                        height: gapHeight,
                    });
                }
                shimmerElementsRow.push(react["createElement"](ShimmerElementsGroup["a" /* ShimmerElementsGroup */], { key: columnIdx, width: "".concat(groupWidth, "px"), shimmerElements: shimmerElements }));
            });
            // When resizing the window from narrow to wider, we need to cover the exposed Shimmer wave
            // until the column resizing logic is done.
            shimmerElementsRow.push(react["createElement"](ShimmerElementsGroup["a" /* ShimmerElementsGroup */], { key: 'endGap', width: '100%', shimmerElements: [{ type: Shimmer_types["a" /* ShimmerElementType */].gap, width: '100%', height: gapHeight }] }));
            return react["createElement"]("div", { style: { display: 'flex' } }, shimmerElementsRow);
        };
        _this._shimmerItems = props.shimmerLines ? new Array(props.shimmerLines) : new Array(SHIMMER_INITIAL_ITEMS);
        return _this;
    }
    ShimmeredDetailsListBase.prototype.render = function () {
        var _a = this.props, detailsListStyles = _a.detailsListStyles, enableShimmer = _a.enableShimmer, items = _a.items, listProps = _a.listProps, onRenderCustomPlaceholder = _a.onRenderCustomPlaceholder, removeFadingOverlay = _a.removeFadingOverlay, shimmerLines = _a.shimmerLines, styles = _a.styles, theme = _a.theme, ariaLabelForGrid = _a.ariaLabelForGrid, ariaLabelForShimmer = _a.ariaLabelForShimmer, restProps = Object(tslib_es6["e" /* __rest */])(_a, ["detailsListStyles", "enableShimmer", "items", "listProps", "onRenderCustomPlaceholder", "removeFadingOverlay", "shimmerLines", "styles", "theme", "ariaLabelForGrid", "ariaLabelForShimmer"]);
        var listClassName = listProps && listProps.className;
        this._classNames = ShimmeredDetailsList_base_getClassNames(styles, {
            theme: theme,
        });
        var newListProps = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, listProps), { 
            // Adds to the optional listProp className a fading out overlay className only when `enableShimmer` toggled on
            // and the overlay is not disabled by `removeFadingOverlay` prop.
            className: enableShimmer && !removeFadingOverlay ? Object(css["a" /* css */])(this._classNames.root, listClassName) : listClassName });
        return (react["createElement"](DetailsList, Object(tslib_es6["a" /* __assign */])({}, restProps, { styles: detailsListStyles, items: enableShimmer ? this._shimmerItems : items, isPlaceholderData: enableShimmer, ariaLabelForGrid: (enableShimmer && ariaLabelForShimmer) || ariaLabelForGrid, onRenderMissingItem: this._onRenderShimmerPlaceholder, listProps: newListProps })));
    };
    return ShimmeredDetailsListBase;
}(react["Component"]));

//# sourceMappingURL=ShimmeredDetailsList.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.styles.js
var getShimmeredDetailsListStyles = function (props) {
    var theme = props.theme;
    var palette = theme.palette;
    return {
        root: {
            position: 'relative',
            selectors: {
                ':after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    // eslint-disable-next-line @fluentui/max-len
                    backgroundImage: "linear-gradient(to bottom, transparent 30%, ".concat(palette.whiteTranslucent40, " 65%,").concat(palette.white, " 100%)"),
                },
            },
        },
    };
};
//# sourceMappingURL=ShimmeredDetailsList.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js



var ShimmeredDetailsList = Object(styled["a" /* styled */])(ShimmeredDetailsList_base_ShimmeredDetailsListBase, getShimmeredDetailsListStyles, undefined, { scope: 'ShimmeredDetailsList' });
//# sourceMappingURL=ShimmeredDetailsList.js.map

/***/ }),

/***/ "Pn0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DetailsHeader; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/rtl.js
var rtl = __webpack_require__("Ge+E");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/KeyCodes.js
var KeyCodes = __webpack_require__("6ztV");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js
var DetailsList_types = __webpack_require__("hGA5");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/FontIcon.js
var FontIcon = __webpack_require__("KIfy");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Icon/Icon.js + 2 modules
var Icon = __webpack_require__("YGsJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Layer/Layer.js + 6 modules
var Layer = __webpack_require__("TG3e");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupSpacer.js
var GroupSpacer = __webpack_require__("/Xe4");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupedList.types.js
/**
 * {@docCategory GroupedList}
 */
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));
//# sourceMappingURL=GroupedList.types.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRowCheck.js
var DetailsRowCheck = __webpack_require__("atvm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js
var Selection_types = __webpack_require__("Imro");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/utilities/dragdrop/DragDropHelper.js
var DragDropHelper = __webpack_require__("qgKT");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/Async.js
var Async = __webpack_require__("zgRQ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.styles.js
var DetailsRow_styles = __webpack_require__("S6bb");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsColumn.base.js






var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var TRANSITION_DURATION_DRAG = 200; // ms
var TRANSITION_DURATION_DROP = 1500; // ms
var CLASSNAME_ADD_INTERVAL = 20; // ms
var defaultOnRenderHeader = function (classNames) {
    return function (props) {
        if (!props) {
            return null;
        }
        if (props.column.isIconOnly) {
            return react["createElement"]("span", { className: classNames.accessibleLabel }, props.column.name);
        }
        return react["createElement"](react["Fragment"], null, props.column.name);
    };
};
/**
 * Component for rendering columns in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsColumn_base_DetailsColumnBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DetailsColumnBase, _super);
    function DetailsColumnBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react["createRef"]();
        _this._tooltipRef = react["createRef"]();
        _this._onRenderFilterIcon = function (classNames) {
            return function (props) {
                var columnProps = props.columnProps, iconProps = Object(tslib_es6["e" /* __rest */])(props, ["columnProps"]);
                var IconComponent = (columnProps === null || columnProps === void 0 ? void 0 : columnProps.useFastIcons) ? FontIcon["a" /* FontIcon */] : Icon["a" /* Icon */];
                return react["createElement"](IconComponent, Object(tslib_es6["a" /* __assign */])({}, iconProps));
            };
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        _this._onColumnClick = function (ev) {
            var _a = _this.props, onColumnClick = _a.onColumnClick, column = _a.column;
            if (column.columnActionsMode === DetailsList_types["b" /* ColumnActionsMode */].disabled) {
                return;
            }
            if (column.onColumnClick) {
                column.onColumnClick(ev, column);
            }
            if (onColumnClick) {
                onColumnClick(ev, column);
            }
        };
        _this._onColumnKeyDown = function (ev) {
            var _a = _this.props, onColumnKeyDown = _a.onColumnKeyDown, column = _a.column;
            if (column.onColumnKeyDown) {
                column.onColumnKeyDown(ev, column);
            }
            if (onColumnKeyDown) {
                onColumnKeyDown(ev, column);
            }
        };
        _this._onColumnBlur = function () {
            _this._tooltipRef.current && _this._tooltipRef.current.dismiss();
        };
        _this._onColumnFocus = function () {
            _this._tooltipRef.current && _this._tooltipRef.current.show();
        };
        _this._onDragStart = function (item, itemIndex, selectedItems, event) {
            var classNames = _this._classNames;
            if (itemIndex) {
                _this._updateHeaderDragInfo(itemIndex);
                _this._root.current.classList.add(classNames.borderWhileDragging);
                _this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderWhileDragging);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
        };
        _this._onDragEnd = function (item, event) {
            var classNames = _this._classNames;
            if (event) {
                _this._updateHeaderDragInfo(-1, event);
            }
            _this._root.current.classList.remove(classNames.borderWhileDragging);
            _this._root.current.classList.remove(classNames.noBorderWhileDragging);
        };
        _this._updateHeaderDragInfo = function (itemIndex, event) {
            /* eslint-disable deprecation/deprecation */
            if (_this.props.setDraggedItemIndex) {
                _this.props.setDraggedItemIndex(itemIndex);
            }
            /* eslint-enable deprecation/deprecation */
            if (_this.props.updateDragInfo) {
                _this.props.updateDragInfo({ itemIndex: itemIndex }, event);
            }
        };
        _this._onColumnContextMenu = function (ev) {
            var _a = _this.props, onColumnContextMenu = _a.onColumnContextMenu, column = _a.column;
            if (column.onColumnContextMenu) {
                column.onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
            if (onColumnContextMenu) {
                onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var isDraggable = _this.props.isDraggable;
            // Ignore anything except the primary button.
            if (isDraggable && ev.button === MOUSEDOWN_PRIMARY_BUTTON) {
                ev.stopPropagation();
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._async = new Async["a" /* Async */](_this);
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        return _this;
    }
    DetailsColumnBase.prototype.render = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId, isDraggable = _a.isDraggable, styles = _a.styles, theme = _a.theme, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _b, _c = _a.useFastIcons, useFastIcons = _c === void 0 ? true : _c;
        var _d = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d;
        this._classNames = getClassNames(styles, {
            theme: theme,
            headerClassName: column.headerClassName,
            iconClassName: column.iconClassName,
            isActionable: column.columnActionsMode !== DetailsList_types["b" /* ColumnActionsMode */].disabled,
            isEmpty: !column.name,
            isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
            isPadded: column.isPadded,
            isIconOnly: column.isIconOnly,
            cellStyleProps: cellStyleProps,
            transitionDurationDrag: TRANSITION_DURATION_DRAG,
            transitionDurationDrop: TRANSITION_DURATION_DROP,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? FontIcon["a" /* FontIcon */] : Icon["a" /* Icon */];
        var onRenderFilterIcon = column.onRenderFilterIcon
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(column.onRenderFilterIcon, this._onRenderFilterIcon(this._classNames))
            : this._onRenderFilterIcon(this._classNames);
        var onRenderHeader = column.onRenderHeader
            ? Object(composeRenderFunction["a" /* composeRenderFunction */])(column.onRenderHeader, defaultOnRenderHeader(this._classNames))
            : defaultOnRenderHeader(this._classNames);
        var hasInnerButton = column.columnActionsMode !== DetailsList_types["b" /* ColumnActionsMode */].disabled &&
            (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined);
        // use aria-describedby to point to the tooltip if the tooltip is not using the ariaLabel string
        var shouldAssociateTooltip = this.props.onRenderColumnHeaderTooltip
            ? !column.ariaLabel
            : this._hasAccessibleDescription();
        var accNameDescription = {
            'aria-label': column.ariaLabel ? column.ariaLabel : column.isIconOnly ? column.name : undefined,
            'aria-labelledby': column.ariaLabel || column.isIconOnly ? undefined : "".concat(parentId, "-").concat(column.key, "-name"),
            'aria-describedby': shouldAssociateTooltip ? "".concat(parentId, "-").concat(column.key, "-tooltip") : undefined,
        };
        return (react["createElement"](react["Fragment"], null,
            react["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ key: column.key, ref: this._root, role: 'columnheader' }, (!hasInnerButton && accNameDescription), { "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "data-is-focusable": !hasInnerButton && column.columnActionsMode !== DetailsList_types["b" /* ColumnActionsMode */].disabled ? 'true' : undefined, className: classNames.root, "data-is-draggable": isDraggable, draggable: isDraggable, style: {
                    width: (column.calculatedWidth || 0) +
                        cellStyleProps.cellLeftPadding +
                        cellStyleProps.cellRightPadding +
                        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                }, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key, onBlur: this._onColumnBlur, onFocus: this._onColumnFocus }),
                isDraggable && (react["createElement"](IconComponent, { iconName: "GripperBarVertical", className: classNames.gripperBarVerticalStyle })),
                onRenderColumnHeaderTooltip({
                    hostClassName: classNames.cellTooltip,
                    id: "".concat(parentId, "-").concat(column.key, "-tooltip"),
                    setAriaDescribedBy: false,
                    column: column,
                    componentRef: this._tooltipRef,
                    content: column.columnActionsMode !== DetailsList_types["b" /* ColumnActionsMode */].disabled ? column.ariaLabel : '',
                    children: (react["createElement"]("span", Object(tslib_es6["a" /* __assign */])({ id: "".concat(parentId, "-").concat(column.key), className: classNames.cellTitle, "data-is-focusable": hasInnerButton && column.columnActionsMode !== DetailsList_types["b" /* ColumnActionsMode */].disabled ? 'true' : undefined, role: hasInnerButton ? 'button' : undefined }, (hasInnerButton && accNameDescription), { onContextMenu: this._onColumnContextMenu, onClick: this._onColumnClick, onKeyDown: this._onColumnKeyDown, "aria-haspopup": column.columnActionsMode === DetailsList_types["b" /* ColumnActionsMode */].hasDropdown ? 'menu' : undefined, "aria-expanded": column.columnActionsMode === DetailsList_types["b" /* ColumnActionsMode */].hasDropdown ? !!column.isMenuOpen : undefined }),
                        react["createElement"]("span", { id: "".concat(parentId, "-").concat(column.key, "-name"), className: classNames.cellName },
                            (column.iconName || column.iconClassName) && (react["createElement"](IconComponent, { className: classNames.iconClassName, iconName: column.iconName })),
                            onRenderHeader(this.props)),
                        column.isFiltered && react["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "Filter" }),
                        (column.isSorted || column.showSortIconWhenUnsorted) && (react["createElement"](IconComponent, { className: classNames.sortIcon, iconName: column.isSorted ? (column.isSortedDescending ? 'SortDown' : 'SortUp') : 'Sort' })),
                        column.isGrouped && react["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "GroupedDescending" }),
                        column.columnActionsMode === DetailsList_types["b" /* ColumnActionsMode */].hasDropdown &&
                            !column.isIconOnly &&
                            onRenderFilterIcon({
                                'aria-hidden': true,
                                columnProps: this.props,
                                className: classNames.filterChevron,
                                iconName: 'ChevronDown',
                            }))),
                }, this._onRenderColumnHeaderTooltip)),
            !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleDescription() : null));
    };
    DetailsColumnBase.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        var classNames = this._classNames;
        if (this.props.isDropped) {
            if (this._root.current) {
                this._root.current.classList.add(classNames.borderAfterDropping);
                this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderAfterDropping);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.remove(classNames.borderAfterDropping);
                    _this._root.current.classList.remove(classNames.noBorderAfterDropping);
                }
            }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._async.dispose();
        this._events.dispose();
    };
    DetailsColumnBase.prototype.componentDidUpdate = function () {
        if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        if (this._dragDropSubscription && !this.props.isDraggable) {
            this._dragDropSubscription.dispose();
            this._events.off(this._root.current, 'mousedown');
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
        var _this = this;
        var columnIndex = this.props.columnIndex;
        var options = {
            selectionIndex: columnIndex,
            context: { data: columnIndex, index: columnIndex },
            canDrag: function () { return _this.props.isDraggable; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd,
        };
        return options;
    };
    DetailsColumnBase.prototype._hasAccessibleDescription = function () {
        var column = this.props.column;
        return !!(column.filterAriaLabel ||
            column.sortAscendingAriaLabel ||
            column.sortDescendingAriaLabel ||
            column.groupAriaLabel ||
            column.sortableAriaLabel);
    };
    DetailsColumnBase.prototype._renderAccessibleDescription = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId;
        var classNames = this._classNames;
        return this._hasAccessibleDescription() && !this.props.onRenderColumnHeaderTooltip ? (react["createElement"]("label", { key: "".concat(column.key, "_label"), id: "".concat(parentId, "-").concat(column.key, "-tooltip"), className: classNames.accessibleLabel, hidden: true },
            (column.isFiltered && column.filterAriaLabel) || null,
            ((column.isSorted || column.showSortIconWhenUnsorted) &&
                (column.isSorted
                    ? column.isSortedDescending
                        ? column.sortDescendingAriaLabel
                        : column.sortAscendingAriaLabel
                    : column.sortableAriaLabel)) ||
                null,
            (column.isGrouped && column.groupAriaLabel) || null)) : null;
    };
    DetailsColumnBase.prototype._addDragDropHandling = function () {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
        // We need to use native on this to prevent MarqueeSelection from handling the event before us.
        this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
    };
    return DetailsColumnBase;
}(react["Component"]));

//# sourceMappingURL=DetailsColumn.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/style-utilities/lib/index.js + 14 modules
var lib = __webpack_require__("ogYq");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.styles.js
var DetailsHeader_styles = __webpack_require__("oJNf");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsColumn.styles.js




var GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
    nearIcon: 'ms-DetailsColumn-nearIcon',
};
var getDetailsColumnStyles = function (props) {
    var _a;
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _b = props.cellStyleProps, cellStyleProps = _b === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _b, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(lib["v" /* getGlobalClassNames */])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralSecondary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8,
    };
    var borderWhileDragging = {
        outline: "1px solid ".concat(palette.themePrimary),
    };
    var borderAfterDragOrDrop = {
        outlineColor: 'transparent',
    };
    return {
        root: [
            Object(DetailsHeader_styles["b" /* getCellStyles */])(props),
            fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered,
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed,
                        },
                    },
                },
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip',
                },
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block',
                    },
                },
            },
            headerClassName,
        ],
        gripperBarVerticalStyle: {
            display: 'none',
            position: 'absolute',
            textAlign: 'left',
            color: palette.neutralTertiary,
            left: 1,
        },
        nearIcon: [classNames.nearIcon, nearIconStyle],
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1,
            },
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1,
            },
            iconClassName,
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 6,
                verticalAlign: 'middle',
                fontSize: fonts.small.fontSize,
            },
        ],
        cellTitle: [
            classNames.cellTitle,
            Object(lib["u" /* getFocusStyle */])(theme),
            Object(tslib_es6["a" /* __assign */])({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 ".concat(cellStyleProps.cellRightPadding, "px 0 ").concat(cellStyleProps.cellLeftPadding, "px") }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse',
                }
                : {})),
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: lib["e" /* FontWeights */].semibold,
                fontSize: fonts.medium.fontSize,
            },
            isIconOnly && {
                selectors: (_a = {},
                    _a[".".concat(classNames.nearIcon)] = {
                        paddingLeft: 0,
                    },
                    _a),
            },
        ],
        cellTooltip: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        accessibleLabel: lib["C" /* hiddenContentStyle */],
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline ".concat(transitionDurationDrag, "ms ease") }],
        borderAfterDropping: borderWhileDragging,
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  ".concat(transitionDurationDrop, "ms ease") }],
    };
};
//# sourceMappingURL=DetailsColumn.styles.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsColumn.js



var DetailsColumn = Object(styled["a" /* styled */])(DetailsColumn_base_DetailsColumnBase, getDetailsColumnStyles, undefined, { scope: 'DetailsColumn' });
//# sourceMappingURL=DetailsColumn.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.types.js
var DetailsHeader_types = __webpack_require__("oxqj");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.base.js














var DetailsHeader_base_getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DetailsHeader_base_MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var NO_COLUMNS = [];
var DetailsHeader_base_DetailsHeaderBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DetailsHeaderBase, _super);
    function DetailsHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react["createRef"]();
        _this._rootComponent = react["createRef"]();
        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};
        _this._updateDroppingState = function (newValue, event) {
            if (_this._draggedColumnIndex >= 0 && event.type !== 'drop' && !newValue) {
                _this._resetDropHints();
            }
        };
        _this._onDragOver = function (item, event) {
            if (_this._draggedColumnIndex >= 0) {
                event.stopPropagation();
                _this._computeDropHintToBeShown(event.clientX);
            }
        };
        _this._onDrop = function (item, event) {
            // Safe to assume this is defined since we're handling a drop event
            var columnReorderProps = _this._getColumnReorderProps();
            // Target index will not get changed if draggeditem is after target item.
            if (_this._draggedColumnIndex >= 0 && event) {
                var targetIndex = _this._draggedColumnIndex > _this._currentDropHintIndex
                    ? _this._currentDropHintIndex
                    : _this._currentDropHintIndex - 1;
                var isValidDrop = _this._isValidCurrentDropHintIndex();
                event.stopPropagation();
                if (isValidDrop) {
                    _this._onDropIndexInfo.sourceIndex = _this._draggedColumnIndex;
                    _this._onDropIndexInfo.targetIndex = targetIndex;
                    if (columnReorderProps.onColumnDrop) {
                        var dragDropDetails = {
                            draggedIndex: _this._draggedColumnIndex,
                            targetIndex: targetIndex,
                        };
                        columnReorderProps.onColumnDrop(dragDropDetails);
                        /* eslint-disable deprecation/deprecation */
                    }
                    else if (columnReorderProps.handleColumnReorder) {
                        columnReorderProps.handleColumnReorder(_this._draggedColumnIndex, targetIndex);
                        /* eslint-enable deprecation/deprecation */
                    }
                }
            }
            _this._resetDropHints();
            _this._dropHintDetails = {};
            _this._draggedColumnIndex = -1;
        };
        _this._computeColumnIndexOffset = function (showCheckbox) {
            var hasGroupExpander = _this.props.groupNestingDepth && _this.props.groupNestingDepth > 0;
            var offset = 1;
            if (showCheckbox) {
                offset += 1;
            }
            if (hasGroupExpander) {
                offset += 1;
            }
            return offset;
        };
        _this._updateDragInfo = function (props, event) {
            // Safe to assume this is defined since we're handling a drag event
            var columnReorderProps = _this._getColumnReorderProps();
            var itemIndex = props.itemIndex;
            if (itemIndex >= 0) {
                // Column index is set based on the checkbox
                _this._draggedColumnIndex = itemIndex - _this._computeColumnIndexOffset(!_this._isCheckboxColumnHidden());
                _this._getDropHintPositions();
                if (columnReorderProps.onColumnDragStart) {
                    columnReorderProps.onColumnDragStart(true);
                }
            }
            else if (event && _this._draggedColumnIndex >= 0) {
                _this._resetDropHints();
                _this._draggedColumnIndex = -1;
                _this._dropHintDetails = {};
                if (columnReorderProps.onColumnDragEnd) {
                    var columnDragEndLocation = _this._isEventOnHeader(event);
                    columnReorderProps.onColumnDragEnd({ dropLocation: columnDragEndLocation }, event);
                }
            }
        };
        _this._getDropHintPositions = function () {
            var _a;
            var columns = (_a = _this.props.columns, _a === void 0 ? NO_COLUMNS : _a);
            // Safe to assume this is defined since we're handling a drag/drop event
            var columnReorderProps = _this._getColumnReorderProps();
            var prevX = 0;
            var prevMid = 0;
            var prevRef;
            var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
            var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
            for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
                if (_this._rootElement.current) {
                    var dropHintElement = _this._rootElement.current.querySelectorAll('#columnDropHint_' + i)[0];
                    if (dropHintElement) {
                        if (i === frozenColumnCountFromStart) {
                            prevX = dropHintElement.offsetLeft;
                            prevMid = dropHintElement.offsetLeft;
                            prevRef = dropHintElement;
                        }
                        else {
                            var newMid = (dropHintElement.offsetLeft + prevX) / 2;
                            _this._dropHintDetails[i - 1] = {
                                originX: prevX,
                                startX: prevMid,
                                endX: newMid,
                                dropHintElementRef: prevRef,
                            };
                            prevMid = newMid;
                            prevRef = dropHintElement;
                            prevX = dropHintElement.offsetLeft;
                            if (i === columns.length - frozenColumnCountFromEnd) {
                                _this._dropHintDetails[i] = {
                                    originX: prevX,
                                    startX: prevMid,
                                    endX: dropHintElement.offsetLeft,
                                    dropHintElementRef: prevRef,
                                };
                            }
                        }
                    }
                }
            }
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         */
        _this._computeDropHintToBeShown = function (clientX) {
            var _a;
            var isRtl = Object(rtl["a" /* getRTL */])(_this.props.theme);
            if (_this._rootElement.current) {
                var clientRect = _this._rootElement.current.getBoundingClientRect();
                var headerOriginX = clientRect.left;
                var eventXRelativePosition = clientX - headerOriginX;
                var currentDropHintIndex = _this._currentDropHintIndex;
                if (_this._isValidCurrentDropHintIndex()) {
                    if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
                        return;
                    }
                }
                var columns = (_a = _this.props.columns, _a === void 0 ? NO_COLUMNS : _a);
                // Safe to assume this is defined since we're handling a drag/drop event
                var columnReorderProps = _this._getColumnReorderProps();
                var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
                var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
                var currentIndex = frozenColumnCountFromStart;
                var lastValidColumn = columns.length - frozenColumnCountFromEnd;
                var indexToUpdate = -1;
                if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
                    indexToUpdate = currentIndex;
                }
                else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
                    indexToUpdate = lastValidColumn;
                }
                else if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
                        indexToUpdate = currentDropHintIndex + 1;
                    }
                    else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
                        indexToUpdate = currentDropHintIndex - 1;
                    }
                }
                if (indexToUpdate === -1) {
                    var startIndex = frozenColumnCountFromStart;
                    var endIndex = lastValidColumn;
                    while (startIndex < endIndex) {
                        var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                        if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
                            indexToUpdate = middleIndex;
                            break;
                        }
                        else if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            endIndex = middleIndex;
                        }
                        else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            startIndex = middleIndex;
                        }
                    }
                }
                if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
                    if (_this._isValidCurrentDropHintIndex()) {
                        _this._resetDropHints();
                    }
                }
                else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                    _this._resetDropHints();
                    _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');
                    _this._currentDropHintIndex = indexToUpdate;
                }
            }
        };
        _this._renderColumnSizer = function (_a) {
            var _b, _c;
            var columnIndex = _a.columnIndex;
            var columns = (_b = _this.props.columns, _b === void 0 ? NO_COLUMNS : _b);
            var column = columns[columnIndex];
            var columnResizeDetails = _this.state.columnResizeDetails;
            var classNames = _this._classNames;
            return column.isResizable ? (react["createElement"]("div", { key: "".concat(column.key, "_sizer"), "aria-hidden": true, role: "button", "data-is-focusable": false, onClick: _stopPropagation, "data-sizer-index": columnIndex, onBlur: _this._onSizerBlur, className: Object(css["a" /* css */])(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_c = {},
                    _c[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                    _c)), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex) })) : null;
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        /**
         * Called when the select all toggle is clicked.
         */
        _this._onSelectAllClicked = function () {
            var selection = _this.props.selection;
            if (selection) {
                selection.toggleAllSelected();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var _a;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            var columnIndex = Number(columnIndexAttr);
            var columns = (_a = _this.props.columns, _a === void 0 ? NO_COLUMNS : _a);
            if (columnIndexAttr === null || ev.button !== DetailsHeader_base_MOUSEDOWN_PRIMARY_BUTTON) {
                // Ignore anything except the primary button.
                return;
            }
            _this.setState({
                columnResizeDetails: {
                    columnIndex: columnIndex,
                    columnMinWidth: columns[columnIndex].calculatedWidth,
                    originX: ev.clientX,
                },
            });
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onRootMouseMove = function (ev) {
            var _a;
            var columnResizeDetails = (_a = _this.state, _a.columnResizeDetails), isSizing = _a.isSizing;
            if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
                _this.setState({ isSizing: true });
            }
        };
        _this._onRootKeyDown = function (ev) {
            var _a, _b, _c;
            var columnResizeDetails = (_a = _this.state, _a.columnResizeDetails), isSizing = _a.isSizing;
            var columns = (_b = _this.props, _c = _b.columns, _c === void 0 ? NO_COLUMNS : _c), onColumnResized = _b.onColumnResized;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            if (!columnIndexAttr || isSizing) {
                return;
            }
            var columnIndex = Number(columnIndexAttr);
            if (!columnResizeDetails) {
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === KeyCodes["a" /* KeyCodes */].enter) {
                    _this.setState({
                        columnResizeDetails: {
                            columnIndex: columnIndex,
                            columnMinWidth: columns[columnIndex].calculatedWidth,
                        },
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                var increment = void 0;
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === KeyCodes["a" /* KeyCodes */].enter) {
                    _this.setState({
                        columnResizeDetails: undefined,
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === KeyCodes["a" /* KeyCodes */].left) {
                    increment = Object(rtl["a" /* getRTL */])(_this.props.theme) ? 1 : -1;
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === KeyCodes["a" /* KeyCodes */].right) {
                    increment = Object(rtl["a" /* getRTL */])(_this.props.theme) ? -1 : 1;
                }
                if (increment) {
                    if (!ev.shiftKey) {
                        increment *= 10;
                    }
                    _this.setState({
                        columnResizeDetails: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, columnResizeDetails), { columnMinWidth: columnResizeDetails.columnMinWidth + increment }),
                    });
                    if (onColumnResized) {
                        onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * mouse move event handler in the header
         * it will set isSizing state to true when user clicked on the sizer and move the mouse.
         *
         * @param ev - mouse move event
         */
        _this._onSizerMouseMove = function (ev) {
            var _a, _b;
            var 
            // use buttons property here since ev.button in some edge case is not upding well during the move.
            // but firefox doesn't support it, so we set the default value when it is not defined.
            buttons = ev.buttons;
            var onColumnIsSizingChanged = (_a = _this.props, _a.onColumnIsSizingChanged), onColumnResized = _a.onColumnResized, columns = (_b = _a.columns, _b === void 0 ? NO_COLUMNS : _b);
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
                // cancel mouse down event and return early when the primary button is not pressed
                _this._onSizerMouseUp(ev);
                return;
            }
            if (ev.clientX !== columnResizeDetails.originX) {
                if (onColumnIsSizingChanged) {
                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
                }
            }
            if (onColumnResized) {
                var movement = ev.clientX - columnResizeDetails.originX;
                if (Object(rtl["a" /* getRTL */])(_this.props.theme)) {
                    movement = -movement;
                }
                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
            }
        };
        _this._onSizerBlur = function (ev) {
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (columnResizeDetails) {
                _this.setState({
                    columnResizeDetails: undefined,
                    isSizing: false,
                });
            }
        };
        /**
         * mouse up event handler in the header
         * clear the resize related state.
         * This is to ensure we can catch double click event
         *
         * @param ev - mouse up event
         */
        _this._onSizerMouseUp = function (ev) {
            var _a, _b;
            var columns = (_a = _this.props, _b = _a.columns, _b === void 0 ? NO_COLUMNS : _b), onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
            var columnResizeDetails = _this.state.columnResizeDetails;
            _this.setState({
                columnResizeDetails: undefined,
                isSizing: false,
            });
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
            }
        };
        _this._onToggleCollapseAll = function () {
            var onToggleCollapseAll = _this.props.onToggleCollapseAll;
            var newCollapsed = !_this.state.isAllCollapsed;
            _this.setState({
                isAllCollapsed: newCollapsed,
            });
            if (onToggleCollapseAll) {
                onToggleCollapseAll(newCollapsed);
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        _this.state = {
            columnResizeDetails: undefined,
            isAllCollapsed: _this.props.isAllCollapsed,
            isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected(),
        };
        _this._onDropIndexInfo = {
            sourceIndex: -1,
            targetIndex: -1,
        };
        _this._id = Object(getId["a" /* getId */])('header');
        _this._currentDropHintIndex = -1;
        // The drag drop handler won't do any work until subscribe() is called,
        // so always set it up for convenience
        _this._dragDropHelper = new DragDropHelper["a" /* DragDropHelper */]({
            selection: {
                getSelection: function () {
                    return;
                },
            },
            minimumPixelsForDrag: _this.props.minimumPixelsForDrag,
        });
        return _this;
    }
    DetailsHeaderBase.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        this._events.on(selection, Selection_types["a" /* SELECTION_CHANGE */], this._onSelectionChanged);
        // this._rootElement.current will be null in tests using react-test-renderer
        if (this._rootElement.current) {
            // We need to use native on this to prevent MarqueeSelection from handling the event before us.
            this._events.on(this._rootElement.current, 'mousedown', this._onRootMouseDown);
            this._events.on(this._rootElement.current, 'keydown', this._onRootKeyDown);
            if (this._getColumnReorderProps()) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
    };
    DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
        var _a, _b;
        if (this._getColumnReorderProps()) {
            if (!this._subscriptionObject && this._rootElement.current) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
        else if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
            var previousColumns = (_a = prevProps.columns, _a === void 0 ? NO_COLUMNS : _a);
            var columns = (_b = this.props.columns, _b === void 0 ? NO_COLUMNS : _b);
            if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
                this._onDropIndexInfo = {
                    sourceIndex: -1,
                    targetIndex: -1,
                };
            }
        }
        if (this.props.isAllCollapsed !== prevProps.isAllCollapsed) {
            this.setState({ isAllCollapsed: this.props.isAllCollapsed });
        }
    };
    DetailsHeaderBase.prototype.componentWillUnmount = function () {
        if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        this._dragDropHelper.dispose();
        this._events.dispose();
    };
    DetailsHeaderBase.prototype.render = function () {
        var _a, _b, _c, _d;
        var _this = this;
        var columns = (_a = this.props, _b = _a.columns, _b === void 0 ? NO_COLUMNS : _b), ariaLabel = _a.ariaLabel, ariaLabelForToggleAllGroupsButton = _a.ariaLabelForToggleAllGroupsButton, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, indentWidth = _a.indentWidth, onColumnClick = _a.onColumnClick, onColumnContextMenu = _a.onColumnContextMenu, onRenderColumnHeaderTooltip = (_c = _a.onRenderColumnHeaderTooltip, _c === void 0 ? this._onRenderColumnHeaderTooltip : _c), styles = _a.styles, selectionMode = _a.selectionMode, theme = _a.theme, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, groupNestingDepth = _a.groupNestingDepth, useFastIcons = _a.useFastIcons, checkboxVisibility = _a.checkboxVisibility, className = _a.className;
        var isAllSelected = (_d = this.state, _d.isAllSelected), columnResizeDetails = _d.columnResizeDetails, isSizing = _d.isSizing, isAllCollapsed = _d.isAllCollapsed;
        var showCheckbox = selectAllVisibility !== DetailsHeader_types["a" /* SelectAllVisibility */].none;
        var isCheckboxHidden = selectAllVisibility === DetailsHeader_types["a" /* SelectAllVisibility */].hidden;
        var isCheckboxAlwaysVisible = checkboxVisibility === DetailsList_types["a" /* CheckboxVisibility */].always;
        var columnReorderProps = this._getColumnReorderProps();
        var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart
            ? columnReorderProps.frozenColumnCountFromStart
            : 0;
        var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd
            ? columnReorderProps.frozenColumnCountFromEnd
            : 0;
        this._classNames = DetailsHeader_base_getClassNames(styles, {
            theme: theme,
            isAllSelected: isAllSelected,
            isSelectAllHidden: selectAllVisibility === DetailsHeader_types["a" /* SelectAllVisibility */].hidden,
            isResizingColumn: !!columnResizeDetails && isSizing,
            isSizing: isSizing,
            isAllCollapsed: isAllCollapsed,
            isCheckboxHidden: isCheckboxHidden,
            className: className,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? FontIcon["a" /* FontIcon */] : Icon["a" /* Icon */];
        var hasGroupExpander = groupNestingDepth > 0;
        var showGroupExpander = hasGroupExpander && this.props.collapseAllVisibility === CollapseAllVisibility.visible;
        var columnIndexOffset = this._computeColumnIndexOffset(showCheckbox);
        var isRTL = Object(rtl["a" /* getRTL */])(theme);
        return (react["createElement"](FocusZone["a" /* FocusZone */], { role: "row", "aria-label": ariaLabel, className: classNames.root, componentRef: this._rootComponent, elementRef: this._rootElement, onMouseMove: this._onRootMouseMove, "data-automationid": "DetailsHeader", direction: FocusZone_types["a" /* FocusZoneDirection */].horizontal },
            showCheckbox
                ? [
                    react["createElement"]("div", { key: "__checkbox", className: classNames.cellIsCheck, "aria-labelledby": "".concat(this._id, "-checkTooltip"), onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                        hostClassName: classNames.checkTooltip,
                        id: "".concat(this._id, "-checkTooltip"),
                        setAriaDescribedBy: false,
                        content: ariaLabelForSelectAllCheckbox,
                        children: (react["createElement"](DetailsRowCheck["a" /* DetailsRowCheck */], { id: "".concat(this._id, "-check"), "aria-label": selectionMode === Selection_types["c" /* SelectionMode */].multiple
                                ? ariaLabelForSelectAllCheckbox
                                : ariaLabelForSelectionColumn, "data-is-focusable": !isCheckboxHidden || undefined, isHeader: true, selected: isAllSelected, anySelected: false, canSelect: !isCheckboxHidden, className: classNames.check, onRenderDetailsCheckbox: onRenderDetailsCheckbox, useFastIcons: useFastIcons, isVisible: isCheckboxAlwaysVisible })),
                    }, this._onRenderColumnHeaderTooltip)),
                    !this.props.onRenderColumnHeaderTooltip ? (ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? (react["createElement"]("label", { key: "__checkboxLabel", id: "".concat(this._id, "-checkTooltip"), className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectAllCheckbox)) : ariaLabelForSelectionColumn && isCheckboxHidden ? (react["createElement"]("label", { key: "__checkboxLabel", id: "".concat(this._id, "-checkTooltip"), className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectionColumn)) : null) : null,
                ]
                : null,
            showGroupExpander ? (react["createElement"]("div", { className: classNames.cellIsGroupExpander, onClick: this._onToggleCollapseAll, "data-is-focusable": true, "aria-label": ariaLabelForToggleAllGroupsButton, "aria-expanded": !isAllCollapsed, role: "columnheader" },
                react["createElement"](IconComponent, { className: classNames.collapseButton, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' }),
                react["createElement"]("span", { className: classNames.accessibleLabel }, ariaLabelForToggleAllGroupsButton))) : hasGroupExpander ? (react["createElement"]("div", { className: classNames.cellIsGroupExpander, "data-is-focusable": false, role: "columnheader" })) : null,
            react["createElement"](GroupSpacer["a" /* GroupSpacer */], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                var _isDraggable = columnReorderProps
                    ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd
                    : false;
                return [
                    columnReorderProps &&
                        (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) &&
                        _this._renderDropHint(columnIndex),
                    react["createElement"](DetailsColumn, { column: column, styles: column.styles, key: column.key, columnIndex: columnIndexOffset + columnIndex, parentId: _this._id, isDraggable: _isDraggable, updateDragInfo: _this._updateDragInfo, dragDropHelper: _this._dragDropHelper, onColumnClick: onColumnClick, onColumnContextMenu: onColumnContextMenu, 
                        // Do not render tooltips by default, but allow for override via props.
                        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip, isDropped: _this._onDropIndexInfo.targetIndex === columnIndex, cellStyleProps: _this.props.cellStyleProps, useFastIcons: useFastIcons }),
                    _this._renderColumnDivider(columnIndex),
                ];
            }),
            columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length),
            isSizing && (react["createElement"](Layer["a" /* Layer */], null,
                react["createElement"]("div", { className: classNames.sizingOverlay, onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeaderBase.prototype.focus = function () {
        var _a;
        return !!((_a = this._rootComponent.current) === null || _a === void 0 ? void 0 : _a.focus());
    };
    /**
     * Gets column reorder props from this.props. If the calling code is part of setting up or
     * handling drag/drop events, it's safe to assume that this method's return value is defined
     * (because drag/drop handling will only be set up if reorder props are given).
     */
    DetailsHeaderBase.prototype._getColumnReorderProps = function () {
        var _a;
        var columnReorderOptions = (_a = this.props, _a.columnReorderOptions), columnReorderProps = _a.columnReorderProps;
        return columnReorderProps || (columnReorderOptions && Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, columnReorderOptions), { onColumnDragEnd: undefined }));
    };
    DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver,
        };
        return options;
    };
    DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
        var _a;
        var selectionMode = (_a = this.props, _a.selectionMode), checkboxVisibility = _a.checkboxVisibility;
        return selectionMode === Selection_types["c" /* SelectionMode */].none || checkboxVisibility === DetailsList_types["a" /* CheckboxVisibility */].hidden;
    };
    DetailsHeaderBase.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');
            this._currentDropHintIndex = -1;
        }
    };
    DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
        element.childNodes[1].style.display = displayProperty;
        element.childNodes[0].style.display = displayProperty;
    };
    DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
        if (this._rootElement.current) {
            var clientRect = this._rootElement.current.getBoundingClientRect();
            if (event.clientX > clientRect.left &&
                event.clientX < clientRect.right &&
                event.clientY > clientRect.top &&
                event.clientY < clientRect.bottom) {
                return DetailsList_types["c" /* ColumnDragEndLocation */].header;
            }
        }
    };
    DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
        var _a;
        var columns = (_a = this.props.columns, _a === void 0 ? NO_COLUMNS : _a);
        var column = columns[columnIndex];
        var onRenderDivider = column.onRenderDivider;
        return onRenderDivider
            ? onRenderDivider({ column: column, columnIndex: columnIndex }, this._renderColumnSizer)
            : this._renderColumnSizer({ column: column, columnIndex: columnIndex });
    };
    DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
        var classNames = this._classNames;
        var IconComponent = this.props.useFastIcons ? FontIcon["a" /* FontIcon */] : Icon["a" /* Icon */];
        return (react["createElement"]("div", { key: 'dropHintKey', className: classNames.dropHintStyle, id: "columnDropHint_".concat(dropHintIndex), "aria-hidden": true },
            react["createElement"]("div", { role: "presentation", key: "dropHintCircleKey", className: classNames.dropHintCaretStyle, "data-is-focusable": false, "data-sizer-index": dropHintIndex, "aria-hidden": true },
                react["createElement"](IconComponent, { iconName: 'CircleShapeSolid' })),
            react["createElement"]("div", { key: "dropHintLineKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintLineStyle })));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @param columnIndex - index of the column user double clicked
     * @param ev - mouse double click event
     */
    DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a, _b;
        var onColumnAutoResized = (_a = this.props, _a.onColumnAutoResized), columns = (_b = _a.columns, _b === void 0 ? NO_COLUMNS : _b);
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    DetailsHeaderBase.prototype._onSelectionChanged = function () {
        var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected,
            });
        }
    };
    DetailsHeaderBase.defaultProps = {
        selectAllVisibility: DetailsHeader_types["a" /* SelectAllVisibility */].visible,
        collapseAllVisibility: CollapseAllVisibility.visible,
        useFastIcons: true,
    };
    return DetailsHeaderBase;
}(react["Component"]));
function _liesBetween(rtl, target, left, right) {
    return rtl ? target <= left && target >= right : target >= left && target <= right;
}
function _isBefore(rtl, a, b) {
    return rtl ? a >= b : a <= b;
}
function _isAfter(rtl, a, b) {
    return rtl ? a <= b : a >= b;
}
function _stopPropagation(ev) {
    ev.stopPropagation();
}
//# sourceMappingURL=DetailsHeader.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsHeader.js



var DetailsHeader = Object(styled["a" /* styled */])(DetailsHeader_base_DetailsHeaderBase, DetailsHeader_styles["c" /* getDetailsHeaderStyles */], undefined, { scope: 'DetailsHeader' });
//# sourceMappingURL=DetailsHeader.js.map

/***/ }),

/***/ "S6bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DetailsRowGlobalClassNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_CELL_STYLE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_ROW_HEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDetailsRowStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zRON");
/* harmony import */ var _components_Link_Link_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sbh2");




var DetailsRowGlobalClassNames = {
    root: 'ms-DetailsRow',
    // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellAnimation: 'ms-DetailsRow-cellAnimation',
    cellCheck: 'ms-DetailsRow-cellCheck',
    check: 'ms-DetailsRow-check',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    isRowHeader: 'is-row-header',
    fields: 'ms-DetailsRow-fields',
};
var IsFocusableSelector = "[data-is-focusable='true']";
var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24,
};
// Source of default row heights to share.
var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32,
};
// Constant values
var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, DEFAULT_ROW_HEIGHTS), { rowVerticalPadding: 11, compactRowVerticalPadding: 6 });
var getDetailsRowStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _q = props.cellStyleProps, cellStyleProps = _q === void 0 ? DEFAULT_CELL_STYLE_PROPS : _q, enableUpdateAnimations = props.enableUpdateAnimations, disabled = props.disabled;
    var palette = theme.palette, fonts = theme.fonts;
    var neutralPrimary = palette.neutralPrimary, white = palette.white, neutralSecondary = palette.neutralSecondary, neutralLighter = palette.neutralLighter, neutralLight = palette.neutralLight, neutralDark = palette.neutralDark, neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
    var _r = theme.semanticColors, focusBorder = _r.focusBorder, focusedLinkColor = _r.linkHovered;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalClassNames */ "v"])(DetailsRowGlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderText: neutralPrimary,
        defaultMetaText: neutralSecondary,
        defaultBackground: white,
        // Default Hover
        defaultHoverHeaderText: neutralDark,
        defaultHoverMetaText: neutralPrimary,
        defaultHoverBackground: neutralLighter,
        // Selected
        selectedHeaderText: neutralDark,
        selectedMetaText: neutralPrimary,
        selectedBackground: neutralLight,
        // Selected Hover
        selectedHoverHeaderText: neutralDark,
        selectedHoverMetaText: neutralPrimary,
        selectedHoverBackground: neutralQuaternaryAlt,
        // Focus
        focusHeaderText: neutralDark,
        focusMetaText: neutralPrimary,
        focusBackground: neutralLight,
        focusHoverBackground: neutralQuaternaryAlt,
    };
    var rowHighContrastFocus = {
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
    };
    // Selected row styles
    var selectedStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, {
            inset: -1,
            borderColor: focusBorder,
            outlineColor: white,
            highContrastStyle: rowHighContrastFocus,
            pointerEvents: 'none',
        }),
        classNames.isSelected,
        {
            color: colors.selectedMetaText,
            background: colors.selectedBackground,
            borderBottom: "1px solid ".concat(white),
            selectors: (_a = {
                    '&:before': {
                        position: 'absolute',
                        display: 'block',
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '',
                        borderTop: "1px solid ".concat(white),
                    }
                },
                _a[".".concat(classNames.cell, " > .").concat(_components_Link_Link_styles__WEBPACK_IMPORTED_MODULE_3__[/* GlobalClassNames */ "a"].root)] = {
                    color: focusedLinkColor,
                    selectors: (_b = {},
                        _b[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                            color: 'HighlightText',
                        },
                        _b),
                },
                // Selected State hover
                _a['&:hover'] = {
                    background: colors.selectedHoverBackground,
                    color: colors.selectedHoverMetaText,
                    selectors: (_c = {},
                        // Selected State hover meta cell
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                            background: 'Highlight',
                            selectors: (_d = {},
                                _d[".".concat(classNames.cell)] = {
                                    color: 'HighlightText',
                                },
                                _d[".".concat(classNames.cell, " > .").concat(_components_Link_Link_styles__WEBPACK_IMPORTED_MODULE_3__[/* GlobalClassNames */ "a"].root)] = {
                                    forcedColorAdjust: 'none',
                                    color: 'HighlightText',
                                },
                                _d),
                        },
                        // Selected State hover Header cell
                        _c[".".concat(classNames.isRowHeader)] = {
                            color: colors.selectedHoverHeaderText,
                            selectors: (_e = {},
                                _e[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                                    color: 'HighlightText',
                                },
                                _e),
                        },
                        _c),
                },
                // Focus state
                _a['&:focus'] = {
                    background: colors.focusBackground,
                    selectors: (_f = {},
                        // Selected State hover meta cell
                        _f[".".concat(classNames.cell)] = {
                            color: colors.focusMetaText,
                            selectors: (_g = {},
                                _g[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                                    color: 'HighlightText',
                                    selectors: {
                                        '> a': {
                                            color: 'HighlightText',
                                        },
                                    },
                                },
                                _g),
                        },
                        // Row header cell
                        _f[".".concat(classNames.isRowHeader)] = {
                            color: colors.focusHeaderText,
                            selectors: (_h = {},
                                _h[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                                    color: 'HighlightText',
                                },
                                _h),
                        },
                        // Ensure high-contrast mode overrides default focus background
                        _f[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                            background: 'Highlight',
                        },
                        _f),
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ background: 'Highlight', color: 'HighlightText' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()), { selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    } }),
                // Focus and hover state
                _a['&:focus:hover'] = {
                    background: colors.focusHoverBackground,
                },
                _a),
        },
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default',
        },
    ];
    var rootCompactStyles = {
        minHeight: values.compactRowHeight,
        border: 0,
    };
    var cellCompactStyles = {
        minHeight: values.compactRowHeight,
        paddingTop: values.compactRowVerticalPadding,
        paddingBottom: values.compactRowVerticalPadding,
        paddingLeft: "".concat(cellStyleProps.cellLeftPadding, "px"),
    };
    var defaultCellStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { inset: -1 }),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: values.rowVerticalPadding,
            paddingBottom: values.rowVerticalPadding,
            paddingLeft: "".concat(cellStyleProps.cellLeftPadding, "px"),
            selectors: (_j = {
                    '& > button': {
                        maxWidth: '100%',
                    }
                },
                _j[IsFocusableSelector] = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),
                _j),
        },
        isSelected && {
            selectors: (_k = {},
                _k[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ background: 'Highlight', color: 'HighlightText' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                _k),
        },
        compact && cellCompactStyles,
        disabled && { opacity: 0.5 },
    ];
    return {
        root: [
            classNames.root,
            _Styling__WEBPACK_IMPORTED_MODULE_1__[/* AnimationClassNames */ "a"].fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme, { borderColor: focusBorder, outlineColor: white }),
            {
                borderBottom: "1px solid ".concat(neutralLighter),
                background: colors.defaultBackground,
                color: colors.defaultMetaText,
                // This ensures that the row always tries to consume is minimum width and does not compress.
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_l = {},
                    _l[".".concat(classNames.listCellFirstChild, " &:before")] = {
                        display: 'none',
                    },
                    _l['&:hover'] = {
                        background: colors.defaultHoverBackground,
                        color: colors.defaultHoverMetaText,
                        selectors: (_m = {},
                            _m[".".concat(classNames.isRowHeader)] = {
                                color: colors.defaultHoverHeaderText,
                            },
                            _m[".".concat(classNames.cell, " > .").concat(_components_Link_Link_styles__WEBPACK_IMPORTED_MODULE_3__[/* GlobalClassNames */ "a"].root)] = {
                                color: focusedLinkColor,
                            },
                            _m),
                    },
                    _l["&:hover .".concat(classNames.check)] = {
                        opacity: 1,
                    },
                    // eslint-disable-next-line @fluentui/max-len
                    _l[".".concat(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* IsFocusVisibleClassName */ "a"], " &:focus .").concat(classNames.check, ", :host(.").concat(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* IsFocusVisibleClassName */ "a"], ") &:focus .").concat(classNames.check)] = {
                        opacity: 1,
                    },
                    _l['.ms-GroupSpacer'] = {
                        flexShrink: 0,
                        flexGrow: 0,
                    },
                    _l),
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className,
        ],
        cellUnpadded: {
            paddingRight: "".concat(cellStyleProps.cellRightPadding, "px"),
        },
        cellPadded: {
            paddingRight: "".concat(cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding, "px"),
            selectors: (_o = {},
                _o["&.".concat(classNames.cellCheck)] = {
                    paddingRight: 0,
                },
                _o),
        },
        cell: defaultCellStyles,
        cellAnimation: enableUpdateAnimations && _Styling__WEBPACK_IMPORTED_MODULE_1__[/* AnimationStyles */ "b"].slideLeftIn40,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap',
            },
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0,
            },
        ],
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        isRowHeader: [
            classNames.isRowHeader,
            {
                color: colors.defaultHeaderText,
                fontSize: fonts.medium.fontSize,
            },
            isSelected && {
                color: colors.selectedHeaderText,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "e"].semibold,
                selectors: (_p = {},
                    _p[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        color: 'HighlightText',
                    },
                    _p),
            },
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip',
            },
        ],
        check: [classNames.check],
    };
};
//# sourceMappingURL=DetailsRow.styles.js.map

/***/ }),

/***/ "SwLT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBarType; });
/**
 * {@docCategory MessageBar}
 */
var MessageBarType;
(function (MessageBarType) {
    /** Info styled MessageBar */
    MessageBarType[MessageBarType["info"] = 0] = "info";
    /** Error styled MessageBar */
    MessageBarType[MessageBarType["error"] = 1] = "error";
    /** Blocked styled MessageBar */
    MessageBarType[MessageBarType["blocked"] = 2] = "blocked";
    /** SevereWarning styled MessageBar */
    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
    /** Success styled MessageBar */
    MessageBarType[MessageBarType["success"] = 4] = "success";
    /** Warning styled MessageBar */
    MessageBarType[MessageBarType["warning"] = 5] = "warning";
})(MessageBarType || (MessageBarType = {}));
//# sourceMappingURL=MessageBar.types.js.map

/***/ }),

/***/ "atvm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsRowCheck; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Eh56");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5tSL");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vord");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WjVC");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MBBx");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BWz0");
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("n9G9");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Imro");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* classNamesFunction */ "a"])();
var DetailsRowCheckBase = function (props) {
    var _a = props.isVisible, isVisible = _a === void 0 ? false : _a, _b = props.canSelect, canSelect = _b === void 0 ? false : _b, _c = props.anySelected, anySelected = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, selectionMode = props.selectionMode, _e = props.isHeader, isHeader = _e === void 0 ? false : _e, className = props.className, checkClassName = props.checkClassName, styles = props.styles, theme = props.theme, compact = props.compact, onRenderDetailsCheckbox = props.onRenderDetailsCheckbox, _f = props.useFastIcons, useFastIcons = _f === void 0 ? true : _f, // must be removed from buttonProps
    buttonProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(props, ["isVisible", "canSelect", "anySelected", "selected", "selectionMode", "isHeader", "className", "checkClassName", "styles", "theme", "compact", "onRenderDetailsCheckbox", "useFastIcons"]);
    var defaultCheckboxRender = useFastIcons ? _fastDefaultCheckboxRender : _defaultCheckboxRender;
    var onRenderCheckbox = onRenderDetailsCheckbox
        ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* composeRenderFunction */ "a"])(onRenderDetailsCheckbox, defaultCheckboxRender)
        : defaultCheckboxRender;
    var classNames = getClassNames(styles, {
        theme: theme,
        canSelect: canSelect,
        selected: selected,
        anySelected: anySelected,
        className: className,
        isHeader: isHeader,
        isVisible: isVisible,
        compact: compact,
    });
    var detailsCheckboxProps = {
        checked: selected,
        theme: theme,
    };
    var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getNativeElementProps */ "a"])('div', buttonProps, ['aria-label', 'aria-labelledby', 'aria-describedby']);
    var checkRole = selectionMode === _Selection__WEBPACK_IMPORTED_MODULE_9__[/* SelectionMode */ "c"].single ? 'radio' : 'checkbox';
    return canSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, buttonProps, { role: checkRole, 
        // eslint-disable-next-line deprecation/deprecation
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* css */ "a"])(classNames.root, classNames.check), "aria-checked": selected, "data-selection-toggle": true, "data-automationid": "DetailsRowCheck", tabIndex: -1 }), onRenderCheckbox(detailsCheckboxProps))) : (
    // eslint-disable-next-line deprecation/deprecation
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, divProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* css */ "a"])(classNames.root, classNames.check) })));
};
var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_7__[/* Check */ "a"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
function _defaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_7__[/* Check */ "a"], { checked: checkboxProps.checked });
}
function _fastDefaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
}
var DetailsRowCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__[/* styled */ "a"])(DetailsRowCheckBase, _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_8__[/* getDetailsRowCheckStyles */ "b"], undefined, { scope: 'DetailsRowCheck' }, true);
//# sourceMappingURL=DetailsRowCheck.js.map

/***/ }),

/***/ "eZeq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DetailsRow; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/object.js
var object = __webpack_require__("FTLG");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/initializeComponentRef.js
var initializeComponentRef = __webpack_require__("bf8k");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/EventGroup.js
var EventGroup = __webpack_require__("GBES");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/componentAs/composeComponentAs.js
var composeComponentAs = __webpack_require__("T+Fs");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/properties.js
var properties = __webpack_require__("e6CW");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/css.js
var css = __webpack_require__("WjVC");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js
var DetailsList_types = __webpack_require__("hGA5");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRowCheck.js
var DetailsRowCheck = __webpack_require__("atvm");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/GroupedList/GroupSpacer.js
var GroupSpacer = __webpack_require__("/Xe4");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/renderFunction/composeRenderFunction.js
var composeRenderFunction = __webpack_require__("5tSL");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.styles.js
var DetailsRow_styles = __webpack_require__("S6bb");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRowFields.js



var getCellText = function (item, column) {
    var value = item && column && column.fieldName ? item[column.fieldName] : '';
    if (value === null || value === undefined) {
        value = '';
    }
    if (typeof value === 'boolean') {
        return value.toString();
    }
    return value;
};
/**
 * Component for rendering a row's cells in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsRowFields = function (props) {
    var columns = props.columns, rowClassNames = props.rowClassNames, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DetailsRow_styles["a" /* DEFAULT_CELL_STYLE_PROPS */] : _a, item = props.item, itemIndex = props.itemIndex, isSelected = props.isSelected, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, propsOnRenderField = props.onRenderField, cellsByColumn = props.cellsByColumn, enableUpdateAnimations = props.enableUpdateAnimations, rowHeaderId = props.rowHeaderId;
    var cellValueKeysRef = react["useRef"]();
    var cellValueKeys = cellValueKeysRef.current || (cellValueKeysRef.current = {});
    var defaultOnRenderField = react["useCallback"](function (fieldProps) {
        var column = fieldProps.column, cellValueKey = fieldProps.cellValueKey, className = fieldProps.className, onRender = fieldProps.onRender, fieldItem = fieldProps.item, fieldItemIndex = fieldProps.itemIndex;
        var width = typeof column.calculatedWidth === 'undefined'
            ? 'auto'
            : column.calculatedWidth +
                cellStyleProps.cellLeftPadding +
                cellStyleProps.cellRightPadding +
                (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
        var key = "".concat(column.key).concat(cellValueKey !== undefined ? "-".concat(cellValueKey) : '');
        return (react["createElement"]("div", { key: key, id: column.isRowHeader ? rowHeaderId : undefined, role: column.isRowHeader ? 'rowheader' : 'gridcell', className: Object(css["a" /* css */])(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded, className), style: { width: width }, "data-automationid": "DetailsRowCell", "data-automation-key": column.key }, onRender(fieldItem, fieldItemIndex, column)));
    }, [rowClassNames, cellStyleProps, rowHeaderId]);
    return (react["createElement"]("div", { className: rowClassNames.fields, "data-automationid": "DetailsRowFields", role: "presentation" }, columns.map(function (column) {
        var _a = column.getValueKey, getValueKey = _a === void 0 ? getCellValueKey : _a;
        var onRender = (cellsByColumn && column.key in cellsByColumn && (function () { return cellsByColumn[column.key]; })) ||
            column.onRender ||
            onRenderItemColumn ||
            defaultOnRender;
        var onRenderField = defaultOnRenderField;
        if (column.onRenderField) {
            onRenderField = Object(composeRenderFunction["a" /* composeRenderFunction */])(column.onRenderField, onRenderField);
        }
        if (propsOnRenderField) {
            onRenderField = Object(composeRenderFunction["a" /* composeRenderFunction */])(propsOnRenderField, onRenderField);
        }
        var previousValueKey = cellValueKeys[column.key];
        var cellValueKey = enableUpdateAnimations && getValueKey ? getValueKey(item, itemIndex, column) : undefined;
        var showAnimation = false;
        if (cellValueKey !== undefined && previousValueKey !== undefined && cellValueKey !== previousValueKey) {
            showAnimation = true;
        }
        cellValueKeys[column.key] = cellValueKey;
        return onRenderField({
            item: item,
            itemIndex: itemIndex,
            isSelected: isSelected,
            column: column,
            cellValueKey: cellValueKey,
            className: showAnimation ? rowClassNames.cellAnimation : undefined,
            onRender: onRender,
        });
    })));
};
function defaultOnRender(item, index, column) {
    if (!item || !column) {
        return null;
    }
    return getCellText(item, column);
}
//# sourceMappingURL=DetailsRowFields.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.types.js
var FocusZone_types = __webpack_require__("9xX0");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-focus/lib/components/FocusZone/FocusZone.js
var FocusZone = __webpack_require__("YJ2P");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/selection/Selection.types.js
var Selection_types = __webpack_require__("Imro");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/getId.js
var getId = __webpack_require__("9zv+");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.base.js











var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var NO_COLUMNS = [];
var DetailsRow_base_DetailsRowBase = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react["createRef"]();
        _this._cellMeasurer = react["createRef"]();
        _this._focusZone = react["createRef"]();
        _this._onSelectionChanged = function () {
            var selectionState = getSelectionState(_this.props);
            if (!Object(object["c" /* shallowCompare */])(selectionState, _this.state.selectionState)) {
                _this.setState({ selectionState: selectionState });
            }
        };
        /**
         * update isDropping state based on the input value, which is used to change style during drag and drop
         *
         * when change to true, that means drag enter. we will add default dropping class name
         * or the custom dropping class name (return result from onDragEnter) to the root elemet.
         *
         * when change to false, that means drag leave. we will remove the dropping class name from root element.
         *
         * @param newValue - New isDropping state value
         * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newValue, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, item = _a.item;
            if (!newValue) {
                if (dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(item, event);
                }
            }
            else if (dragDropEvents.onDragEnter) {
                _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
            if (isDropping !== newValue) {
                _this.setState({ isDropping: newValue });
            }
        };
        Object(initializeComponentRef["a" /* initializeComponentRef */])(_this);
        _this._events = new EventGroup["a" /* EventGroup */](_this);
        _this.state = {
            selectionState: getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
        };
        _this._droppingClassNames = '';
        return _this;
    }
    DetailsRowBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, previousState), { selectionState: getSelectionState(nextProps) });
    };
    DetailsRowBase.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection, item = _a.item, onDidMount = _a.onDidMount;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, Selection_types["a" /* SELECTION_CHANGE */], this._onSelectionChanged);
        }
        if (onDidMount && item) {
            // If the item appears later, we should wait for it before calling this method.
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined,
            });
        }
        if (item && onDidMount && !this._onDidMountCalled) {
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._events.dispose();
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            var newSelectionState = getSelectionState(nextProps);
            if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                return true;
            }
            return !Object(object["c" /* shallowCompare */])(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, _c = _b.columns, columns = _c === void 0 ? NO_COLUMNS : _c, dragDropEvents = _b.dragDropEvents, item = _b.item, itemIndex = _b.itemIndex, id = _b.id, _d = _b.flatIndexOffset, flatIndexOffset = _d === void 0 ? 2 : _d, _e = _b.onRenderCheck, onRenderCheck = _e === void 0 ? this._onRenderCheck : _e, onRenderDetailsCheckbox = _b.onRenderDetailsCheckbox, onRenderItemColumn = _b.onRenderItemColumn, onRenderField = _b.onRenderField, getCellValueKey = _b.getCellValueKey, selectionMode = _b.selectionMode, checkboxVisibility = _b.checkboxVisibility, getRowAriaLabel = _b.getRowAriaLabel, getRowAriaDescription = _b.getRowAriaDescription, getRowAriaDescribedBy = _b.getRowAriaDescribedBy, isGridRow = _b.isGridRow, checkButtonAriaLabel = _b.checkButtonAriaLabel, checkboxCellClassName = _b.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        rowFieldsAs = _b.rowFieldsAs, selection = _b.selection, indentWidth = _b.indentWidth, enableUpdateAnimations = _b.enableUpdateAnimations, compact = _b.compact, theme = _b.theme, styles = _b.styles, cellsByColumn = _b.cellsByColumn, groupNestingDepth = _b.groupNestingDepth, _f = _b.useFastIcons, useFastIcons = _f === void 0 ? true : _f, cellStyleProps = _b.cellStyleProps, group = _b.group, focusZoneProps = _b.focusZoneProps, _g = _b.disabled, disabled = _g === void 0 ? false : _g;
        var _h = this.state, columnMeasureInfo = _h.columnMeasureInfo, isDropping = _h.isDropping;
        var _j = this.state.selectionState, _k = _j.isSelected, isSelected = _k === void 0 ? false : _k, _l = _j.isSelectionModal, isSelectionModal = _l === void 0 ? false : _l;
        var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
        var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaRowDescription = getRowAriaDescription ? getRowAriaDescription(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex) && !disabled;
        var isContentUnselectable = selectionMode === Selection_types["c" /* SelectionMode */].multiple;
        var showCheckbox = selectionMode !== Selection_types["c" /* SelectionMode */].none && checkboxVisibility !== DetailsList_types["a" /* CheckboxVisibility */].hidden;
        var ariaSelected = selectionMode === Selection_types["c" /* SelectionMode */].none ? undefined : isSelected;
        var ariaPositionInSet = group ? itemIndex - group.startIndex + 1 : undefined;
        var ariaSetSize = group ? group.count : undefined;
        var focusZoneDirection = focusZoneProps ? focusZoneProps.direction : FocusZone_types["a" /* FocusZoneDirection */].horizontal;
        this._classNames = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this._classNames), getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact,
            enableUpdateAnimations: enableUpdateAnimations,
            cellStyleProps: cellStyleProps,
            disabled: disabled,
        }));
        var rowClassNames = {
            isMultiline: this._classNames.isMultiline,
            isRowHeader: this._classNames.isRowHeader,
            cell: this._classNames.cell,
            cellAnimation: this._classNames.cellAnimation,
            cellPadded: this._classNames.cellPadded,
            cellUnpadded: this._classNames.cellUnpadded,
            fields: this._classNames.fields,
        };
        // Only re-assign rowClassNames when classNames have changed.
        // Otherwise, they will cause DetailsRowFields to unnecessarily
        // re-render, see https://github.com/microsoft/fluentui/pull/8799.
        // Refactor DetailsRowFields to generate own styles to remove need for this.
        if (!Object(object["c" /* shallowCompare */])(this._rowClassNames || {}, rowClassNames)) {
            this._rowClassNames = rowClassNames;
        }
        var RowFields = rowFieldsAs ? Object(composeComponentAs["a" /* composeComponentAs */])(rowFieldsAs, DetailsRowFields) : DetailsRowFields;
        var rowFields = (react["createElement"](RowFields, { rowClassNames: this._rowClassNames, rowHeaderId: "".concat(id, "-header"), cellsByColumn: cellsByColumn, columns: columns, item: item, itemIndex: itemIndex, isSelected: isSelected, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0), onRenderItemColumn: onRenderItemColumn, onRenderField: onRenderField, getCellValueKey: getCellValueKey, enableUpdateAnimations: enableUpdateAnimations, cellStyleProps: cellStyleProps }));
        var defaultRole = 'row';
        var role = this.props.role ? this.props.role : defaultRole;
        this._ariaRowDescriptionId = Object(getId["a" /* getId */])('DetailsRow-description');
        // When the user does not specify any column is a row-header in the columns props,
        // The aria-labelledby of the checkbox does not specify {id}-header.
        var hasRowHeader = columns.some(function (column) {
            return !!column.isRowHeader;
        });
        var ariaLabelledby = "".concat(id, "-checkbox") + (hasRowHeader ? " ".concat(id, "-header") : '');
        // additional props for rows within a GroupedList
        // these are needed for treegrid row semantics, but not grid row semantics
        var groupedListRowProps = isGridRow
            ? {}
            : {
                'aria-level': (groupNestingDepth && groupNestingDepth + 1) || undefined,
                'aria-posinset': ariaPositionInSet,
                'aria-setsize': ariaSetSize,
            };
        return (react["createElement"](FocusZone["a" /* FocusZone */], Object(tslib_es6["a" /* __assign */])({ "data-is-focusable": true }, Object(properties["h" /* getNativeProps */])(this.props, properties["f" /* divProperties */]), (typeof isDraggable === 'boolean'
            ? {
                'data-is-draggable': isDraggable,
                draggable: isDraggable,
            }
            : {}), focusZoneProps, groupedListRowProps, { direction: focusZoneDirection, elementRef: this._root, componentRef: this._focusZone, role: role, "aria-label": ariaLabel, "aria-disabled": disabled || undefined, "aria-describedby": ariaRowDescription ? this._ariaRowDescriptionId : ariaDescribedBy, className: this._classNames.root, "data-selection-index": itemIndex, "data-selection-touch-invoke": true, "data-selection-disabled": (_a = this.props['data-selection-disabled']) !== null && _a !== void 0 ? _a : (disabled || undefined), "data-item-index": itemIndex, "aria-rowindex": ariaPositionInSet === undefined ? itemIndex + flatIndexOffset : undefined, "data-automationid": "DetailsRow", "aria-selected": ariaSelected, allowFocusRoot: true }),
            ariaRowDescription ? (react["createElement"]("span", { key: "description", role: "presentation", hidden: true, id: this._ariaRowDescriptionId }, ariaRowDescription)) : null,
            showCheckbox && (react["createElement"]("div", { role: "gridcell", "data-selection-toggle": true, className: this._classNames.checkCell }, onRenderCheck({
                id: id ? "".concat(id, "-checkbox") : undefined,
                selected: isSelected,
                selectionMode: selectionMode,
                anySelected: isSelectionModal,
                'aria-label': checkButtonAriaLabel,
                'aria-labelledby': id ? ariaLabelledby : undefined,
                canSelect: canSelect,
                compact: compact,
                className: this._classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === DetailsList_types["a" /* CheckboxVisibility */].always,
                onRenderDetailsCheckbox: onRenderDetailsCheckbox,
                useFastIcons: useFastIcons,
            }))),
            react["createElement"](GroupSpacer["a" /* GroupSpacer */], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth === 0 ? -1 : groupNestingDepth }),
            item && rowFields,
            columnMeasureInfo && (react["createElement"]("span", { role: "presentation", className: Object(css["a" /* css */])(this._classNames.cellMeasurer, this._classNames.cell), ref: this._cellMeasurer },
                react["createElement"](RowFields, { rowClassNames: this._rowClassNames, rowHeaderId: "".concat(id, "-header"), columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey })))));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = Object(tslib_es6["a" /* __assign */])({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone,
            },
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        var _a;
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        return !!((_a = this._focusZone.current) === null || _a === void 0 ? void 0 : _a.focus(forceIntoFirstElement));
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return react["createElement"](DetailsRowCheck["a" /* DetailsRowCheck */], Object(tslib_es6["a" /* __assign */])({}, props));
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
            onDragOver: dragDropEvents.onDragOver,
        };
        return options;
    };
    return DetailsRowBase;
}(react["Component"]));

function getSelectionState(props) {
    var _a;
    var itemIndex = props.itemIndex, selection = props.selection;
    return {
        isSelected: !!(selection === null || selection === void 0 ? void 0 : selection.isIndexSelected(itemIndex)),
        isSelectionModal: !!((_a = selection === null || selection === void 0 ? void 0 : selection.isModal) === null || _a === void 0 ? void 0 : _a.call(selection)),
    };
}
//# sourceMappingURL=DetailsRow.base.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.js



var DetailsRow = Object(styled["a" /* styled */])(DetailsRow_base_DetailsRowBase, DetailsRow_styles["c" /* getDetailsRowStyles */], undefined, {
    scope: 'DetailsRow',
});
//# sourceMappingURL=DetailsRow.js.map

/***/ }),

/***/ "hGA5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColumnActionsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ConstrainMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColumnDragEndLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DetailsListLayoutMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxVisibility; });
/**
 * Enum to describe how a particular column header behaves.
 * This is used to to specify the property `IColumn.columnActionsMode`.
 * If `IColumn.columnActionsMode` is undefined, it's equivalent to `ColumnActionsMode.clickable`.
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /** Renders the column header as disabled. */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /** Renders the column header as clickable. Default value. */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /** Renders the column header as clickable and displays the dropdown chevron. */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */
var ConstrainMode;
(function (ConstrainMode) {
    /** Lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /** Constrains the list to the given layout space. */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /** Drag ended outside of current list */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /** Drag ended within current list */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /** Drag ended on header */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /** Visible on hover. */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /** Visible always. */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /** Hide checkboxes. */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));
//# sourceMappingURL=DetailsList.types.js.map

/***/ }),

/***/ "n9G9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_CELL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDetailsRowCheckStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ogYq");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("S6bb");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJNf");
/* harmony import */ var _components_Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vWQh");




var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
var CHECK_CELL_WIDTH = 48;
var getDetailsRowCheckStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalClassNames */ "v"])(GlobalClassNames, theme);
    var rowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__[/* DEFAULT_ROW_HEIGHTS */ "b"].rowHeight, compactRowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__[/* DEFAULT_ROW_HEIGHTS */ "b"].compactRowHeight;
    var height = isHeader ? _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__[/* HEADER_HEIGHT */ "a"] : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* getFocusStyle */ "u"])(theme),
            theme.fonts.small,
            _components_Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__[/* CheckGlobalClassNames */ "a"].checkHost,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: isCheckVisible ? 1 : 0,
                height: height,
                width: CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map

/***/ }),

/***/ "oJNf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCellStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDetailsHeaderStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zRON");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ge+E");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("S6bb");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/Xe4");




// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    tooltipHost: 'ms-TooltipHost',
    root: 'ms-DetailsHeader',
    cell: 'ms-DetailsHeader-cell',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical',
    checkTooltip: 'ms-DetailsHeader-checkTooltip',
    check: 'ms-DetailsHeader-check',
};
var HEADER_HEIGHT = 42;
var getCellStyles = function (props) {
    var theme = props.theme, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_4__[/* DEFAULT_CELL_STYLE_PROPS */ "a"] : _a;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalClassNames */ "v"])(GlobalClassNames, theme);
    return [
        classNames.cell,
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getFocusStyle */ "u"])(theme),
        {
            color: semanticColors.bodyText,
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            padding: "0 ".concat(cellStyleProps.cellRightPadding, "px 0 ").concat(cellStyleProps.cellLeftPadding, "px"),
            lineHeight: 'inherit',
            margin: '0',
            height: HEADER_HEIGHT,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
        },
    ];
};
var getDetailsHeaderStyles = function (props) {
    var _a, _b, _c, _d;
    var theme = props.theme, className = props.className, isAllSelected = props.isAllSelected, isResizingColumn = props.isResizingColumn, isSizing = props.isSizing, isAllCollapsed = props.isAllCollapsed, _e = props.cellStyleProps, cellStyleProps = _e === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_4__[/* DEFAULT_CELL_STYLE_PROPS */ "a"] : _e;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalClassNames */ "v"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var cellSizerFadeInStyles = {
        opacity: 1,
        transition: 'opacity 0.3s linear',
    };
    var cellStyles = getCellStyles(props);
    return {
        root: [
            classNames.root,
            fonts.small,
            {
                display: 'inline-block',
                background: colors.headerBackgroundColor,
                position: 'relative',
                minWidth: '100%',
                verticalAlign: 'top',
                height: HEADER_HEIGHT,
                lineHeight: HEADER_HEIGHT,
                whiteSpace: 'nowrap',
                boxSizing: 'content-box',
                paddingBottom: '1px',
                paddingTop: '16px',
                borderBottom: "1px solid ".concat(semanticColors.bodyDivider),
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {},
                    _a["&:hover .".concat(classNames.check)] = {
                        opacity: 1,
                    },
                    _a["& .".concat(classNames.tooltipHost, " .").concat(classNames.checkTooltip)] = {
                        display: 'block',
                    },
                    _a),
            },
            isAllSelected && classNames.isAllSelected,
            isResizingColumn && classNames.isResizingColumn,
            className,
        ],
        check: [
            classNames.check,
            {
                height: HEADER_HEIGHT,
            },
            {
                selectors: (_b = {},
                    _b[".".concat(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* IsFocusVisibleClassName */ "a"], " &:focus, :host(.").concat(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* IsFocusVisibleClassName */ "a"], ") &:focus")] = {
                        opacity: 1,
                    },
                    _b),
            },
        ],
        cellWrapperPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
        },
        cellIsCheck: [
            cellStyles,
            classNames.cellIsCheck,
            {
                position: 'relative',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
            },
            isAllSelected && {
                opacity: 1,
            },
        ],
        cellIsGroupExpander: [
            cellStyles,
            {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                padding: 0,
                border: 'none',
                width: _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__[/* SPACER_WIDTH */ "b"],
                color: palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: palette.neutralLighter,
                    },
                    ':active': {
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        cellIsActionable: {
            selectors: {
                ':hover': {
                    color: semanticColors.bodyText,
                    background: semanticColors.listHeaderBackgroundHovered,
                },
                ':active': {
                    background: semanticColors.listHeaderBackgroundPressed,
                },
            },
        },
        cellIsEmpty: {
            textOverflow: 'clip',
        },
        cellSizer: [
            classNames.cellSizer,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* focusClear */ "t"])(),
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'ew-resize',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 'inherit',
                background: 'transparent',
                zIndex: 1,
                width: 16,
                selectors: (_c = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: colors.resizerColor,
                            opacity: 0,
                            left: '50%',
                        },
                        ':focus:after': cellSizerFadeInStyles,
                        ':hover:after': cellSizerFadeInStyles
                    },
                    _c["&.".concat(classNames.isResizing, ":after")] = [
                        cellSizerFadeInStyles,
                        {
                            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                        },
                    ],
                    _c),
            },
        ],
        cellIsResizing: classNames.isResizing,
        cellSizerStart: {
            margin: '0 -8px',
        },
        cellSizerEnd: {
            margin: 0,
            marginLeft: -16,
        },
        collapseButton: [
            classNames.collapseButton,
            {
                transformOrigin: '50% 50%',
                transition: 'transform .1s linear',
            },
            isAllCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* getRTL */ "a"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                },
        ],
        checkTooltip: classNames.checkTooltip,
        sizingOverlay: isSizing && {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            cursor: 'ew-resize',
            background: 'rgba(255, 255, 255, 0)',
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ background: 'transparent' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                _d),
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_1__[/* hiddenContentStyle */ "C"],
        dropHintCircleStyle: [
            classNames.dropHintCircleStyle,
            {
                display: 'inline-block',
                visibility: 'hidden',
                position: 'absolute',
                bottom: 0,
                height: 9,
                width: 9,
                borderRadius: '50%',
                marginLeft: -5,
                top: 34,
                overflow: 'visible',
                zIndex: 10,
                border: "1px solid ".concat(palette.themePrimary),
                background: palette.white,
            },
        ],
        dropHintCaretStyle: [
            classNames.dropHintCaretStyle,
            {
                display: 'none',
                position: 'absolute',
                top: -28,
                left: -6.5,
                fontSize: fonts.medium.fontSize,
                color: palette.themePrimary,
                overflow: 'visible',
                zIndex: 10,
            },
        ],
        dropHintLineStyle: [
            classNames.dropHintLineStyle,
            {
                display: 'none',
                position: 'absolute',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 42,
                width: 1,
                background: palette.themePrimary,
                zIndex: 10,
            },
        ],
        dropHintStyle: {
            display: 'inline-block',
            position: 'absolute',
        },
    };
};
//# sourceMappingURL=DetailsHeader.styles.js.map

/***/ }),

/***/ "oxqj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAllVisibility; });
/**
 * {@docCategory DetailsList}
 */
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));
//# sourceMappingURL=DetailsHeader.types.js.map

/***/ }),

/***/ "qgKT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropHelper; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GBES");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("41aL");

var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var DragDropHelper = /** @class */ (function () {
    function DragDropHelper(params) {
        this._selection = params.selection;
        this._dragEnterCounts = {};
        this._activeTargets = {};
        this._lastId = 0;
        // To make this class cheap to create, which allows simplifying some logic elsewhere,
        // only initialize the event group and global event handlers as needed.
        this._initialized = false;
    }
    DragDropHelper.prototype.dispose = function () {
        if (this._events) {
            this._events.dispose();
        }
    };
    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
        var _this = this;
        if (!this._initialized) {
            this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"](this);
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "a"])();
            // clear drag data when mouse up, use capture event to ensure it will be run
            if (doc) {
                this._events.on(doc.body, 'mouseup', this._onMouseUp.bind(this), true);
                this._events.on(doc, 'mouseup', this._onDocumentMouseUp.bind(this), true);
            }
            this._initialized = true;
        }
        var _a = dragDropOptions.key, key = _a === void 0 ? "".concat(++this._lastId) : _a;
        var handlers = [];
        var onDragStart;
        var onDragLeave;
        var onDragEnter;
        var onDragEnd;
        var onDrop;
        var onDragOver;
        var onMouseDown;
        var isDraggable;
        var isDroppable;
        var activeTarget;
        if (dragDropOptions && root) {
            var eventMap = dragDropOptions.eventMap, context = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
            var dragDropTarget = {
                root: root,
                options: dragDropOptions,
                key: key,
            };
            isDraggable = this._isDraggable(dragDropTarget);
            isDroppable = this._isDroppable(dragDropTarget);
            if (isDraggable || isDroppable) {
                if (eventMap) {
                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
                        var event_1 = eventMap_1[_i];
                        var handler = {
                            callback: event_1.callback.bind(null, context),
                            eventName: event_1.eventName,
                        };
                        handlers.push(handler);
                        this._events.on(root, handler.eventName, handler.callback);
                    }
                }
            }
            if (isDroppable) {
                // If the target is droppable, wire up global event listeners to track drop-related events.
                onDragLeave = function (event) {
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]--;
                        if (_this._dragEnterCounts[key] === 0) {
                            updateDropState_1(false /* isDropping */, event);
                        }
                    }
                };
                onDragEnter = function (event) {
                    event.preventDefault(); // needed for IE
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]++;
                        if (_this._dragEnterCounts[key] === 1) {
                            updateDropState_1(true /* isDropping */, event);
                        }
                    }
                };
                onDragEnd = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                };
                onDrop = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                    if (dragDropOptions.onDrop) {
                        dragDropOptions.onDrop(dragDropOptions.context.data, event);
                    }
                };
                onDragOver = function (event) {
                    event.preventDefault();
                    if (dragDropOptions.onDragOver) {
                        dragDropOptions.onDragOver(dragDropOptions.context.data, event);
                    }
                };
                this._dragEnterCounts[key] = 0;
                // dragenter and dragleave will be fired when hover to the child element
                // but we only want to change state when enter or leave the current element
                // use the count to ensure it.
                events.on(root, 'dragenter', onDragEnter);
                events.on(root, 'dragleave', onDragLeave);
                events.on(root, 'dragend', onDragEnd);
                events.on(root, 'drop', onDrop);
                events.on(root, 'dragover', onDragOver);
            }
            if (isDraggable) {
                // If the target is draggable, wire up local event listeners for mouse events.
                onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
                onDragEnd = this._onDragEnd.bind(this, dragDropTarget);
                // We need to add in data so that on Firefox we show the ghost element when dragging
                onDragStart = function (event) {
                    var options = dragDropOptions;
                    if (options && options.onDragStart) {
                        options.onDragStart(options.context.data, options.context.index, _this._selection.getSelection(), event);
                    }
                    _this._isDragging = true;
                    if (event.dataTransfer) {
                        event.dataTransfer.setData('id', root.id);
                    }
                };
                events.on(root, 'dragstart', onDragStart);
                events.on(root, 'mousedown', onMouseDown);
                events.on(root, 'dragend', onDragEnd);
            }
            activeTarget = {
                target: dragDropTarget,
                dispose: function () {
                    if (_this._activeTargets[key] === activeTarget) {
                        delete _this._activeTargets[key];
                    }
                    if (root) {
                        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                            var handler = handlers_1[_i];
                            _this._events.off(root, handler.eventName, handler.callback);
                        }
                        if (isDroppable) {
                            events.off(root, 'dragenter', onDragEnter);
                            events.off(root, 'dragleave', onDragLeave);
                            events.off(root, 'dragend', onDragEnd);
                            events.off(root, 'dragover', onDragOver);
                            events.off(root, 'drop', onDrop);
                        }
                        if (isDraggable) {
                            events.off(root, 'dragstart', onDragStart);
                            events.off(root, 'mousedown', onMouseDown);
                            events.off(root, 'dragend', onDragEnd);
                        }
                    }
                },
            };
            this._activeTargets[key] = activeTarget;
        }
        return {
            key: key,
            dispose: function () {
                if (activeTarget) {
                    activeTarget.dispose();
                }
            },
        };
    };
    DragDropHelper.prototype.unsubscribe = function (root, key) {
        var activeTarget = this._activeTargets[key];
        if (activeTarget) {
            activeTarget.dispose();
        }
    };
    DragDropHelper.prototype._onDragEnd = function (target, event) {
        var options = target.options;
        if (options.onDragEnd) {
            options.onDragEnd(options.context.data, event);
        }
    };
    /**
     * clear drag data when mouse up on body
     */
    DragDropHelper.prototype._onMouseUp = function (event) {
        this._isDragging = false;
        if (this._dragData) {
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.off(activeTarget.target.root, 'mousemove');
                    this._events.off(activeTarget.target.root, 'mouseleave');
                }
            }
            if (this._dragData.dropTarget) {
                // raise dragleave event to let dropTarget know it need to remove dropping style
                _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"].raise(this._dragData.dropTarget.root, 'dragleave');
                _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"].raise(this._dragData.dropTarget.root, 'drop');
            }
        }
        this._dragData = null;
    };
    /**
     * clear drag data when mouse up outside of the document
     */
    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "a"])();
        if (doc && event.target === doc.documentElement) {
            this._onMouseUp(event);
        }
    };
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    DragDropHelper.prototype._onMouseMove = function (target, event) {
        var 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        _a = event.buttons, 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onMouseUp(event);
            return;
        }
        var root = target.root, key = target.key;
        if (this._isDragging) {
            if (this._isDroppable(target)) {
                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
                // outer target too, and we need to prevent the outer one from taking over.
                // So, check if the last dropTarget is not a child of the current.
                if (this._dragData) {
                    if (this._dragData.dropTarget &&
                        this._dragData.dropTarget.key !== key &&
                        !this._isChild(root, this._dragData.dropTarget.root)) {
                        if (this._dragEnterCounts[this._dragData.dropTarget.key] > 0) {
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"].raise(this._dragData.dropTarget.root, 'dragleave');
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"].raise(root, 'dragenter');
                            this._dragData.dropTarget = target;
                        }
                    }
                }
            }
        }
    };
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    DragDropHelper.prototype._onMouseLeave = function (target, event) {
        if (this._isDragging) {
            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
                _Utilities__WEBPACK_IMPORTED_MODULE_0__[/* EventGroup */ "a"].raise(target.root, 'dragleave');
                this._dragData.dropTarget = undefined;
            }
        }
    };
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    DragDropHelper.prototype._onMouseDown = function (target, event) {
        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        if (this._isDraggable(target)) {
            this._dragData = {
                clientX: event.clientX,
                clientY: event.clientY,
                eventTarget: event.target,
                dragTarget: target,
            };
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));
                    this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
                }
            }
        }
        else {
            this._dragData = null;
        }
    };
    /**
     * determine whether the child target is a descendant of the parent
     */
    DragDropHelper.prototype._isChild = function (parentElement, childElement) {
        while (childElement && childElement.parentElement) {
            if (childElement.parentElement === parentElement) {
                return true;
            }
            childElement = childElement.parentElement;
        }
        return false;
    };
    DragDropHelper.prototype._isDraggable = function (target) {
        var options = target.options;
        return !!(options.canDrag && options.canDrag(options.context.data));
    };
    DragDropHelper.prototype._isDroppable = function (target) {
        // TODO: take the drag item into consideration to prevent dragging an item into the same group
        var options = target.options;
        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
        return !!(options.canDrop && options.canDrop(options.context, dragContext));
    };
    return DragDropHelper;
}());

//# sourceMappingURL=DragDropHelper.js.map

/***/ }),

/***/ "sbh2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStyles; });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ogYq");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zRON");


var GlobalClassNames = {
    root: 'ms-Link',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var className = props.className, isButton = props.isButton, isDisabled = props.isDisabled, isUnderlined = props.isUnderlined, theme = props.theme;
    var semanticColors = theme.semanticColors;
    // Tokens
    var linkColor = semanticColors.link;
    var linkInteractedColor = semanticColors.linkHovered;
    var linkDisabledColor = semanticColors.disabledText;
    var focusBorderColor = semanticColors.focusBorder;
    var classNames = Object(_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalClassNames */ "v"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                color: linkColor,
                outline: 'none',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                textDecoration: isUnderlined ? 'underline' : 'none',
                selectors: (_a = {},
                    _a[".".concat(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* IsFocusVisibleClassName */ "a"], " &:focus, :host(.").concat(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* IsFocusVisibleClassName */ "a"], ") &:focus")] = {
                        // Can't use getFocusStyle because it doesn't support wrapping links
                        // https://github.com/microsoft/fluentui/issues/4883#issuecomment-406743543
                        // Using box-shadow and outline allows the focus rect to wrap links that span multiple lines
                        // and helps the focus rect avoid getting clipped.
                        boxShadow: "0 0 0 1px ".concat(focusBorderColor, " inset"),
                        outline: "1px auto ".concat(focusBorderColor),
                        selectors: (_b = {},
                            _b[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                                outline: '1px solid WindowText',
                            },
                            _b),
                    },
                    _a[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                        // For IE high contrast mode
                        borderBottom: 'none',
                    },
                    _a),
            },
            isButton && {
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline',
                margin: 0,
                overflow: 'inherit',
                padding: 0,
                textAlign: 'left',
                textOverflow: 'inherit',
                userSelect: 'text',
                borderBottom: '1px solid transparent',
                selectors: (_c = {},
                    _c[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                        color: 'LinkText',
                        forcedColorAdjust: 'none',
                    },
                    _c),
            },
            !isButton && {
                selectors: (_d = {},
                    _d[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                        // This is mainly for MessageBar, which sets MsHighContrastAdjust: none by default
                        MsHighContrastAdjust: 'auto',
                        forcedColorAdjust: 'auto',
                    },
                    _d),
            },
            isDisabled && [
                'is-disabled',
                {
                    color: linkDisabledColor,
                    cursor: 'default',
                },
                {
                    selectors: (_e = {
                            '&:link, &:visited': {
                                pointerEvents: 'none',
                            }
                        },
                        _e[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                            // We need to specify the color in High Contrast because of the case of Links rendering as buttons.
                            color: 'GrayText',
                        },
                        _e),
                },
            ],
            !isDisabled && {
                selectors: {
                    '&:active, &:hover, &:active:hover': {
                        color: linkInteractedColor,
                        textDecoration: 'underline',
                        selectors: (_f = {},
                            _f[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                                color: 'LinkText',
                            },
                            _f),
                    },
                    '&:focus': {
                        color: linkColor,
                        selectors: (_g = {},
                            _g[_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "f"]] = {
                                color: 'LinkText',
                            },
                            _g),
                    },
                },
            },
            classNames.root,
            className,
        ],
    };
};
//# sourceMappingURL=Link.styles.js.map

/***/ }),

/***/ "v4N6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Link; });

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/styled.js
var styled = __webpack_require__("MBBx");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("D57K");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react-hooks/lib/useMergedRefs.js
var useMergedRefs = __webpack_require__("owwJ");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/classNamesFunction.js
var classNamesFunction = __webpack_require__("Eh56");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/utilities/lib/useFocusRects.js + 1 modules
var useFocusRects = __webpack_require__("obGf");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/useLink.js




var getClassNames = Object(classNamesFunction["a" /* classNamesFunction */])();
/**
 * The useLink hook processes the Link component props and returns
 * state, slots and slotProps for consumption by the component.
 */
var useLink = function (props, forwardedRef) {
    var as = props.as, className = props.className, disabled = props.disabled, href = props.href, onClick = props.onClick, styles = props.styles, theme = props.theme, underline = props.underline;
    var rootRef = react["useRef"](null);
    var mergedRootRefs = Object(useMergedRefs["a" /* useMergedRefs */])(rootRef, forwardedRef);
    useComponentRef(props, rootRef);
    Object(useFocusRects["c" /* useFocusRects */])(rootRef);
    var classNames = getClassNames(styles, {
        className: className,
        isButton: !href,
        isDisabled: disabled,
        isUnderlined: underline,
        theme: theme,
    });
    var _onClick = function (ev) {
        if (disabled) {
            ev.preventDefault();
        }
        else if (onClick) {
            onClick(ev);
        }
    };
    var rootType = as ? as : href ? 'a' : 'button';
    var state = {};
    var slots = { root: rootType };
    var slotProps = {
        root: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, adjustPropsForRootType(rootType, props)), { 'aria-disabled': disabled, className: classNames.root, onClick: _onClick, ref: mergedRootRefs }),
    };
    return { state: state, slots: slots, slotProps: slotProps };
};
var useComponentRef = function (props, link) {
    react["useImperativeHandle"](props.componentRef, function () { return ({
        focus: function () {
            if (link.current) {
                link.current.focus();
            }
        },
    }); }, [link]);
};
var adjustPropsForRootType = function (RootType, props) {
    // Deconstruct the props so we remove props like `as`, `theme` and `styles`
    // as those will always be removed. We also take some props that are optional
    // based on the RootType.
    var as = props.as, disabled = props.disabled, target = props.target, href = props.href, theme = props.theme, getStyles = props.getStyles, styles = props.styles, componentRef = props.componentRef, underline = props.underline, restProps = Object(tslib_es6["e" /* __rest */])(props, ["as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef", "underline"]);
    // RootType will be a string if we're dealing with an html component
    if (typeof RootType === 'string') {
        // Remove the disabled prop for anchor elements
        if (RootType === 'a') {
            return Object(tslib_es6["a" /* __assign */])({ target: target, href: disabled ? undefined : href }, restProps);
        }
        // Add the type='button' prop for button elements
        if (RootType === 'button') {
            return Object(tslib_es6["a" /* __assign */])({ type: 'button', disabled: disabled }, restProps);
        }
        // Remove the target and href props for all other non anchor elements
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, restProps), { disabled: disabled });
    }
    // Retain all props except 'as' for ReactComponents
    return Object(tslib_es6["a" /* __assign */])({ target: target, href: href, disabled: disabled }, restProps);
};
//# sourceMappingURL=useLink.js.map
// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/Link.base.js



var LinkBase = react["forwardRef"](function (props, ref) {
    var _a = useLink(props, ref), slots = _a.slots, slotProps = _a.slotProps;
    return react["createElement"](slots.root, Object(tslib_es6["a" /* __assign */])({}, slotProps.root));
});
LinkBase.displayName = 'LinkBase';
//# sourceMappingURL=Link.base.js.map
// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/Link.styles.js
var Link_styles = __webpack_require__("sbh2");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@fluentui/react/lib/components/Link/Link.js



var Link = Object(styled["a" /* styled */])(LinkBase, Link_styles["b" /* getStyles */], undefined, {
    scope: 'Link',
});
//# sourceMappingURL=Link.js.map

/***/ }),

/***/ "vWQh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("D57K");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ogYq");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ge+E");



var CheckGlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check',
    /** Must be manually applied to the parent element of the check. */
    checkHost: 'ms-Check-checkHost',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    // eslint-disable-next-line deprecation/deprecation
    var _f = props.height, height = _f === void 0 ? props.checkBoxHeight || '18px' : _f, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* getRTL */ "a"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalClassNames */ "v"])(CheckGlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: height,
        position: 'absolute',
        left: 0,
        top: 0,
        width: height,
        height: height,
        textAlign: 'center',
        // inline-flex prevents the check from shifting with custom line height styles
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: height,
                height: height,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: (_a = {
                        ':before': {
                            content: '""',
                            position: 'absolute',
                            top: '1px',
                            right: '1px',
                            bottom: '1px',
                            left: '1px',
                            borderRadius: '50%',
                            opacity: 1,
                            background: semanticColors.bodyBackground,
                        }
                    },
                    _a[".".concat(classNames.checkHost, ":hover &, .").concat(classNames.checkHost, ":focus &, &:hover, &:focus")] = {
                        opacity: 1,
                    },
                    _a),
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                                    background: 'Window',
                                },
                                _b),
                        },
                    },
                },
            ],
            className,
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralSecondary,
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            checked && {
                color: palette.white,
            },
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralSecondary,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__[/* IconFontSizes */ "h"].medium,
                left: isRTL ? '-0.5px' : '.5px',
                top: '-1px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1,
                        }
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, Object(_Styling__WEBPACK_IMPORTED_MODULE_1__[/* getHighContrastNoAdjustStyle */ "w"])()),
                    _d),
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__[/* HighContrastSelector */ "f"]] = {
                        border: 'none',
                        color: 'WindowText',
                    },
                    _e),
            },
        ],
        checkHost: classNames.checkHost,
    };
};
//# sourceMappingURL=Check.styles.js.map

/***/ })

}]);