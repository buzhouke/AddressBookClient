(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package~main"],{

/***/ "+Xob":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.items.tsx ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: getItemProps, defaultRibbonItemGroups, compactRibbonItemGroups */
/*! exports used: compactRibbonItemGroups, defaultRibbonItemGroups, getItemProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getItemProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultRibbonItemGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compactRibbonItemGroups; });
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-blockquote */ "kY5X");
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-bold */ "BXAt");
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "sS/B");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-code-block */ "Pi6q");
/* harmony import */ var _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-color */ "BC8r");
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-italic */ "bYW4");
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-list-item */ "F8rg");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "cRdh");
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-strike */ "QgqF");
/* harmony import */ var _tiptap_extension_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-table */ "IuJI");
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tiptap/extension-underline */ "IscX");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../extensions */ "IRqU");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../types */ "NlZM");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils */ "PXm5");
/* harmony import */ var _ColorMenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ColorMenuItem */ "w9VV");
/* harmony import */ var _InsertLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../InsertLink */ "Vc80");
/* harmony import */ var _InsertTable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../InsertTable */ "kluZ");
/* harmony import */ var _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RichTextRibbon.utils */ "pJQW");




















function getItemProps({ key, text, icon, supported, checked, disabled, onClick, props }, params) {
    if (!supported(params))
        return;
    const patch = props === null || props === void 0 ? void 0 : props(params);
    const subMenuProps = patch === null || patch === void 0 ? void 0 : patch.subMenuProps;
    if (subMenuProps) {
        // If customized menu list is provided, we restore the default focus zone behavior and set focus on mount.
        if (subMenuProps.onRenderMenuList) {
            subMenuProps.shouldFocusOnMount = false;
            subMenuProps.focusZoneProps = { shouldFocusOnMount: true };
        }
    }
    const textResult = text(params);
    const result = Object.assign(Object.assign(Object.assign({ key, text: textResult, ariaLabel: textResult, iconProps: { iconName: icon }, iconOnly: true }, (checked && {
        role: 'menuitemcheckbox',
        canCheck: true,
        checked: checked(params),
    })), { disabled: disabled === null || disabled === void 0 ? void 0 : disabled(params), onClick: () => {
            var _a, _b;
            onClick === null || onClick === void 0 ? void 0 : onClick(params);
            (_b = (_a = params.callbacks).onRibbonButtonClicked) === null || _b === void 0 ? void 0 : _b.call(_a, key);
        } }), patch);
    return result;
}
const bold = {
    key: 'bold',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].Bold),
    icon: 'Bold',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].name),
    disabled: params => !params.editor.can().toggleBold(),
    onClick: params => params.editor.chain().focus().toggleBold().run(),
};
const italic = {
    key: 'italic',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].Italic),
    icon: 'Italic',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"].name),
    disabled: params => !params.editor.can().toggleItalic(),
    onClick: params => params.editor.chain().focus().toggleItalic().run(),
};
const underline = {
    key: 'underline',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].Underline),
    icon: 'Underline',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].name),
    disabled: params => !params.editor.can().toggleUnderline(),
    onClick: params => params.editor.chain().focus().toggleUnderline().run(),
};
const strikethrough = {
    key: 'strikethrough',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].Strikethrough),
    icon: 'Strikethrough',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"].name),
    disabled: params => !params.editor.can().toggleStrike(),
    onClick: params => params.editor.chain().focus().toggleStrike().run(),
};
const backgroundColor = {
    key: 'background-color',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].BackgroundColor),
    icon: 'FabricTextHighlight',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _extensions__WEBPACK_IMPORTED_MODULE_13__[/* BackgroundColor */ "a"].name),
    props: ({ editor, strings }) => ({
        subMenuProps: {
            calloutProps: { className: _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* colorMenuCalloutClassName */ "a"], calloutWidth: 120 },
            items: _utils__WEBPACK_IMPORTED_MODULE_15__[/* backgroundColorValues */ "a"].map(([key, value]) => ({
                key: _types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldBackgroundColor */ "a"][key],
                onRender: () => (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ColorMenuItem__WEBPACK_IMPORTED_MODULE_16__[/* ColorMenuItem */ "a"], { text: strings.backgroundColor(key), color: value, onClick: () => 
                    // The first focus is to close the callout. The second focus is to focus back.
                    value
                        ? editor.chain().focus().focusLater(2).setBackgroundColor(value).run()
                        : editor.chain().focus().focusLater(2).unsetBackgroundColor().run() })),
            })),
        },
    }),
};
const textColor = {
    key: 'text-color',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].TextColor),
    icon: 'FontColor',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"].name),
    props: ({ editor, strings }) => ({
        subMenuProps: {
            calloutProps: { className: _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* colorMenuCalloutClassName */ "a"], calloutWidth: 120 },
            items: _utils__WEBPACK_IMPORTED_MODULE_15__[/* textColorValues */ "e"].map(([key, value]) => ({
                key: _types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldTextColor */ "d"][key],
                onRender: () => (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ColorMenuItem__WEBPACK_IMPORTED_MODULE_16__[/* ColorMenuItem */ "a"], { text: strings.textColor(key), color: value, onClick: () => 
                    // The first focus is to close the callout. The second focus is to focus back.
                    value
                        ? editor.chain().focus().focusLater(2).setColor(value).run()
                        : editor.chain().focus().focusLater(2).unsetColor().run() })),
            })),
        },
    }),
};
const fontSize = {
    key: 'font-size',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].FontSize),
    icon: 'FontSize',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _extensions__WEBPACK_IMPORTED_MODULE_13__[/* FontSize */ "d"].name),
    props: ({ editor, strings }) => ({
        subMenuProps: {
            calloutProps: { calloutWidth: 120 },
            items: _utils__WEBPACK_IMPORTED_MODULE_15__[/* fontSizeValues */ "d"].map(([key, value]) => ({
                key: _types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldFontSize */ "c"][key],
                text: strings.fontSize(key),
                onClick: () => 
                // The first focus is to close the callout. The second focus is to focus back.
                value
                    ? editor.chain().focus().focusLater(2).setFontSize(value).run()
                    : editor.chain().focus().focusLater(3).unsetFontSize().run(),
            })),
        },
    }),
};
const bulletedList = {
    key: 'bulleted-list',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].BulletedList),
    icon: 'BulletedList',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].name),
    onClick: params => params.editor.chain().focus().toggleBulletList().run(),
};
const numberedList = {
    key: 'numbered-list',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].NumberedList),
    icon: 'NumberedList',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"].name),
    onClick: params => params.editor.chain().focus().toggleOrderedList().run(),
};
const decreaseIndent = {
    key: 'decrease-indent',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].DecreaseIndent),
    icon: 'DecreaseIndentLegacy',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"].name) && Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].name),
    disabled: params => !params.editor
        .can()
        .chain()
        .first([({ commands }) => commands.liftListItem('listItem'), ({ commands }) => commands.unsetBlockquote()])
        .run(),
    onClick: params => params.editor
        .chain()
        .focus()
        .first([({ commands }) => commands.liftListItem('listItem'), ({ commands }) => commands.unsetBlockquote()])
        .run(),
};
const increaseIndent = {
    key: 'increase-indent',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].IncreaseIndent),
    icon: 'IncreaseIndentLegacy',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"].name) && Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].name),
    disabled: params => !params.editor
        .can()
        .chain()
        .first([({ commands }) => commands.sinkListItem('listItem'), ({ commands }) => commands.setBlockquote()])
        .run(),
    onClick: params => params.editor
        .chain()
        .focus()
        .first([({ commands }) => commands.sinkListItem('listItem'), ({ commands }) => commands.setBlockquote()])
        .run(),
};
const clearFormat = {
    key: 'clear-format',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].ClearFormat),
    icon: 'ClearFormatting',
    supported: () => true,
    onClick: params => params.editor.chain().focus().clearNodes().unsetAllMarks().run(),
};
const insertLinkKey = 'insert-link';
const insertLink = {
    key: insertLinkKey,
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].InsertLink),
    icon: 'Link',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _extensions__WEBPACK_IMPORTED_MODULE_13__[/* Link */ "e"].name),
    props: ({ editor, compact, strings, callbacks, render, unrender }) => {
        if (compact) {
            return {
                onClick: () => {
                    render(insertLinkKey, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_InsertLink__WEBPACK_IMPORTED_MODULE_17__[/* InsertLinkDialog */ "a"], { initialLink: Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* getCurrentLink */ "b"])(editor), onConfirm: link => {
                            // The first focus is to close the callout. The second focus is to focus back.
                            editor
                                .chain()
                                .focus()
                                .focusLater(2)
                                .insertLink(link.displayText, { href: link.url })
                                .run();
                            unrender(insertLinkKey);
                        }, onCancel: () => {
                            editor.chain().focus().run();
                            unrender(insertLinkKey);
                        }, normalizeUrl: callbacks.normalizeUrl, strings: strings }));
                },
            };
        }
        return {
            subMenuProps: {
                calloutProps: { className: _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* menuCalloutClassName */ "e"], calloutWidth: 320 },
                items: [{ key: insertLinkKey }],
                onRenderMenuList: () => (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_InsertLink__WEBPACK_IMPORTED_MODULE_17__[/* InsertLinkMenu */ "b"], { strings: strings, initialLink: Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* getCurrentLink */ "b"])(editor), onConfirm: link => 
                    // The first focus is to close the callout. The second focus is to focus back.
                    editor.chain().focus().focusLater(2).insertLink(link.displayText, { href: link.url }).run(), onCancel: () => editor.chain().focus().run(), normalizeUrl: callbacks.normalizeUrl })),
            },
        };
    },
};
const insertImage = {
    key: 'insert-image',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].InsertImage),
    icon: 'Image',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _extensions__WEBPACK_IMPORTED_MODULE_13__[/* File */ "c"].name),
    props: ({ editor }) => ({
        onClick: () => {
            Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_11__[/* selectFile */ "s"])({ accept: 'image/*' }).then(file => editor.chain().focus().insertFile(file).run(), () => editor.chain().focus().run());
        },
    }),
};
const insertFile = {
    key: 'insert-file',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].InsertFile),
    icon: 'Attach',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _extensions__WEBPACK_IMPORTED_MODULE_13__[/* File */ "c"].name),
    props: ({ editor }) => ({
        onClick: () => {
            Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_11__[/* selectFile */ "s"])().then(file => editor.chain().focus().insertFile(file).run(), () => editor.chain().focus().run());
        },
    }),
};
const insertTable = {
    key: 'insert-table',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].InsertTable),
    icon: 'Table',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_table__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].name),
    props: ({ editor, strings }) => ({
        subMenuProps: {
            calloutProps: { className: _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* menuCalloutClassName */ "e"] },
            items: [{ key: 'insert-table' }],
            onRenderMenuList: () => (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_InsertTable__WEBPACK_IMPORTED_MODULE_18__[/* InsertTable */ "a"], { maxTableSize: _RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* maxTableSize */ "d"], strings: strings, onConfirm: tableSize => 
                // The first focus is to close the callout. The second focus is to focus back.
                editor
                    .chain()
                    .focus()
                    .focusLater(2)
                    .insertTable(Object.assign(Object.assign({}, tableSize), { withHeaderRow: false }))
                    .run() })),
        },
    }),
};
const code = {
    key: 'code',
    text: params => params.strings.button(_types__WEBPACK_IMPORTED_MODULE_14__[/* RichTextFieldButton */ "b"].Code),
    icon: 'Code',
    supported: ({ editor }) => Object(_RichTextRibbon_utils__WEBPACK_IMPORTED_MODULE_19__[/* hasExtensionByName */ "c"])(editor, _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].name),
    checked: params => params.editor.isActive(_tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].name),
    onClick: params => params.editor.chain().focus().toggleCodeBlock().run(),
};
const defaultRibbonItemGroups = [
    [bold, italic, underline, strikethrough],
    [backgroundColor, textColor, fontSize],
    [bulletedList, numberedList, decreaseIndent, increaseIndent],
    [insertLink, insertImage, insertFile, insertTable, code, clearFormat],
];
const compactRibbonItemGroups = [
    [bold, italic, underline],
    [bulletedList, numberedList],
    [insertLink, clearFormat],
];


/***/ }),

/***/ "+j0w":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/index.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DesigningDecorator, DesigningTrailingActions, RenderingField, orderComparator, defaultFormConstants, defaultFormFeature, BaseDescriptor, CheckboxChoiceDescriptor, DateTimeDescriptor, defaultDescriptors, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor, uuidIdGenerator, idKeyExtractor, halfOrderGeneratorFactory, halfOrderGenerator, identitySanitizer, defaultFormStrings, defaultTrailingRender, defaultValidators, LengthValidator, NumberValidator, RequiredValidator, RichTextValidator, FormMode, FormQuestionType, TextNumberRestrictionType, ChoiceAppearance, QuestionAction, QuestionDisplayType, ChoiceAction, useShuffled, useChoiceChange, useChosenAndOther, getDisplayTypeOptions, getDisplayType, addNewFormEntry, getNewChoice, deriveFormQuestion, getTextNumberRestrictionOptions, deriveTextNumberRestriction, useActive, useRichTextFieldStyles, useTextFieldStyles, useCheckboxStyles, useChoiceGroupStyles, useChoiceGroupOptionStyles, useDropdownStyles, useOtherFieldStyles, useDatePickerStyles, useToggleStyles, fieldClassNames, createValidationSuccess, mergeValidations, validateEntry, validateEntries, isHtmlEmpty, hasErrorFiles, hasUploadingFiles */
/*! exports used: CheckboxChoiceDescriptor, ChoiceAction, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, FormQuestionType, LengthValidator, NumberValidator, QuestionAction, QuestionDisplayType, RadioChoiceDescriptor, RequiredValidator, RichTextDescriptor, RichTextValidator, TextDescriptor, TextNumberRestrictionType, defaultFormFeature, validateEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "l/RN");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "MXQI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "p/sv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "CYKX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _utilities__WEBPACK_IMPORTED_MODULE_3__["A"]; });







/***/ }),

/***/ "+lfS":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/designing.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getDisplayTypeOptions, getDisplayType, addNewFormEntry, getNewChoice, deriveFormQuestion, getTextNumberRestrictionOptions, deriveTextNumberRestriction */
/*! exports used: addNewFormEntry, deriveFormQuestion, deriveTextNumberRestriction, getDisplayType, getDisplayTypeOptions, getNewChoice, getTextNumberRestrictionOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDisplayTypeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addNewFormEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getNewChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deriveFormQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTextNumberRestrictionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deriveTextNumberRestriction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "p/sv");

/**
 * Gets the display type options for a form question.
 *
 * @param strings The strings to use for the options.
 * @returns The display type options.
 */
function getDisplayTypeOptions(strings) {
    return [
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].ShortText,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].ShortText),
            data: 'TextField',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText),
            data: 'Textbox',
            hidden: true,
            disabled: true,
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].RichText,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].RichText),
            data: 'TextParagraph',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number),
            data: 'NumberSymbol',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultipleChoice,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultipleChoice),
            data: 'CheckboxChecked',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice),
            data: 'RadioButton',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown),
            data: 'ChevronCircleDown',
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Date,
            text: strings.questionDisplayTypeOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Date),
            data: 'Calendar',
        },
    ];
}
/**
 * Gets the display type for a form question.
 *
 * @param question The form question.
 * @returns The display type.
 */
function getDisplayType(question) {
    switch (question.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Text:
            return question.number
                ? _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number
                : question.multiline
                    ? _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText
                    : _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].ShortText;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].RichText:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].RichText;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice:
            switch (question.appearance) {
                case _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Radio:
                    return _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice;
                case _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Dropdown:
                    return _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown;
                case _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Checkbox:
                    return _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultipleChoice;
            }
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].DateTime:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Date;
    }
}
/**
 * Add a new form entry to existing form entries and return the new form entries.
 * This function will deactivate all existing form entries and activate the new form entry.
 *
 * @param entries The form entries to add the new form entry to.
 * @param props.order The order of the new form entry.
 * @param props.idGenerator The id generator to use for the new form entry.
 * @param props.strings The strings to use for the new form entry.
 * @returns The new form entries with the new form entry added.
 */
function addNewFormEntry(entries, { order, idGenerator, strings }) {
    const newEntries = entries.map(entry => {
        if (!entry.active)
            return entry;
        const newEntry = Object.assign({}, entry);
        delete newEntry.active;
        return newEntry;
    });
    newEntries.push({
        question: {
            type: _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Text,
            id: idGenerator(),
            order,
            title: strings.questionNewTitle,
        },
        answer: {},
        active: true,
    });
    return newEntries;
}
function deriveBaseFormQuestion(question) {
    const base = {
        type: question.type,
        id: question.id,
        familyId: question.familyId,
        eTag: question.eTag,
        order: question.order,
        title: question.title,
        rtTitle: question.rtTitle,
        subtitle: question.subtitle,
        rtSubtitle: question.rtSubtitle,
        required: question.required,
        tooltip: question.tooltip,
        placeholder: question.placeholder,
    };
    Object.keys(base).forEach(key => {
        if (base[key] === undefined)
            delete base[key];
    });
    return base;
}
function getFormQuestionTypeFromDisplayType(displayType) {
    switch (displayType) {
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].ShortText:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Text;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].RichText:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].RichText;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultipleChoice:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Date:
            return _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].DateTime;
    }
}
/**
 * Gets a new choice that is not already in the list of choices.
 *
 * @param strings The strings to use for the new choice.
 * @param choices The list of choices to check against.
 * @returns A new choice.
 */
function getNewChoice(strings, choices) {
    let index = 0;
    while (true) {
        const newChoice = strings.choiceNew(index);
        if (!choices.includes(newChoice))
            return newChoice;
        index++;
    }
}
/**
 * Derives a new form question by a display type from an existing question.
 * If the display type is the same as the question's display type, the question is returned.
 * Otherwise, a new question is returned with the any common properties copied from the original question.
 *
 * @param displayType The display type to derive by.
 * @param question The question to derive from.
 * @param strings The strings to use for the new question.
 * @param constants The constants to use for the new question.
 * @returns A new form question.
 */
function deriveFormQuestion(displayType, question, strings, constants) {
    if (displayType === getDisplayType(question))
        return question;
    const base = deriveBaseFormQuestion(question);
    base.type = getFormQuestionTypeFromDisplayType(displayType);
    switch (base.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Text:
            return Object.assign(Object.assign(Object.assign({}, base), (displayType === _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number && { number: true })), (displayType === _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText && { multiline: true }));
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].RichText:
            return base;
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice:
            return Object.assign(Object.assign(Object.assign(Object.assign({}, base), { appearance: displayType === _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice
                    ? _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Radio
                    : displayType === _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown
                        ? _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Dropdown
                        : _types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAppearance */ "b"].Checkbox, choices: question.type === _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice
                    ? question.choices
                    : Array.from({ length: constants.initialChoices }, (_, i) => strings.choiceNew(i)) }), (question.type === _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice && question.allowOther && { allowOther: true })), (question.type === _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].Choice && question.shuffle && { shuffle: true }));
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].DateTime:
            return base;
    }
}
/**
 * Gets the options for the text number restriction dropdown.
 *
 * @param strings The strings to use for the options.
 * @returns The options for the text number restriction dropdown.
 */
function getTextNumberRestrictionOptions(strings) {
    return [
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThan,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThan),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThan,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThan),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].EqualTo,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].EqualTo),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotEqualTo,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotEqualTo),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].Between,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].Between),
        },
        {
            key: _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotBetween,
            text: strings.restrictionOption(_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotBetween),
        },
    ];
}
/**
 * Derives a text number restriction from a type and an optional restriction.
 * If the restriction is provided, a new restriction is returned with any compatible properties copied from the original
 * restriction. Otherwise, a new restriction is returned with default values.
 *
 * @param type The type to derive by.
 * @param restriction The restriction to derive from.
 * @returns A new text number restriction.
 */
// Justification: This function contains a switch statement and many fallbacks.
// eslint-disable-next-line complexity
function deriveTextNumberRestriction(type, restriction) {
    var _a, _b, _c, _d, _e, _f;
    const value = restriction && 'value' in restriction ? restriction.value : undefined;
    const min = restriction && 'min' in restriction ? restriction.min : undefined;
    const max = restriction && 'max' in restriction ? restriction.max : undefined;
    switch (type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThan:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo:
            return { type, min: (_b = (_a = min !== null && min !== void 0 ? min : max) !== null && _a !== void 0 ? _a : value) !== null && _b !== void 0 ? _b : 0 };
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThan:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo:
            return { type, max: (_d = (_c = max !== null && max !== void 0 ? max : min) !== null && _c !== void 0 ? _c : value) !== null && _d !== void 0 ? _d : 100 };
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].EqualTo:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotEqualTo:
            return { type, value: (_f = (_e = value !== null && value !== void 0 ? value : min) !== null && _e !== void 0 ? _e : max) !== null && _f !== void 0 ? _f : 0 };
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].Between:
        case _types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotBetween:
            return { type, min: min !== null && min !== void 0 ? min : 0, max: max !== null && max !== void 0 ? max : 100 };
    }
}


/***/ }),

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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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

/***/ "/yaY":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/strings.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: defaultFormStrings */
/*! exports used: defaultFormStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultFormStrings; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "p/sv");

const defaultFormStrings = {
    questionHint: (question, active) => active
        ? `Editing question "${question.title}". Press Tab and Shift+Tab to navigate between questions and option sections. Press arrow keys to navigate between options. Press Escape or Space to exit editing.`
        : `Question "${question.title}". Press Tab and Shift+Tab to navigate between questions. Press Enter or Space to edit.`,
    questionAction: action => defaultQuestionActionStrings[action],
    questionMockedFieldDefaultPlaceholder: type => type === _types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown ? 'Select your response' : 'Enter your response',
    questionDisplayTypeOption: type => defaultQuestionDisplayTypeOptionStrings[type],
    questionNewTitle: 'Question',
    questionTitle: 'Title',
    questionSubtitle: 'Subtitle (optional)',
    questionRequired: 'Required',
    questionRestriction: 'Restriction',
    questionShuffle: 'Shuffle',
    choiceAction: action => defaultChoiceActionStrings[action],
    choiceNew: index => `Option ${index + 1}`,
    choiceOther: 'Other',
    choicePlaceholder: 'Option',
    restrictionOption: type => defaultRestrictionOptionStrings[type],
    restrictionValuePlaceholder: key => defaultRestrictionValuePlaceholderStrings[key],
};
const defaultQuestionActionStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionAction */ "e"].Add]: 'Add question',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionAction */ "e"].Copy]: 'Copy question',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionAction */ "e"].Delete]: 'Delete question',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionAction */ "e"].MoveUp]: 'Move question up',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionAction */ "e"].MoveDown]: 'Move question down',
};
const defaultQuestionDisplayTypeOptionStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].ShortText]: 'Short text',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultilineText]: 'Long text',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].RichText]: 'Rich text',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Number]: 'Number',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].MultipleChoice]: 'Multiple choice',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].SingleChoice]: 'Single choice',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Dropdown]: 'Dropdown',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* QuestionDisplayType */ "f"].Date]: 'Date',
};
const defaultChoiceActionStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAction */ "a"].Add]: 'Add option',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAction */ "a"].AddOther]: 'Add "other" option',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAction */ "a"].Delete]: 'Delete option',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAction */ "a"].MoveUp]: 'Move option up',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* ChoiceAction */ "a"].MoveDown]: 'Move option down',
};
const defaultRestrictionOptionStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThan]: 'Greater than',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo]: 'Greater than or equal to',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThan]: 'Less than',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo]: 'Less than or equal to',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].EqualTo]: 'Equal to',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotEqualTo]: 'Not equal to',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].Between]: 'Between',
    [_types__WEBPACK_IMPORTED_MODULE_0__[/* TextNumberRestrictionType */ "g"].NotBetween]: 'Not between',
};
const defaultRestrictionValuePlaceholderStrings = {
    min: 'Min',
    max: 'Max',
    value: 'Value',
};


/***/ }),

/***/ "07Qi":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/default.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: defaultFormFeature */
/*! exports used: defaultFormFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultFormFeature; });
/* harmony import */ var _comparators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparators */ "O1Hc1");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "qGyp");
/* harmony import */ var _descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptors */ "TJ4v");
/* harmony import */ var _idGenerators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idGenerators */ "LKqx");
/* harmony import */ var _keyExtractors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyExtractors */ "Hbi6");
/* harmony import */ var _orderGenerators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderGenerators */ "wCOc");
/* harmony import */ var _sanitizers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sanitizers */ "nM/K");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strings */ "/yaY");
/* harmony import */ var _trailingRenders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trailingRenders */ "xg6H");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validators */ "ZDGZ");










const defaultFormFeature = {
    comparator: _comparators__WEBPACK_IMPORTED_MODULE_0__[/* orderComparator */ "a"],
    keyExtractor: _keyExtractors__WEBPACK_IMPORTED_MODULE_4__[/* idKeyExtractor */ "a"],
    trailingRender: _trailingRenders__WEBPACK_IMPORTED_MODULE_8__[/* defaultTrailingRender */ "a"],
    descriptors: _descriptors__WEBPACK_IMPORTED_MODULE_2__[/* defaultDescriptors */ "h"],
    validators: _validators__WEBPACK_IMPORTED_MODULE_9__[/* defaultValidators */ "e"],
    sanitizer: _sanitizers__WEBPACK_IMPORTED_MODULE_6__[/* identitySanitizer */ "a"],
    idGenerator: _idGenerators__WEBPACK_IMPORTED_MODULE_3__[/* uuidIdGenerator */ "a"],
    orderGenerator: _orderGenerators__WEBPACK_IMPORTED_MODULE_5__[/* halfOrderGenerator */ "a"],
    constants: _constants__WEBPACK_IMPORTED_MODULE_1__[/* defaultFormConstants */ "a"],
    strings: _strings__WEBPACK_IMPORTED_MODULE_7__[/* defaultFormStrings */ "a"],
};


/***/ }),

/***/ "0aOy":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/index.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: RichTextRibbon */
/*! exports used: RichTextRibbon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RichTextRibbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichTextRibbon */ "ijjI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _RichTextRibbon__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _RichTextRibbon_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichTextRibbon.types */ "ynDw");




/***/ }),

/***/ "1A5h":
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/PrimarySettings/PrimarySettings.tsx ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: PrimarySettings */
/*! exports used: PrimarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimarySettings; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "AH+P");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "hDQx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities */ "CYKX");
/* harmony import */ var _PrimarySettings_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrimarySettings.styles */ "Evv6");




function PrimarySettings({ question, onQuestionChange, constants, strings, }) {
    var _a, _b;
    const styles = Object(_PrimarySettings_styles__WEBPACK_IMPORTED_MODULE_6__[/* usePrimarySettingsStyles */ "a"])();
    const textFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* useTextFieldStyles */ "y"])();
    const dropdownStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* useDropdownStyles */ "u"])();
    const selectedDisplayType = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getDisplayType */ "f"])(question);
    const displayTypeOptions = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getDisplayTypeOptions */ "g"])(strings);
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.row },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], { value: (_a = question.title) !== null && _a !== void 0 ? _a : '', onChange: (_, value) => onQuestionChange(Object.assign(Object.assign({}, question), { rtTitle: '', title: value })), maxLength: constants.maxTitleLength, placeholder: strings.questionTitle, styles: textFieldStyles }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Dropdown */ "a"], { selectedKey: selectedDisplayType, onChange: (_, option) => option &&
                    onQuestionChange(Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* deriveFormQuestion */ "c"])(option.key, question, strings, constants)), options: displayTypeOptions, onRenderTitle: (options, defaultRender) => {
                    var _a;
                    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.optionRow },
                        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: styles.optionIcon, iconName: (_a = options === null || options === void 0 ? void 0 : options.find(({ key }) => key === selectedDisplayType)) === null || _a === void 0 ? void 0 : _a.data }), defaultRender === null || defaultRender === void 0 ? void 0 :
                        defaultRender(options)));
                }, onRenderOption: (option, defaultRender) => (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.optionRow },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: styles.optionIcon, iconName: option === null || option === void 0 ? void 0 : option.data }), defaultRender === null || defaultRender === void 0 ? void 0 :
                    defaultRender(option))), responsiveMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* ResponsiveMode */ "a"].unknown, styles: dropdownStyles })),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], { value: (_b = question.subtitle) !== null && _b !== void 0 ? _b : '', onChange: (_, value) => onQuestionChange(Object.assign(Object.assign({}, question), { rtSubtitle: '', subtitle: value })), maxLength: constants.maxSubtitleLength, placeholder: strings.questionSubtitle, styles: textFieldStyles })));
}


/***/ }),

/***/ "1P5e":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/RenderingField/RenderingField.tsx ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: RenderingField */
/*! exports used: RenderingField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderingField; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "lm3o");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "kvDL");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _DesigningDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DesigningDecorator */ "hE3l");
/* harmony import */ var _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PreviewingDecorator */ "cuY3");
/* harmony import */ var _RenderingField_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RenderingField.styles */ "jcKs");
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
 * This component renders the provided field component with some delegated props, and handles validation.
 */
function RenderingField(_a) {
    var { Component, onEntryChange } = _a, props = __rest(_a, ["Component", "onEntryChange"]);
    const { entry, context, feature } = props;
    const { mode } = context;
    const { validators, sanitizer } = feature;
    const { question, answer, errorMessage } = entry;
    const { title, rtTitle, subtitle, rtSubtitle, required, tooltip } = question;
    const styles = Object(_RenderingField_styles__WEBPACK_IMPORTED_MODULE_10__[/* useRenderingFieldStyles */ "a"])();
    const labelId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useId */ "a"])('label');
    const descriptionId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useId */ "a"])('description');
    const errorMessageId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useId */ "a"])('errormessage');
    const safeRtTitle = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => (rtTitle ? { __html: sanitizer(rtTitle) } : undefined), [rtTitle, sanitizer]);
    const safeRtSubtitle = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => (rtSubtitle ? { __html: sanitizer(rtSubtitle) } : undefined), [rtSubtitle, sanitizer]);
    const readOnly = mode !== _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Filling;
    const invalid = mode === _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Filling && Boolean(errorMessage);
    const showPlaceholder = mode !== _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Viewing;
    const delegatedProps = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (readOnly && { readOnly: true, 'aria-readonly': true })), ((title || safeRtTitle) && { 'aria-labelledby': labelId })), (required && { 'aria-required': true })), ((subtitle || safeRtSubtitle) && { 'aria-describedby': descriptionId })), (invalid && { invalid: true, 'aria-invalid': true, 'aria-errormessage': errorMessageId }))), [
        readOnly,
        title,
        safeRtTitle,
        labelId,
        required,
        subtitle,
        safeRtSubtitle,
        descriptionId,
        invalid,
        errorMessageId,
    ]);
    const handleEntryChange = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => onEntryChange &&
        ((newEntry) => {
            // Use the validators to validate the new entry.
            const validation = Object(_utilities__WEBPACK_IMPORTED_MODULE_7__[/* mergeValidations */ "m"])(validators.map(validator => validator.validate(newEntry)));
            // Set the entry's validity based on the failures.
            newEntry.invalid = !validation.valid;
            // If any validator fails and filling the form, set the error message and prevent change if necessary.
            delete newEntry.errorMessage;
            if (mode === _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Filling && !validation.valid) {
                newEntry.errorMessage = validation.errorMessage;
                if (validation.preventChange)
                    newEntry.answer = answer;
            }
            onEntryChange(newEntry);
        }), [onEntryChange, answer, validators, mode]);
    const field = (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: styles.headerContainer },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: styles.labelContainer },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", { id: labelId, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.label, required && styles.requiredLabel), 
                    // Justification: The label is sanitized before being rendered.
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML: safeRtTitle }, safeRtTitle ? undefined : title),
                tooltip && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TooltipHost */ "a"], { content: tooltip, directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DirectionalHint */ "a"].rightCenter, directionalHintForRTL: _fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DirectionalHint */ "a"].leftCenter },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Icon */ "a"], { tabIndex: 0, "aria-hidden": false, iconName: 'Info' })))),
            (subtitle || safeRtSubtitle) && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { id: descriptionId, className: styles.description, 
                // Justification: The subtitle is sanitized before being rendered.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML: safeRtSubtitle }, safeRtSubtitle ? undefined : subtitle))),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, Object.assign({}, props, { onEntryChange: handleEntryChange, showPlaceholder: showPlaceholder, delegatedProps: delegatedProps })),
        invalid && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { id: errorMessageId, className: styles.errorMessage, role: 'alert' }, errorMessage))));
    const Decorator = mode === _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Previewing
        ? _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_9__[/* PreviewingDecorator */ "a"]
        : mode === _types__WEBPACK_IMPORTED_MODULE_6__[/* FormMode */ "c"].Designing
            ? _DesigningDecorator__WEBPACK_IMPORTED_MODULE_8__[/* DesigningDecorator */ "a"]
            : undefined;
    return Decorator ? (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Decorator, Object.assign({}, props, { onEntryChange: handleEntryChange }), field)) : (field);
}


/***/ }),

/***/ "1eVB":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/DecimalTextField/index.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DecimalTextField */
/*! exports used: DecimalTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DecimalTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecimalTextField */ "rKmR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DecimalTextField__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "1f/+":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/TextDescriptor.tsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: TextDescriptor */
/*! exports used: TextDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");





const defaultOptions = {
    defaultPlaceholder: 'Enter your response',
};
const makeFieldComponent = ({ defaultPlaceholder }) => ({ entry, onEntryChange, showPlaceholder, delegatedProps }) => {
    var _a;
    const { question, answer } = entry;
    const { multiline, number } = question;
    const value = (_a = answer.content) !== null && _a !== void 0 ? _a : '';
    const onChange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((_, value) => {
        if (number)
            value = value === null || value === void 0 ? void 0 : value.trim();
        const newAnswer = Object.assign({}, entry.answer);
        newAnswer.content = value;
        if (!newAnswer.content)
            delete newAnswer.content;
        onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(Object.assign(Object.assign({}, entry), { answer: newAnswer }));
    }, [entry, number, onEntryChange]);
    const placeholder = showPlaceholder ? question.placeholder || defaultPlaceholder : undefined;
    const textFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* useTextFieldStyles */ "y"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], Object.assign({}, delegatedProps, { value: value, onChange: onChange, placeholder: placeholder, multiline: multiline, inputMode: number ? 'decimal' : 'text', resizable: false, styles: textFieldStyles })));
};
/**
 * The descriptor that renders a text field for text entries.
 * It supports both single-line and multi-line text fields, either with or without number restrictions.
 */
class TextDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_4__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a text entry, and the form is not in viewing mode.
     *
     * @param entry The entry to test.
     * @param context The context.
     * @returns Passes the test or not.
     */
    test(entry, context) {
        return entry.question.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* FormQuestionType */ "d"].Text && context.mode !== _types__WEBPACK_IMPORTED_MODULE_2__[/* FormMode */ "c"].Viewing;
    }
}


/***/ }),

/***/ "1iuO":
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/DesigningDecorator.styles.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useDesigningDecoratorStyles, useActiveDesigningDecoratorStyles */
/*! exports used: useActiveDesigningDecoratorStyles, useDesigningDecoratorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDesigningDecoratorStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useActiveDesigningDecoratorStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "CYKX");


const actionsWidth = 48;
const horizontalExtendingMargin = 6;
const verticalExtendingMargin = 16;
const useDesigningDecoratorStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        margin: `-${horizontalExtendingMargin}px -${verticalExtendingMargin}px `,
    },
    inactive: {
        marginInlineEnd: `${actionsWidth - horizontalExtendingMargin}px`,
        padding: '15px',
        border: '1px solid transparent',
        ':hover, :focus': {
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
            borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
            [_utilities__WEBPACK_IMPORTED_MODULE_2__[/* fieldClassNames */ "e"]]: {
                backgroundColor: `${theme.palette.white} !important`,
            },
        },
        borderRadius: '8px',
        cursor: 'pointer',
    },
}));
const useActiveDesigningDecoratorStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: '8px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
        borderInlineStartWidth: '4px',
        borderInlineStartStyle: 'solid',
        borderInlineStartColor: theme.palette.themePrimary,
        [_utilities__WEBPACK_IMPORTED_MODULE_2__[/* fieldClassNames */ "e"]]: {
            backgroundColor: `${theme.palette.white} !important`,
        },
    },
    settings: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        paddingInlineStart: '12px',
        gap: '12px',
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
        borderInlineEndWidth: '1px',
        borderInlineEndStyle: 'solid',
        borderInlineEndColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
    },
    separator: {
        height: '1px',
        marginBlock: '7.5px',
        backgroundColor: theme.palette.neutralTertiaryAlt,
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '7px',
        paddingInlineStart: '8px',
        backgroundColor: theme.palette.neutralLighterAlt,
        '.ms-Button-menuIcon': {
            display: 'none',
        },
    },
}));


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

/***/ "2JDv":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/sessions.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: defaultFileSession, FileSessions, isValidFileSession */
/*! exports used: FileSessions, defaultFileSession, isValidFileSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultFileSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isValidFileSession; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "LiEJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "Jg5f");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "z5yO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "lqvn");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const defaultFileSession = {};
/**
 * A class to manage file sessions.
 */
class FileSessions {
    constructor(service) {
        this.service = service;
        this.sessions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__[/* BehaviorSubject */ "a"]({});
    }
    /**
     * Get the file session by the key.
     *
     * @param key The key to identify the file session.
     * @returns The file session.
     */
    get(key) {
        return this.sessions$.value[key];
    }
    /**
     * Subscribe to the file session changes.
     *
     * @param key The key to identify the file session.
     * @param onChange The callback to be called when the file session changes.
     * @returns A function to unsubscribe the changes.
     */
    subscribe(key, onChange) {
        const subscription = this.sessions$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[/* map */ "a"])(sessions => sessions[key]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[/* filter */ "a"])(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* isDefined */ "l"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* distinctUntilChanged */ "a"])())
            .subscribe({ next: onChange });
        return () => subscription.unsubscribe();
    }
    /**
     * Manage an upload file session.
     *
     * @param key The key to identify the file session.
     * @param file The file to be uploaded.
     */
    upload(key, file) {
        if (this.get(key))
            return;
        this.put(key, { blob: file });
        this.performUpload(key, file);
    }
    /**
     * Manage a download file session.
     *
     * @param key The key to identify the file session.
     * @param url The URL to download the file.
     */
    download(key, url) {
        if (this.get(key))
            return;
        this.put(key, { url });
        this.performDownload(key, url);
        this.performThumbnail(key, url);
    }
    /**
     * Manage a thumbnail file session.
     *
     * @param key The key to identify the file session.
     * @param url The URL to thumbnail the file.
     */
    thumbnail(key, url) {
        if (this.get(key))
            return;
        this.put(key, { url });
        this.performThumbnail(key, url);
    }
    put(key, session) {
        this.sessions$.next(Object.assign(Object.assign({}, this.sessions$.value), { [key]: session }));
    }
    update(key, callback, preventClean) {
        const session = this.sessions$.value[key];
        const newSession = callback(preventClean ? session : cleanFileSession(session));
        this.put(key, newSession);
    }
    performUpload(key, file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imageSize = yield this.measureImageInternal(key, file);
                const url = yield this.uploadInternal(key, file);
                const thumbnail = yield this.thumbnailInternal(key, url);
                if (thumbnail && !imageSize)
                    yield this.measureImageInternal(key, file);
            }
            catch (_a) {
                // Ignore any error intentionally
            }
        });
    }
    performDownload(key, url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blob = yield this.downloadInternal(key, url);
                yield this.measureImageInternal(key, blob);
            }
            catch (_a) {
                // Ignore any error intentionally
            }
        });
    }
    performThumbnail(key, url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const thumbnail = yield this.thumbnailInternal(key, url);
                if (thumbnail)
                    yield this.measureImageInternal(key, thumbnail, true);
            }
            catch (_a) {
                // Ignore any error intentionally
            }
        });
    }
    handleError(key, error) {
        return new Promise(resolve => this.update(key, session => (Object.assign(Object.assign({}, session), { error, retry: resolve }))));
    }
    uploadInternal(key, file) {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                try {
                    this.update(key, session => (Object.assign(Object.assign({}, session), { loading: true })));
                    const url = yield this.service.upload(file);
                    this.update(key, session => (Object.assign(Object.assign({}, session), { url })));
                    return url;
                }
                catch (e) {
                    yield this.handleError(key, coerceError(e));
                }
            }
        });
    }
    downloadInternal(key, url) {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                try {
                    this.update(key, session => (Object.assign(Object.assign({}, session), { loading: true })));
                    const blob = yield this.service.download(url);
                    this.update(key, session => (Object.assign(Object.assign({}, session), { blob })));
                    return blob;
                }
                catch (error) {
                    yield this.handleError(key, coerceError(error));
                }
            }
        });
    }
    thumbnailInternal(key, url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.service.thumbnail)
                return;
            // The thumbnail is optional, so we don't manage loading and error states here
            try {
                const thumbnail = yield this.service.thumbnail(url);
                this.update(key, session => (Object.assign(Object.assign({}, session), { thumbnail })), true);
                return thumbnail;
            }
            catch (_a) {
                // Ignore any error intentionally
            }
        });
    }
    measureImageInternal(key, blob, preventOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* isImageMime */ "m"])(blob.type))
                return;
            try {
                const imageSize = yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* measureImage */ "o"])(blob);
                this.update(key, session => (preventOverride && session.imageSize ? session : Object.assign(Object.assign({}, session), { imageSize })), true);
                return imageSize;
            }
            catch (_a) {
                // Ignore any error intentionally
            }
        });
    }
}
function coerceError(error) {
    return error instanceof Error ? error : new Error('Unknown error');
}
function cleanFileSession(session) {
    const newSession = Object.assign({}, session);
    delete newSession.loading;
    delete newSession.error;
    delete newSession.retry;
    return newSession;
}
/**
 * Check if the file session is valid. A session is considered invalid if it does not have a URL or a blob, which means
 * the file cannot be uploaded or downloaded.
 *
 * @param session The file session.
 * @returns `true` if the file session is valid, otherwise `false`.
 */
function isValidFileSession(session) {
    return Boolean(session.blob || session.url);
}


/***/ }),

/***/ "2Pa2":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/context.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: FormMode */
/*! exports used: FormMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMode; });
var FormMode;
(function (FormMode) {
    FormMode[FormMode["Previewing"] = 0] = "Previewing";
    FormMode[FormMode["Designing"] = 1] = "Designing";
    FormMode[FormMode["Filling"] = 2] = "Filling";
    FormMode[FormMode["Viewing"] = 3] = "Viewing";
})(FormMode || (FormMode = {}));


/***/ }),

/***/ "3+76":
/*!***************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/SecondarySettings/index.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: SecondarySettings */
/*! exports used: SecondarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SecondarySettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecondarySettings */ "CakO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _SecondarySettings__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "3LNs":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/RequiredValidator.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: RequiredValidator */
/*! exports used: RequiredValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredValidator; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ "CYKX");

const defaultErrorMessage = 'This field is required';
/**
 * A validator that checks if the answer is empty.
 * If the question is not required, this validator will always pass.
 * Otherwise, this validator will fail if the answer is empty.
 */
class RequiredValidator {
    /**
     * Creates a required validator.
     *
     * @param options.errorMessage The error message if the answer is empty.
     * @returns A required validator.
     */
    constructor({ errorMessage = defaultErrorMessage } = {}) {
        this.errorMessage = errorMessage;
    }
    validate({ question, answer }) {
        if (!question.required) {
            return Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])();
        }
        const content = answer.content;
        // Check for undefined.
        if (content === undefined) {
            return this.createValidationFailure();
        }
        // Check for string.
        if (typeof content === 'string') {
            return content ? Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])() : this.createValidationFailure();
        }
        // Check for choice answer.
        if (typeof content === 'object' && 'chosen' in content) {
            return content.chosen.length || content.other ? Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])() : this.createValidationFailure();
        }
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])();
    }
    createValidationFailure() {
        return { valid: false, errorMessage: this.errorMessage };
    }
}


/***/ }),

/***/ "3vyY":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/link.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: Link */
/*! exports used: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");

const Link = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Mark */ "c"].create({
    name: 'link',
    priority: 1000,
    keepOnSplit: false,
    inclusive: false,
    addOptions() {
        return {
            HTMLAttributes: {
                target: '_blank',
                rel: 'noopener noreferrer',
            },
        };
    },
    addAttributes() {
        return {
            href: {
                default: null,
            },
            target: {
                default: this.options.HTMLAttributes.target,
            },
            rel: {
                default: this.options.HTMLAttributes.rel,
            },
        };
    },
    parseHTML() {
        return [{ tag: 'a:not([href^="javascript:"])' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['a', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* mergeAttributes */ "p"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setLink: attributes => ({ chain }) => chain().setMark(this.name, attributes).run(),
            toggleLink: attributes => ({ chain }) => chain().toggleMark(this.name, attributes, { extendEmptyMarkRange: true }).run(),
            unsetLink: () => ({ chain }) => chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run(),
            insertLink: (text, attributes) => ({ tr, dispatch, state }) => {
                const { selection } = tr;
                const { from, to } = selection;
                const mark = state.schema.marks.link.create(attributes);
                tr.insertText(text, from, to).addMark(from, from + text.length, mark);
                dispatch === null || dispatch === void 0 ? void 0 : dispatch(tr);
                return true;
            },
        };
    },
});


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
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].semibold,
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

/***/ "4HRY":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/SecondarySettings/SecondarySettings.styles.ts ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: useSecondarySettingsStyles */
/*! exports used: useSecondarySettingsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSecondarySettingsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useSecondarySettingsStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px 24px',
        flexWrap: 'wrap',
        '> .ms-Dropdown-container': { flexBasis: '200px' },
    },
});


/***/ }),

/***/ "4xOb":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/DropdownChoiceDescriptor.tsx ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: DropdownChoiceDescriptor */
/*! exports used: DropdownChoiceDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownChoiceDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "AH+P");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "hDQx");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");





const containerClassName = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
});
const defaultOptions = {
    defaultPlaceholder: 'Select your response',
    otherText: 'Other',
    otherPlaceholder: 'Enter your response',
};
const makeFieldComponent = ({ defaultPlaceholder, otherText, otherPlaceholder }) => ({ entry, onEntryChange, showPlaceholder, delegatedProps }) => {
    var _a;
    const { question, answer } = entry;
    const { choices, shuffle, allowOther } = question;
    const shuffledChoices = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useShuffled */ "x"])({ array: choices, enabled: shuffle && !delegatedProps.readOnly });
    const onChange = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useChoiceChange */ "p"])(entry, onEntryChange);
    const { chosen, otherKey, otherValue, otherSelected } = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useChosenAndOther */ "s"])(choices, answer.content);
    const options = shuffledChoices.map(choice => ({ key: choice, text: choice }));
    if (allowOther)
        options.push({ key: otherKey, text: otherText });
    const placeholder = showPlaceholder ? question.placeholder || defaultPlaceholder : undefined;
    const dropdownStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useDropdownStyles */ "u"])();
    const textFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useTextFieldStyles */ "y"])();
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: containerClassName },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Dropdown */ "a"], Object.assign({}, delegatedProps, { selectedKey: otherSelected ? otherKey : (_a = chosen[0]) !== null && _a !== void 0 ? _a : null, options: options, onChange: onChange &&
                ((_, option) => option && (option.key === otherKey ? onChange([], '') : onChange([option.key]))), placeholder: placeholder, 
            // Disable responsive mode to prevent the dropdown from being rendered as a panel.
            responsiveMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* ResponsiveMode */ "a"].unknown, styles: dropdownStyles })),
        otherSelected && (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* TextField */ "a"], Object.assign({}, delegatedProps, { value: otherValue, onChange: onChange && ((_, newValue) => onChange([], newValue)), placeholder: showPlaceholder ? otherPlaceholder : undefined, styles: textFieldStyles })))));
};
/**
 * The descriptor that renders a dropdown for choice entries with dropdown appearance.
 */
class DropdownChoiceDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_7__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a choice entry with dropdown appearance, and the form is not in viewing mode.
     *
     * @param entry The entry to test.
     * @param context The context.
     * @returns Passes the test or not.
     */
    test(entry, context) {
        return (entry.question.type === _types__WEBPACK_IMPORTED_MODULE_5__[/* FormQuestionType */ "d"].Choice &&
            entry.question.appearance === _types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAppearance */ "b"].Dropdown &&
            context.mode !== _types__WEBPACK_IMPORTED_MODULE_5__[/* FormMode */ "c"].Viewing);
    }
}


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

/***/ "5VXF":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/text.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TextNumberRestrictionType */
/*! exports used: TextNumberRestrictionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextNumberRestrictionType; });
var TextNumberRestrictionType;
(function (TextNumberRestrictionType) {
    TextNumberRestrictionType[TextNumberRestrictionType["GreaterThan"] = 0] = "GreaterThan";
    TextNumberRestrictionType[TextNumberRestrictionType["GreaterThanOrEqualTo"] = 1] = "GreaterThanOrEqualTo";
    TextNumberRestrictionType[TextNumberRestrictionType["LessThan"] = 2] = "LessThan";
    TextNumberRestrictionType[TextNumberRestrictionType["LessThanOrEqualTo"] = 3] = "LessThanOrEqualTo";
    TextNumberRestrictionType[TextNumberRestrictionType["EqualTo"] = 4] = "EqualTo";
    TextNumberRestrictionType[TextNumberRestrictionType["NotEqualTo"] = 5] = "NotEqualTo";
    TextNumberRestrictionType[TextNumberRestrictionType["Between"] = 6] = "Between";
    TextNumberRestrictionType[TextNumberRestrictionType["NotBetween"] = 7] = "NotBetween";
})(TextNumberRestrictionType || (TextNumberRestrictionType = {}));


/***/ }),

/***/ "6A1H":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/facade/index.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FormFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _FormFacade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFacade */ "h02v");
/* unused harmony reexport * */



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

/***/ "6vdQ":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/facade/FormFacade.styles.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: useFormFacadeStyles */
/*! exports used: useFormFacadeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormFacadeStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useFormFacadeStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
});


/***/ }),

/***/ "7DXh":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/background-color.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: BackgroundColor */
/*! exports used: BackgroundColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundColor; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");

const BackgroundColor = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Extension */ "b"].create({
    name: 'backgroundColor',
    addOptions() {
        return {
            types: ['textStyle'],
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    backgroundColor: {
                        default: null,
                        parseHTML: element => { var _a; return (_a = element.style.backgroundColor) === null || _a === void 0 ? void 0 : _a.replace(/['"]+/g, ''); },
                        renderHTML: attributes => {
                            if (!attributes.backgroundColor)
                                return {};
                            return { style: `background-color: ${attributes.backgroundColor}` };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setBackgroundColor: backgroundColor => ({ chain }) => chain().setMark('textStyle', { backgroundColor }).run(),
            unsetBackgroundColor: () => ({ chain }) => chain().setMark('textStyle', { backgroundColor: null }).removeEmptyTextStyle().run(),
        };
    },
});


/***/ }),

/***/ "8PXs":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/DesigningDecorator.active.tsx ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: ActiveDesigningDecorator */
/*! exports used: ActiveDesigningDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDesigningDecorator; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "YJ2P");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChoiceSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoiceSettings */ "jow1");
/* harmony import */ var _DesigningActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesigningActions */ "JCS6");
/* harmony import */ var _DesigningDecorator_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesigningDecorator.styles */ "1iuO");
/* harmony import */ var _MockedField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MockedField */ "AJAp");
/* harmony import */ var _PrimarySettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrimarySettings */ "he+s");
/* harmony import */ var _RestrictionSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestrictionSettings */ "Ka6D");
/* harmony import */ var _SecondarySettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SecondarySettings */ "3+76");









function ActiveDesigningDecorator(props) {
    const { entry, feature, onEntryChange } = props;
    const { question } = entry;
    const { constants, strings } = feature;
    const onQuestionChange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((newQuestion) => {
        // Delete answer content when question changes
        const newEntry = Object.assign({}, entry);
        newEntry.question = newQuestion;
        delete newEntry.answer.content;
        onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(newEntry);
    }, [entry, onEntryChange]);
    const styles = Object(_DesigningDecorator_styles__WEBPACK_IMPORTED_MODULE_4__[/* useActiveDesigningDecoratorStyles */ "a"])();
    const settingsProps = { question, onQuestionChange, constants, strings };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FocusZone */ "a"], { className: styles.settings },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PrimarySettings__WEBPACK_IMPORTED_MODULE_6__[/* PrimarySettings */ "a"], Object.assign({}, settingsProps)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MockedField__WEBPACK_IMPORTED_MODULE_5__[/* MockedField */ "a"], Object.assign({}, settingsProps)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChoiceSettings__WEBPACK_IMPORTED_MODULE_2__[/* ChoiceSettings */ "a"], Object.assign({}, settingsProps)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.separator, role: 'separator' }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondarySettings__WEBPACK_IMPORTED_MODULE_8__[/* SecondarySettings */ "a"], Object.assign({}, settingsProps)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RestrictionSettings__WEBPACK_IMPORTED_MODULE_7__[/* RestrictionSettings */ "a"], Object.assign({}, settingsProps))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FocusZone */ "a"], { className: styles.actions },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DesigningActions__WEBPACK_IMPORTED_MODULE_3__[/* DesigningActions */ "a"], Object.assign({}, props)))));
}


/***/ }),

/***/ "8Q8G":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/abstractions/index.ts ***!
  \************************************************************************************************************************/
/*! exports provided: Form, FormFragment */
/*! exports used: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "qkWA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _FormFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFragment */ "CKus");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "FmZ0");





/***/ }),

/***/ "9RBR":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningTrailingActions/DesigningTrailingActions.styles.ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: useDesigningTrailingActionsStyles */
/*! exports used: useDesigningTrailingActionsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDesigningTrailingActionsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useDesigningTrailingActionsStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});


/***/ }),

/***/ "9zlq":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/hack.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: Hack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Hack */
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");
/* harmony import */ var _tiptap_pm_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/pm/state */ "74l2");


const Hack = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Extension */ "b"].create({
    name: 'hack',
    addProseMirrorPlugins() {
        const plugins = [];
        /**
         * To take control of the `scrolledIntoView` property of the transaction, and force it to be `false`.
         * This is a workaround for the issue that auto scrolling (when typing) not working well with relative
         * positioning with overflow mechanism.
         *
         * For example, in the `CommentsViewingsItem` component, when `dockedPostComment` is enabled.
         *
         * @see https://github.com/ProseMirror/prosemirror-state/blob/88e2a24104481098f0f660e74240c0f846e7fd6e/src/state.ts#L39
         * @see https://github.com/ProseMirror/prosemirror-view/blob/2da3ae39492a2d74206c98fb6acc178277cfd7f2/src/index.ts#L180
         * @see https://github.com/ProseMirror/prosemirror-view/blob/2da3ae39492a2d74206c98fb6acc178277cfd7f2/src/index.ts#L237
         * @see https://github.com/ProseMirror/prosemirror-view/blob/2da3ae39492a2d74206c98fb6acc178277cfd7f2/src/domcoords.ts#L32
         */
        if (this.options.disableScrolledIntoView) {
            plugins.push(new _tiptap_pm_state__WEBPACK_IMPORTED_MODULE_1__[/* Plugin */ "c"]({
                filterTransaction: tr => {
                    Object.defineProperty(tr, 'scrolledIntoView', { value: false });
                    return true;
                },
            }));
        }
        return plugins;
    },
});


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
                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
                        color: palette.black,
                    },
                    '.ms-Breadcrumb-listItem:last-child .ms-Breadcrumb-item': {
                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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

/***/ "AJAp":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/MockedField/index.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: MockedField */
/*! exports used: MockedField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _MockedField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockedField */ "nKrk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MockedField__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "ANB6":
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/ChoiceSettings/ChoiceSettings.tsx ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: ChoiceSettings */
/*! exports used: ChoiceSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoiceSettings; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "BFcr");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities */ "CYKX");
/* harmony import */ var _ChoiceSettings_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChoiceSettings.styles */ "hh3E");





function ChoiceSettings({ question, onQuestionChange, constants, strings, }) {
    const styles = Object(_ChoiceSettings_styles__WEBPACK_IMPORTED_MODULE_7__[/* useChoiceSettingsStyles */ "a"])();
    const textFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useTextFieldStyles */ "y"])();
    if (question.type !== _types__WEBPACK_IMPORTED_MODULE_5__[/* FormQuestionType */ "d"].Choice)
        return null;
    const reachMinChoices = question.choices.length <= constants.minChoices;
    const reachMaxChoices = question.choices.length >= constants.maxChoices;
    const decoratorClassName = question.appearance === _types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAppearance */ "b"].Checkbox
        ? Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.decorator, styles.checkbox)
        : question.appearance === _types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAppearance */ "b"].Radio
            ? Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.decorator, styles.radio)
            : undefined;
    const decorator = decoratorClassName && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: decoratorClassName });
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.root },
        question.choices.map((choice, index) => (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.choiceRow, key: index },
            decorator,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TextField */ "a"], { value: choice, onChange: (_, value) => {
                    const newChoices = [...question.choices];
                    newChoices[index] = value !== null && value !== void 0 ? value : '';
                    onQuestionChange(Object.assign(Object.assign({}, question), { choices: newChoices }));
                }, maxLength: constants.maxChoiceLength, placeholder: strings.choicePlaceholder, styles: textFieldStyles }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Delete' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].Delete), disabled: reachMinChoices, onClick: () => {
                    const newChoices = [...question.choices];
                    newChoices.splice(index, 1);
                    onQuestionChange(Object.assign(Object.assign({}, question), { choices: newChoices }));
                } }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Up' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].MoveUp), disabled: index === 0, onClick: () => {
                    const newChoices = [...question.choices];
                    [newChoices[index - 1], newChoices[index]] = [newChoices[index], newChoices[index - 1]];
                    onQuestionChange(Object.assign(Object.assign({}, question), { choices: newChoices }));
                } }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Down' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].MoveDown), disabled: index === question.choices.length - 1, onClick: () => {
                    const newChoices = [...question.choices];
                    [newChoices[index + 1], newChoices[index]] = [newChoices[index], newChoices[index + 1]];
                    onQuestionChange(Object.assign(Object.assign({}, question), { choices: newChoices }));
                } })))),
        question.allowOther && (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.choiceRow },
            decorator,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TextField */ "a"], { placeholder: strings.choiceOther, disabled: true, styles: textFieldStyles }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { iconProps: { iconName: 'Delete' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].Delete), onClick: () => {
                    const newQuestion = Object.assign({}, question);
                    delete newQuestion.allowOther;
                    onQuestionChange(newQuestion);
                } }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { className: styles.hidden, iconProps: { iconName: 'Up' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].MoveUp), disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { className: styles.hidden, iconProps: { iconName: 'Down' }, title: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].MoveDown), disabled: true }))),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.actionRow },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* ActionButton */ "a"], { iconProps: { iconName: 'Add' }, text: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].Add), disabled: reachMaxChoices, onClick: () => {
                    const newChoices = [...question.choices, Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* getNewChoice */ "h"])(strings, question.choices)];
                    onQuestionChange(Object.assign(Object.assign({}, question), { choices: newChoices }));
                } }),
            !question.allowOther && (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* ActionButton */ "a"], { text: strings.choiceAction(_types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAction */ "a"].AddOther), onClick: () => onQuestionChange(Object.assign(Object.assign({}, question), { allowOther: true })) })))));
}


/***/ }),

/***/ "AVTI":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/RestrictionSettings/RestrictionSettings.styles.ts ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: useRestrictionSettingsStyles */
/*! exports used: useRestrictionSettingsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRestrictionSettingsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const useRestrictionSettingsStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        maxWidth: '400px',
        '> .ms-Dropdown-container': {
            flexGrow: 3,
            flexBasis: '160px',
        },
    },
    values: {
        flex: '1 0 min-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        '> .ms-TextField': {
            flexGrow: 1,
            minWidth: '64px',
        },
    },
    between: {
        gap: '20px',
        position: 'relative',
        ':before': {
            content: '""',
            position: 'absolute',
            insetBlock: 'calc((100% - 1px) / 2)',
            insetInline: 'calc((100% - 4px) / 2)',
            backgroundColor: theme.palette.black,
        },
    },
}));


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

/***/ "BYAC":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/hooks.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: useActive */
/*! exports used: useActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useActive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const pointerEventName = 'pointerdown';
const keyboardEventName = 'keydown';
const layerHostId = 'fluent-default-layer-host';
/**
 * A hook that manages the active state of an element.
 * - The element is activated or deactivated when pointer events and keyboard events happen.
 * - The active element is ensured to be visible when some mutation happens in the parent element.
 *
 * @property active The current active state.
 * @property setActive A function that sets the active state.
 * @returns A ref that should be attached to the element that should be managed.
 */
function useActive({ active, setActive }) {
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const activeRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(active);
    activeRef.current = active;
    const setActiveRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(setActive);
    setActiveRef.current = setActive;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const pointerHandler = (event) => {
            if (happensInDifferentLayers(element, event))
                return;
            const nextActive = happensInElement(element, event);
            if (nextActive === activeRef.current)
                return;
            setActiveRef.current(nextActive);
            if (nextActive)
                element.focus();
        };
        const keyHandler = (event) => {
            if (happensInDifferentLayers(element, event))
                return;
            const inElement = happensInElement(element, event);
            const onElement = event.target === element;
            const nextActive = getNextActiveOnKeyboardEvent(activeRef.current, event.key, inElement, onElement);
            if (nextActive === activeRef.current)
                return;
            setActiveRef.current(nextActive);
            if (onElement) {
                element.focus();
                event.preventDefault();
            }
        };
        const document = element.ownerDocument;
        const controller = new AbortController();
        document.addEventListener(pointerEventName, pointerHandler, { signal: controller.signal, capture: true });
        document.addEventListener(keyboardEventName, keyHandler, { signal: controller.signal, capture: true });
        return () => controller.abort();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        if (!active)
            return;
        const element = elementRef.current;
        if (!element)
            return;
        const parentElement = element.parentElement;
        if (!parentElement)
            return;
        ensureElementVisible(element);
        const observer = new MutationObserver(() => ensureElementVisible(element));
        observer.observe(parentElement, { childList: true });
        return () => observer.disconnect();
    }, [active]);
    return elementRef;
}
/**
 * Determines if the event happens in the element.
 *
 * @param element The element.
 * @param event The event.
 * @returns Whether the event happens in the element.
 */
function happensInElement(element, event) {
    return event.target instanceof Node && element.contains(event.target);
}
/**
 * Determines if the event happens in different layers. Layer is a concept in Fluent UI.
 *
 * @param element The element.
 * @param event The event.
 * @returns Whether the event happens in different layers.
 */
function happensInDifferentLayers(element, event) {
    const layerHost = document.getElementById(layerHostId);
    if (!layerHost)
        return false;
    const targetLayer = Array.from(layerHost.children).find(layer => happensInElement(layer, event));
    if (!targetLayer)
        return false;
    return !targetLayer.contains(element);
}
/**
 * Determines the next active state based on the keyboard event.
 *
 * - Enter: Activates the element if the event happens in the element; deactivates the element otherwise.
 * - Escape: Deactivates the element if the event happens in the element; leaves the active state unchanged otherwise.
 * - Space: Deactivates the element if the event happens on but not in the element; activates the element if the event happens on the element.
 * - Other keys: Leaves the active state unchanged.
 *
 * @param current The current active state.
 * @param key The key of the keyboard event.
 * @param inElement Indicates if the event happens in the element.
 * @param onElement Indicates if the event happens on the element.
 * @returns The next active state.
 */
function getNextActiveOnKeyboardEvent(current, key, inElement, onElement) {
    switch (key) {
        case 'Enter':
            return inElement;
        case 'Escape':
            return current && !inElement;
        case ' ':
            return current ? inElement && !onElement : onElement;
        default:
            return current;
    }
}
/**
 * Ensures the element is visible in the viewport by scrolling it into view.
 *
 * @param element The element.
 */
function ensureElementVisible(element) {
    element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}


/***/ }),

/***/ "CKus":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/abstractions/FormFragment.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: FormFragment */
/*! exports used: FormFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFragment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A form fragment is responsible for rendering a single form entry with the given context and feature.
 *
 * It makes onEntryChange's reference stable so that the entry component can memoize depending on it.
 */
function FormFragment(props) {
    const { context, feature, onContextChange, index } = props;
    const { entries } = context;
    const { descriptors } = feature;
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(context);
    contextRef.current = context;
    const onContextChangeRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(onContextChange);
    onContextChangeRef.current = onContextChange;
    const entry = entries[index];
    const onEntryChange = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((entry) => {
        var _a;
        const context = contextRef.current;
        const onContextChange = onContextChangeRef.current;
        if (!onContextChange)
            return;
        const newEntries = [...context.entries];
        newEntries[index] = entry;
        (_a = onContextChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onContextChangeRef, Object.assign(Object.assign({}, context), { entries: newEntries }));
    }, [index]);
    // Find the first descriptor that matches the entry.
    const descriptor = descriptors.find(descriptor => descriptor.test(entry, context, feature));
    if (!descriptor)
        return null;
    return descriptor.render(Object.assign({ entry, onEntryChange }, props));
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

/***/ "CYIA":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: File */
/*! exports used: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension */ "X+M4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extension__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "CYKX":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: useShuffled, useChoiceChange, useChosenAndOther, getDisplayTypeOptions, getDisplayType, addNewFormEntry, getNewChoice, deriveFormQuestion, getTextNumberRestrictionOptions, deriveTextNumberRestriction, useActive, useRichTextFieldStyles, useTextFieldStyles, useCheckboxStyles, useChoiceGroupStyles, useChoiceGroupOptionStyles, useDropdownStyles, useOtherFieldStyles, useDatePickerStyles, useToggleStyles, fieldClassNames, createValidationSuccess, mergeValidations, validateEntry, validateEntries, isHtmlEmpty, hasErrorFiles, hasUploadingFiles */
/*! exports used: addNewFormEntry, createValidationSuccess, deriveFormQuestion, deriveTextNumberRestriction, fieldClassNames, getDisplayType, getDisplayTypeOptions, getNewChoice, getTextNumberRestrictionOptions, hasErrorFiles, hasUploadingFiles, isHtmlEmpty, mergeValidations, useActive, useCheckboxStyles, useChoiceChange, useChoiceGroupOptionStyles, useChoiceGroupStyles, useChosenAndOther, useDatePickerStyles, useDropdownStyles, useOtherFieldStyles, useRichTextFieldStyles, useShuffled, useTextFieldStyles, useToggleStyles, validateEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _choice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choice */ "T2qG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _choice__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _choice__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "x", function() { return _choice__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _designing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designing */ "+lfS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _designing__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "BYAC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "pi/W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "w", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "z", function() { return _styles__WEBPACK_IMPORTED_MODULE_3__["j"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "toHN");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ "mw6P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["f"]; });









/***/ }),

/***/ "CakO":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/SecondarySettings/SecondarySettings.tsx ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: SecondarySettings */
/*! exports used: SecondarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondarySettings; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "z7Wb");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities */ "CYKX");
/* harmony import */ var _SecondarySettings_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecondarySettings.styles */ "4HRY");





function SecondarySettings({ question, onQuestionChange, strings }) {
    const styles = Object(_SecondarySettings_styles__WEBPACK_IMPORTED_MODULE_4__[/* useSecondarySettingsStyles */ "a"])();
    const toggleStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* useToggleStyles */ "z"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.row },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Toggle */ "a"], { checked: question.required, onChange: (_, checked) => {
                const newQuestion = Object.assign({}, question);
                if (checked) {
                    newQuestion.required = true;
                }
                else {
                    delete newQuestion.required;
                }
                onQuestionChange(newQuestion);
            }, label: strings.questionRequired, inlineLabel: true, styles: toggleStyles }),
        question.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* FormQuestionType */ "d"].Choice && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Toggle */ "a"], { checked: question.shuffle, onChange: (_, checked) => {
                const newQuestion = Object.assign({}, question);
                if (checked) {
                    newQuestion.shuffle = true;
                }
                else {
                    delete newQuestion.shuffle;
                }
                onQuestionChange(newQuestion);
            }, label: strings.questionShuffle, inlineLabel: true, styles: toggleStyles })),
        question.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* FormQuestionType */ "d"].Text && question.number && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Toggle */ "a"], { checked: Boolean(question.restriction), onChange: (_, checked) => {
                const newQuestion = Object.assign({}, question);
                if (checked) {
                    newQuestion.restriction = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* deriveTextNumberRestriction */ "d"])(_types__WEBPACK_IMPORTED_MODULE_2__[/* TextNumberRestrictionType */ "g"].GreaterThan);
                }
                else {
                    delete newQuestion.restriction;
                }
                onQuestionChange(newQuestion);
            }, label: strings.questionRestriction, inlineLabel: true, styles: toggleStyles }))));
}


/***/ }),

/***/ "D0sl":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/utils.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: useUpdateAttributes, useDeleteNode, AccomodatePolicy, accommodateImage */
/*! exports used: AccomodatePolicy, accommodateImage, useDeleteNode, useUpdateAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useUpdateAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useDeleteNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccomodatePolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return accommodateImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A hook to make a function to update attributes.
 *
 * @property editor The editor.
 * @property key The key of the file session.
 * @returns The function to update attributes.
 */
function useUpdateAttributes({ editor, key, }) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((attrs, withoutHistory) => {
        const tr = editor.state.tr;
        tr.doc.descendants((node, pos) => {
            if (node.attrs.key !== key)
                return;
            tr.setNodeMarkup(pos, undefined, Object.assign(Object.assign({}, node.attrs), attrs));
            return false;
        });
        if (withoutHistory)
            tr.setMeta('addToHistory', false);
        editor.view.dispatch(tr);
    }, [editor, key]);
}
/**
 * A hook to make a function to delete a node.
 *
 * @property editor The editor.
 * @property key The key of the file session.
 * @returns The function to delete a node.
 */
function useDeleteNode({ editor, key }) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(withoutHistory => {
        const tr = editor.state.tr;
        tr.doc.descendants((node, pos) => {
            if (node.attrs.key !== key)
                return;
            tr.delete(pos, pos + node.nodeSize);
            return false;
        });
        if (withoutHistory)
            tr.setMeta('addToHistory', false);
        editor.view.dispatch(tr);
    }, [editor, key]);
}
/**
 * Accomodate policy for an image.
 *
 * @property Width Scale the width equal to the container.
 * @property Height Scale the height equal to the container.
 * @property Contain Scale the image within the container, maintaining aspect ratio.
 * @property ScaleDown Similar to contain, but only scale down.
 * @property Cover Scale the image to cover the container, maintaining aspect ratio.
 */
var AccomodatePolicy;
(function (AccomodatePolicy) {
    AccomodatePolicy[AccomodatePolicy["Width"] = 0] = "Width";
    AccomodatePolicy[AccomodatePolicy["Height"] = 1] = "Height";
    AccomodatePolicy[AccomodatePolicy["Contain"] = 2] = "Contain";
    AccomodatePolicy[AccomodatePolicy["ScaleDown"] = 3] = "ScaleDown";
    AccomodatePolicy[AccomodatePolicy["Cover"] = 4] = "Cover";
})(AccomodatePolicy || (AccomodatePolicy = {}));
/**
 * Accommodate an image in a container, scaling it to fit the container while maintaining aspect ratio.
 *
 * @param image The image.
 * @property selector The selector of the container.
 * @property policy The policy to accommodate the image.
 */
function accommodateImage(image, { selector, policy }) {
    const container = image.closest(selector);
    if (!container)
        return;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const scale = policy === AccomodatePolicy.Width
        ? containerWidth / imageWidth
        : policy === AccomodatePolicy.Height
            ? containerHeight / imageHeight
            : policy === AccomodatePolicy.Contain
                ? Math.min(containerWidth / imageWidth, containerHeight / imageHeight)
                : policy === AccomodatePolicy.ScaleDown
                    ? Math.min(containerWidth / imageWidth, containerHeight / imageHeight, 1)
                    : policy === AccomodatePolicy.Cover
                        ? Math.max(containerWidth / imageWidth, containerHeight / imageHeight)
                        : 1;
    image.width = imageWidth * scale;
    image.height = imageHeight * scale;
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

/***/ "DigB":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: CollapsibleTextField, DecimalTextField */
/*! exports used: DecimalTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CollapsibleTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsibleTextField */ "vAwM");
/* harmony import */ var _DecimalTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecimalTextField */ "1eVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DecimalTextField__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),

/***/ "DrRq":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/DateTimeDescriptor.tsx ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: DateTimeDescriptor */
/*! exports used: DateTimeDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "LZLq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");
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





const defaultOptions = {
    defaultPlaceholder: 'Select a date',
};
const makeFieldComponent = (_a) => {
    var { defaultPlaceholder } = _a, options = __rest(_a, ["defaultPlaceholder"]);
    return ({ entry, onEntryChange, showPlaceholder, delegatedProps }) => {
        const { question, answer } = entry;
        const value = answer.content;
        const onChange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((value) => {
            const newAnswer = Object.assign({}, entry.answer);
            newAnswer.content = value !== null && value !== void 0 ? value : undefined;
            if (!newAnswer.content)
                delete newAnswer.content;
            onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(Object.assign(Object.assign({}, entry), { answer: newAnswer }));
        }, [entry, onEntryChange]);
        const placeholder = showPlaceholder ? question.placeholder || defaultPlaceholder : undefined;
        const datePickerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
        // Workaround for read only (previewing mode), since the DatePicker is uncontrollable component and does not
        // support read only. When read only and no value, the picker will be reset after selected any date.
        const hasValue = value !== undefined;
        const calendarProps = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
            if (!delegatedProps.readOnly || hasValue)
                return;
            return {
                onSelectDate: () => {
                    var _a;
                    const reset = (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.reset;
                    if (reset)
                        requestAnimationFrame(reset);
                },
            };
        }, [delegatedProps.readOnly, hasValue]);
        const datePickerStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* useDatePickerStyles */ "t"])();
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* DatePicker */ "a"], Object.assign({}, delegatedProps, { componentRef: datePickerRef, value: value, onSelectDate: onChange, placeholder: placeholder, showGoToToday: false, calendarProps: calendarProps, textField: delegatedProps, styles: datePickerStyles }, options)));
    };
};
/**
 * The descriptor that renders a date time field for date time entries.
 */
class DateTimeDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_4__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a date time entry, and the form is not in viewing mode.
     *
     * @param entry The entry to test.
     * @param context The context.
     * @returns Passes the test or not.
     */
    test(entry, context) {
        return entry.question.type === _types__WEBPACK_IMPORTED_MODULE_2__[/* FormQuestionType */ "d"].DateTime && context.mode !== _types__WEBPACK_IMPORTED_MODULE_2__[/* FormMode */ "c"].Viewing;
    }
}


/***/ }),

/***/ "EhF7":
/*!*******************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/PreviewingDecorator/PreviewingDecorator.styles.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: usePreviewingDecoratorStyles */
/*! exports used: usePreviewingDecoratorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePreviewingDecoratorStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");

const usePreviewingDecoratorStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        position: 'relative',
    },
    mask: {
        position: 'absolute',
        inset: 0,
    },
});


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

/***/ "Evv6":
/*!******************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/PrimarySettings/PrimarySettings.styles.ts ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: usePrimarySettingsStyles */
/*! exports used: usePrimarySettingsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePrimarySettingsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const usePrimarySettingsStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        '> .ms-TextField': {
            flexGrow: 7,
            flexBasis: '240px',
        },
        '> .ms-Dropdown-container': {
            flexGrow: 1,
            flexBasis: '160px',
        },
    },
    optionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
    optionIcon: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size18,
    },
});


/***/ }),

/***/ "FmZ0":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/abstractions/types.ts ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "GEz/":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/defaults.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: Defaults */
/*! exports used: Defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Defaults; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-blockquote */ "kY5X");
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-bold */ "BXAt");
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "sS/B");
/* harmony import */ var _tiptap_extension_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-code */ "2/lS");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-code-block */ "Pi6q");
/* harmony import */ var _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-color */ "BC8r");
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-document */ "HwXF");
/* harmony import */ var _tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-dropcursor */ "s1it");
/* harmony import */ var _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-gapcursor */ "FO84");
/* harmony import */ var _tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tiptap/extension-hard-break */ "ggMf");
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tiptap/extension-heading */ "sNg9");
/* harmony import */ var _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tiptap/extension-history */ "luF9");
/* harmony import */ var _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tiptap/extension-horizontal-rule */ "Uhri");
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tiptap/extension-italic */ "bYW4");
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tiptap/extension-list-item */ "F8rg");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "cRdh");
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tiptap/extension-paragraph */ "/iGn");
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tiptap/extension-strike */ "QgqF");
/* harmony import */ var _tiptap_extension_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tiptap/extension-table */ "IuJI");
/* harmony import */ var _tiptap_extension_table_cell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tiptap/extension-table-cell */ "m46B");
/* harmony import */ var _tiptap_extension_table_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tiptap/extension-table-header */ "4+Dq");
/* harmony import */ var _tiptap_extension_table_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tiptap/extension-table-row */ "muqe");
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tiptap/extension-text */ "gwFp");
/* harmony import */ var _tiptap_extension_text_style__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tiptap/extension-text-style */ "OyMH");
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tiptap/extension-underline */ "IscX");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _background_color__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./background-color */ "7DXh");
/* harmony import */ var _font_size__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./font-size */ "VARY");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./link */ "3vyY");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./misc */ "jeGZ");































const defaults = [
    // Extensions
    { key: 'history', extension: _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_12__[/* History */ "a"] },
    { key: 'dropcursor', extension: _tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_8__[/* Dropcursor */ "a"] },
    { key: 'gapcursor', extension: _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_9__[/* Gapcursor */ "a"] },
    { key: 'misc', extension: _misc__WEBPACK_IMPORTED_MODULE_30__[/* Misc */ "a"] },
    // Nodes
    { key: 'document', extension: _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_7__[/* Document */ "a"] },
    { key: 'text', extension: _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_23__[/* Text */ "a"] },
    // Nodes.blocks
    { key: 'heading', extension: _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_11__[/* Heading */ "a"] },
    { key: 'paragraph', extension: _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_17__[/* Paragraph */ "a"] },
    { key: 'blockquote', extension: _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_1__[/* Blockquote */ "a"] },
    { key: 'codeBlock', extension: _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_5__[/* CodeBlock */ "a"] },
    { key: 'hardBreak', extension: _tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_10__[/* HardBreak */ "a"] },
    { key: 'horizontalRule', extension: _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_13__[/* HorizontalRule */ "a"] },
    // Nodes.lists
    { key: 'listItem', extension: _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_15__[/* ListItem */ "a"] },
    { key: 'bulletList', extension: _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_3__[/* BulletList */ "a"] },
    { key: 'orderedList', extension: _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_16__[/* OrderedList */ "a"] },
    // Nodes.tables
    { key: 'table', extension: _tiptap_extension_table__WEBPACK_IMPORTED_MODULE_19__[/* Table */ "a"] },
    { key: 'tableRow', extension: _tiptap_extension_table_row__WEBPACK_IMPORTED_MODULE_22__[/* TableRow */ "a"] },
    { key: 'tableHeader', extension: _tiptap_extension_table_header__WEBPACK_IMPORTED_MODULE_21__[/* TableHeader */ "a"] },
    { key: 'tableCell', extension: _tiptap_extension_table_cell__WEBPACK_IMPORTED_MODULE_20__[/* TableCell */ "a"] },
    // Marks.styles
    // Must be before other marks to ensure it's applied at the most top level
    // Otherwise, for example, strike won't know the current font size or color, then it can't apply the correct styles
    { key: 'textStyle', extension: _tiptap_extension_text_style__WEBPACK_IMPORTED_MODULE_24__[/* TextStyle */ "a"] },
    { key: 'backgroundColor', extension: _background_color__WEBPACK_IMPORTED_MODULE_27__[/* BackgroundColor */ "a"] },
    { key: 'color', extension: _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_6__[/* Color */ "a"] },
    { key: 'fontSize', extension: _font_size__WEBPACK_IMPORTED_MODULE_28__[/* FontSize */ "a"] },
    // Marks.formats
    { key: 'bold', extension: _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_2__[/* Bold */ "a"] },
    { key: 'italic', extension: _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_14__[/* Italic */ "a"] },
    { key: 'underline', extension: _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_25__[/* Underline */ "a"] },
    { key: 'strike', extension: _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_18__[/* Strike */ "a"] },
    // Marks.embeds
    { key: 'link', extension: _link__WEBPACK_IMPORTED_MODULE_29__[/* Link */ "a"] },
    { key: 'code', extension: _tiptap_extension_code__WEBPACK_IMPORTED_MODULE_4__[/* Code */ "a"] },
];
const Defaults = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Extension */ "b"].create({
    name: 'defaults',
    addExtensions() {
        return defaults
            .map(({ key, extension }) => {
            var _a;
            const options = (_a = this.options) === null || _a === void 0 ? void 0 : _a[key];
            if (options === false)
                return;
            if (options === undefined)
                return extension;
            return extension.configure(options);
        })
            .filter(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_26__[/* isDefined */ "l"]);
    },
});


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

/***/ "Hbi6":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/keyExtractors.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: idKeyExtractor */
/*! exports used: idKeyExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return idKeyExtractor; });
/**
 * A key extractor that uses the question id as the key.
 *
 * @param entry The entry.
 * @returns The key.
 */
const idKeyExtractor = entry => entry.question.id;


/***/ }),

/***/ "I474":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: Form, FormFragment, FormFacade, DesigningDecorator, DesigningTrailingActions, RenderingField, orderComparator, defaultFormConstants, defaultFormFeature, BaseDescriptor, CheckboxChoiceDescriptor, DateTimeDescriptor, defaultDescriptors, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor, uuidIdGenerator, idKeyExtractor, halfOrderGeneratorFactory, halfOrderGenerator, identitySanitizer, defaultFormStrings, defaultTrailingRender, defaultValidators, LengthValidator, NumberValidator, RequiredValidator, RichTextValidator, FormMode, FormQuestionType, TextNumberRestrictionType, ChoiceAppearance, QuestionAction, QuestionDisplayType, ChoiceAction, useShuffled, useChoiceChange, useChosenAndOther, getDisplayTypeOptions, getDisplayType, addNewFormEntry, getNewChoice, deriveFormQuestion, getTextNumberRestrictionOptions, deriveTextNumberRestriction, useActive, useRichTextFieldStyles, useTextFieldStyles, useCheckboxStyles, useChoiceGroupStyles, useChoiceGroupOptionStyles, useDropdownStyles, useOtherFieldStyles, useDatePickerStyles, useToggleStyles, fieldClassNames, createValidationSuccess, mergeValidations, validateEntry, validateEntries, isHtmlEmpty, hasErrorFiles, hasUploadingFiles */
/*! exports used: CheckboxChoiceDescriptor, ChoiceAction, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, FormQuestionType, LengthValidator, NumberValidator, QuestionAction, QuestionDisplayType, RadioChoiceDescriptor, RequiredValidator, RichTextDescriptor, RichTextValidator, TextDescriptor, TextNumberRestrictionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _abstractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractions */ "8Q8G");
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facade */ "6A1H");
/* harmony import */ var _implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementations */ "+j0w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["p"]; });






/***/ }),

/***/ "IRqU":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BackgroundColor, CustomizedMention, Defaults, File, FontSize, Hack, Link, Misc */
/*! exports used: BackgroundColor, Defaults, File, FontSize, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _background_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-color */ "7DXh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _background_color__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _customized_mention__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customized-mention */ "MtMW");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "GEz/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _defaults__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file */ "CYIA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _file__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _font_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-size */ "VARY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _font_size__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _hack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hack */ "9zlq");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link */ "3vyY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _link__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./misc */ "jeGZ");










/***/ }),

/***/ "Ihur":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/date-time.ts ***!
  \*********************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "JCS6":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/DesigningActions.tsx ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DesigningActions */
/*! exports used: DesigningActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesigningActions; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "CYKX");




function DesigningActions({ entry, onEntryChange, context, onContextChange, feature, }) {
    const { entries } = context;
    const { comparator, idGenerator, orderGenerator, constants, strings } = feature;
    const [sortedEntries, sortedIndex, nextSlotOrder] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
        var _a, _b;
        const sortedEntries = [...entries].sort(comparator);
        const sortedIndex = sortedEntries.findIndex(e => e === entry);
        const nextSlotOrder = orderGenerator((_a = sortedEntries[sortedIndex]) === null || _a === void 0 ? void 0 : _a.question.order, (_b = sortedEntries[sortedIndex + 1]) === null || _b === void 0 ? void 0 : _b.question.order);
        return [sortedEntries, sortedIndex, nextSlotOrder];
    }, [comparator, entries, entry, orderGenerator]);
    const reachMaxEntries = entries.length >= constants.maxEntries;
    const addEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
        const newEntries = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* addNewFormEntry */ "a"])(entries, { idGenerator, order: nextSlotOrder, strings });
        onContextChange === null || onContextChange === void 0 ? void 0 : onContextChange(Object.assign(Object.assign({}, context), { entries: newEntries }));
    }, [context, entries, idGenerator, nextSlotOrder, onContextChange, strings]);
    const copyEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
        const newEntry = Object.assign({}, entry);
        newEntry.question = Object.assign(Object.assign({}, newEntry.question), { id: idGenerator(), order: nextSlotOrder });
        delete newEntry.question.familyId;
        delete newEntry.question.eTag;
        delete newEntry.answer.content;
        delete newEntry.active;
        onContextChange === null || onContextChange === void 0 ? void 0 : onContextChange(Object.assign(Object.assign({}, context), { entries: [...entries, newEntry] }));
    }, [context, entries, entry, idGenerator, nextSlotOrder, onContextChange]);
    const deleteEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
        const newEntries = entries.filter(e => e !== entry);
        onContextChange === null || onContextChange === void 0 ? void 0 : onContextChange(Object.assign(Object.assign({}, context), { entries: newEntries }));
    }, [entries, onContextChange, context, entry]);
    const moveEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((newIndex) => {
        var _a, _b;
        if (newIndex === sortedIndex)
            return;
        const [newPrevIndex, newNextIndex] = newIndex < sortedIndex ? [newIndex - 1, newIndex] : [newIndex, newIndex + 1];
        const newOrder = orderGenerator((_a = sortedEntries[newPrevIndex]) === null || _a === void 0 ? void 0 : _a.question.order, (_b = sortedEntries[newNextIndex]) === null || _b === void 0 ? void 0 : _b.question.order);
        const newEntry = Object.assign({}, entry);
        newEntry.question = Object.assign(Object.assign({}, newEntry.question), { order: newOrder });
        onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(newEntry);
    }, [entry, onEntryChange, orderGenerator, sortedEntries, sortedIndex]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* IconButton */ "a"], { iconProps: { iconName: 'Up' }, title: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].MoveUp), disabled: !sortedEntries[sortedIndex - 1], onClick: () => moveEntry(sortedIndex - 1) }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* IconButton */ "a"], { iconProps: { iconName: 'Down' }, title: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].MoveDown), disabled: !sortedEntries[sortedIndex + 1], onClick: () => moveEntry(sortedIndex + 1) }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* IconButton */ "a"], { iconProps: { iconName: 'Add' }, title: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].Add), onClick: addEntry, disabled: reachMaxEntries }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* IconButton */ "a"], { iconProps: { iconName: 'Copy' }, title: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].Copy), onClick: copyEntry, disabled: reachMaxEntries }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* IconButton */ "a"], { iconProps: { iconName: 'Delete' }, title: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].Delete), onClick: deleteEntry })));
}


/***/ }),

/***/ "JPPb":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertLink/InsertLink.styles.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: useInsertLinkStyles, useInsertLinkDialogStyles, useInsertLinkMenuStyles */
/*! exports used: useInsertLinkDialogStyles, useInsertLinkMenuStyles, useInsertLinkStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useInsertLinkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInsertLinkDialogStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useInsertLinkMenuStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const useInsertLinkStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
    },
});
const useInsertLinkDialogStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        '.ms-Dialog-content': {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
    },
});
const useInsertLinkMenuStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
    },
    header: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        fontWeight: 600,
    },
});


/***/ }),

/***/ "KGCU":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertLink/InsertLink.tsx ***!
  \**************************************************************************************************************************************************/
/*! exports provided: InsertLink */
/*! exports used: InsertLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertLink; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "NlZM");
/* harmony import */ var _InsertLink_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InsertLink.styles */ "JPPb");
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




const InsertLink = (_a) => {
    var { initialLink, onConfirm, onCancel, normalizeUrl, strings, className } = _a, props = __rest(_a, ["initialLink", "onConfirm", "onCancel", "normalizeUrl", "strings", "className"]);
    const [displayText, setDisplayText] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(initialLink.displayText);
    const [url, setUrl] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(initialLink.url);
    const normalizedUrl = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(() => { var _a; return (_a = normalizeUrl === null || normalizeUrl === void 0 ? void 0 : normalizeUrl(url)) !== null && _a !== void 0 ? _a : url; }, [url, normalizeUrl]);
    const onConfirmInternal = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback(() => {
        if (!normalizedUrl)
            return;
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({ url: normalizedUrl, displayText: displayText || url });
    }, [onConfirm, normalizedUrl, displayText, url]);
    const onKeyPress = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback((e) => {
        if (e.key === 'Enter')
            onConfirmInternal();
    }, [onConfirmInternal]);
    const styles = Object(_InsertLink_styles__WEBPACK_IMPORTED_MODULE_6__[/* useInsertLinkStyles */ "c"])();
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TextField */ "a"], { label: strings.insertLinkUrl, required: true, type: 'url', value: url, onChange: (_, newValue = '') => setUrl(newValue), onKeyPress: onKeyPress }),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TextField */ "a"], { label: strings.insertLinkDisplayAs, value: displayText, onChange: (_, newValue = '') => setDisplayText(newValue), onKeyPress: onKeyPress }),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.buttons) },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DefaultButton */ "a"], { onClick: onCancel }, strings.button(_types__WEBPACK_IMPORTED_MODULE_5__[/* RichTextFieldButton */ "b"].Cancel)),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* PrimaryButton */ "a"], { onClick: onConfirmInternal, disabled: !normalizedUrl }, strings.button(_types__WEBPACK_IMPORTED_MODULE_5__[/* RichTextFieldButton */ "b"].OK)))));
};


/***/ }),

/***/ "Ka6D":
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/RestrictionSettings/index.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: RestrictionSettings */
/*! exports used: RestrictionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RestrictionSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestrictionSettings */ "QZXS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _RestrictionSettings__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "LKqx":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/idGenerators.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: uuidIdGenerator */
/*! exports used: uuidIdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uuidIdGenerator; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");

const uuidIdGenerator = _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* uuid */ "v"];


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
                    fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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

/***/ "M25M":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/RenderingField/index.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: RenderingField */
/*! exports used: RenderingField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RenderingField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingField */ "1P5e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _RenderingField__WEBPACK_IMPORTED_MODULE_0__["a"]; });




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
                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
                                selectors: {
                                    "[class^='headerCount-']": {
                                        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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
                                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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
                                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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
                                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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

/***/ "MXQI":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: orderComparator, defaultFormConstants, defaultFormFeature, BaseDescriptor, CheckboxChoiceDescriptor, DateTimeDescriptor, defaultDescriptors, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor, uuidIdGenerator, idKeyExtractor, halfOrderGeneratorFactory, halfOrderGenerator, identitySanitizer, defaultFormStrings, defaultTrailingRender, defaultValidators, LengthValidator, NumberValidator, RequiredValidator, RichTextValidator */
/*! exports used: CheckboxChoiceDescriptor, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, LengthValidator, NumberValidator, RadioChoiceDescriptor, RequiredValidator, RichTextDescriptor, RichTextValidator, TextDescriptor, defaultFormFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _comparators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparators */ "O1Hc1");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "qGyp");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "07Qi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _default__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descriptors */ "TJ4v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _descriptors__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony import */ var _idGenerators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idGenerators */ "LKqx");
/* harmony import */ var _keyExtractors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyExtractors */ "Hbi6");
/* harmony import */ var _orderGenerators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderGenerators */ "wCOc");
/* harmony import */ var _sanitizers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sanitizers */ "nM/K");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./strings */ "/yaY");
/* harmony import */ var _trailingRenders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trailingRenders */ "xg6H");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validators */ "ZDGZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _validators__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _validators__WEBPACK_IMPORTED_MODULE_10__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _validators__WEBPACK_IMPORTED_MODULE_10__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _validators__WEBPACK_IMPORTED_MODULE_10__["d"]; });














/***/ }),

/***/ "MtMW":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/customized-mention.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: CustomizedMention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomizedMention */
/* harmony import */ var _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-mention */ "MY+k");

const CustomizedMention = _tiptap_extension_mention__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
    addAttributes() {
        // Return an object with attribute configuration
        return {
            id: {
                default: null,
                parseHTML: element => {
                    return element.getAttribute('data-mention-id');
                },
                renderHTML: attributes => {
                    if (!attributes.id) {
                        return {};
                    }
                    return {
                        'data-mention-id': attributes.id,
                    };
                },
            },
            type: {
                default: null,
                parseHTML: element => element.getAttribute('data-mention-type'),
                renderHTML: attributes => {
                    if (!attributes.type) {
                        return {};
                    }
                    return {
                        'data-mention-type': attributes.type,
                    };
                },
            },
            label: {
                default: null,
                rendered: false,
                parseHTML: element => element.innerText,
            },
        };
    },
    renderHTML: props => {
        var _a, _b, _c, _d, _e;
        return [
            'span',
            {
                'data-type': 'mention',
                'data-mention-id': (_a = props.node.attrs) === null || _a === void 0 ? void 0 : _a.id,
                'data-mention-type': (_b = props.node.attrs) === null || _b === void 0 ? void 0 : _b.type,
            },
            (_d = (_c = props.node.attrs) === null || _c === void 0 ? void 0 : _c.label) !== null && _d !== void 0 ? _d : (_e = props.node.attrs) === null || _e === void 0 ? void 0 : _e.id,
        ];
    },
});


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

/***/ "NhT3":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/RichTextDescriptor.tsx ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: RichTextDescriptor */
/*! exports used: RichTextDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_rich_text_tiptap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-rich-text-tiptap */ "UuZ7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");
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






const defaultOptions = {
    defaultPlaceholder: 'Enter your response',
};
const makeFieldComponent = (_a) => {
    var { defaultPlaceholder } = _a, options = __rest(_a, ["defaultPlaceholder"]);
    return ({ entry, onEntryChange, context, showPlaceholder, delegatedProps }) => {
        var _a;
        const { mode } = context;
        const { question, answer } = entry;
        const value = (_a = answer.content) !== null && _a !== void 0 ? _a : '';
        const onChange = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((value) => {
            const newAnswer = Object.assign({}, entry.answer);
            newAnswer.content = value;
            if (!newAnswer.content)
                delete newAnswer.content;
            onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(Object.assign(Object.assign({}, entry), { answer: newAnswer }));
        }, [entry, onEntryChange]);
        const placeholder = showPlaceholder ? question.placeholder || defaultPlaceholder : undefined;
        const ribbonPosition = mode === _types__WEBPACK_IMPORTED_MODULE_3__[/* FormMode */ "c"].Viewing
            ? _addressbook_components_rich_text_tiptap__WEBPACK_IMPORTED_MODULE_1__[/* RibbonPosition */ "a"].None
            : options.compact
                ? _addressbook_components_rich_text_tiptap__WEBPACK_IMPORTED_MODULE_1__[/* RibbonPosition */ "a"].Bottom
                : _addressbook_components_rich_text_tiptap__WEBPACK_IMPORTED_MODULE_1__[/* RibbonPosition */ "a"].Top;
        const styles = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useRichTextFieldStyles */ "w"])();
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_addressbook_components_rich_text_tiptap__WEBPACK_IMPORTED_MODULE_1__[/* RichTextField */ "b"], Object.assign({}, delegatedProps, { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, options.compact && styles.compact, mode !== _types__WEBPACK_IMPORTED_MODULE_3__[/* FormMode */ "c"].Viewing && styles.minHeightConstrained), value: value, onChange: onChange, placeholder: placeholder, ribbonPosition: ribbonPosition, focusable: mode !== _types__WEBPACK_IMPORTED_MODULE_3__[/* FormMode */ "c"].Viewing }, options))), [delegatedProps, mode, onChange, placeholder, ribbonPosition, styles, value]);
    };
};
/**
 * The descriptor that renders a rich text field for rich text questions.
 */
class RichTextDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a rich text question.
     *
     * @param entry The entry to test.
     * @returns Passes the test or not.
     */
    test(entry) {
        return entry.question.type === _types__WEBPACK_IMPORTED_MODULE_3__[/* FormQuestionType */ "d"].RichText;
    }
}


/***/ }),

/***/ "NlZM":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/types.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RichTextFieldButton, RichTextFieldFontSize, RichTextFieldBackgroundColor, RichTextFieldTextColor */
/*! exports used: RichTextFieldBackgroundColor, RichTextFieldButton, RichTextFieldFontSize, RichTextFieldTextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RichTextFieldButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RichTextFieldFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextFieldBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RichTextFieldTextColor; });
var RichTextFieldButton;
(function (RichTextFieldButton) {
    RichTextFieldButton[RichTextFieldButton["OK"] = 0] = "OK";
    RichTextFieldButton[RichTextFieldButton["Cancel"] = 1] = "Cancel";
    RichTextFieldButton[RichTextFieldButton["Close"] = 2] = "Close";
    RichTextFieldButton[RichTextFieldButton["Retry"] = 3] = "Retry";
    RichTextFieldButton[RichTextFieldButton["Remove"] = 4] = "Remove";
    RichTextFieldButton[RichTextFieldButton["Copy"] = 5] = "Copy";
    RichTextFieldButton[RichTextFieldButton["Download"] = 6] = "Download";
    RichTextFieldButton[RichTextFieldButton["ViewOriginalFile"] = 7] = "ViewOriginalFile";
    RichTextFieldButton[RichTextFieldButton["Bold"] = 8] = "Bold";
    RichTextFieldButton[RichTextFieldButton["Italic"] = 9] = "Italic";
    RichTextFieldButton[RichTextFieldButton["Underline"] = 10] = "Underline";
    RichTextFieldButton[RichTextFieldButton["Strikethrough"] = 11] = "Strikethrough";
    RichTextFieldButton[RichTextFieldButton["BackgroundColor"] = 12] = "BackgroundColor";
    RichTextFieldButton[RichTextFieldButton["TextColor"] = 13] = "TextColor";
    RichTextFieldButton[RichTextFieldButton["FontSize"] = 14] = "FontSize";
    RichTextFieldButton[RichTextFieldButton["BulletedList"] = 15] = "BulletedList";
    RichTextFieldButton[RichTextFieldButton["NumberedList"] = 16] = "NumberedList";
    RichTextFieldButton[RichTextFieldButton["DecreaseIndent"] = 17] = "DecreaseIndent";
    RichTextFieldButton[RichTextFieldButton["IncreaseIndent"] = 18] = "IncreaseIndent";
    RichTextFieldButton[RichTextFieldButton["InsertLink"] = 19] = "InsertLink";
    RichTextFieldButton[RichTextFieldButton["InsertImage"] = 20] = "InsertImage";
    RichTextFieldButton[RichTextFieldButton["InsertFile"] = 21] = "InsertFile";
    RichTextFieldButton[RichTextFieldButton["InsertTable"] = 22] = "InsertTable";
    RichTextFieldButton[RichTextFieldButton["Code"] = 23] = "Code";
    RichTextFieldButton[RichTextFieldButton["ClearFormat"] = 24] = "ClearFormat";
})(RichTextFieldButton || (RichTextFieldButton = {}));
var RichTextFieldFontSize;
(function (RichTextFieldFontSize) {
    RichTextFieldFontSize[RichTextFieldFontSize["Small"] = 0] = "Small";
    RichTextFieldFontSize[RichTextFieldFontSize["Medium"] = 1] = "Medium";
    RichTextFieldFontSize[RichTextFieldFontSize["Large"] = 2] = "Large";
})(RichTextFieldFontSize || (RichTextFieldFontSize = {}));
var RichTextFieldBackgroundColor;
(function (RichTextFieldBackgroundColor) {
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["Removal"] = 0] = "Removal";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["KobiRed"] = 1] = "KobiRed";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["RoseBud"] = 2] = "RoseBud";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["Goldenrod"] = 3] = "Goldenrod";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["Primrose"] = 4] = "Primrose";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["Mantis"] = 5] = "Mantis";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["RegentStBlue"] = 6] = "RegentStBlue";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["PeriwinkleGray"] = 7] = "PeriwinkleGray";
    RichTextFieldBackgroundColor[RichTextFieldBackgroundColor["PaleRose"] = 8] = "PaleRose";
})(RichTextFieldBackgroundColor || (RichTextFieldBackgroundColor = {}));
var RichTextFieldTextColor;
(function (RichTextFieldTextColor) {
    RichTextFieldTextColor[RichTextFieldTextColor["Removal"] = 0] = "Removal";
    RichTextFieldTextColor[RichTextFieldTextColor["Red"] = 1] = "Red";
    RichTextFieldTextColor[RichTextFieldTextColor["TuscanOrange"] = 2] = "TuscanOrange";
    RichTextFieldTextColor[RichTextFieldTextColor["Sunglow"] = 3] = "Sunglow";
    RichTextFieldTextColor[RichTextFieldTextColor["Pear"] = 4] = "Pear";
    RichTextFieldTextColor[RichTextFieldTextColor["Eucalyptus"] = 5] = "Eucalyptus";
    RichTextFieldTextColor[RichTextFieldTextColor["FadedJade"] = 6] = "FadedJade";
    RichTextFieldTextColor[RichTextFieldTextColor["FunBlue"] = 7] = "FunBlue";
    RichTextFieldTextColor[RichTextFieldTextColor["TyrianPurple"] = 8] = "TyrianPurple";
})(RichTextFieldTextColor || (RichTextFieldTextColor = {}));


/***/ }),

/***/ "O1Hc1":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/comparators.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: orderComparator */
/*! exports used: orderComparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderComparator; });
/**
 * A comparator that compares entries by their question order.
 *
 * @param first The first entry.
 * @param second The second entry.
 * @returns The comparison result.
 */
const orderComparator = (first, second) => first.question.order - second.question.order;


/***/ }),

/***/ "PPPs":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/view.image.tsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: ImageView */
/*! exports used: ImageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageView; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "Favm");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "I0jv");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "4pHs");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "TG3e");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "glTW");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-hooks */ "6MXf");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addressbook/utilities-hooks */ "jG8U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-zoom-pan-pinch */ "ePT3");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../types */ "NlZM");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "i5ni");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils */ "D0sl");
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









const ImageView = (_a) => {
    var { name, url, blob, thumbnail, imageSize, loading, error, onRetry, onRemove, compact, strings, children, className } = _a, props = __rest(_a, ["name", "url", "blob", "thumbnail", "imageSize", "loading", "error", "onRetry", "onRemove", "compact", "strings", "children", "className"]);
    const [fullscreen, { setTrue: enterFullscreen, setFalse: exitFullscreen }] = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__[/* useBoolean */ "a"])(false);
    const contentProps = { name, url, blob, thumbnail, imageSize, loading, error, onRetry, onRemove, compact, strings };
    const styles = Object(_styles__WEBPACK_IMPORTED_MODULE_14__[/* useImageViewStyles */ "e"])();
    return (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(EmbeddedImageContent, Object.assign({ className: styles.embedded, onClick: enterFullscreen }, contentProps)),
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(FullscreenImageContent, Object.assign({ isOpen: fullscreen, onDismiss: exitFullscreen }, contentProps)),
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: styles.hidden }, children)));
};
const embeddedHeight = 180;
const EmbeddedImageContent = (_a) => {
    var { name, blob, url: _url, thumbnail, imageSize, loading, error, onRetry, onRemove, compact: _compact, strings, className, style } = _a, props = __rest(_a, ["name", "blob", "url", "thumbnail", "imageSize", "loading", "error", "onRetry", "onRemove", "compact", "strings", "className", "style"]);
    const blobUrl = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_10__[/* useBlobObjectUrl */ "a"])(blob !== null && blob !== void 0 ? blob : thumbnail);
    const height = embeddedHeight;
    const width = imageSize ? height * (imageSize.width / imageSize.height) : height;
    const styles = Object(_styles__WEBPACK_IMPORTED_MODULE_14__[/* useEmbeddedImageContentStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className), style: Object.assign({ width, height }, style) }, props),
        blobUrl && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", { className: styles.image, src: blobUrl, alt: name, title: name }),
        error && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.mask, styles.error), role: 'alert', title: strings.messageContentUnavailable },
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Icon */ "a"], { className: styles.icon, iconName: 'ImageOff' }),
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: styles.buttons },
                onRetry && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DefaultButton */ "a"], { onClick: event => {
                        event.stopPropagation();
                        onRetry();
                    }, iconProps: { iconName: 'ArrowClockwise' }, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].Retry) })),
                onRemove && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DefaultButton */ "a"], { onClick: event => {
                        event.stopPropagation();
                        onRemove();
                    }, iconProps: { iconName: 'Delete' }, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].Remove) }))))),
        loading && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Spinner */ "a"], { className: styles.mask, size: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* SpinnerSize */ "a"].large })));
};
const FullscreenImageContent = (_a) => {
    var { name, blob, url, thumbnail: _thumbnail, imageSize: _imageSize, loading, error, onRetry: _onRetry, onRemove: _onRemove, compact, strings, isOpen, onDismiss, className } = _a, props = __rest(_a, ["name", "blob", "url", "thumbnail", "imageSize", "loading", "error", "onRetry", "onRemove", "compact", "strings", "isOpen", "onDismiss", "className"]);
    const blobUrl = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_10__[/* useBlobObjectUrl */ "a"])(blob);
    const styles = Object(_styles__WEBPACK_IMPORTED_MODULE_14__[/* useFullscreenImageContentStyles */ "d"])();
    if (!isOpen)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* Layer */ "a"], { eventBubblingEnabled: true },
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__[/* Popup */ "a"], Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className), onDismiss: onDismiss, onRestoreFocus: ({ originalElement }) => originalElement === null || originalElement === void 0 ? void 0 : originalElement.focus() }, props),
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: styles.header },
                react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: styles.name, title: name }, name),
                react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: styles.controls },
                    !compact && blobUrl && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* IconButton */ "a"], { className: styles.button, as: 'a', href: blobUrl, download: name, iconProps: { iconName: 'ArrowDownload' }, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].Download) })),
                    !compact && blob && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* IconButton */ "a"], { className: styles.button, onClick: () => {
                            Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_9__[/* copyImageToClipboard */ "b"])({ blob, name });
                        }, iconProps: { iconName: 'Copy' }, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].Copy) })),
                    url && (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* IconButton */ "a"], { className: styles.button, as: 'a', href: url, target: '_blank', rel: 'noopener noreferrer', iconProps: { iconName: 'Open' }, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].ViewOriginalFile) })),
                    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__[/* IconButton */ "a"], { className: styles.button, iconProps: { iconName: 'Cancel' }, onClick: onDismiss, title: strings.button(_types__WEBPACK_IMPORTED_MODULE_13__[/* RichTextFieldButton */ "b"].Close) }))),
            blobUrl ? (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TransformedImage, { src: blobUrl, alt: name, className: styles.image, wrapperClassName: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.main, styles.wrapper) })) : loading ? (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Spinner */ "a"], { className: styles.main, size: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* SpinnerSize */ "a"].large })) : error ? (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.main, styles.message), role: 'alert' }, strings.messageContentUnavailable)) : null)));
};
const TransformedImage = (_a) => {
    var { wrapperClassName } = _a, props = __rest(_a, ["wrapperClassName"]);
    const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(true);
    const [panning, { setTrue: startPanning, setFalse: stopPanning }] = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__[/* useBoolean */ "a"])(false);
    const wrapperStyle = react__WEBPACK_IMPORTED_MODULE_11___default.a.useMemo(() => ({ cursor: panning ? 'grabbing' : 'grab' }), [panning]);
    return (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_12__[/* TransformWrapper */ "b"], { disabled: disabled, minScale: 0.5, maxScale: 4, onPanningStart: startPanning, onPanningStop: stopPanning }, ({ centerView }) => (react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_12__[/* TransformComponent */ "a"], { wrapperClass: wrapperClassName, wrapperStyle: wrapperStyle },
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", Object.assign({}, props, { onLoad: event => {
                setDisabled(false);
                Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* accommodateImage */ "b"])(event.target, {
                    selector: '.react-transform-wrapper',
                    policy: _utils__WEBPACK_IMPORTED_MODULE_15__[/* AccomodatePolicy */ "a"].ScaleDown,
                });
                centerView(1, 0);
            } }))))));
};


/***/ }),

/***/ "PXm5":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/utils.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: defaultRichTextFieldStrings, backgroundColorValues, textColorValues, fontSizeValues, defaultRichTextFileStorageService */
/*! exports used: backgroundColorValues, defaultRichTextFieldStrings, defaultRichTextFileStorageService, fontSizeValues, textColorValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultRichTextFieldStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backgroundColorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return textColorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fontSizeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultRichTextFileStorageService; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "NlZM");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const defaultRichTextFieldStrings = {
    button: button => defaultButtonStrings[button],
    fontSize: size => defaultFontSizeStrings[size],
    backgroundColor: color => defaultBackgroundColorStrings[color],
    textColor: color => defaultTextColorStrings[color],
    insertLinkTitle: 'Insert Link',
    insertLinkUrl: 'Web address (URL)',
    insertLinkDisplayAs: 'Display as',
    insertTableTitle: size => (size ? `Insert ${size.rows}x${size.cols} table` : 'Insert table'),
    messageContentUnavailable: 'The file content is unavailable.',
    defaultImageFileStem: 'image',
};
const defaultButtonStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].OK]: 'OK',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Cancel]: 'Cancel',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Close]: 'Close',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Retry]: 'Retry',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Remove]: 'Remove',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Copy]: 'Copy',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Download]: 'Download',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].ViewOriginalFile]: 'View original file',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Bold]: 'Bold',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Italic]: 'Italic',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Underline]: 'Underline',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Strikethrough]: 'Strikethrough',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].BackgroundColor]: 'Background color',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].TextColor]: 'Text color',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].FontSize]: 'Font size',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].BulletedList]: 'Bulleted list',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].NumberedList]: 'Numbered list',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].DecreaseIndent]: 'Decrease indent',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].IncreaseIndent]: 'Increase indent',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].InsertLink]: 'Insert link',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].InsertImage]: 'Insert image',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].InsertFile]: 'Insert file',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].InsertTable]: 'Insert table',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].Code]: 'Code',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldButton */ "b"].ClearFormat]: 'Clear format',
};
const defaultFontSizeStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Small]: 'Small',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Medium]: 'Medium',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Large]: 'Large',
};
const defaultBackgroundColorStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Removal]: 'No highlight',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].KobiRed]: 'Kobi red',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].RoseBud]: 'Rose bud',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Goldenrod]: 'Goldenrod',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Primrose]: 'Primrose',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Mantis]: 'Mantis',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].RegentStBlue]: 'Regent St. blue',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].PeriwinkleGray]: 'Periwinkle gray',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].PaleRose]: 'Pale rose',
};
const defaultTextColorStrings = {
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Removal]: 'Automatic',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Red]: 'Red',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].TuscanOrange]: 'Tuscan orange',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Sunglow]: 'Sunglow',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Pear]: 'Pear',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Eucalyptus]: 'Eucalyptus',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].FadedJade]: 'Faded jade',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].FunBlue]: 'Fun blue',
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].TyrianPurple]: 'Tyrian purple',
};
const backgroundColorValues = [
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Removal, ''],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].KobiRed, '#df9299'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].RoseBud, '#f4a593'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Goldenrod, '#fdd472'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Primrose, '#e5f18f'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].Mantis, '#82cda8'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].RegentStBlue, '#9dd9db'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].PeriwinkleGray, '#c7d4e8'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldBackgroundColor */ "a"].PaleRose, '#ebd3e1'],
];
const textColorValues = [
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Removal, ''],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Red, '#b6424c'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].TuscanOrange, '#cd5937'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Sunglow, '#fdc030'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Pear, '#bdcb4c'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].Eucalyptus, '#2b9b62'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].FadedJade, '#37797b'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].FunBlue, '#1e53a3'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldTextColor */ "d"].TyrianPurple, '#a5397a'],
];
const fontSizeValues = [
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Small, '7.5pt'],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Medium, ''],
    [_types__WEBPACK_IMPORTED_MODULE_1__[/* RichTextFieldFontSize */ "c"].Large, '18pt'],
];
/**
 * The default file storage for rich text fields, which uploads files as data URLs.
 */
const defaultRichTextFileStorageService = {
    upload: _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* encodeDataUrl */ "g"],
    download: downloadDataUrl,
    thumbnail: thumbnailDataUrl,
};
function downloadDataUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const blob = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* decodeDataUrl */ "e"])(url);
        if (!blob)
            throw new Error('Invalid data URL');
        return blob;
    });
}
function thumbnailDataUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const mime = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* getMimeByDataUrl */ "j"])(url);
        if (!(mime && Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* isImageMime */ "m"])(mime)))
            throw new Error('Unsupported MIME type');
        return downloadDataUrl(url);
    });
}


/***/ }),

/***/ "Q3Qe":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/CollapsibleTextField/CollapsibleTextField.styles.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: useCollapsibleTextFieldStyles */
/*! exports used: useCollapsibleTextFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCollapsibleTextFieldStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useCollapsibleTextFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        '&.ms-TextField .ms-TextField-wrapper .ms-TextField-fieldGroup': {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            input: {
                fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size24,
                '::placeholder': {
                    color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
                },
            },
        },
        '.ms-TextField-errorMessage': {
            padding: '4px 12px',
        },
    },
    collapsed: {
        '&.ms-TextField .ms-TextField-wrapper': {
            maxWidth: 'max-content',
            '.ms-TextField-fieldGroup': {
                '::before': {
                    content: '""',
                },
                backgroundColor: 'unset',
            },
        },
    },
    error: {
        '&.ms-TextField .ms-TextField-wrapper .ms-TextField-fieldGroup': {
            border: `1px solid ${theme.palette.redDark}`,
        },
    },
    collapsedText: {
        marginInlineStart: '12px',
        color: theme.palette.black,
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size24,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    collapsedPlaceholder: {
        color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
    },
    button: {
        margin: '4px',
    },
}));


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
                Object.assign({ fontSize: _teams_sizes__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14, fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "f"].semibold, justifyContent: 'center', flexGrow: 1 }, margin),
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

/***/ "QZXS":
/*!********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/RestrictionSettings/RestrictionSettings.tsx ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: RestrictionSettings */
/*! exports used: RestrictionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestrictionSettings; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "AH+P");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "hDQx");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _addressbook_components_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/components-fields */ "DigB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities */ "CYKX");
/* harmony import */ var _RestrictionSettings_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestrictionSettings.styles */ "AVTI");






const allTextNumberRestrictionValueKeys = ['min', 'max', 'value'];
function RestrictionSettings({ question, onQuestionChange, strings, }) {
    const styles = Object(_RestrictionSettings_styles__WEBPACK_IMPORTED_MODULE_7__[/* useRestrictionSettingsStyles */ "a"])();
    const textFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useTextFieldStyles */ "y"])();
    const dropdownStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useDropdownStyles */ "u"])();
    if (!(question.type === _types__WEBPACK_IMPORTED_MODULE_5__[/* FormQuestionType */ "d"].Text && question.number && question.restriction))
        return null;
    const restriction = question.restriction;
    const valueSettings = allTextNumberRestrictionValueKeys
        .filter(key => key in restriction)
        .map(key => (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_addressbook_components_fields__WEBPACK_IMPORTED_MODULE_3__[/* DecimalTextField */ "a"], { key: key, value: restriction[key], onChange: value => {
            const newRestriction = Object.assign({}, restriction);
            if (key in newRestriction) {
                newRestriction[key] = value;
            }
            // Ensure max is always greater than min
            if (key === 'min' && 'max' in newRestriction && value > newRestriction.max) {
                newRestriction.max = value;
            }
            // Ensure min is always less than max
            if (key === 'max' && 'min' in newRestriction && value < newRestriction.min) {
                newRestriction.min = value;
            }
            onQuestionChange(Object.assign(Object.assign({}, question), { restriction: newRestriction }));
        }, placeholder: strings.restrictionValuePlaceholder(key), styles: textFieldStyles })));
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: styles.row },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Dropdown */ "a"], { selectedKey: restriction.type, onChange: (_, option) => option &&
                onQuestionChange(Object.assign(Object.assign({}, question), { restriction: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* deriveTextNumberRestriction */ "d"])(option.key, restriction) })), options: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* getTextNumberRestrictionOptions */ "i"])(strings), responsiveMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* ResponsiveMode */ "a"].unknown, styles: dropdownStyles }),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyles */ "G"])(styles.values, valueSettings.length === 2 && styles.between) }, valueSettings)));
}


/***/ }),

/***/ "R2H0":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: FormQuestionType, TextNumberRestrictionType, ChoiceAppearance */
/*! exports used: ChoiceAppearance, FormQuestionType, TextNumberRestrictionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "npM9");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "m81U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "5VXF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _text__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rich-text */ "jRU1");
/* harmony import */ var _choice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choice */ "ySlD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _choice__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-time */ "Ihur");








/***/ }),

/***/ "T2qG":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/choice.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: useShuffled, useChoiceChange, useChosenAndOther */
/*! exports used: useChoiceChange, useChosenAndOther, useShuffled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useShuffled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useChoiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useChosenAndOther; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a shuffled copy of the array.
 *
 * @param props.array The array to shuffle.
 * @param props.enabled Whether to shuffle the array.
 * @returns An array.
 *
 * @example useShuffled(['Yes', 'No', 'Maybe later']) // ['No', 'Maybe later', 'Yes']
 * @example useShuffled(['Yes', 'No', 'Maybe later'], false) // ['Yes', 'No', 'Maybe later']
 */
function useShuffled({ array, enabled }) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
        if (!enabled)
            return array;
        return array
            .map(element => [Math.random(), element])
            .sort(([first], [second]) => first - second)
            .map(([, element]) => element);
    }, [array, enabled]);
}
/**
 * Returns a function that updates the entry's answer, according to the chosen options and the "other" value.
 *
 * @param entry The current choice entry.
 * @param onEntryChange A function that is called when the entry changes.
 * @returns A function if `onEntryChange` is defined, `undefined` otherwise.
 */
function useChoiceChange(entry, onEntryChange) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => onEntryChange &&
        ((chosen, other) => {
            const newAnswer = Object.assign({}, entry.answer);
            if (chosen.length > 0 || other !== undefined) {
                newAnswer.content = { chosen, other };
            }
            else {
                delete newAnswer.content;
            }
            onEntryChange(Object.assign(Object.assign({}, entry), { answer: newAnswer }));
        }), [entry, onEntryChange]);
}
/**
 * Returns the chosen options and the "other" related values.
 *
 * @param choices The choices besides the "other" option.
 * @param content The current answer content.
 * @returns An object with the chosen options and the "other" related values.
 */
function useChosenAndOther(choices, content) {
    const otherFieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
        var _a;
        return ({
            chosen: (_a = content === null || content === void 0 ? void 0 : content.chosen) !== null && _a !== void 0 ? _a : [],
            otherKey: ['other', ...choices.map(choice => choice.replace(/(\s|-)+/g, '_').toLowerCase())].join('-'),
            otherValue: content === null || content === void 0 ? void 0 : content.other,
            otherSelected: (content === null || content === void 0 ? void 0 : content.other) !== undefined,
            otherFieldRef,
        });
    }, [choices, content]);
}


/***/ }),

/***/ "TJ4v":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: BaseDescriptor, CheckboxChoiceDescriptor, DateTimeDescriptor, defaultDescriptors, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor */
/*! exports used: CheckboxChoiceDescriptor, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor, defaultDescriptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");
/* harmony import */ var _CheckboxChoiceDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxChoiceDescriptor */ "ojxn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CheckboxChoiceDescriptor__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _DateTimeDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTimeDescriptor */ "DrRq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _DateTimeDescriptor__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ "fv2u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _default__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _DropdownChoiceDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownChoiceDescriptor */ "4xOb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _DropdownChoiceDescriptor__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _FallbackViewingDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FallbackViewingDescriptor */ "lbGw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _FallbackViewingDescriptor__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _RadioChoiceDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RadioChoiceDescriptor */ "XXj3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _RadioChoiceDescriptor__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _RichTextDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RichTextDescriptor */ "NhT3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _RichTextDescriptor__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _TextDescriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextDescriptor */ "1f/+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _TextDescriptor__WEBPACK_IMPORTED_MODULE_8__["a"]; });












/***/ }),

/***/ "TO4X":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/CollapsibleTextField/CollapsibleTextField.tsx ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CollapsibleTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CollapsibleTextField */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "9bYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CollapsibleTextField_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollapsibleTextField.styles */ "Q3Qe");
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



const defaultStrings = {
    editButton: (label, value) => `Edit ${label} "${value}"`,
    doneButton: 'Done',
};
const defaultIconNames = {
    editButton: 'Edit',
    doneButton: 'CheckMark',
};
const CollapsibleTextField = (_a) => {
    var { label, className, strings, iconNames } = _a, props = __rest(_a, ["label", "className", "strings", "iconNames"]);
    const [collapsed, setCollapsed] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true);
    const fieldRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
    const buttonRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
    const expand = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(() => {
        setCollapsed(false);
        requestAnimationFrame(() => { var _a; return (_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    }, []);
    const collapse = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(() => {
        var _a;
        (_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        setCollapsed(true);
        requestAnimationFrame(() => { var _a; return (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    }, []);
    const onKeyPress = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback((event) => {
        if (event.key === 'Enter')
            collapse();
    }, [collapse]);
    const stringsInternal = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => (Object.assign(Object.assign({}, defaultStrings), strings)), [strings]);
    const iconNamesInternal = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => (Object.assign(Object.assign({}, defaultIconNames), iconNames)), [iconNames]);
    const styles = Object(_CollapsibleTextField_styles__WEBPACK_IMPORTED_MODULE_4__[/* useCollapsibleTextFieldStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], Object.assign({}, props, { componentRef: fieldRef, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.root, collapsed && styles.collapsed, props.errorMessage && styles.error, className), title: label, onKeyPress: onKeyPress, onRenderInput: (inputProps, defaultRender) => {
            var _a;
            return collapsed ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { id: inputProps === null || inputProps === void 0 ? void 0 : inputProps.id, title: inputProps === null || inputProps === void 0 ? void 0 : inputProps.title, "aria-placeholder": inputProps === null || inputProps === void 0 ? void 0 : inputProps.placeholder, "aria-required": inputProps === null || inputProps === void 0 ? void 0 : inputProps.required, "aria-readonly": inputProps === null || inputProps === void 0 ? void 0 : inputProps.readOnly, "aria-errormessage": inputProps === null || inputProps === void 0 ? void 0 : inputProps['aria-errormessage'], "aria-invalid": inputProps === null || inputProps === void 0 ? void 0 : inputProps['aria-invalid'], "aria-disabled": true, role: 'textbox', className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.collapsedText, !(inputProps === null || inputProps === void 0 ? void 0 : inputProps.value) && styles.collapsedPlaceholder) }, (inputProps === null || inputProps === void 0 ? void 0 : inputProps.value) || (inputProps === null || inputProps === void 0 ? void 0 : inputProps.placeholder)),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { componentRef: buttonRef, className: styles.button, title: stringsInternal.editButton(label !== null && label !== void 0 ? label : '', ((_a = inputProps === null || inputProps === void 0 ? void 0 : inputProps.value) !== null && _a !== void 0 ? _a : '')), iconProps: { iconName: iconNamesInternal.editButton }, onClick: expand }))) : (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, defaultRender === null || defaultRender === void 0 ? void 0 :
                defaultRender(inputProps),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* IconButton */ "a"], { componentRef: buttonRef, className: styles.button, title: stringsInternal.doneButton, iconProps: { iconName: iconNamesInternal.doneButton }, onClick: collapse })));
        } })));
};


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

/***/ "UuZ7":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RichTextField, RibbonPosition, CustomizedMention, Hack, RichTextFieldButton, RichTextFieldFontSize, RichTextFieldBackgroundColor, RichTextFieldTextColor */
/*! exports used: RibbonPosition, RichTextField, RichTextFieldBackgroundColor, RichTextFieldButton, RichTextFieldFontSize, RichTextFieldTextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "fjhP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions */ "IRqU");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "NlZM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["d"]; });






/***/ }),

/***/ "VARY":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/font-size.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: FontSize */
/*! exports used: FontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontSize; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");

const FontSize = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Extension */ "b"].create({
    name: 'fontSize',
    addOptions() {
        return {
            types: ['textStyle'],
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => { var _a; return (_a = element.style.fontSize) === null || _a === void 0 ? void 0 : _a.replace(/['"]+/g, ''); },
                        renderHTML: attributes => {
                            if (!attributes.fontSize)
                                return {};
                            return { style: `font-size: ${attributes.fontSize}` };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setFontSize: fontSize => ({ chain }) => chain().setMark('textStyle', { fontSize }).run(),
            unsetFontSize: () => ({ chain }) => chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run(),
        };
    },
});


/***/ }),

/***/ "VY8F":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/ColorMenuItem/ColorMenuItem.styles.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: useColorMenuItemStyles */
/*! exports used: useColorMenuItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useColorMenuItemStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useColorMenuItemStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        display: 'block',
        width: '16px',
        height: '16px',
        padding: 0,
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    color: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 2px, rgba(0, 0, 0, 0.15) 0px 2px 4px',
        ':hover': {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.palette.neutralDark,
        },
    },
    text: {
        height: '24px',
        width: '100%',
        '.ms-ContextualMenu-item:has(&)': {
            flex: '100%',
        },
        color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        backgroundColor: theme.palette.white,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiary,
        ':hover': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : undefined,
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.neutralLighterAlt,
        },
    },
}));


/***/ }),

/***/ "Vc80":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertLink/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: InsertLink, InsertLinkDialog, InsertLinkMenu */
/*! exports used: InsertLinkDialog, InsertLinkMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _InsertLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertLink */ "KGCU");
/* harmony import */ var _InsertLink_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsertLink.dialog */ "heIF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _InsertLink_dialog__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _InsertLink_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsertLink.menu */ "zoAe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _InsertLink_menu__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),

/***/ "W2tD":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextField/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: RichTextField, RibbonPosition */
/*! exports used: RibbonPosition, RichTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RichTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichTextField */ "mgyn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _RichTextField__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _RichTextField_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichTextField.types */ "t/oA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _RichTextField_types__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),

/***/ "W61K":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.styles.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: useRibbonStyles, useRibbonCommandBarStyles */
/*! exports used: useRibbonCommandBarStyles, useRibbonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useRibbonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRibbonCommandBarStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const SeparatorWidth = 1;
const RibbonButtonGap = 4;
const useRibbonStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    leadingButton: {
        position: 'relative',
        '.ms-OverflowSet-item:not(:first-child) &::before': {
            content: '""',
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiaryAlt,
            position: 'absolute',
            width: `${SeparatorWidth}px`,
            insetBlock: '25%',
            insetInlineStart: `-${(RibbonButtonGap + SeparatorWidth) / 2}px`,
        },
    },
}));
const useRibbonCommandBarStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        ':first-child': {
            paddingTop: '8px',
        },
        ':last-child': {
            paddingBottom: '8px',
        },
        height: '32px',
        paddingInline: '12px',
        border: 'none',
        '.ms-OverflowSet': {
            gap: `${RibbonButtonGap}px`,
        },
        '.ms-Button': {
            color: theme.palette.black,
            border: 'none',
            margin: 0,
            padding: '0 8px',
            borderRadius: '4px',
            '.ms-Icon': {
                height: '16px',
                width: '16px',
                margin: 0,
                padding: 0,
                color: 'inherit !important',
                svg: {
                    margin: 0,
                    fill: 'currentColor !important',
                },
            },
            svg: {
                display: 'block',
                height: '100%',
                width: '100%',
            },
        },
        '.ms-Button.is-checked': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.themeDark : theme.palette.accent,
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? undefined : theme.palette.neutralQuaternary,
        },
        '.ms-Button:hover': {
            '@media (hover: hover)': {
                color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.accent,
                backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : undefined,
            },
        },
        '.ms-Button:hover:not(.is-checked)': {
            '@media (hover: none)': {
                color: theme.palette.black,
            },
        },
        '.ms-Button:not(.ms-CommandBar-overflowButton) .ms-Button-menuIcon': {
            display: 'none',
        },
    },
}));


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

/***/ "X+M4":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/extension.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: File */
/*! exports used: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");
/* harmony import */ var _tiptap_pm_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/pm/model */ "gseV");
/* harmony import */ var _tiptap_pm_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/pm/state */ "74l2");
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/react */ "Vb8B");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "PXm5");
/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions */ "2JDv");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view */ "nntu");








/**
 * The file extension.
 */
const File = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Node */ "d"].create({
    name: 'file',
    content: 'text?',
    group: 'inline',
    inline: true,
    atom: true,
    selectable: true,
    draggable: true,
    defining: true,
    addOptions() {
        return {
            fileStorageService: _utils__WEBPACK_IMPORTED_MODULE_5__[/* defaultRichTextFileStorageService */ "c"],
            strings: _utils__WEBPACK_IMPORTED_MODULE_5__[/* defaultRichTextFieldStrings */ "b"],
            defaultMime: 'application/octet-stream',
            HTMLAttributes: {
                target: '_blank',
                rel: 'noopener noreferrer',
            },
        };
    },
    addStorage() {
        return new _sessions__WEBPACK_IMPORTED_MODULE_6__[/* FileSessions */ "a"](this.options.fileStorageService);
    },
    addAttributes() {
        return {
            href: {
                default: null,
            },
            target: {
                default: this.options.HTMLAttributes.target,
            },
            rel: {
                default: this.options.HTMLAttributes.rel,
            },
            mime: {
                default: this.options.defaultMime,
                parseHTML: element => element.getAttribute(`data-${this.name}-mime`) || null,
                renderHTML: attributes => (attributes.mime ? { [`data-${this.name}-mime`]: attributes.mime } : {}),
            },
            error: {
                default: null,
                parseHTML: element => (element.getAttribute(`data-${this.name}-error`) ? true : null),
                renderHTML: attributes => (attributes.error ? { [`data-${this.name}-error`]: attributes.error } : {}),
            },
            key: {
                rendered: false,
            },
        };
    },
    parseHTML() {
        const getFileNameByImage = (image) => {
            const name = image.alt || image.title || this.options.strings.defaultImageFileStem;
            const mime = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* getMimeByDataUrl */ "j"])(image.src);
            const extension = mime && Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* getExtensionByMime */ "i"])(mime);
            const normalizedName = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* normalizeFileName */ "p"])(name);
            const nameParts = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* splitFileName */ "u"])(normalizedName);
            const ensuredNameParts = !extension || nameParts.extension === extension
                ? nameParts
                : { stem: Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* joinFileName */ "n"])(nameParts), extension };
            return Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* joinFileName */ "n"])(ensuredNameParts);
        };
        return [
            {
                tag: `a[data-type="${this.name}"]`,
                priority: 100,
                getAttrs: element => {
                    const anchor = element;
                    // anchor.href is not suitable here because it is resolved to an absolute URL, even if the href is
                    // empty or a fragment. We need the original href value.
                    const url = anchor.getAttribute('href');
                    if (!url)
                        return false;
                    const mime = anchor.getAttribute(`data-${this.name}-mime`);
                    if (!mime)
                        return false;
                    const key = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* uuid */ "v"])();
                    if (Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* isImageMime */ "m"])(mime)) {
                        this.storage.download(key, url);
                    }
                    else {
                        this.storage.thumbnail(key, url);
                    }
                    return { key };
                },
            },
            {
                tag: 'img[src^="data:"]',
                priority: 100,
                getAttrs: element => {
                    const image = element;
                    const blob = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* decodeDataUrl */ "e"])(image.src);
                    if (!blob)
                        return false;
                    const mime = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* getMimeByDataUrl */ "j"])(image.src);
                    const key = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* uuid */ "v"])();
                    this.storage.upload(key, Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* createFileByBlob */ "c"])(blob, getFileNameByImage(image)));
                    return { mime, key };
                },
                getContent: (node, schema) => _tiptap_pm_model__WEBPACK_IMPORTED_MODULE_1__[/* Fragment */ "c"].from(schema.text(getFileNameByImage(node))),
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['a', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* mergeAttributes */ "p"])({ 'data-type': this.name }, this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addNodeView() {
        return Object(_tiptap_react__WEBPACK_IMPORTED_MODULE_3__[/* ReactNodeViewRenderer */ "d"])(_view__WEBPACK_IMPORTED_MODULE_7__[/* FileNodeView */ "a"]);
    },
    addCommands() {
        return {
            insertFile: file => ({ commands }) => commands.insertFiles([file]),
            insertFiles: files => ({ commands, editor }) => {
                // Map files to JSON content
                const content = files.map(file => {
                    const mime = file.type || this.options.defaultMime;
                    const key = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* uuid */ "v"])();
                    this.storage.upload(key, file);
                    return {
                        type: this.name,
                        attrs: { mime, key },
                        content: [{ type: 'text', text: file.name }],
                    };
                });
                // Wrap content in a paragraph if grouping with other file nodes
                const { $from, $to } = editor.state.selection;
                const grouping = ($from.nodeBefore && $from.nodeBefore.type.name === this.name) ||
                    ($to.nodeAfter && $to.nodeAfter.type.name === this.name);
                const wrappedContent = grouping ? content : { type: 'paragraph', content };
                return commands.insertContent(wrappedContent);
            },
        };
    },
    addProseMirrorPlugins() {
        const consumeDataTransfer = (data) => {
            if (!data || !Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* dataTransferIncludesFiles */ "d"])(data) || data.types.length > 1)
                return;
            const files = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* extractFilesFromDataTransfer */ "h"])(data);
            return files.length > 0 && this.editor.chain().insertFiles(files).focus().run();
        };
        return [
            new _tiptap_pm_state__WEBPACK_IMPORTED_MODULE_2__[/* Plugin */ "c"]({
                props: {
                    handleDrop: (_, event) => consumeDataTransfer(event.dataTransfer),
                    handlePaste: (_, event) => consumeDataTransfer(event.clipboardData),
                },
            }),
        ];
    },
});


/***/ }),

/***/ "XXj3":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/RadioChoiceDescriptor.tsx ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: RadioChoiceDescriptor */
/*! exports used: RadioChoiceDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioChoiceDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "1+It");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");





const defaultOptions = {
    otherPlaceholder: 'Other',
    choiceAriaLabel: (title, choice) => `${title}: ${choice}`,
};
const makeFieldComponent = ({ otherPlaceholder, choiceAriaLabel }) => ({ entry, onEntryChange, showPlaceholder, delegatedProps }) => {
    var _a, _b;
    const { question, answer } = entry;
    const { choices, shuffle, allowOther } = question;
    const shuffledChoices = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useShuffled */ "x"])({ array: choices, enabled: shuffle && !delegatedProps.readOnly });
    const onChange = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useChoiceChange */ "p"])(entry, onEntryChange);
    const { chosen, otherKey, otherValue, otherSelected, otherFieldRef } = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useChosenAndOther */ "s"])(choices, answer.content);
    const choiceGroupStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useChoiceGroupStyles */ "r"])();
    const choiceGroupOptionStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useChoiceGroupOptionStyles */ "q"])();
    const otherFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* useOtherFieldStyles */ "v"])();
    const options = shuffledChoices.map(choice => {
        var _a;
        return ({
            key: choice,
            text: choice,
            styles: choiceGroupOptionStyles,
            ariaLabel: choiceAriaLabel((_a = question.title) !== null && _a !== void 0 ? _a : '', choice),
        });
    });
    if (allowOther) {
        options.push({
            key: otherKey,
            text: otherValue !== null && otherValue !== void 0 ? otherValue : '',
            styles: choiceGroupOptionStyles,
            onRenderLabel: choiceGroupProps => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], { componentRef: otherFieldRef, value: choiceGroupProps === null || choiceGroupProps === void 0 ? void 0 : choiceGroupProps.text, onChange: onChange && ((_, newValue) => onChange([], newValue)), placeholder: showPlaceholder ? otherPlaceholder : undefined, readOnly: delegatedProps.readOnly, invalid: otherSelected && delegatedProps.invalid, id: choiceGroupProps === null || choiceGroupProps === void 0 ? void 0 : choiceGroupProps.labelId, className: 'ms-ChoiceFieldLabel', styles: otherFieldStyles })),
            ariaLabel: choiceAriaLabel((_a = question.title) !== null && _a !== void 0 ? _a : '', otherValue !== null && otherValue !== void 0 ? otherValue : otherPlaceholder),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* ChoiceGroup */ "a"], Object.assign({}, delegatedProps, { selectedKey: otherSelected ? otherKey : (_b = chosen[0]) !== null && _b !== void 0 ? _b : null, onChange: onChange &&
            ((_, option) => {
                var _a;
                if (!option)
                    return;
                if (option.key === otherKey) {
                    (_a = otherFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                    onChange([], '');
                }
                else {
                    onChange([option.key]);
                }
            }), options: options, role: 'radiogroup', styles: choiceGroupStyles })));
};
/**
 * The descriptor that renders a group of radio buttons for choice entries with radio appearance.
 */
class RadioChoiceDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a choice entry with radio appearance, and the form is not in viewing mode.
     *
     * @param entry The entry to test.
     * @param context The context.
     * @returns Passes the test or not.
     */
    test(entry, context) {
        return (entry.question.type === _types__WEBPACK_IMPORTED_MODULE_3__[/* FormQuestionType */ "d"].Choice &&
            entry.question.appearance === _types__WEBPACK_IMPORTED_MODULE_3__[/* ChoiceAppearance */ "b"].Radio &&
            context.mode !== _types__WEBPACK_IMPORTED_MODULE_3__[/* FormMode */ "c"].Viewing);
    }
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

/***/ "ZDGZ":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/index.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: defaultValidators, LengthValidator, NumberValidator, RequiredValidator, RichTextValidator */
/*! exports used: LengthValidator, NumberValidator, RequiredValidator, RichTextValidator, defaultValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "ZxnV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _LengthValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LengthValidator */ "khU4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _LengthValidator__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _NumberValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumberValidator */ "vSPf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _NumberValidator__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _RequiredValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequiredValidator */ "3LNs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _RequiredValidator__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _RichTextValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RichTextValidator */ "eyiR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _RichTextValidator__WEBPACK_IMPORTED_MODULE_4__["a"]; });








/***/ }),

/***/ "Zo+t":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/view.fallback.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: FallbackView */
/*! exports used: FallbackView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FallbackView; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "I0jv");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "4pHs");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "lm3o");
/* harmony import */ var _addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/utilities-hooks */ "jG8U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "i5ni");
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




const FallbackView = (_a) => {
    var { thumbnail, loading, children } = _a, props = __rest(_a, ["thumbnail", "loading", "children"]);
    const targetRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);
    const thumbnailUrl = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useBlobObjectUrl */ "a"])(thumbnail);
    const styles = Object(_styles__WEBPACK_IMPORTED_MODULE_5__[/* useFallbackViewStyles */ "b"])();
    return (
    // Justification: the props are spread to the anchor element
    // eslint-disable-next-line react/jsx-no-target-blank
    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", Object.assign({ ref: targetRef }, props),
        loading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Spinner */ "a"], { className: styles.spinner, size: _fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerSize */ "a"].xSmall }),
        thumbnailUrl ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* TooltipHost */ "a"], { content: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", { src: thumbnailUrl }) }, children) : children));
};


/***/ }),

/***/ "ZxnV":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/default.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: defaultValidators */
/*! exports used: defaultValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultValidators; });
/* harmony import */ var _LengthValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LengthValidator */ "khU4");
/* harmony import */ var _NumberValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberValidator */ "vSPf");
/* harmony import */ var _RequiredValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequiredValidator */ "3LNs");
/* harmony import */ var _RichTextValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichTextValidator */ "eyiR");




const defaultValidators = [
    new _LengthValidator__WEBPACK_IMPORTED_MODULE_0__[/* LengthValidator */ "a"](),
    new _RequiredValidator__WEBPACK_IMPORTED_MODULE_2__[/* RequiredValidator */ "a"](),
    new _NumberValidator__WEBPACK_IMPORTED_MODULE_1__[/* NumberValidator */ "a"](),
    new _RichTextValidator__WEBPACK_IMPORTED_MODULE_3__[/* RichTextValidator */ "a"](),
];


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

/***/ "acy+":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/utils.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: getCompactByExtension, getStringsByExtension */
/*! exports used: getCompactByExtension, getStringsByExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCompactByExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStringsByExtension; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "PXm5");

/**
 * Get the compact by an extension.
 *
 * @param extension The extension.
 * @returns The compact.
 */
function getCompactByExtension(extension) {
    const compact = extension.options.compact;
    return typeof compact === 'boolean' ? compact : undefined;
}
/**
 * Get the strings by an extension.
 *
 * @param extension The extension.
 * @returns The strings.
 */
function getStringsByExtension(extension) {
    const strings = extension.options.strings;
    return typeof strings === 'object' ? strings : _utils__WEBPACK_IMPORTED_MODULE_0__[/* defaultRichTextFieldStrings */ "b"];
}


/***/ }),

/***/ "cuY3":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/PreviewingDecorator/index.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: PreviewingDecorator */
/*! exports used: PreviewingDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewingDecorator */ "oMBF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_0__["a"]; });




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

/***/ "dXPV":
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/DesigningDecorator.tsx ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: DesigningDecorator */
/*! exports used: DesigningDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesigningDecorator; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PreviewingDecorator */ "cuY3");
/* harmony import */ var _DesigningDecorator_active__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesigningDecorator.active */ "8PXs");
/* harmony import */ var _DesigningDecorator_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DesigningDecorator.styles */ "1iuO");






function DesigningDecorator(props) {
    var _a;
    const { entry, onEntryChange, feature } = props;
    const { strings } = feature;
    const active = (_a = entry.active) !== null && _a !== void 0 ? _a : false;
    const setActive = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((value) => {
        const newEntry = Object.assign({}, entry);
        newEntry.active = value;
        if (!newEntry.active)
            delete newEntry.active;
        onEntryChange === null || onEntryChange === void 0 ? void 0 : onEntryChange(newEntry);
    }, [entry, onEntryChange]);
    const hint = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => strings.questionHint(entry.question, active), [active, entry.question, strings]);
    const ref = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* useActive */ "n"])({ active, setActive });
    const Component = active ? _DesigningDecorator_active__WEBPACK_IMPORTED_MODULE_4__[/* ActiveDesigningDecorator */ "a"] : _PreviewingDecorator__WEBPACK_IMPORTED_MODULE_3__[/* PreviewingDecorator */ "a"];
    const styles = Object(_DesigningDecorator_styles__WEBPACK_IMPORTED_MODULE_5__[/* useDesigningDecoratorStyles */ "b"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: ref, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, !active && styles.inactive), tabIndex: 0, "aria-label": hint },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props))));
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

/***/ "eyiR":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/RichTextValidator.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: RichTextValidator */
/*! exports used: RichTextValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextValidator; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "CYKX");


const defaultRequiredErrorMessage = 'This field is required';
const defaultFilesErrorMessage = 'Something went wrong while uploading files';
/**
 * A validator that checks rich text answers.
 */
class RichTextValidator {
    /**
     * Creates a rich text validator.
     *
     * @param options.requiredErrorMessage The error message to display when the answer is empty.
     * @param options.filesErrorMessage The error message to display when there are files with errors.
     * @returns A required validator.
     */
    constructor({ requiredErrorMessage = defaultRequiredErrorMessage, filesErrorMessage = defaultFilesErrorMessage, } = {}) {
        this.requiredErrorMessage = requiredErrorMessage;
        this.filesErrorMessage = filesErrorMessage;
    }
    validate({ question, answer }) {
        var _a;
        if (question.type !== _types__WEBPACK_IMPORTED_MODULE_0__[/* FormQuestionType */ "d"].RichText) {
            return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* createValidationSuccess */ "b"])();
        }
        const content = ((_a = answer.content) !== null && _a !== void 0 ? _a : '');
        const dom = new DOMParser().parseFromString(content, 'text/html');
        // Check for required.
        if (question.required && Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* isHtmlEmpty */ "l"])(dom)) {
            return this.createValidationFailure(this.requiredErrorMessage);
        }
        // Check for error files.
        if (Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* hasErrorFiles */ "j"])(dom)) {
            return this.createValidationFailure(this.filesErrorMessage);
        }
        // Check for uploading files.
        if (Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* hasUploadingFiles */ "k"])(dom)) {
            return this.createValidationFailure();
        }
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* createValidationSuccess */ "b"])();
    }
    createValidationFailure(errorMessage) {
        return { valid: false, errorMessage };
    }
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

/***/ "fjhP":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: RichTextField, RibbonPosition */
/*! exports used: RibbonPosition, RichTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RichTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichTextField */ "W2tD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _RichTextField__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _RichTextField__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ "fv2u":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/default.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: defaultDescriptors */
/*! exports used: defaultDescriptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultDescriptors; });
/* harmony import */ var _CheckboxChoiceDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxChoiceDescriptor */ "ojxn");
/* harmony import */ var _DateTimeDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTimeDescriptor */ "DrRq");
/* harmony import */ var _DropdownChoiceDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownChoiceDescriptor */ "4xOb");
/* harmony import */ var _FallbackViewingDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FallbackViewingDescriptor */ "lbGw");
/* harmony import */ var _RadioChoiceDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RadioChoiceDescriptor */ "XXj3");
/* harmony import */ var _RichTextDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RichTextDescriptor */ "NhT3");
/* harmony import */ var _TextDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextDescriptor */ "1f/+");







const defaultDescriptors = [
    new _TextDescriptor__WEBPACK_IMPORTED_MODULE_6__[/* TextDescriptor */ "a"](),
    new _RichTextDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* RichTextDescriptor */ "a"](),
    new _RadioChoiceDescriptor__WEBPACK_IMPORTED_MODULE_4__[/* RadioChoiceDescriptor */ "a"](),
    new _DropdownChoiceDescriptor__WEBPACK_IMPORTED_MODULE_2__[/* DropdownChoiceDescriptor */ "a"](),
    new _CheckboxChoiceDescriptor__WEBPACK_IMPORTED_MODULE_0__[/* CheckboxChoiceDescriptor */ "a"](),
    new _DateTimeDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* DateTimeDescriptor */ "a"](),
    new _FallbackViewingDescriptor__WEBPACK_IMPORTED_MODULE_3__[/* FallbackViewingDescriptor */ "a"](),
];


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

/***/ "h02v":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/facade/FormFacade.tsx ***!
  \************************************************************************************************************************/
/*! exports provided: FormFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FormFacade */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstractions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractions */ "8Q8G");
/* harmony import */ var _implementations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../implementations */ "+j0w");
/* harmony import */ var _FormFacade_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormFacade.styles */ "6vdQ");
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
 * The form facade component that renders a form with default feature in a single column layout.
 */
const FormFacade = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_a, ref) => {
    var { context, onContextChange, feature, className } = _a, props = __rest(_a, ["context", "onContextChange", "feature", "className"]);
    const featureInternal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => (Object.assign(Object.assign({}, _implementations__WEBPACK_IMPORTED_MODULE_3__[/* defaultFormFeature */ "q"]), feature)), [feature]);
    // Populate the ref.
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useImperativeHandle(ref, () => ({
        validate: quietly => {
            const newEntries = Object(_implementations__WEBPACK_IMPORTED_MODULE_3__[/* validateEntries */ "r"])(context.entries, featureInternal.validators, quietly);
            onContextChange === null || onContextChange === void 0 ? void 0 : onContextChange(Object.assign(Object.assign({}, context), { entries: newEntries }));
        },
    }), [context, onContextChange, featureInternal.validators]);
    const styles = Object(_FormFacade_styles__WEBPACK_IMPORTED_MODULE_4__[/* useFormFacadeStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_abstractions__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "a"], { context: context, onContextChange: onContextChange, feature: featureInternal })));
});


/***/ }),

/***/ "h1fr":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/ColorMenuItem/ColorMenuItem.tsx ***!
  \********************************************************************************************************************************************************/
/*! exports provided: ColorMenuItem */
/*! exports used: ColorMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorMenuItem; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorMenuItem_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorMenuItem.styles */ "VY8F");



const ColorMenuItem = ({ text, color, onClick }) => {
    const styles = Object(_ColorMenuItem_styles__WEBPACK_IMPORTED_MODULE_2__[/* useColorMenuItemStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, color ? styles.color : styles.text), style: { backgroundColor: color }, onClick: onClick, title: text }, !color && text));
};


/***/ }),

/***/ "hE3l":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/index.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: DesigningDecorator */
/*! exports used: DesigningDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DesigningDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesigningDecorator */ "dXPV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DesigningDecorator__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "he+s":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/PrimarySettings/index.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: PrimarySettings */
/*! exports used: PrimarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PrimarySettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimarySettings */ "1A5h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PrimarySettings__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "heIF":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertLink/InsertLink.dialog.tsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: InsertLinkDialog */
/*! exports used: InsertLinkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertLinkDialog; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "3m8w");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InsertLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsertLink */ "KGCU");
/* harmony import */ var _InsertLink_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsertLink.styles */ "JPPb");




const InsertLinkDialog = ({ initialLink, onConfirm, onCancel, normalizeUrl, strings, }) => {
    const [link, setLink] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState();
    const [hidden, setHidden] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
    const dismiss = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => setHidden(true), []);
    const confirm = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((link) => {
        setLink(link);
        dismiss();
    }, [dismiss]);
    const cancel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
        setLink(undefined);
        dismiss();
    }, [dismiss]);
    const commit = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => (link ? onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(link) : onCancel === null || onCancel === void 0 ? void 0 : onCancel()), [link, onConfirm, onCancel]);
    const styles = Object(_InsertLink_styles__WEBPACK_IMPORTED_MODULE_3__[/* useInsertLinkDialogStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Dialog */ "a"], { hidden: hidden, dialogContentProps: { title: strings.insertLinkTitle }, modalProps: { className: styles.root, onDismiss: cancel, onDismissed: commit } },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InsertLink__WEBPACK_IMPORTED_MODULE_2__[/* InsertLink */ "a"], { initialLink: initialLink, onConfirm: confirm, onCancel: cancel, normalizeUrl: normalizeUrl, strings: strings })));
};


/***/ }),

/***/ "hh3E":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/ChoiceSettings/ChoiceSettings.styles.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: useChoiceSettingsStyles */
/*! exports used: useChoiceSettingsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useChoiceSettingsStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useChoiceSettingsStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingInlineStart: '8px',
    },
    choiceRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        '> .ms-TextField': {
            flexBasis: '400px',
            marginInline: '8px',
        },
    },
    hidden: {
        visibility: 'hidden',
    },
    actionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px 24px',
        flexWrap: 'wrap',
        '> .ms-Button': {
            height: '28px',
            padding: 0,
        },
    },
    decorator: {
        flexShrink: 0,
        height: '16px',
        width: '16px',
        margin: '4px',
        boxSizing: 'border-box',
        border: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiary}`,
    },
    checkbox: {
        borderRadius: '2px',
    },
    radio: {
        borderRadius: '50%',
    },
}));


/***/ }),

/***/ "i5ni":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/styles.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: useFileNodeViewStyles, useImageViewStyles, useEmbeddedImageContentStyles, useFullscreenImageContentStyles, useFallbackViewStyles */
/*! exports used: useEmbeddedImageContentStyles, useFallbackViewStyles, useFileNodeViewStyles, useFullscreenImageContentStyles, useImageViewStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useFileNodeViewStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useImageViewStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEmbeddedImageContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useFullscreenImageContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useFallbackViewStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const useFileNodeViewStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        borderRadius: '4px',
        overflow: 'hidden',
        '&.selected a': {
            textDecorationStyle: 'double',
        },
    },
    error: {
        borderColor: theme.palette.redDark,
        '[data-node-view-content]': {
            color: theme.palette.redDark,
        },
        a: {
            textDecoration: 'line-through',
        },
    },
    image: {
        display: 'inline-flex',
        maxWidth: '100%',
        boxShadow: theme.effects.elevation4,
        margin: '2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
        '&.selected': {
            borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.black,
        },
    },
}));
const useImageViewStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        width: 'fit-content',
        maxWidth: '100%',
        height: '100%',
    },
    embedded: {
        cursor: 'pointer',
    },
    hidden: {
        display: 'none',
    },
});
const useEmbeddedImageContentStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        position: 'relative',
        maxWidth: '100%',
    },
    image: {
        display: 'block',
        objectFit: 'contain',
        width: '100%',
        height: '100%',
    },
    mask: {
        position: 'absolute',
        inset: 0,
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isDefaultTheme */ "h"])(theme.name) ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.5)',
    },
    error: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        gap: '12px',
    },
    buttons: {
        display: 'flex',
        gap: '12px',
        '.ms-Button': {
            minWidth: '32px',
            padding: 0,
        },
    },
    icon: {
        flex: 1,
        fontSize: '48px',
    },
}));
const useFullscreenImageContentStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    header: {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        gap: '16px',
    },
    name: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size16,
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    controls: {
        display: 'flex',
        gap: '8px',
    },
    button: {
        color: 'white',
    },
    main: {
        flex: 1,
    },
    wrapper: {
        width: 'unset !important',
        height: 'unset !important',
    },
    image: {
        display: 'block',
    },
    message: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size16,
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
    },
});
const useFallbackViewStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    spinner: {
        display: 'inline-flex',
        margin: '0 4px',
    },
});


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
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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
                fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].semibold,
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

/***/ "ijjI":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.tsx ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: RichTextRibbon */
/*! exports used: RichTextRibbon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextRibbon; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "WIPo");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/utilities-hooks */ "jG8U");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RichTextRibbon_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RichTextRibbon.items */ "+Xob");
/* harmony import */ var _RichTextRibbon_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RichTextRibbon.styles */ "W61K");






/**
 * The ribbon component for the rich text editor.
 */
const RichTextRibbon = ({ editor, compact, callbacks = {}, strings }) => {
    const styles = Object(_RichTextRibbon_styles__WEBPACK_IMPORTED_MODULE_5__[/* useRibbonStyles */ "b"])();
    const commandBarStyles = Object(_RichTextRibbon_styles__WEBPACK_IMPORTED_MODULE_5__[/* useRibbonCommandBarStyles */ "a"])();
    const { renderings, render, unrender } = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useRenderings */ "c"])();
    if (!editor)
        return null;
    const ribbonItemGroups = compact ? _RichTextRibbon_items__WEBPACK_IMPORTED_MODULE_4__[/* compactRibbonItemGroups */ "a"] : _RichTextRibbon_items__WEBPACK_IMPORTED_MODULE_4__[/* defaultRibbonItemGroups */ "b"];
    const ribbonItemParams = { editor, compact, callbacks, strings, render, unrender };
    const items = ribbonItemGroups.flatMap(ribbonItemGroup => {
        const group = ribbonItemGroup.map(ribbonItem => Object(_RichTextRibbon_items__WEBPACK_IMPORTED_MODULE_4__[/* getItemProps */ "c"])(ribbonItem, ribbonItemParams)).filter(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* isDefined */ "l"]);
        if (group.length)
            group[0].className = styles.leadingButton;
        return group;
    });
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* CommandBar */ "a"], { styles: commandBarStyles, items: items }),
        renderings));
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

/***/ "jRU1":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/rich-text.ts ***!
  \*********************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "jcKs":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/RenderingField/RenderingField.styles.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useRenderingFieldStyles */
/*! exports used: useRenderingFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRenderingFieldStyles; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "j17d");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");


const useRenderingFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* makeStyles */ "a"])(theme => ({
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginBottom: '8px',
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
        color: theme.palette.neutralDark,
        fontWeight: 600,
        wordBreak: 'break-word',
    },
    requiredLabel: {
        '::after': {
            content: '"*"',
            color: theme.palette.redDark,
            marginInline: '4px',
        },
    },
    description: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
        color: theme.palette.neutralSecondary,
        wordBreak: 'break-word',
    },
    errorMessage: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
        color: theme.palette.redDark,
        paddingInline: '12px',
        marginTop: '4px',
        wordBreak: 'break-word',
        animation: `${_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MotionAnimations */ "a"].fadeIn}, ${_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* MotionAnimations */ "a"].slideDownIn}`,
    },
}));


/***/ }),

/***/ "jeGZ":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/misc.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: Misc */
/*! exports used: Misc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Misc; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "gk5g");

const Misc = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__[/* Extension */ "b"].create({
    name: 'misc',
    addCommands() {
        return {
            focusLater: (frames = 0, ...args) => ({ commands }) => {
                schedule(frames, () => commands.focus(...args));
                return true;
            },
        };
    },
});
function schedule(frames, callback) {
    if (frames <= 0) {
        callback();
        return;
    }
    requestAnimationFrame(() => schedule(frames - 1, callback));
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

/***/ "jow1":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/ChoiceSettings/index.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: ChoiceSettings */
/*! exports used: ChoiceSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ChoiceSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChoiceSettings */ "ANB6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ChoiceSettings__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "jrh6":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/BaseDescriptor.tsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: BaseDescriptor */
/*! exports used: BaseDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDescriptor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "l/RN");


/**
 * The base descriptor that provides the common logic for all descriptors, such as validation.
 * Any inherited descriptor must implement the `test` method and `FieldComponent` property.
 */
class BaseDescriptor {
    /**
     * Renders the field with some common logic, such as validation and designing tools.
     *
     * @param props The props to render the field.
     * @returns The rendered field.
     */
    render(props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* RenderingField */ "b"], Object.assign({}, props, { Component: this.FieldComponent }));
    }
}


/***/ }),

/***/ "khU4":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/LengthValidator.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: LengthValidator */
/*! exports used: LengthValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LengthValidator; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities */ "CYKX");

const defaultMaxLength = () => 10000;
const defaultErrorMessageByMaxLength = maxLength => `Please enter less than ${maxLength} characters`;
/**
 * A validator that checks if the answer not exceeds the max length.
 * If the answer content is not a string, this validator will always pass.
 * Otherwise, this validator will fail if the answer content exceeds the max length, and prevent the change.
 */
class LengthValidator {
    /**
     * Creates a length validator.
     *
     * @param options.maxLength The max length of the answer content.
     * @param options.errorMessageByMaxLength The error message if the answer content exceeds the max length.
     * @returns A length validator.
     */
    constructor({ maxLength = defaultMaxLength, errorMessageByMaxLength = defaultErrorMessageByMaxLength, } = {}) {
        this.maxLength = maxLength;
        this.errorMessageByMaxLength = errorMessageByMaxLength;
    }
    validate({ question, answer }) {
        var _a, _b;
        const content = answer.content;
        // Check for undefined.
        if (content === undefined) {
            return Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])();
        }
        const type = question.type;
        const maxLength = this.maxLength(type);
        // Check for string.
        if (typeof content === 'string') {
            const length = content.length;
            return length <= maxLength ? Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])() : this.createValidationFailure(maxLength, type);
        }
        // Check for choice answer.
        if (typeof content === 'object' && 'chosen' in content) {
            const length = content.chosen.reduce((l, c) => l + c.length, 0) + ((_b = (_a = content.other) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
            return length <= maxLength ? Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])() : this.createValidationFailure(maxLength, type);
        }
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[/* createValidationSuccess */ "b"])();
    }
    createValidationFailure(maxLength, type) {
        const errorMessage = this.errorMessageByMaxLength(maxLength, type);
        return { valid: false, errorMessage, preventChange: true };
    }
}


/***/ }),

/***/ "kluZ":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertTable/index.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: InsertTable */
/*! exports used: InsertTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _InsertTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertTable */ "vy97");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _InsertTable__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "l/RN":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DesigningDecorator, DesigningTrailingActions, RenderingField */
/*! exports used: DesigningTrailingActions, RenderingField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DesigningDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesigningDecorator */ "hE3l");
/* harmony import */ var _DesigningTrailingActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesigningTrailingActions */ "vfor");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DesigningTrailingActions__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _RenderingField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderingField */ "M25M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _RenderingField__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),

/***/ "lbGw":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/FallbackViewingDescriptor.tsx ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: FallbackViewingDescriptor */
/*! exports used: FallbackViewingDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FallbackViewingDescriptor; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");




const defaultOptions = {
    formatList: (value) => value.join('\n'),
    formatDate: (value) => value.toDateString(),
};
const useFallbackViewingStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        cursor: 'text',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        color: theme.palette.black,
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
        padding: '6px 12px',
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
        lineHeight: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size18,
        minHeight: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size18,
    },
}));
const makeFieldComponent = ({ formatList, formatDate }) => ({ entry, delegatedProps }) => {
    const { answer } = entry;
    const viewingContent = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => {
        const content = answer.content;
        if (content === undefined) {
            return '';
        }
        if (typeof content === 'string') {
            return content;
        }
        if ('chosen' in content) {
            const list = content.other ? [...content.chosen, content.other] : content.chosen;
            return formatList(list);
        }
        if (content instanceof Date) {
            return formatDate(content);
        }
        const exhaustiveCheck = content;
        throw new Error(`Unhandled content type: ${exhaustiveCheck}`);
    }, [answer]);
    const styles = useFallbackViewingStyles();
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object.assign({}, delegatedProps, { className: styles.root, role: 'textbox', tabIndex: -1 }), viewingContent));
};
/**
 * The fallback descriptor that renders a text field in viewing mode, for all entries.
 */
class FallbackViewingDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_5__[/* BaseDescriptor */ "a"] {
    constructor(options = {}) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the form is in viewing mode.
     *
     * @param _ Unused.
     * @param context The context.
     * @returns Passes the test or not.
     */
    test(_, context) {
        return context.mode === _types__WEBPACK_IMPORTED_MODULE_4__[/* FormMode */ "c"].Viewing;
    }
}


/***/ }),

/***/ "m4aR":
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/MockedField/MockedField.styles.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: useMockedFieldStyles */
/*! exports used: useMockedFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMockedFieldStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "McEG");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const useMockedFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralTertiary,
        boxSizing: 'border-box',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* ContrastColors */ "b"].appGreenContrast : theme.palette.neutralTertiaryAlt,
        borderRadius: '4px',
        pointerEvents: 'none',
        userSelect: 'none',
    },
    ribbon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* FontSizes */ "a"].size32,
        gap: '8px',
        padding: '7px 11px 1px',
        '> *': {
            padding: '0 8px',
        },
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 12px',
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* FontSizes */ "a"].size14,
        fontWeight: '400',
        lineHeight: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* FontSizes */ "a"].size20,
    },
    multiline: {
        height: '96px',
    },
    icon: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_3__[/* FontSizes */ "a"].size16,
    },
}));


/***/ }),

/***/ "m81U":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/base.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: FormQuestionType */
/*! exports used: FormQuestionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormQuestionType; });
var FormQuestionType;
(function (FormQuestionType) {
    FormQuestionType[FormQuestionType["Text"] = 0] = "Text";
    FormQuestionType[FormQuestionType["RichText"] = 1] = "RichText";
    FormQuestionType[FormQuestionType["Choice"] = 2] = "Choice";
    FormQuestionType[FormQuestionType["DateTime"] = 3] = "DateTime";
})(FormQuestionType || (FormQuestionType = {}));


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

/***/ "mgyn":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextField/RichTextField.tsx ***!
  \********************************************************************************************************************************************************/
/*! exports provided: RichTextField */
/*! exports used: RichTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichTextField; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "Rel8");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-hooks */ "EO0U");
/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-placeholder */ "LItl");
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/react */ "Vb8B");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../extensions */ "IRqU");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "PXm5");
/* harmony import */ var _RichTextRibbon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RichTextRibbon */ "0aOy");
/* harmony import */ var _RichTextField_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RichTextField.styles */ "nPWh");
/* harmony import */ var _RichTextField_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RichTextField.types */ "t/oA");
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










const RichTextField = Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])((_a, ref) => {
    var { value, onChange, errorMessage, label, description, required, placeholder, prefix, readOnly, invalid, compact, ribbonPosition = _RichTextField_types__WEBPACK_IMPORTED_MODULE_10__[/* RibbonPosition */ "a"].Top, focusable = true, callbacks, fileStorageService, additionalExtensions, strings, className, rootClassName, containerClassName, children, 'aria-required': ariaRequired, 'aria-placeholder': ariaPlaceholder, 'aria-readonly': ariaReadonly, 'aria-labelledby': externalLabelId, 'aria-describedby': externalDescriptionId } = _a, props = __rest(_a, ["value", "onChange", "errorMessage", "label", "description", "required", "placeholder", "prefix", "readOnly", "invalid", "compact", "ribbonPosition", "focusable", "callbacks", "fileStorageService", "additionalExtensions", "strings", "className", "rootClassName", "containerClassName", "children", 'aria-required', 'aria-placeholder', 'aria-readonly', 'aria-labelledby', 'aria-describedby']);
    const stringsInternal = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => (Object.assign(Object.assign({}, _utils__WEBPACK_IMPORTED_MODULE_7__[/* defaultRichTextFieldStrings */ "b"]), strings)), [strings]);
    const valueRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.useRef(value);
    valueRef.current = value;
    const onChangeRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.useRef(onChange);
    onChangeRef.current = onChange;
    const uncontrolledValueRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.useRef(value);
    // Prevent calling onChange when the html is not changed, since we catch any possible content updates from
    // `UpdateContentPlugin`, which could be noisy.
    const onUpdate = react__WEBPACK_IMPORTED_MODULE_5___default.a.useCallback(event => {
        var _a;
        const html = event.editor.getHTML();
        if (valueRef.current === html)
            return;
        (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, html);
        uncontrolledValueRef.current = html;
    }, []);
    const internalLabelId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useId */ "a"])('label');
    const internalDescriptionId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useId */ "a"])('description');
    const internalErrorMessageId = Object(_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useId */ "a"])('errormessage');
    // Prefix is used to add a data attribute to the editor container, which can be used for styling, to dynamically
    // add a prefix to the content. This is useful for example when the editor is used to render replies in comments.
    // Tiptap does not provide a way to directly access the contenteditable element, so we have to pass these attributes
    // to support accessibility. The contenteditable element is not a native input, so it must have a role of textbox.
    // Error message is handled separately, because it can change without the editor content changing, and we want to
    // avoid unnecessary re-renders.
    const composedArialRequired = required || ariaRequired;
    const composedAriaPlaceholder = placeholder || ariaPlaceholder;
    const composedAriaReadonly = readOnly || ariaReadonly;
    const composedLabelId = externalLabelId || (label && internalLabelId);
    const composedDescriptionId = externalDescriptionId || (description && internalDescriptionId);
    const editorProps = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => ({
        attributes: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (prefix && { 'data-prefix': prefix })), { role: 'textbox', 'aria-multiline': 'true' }), (composedArialRequired && { 'aria-required': 'true' })), (composedAriaPlaceholder && { 'aria-placeholder': composedAriaPlaceholder })), (composedAriaReadonly && { 'aria-readonly': 'true' })), (composedLabelId && { 'aria-labelledby': composedLabelId })), (composedDescriptionId && { 'aria-describedby': composedDescriptionId })),
    }), [
        prefix,
        composedArialRequired,
        composedAriaPlaceholder,
        composedAriaReadonly,
        composedLabelId,
        composedDescriptionId,
    ]);
    const extensions = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(() => [
        _extensions__WEBPACK_IMPORTED_MODULE_6__[/* Defaults */ "b"],
        _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_3__[/* Placeholder */ "a"].configure({ placeholder }),
        ...(fileStorageService
            ? [_extensions__WEBPACK_IMPORTED_MODULE_6__[/* File */ "c"].configure({ fileStorageService, compact, strings: stringsInternal })]
            : []),
        ...(additionalExtensions !== null && additionalExtensions !== void 0 ? additionalExtensions : []),
    ], [additionalExtensions, compact, fileStorageService, placeholder, stringsInternal]);
    const editor = Object(_tiptap_react__WEBPACK_IMPORTED_MODULE_4__[/* useEditor */ "e"])({
        parseOptions: { preserveWhitespace: 'full' },
        editorProps,
        extensions,
        editable: !readOnly,
        content: value,
        onUpdate,
    }, [editorProps, extensions, readOnly]);
    // Because Tiptap handles its own changes, and does not allow preventing edits,
    // we have to settle for a hybrid between controlled and uncontrolled mode.
    // It can't prevent the change, but will still override the content whenever value differs from current state.
    // Like https://www.npmjs.com/package/react-quill#user-content-controlled-mode-caveats
    react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
        if (!editor || uncontrolledValueRef.current === value)
            return;
        // Workaround for "flushSync was called from inside a lifecycle method. React cannot flush when React is
        // already rendering. Consider moving this call to a scheduler task or micro task."
        // See https://github.com/ueberdosis/tiptap/issues/3764
        queueMicrotask(() => {
            if (uncontrolledValueRef.current === value)
                return;
            editor.commands.setContent(value);
        });
    }, [editor, value]);
    const styles = Object(_RichTextField_styles__WEBPACK_IMPORTED_MODULE_9__[/* useRichTextFieldStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { ref: ref, className: rootClassName },
        label && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Label */ "a"], { id: internalLabelId, required: required }, label)),
        description && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { id: internalDescriptionId, className: styles.description }, description)),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])('ms-RichTextField', styles.editorContainer, errorMessage || invalid ? styles.error : focusable && styles.focusable, containerClassName) },
            ribbonPosition === _RichTextField_types__WEBPACK_IMPORTED_MODULE_10__[/* RibbonPosition */ "a"].Top && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RichTextRibbon__WEBPACK_IMPORTED_MODULE_8__[/* RichTextRibbon */ "a"], { editor: editor, compact: compact, callbacks: callbacks, strings: stringsInternal })),
            children,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tiptap_react__WEBPACK_IMPORTED_MODULE_4__[/* EditorContent */ "a"], Object.assign({ editor: editor, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.editor, className), "aria-errormessage": errorMessage ? internalErrorMessageId : undefined, "aria-invalid": !!errorMessage || invalid }, props)),
            ribbonPosition === _RichTextField_types__WEBPACK_IMPORTED_MODULE_10__[/* RibbonPosition */ "a"].Bottom && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RichTextRibbon__WEBPACK_IMPORTED_MODULE_8__[/* RichTextRibbon */ "a"], { editor: editor, compact: compact, callbacks: callbacks, strings: stringsInternal })))));
});


/***/ }),

/***/ "mw6P":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/validation.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: createValidationSuccess, mergeValidations, validateEntry, validateEntries, isHtmlEmpty, hasErrorFiles, hasUploadingFiles */
/*! exports used: createValidationSuccess, hasErrorFiles, hasUploadingFiles, isHtmlEmpty, mergeValidations, validateEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createValidationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeValidations; });
/* unused harmony export validateEntry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validateEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isHtmlEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasErrorFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasUploadingFiles; });
/**
 * Creates a successful validation.
 *
 * @returns The successful validation.
 */
function createValidationSuccess() {
    return { valid: true };
}
/**
 * Merges multiple validations into a single validation.
 * If any of the validations fail, the merged validation will fail.
 * The error message of the merged validation will be the first error message found.
 * If any of the validations prevent change, the merged validation will prevent change.
 *
 * @param validations The validations to merge.
 * @returns The merged validation.
 */
function mergeValidations(validations) {
    var _a;
    const failures = validations.filter((result) => !result.valid);
    if (failures.length === 0) {
        return { valid: true };
    }
    return {
        valid: false,
        errorMessage: (_a = failures.find(result => result.errorMessage)) === null || _a === void 0 ? void 0 : _a.errorMessage,
        preventChange: failures.some(result => result.preventChange),
    };
}
/**
 * Validates a single entry and returns a new entry with the validation result.
 *
 * @param entry The entry to validate.
 * @param validators The validators to use.
 * @param quietly If true, the entry's error message will not be set.
 * @returns The validated entry.
 */
function validateEntry(entry, validators, quietly) {
    const validation = mergeValidations(validators.map(validator => validator.validate(entry)));
    const newEntry = Object.assign({}, entry);
    newEntry.invalid = !validation.valid;
    if (validation.valid || !validation.errorMessage || quietly) {
        delete newEntry.errorMessage;
    }
    else {
        newEntry.errorMessage = validation.errorMessage;
    }
    return newEntry;
}
/**
 * Validates multiple entries and returns new entries with the validation results.
 *
 * @param entries The entries to validate.
 * @param validators The validators to use.
 * @param quietly If true, the entries' error messages will not be set.
 * @returns The validated entries.
 */
function validateEntries(entries, validators, quietly) {
    return entries.map(entry => validateEntry(entry, validators, quietly));
}
/**
 * Checks if the dom is visually empty. Empty is defined as no text content and no lists, tables, or images.
 *
 * @param dom The document to check.
 * @returns True if the dom is visually empty, false otherwise.
 */
function isHtmlEmpty(dom) {
    // If the text content is empty and there are no lists, tables, or images, then it's considered empty.
    return !dom.body.textContent && dom.body.querySelector('ol, ul, table, img') === null;
}
/**
 * Checks if the dom has error files, which have data-type=file and data-file-error.
 *
 * @param dom The document to check.
 * @returns True if the dom has error files, false otherwise.
 */
function hasErrorFiles(dom) {
    return Boolean(dom.querySelector('a[data-type=file][data-file-error]'));
}
/**
 * Checks if the dom has uploading files, which have data-type=file but no href yet.
 *
 * @param dom The document to check.
 * @returns True if the dom has uploading files, false otherwise.
 */
function hasUploadingFiles(dom) {
    return Boolean(dom.querySelector('a[data-type=file]:not([href])'));
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
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
                        },
                    },
                },
                '&:active': {
                    color: theme.palette.themePrimary,
                    backgroundColor: 'transparent',
                    selectors: {
                        i: {
                            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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

/***/ "nKrk":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningDecorator/MockedField/MockedField.tsx ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: MockedField */
/*! exports used: MockedField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockedField; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "YGsJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities */ "CYKX");
/* harmony import */ var _MockedField_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MockedField.styles */ "m4aR");





function MockedField({ question, strings }) {
    const styles = Object(_MockedField_styles__WEBPACK_IMPORTED_MODULE_5__[/* useMockedFieldStyles */ "a"])();
    const { hidden, placeholder, trailingIconName, multiline, ribbonIconNames } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => getMockedFieldAppearance(question, strings), [question, strings]);
    if (hidden)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, multiline && styles.multiline) },
        ribbonIconNames && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.ribbon }, ribbonIconNames.map(iconName => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Icon */ "a"], { className: styles.icon, key: iconName, iconName: iconName }))))),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.input },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, placeholder),
            trailingIconName && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Icon */ "a"], { className: styles.icon, iconName: trailingIconName }))));
}
const hiddenDisplayTypes = [_types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].MultipleChoice, _types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].SingleChoice];
const multilineDisplayTypes = [_types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].MultilineText, _types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].RichText];
const displayTypeTrailingIconNames = {
    [_types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].Date]: 'Calendar',
    [_types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].Dropdown]: 'ChevronDown',
};
const richTextFieldRibbonIconNames = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'More'];
function getMockedFieldAppearance(question, strings) {
    const displayType = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[/* getDisplayType */ "f"])(question);
    if (hiddenDisplayTypes.includes(displayType))
        return { hidden: true };
    return Object.assign({ placeholder: strings.questionMockedFieldDefaultPlaceholder(displayType), trailingIconName: displayTypeTrailingIconNames[displayType], multiline: multilineDisplayTypes.includes(displayType) }, (displayType === _types__WEBPACK_IMPORTED_MODULE_3__[/* QuestionDisplayType */ "f"].RichText && { ribbonIconNames: richTextFieldRibbonIconNames }));
}


/***/ }),

/***/ "nM/K":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/sanitizers.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: identitySanitizer */
/*! exports used: identitySanitizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identitySanitizer; });
const identitySanitizer = html => html;


/***/ }),

/***/ "nPWh":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextField/RichTextField.styles.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: useRichTextFieldStyles */
/*! exports used: useRichTextFieldStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRichTextFieldStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const useRichTextFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    editorContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : 'transparent',
        overflow: 'hidden',
    },
    focusable: {
        borderBottomWidth: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? undefined : '2px',
        '&:focus-within': {
            borderBottomWidth: '2px',
            borderBottomColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.themePrimary,
        },
    },
    error: {
        borderColor: theme.palette.redDark,
    },
    description: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
        marginBottom: '8px',
    },
    editor: {
        flexGrow: 1,
        boxSizing: 'border-box',
        overflow: 'auto',
        overflowWrap: 'break-word',
        padding: '6px 12px',
        cursor: 'text',
        display: 'flex',
        flexDirection: 'column',
        '.tiptap': {
            // Layout and style the rich text field input area
            flexGrow: 1,
            boxShadow: 'none',
            outline: 'none',
            // Style the rich text field content
            color: theme.palette.black,
            a: {
                color: theme.palette.themePrimary,
            },
            'p, h1, h2, h3, h4, h5, h6, pre, blockquote': {
                marginBlock: 0,
                padding: 0,
            },
            '[data-type=mention]': {
                color: theme.palette.accent,
            },
            table: {
                width: '100%',
                tableLayout: 'fixed',
                borderCollapse: 'collapse',
                td: {
                    border: `1px solid ${theme.palette.neutralSecondary}`,
                    // Mitigate nested tables overflowing the parent cell
                    overflow: 'auto',
                },
                th: {
                    textAlign: 'inherit',
                    backgroundColor: theme.palette.neutralLighter,
                    border: `1px solid ${theme.palette.neutralSecondary}`,
                },
                '.selectedCell': {
                    position: 'relative',
                    ':after': {
                        opacity: 0.2,
                        backgroundColor: theme.palette.neutralSecondary,
                        content: '""',
                        inset: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                    },
                },
            },
            // Style the rich text field placeholder
            // An empty editor may contain several empty paragraphs or tables, so we need to ensure it is the only child
            'p.is-editor-empty:first-child:last-child': {
                position: 'relative',
                '::before': {
                    content: 'attr(data-placeholder)',
                    color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                },
            },
        },
        '.tiptap[data-prefix]': {
            '::before': {
                content: 'attr(data-prefix) " "',
                color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
            },
            '>div:first-child, >p:first-child': {
                display: 'inline',
            },
        },
    },
    errorMessage: {
        color: theme.palette.redDark,
        padding: '4px 12px',
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size12,
    },
}));


/***/ }),

/***/ "nntu":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/extensions/file/view.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: FileNodeView */
/*! exports used: FileNodeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileNodeView; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/react */ "Vb8B");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "acy+");
/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions */ "2JDv");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "i5ni");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "D0sl");
/* harmony import */ var _view_fallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view.fallback */ "Zo+t");
/* harmony import */ var _view_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view.image */ "PPPs");










const FileNodeView = ({ editor, node, selected, extension }) => {
    const strings = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getStringsByExtension */ "b"])(extension), [extension]);
    const compact = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getCompactByExtension */ "a"])(extension), [extension]);
    // Prepare variables for the node rendering
    const name = node.textContent;
    const { target, rel, mime, key } = node.attrs;
    const isImage = Boolean(mime && Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_2__[/* isImageMime */ "m"])(mime));
    // Prepare functions for node operations
    const updateAttributes = Object(_utils__WEBPACK_IMPORTED_MODULE_7__[/* useUpdateAttributes */ "d"])({ editor, key });
    const deleteNode = Object(_utils__WEBPACK_IMPORTED_MODULE_7__[/* useDeleteNode */ "c"])({ editor, key });
    // Derive the session from the extension storage
    const sessions = extension.storage;
    const [session, setSession] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(() => { var _a; return (_a = sessions.get(key)) !== null && _a !== void 0 ? _a : _sessions__WEBPACK_IMPORTED_MODULE_5__[/* defaultFileSession */ "b"]; });
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => sessions.subscribe(key, session => {
        setSession(session);
        // Workaround for "flushSync was called from inside a lifecycle method. React cannot flush when React is
        // already rendering. Consider moving this call to a scheduler task or micro task."
        // See https://github.com/ueberdosis/tiptap/issues/3764
        queueMicrotask(() => { var _a; return updateAttributes({ href: (_a = session.url) !== null && _a !== void 0 ? _a : null, error: session.error ? true : null }, true); });
    }), [key, sessions, updateAttributes]);
    // Ensure the session is valid
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => {
        if (Object(_sessions__WEBPACK_IMPORTED_MODULE_5__[/* isValidFileSession */ "c"])(session))
            return;
        // Workaround for "flushSync was called from inside a lifecycle method. React cannot flush when React is
        // already rendering. Consider moving this call to a scheduler task or micro task."
        // See https://github.com/ueberdosis/tiptap/issues/3764
        queueMicrotask(() => deleteNode(true));
    }, [deleteNode, session]);
    const remove = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => (editor.isEditable ? () => deleteNode() : undefined), [deleteNode, editor.isEditable]);
    const styles = Object(_styles__WEBPACK_IMPORTED_MODULE_6__[/* useFileNodeViewStyles */ "c"])();
    const content = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tiptap_react__WEBPACK_IMPORTED_MODULE_1__[/* NodeViewContent */ "b"], { as: 'span' });
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tiptap_react__WEBPACK_IMPORTED_MODULE_1__[/* NodeViewWrapper */ "c"], { as: 'span', className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, selected && 'selected', session.error && styles.error, isImage && styles.image), "data-drag-handle": true, contentEditable: false }, isImage ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_view_image__WEBPACK_IMPORTED_MODULE_9__[/* ImageView */ "a"], { name: name, blob: session.blob, url: session.url, thumbnail: session.thumbnail, imageSize: session.imageSize, loading: session.loading, error: session.error, onRetry: session.retry, onRemove: remove, compact: compact, strings: strings }, content)) : (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_view_fallback__WEBPACK_IMPORTED_MODULE_8__[/* FallbackView */ "a"], { href: session.url, target: target || undefined, rel: rel || undefined, thumbnail: session.thumbnail, loading: session.loading }, content))));
};


/***/ }),

/***/ "npM9":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/form.ts ***!
  \****************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "oMBF":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/PreviewingDecorator/PreviewingDecorator.tsx ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: PreviewingDecorator */
/*! exports used: PreviewingDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewingDecorator; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "YJ2P");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreviewingDecorator_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewingDecorator.styles */ "EhF7");



function PreviewingDecorator({ children, }) {
    const styles = Object(_PreviewingDecorator_styles__WEBPACK_IMPORTED_MODULE_2__[/* usePreviewingDecoratorStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FocusZone */ "a"], { className: styles.root, disabled: true },
        children,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.mask })));
}


/***/ }),

/***/ "ojxn":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/descriptors/CheckboxChoiceDescriptor.tsx ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: CheckboxChoiceDescriptor */
/*! exports used: CheckboxChoiceDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxChoiceDescriptor; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "YJ2P");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "kqob");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _BaseDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseDescriptor */ "jrh6");





const containerClassName = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    paddingInline: '12px',
});
const defaultOptions = {
    otherPlaceholder: 'Other',
};
const makeFieldComponent = ({ otherPlaceholder }) => ({ entry, onEntryChange, delegatedProps, showPlaceholder }) => {
    const { question, answer } = entry;
    const { choices, shuffle, allowOther } = question;
    const shuffledChoices = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useShuffled */ "x"])({ array: choices, enabled: shuffle && !delegatedProps.readOnly });
    const onChange = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useChoiceChange */ "p"])(entry, onEntryChange);
    const { chosen, otherKey, otherValue, otherSelected, otherFieldRef } = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useChosenAndOther */ "s"])(choices, answer.content);
    const keys = allowOther ? [...shuffledChoices, otherKey] : shuffledChoices;
    const checkboxStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useCheckboxStyles */ "o"])();
    const otherFieldStyles = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[/* useOtherFieldStyles */ "v"])();
    const onRenderOtherField = checkboxProps => {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* TextField */ "a"], { componentRef: otherFieldRef, value: (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.label) !== null && _a !== void 0 ? _a : '', onChange: onChange && ((_, newValue) => onChange(chosen, newValue)), placeholder: showPlaceholder ? otherPlaceholder : undefined, readOnly: delegatedProps.readOnly, invalid: otherSelected && delegatedProps.invalid, className: 'ms-Checkbox-text', styles: otherFieldStyles }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* FocusZone */ "a"], Object.assign({}, delegatedProps, { className: containerClassName, role: 'listbox' }), keys.map(key => (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Checkbox */ "a"], { key: key, label: key === otherKey ? otherValue : key, checked: key === otherKey ? otherSelected : chosen.includes(key), onChange: onChange &&
            ((_, checked) => {
                var _a;
                if (key === otherKey) {
                    if (checked)
                        (_a = otherFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                    onChange(chosen, checked ? '' : undefined);
                }
                else {
                    // Add or remove the choice from the answer, depending on the checked state.
                    const newChosen = checked ? [...chosen, key] : chosen.filter(c => c !== key);
                    onChange(newChosen, otherValue);
                }
            }), onRenderLabel: key === otherKey ? onRenderOtherField : undefined, inputProps: { role: 'option' }, styles: checkboxStyles })))));
};
/**
 * The descriptor that renders a group of checkboxes for choice entries with checkbox appearance.
 */
class CheckboxChoiceDescriptor extends _BaseDescriptor__WEBPACK_IMPORTED_MODULE_7__[/* BaseDescriptor */ "a"] {
    constructor(options) {
        super();
        this.FieldComponent = makeFieldComponent(Object.assign(Object.assign({}, defaultOptions), options));
    }
    /**
     * Tests whether the entry is a choice entry with checkbox appearance, and the form is not in viewing mode.
     *
     * @param entry The entry to test.
     * @param context The form context.
     * @returns Passes the test or not.
     */
    test(entry, context) {
        return (entry.question.type === _types__WEBPACK_IMPORTED_MODULE_5__[/* FormQuestionType */ "d"].Choice &&
            entry.question.appearance === _types__WEBPACK_IMPORTED_MODULE_5__[/* ChoiceAppearance */ "b"].Checkbox &&
            context.mode !== _types__WEBPACK_IMPORTED_MODULE_5__[/* FormMode */ "c"].Viewing);
    }
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

/***/ "p/sv":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FormMode, FormQuestionType, TextNumberRestrictionType, ChoiceAppearance, QuestionAction, QuestionDisplayType, ChoiceAction */
/*! exports used: ChoiceAction, ChoiceAppearance, FormMode, FormQuestionType, QuestionAction, QuestionDisplayType, TextNumberRestrictionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "2Pa2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries */ "R2H0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _entries__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _entries__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _entries__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature */ "rD5B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _feature__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _feature__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _feature__WEBPACK_IMPORTED_MODULE_2__["c"]; });






/***/ }),

/***/ "pJQW":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.utils.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: getCurrentLink, maxTableSize, menuCalloutClassName, colorMenuCalloutClassName, hasExtensionByName */
/*! exports used: colorMenuCalloutClassName, getCurrentLink, hasExtensionByName, maxTableSize, menuCalloutClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return maxTableSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return menuCalloutClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorMenuCalloutClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasExtensionByName; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");

function getCurrentLink(editor) {
    const url = editor.isActive('link') ? editor.getAttributes('link').href : '';
    const selection = editor.state.selection;
    const displayText = editor.state.doc.textBetween(selection.from, selection.to);
    return { url, displayText };
}
const maxTableSize = { rows: 6, cols: 6 };
const menuCalloutClassName = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    '.ms-Callout-main': {
        padding: 0,
    },
    '.ms-ContextualMenu': {
        minWidth: 0,
        width: 'auto',
    },
});
const colorMenuCalloutClassName = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(menuCalloutClassName, {
    '.ms-ContextualMenu-list': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '8px',
    },
});
function hasExtensionByName(editor, name) {
    return editor.extensionManager.extensions.some(extension => extension.name === name);
}


/***/ }),

/***/ "pi/W":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/styles.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: useRichTextFieldStyles, useTextFieldStyles, useCheckboxStyles, useChoiceGroupStyles, useChoiceGroupOptionStyles, useDropdownStyles, useOtherFieldStyles, useDatePickerStyles, useToggleStyles, fieldClassNames */
/*! exports used: fieldClassNames, useCheckboxStyles, useChoiceGroupOptionStyles, useChoiceGroupStyles, useDatePickerStyles, useDropdownStyles, useOtherFieldStyles, useRichTextFieldStyles, useTextFieldStyles, useToggleStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useRichTextFieldStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useTextFieldStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCheckboxStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useChoiceGroupStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useChoiceGroupOptionStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useDropdownStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useOtherFieldStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useDatePickerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useToggleStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fieldClassNames; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");

const useRichTextFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        '--min-height': '160px',
    },
    compact: {
        '--min-height': '120px',
    },
    minHeightConstrained: {
        minHeight: 'var(--min-height)',
    },
});
const useTextFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    fieldGroup: {
        '.ms-TextField-wrapper &.ms-TextField-fieldGroup': {
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
            ':has(input)': {
                height: '32px',
            },
            ':has([aria-invalid=true])': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.redDark,
            },
            '.is-active &:not(:has([aria-invalid=true]))': {
                borderBottomColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.themePrimary,
            },
        },
    },
    field: {
        '::placeholder': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        },
    },
    wrapper: {
        '.ms-Label': {
            fontSize: `${_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14} !important`,
            color: theme.palette.neutralDark,
            fontWeight: 600,
            padding: 0,
            paddingBottom: '4px',
        },
    },
}));
const useCheckboxStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        '&.ms-Checkbox': {
            padding: 0,
        },
    },
    checkbox: {
        marginInlineEnd: '12px',
        borderColor: theme.palette.neutralDark,
    },
    label: {
        minWidth: 0,
    },
    text: {
        marginInlineStart: 0,
        overflowWrap: 'break-word',
        minWidth: 0,
    },
}));
const useChoiceGroupStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        paddingInline: '12px',
        // By default the input stretches to the full width of the container and accepts clicks.
        // We want to prevent that and solely rely on the label for the click.
        '.ms-ChoiceField-input': {
            width: 0,
            height: 0,
        },
    },
});
const useChoiceGroupOptionStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        margin: 0,
        minHeight: '20px',
    },
    choiceFieldWrapper: {
        minWidth: 0,
    },
    field: {
        '&.ms-ChoiceField-field': {
            display: 'block',
            // Make the radio button centered vertically
            '::before, ::after': {
                top: '50%',
                transform: 'translateY(-50%)',
            },
            '::before': {
                width: '16px',
                height: '16px',
                backgroundColor: 'transparent',
            },
            '::after': {
                insetInlineStart: '3px',
                width: '10px',
                height: '10px',
            },
            ':hover': Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) && {
                '::before': {
                    borderColor: theme.palette.accent,
                },
                '::after': {
                    border: 'none',
                    backgroundColor: theme.palette.accent,
                },
            },
        },
        '.ms-ChoiceFieldLabel': {
            display: 'block',
            paddingInlineStart: '28px',
            overflowWrap: 'break-word',
        },
    },
}));
const useDropdownStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    dropdown: {
        backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
        '&.ms-Dropdown[aria-invalid=true]': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.palette.redDark,
        },
        '&.ms-Dropdown:not([aria-invalid=true])': {
            ':focus, .is-open': {
                borderBottomColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.themePrimary,
            },
        },
    },
    title: {
        '&.ms-Dropdown-titleIsPlaceHolder': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        },
    },
    label: {
        '&.ms-Label': {
            fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* FontSizes */ "a"].size14,
            color: theme.palette.neutralDark,
            fontWeight: 600,
            padding: 0,
            paddingBottom: '4px',
        },
    },
}));
const useOtherFieldStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    wrapper: {
        marginInlineStart: '-6px',
    },
    fieldGroup: {
        '.ms-TextField-wrapper &.ms-TextField-fieldGroup': {
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
            ':has([aria-invalid=true])': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.redDark,
            },
            '.is-active &:not(:has([aria-invalid=true]))': {
                borderBottomColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.themePrimary,
            },
        },
    },
    field: {
        height: '28px',
        paddingInline: '6px',
        '::placeholder': {
            color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
        },
    },
}));
const useDatePickerStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    statusMessage: {
        display: 'none',
    },
    textField: {
        '&.ms-TextField .ms-TextField-wrapper .ms-TextField-fieldGroup': {
            backgroundColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.white : theme.palette.neutralLighter,
            ':has([aria-invalid=true])': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.redDark,
            },
            ':not(:has([aria-invalid=true]))': {
                ':focus, .is-open': {
                    borderBottomColor: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.accent : theme.palette.themePrimary,
                },
            },
            '.ms-TextField-field::placeholder, .ms-TextField-field span': {
                color: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary,
            },
        },
    },
}));
const useToggleStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])({
    root: {
        margin: 0,
        gap: '12px',
    },
    label: {
        padding: 0,
        margin: 0,
    },
});
const fieldClassNames = '.ms-TextField-fieldGroup, .ms-Dropdown, .ms-RichTextField';


/***/ }),

/***/ "qGyp":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/constants.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: defaultFormConstants */
/*! exports used: defaultFormConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultFormConstants; });
const defaultFormConstants = {
    maxEntries: Infinity,
    maxTitleLength: Infinity,
    maxSubtitleLength: Infinity,
    initialChoices: 2,
    minChoices: 1,
    maxChoices: Infinity,
    maxChoiceLength: Infinity,
};


/***/ }),

/***/ "qUyC":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertTable/InsertTable.styles.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: useInsertTableStyles */
/*! exports used: useInsertTableStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInsertTableStyles; });
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "n4Dn");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "ZOo+");
/* harmony import */ var _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addressbook/components-fluentui-teams-theme */ "tPyQ");

const useInsertTableStyles = Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_0__[/* makeStyles */ "a"])(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
    },
    header: {
        fontSize: _addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* FontSizes */ "a"].size14,
        fontWeight: 600,
    },
    table: {
        display: 'grid',
        gap: '2px',
    },
    cell: {
        width: '16px',
        height: '16px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: `1px solid ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_2__[/* isContrastTheme */ "f"])(theme.name) ? theme.palette.black : theme.palette.neutralPrimary}`,
    },
    selecting: {
        backgroundColor: theme.palette.themePrimary,
    },
}));


/***/ }),

/***/ "qkWA":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/abstractions/Form.tsx ***!
  \************************************************************************************************************************/
/*! exports provided: Form */
/*! exports used: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFragment */ "CKus");


/**
 * A form is responsible for rendering the form entries with the given context and feature.
 * It uses the comparator to determine the order of the entries and the key extractor to extract a unique key from each
 * entry, and find the appropriate descriptor to render the entries.
 */
function Form(props) {
    const { context, feature } = props;
    const { entries } = context;
    const { comparator, keyExtractor, trailingRender } = feature;
    const sortedIndices = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => Array.from(entries.keys()).sort((i, j) => comparator(entries[i], entries[j])), [comparator, entries]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        sortedIndices.map(index => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFragment__WEBPACK_IMPORTED_MODULE_1__[/* FormFragment */ "a"], Object.assign({ key: keyExtractor(entries[index]) }, props, { index: index })))),
        trailingRender(props)));
}


/***/ }),

/***/ "rD5B":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/feature.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: QuestionAction, QuestionDisplayType, ChoiceAction */
/*! exports used: ChoiceAction, QuestionAction, QuestionDisplayType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoiceAction; });
var QuestionAction;
(function (QuestionAction) {
    QuestionAction[QuestionAction["Add"] = 0] = "Add";
    QuestionAction[QuestionAction["Copy"] = 1] = "Copy";
    QuestionAction[QuestionAction["Delete"] = 2] = "Delete";
    QuestionAction[QuestionAction["MoveUp"] = 3] = "MoveUp";
    QuestionAction[QuestionAction["MoveDown"] = 4] = "MoveDown";
})(QuestionAction || (QuestionAction = {}));
var QuestionDisplayType;
(function (QuestionDisplayType) {
    QuestionDisplayType[QuestionDisplayType["ShortText"] = 0] = "ShortText";
    QuestionDisplayType[QuestionDisplayType["MultilineText"] = 1] = "MultilineText";
    QuestionDisplayType[QuestionDisplayType["RichText"] = 2] = "RichText";
    QuestionDisplayType[QuestionDisplayType["Number"] = 3] = "Number";
    QuestionDisplayType[QuestionDisplayType["MultipleChoice"] = 4] = "MultipleChoice";
    QuestionDisplayType[QuestionDisplayType["SingleChoice"] = 5] = "SingleChoice";
    QuestionDisplayType[QuestionDisplayType["Dropdown"] = 6] = "Dropdown";
    QuestionDisplayType[QuestionDisplayType["Date"] = 7] = "Date";
})(QuestionDisplayType || (QuestionDisplayType = {}));
var ChoiceAction;
(function (ChoiceAction) {
    ChoiceAction[ChoiceAction["Add"] = 0] = "Add";
    ChoiceAction[ChoiceAction["AddOther"] = 1] = "AddOther";
    ChoiceAction[ChoiceAction["Delete"] = 2] = "Delete";
    ChoiceAction[ChoiceAction["MoveUp"] = 3] = "MoveUp";
    ChoiceAction[ChoiceAction["MoveDown"] = 4] = "MoveDown";
})(ChoiceAction || (ChoiceAction = {}));


/***/ }),

/***/ "rKmR":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/DecimalTextField/DecimalTextField.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DecimalTextField */
/*! exports used: DecimalTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalTextField; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "XgkO");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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
 * A text field that only accepts decimal numbers.
 */
const DecimalTextField = (_a) => {
    var { value, onChange, invalid } = _a, props = __rest(_a, ["value", "onChange", "invalid"]);
    const [pendingValue, setPendingValue] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(() => String(value));
    const pendingValueRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(pendingValue);
    pendingValueRef.current = pendingValue;
    const onChangeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(onChange);
    onChangeRef.current = onChange;
    const committedValueRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(value);
    const commit = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((pendingValue) => {
        const parsedValue = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* parseFloatStrictly */ "r"])(pendingValue);
        if (isNaN(parsedValue))
            return;
        onChangeRef.current(parsedValue);
        committedValueRef.current = parsedValue;
    }, []);
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
        if (value === committedValueRef.current)
            return;
        setPendingValue(String(value));
    }, [value]);
    const synchronize = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((value) => {
        const stringValue = String(value);
        if (pendingValueRef.current === stringValue)
            return;
        setPendingValue(String(value));
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* TextField */ "a"], Object.assign({}, props, { value: pendingValue, onChange: (_, newValue = '') => {
            setPendingValue(newValue);
            commit(newValue);
        }, onBlur: () => synchronize(value), invalid: invalid || isNaN(Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* parseFloatStrictly */ "r"])(pendingValue)), inputMode: 'decimal' })));
};


/***/ }),

/***/ "t/oA":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextField/RichTextField.types.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: RibbonPosition */
/*! exports used: RibbonPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonPosition; });
var RibbonPosition;
(function (RibbonPosition) {
    RibbonPosition[RibbonPosition["None"] = 0] = "None";
    RibbonPosition[RibbonPosition["Top"] = 1] = "Top";
    RibbonPosition[RibbonPosition["Bottom"] = 2] = "Bottom";
})(RibbonPosition || (RibbonPosition = {}));


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

/***/ "toHN":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/types.ts ***!
  \*************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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

/***/ "vAwM":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fields/src/CollapsibleTextField/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CollapsibleTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _CollapsibleTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsibleTextField */ "TO4X");
/* unused harmony reexport * */



/***/ }),

/***/ "vSPf":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/validators/NumberValidator.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: NumberValidator */
/*! exports used: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberValidator; });
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "CYKX");



const defaultErrorMessageWhenNaN = 'Please enter a number';
const defaultErrorMessageByRestriction = restriction => {
    switch (restriction.type) {
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].GreaterThan:
            return `Please enter a number greater than ${restriction.min}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo:
            return `Please enter a number greater than or equal to ${restriction.min}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].LessThan:
            return `Please enter a number less than ${restriction.max}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo:
            return `Please enter a number less than or equal to ${restriction.max}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].EqualTo:
            return `Please enter a number equal to ${restriction.value}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].NotEqualTo:
            return `Please enter a number not equal to ${restriction.value}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].Between:
            return `Please enter a number between ${restriction.min} and ${restriction.max}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].NotBetween:
            return `Please enter a number not between ${restriction.min} and ${restriction.max}`;
    }
};
function follow(content, restriction) {
    switch (restriction.type) {
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].GreaterThan:
            return content > restriction.min;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].GreaterThanOrEqualTo:
            return content >= restriction.min;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].LessThan:
            return content < restriction.max;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].LessThanOrEqualTo:
            return content <= restriction.max;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].EqualTo:
            return content === restriction.value;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].NotEqualTo:
            return content !== restriction.value;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].Between:
            return content >= restriction.min && content <= restriction.max;
        case _types__WEBPACK_IMPORTED_MODULE_1__[/* TextNumberRestrictionType */ "g"].NotBetween:
            return content < restriction.min || content > restriction.max;
    }
}
/**
 * A validator that checks if the answer is a number.
 * If the question is not a number question, this validator will always pass.
 * Otherwise, this validator will fail if the answer is not a number.
 */
class NumberValidator {
    /**
     * Creates a number validator.
     *
     * @param options.errorMessageWhenNaN The error message if the answer content is not a number.
     * @param options.errorMessageByRestriction The error message if the answer content violates a restriction.
     * @returns A number validator.
     */
    constructor({ errorMessageWhenNaN = defaultErrorMessageWhenNaN, errorMessageByRestriction = defaultErrorMessageByRestriction, } = {}) {
        this.errorMessageWhenNaN = errorMessageWhenNaN;
        this.errorMessageByRestriction = errorMessageByRestriction;
    }
    validate({ question, answer }) {
        // Filter out non-number questions, or no answer yet.
        if (question.type !== _types__WEBPACK_IMPORTED_MODULE_1__[/* FormQuestionType */ "d"].Text || !question.number || !answer.content) {
            return Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* createValidationSuccess */ "b"])();
        }
        const content = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* parseFloatStrictly */ "r"])(answer.content);
        // Check for NaN.
        if (isNaN(content)) {
            return this.createValidationFailure(this.errorMessageWhenNaN);
        }
        // Check for restrictions.
        const restriction = question.restriction;
        if (restriction && !follow(content, restriction)) {
            return this.createValidationFailure(this.errorMessageByRestriction(restriction));
        }
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* createValidationSuccess */ "b"])();
    }
    createValidationFailure(errorMessage) {
        return { valid: false, errorMessage };
    }
}


/***/ }),

/***/ "vfor":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningTrailingActions/index.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: DesigningTrailingActions */
/*! exports used: DesigningTrailingActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DesigningTrailingActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesigningTrailingActions */ "wNRW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DesigningTrailingActions__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "vy97":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertTable/InsertTable.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: InsertTable */
/*! exports used: InsertTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertTable; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "YJ2P");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InsertTable_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsertTable.styles */ "qUyC");
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



const InsertTable = (_a) => {
    var { maxTableSize, onConfirm, strings, className } = _a, props = __rest(_a, ["maxTableSize", "onConfirm", "strings", "className"]);
    const [tableSize, setTableSize] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState();
    const title = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => strings.insertTableTitle(tableSize), [strings, tableSize]);
    const styles = Object(_InsertTable_styles__WEBPACK_IMPORTED_MODULE_3__[/* useInsertTableStyles */ "a"])();
    const gridStyle = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => ({ gridTemplate: `repeat(${maxTableSize.rows}, 1fr) / repeat(${maxTableSize.cols}, 1fr)` }), [maxTableSize]);
    const gridCells = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => Array.from({ length: maxTableSize.rows }, (_, row) => Array.from({ length: maxTableSize.cols }, (_, col) => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", { key: `${row}-${col}`, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.cell, tableSize && row < tableSize.rows && col < tableSize.cols && styles.selecting), onClick: onConfirm && (() => onConfirm(getTableSize(row, col))), onFocus: () => setTableSize(getTableSize(row, col)), onPointerOver: event => event.currentTarget.focus() })))), [maxTableSize, onConfirm, styles, tableSize]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.header, role: 'alert', "aria-live": 'polite' }, title),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* FocusZone */ "a"], { className: styles.table, style: gridStyle, role: 'grid', shouldFocusOnMount: true }, gridCells)));
};
function getTableSize(row, col) {
    return { rows: row + 1, cols: col + 1 };
}


/***/ }),

/***/ "w9VV":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/ColorMenuItem/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ColorMenuItem */
/*! exports used: ColorMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ColorMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorMenuItem */ "h1fr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ColorMenuItem__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ "wCOc":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/orderGenerators.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: halfOrderGeneratorFactory, halfOrderGenerator */
/*! exports used: halfOrderGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export halfOrderGeneratorFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfOrderGenerator; });
/**
 * Gets a new half order generator, who generates between two orders that is not equal to either order.
 * The new order is the average of the two orders.
 * If the previous order is undefined or smaller than the minimum order, the minimum order is used.
 * If the next order is undefined or larger than the maximum order, the maximum order is used.
 *
 * @param options.minOrder The minimum order.
 * @param options.maxOrder The maximum order.
 * @returns A new order.
 * @example halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 100 })(20, 80) // 50
 * @example halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 100 })(-100, 200) // 50
 * @example halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 100 })(50, undefined) // 75
 * @example halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 100 })(undefined, 50) // 25
 * @example halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 100 })(undefined, undefined) // 50
 */
function halfOrderGeneratorFactory({ minOrder, maxOrder }) {
    if (minOrder >= maxOrder)
        throw new Error('minOrder must be smaller than maxOrder');
    return (prevOrder, nextOrder) => {
        const safePrevOrder = Math.max(prevOrder !== null && prevOrder !== void 0 ? prevOrder : Number.MIN_VALUE, minOrder);
        const safeNextOrder = Math.min(nextOrder !== null && nextOrder !== void 0 ? nextOrder : Number.MAX_VALUE, maxOrder);
        return (safePrevOrder + safeNextOrder) / 2;
    };
}
const halfOrderGenerator = halfOrderGeneratorFactory({ minOrder: 0, maxOrder: 1000000000 });


/***/ }),

/***/ "wNRW":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/components/DesigningTrailingActions/DesigningTrailingActions.tsx ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: DesigningTrailingActions */
/*! exports used: DesigningTrailingActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesigningTrailingActions; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "xRnI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "p/sv");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "CYKX");
/* harmony import */ var _DesigningTrailingActions_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesigningTrailingActions.styles */ "9RBR");





function DesigningTrailingActions({ context, onContextChange, feature, }) {
    const { entries } = context;
    const { comparator, idGenerator, orderGenerator, constants, strings } = feature;
    const reachMaxEntries = entries.length >= constants.maxEntries;
    const addEntry = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
        const trailingEntry = [...entries].sort(comparator).pop();
        const trailingSlotOrder = orderGenerator(trailingEntry === null || trailingEntry === void 0 ? void 0 : trailingEntry.question.order, undefined);
        const newEntries = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* addNewFormEntry */ "a"])(entries, { idGenerator, order: trailingSlotOrder, strings });
        onContextChange === null || onContextChange === void 0 ? void 0 : onContextChange(Object.assign(Object.assign({}, context), { entries: newEntries }));
    }, [comparator, context, entries, idGenerator, onContextChange, orderGenerator, strings]);
    const styles = Object(_DesigningTrailingActions_styles__WEBPACK_IMPORTED_MODULE_4__[/* useDesigningTrailingActionsStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* PrimaryButton */ "a"], { iconProps: { iconName: 'Add' }, text: strings.questionAction(_types__WEBPACK_IMPORTED_MODULE_2__[/* QuestionAction */ "e"].Add), onClick: addEntry, disabled: reachMaxEntries })));
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

/***/ "xg6H":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/feature/trailingRenders.tsx ***!
  \**********************************************************************************************************************************************/
/*! exports provided: defaultTrailingRender */
/*! exports used: defaultTrailingRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTrailingRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "l/RN");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "p/sv");



const defaultTrailingRender = props => {
    switch (props.context.mode) {
        case _types__WEBPACK_IMPORTED_MODULE_2__[/* FormMode */ "c"].Designing:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* DesigningTrailingActions */ "a"], Object.assign({}, props));
        default:
            return null;
    }
};


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


/***/ }),

/***/ "ySlD":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/choice.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ChoiceAppearance */
/*! exports used: ChoiceAppearance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoiceAppearance; });
var ChoiceAppearance;
(function (ChoiceAppearance) {
    ChoiceAppearance[ChoiceAppearance["Radio"] = 0] = "Radio";
    ChoiceAppearance[ChoiceAppearance["Dropdown"] = 1] = "Dropdown";
    ChoiceAppearance[ChoiceAppearance["Checkbox"] = 2] = "Checkbox";
})(ChoiceAppearance || (ChoiceAppearance = {}));


/***/ }),

/***/ "ynDw":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.types.ts ***!
  \***************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),

/***/ "zoAe":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/InsertLink/InsertLink.menu.tsx ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: InsertLinkMenu */
/*! exports used: InsertLinkMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertLinkMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InsertLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsertLink */ "KGCU");
/* harmony import */ var _InsertLink_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsertLink.styles */ "JPPb");



const InsertLinkMenu = ({ initialLink, onConfirm, onCancel, normalizeUrl, strings, }) => {
    const styles = Object(_InsertLink_styles__WEBPACK_IMPORTED_MODULE_2__[/* useInsertLinkMenuStyles */ "b"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.header, role: 'heading' }, strings.insertLinkTitle),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InsertLink__WEBPACK_IMPORTED_MODULE_1__[/* InsertLink */ "a"], { initialLink: initialLink, onConfirm: onConfirm, onCancel: onCancel, normalizeUrl: normalizeUrl, strings: strings })));
};


/***/ })

}]);
//# sourceMappingURL=package~main.js.map