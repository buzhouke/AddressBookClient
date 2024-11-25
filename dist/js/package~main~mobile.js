(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package~main~mobile"],{

/***/ "+INc":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: AppHeader, CollapsingArea, CommonCard, CommonCardShimmer, CommonIconSize, CommonIcon, CommonModal, useModalStyles, useContentStyles, useShareSubmissionCardConsentStyles, ModalContent, CommonPanel, CommonSlideDots, ConfirmationDialog, ContentCopyRequestModal, ContentCopyResponseModal, EmptyState, MobileSheet, PillPivot, SpinnerSize, Spinner, ellipsisStyles, TaskModule, useTaskModuleStyles, TaskModuleV2, useTaskModuleV2Styles, useTaskModuleContentCustomizedStyles, useTaskModuleCategorizedTemplateStoreStyles */
/*! exports used: CommonIcon, EmptyState, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader */ "F880");
/* harmony import */ var _CollapsingArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapsingArea */ "Z70t");
/* harmony import */ var _CommonCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonCard */ "O8+z");
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonIcon */ "Lwxb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CommonIcon__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _CommonModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonModal */ "8odi");
/* harmony import */ var _CommonPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonPanel */ "gUb0");
/* harmony import */ var _CommonSlideDots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonSlideDots */ "wbAm");
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfirmationDialog */ "PxWi");
/* harmony import */ var _ContentCopyRequestModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentCopyRequestModal */ "C7FI");
/* harmony import */ var _ContentCopyResponseModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentCopyResponseModal */ "Ws0a");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmptyState */ "dgNf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _EmptyState__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _MobileSheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MobileSheet */ "dnQF");
/* harmony import */ var _PillPivot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PillPivot */ "TQ8g");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Spinner */ "PVww");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _styles_ellipsisStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/ellipsisStyles */ "btUH");
/* harmony import */ var _TaskModule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TaskModule */ "Oi44");
/* harmony import */ var _TaskModuleV2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TaskModuleV2 */ "IG8A");



















/***/ }),

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
/*! exports used: CheckboxChoiceDescriptor, ChoiceAction, ChoiceAppearance, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, FormQuestionType, LengthValidator, NumberValidator, QuestionAction, QuestionDisplayType, RadioChoiceDescriptor, RequiredValidator, RichTextDescriptor, RichTextValidator, TextDescriptor, TextNumberRestrictionType, defaultFormFeature, validateEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "l/RN");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "MXQI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _feature__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "p/sv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "CYKX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _utilities__WEBPACK_IMPORTED_MODULE_3__["A"]; });







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
/*! exports used: isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDefined; });
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
        .map((_item, index) => (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.selectOption, slideDotsStyles === null || slideDotsStyles === void 0 ? void 0 : slideDotsStyles.selectOption, isClickable && 'is-clickable', index === activeIndex ? 'is-active' : ''), key: index, onClick: isClickable ? () => onClick === null || onClick === void 0 ? void 0 : onClick(index) : undefined, "data-testid": 'option' })))));
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

/***/ "1hmm":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: copyToClipboard, copyImageToClipboard, copyLinkToClipboard, dataTransferIncludesFiles, extractFilesFromDataTransfer, encodeDataUrl, decodeDataUrl, normalizeDate, toZonedISOString, parseDate, parseLocalDateStrictly, parseLocalDate, formatLocalDate, parseLocalDateRange, eraseTime, compareDatesWithoutTime, selectFile, digestBlob, encodeHexString, createFileByBlob, getReadableSizeString, normalizeFileName, splitFileName, joinFileName, uuid, measureImage, parseJson, parseJsonAsStringSet, normalizeStringSet, getMimeByDataUrl, getExtensionByMime, isImageMime, isDefined, extractContinuousRange, parseFloatStrictly, parseIntStrictly, silently, delay, Semaphore, signalAsPromise, allSignalsAsSignal, raceSignalsAsSignal, isAbsoluteUrl, normalizeUrl, openUrl */
/*! exports used: Semaphore, copyImageToClipboard, createFileByBlob, dataTransferIncludesFiles, decodeDataUrl, delay, encodeDataUrl, extractFilesFromDataTransfer, getExtensionByMime, getMimeByDataUrl, isAbsoluteUrl, isDefined, isImageMime, joinFileName, measureImage, normalizeFileName, normalizeUrl, parseFloatStrictly, selectFile, silently, splitFileName, uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _clipboards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboards */ "RwJE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _clipboards__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _data_transfers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-transfers */ "XhlK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _data_transfers__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _data_transfers__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _data_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-urls */ "iMwy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _data_urls__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _data_urls__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates */ "42K9");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files */ "h3zH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _files__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _files__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _files__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _files__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _files__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ids */ "zmRz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _ids__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images */ "rLoY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _images__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _jsons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsons */ "8/+v");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mimes */ "sSa5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _mimes__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _mimes__WEBPACK_IMPORTED_MODULE_8__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _mimes__WEBPACK_IMPORTED_MODULE_8__["c"]; });

/* harmony import */ var _miscs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscs */ "/mfX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _miscs__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./numbers */ "y8+Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _numbers__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _promises__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promises */ "Zb4v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _promises__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _promises__WEBPACK_IMPORTED_MODULE_11__["b"]; });

/* harmony import */ var _semaphores__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./semaphores */ "ZqO1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _semaphores__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signals */ "/R1q");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./urls */ "Y/b3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _urls__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _urls__WEBPACK_IMPORTED_MODULE_14__["b"]; });


















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
            return buttonProps.primary ? (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* PrimaryButton */ "a"], Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(contentStyles.button, contentStyles.primaryButton) }, buttonProps, { key: index }))) : (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* DefaultButton */ "a"], Object.assign({ className: contentStyles.button }, buttonProps, { key: index })));
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
        backgroundColor: theme.palette.neutralLight,
        padding: '0 1.25rem',
        height: '3.75rem',
    },
    text: [
        theme.fonts.large,
        {
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
            marginRight: '5px',
        },
    ],
}));


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

/***/ "547/":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleList/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PeopleList */
/*! exports used: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleList */ "JIAz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleList__WEBPACK_IMPORTED_MODULE_0__["a"]; });




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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyles */ "G"])(cardStyles.root, expanded && cardStyles.expandedRoot, isMobile && cardStyles.mobileRoot, isMobile && isLowHeight && cardStyles.mobileRootWithoutReminder), verticalAlign: 'space-between' },
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

/***/ "78Zn":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-fluentui-icons/src/Icons.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: iconStyle, customIconStyle, emojiStyle, icons, initFluentuiIcons, IconName */
/*! exports used: IconName, initFluentuiIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iconStyle */
/* unused harmony export customIconStyle */
/* unused harmony export emojiStyle */
/* unused harmony export icons */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initFluentuiIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconName; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "ogYq");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-icons */ "FR/H");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "vngG");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "34Ww");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "1sf2");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "6SJ2");



const iconStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    display: 'block',
    width: '100%',
    height: '100%',
    lineHeight: '100%',
    fill: 'currentColor',
});
const customIconStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    display: 'block',
    width: '100%',
    height: '100%',
    lineHeight: '100%',
});
const emojiStyle = /* #__PURE__ */ Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
    display: 'block',
    width: '100%',
    height: '100%',
    lineHeight: '100%',
});
const icons = /* #__PURE__ */ {
    ContactCard: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ContactCardRegular */ "d"], { className: iconStyle }),
    Mail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* MailRegular */ "c"], { className: iconStyle }),
    Chat: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* ChatRegular */ "d"], { className: iconStyle }),
    Call: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* CallRegular */ "c"], { className: iconStyle }),
    Location: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* LocationRegular */ "b"], { className: iconStyle }),
    Desk: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* DeskRegular */ "e"], { className: iconStyle }),
    Search: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* SearchRegular */ "j"], { className: iconStyle }),
    Cancel: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* DismissRegular */ "f"], { className: iconStyle }),
    ChevronRight: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ChevronRightRegular */ "c"], { className: iconStyle }),
    ChevronLeft: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ChevronLeftRegular */ "b"], { className: iconStyle }),
    Home: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__[/* HomeRegular */ "a"], { className: iconStyle }),
    Calendar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* CalendarLtrRegular */ "b"], { className: iconStyle }),
    // Airplane: <AirplaneRegular className={iconStyle} />,
    ChevronDown: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__[/* ChevronDownRegular */ "a"], { className: iconStyle }),
    Tag: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__[/* TagRegular */ "a"], { className: iconStyle }),
    // Up: <ArrowUpRegular className={iconStyle} />,
    Down: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__[/* ArrowDownRegular */ "a"], { className: iconStyle }),
    Organization: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__[/* OrganizationRegular */ "a"], { className: iconStyle }),
    Video: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__[/* VideoRegular */ "b"], { className: iconStyle }),
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
    Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* registerIcons */ "J"])({ icons });
}
const IconName = /* #__PURE__ */ Object.fromEntries(Object.keys(icons).map((k) => [k, k]));


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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "G"])(collapsingAreaStyles.title, titleClassName) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "G"])(collapsingAreaStyles.button, styles === null || styles === void 0 ? void 0 : styles.button), onClick: toggle, "aria-expanded": !collapsedState, "aria-controls": ariaControlsId },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "G"])(collapsingAreaStyles.icon, styles === null || styles === void 0 ? void 0 : styles.icon), iconName: collapsedState ? collapseIcon : expandIcon }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "G"])(collapsingAreaStyles.text, styles === null || styles === void 0 ? void 0 : styles.text) }, title)),
            farItems),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: ariaControlsId, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* mergeStyles */ "G"])(collapsingAreaStyles.collapsibleRegion, styles === null || styles === void 0 ? void 0 : styles.collapsibleRegion) }, children)));
};


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

/***/ "CS/u":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleSelect/PeopleSelect.types.ts ***!
  \**************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { id: id, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(cardStyles.root, expanded && cardStyles.expandedRoot, isMobile && cardStyles.mobileRoot, isMobile && !reminder && cardStyles.mobileRootWithoutReminder), onClick: onCardClick },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIcon */ "a"], { icon: iconName, size: expanded ? _CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIconSize */ "b"].Size64 : _CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIconSize */ "b"].Size32, iconBackgroundColor: accentColor, title: title, description: description, rightItem: farItem, styles: {
                    root: expanded && cardStyles.expandedIconRoot,
                    description: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])([
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
/*! exports used: useBlobObjectUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBlobObjectUrl; });
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
        const iconProps = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_4__[/* isAbsoluteUrl */ "k"])(icon)
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
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { selection: aggregatedSelection, onRetrieveIcon: onRetrieveIcon, coinSize: 32 }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.textContainer },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.names, title: names, "aria-labelledby": labelId }, compactNames !== null && compactNames !== void 0 ? compactNames : names),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.label, id: labelId }, label))));
};


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

/***/ "F880":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/AppHeader/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppHeader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.component */ "p/h3");
/* unused harmony reexport * */



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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { titleAriaId: titleId, subtitleAriaId: subTitleId, styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "F"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, layerProps: { eventBubblingEnabled: true }, focusTrapZoneProps: { isClickableOutsideFocusTrap: true }, onDismiss: props.onDismiss },
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

/***/ "FmZ0":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/abstractions/types.ts ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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

/***/ "I474":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: Form, FormFragment, FormFacade, DesigningDecorator, DesigningTrailingActions, RenderingField, orderComparator, defaultFormConstants, defaultFormFeature, BaseDescriptor, CheckboxChoiceDescriptor, DateTimeDescriptor, defaultDescriptors, DropdownChoiceDescriptor, FallbackViewingDescriptor, RadioChoiceDescriptor, RichTextDescriptor, TextDescriptor, uuidIdGenerator, idKeyExtractor, halfOrderGeneratorFactory, halfOrderGenerator, identitySanitizer, defaultFormStrings, defaultTrailingRender, defaultValidators, LengthValidator, NumberValidator, RequiredValidator, RichTextValidator, FormMode, FormQuestionType, TextNumberRestrictionType, ChoiceAppearance, QuestionAction, QuestionDisplayType, ChoiceAction, useShuffled, useChoiceChange, useChosenAndOther, getDisplayTypeOptions, getDisplayType, addNewFormEntry, getNewChoice, deriveFormQuestion, getTextNumberRestrictionOptions, deriveTextNumberRestriction, useActive, useRichTextFieldStyles, useTextFieldStyles, useCheckboxStyles, useChoiceGroupStyles, useChoiceGroupOptionStyles, useDropdownStyles, useOtherFieldStyles, useDatePickerStyles, useToggleStyles, fieldClassNames, createValidationSuccess, mergeValidations, validateEntry, validateEntries, isHtmlEmpty, hasErrorFiles, hasUploadingFiles */
/*! exports used: CheckboxChoiceDescriptor, ChoiceAction, ChoiceAppearance, DateTimeDescriptor, DropdownChoiceDescriptor, FallbackViewingDescriptor, FormQuestionType, LengthValidator, NumberValidator, QuestionAction, QuestionDisplayType, RadioChoiceDescriptor, RequiredValidator, RichTextDescriptor, RichTextValidator, TextDescriptor, TextNumberRestrictionType */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _implementations__WEBPACK_IMPORTED_MODULE_2__["q"]; });






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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(_EmptyState_styles__WEBPACK_IMPORTED_MODULE_3__[/* styles */ "a"].root, { height, background, color }, className) },
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

/***/ "JIAz":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/PeopleList/PeopleList.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: PeopleList */
/*! exports used: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleList; });
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
        label && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { id: labelId, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.label, labelClassName) }, label)),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.list, listClassName), role: 'list', "aria-labelledby": labelId }, selections.map(selection => {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { key: selection.id, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.item, itemClassName), role: 'listitem', onClick: () => onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(selection) },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: 24 }),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: styles.text },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, (_a = formatName === null || formatName === void 0 ? void 0 : formatName(selection)) !== null && _a !== void 0 ? _a : selection.name),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, formatDescription === null || formatDescription === void 0 ? void 0 : formatDescription(selection)))));
        }))));
};


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
    const ref = Object(_addressbook_utilities_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useKeyboardInvoke */ "b"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.root, styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(size, defaultStyles.content, styles.content) },
            icon && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { role: onIconClick ? 'button' : 'presentation', tabIndex: onIconClick ? 0 : undefined, onClick: onIconClick, ref: ref, "aria-label": onIconClick && editIconAriaLabel, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.iconContainer, iconBackgroundColor && {
                    backgroundColor: iconBackgroundColor,
                }, styles.iconContainer) },
                typeof icon === 'string' ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.icon, {
                        color: iconColor,
                        fill: iconColor,
                    }), iconName: icon })) : (icon),
                onIconClick && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.editIcon, styles.editIcon), iconName: 'Edit' })))),
            (title || description) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.textContainer, styles.textarea) },
                title && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: defaultStyles.titleContainer },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { id: titleId, title: title, role: 'presentation', 
                        // prevent screen reader from reading the title twice (group) in MacOS
                        // about presentation role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role
                        className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.title, styles.title), as: titleAs }, title),
                    titleTrailingItem)),
                description &&
                    (typeof description === 'string' ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "a"], { id: descriptionId, title: description, role: 'presentation', className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(defaultStyles.description, styles.description) }, description)) : (description))))),
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
                yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* silently */ "t"])(this.operation.request(uploadUrl, { method: 'DELETE' }));
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
    const overflow = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => overflowCount > 0 && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.overflow, compact && styles.compactOverflow, {
            fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(Math.min(coinSize * 0.5, 10)),
        }), title: overflowTitle }, overflowCount)), [overflowCount, overflowTitle, styles, compact, coinSize]);
    const onlyName = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => onlyNameText && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.onlyName, {
            fontSize: Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(Math.min(coinSize * 0.75, 14)),
            margin: `0 ${Object(_addressbook_components_fluentui_teams_theme__WEBPACK_IMPORTED_MODULE_1__[/* rem */ "b"])(2 + coinSize * 0.25)}`,
        }), title: props.title ? undefined : onlyNameText }, onlyNameText)), [coinSize, onlyNameText, props.title, styles.onlyName]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.root, className) }, props),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.coins, compact && styles.compactCoins), role: 'list' }, visibleSelections.map(selection => (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PeopleCoin__WEBPACK_IMPORTED_MODULE_3__[/* PeopleCoin */ "a"], { key: selection.id, role: 'listitem', selection: selection, onRetrieveIcon: onRetrieveIcon, coinSize: coinSize, preventNameAsTitle: Boolean(props.title) })))),
        overflow,
        onlyName));
};


/***/ }),

/***/ "RwJE":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/clipboards.ts ***!
  \**************************************************************************************************************/
/*! exports provided: copyToClipboard, copyImageToClipboard, copyLinkToClipboard */
/*! exports used: copyImageToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export copyToClipboard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copyImageToClipboard; });
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
        if (!Object(_mimes__WEBPACK_IMPORTED_MODULE_1__[/* isImageMime */ "c"])(blob.type))
            return;
        const dataUrl = yield Object(_data_urls__WEBPACK_IMPORTED_MODULE_0__[/* encodeDataUrl */ "b"])(blob);
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
            root: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.root, isMobile && 'is-mobile', className),
            link: isMobile ? buttonStyles.mobile : buttonStyles.root,
            linkIsSelected: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(isMobile ? buttonStyles.mobile : buttonStyles.root, 'is-active'),
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
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].semibold,
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
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].regular,
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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].semibold,
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

/***/ "XhlK":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/data-transfers.ts ***!
  \******************************************************************************************************************/
/*! exports provided: dataTransferIncludesFiles, extractFilesFromDataTransfer */
/*! exports used: dataTransferIncludesFiles, extractFilesFromDataTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataTransferIncludesFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extractFilesFromDataTransfer; });
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
/*! exports used: isAbsoluteUrl, normalizeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeUrl; });
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
/*! exports provided: iconStyle, customIconStyle, emojiStyle, icons, initFluentuiIcons, IconName */
/*! exports used: IconName, initFluentuiIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons */ "78Zn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Icons__WEBPACK_IMPORTED_MODULE_0__["b"]; });




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
/*! exports used: useRenderings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRenderings; });
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

/***/ "apXe":
/*!************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-people/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: PeopleCoin, PeopleList, PeoplePile, PeopleSelect, PeopleView, PeopleSelectionType */
/*! exports used: PeopleCoin, PeopleList, PeopleSelectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleCoin */ "KDg/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _PeopleCoin__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleList */ "547/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _PeopleList__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _PeoplePile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeoplePile */ "fkN4");
/* harmony import */ var _PeopleSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PeopleSelect */ "wzJJ");
/* harmony import */ var _PeopleView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeopleView */ "nK6a");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "DaYX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["a"]; });









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
const ellipsisStyles = (line) => Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])({
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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].semibold,
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
        animation: `${Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* keyframes */ "E"])({
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(-100%)' },
        })} 2s steps(60) infinite`,
    },
});


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
    const featureInternal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => (Object.assign(Object.assign({}, _implementations__WEBPACK_IMPORTED_MODULE_3__[/* defaultFormFeature */ "r"]), feature)), [feature]);
    // Populate the ref.
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useImperativeHandle(ref, () => ({
        validate: quietly => {
            const newEntries = Object(_implementations__WEBPACK_IMPORTED_MODULE_3__[/* validateEntries */ "s"])(context.entries, featureInternal.validators, quietly);
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

/***/ "h3zH":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/files.ts ***!
  \*********************************************************************************************************/
/*! exports provided: selectFile, digestBlob, encodeHexString, createFileByBlob, getReadableSizeString, normalizeFileName, splitFileName, joinFileName */
/*! exports used: createFileByBlob, joinFileName, normalizeFileName, selectFile, splitFileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectFile; });
/* unused harmony export digestBlob */
/* unused harmony export encodeHexString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createFileByBlob; });
/* unused harmony export getReadableSizeString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return splitFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return joinFileName; });
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

/***/ "iMwy":
/*!*************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/data-urls.ts ***!
  \*************************************************************************************************************/
/*! exports provided: encodeDataUrl, decodeDataUrl */
/*! exports used: decodeDataUrl, encodeDataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return encodeDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decodeDataUrl; });
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

/***/ "jG8U":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-hooks/src/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: useBlobObjectUrl, useDebounced, useDeepDeps, useDeepMemo, useDeepCallback, useDeepEffect, useDrop, useKeyboardInvoke, useLongPress, useRenderings, useUpdate, useElementsVisibility */
/*! exports used: useBlobObjectUrl, useKeyboardInvoke, useRenderings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob */ "EAWf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _blob__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "/m+X");
/* harmony import */ var _deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deep */ "Yd5b");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop */ "9jFz");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyboard */ "R2N7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _long_press__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-press */ "eTZ1");
/* harmony import */ var _renderings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderings */ "ZX02");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _renderings__WEBPACK_IMPORTED_MODULE_6__["a"]; });

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

/***/ "jRU1":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/types/entries/rich-text.ts ***!
  \*********************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "F"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, onDismiss: props.onDismiss },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentCopyResponseModalContent__WEBPACK_IMPORTED_MODULE_4__[/* ContentCopyRequestModalContent */ "a"], Object.assign({}, props))));
};


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
/* harmony import */ var _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/teams-telemetry */ "39Bk");
/* harmony import */ var _addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addressbook/utilities-core */ "1hmm");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "nwjK");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "UkL6");
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/types */ "N5m/");
/* harmony import */ var _ScenarioLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScenarioLogger */ "ytE3");





var AriaEventTypes;
(function (AriaEventTypes) {
    AriaEventTypes["Trace"] = "upd_trace";
    AriaEventTypes["Performance"] = "upd_performance";
    AriaEventTypes["UserBi"] = "userbi";
    AriaEventTypes["NonUiEvent"] = "upd_nonUiEvent";
    AriaEventTypes["Scenario"] = "upd_scenario";
    AriaEventTypes["Http"] = "upd_http";
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
        this.sessionId = sessionId || Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_1__[/* uuid */ "v"])();
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
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* updateToCompliantAriaClient */ "k"])(client);
        })
            .catch(err => {
            console.error('Get ComplaintAriaClient error', err);
        });
    }
    setCommonProperty(dataMap) {
        var _a;
        const context = _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "j"].getLoggerContext();
        const newContext = { customProperties: (_a = context === null || context === void 0 ? void 0 : context.customProperties) !== null && _a !== void 0 ? _a : {} };
        for (const [key, value] of Object.entries(dataMap)) {
            newContext.customProperties[key] = value;
        }
        _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "j"].updateContext(newContext);
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
            eventName: _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* EventBaseType */ "b"].PanelView,
            properties: {
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].PanelRegion]: panelRegion,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].PanelType]: panelType,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].PanelLaunchMethod]: panelLaunchMethod,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].PanelUri]: window.location.hash,
            },
        };
        this.lastUserBiViewEventTime = performance.now();
        this.addDetailsToEventProperties(dataBag, event.properties);
        this.logUIEvent(event);
    }
    logUserBiAction(scenarioName, scenarioType, moduleName, dataBag, pageLeave) {
        const event = {
            eventName: _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* EventBaseType */ "b"].PanelAction,
            properties: {
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].Scenario]: scenarioName,
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].ScenarioType]: Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(scenarioType),
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].ModuleName]: Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(moduleName),
                [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* UserBiColumns */ "d"].PanelUri]: window.location.hash,
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
        const eventProperties = { [_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* ScenarioColumns */ "c"].ScenarioName]: name };
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
        const telemetryClients = Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* getClients */ "f"])();
        telemetryClients.forEach(telemetryClient => {
            if (telemetryClient.isInitialized()) {
                telemetryClient.flush(callback);
            }
        });
    }
    flushAndTeardown() {
        Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* flushTelemetry */ "e"])();
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
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* logEvent */ "h"])(eventName, properties);
        });
    }
    logUIEvent(event) {
        event.properties['AppInfo.ElapsedTime'] = Math.ceil(performance.now());
        this.initPromise.then(() => {
            Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* logUIEvent */ "i"])(event);
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
        this.ariaTelemetryClient = new _microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* AriaTelemetryClient */ "a"](this.getClientConfig(), this.isDevelopment);
        Object(_microsoft_teams_telemetry__WEBPACK_IMPORTED_MODULE_0__[/* initializeTelemetryClient */ "g"])(this.ariaTelemetryClient, this.isDevelopment);
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { styles: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* mergeStyleSets */ "F"])(styles, modalStyles), isOpen: isOpen, isBlocking: true, onDismiss: props.onDismiss },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentCopyRequestModalContent__WEBPACK_IMPORTED_MODULE_4__[/* ContentCopyRequestModalContent */ "a"], Object.assign({}, props))));
};


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
                        yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "f"])(backoff(retries, response));
                    continue;
                }
                return response;
            }
            catch (error) {
                if (retries++ < maxRetries) {
                    if (backoff)
                        yield Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "f"])(backoff(retries));
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
        fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "f"].bold,
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
    const contentMergedStyles = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.content, props.contentClassName);
    const initialProps = {
        contentClassName: contentMergedStyles,
        headerClassName: styles.header,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonModal_ModalContent__WEBPACK_IMPORTED_MODULE_2__[/* ModalContent */ "a"], Object.assign({}, props, initialProps))));
};


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

/***/ "p/h3":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-shared/src/AppHeader/AppHeader.component.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppHeader */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "tZX7");
/* harmony import */ var _CommonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommonIcon */ "Lwxb");
/* harmony import */ var _AppHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppHeader.styles */ "4P7H");
/*
 *  Copyright © Microsoft Corporation. All rights reserved.
 */




const AppHeader = ({ items, farItems, icon, accentColor, title }) => {
    const headerStyles = Object(_AppHeader_styles__WEBPACK_IMPORTED_MODULE_3__[/* useAppHeaderStyles */ "a"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { as: 'header', horizontal: true, disableShrink: true, horizontalAlign: 'space-between', className: headerStyles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_2__[/* CommonIcon */ "a"], { icon: icon, iconBackgroundColor: accentColor, title: title, titleAs: 'h1', styles: { title: headerStyles.text } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { verticalAlign: 'center', grow: true }, items),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"], { horizontalAlign: 'center', verticalAlign: 'center' }, farItems)));
};


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

/***/ "rLoY":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/utilities-core/src/images.ts ***!
  \**********************************************************************************************************/
/*! exports provided: measureImage */
/*! exports used: measureImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return measureImage; });
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
/*! exports used: getExtensionByMime, getMimeByDataUrl, isImageMime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMimeByDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getExtensionByMime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isImageMime; });
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

/***/ "toHN":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-forms/src/implementations/utilities/types.ts ***!
  \*************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({ className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.root, className), role: 'progressbar', "aria-busy": true }, props),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.bound, { width: size, height: size }) },
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
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { role: 'alert', "aria-busy": !headerProps, className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.header, headerClassName) },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CommonIcon__WEBPACK_IMPORTED_MODULE_7__[/* CommonIcon */ "a"], Object.assign({ titleAs: 'h1', titleId: titleId, descriptionId: subTitleId }, headerProps)),
            titleFarItem,
            onDismiss && (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* IconButton */ "a"], { iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, onClick: onDismiss }))),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CommonLoadingIndicator__WEBPACK_IMPORTED_MODULE_8__[/* CommonLoadingIndicator */ "a"], { isFetching: isFetching }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.content, contentClassName), ref: contentRef, "data-is-scrollable": true },
            placeHolderItem && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: styles.placeHolder }, placeHolderItem),
            children),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* mergeStyles */ "G"])(styles.footer, footerClassName) },
            shareSubmissionCardConsentShow && (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "a"], { label: shareSubmissionCardConsentOptionLabel, checked: shareSubmissionCardConsentOptionChecked, onChange: (_, checked) => onShareSubmissionCardConsentOptionChange === null || onShareSubmissionCardConsentOptionChange === void 0 ? void 0 : onShareSubmissionCardConsentOptionChange(checked), styles: shareSubmissionCardConsentStyles })),
            secondaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__[/* ActionButton */ "a"], Object.assign({}, secondaryBtnProps)),
            footerItem,
            subsidiaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* DefaultButton */ "a"], Object.assign({}, subsidiaryBtnProps)),
            primaryBtnProps && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[/* PrimaryButton */ "a"], Object.assign({ primary: true }, primaryBtnProps)))));
};


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
                }, text: (_a = formatName === null || formatName === void 0 ? void 0 : formatName(selection)) !== null && _a !== void 0 ? _a : selection.name, onRenderSecondaryText: moreButtonMenu ? () => moreButtonMenu : undefined }), className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(props.className, selection.unremovable && styles.unremovable, moreButtonMenu && styles.moreButtonMenu) });
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
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__[/* NormalPeoplePicker */ "a"], { className: Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[/* mergeStyles */ "G"])(styles.picker, pickerClassName), selectedItems: selectedItems, onChange: onChange, onResolveSuggestions: onResolveSuggestionsInternal, 
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
/*! exports used: parseFloatStrictly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseFloatStrictly; });
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

/***/ "ynDw":
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/packages/components-rich-text-tiptap/src/components/RichTextRibbon/RichTextRibbon.types.ts ***!
  \***************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



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
        this.id = Object(_addressbook_utilities_core__WEBPACK_IMPORTED_MODULE_0__[/* uuid */ "v"])();
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
//# sourceMappingURL=package~main~mobile.js.map