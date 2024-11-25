(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.framer-motion"],{

/***/ "+4RR":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/use-on-change.js ***!
  \******************************************************************************************************************************/
/*! exports provided: useMultiOnChange, useOnChange */
/*! exports used: useMultiOnChange, useOnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMultiOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useOnChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-motion-value.js */ "VeK9");



function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (Object(_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(value))
            return value.onChange(callback);
    }, [callback]);
}
function useMultiOnChange(values, handler) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var subscriptions = values.map(function (value) { return value.onChange(handler); });
        return function () { return subscriptions.forEach(function (unsubscribe) { return unsubscribe(); }); };
    });
}




/***/ }),

/***/ "+eLe":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/*! exports used: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.js */ "NSMt");



var useIsomorphicLayoutEffect = _is_browser_js__WEBPACK_IMPORTED_MODULE_1__[/* isBrowser */ "a"] ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];




/***/ }),

/***/ "+iyd":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/create-config.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: createDomMotionConfig */
/*! exports used: createDomMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDomMotionConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-svg-component.js */ "kX78");
/* harmony import */ var _use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-render.js */ "0qWu");
/* harmony import */ var _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg/config-motion.js */ "gkGT");
/* harmony import */ var _html_config_motion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../html/config-motion.js */ "/YYd");






function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = Object(_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__[/* isSVGComponent */ "a"])(Component)
        ? _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_3__[/* svgMotionConfig */ "a"]
        : _html_config_motion_js__WEBPACK_IMPORTED_MODULE_4__[/* htmlMotionConfig */ "a"];
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, baseConfig), { preloadedFeatures: preloadedFeatures, useRender: Object(_use_render_js__WEBPACK_IMPORTED_MODULE_2__[/* createUseRender */ "a"])(forwardMotionProps), createVisualElement: createVisualElement,
        Component: Component });
}




/***/ }),

/***/ "+nIh":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/layout/Animate.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AnimateLayoutContextProvider */
/*! exports used: AnimateLayoutContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateLayoutContextProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "yM6x");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animation/utils/transitions.js */ "gXOV");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "Sg46");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimateSharedLayout/types.js */ "lLdc");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.js */ "tE4L");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "fnZ6");
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../render/dom/projection/scale-correction.js */ "VgKG");
/* harmony import */ var _render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../render/dom/projection/default-scale-correctors.js */ "gJo0");











var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable object that tracks the target viewport box
         * for the current animation frame.
         */
        _this.frameTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__[/* axisBox */ "a"])();
        /**
         * The current animation target, we use this to check whether to start
         * a new animation or continue the existing one.
         */
        _this.currentAnimationTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__[/* axisBox */ "a"])();
        /**
         * Track whether we're animating this axis.
         */
        _this.isAnimating = {
            x: false,
            y: false,
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.isAnimatingTree = false;
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, onComplete = _a.onComplete, prevParent = _a.prevParent, config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Early return if we've been instructed not to animate this render.
             */
            if (shouldStackAnimate === false) {
                _this.isAnimatingTree = false;
                return _this.safeToRemove();
            }
            /**
             * Prioritise tree animations
             */
            if (_this.isAnimatingTree && shouldStackAnimate !== true) {
                return;
            }
            else if (shouldStackAnimate) {
                _this.isAnimatingTree = true;
            }
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            /**
             * If this element has a projecting parent, there's an opportunity to animate
             * it relatively to that parent rather than relatively to the viewport. This
             * allows us to add orchestrated animations.
             */
            var isRelative = false;
            var projectionParent = visualElement.getProjectionParent();
            if (projectionParent) {
                var prevParentViewportBox = projectionParent.prevViewportBox;
                var parentLayout = projectionParent.getLayoutState().layout;
                /**
                 * If we're being provided a previous parent VisualElement by AnimateSharedLayout
                 */
                if (prevParent) {
                    /**
                     * If we've been provided an explicit target box it means we're animating back
                     * to this previous parent. So we can make a relative box by comparing to the previous
                     * parent's layout
                     */
                    if (targetBox) {
                        parentLayout = prevParent.getLayoutState().layout;
                    }
                    /**
                     * Likewise if we've been provided an explicit origin box it means we're
                     * animating out from a different element. So we should figure out where that was
                     * on screen relative to the new parent element.
                     */
                    if (originBox &&
                        !Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[/* checkIfParentHasChanged */ "b"])(prevParent, projectionParent) &&
                        prevParent.prevViewportBox) {
                        prevParentViewportBox = prevParent.prevViewportBox;
                    }
                }
                if (prevParentViewportBox &&
                    isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox)) {
                    isRelative = true;
                    origin = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[/* calcRelativeOffset */ "a"])(prevParentViewportBox, origin);
                    target = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[/* calcRelativeOffset */ "a"])(parentLayout, target);
                }
            }
            var boxHasMoved = hasMoved(origin, target);
            var animations = Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__[/* eachAxis */ "a"])(function (axis) {
                var _a, _b;
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.projection.isTargetLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    visualElement.setVisibility(visibilityAction === _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__[/* VisibilityAction */ "b"].Show);
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, config), { isRelative: isRelative }));
                }
                else {
                    (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setProjectionTargetAxis(axis, target[axis].min, target[axis].max, isRelative);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.syncRender();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                _this.isAnimatingTree = false;
                onComplete && onComplete();
                visualElement.notifyLayoutAnimationComplete();
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var _this = this;
        var visualElement = this.props.visualElement;
        visualElement.animateMotionValue = _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__[/* startAnimation */ "b"];
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
        visualElement.layoutSafeToRemove = function () { return _this.safeToRemove(); };
        Object(_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_8__[/* addScaleCorrection */ "a"])(_render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_9__[/* defaultScaleCorrectors */ "a"]);
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__[/* eachAxis */ "a"])(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _this = this;
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, isRelative = _d.isRelative;
        /**
         * If we're not animating to a new target, don't run this animation
         */
        if (this.isAnimating[axis] &&
            axisIsEqual(target, this.currentAnimationTarget[axis])) {
            return;
        }
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        this.isAnimating[axis] = true;
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.getProjectionAnimationProgress()[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[/* tweenAxis */ "c"])(frameTarget, origin, target, p);
            visualElement.setProjectionTargetAxis(axis, frameTarget.min, frameTarget.max, isRelative);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        this.stopAxisAnimation[axis] = function () {
            _this.isAnimating[axis] = false;
            layoutProgress.stop();
            unsubscribeProgress();
        };
        this.currentAnimationTarget[axis] = target;
        var layoutTransition = transition ||
            visualElement.getDefaultTransition() ||
            defaultLayoutTransition;
        // Start the animation on this axis
        var animation = Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__[/* startAnimation */ "b"])(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__[/* getValueTransition */ "a"])(layoutTransition, "layout")).then(this.stopAxisAnimation[axis]);
        return animation;
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
function AnimateLayoutContextProvider(props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_6__[/* usePresence */ "b"])(), 2), safeToRemove = _a[1];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Animate, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return (!isZeroBox(a) &&
        !isZeroBox(b) &&
        (!axisIsEqual(a.x, b.x) || !axisIsEqual(a.y, b.y)));
}
var zeroAxis = { min: 0, max: 0 };
function isZeroBox(a) {
    return axisIsEqual(a.x, zeroAxis) && axisIsEqual(a.y, zeroAxis);
}
function axisIsEqual(a, b) {
    return a.min === b.min && a.max === b.max;
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox) {
    return prevParent || (!prevParent && !(originBox || targetBox));
}




/***/ }),

/***/ "/1Jk":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/valid-prop.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: isValidMotionProp */
/*! exports used: isValidMotionProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidMotionProp; });
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "_layoutResetTransform",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}




/***/ }),

/***/ "/GD6":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (memoize);


/***/ }),

/***/ "/YYd":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/config-motion.js ***!
  \************************************************************************************************************************************/
/*! exports provided: htmlMotionConfig */
/*! exports used: htmlMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlMotionConfig; });
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "8xU7");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "znsw");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "Q8RA");




var htmlMotionConfig = {
    useVisualState: Object(_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__[/* makeUseVisualState */ "a"])({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__[/* scrapeMotionValuesFromProps */ "a"],
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__[/* createHtmlRenderState */ "a"],
    }),
};




/***/ }),

/***/ "0PSf":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/array.js ***!
  \**********************************************************************************************************************/
/*! exports provided: addUniqueItem, removeItem */
/*! exports used: addUniqueItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUniqueItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeItem; });
function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}




/***/ }),

/***/ "0qWu":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/use-render.js ***!
  \********************************************************************************************************************************/
/*! exports provided: createUseRender */
/*! exports used: createUseRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUseRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/use-props.js */ "RjtN");
/* harmony import */ var _utils_filter_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/filter-props.js */ "qO4Q");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "kX78");
/* harmony import */ var _svg_use_props_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/use-props.js */ "iHaZ");







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = Object(_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_4__[/* isSVGComponent */ "a"])(Component)
            ? _svg_use_props_js__WEBPACK_IMPORTED_MODULE_5__[/* useSVGProps */ "a"]
            : _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__[/* useHTMLProps */ "b"];
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = Object(_utils_filter_props_js__WEBPACK_IMPORTED_MODULE_3__[/* filterProps */ "a"])(props, typeof Component === "string", forwardMotionProps);
        var elementProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, filteredProps), visualProps), { ref: ref });
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, elementProps);
    };
    return useRender;
}




/***/ }),

/***/ "1Ek1":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PresenceChild */
/*! exports used: PresenceChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresenceChild; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "ey9W");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "xRhE");





var presenceId = 0;
function getPresenceId() {
    var id = presenceId;
    presenceId++;
    return id;
}
var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__[/* useConstant */ "a"])(newChildrenMap);
    var id = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__[/* useConstant */ "a"])(getPresenceId);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        id: id,
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function (childId) {
            presenceChildren.set(childId, true);
            var allComplete = true;
            presenceChildren.forEach(function (isComplete) {
                if (!isComplete)
                    allComplete = false;
            });
            allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
        },
        register: function (childId) {
            presenceChildren.set(childId, false);
            return function () { return presenceChildren.delete(childId); };
        },
    }); }, 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
    }, [isPresent]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__[/* PresenceContext */ "a"].Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}




/***/ }),

/***/ "1Ont":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: applyAxisDelta, applyAxisTransforms, applyBoxDelta, applyBoxTransforms, applyPointDelta, applyTreeDeltas, removeAxisDelta, removeAxisTransforms, removeBoxTransforms, removePointDelta, resetAxis, resetBox, scalePoint */
/*! exports used: applyBoxTransforms, applyTreeDeltas, removeBoxTransforms, resetBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export applyAxisDelta */
/* unused harmony export applyAxisTransforms */
/* unused harmony export applyBoxDelta */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyBoxTransforms; });
/* unused harmony export applyPointDelta */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applyTreeDeltas; });
/* unused harmony export removeAxisDelta */
/* unused harmony export removeAxisTransforms */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeBoxTransforms; });
/* unused harmony export removePointDelta */
/* unused harmony export resetAxis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetBox; });
/* unused harmony export scalePoint */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "D9XU");
/* harmony import */ var _render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/is-draggable.js */ "U2vs");




/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* mix */ "a"])(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* mix */ "a"])(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath) {
    var treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.getLayoutState().delta;
        // Incoporate each ancestor's scale into a culmulative treeScale for this component
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        // Apply each ancestor's calculated delta into this component's recorded layout box
        applyBoxDelta(box, delta);
        // If this is a draggable ancestor, also incorporate the node's transform to the layout box
        if (Object(_render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__[/* isDraggable */ "a"])(node)) {
            applyBoxTransforms(box, box, node.getLatestValues());
        }
    }
}




/***/ }),

/***/ "2IOs":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/projection.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: updateLayoutDeltas */
/*! exports used: updateLayoutDeltas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateLayoutDeltas; });
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/delta-apply.js */ "1Ont");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "D5AQ");



function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
    var delta = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
    var target = _b.target;
    /**
     * Reset the corrected box with the latest values from box, as we're then going
     * to perform mutative operations on it.
     */
    Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__[/* resetBox */ "d"])(layoutCorrected, layout);
    /**
     * Apply all the parent deltas to this box to produce the corrected box. This
     * is the layout box, as it will appear on screen as a result of the transforms of its parents.
     */
    Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__[/* applyTreeDeltas */ "b"])(layoutCorrected, treeScale, treePath);
    /**
     * Update the delta between the corrected box and the target box before user-set transforms were applied.
     * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
     * for our layout reprojection, but still allow them to be scaled correctly by the user.
     * It might be that to simplify this we may want to accept that user-set scale is also corrected
     * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
     * to allow people to choose whether these styles are corrected based on just the
     * layout reprojection or the final bounding box.
     */
    Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__[/* updateBoxDelta */ "c"])(delta, layoutCorrected, target, transformOrigin);
}




/***/ }),

/***/ "2WEo":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: usePanGesture */
/*! exports used: usePanGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePanGesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "FLDG");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "IzYB");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "tjOG");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanSession.js */ "zQZ6");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__[/* MotionConfigContext */ "a"]).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new _PanSession_js__WEBPACK_IMPORTED_MODULE_4__[/* PanSession */ "a"](event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__[/* usePointerEvent */ "b"])(visualElement, "pointerdown", hasPanEvents && onPointerDown);
    Object(_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__[/* useUnmountEffect */ "a"])(function () { return panSession.current && panSession.current.end(); });
}




/***/ }),

/***/ "2tAy":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/gestures.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: gestureAnimations */
/*! exports used: gestureAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gestureAnimations; });
/* harmony import */ var _gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.js */ "nzWz");
/* harmony import */ var _gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.js */ "7WA9");
/* harmony import */ var _gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.js */ "P4OU");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "HWGT");





var gestureAnimations = {
    tap: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__[/* makeRenderlessComponent */ "a"])(_gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_2__[/* useTapGesture */ "a"]),
    focus: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__[/* makeRenderlessComponent */ "a"])(_gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_0__[/* useFocusGesture */ "a"]),
    hover: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__[/* makeRenderlessComponent */ "a"])(_gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_1__[/* useHoverGesture */ "a"]),
};




/***/ }),

/***/ "3Ddo":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/events/event-info.js ***!
  \****************************************************************************************************************************/
/*! exports provided: extractEventInfo, getViewportPointFromEvent, wrapHandler */
/*! exports used: extractEventInfo, getViewportPointFromEvent, wrapHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractEventInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getViewportPointFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wrapHandler; });
/* harmony import */ var _gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.js */ "f5ck");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: Object(_gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__[/* isTouchEvent */ "b"])(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};




/***/ }),

/***/ "4JHn":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/animation.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: animateVisualElement, sortByTreeOrder, stopAnimation */
/*! exports used: animateVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animateVisualElement; });
/* unused harmony export sortByTreeOrder */
/* unused harmony export stopAnimation */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "gXOV");
/* harmony import */ var _setters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setters.js */ "ALTg");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.js */ "OJpj");





/**
 * @internal
 */
function animateVisualElement(visualElement, definition, options) {
    if (options === void 0) { options = {}; }
    visualElement.notifyAnimationStart();
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        var resolvedDefinition = typeof definition === "function"
            ? Object(_variants_js__WEBPACK_IMPORTED_MODULE_3__[/* resolveVariant */ "e"])(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(function () {
        return visualElement.notifyAnimationComplete(definition);
    });
}
function animateVariant(visualElement, variant, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_3__[/* resolveVariant */ "e"])(visualElement, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = resolved
        ? function () { return animateTarget(visualElement, resolved, options); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) { forwardDelay = 0; }
            var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
        transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        var animation = Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_1__[/* startAnimation */ "b"])(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ delay: delay }, transition));
        animations.push(animation);
    }
    return Promise.all(animations).then(function () {
        transitionEnd && Object(_setters_js__WEBPACK_IMPORTED_MODULE_2__[/* setTarget */ "c"])(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) {
            if (i === void 0) { i = 0; }
            return i * staggerChildren;
        }
        : function (i) {
            if (i === void 0) { i = 0; }
            return maxStaggerDuration - i * staggerChildren;
        };
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach(function (child, i) {
        animations.push(animateVariant(child, variant, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function () { return child.notifyAnimationComplete(variant); }));
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}




/***/ }),

/***/ "5j6t":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/resolve-value.js ***!
  \******************************************************************************************************************************/
/*! exports provided: isCustomValue, resolveFinalValueInKeyframes */
/*! exports used: isCustomValue, resolveFinalValueInKeyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCustomValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveFinalValueInKeyframes; });
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.js */ "ZqXb");


var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__[/* isKeyframesTarget */ "a"])(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "5tO3":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: isCSSVariable */
/*! exports used: isCSSVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCSSVariable; });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}




/***/ }),

/***/ "7WA9":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: useHoverGesture */
/*! exports used: useHoverGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHoverGesture; });
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.js */ "f5ck");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.js */ "yCfH");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "tjOG");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag/utils/lock.js */ "Z5EU");





function createHoverEvent(visualElement, isActive, callback) {
    return function (event, info) {
        var _a;
        if (!Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__[/* isMouseEvent */ "a"])(event) || Object(_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__[/* isDragActive */ "b"])())
            return;
        callback === null || callback === void 0 ? void 0 : callback(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__[/* AnimationType */ "a"].Hover, isActive);
    };
}
function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement = _a.visualElement;
    Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__[/* usePointerEvent */ "b"])(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined);
    Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__[/* usePointerEvent */ "b"])(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined);
}




/***/ }),

/***/ "7Wwu":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/motion-proxy.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: createMotionProxy */
/*! exports used: createMotionProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMotionProxy; });
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.js */ "DgRV");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return Object(_motion_index_js__WEBPACK_IMPORTED_MODULE_0__[/* createMotionComponent */ "a"])(createConfig(Component, customMotionComponentConfig));
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "7wiS":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: buildSVGAttrs */
/*! exports used: buildSVGAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildSVGAttrs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.js */ "fWZv");
/* harmony import */ var _transform_origin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.js */ "Ydnp");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.js */ "R1L6");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    Object(_html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__[/* buildHTMLStyles */ "a"])(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = Object(_transform_origin_js__WEBPACK_IMPORTED_MODULE_2__[/* calcSVGTransformOrigin */ "a"])(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        Object(_path_js__WEBPACK_IMPORTED_MODULE_3__[/* buildSVGPath */ "a"])(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "84eJ":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: compareByDepth */
/*! exports used: compareByDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareByDepth; });
var compareByDepth = function (a, b) {
    return a.depth - b.depth;
};




/***/ }),

/***/ "8Qy2":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: applyConstraints, calcConstrainedMinPoint, calcPositionFromProgress, calcRelativeAxisConstraints, calcRelativeConstraints, calcViewportAxisConstraints, calcViewportConstraints, defaultElastic, rebaseAxisConstraints, resolveAxisElastic, resolveDragElastic, resolvePointElastic */
/*! exports used: applyConstraints, calcConstrainedMinPoint, calcPositionFromProgress, calcRelativeConstraints, calcViewportConstraints, defaultElastic, rebaseAxisConstraints, resolveDragElastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calcConstrainedMinPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcPositionFromProgress; });
/* unused harmony export calcRelativeAxisConstraints */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return calcRelativeConstraints; });
/* unused harmony export calcViewportAxisConstraints */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return calcViewportConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defaultElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return rebaseAxisConstraints; });
/* unused harmony export resolveAxisElastic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resolveDragElastic; });
/* unused harmony export resolvePointElastic */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "D9XU");



/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* mix */ "a"])(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* mix */ "a"])(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* mix */ "a"])(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number"
        ? dragElastic
        : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}




/***/ }),

/***/ "8sb4":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: useVisualElement */
/*! exports used: useVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "ey9W");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "tE4L");
/* harmony import */ var _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/LayoutGroupContext.js */ "NC/v");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "XC9P");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "+eLe");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "FLDG");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/LazyContext.js */ "t36y");










function useLayoutId(_a) {
    var layoutId = _a.layoutId;
    var layoutGroupId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_4__[/* LayoutGroupContext */ "a"]);
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useVisualElement(Component, visualState, props, createVisualElement) {
    var config = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_7__[/* MotionConfigContext */ "a"]);
    var lazyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_8__[/* LazyContext */ "a"]);
    var parent = Object(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__[/* useVisualElementContext */ "b"])();
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__[/* PresenceContext */ "a"]);
    var layoutId = useLayoutId(props);
    var visualElementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props), { layoutId: layoutId }),
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        });
    }
    var visualElement = visualElementRef.current;
    Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__[/* useIsomorphicLayoutEffect */ "a"])(function () {
        if (!visualElement)
            return;
        visualElement.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, config), props), { layoutId: layoutId }));
        visualElement.isPresent = Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__[/* isPresent */ "a"])(presenceContext);
        visualElement.isPresenceRoot =
            !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
        /**
         * Fire a render to ensure the latest state is reflected on-screen.
         */
        visualElement.syncRender();
    });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var _a;
        if (!visualElement)
            return;
        /**
         * In a future refactor we can replace the features-as-components and
         * have this loop through them all firing "effect" listeners
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__[/* useIsomorphicLayoutEffect */ "a"])(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}




/***/ }),

/***/ "8xU7":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: makeUseVisualState */
/*! exports used: makeUseVisualState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeUseVisualState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "b5yH");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "ey9W");
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/utils/variants.js */ "OJpj");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-constant.js */ "xRhE");
/* harmony import */ var _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.js */ "vWOW");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "XC9P");









function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = function (instance) { return onMount(props, instance, state); };
    }
    return state;
}
var makeUseVisualState = function (config) { return function (props, isStatic) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__[/* MotionContext */ "a"]);
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_3__[/* PresenceContext */ "a"]);
    return isStatic
        ? makeState(config, props, context, presenceContext)
        : Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_5__[/* useConstant */ "a"])(function () { return makeState(config, props, context, presenceContext); });
}; };
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
        values[key] = Object(_value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_6__[/* resolveMotionValue */ "a"])(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__[/* checkIfControllingVariants */ "a"])(props);
    var isVariantNode = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__[/* checkIfVariantNode */ "b"])(props);
    if (context &&
        isVariantNode &&
        !isControllingVariants &&
        props.inherit !== false) {
        initial !== null && initial !== void 0 ? initial : (initial = context.initial);
        animate !== null && animate !== void 0 ? animate : (animate = context.animate);
    }
    var variantToSet = blockInitialAnimation || initial === false ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__[/* isAnimationControls */ "a"])(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach(function (definition) {
            var resolved = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__[/* resolveVariantFromProps */ "f"])(props, definition);
            if (!resolved)
                return;
            var transitionEnd = resolved.transitionEnd; resolved.transition; var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(resolved, ["transitionEnd", "transition"]);
            for (var key in target)
                values[key] = target[key];
            for (var key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "ALTg":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/setters.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: checkTargetForNewValues, getOrigin, getOriginFromTransition, setTarget, setValues */
/*! exports used: checkTargetForNewValues, getOrigin, setTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkTargetForNewValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOrigin; });
/* unused harmony export getOriginFromTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setTarget; });
/* unused harmony export setValues */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "NN0J");
/* harmony import */ var _utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/is-numerical-string.js */ "RPpE");
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "5j6t");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/index.js */ "JOb6");
/* harmony import */ var _dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/value-types/animatable-none.js */ "soPC");
/* harmony import */ var _dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/value-types/find.js */ "iv3Y");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variants.js */ "OJpj");









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_4__[/* motionValue */ "a"])(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_7__[/* resolveVariant */ "e"])(visualElement, definition);
    var _a = resolved
        ? visualElement.makeTargetAnimatable(resolved, false)
        : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b; _a.transition; var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["transitionEnd", "transition"]);
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, target), transitionEnd);
    for (var key in target) {
        var value = Object(_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__[/* resolveFinalValueInKeyframes */ "b"])(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(variantLabels)).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        var variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" && Object(_utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_2__[/* isNumericalString */ "a"])(value)) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!Object(_dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_6__[/* findValueType */ "a"])(value) && style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* complex */ "a"].test(targetValue)) {
            value = Object(_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_5__[/* getAnimatableNone */ "a"])(key, targetValue);
        }
        visualElement.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_4__[/* motionValue */ "a"])(value));
        (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : (_d[key] = value);
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] =
            (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}




/***/ }),

/***/ "AOjp":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/use-motion-value.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: useMotionValue */
/*! exports used: useMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMotionValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "JOb6");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "FLDG");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-constant.js */ "xRhE");






/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    var value = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__[/* useConstant */ "a"])(function () { return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[/* motionValue */ "a"])(initial); });
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_3__[/* MotionConfigContext */ "a"]).isStatic;
    if (isStatic) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initial), 2), setLatest_1 = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return value.onChange(setLatest_1); }, []);
    }
    return value;
}




/***/ }),

/***/ "Ax6L":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/motion.js ***!
  \****************************************************************************************************************************/
/*! exports provided: createDomMotionComponent, motion */
/*! exports used: motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createDomMotionComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/index.js */ "DgRV");
/* harmony import */ var _motion_proxy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion-proxy.js */ "7Wwu");
/* harmony import */ var _utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-config.js */ "+iyd");
/* harmony import */ var _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/gestures.js */ "2tAy");
/* harmony import */ var _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../motion/features/animations.js */ "djcL");
/* harmony import */ var _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../motion/features/drag.js */ "YQkc");
/* harmony import */ var _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../motion/features/layout/index.js */ "xMup");
/* harmony import */ var _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-visual-element.js */ "o4VW");










var featureBundle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_5__[/* animations */ "a"]), _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_4__[/* gestureAnimations */ "a"]), _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_6__[/* drag */ "a"]), _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_7__[/* layoutAnimations */ "a"]);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ Object(_motion_proxy_js__WEBPACK_IMPORTED_MODULE_2__[/* createMotionProxy */ "a"])(function (Component, config) {
    return Object(_utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__[/* createDomMotionConfig */ "a"])(Component, config, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__[/* createDomVisualElement */ "a"]);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return Object(_motion_index_js__WEBPACK_IMPORTED_MODULE_1__[/* createMotionComponent */ "a"])(Object(_utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__[/* createDomMotionConfig */ "a"])(key, { forwardMotionProps: false }, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__[/* createDomVisualElement */ "a"]));
}




/***/ }),

/***/ "CFp/":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "/GD6");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "CRHf":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/subscription-manager.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: SubscriptionManager */
/*! exports used: SubscriptionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionManager; });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "0PSf");


var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = [];
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[/* addUniqueItem */ "a"])(this.subscriptions, handler);
        return function () { return Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[/* removeItem */ "b"])(_this.subscriptions, handler); };
    };
    SubscriptionManager.prototype.notify = function (a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (var i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                var handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    };
    SubscriptionManager.prototype.getSize = function () {
        return this.subscriptions.length;
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.length = 0;
    };
    return SubscriptionManager;
}());




/***/ }),

/***/ "D5AQ":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js ***!
  \************************************************************************************************************************************/
/*! exports provided: calcOrigin, calcRelativeAxis, calcRelativeBox, isNear, updateAxisDelta, updateBoxDelta */
/*! exports used: calcOrigin, calcRelativeBox, updateBoxDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcOrigin; });
/* unused harmony export calcRelativeAxis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calcRelativeBox; });
/* unused harmony export isNear */
/* unused harmony export updateAxisDelta */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateBoxDelta; });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "c2I6");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "eEvI");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "UqkS");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "D9XU");


var clampProgress = function (v) { return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "a"])(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* distance */ "a"])(value, target) < maxDistance;
}
function calcLength(axis) {
    return axis.max - axis.min;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__[/* progress */ "a"])(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__[/* progress */ "a"])(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    if (origin === void 0) { origin = 0.5; }
    delta.origin = origin;
    delta.originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[/* mix */ "a"])(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate =
        Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[/* mix */ "a"])(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
    updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
 * Currently this only accepts numerical origins, measured as 0-1, but could
 * accept pixel values by comparing to the target axis.
 */
function defaultOrigin(origin) {
    return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
    calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
    calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}




/***/ }),

/***/ "DgRV":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: createMotionComponent */
/*! exports used: createMotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMotionComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_use_features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/use-features.js */ "yXUS");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "FLDG");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/index.js */ "XC9P");
/* harmony import */ var _utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/use-visual-element.js */ "8sb4");
/* harmony import */ var _utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/use-motion-ref.js */ "RXZR");
/* harmony import */ var _context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/MotionContext/create.js */ "kjKA");
/* harmony import */ var _features_definitions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/definitions.js */ "gUCf");
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/is-browser.js */ "NSMt");











/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && Object(_features_definitions_js__WEBPACK_IMPORTED_MODULE_7__[/* loadFeatures */ "b"])(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__[/* MotionConfigContext */ "a"]).isStatic;
        var features = null;
        /**
         * Create the tree context. This is memoized and will only trigger renders
         * when the current tree variant changes in static mode.
         */
        var context = Object(_context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_6__[/* useCreateMotionContext */ "a"])(props, isStatic);
        /**
         *
         */
        var visualState = useVisualState(props, isStatic);
        if (!isStatic && _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_8__[/* isBrowser */ "a"]) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = Object(_utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_4__[/* useVisualElement */ "a"])(Component, visualState, props, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             *
             * TODO: The intention is to move these away from a React-centric to a
             * VisualElement-centric lifecycle scheme.
             */
            features = Object(_features_use_features_js__WEBPACK_IMPORTED_MODULE_1__[/* useFeatures */ "a"])(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__[/* MotionContext */ "a"].Provider, { value: context }, useRender(Component, props, Object(_utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_5__[/* useMotionRef */ "a"])(visualState, context.visualElement, externalRef), visualState, isStatic)),
            features));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(MotionComponent);
}




/***/ }),

/***/ "Dy76":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/drag/use-drag.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: useDrag */
/*! exports used: useDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDrag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "FLDG");
/* harmony import */ var _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisualElementDragControls.js */ "cfOk");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-constant.js */ "xRhE");






/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__[/* MotionConfigContext */ "a"]).transformPagePoint;
    var dragControls = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__[/* useConstant */ "a"])(function () {
        return new _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__[/* VisualElementDragControls */ "a"]({
            visualElement: visualElement,
        });
    });
    dragControls.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return dragControls.mount(visualElement); }, []);
}




/***/ }),

/***/ "EvRE":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: camelCaseAttributes */
/*! exports used: camelCaseAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelCaseAttributes; });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
]);




/***/ }),

/***/ "F1M1":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/events/utils.js ***!
  \***********************************************************************************************************************/
/*! exports provided: supportsMouseEvents, supportsPointerEvents, supportsTouchEvents */
/*! exports used: supportsMouseEvents, supportsPointerEvents, supportsTouchEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supportsMouseEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return supportsPointerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return supportsTouchEvents; });
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.js */ "NSMt");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "a"] && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "a"] && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "a"] && window.onmousedown === null;
};




/***/ }),

/***/ "FLDG":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/MotionConfigContext.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: MotionConfigContext */
/*! exports used: MotionConfigContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var MotionConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
});




/***/ }),

/***/ "H5CK":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/state.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: createLayoutState, createProjectionState, zeroLayout */
/*! exports used: createLayoutState, createProjectionState, zeroLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createProjectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return zeroLayout; });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "fnZ6");


var createProjectionState = function () { return ({
    isEnabled: false,
    isHydrated: false,
    isTargetLocked: false,
    target: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* axisBox */ "a"])(),
    targetFinal: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* axisBox */ "a"])(),
}); };
function createLayoutState() {
    return {
        isHydrated: false,
        layout: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* axisBox */ "a"])(),
        layoutCorrected: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* axisBox */ "a"])(),
        treeScale: { x: 1, y: 1 },
        delta: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* delta */ "e"])(),
        deltaFinal: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* delta */ "e"])(),
        deltaTransform: "",
    };
}
var zeroLayout = createLayoutState();




/***/ }),

/***/ "HWGT":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: makeRenderlessComponent */
/*! exports used: makeRenderlessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeRenderlessComponent; });
var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };




/***/ }),

/***/ "IzYB":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/use-unmount-effect.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: useUnmountEffect */
/*! exports used: useUnmountEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUnmountEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return function () { return callback(); }; }, []);
}




/***/ }),

/***/ "JOb6":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MotionValue, motionValue */
/*! exports used: motionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MotionValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return motionValue; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "aJ2Q");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "eEGw");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.js */ "CRHf");




var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__[/* SubscriptionManager */ "a"]();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__[/* SubscriptionManager */ "a"]();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__[/* SubscriptionManager */ "a"]();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_0__[/* getFrameData */ "d"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].postRender(_this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            // Update velocity subscribers
            if (_this.velocityUpdateSubscribers.getSize()) {
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* velocityPerSecond */ "a"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.hasAnimated = true;
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}




/***/ }),

/***/ "JoU2":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: int */
/*! exports used: int */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return int; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "xnaF");



var int = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* number */ "b"]), { transform: Math.round });




/***/ }),

/***/ "LXGA":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: scrapeMotionValuesFromProps */
/*! exports used: scrapeMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrapeMotionValuesFromProps; });
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "VeK9");
/* harmony import */ var _html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.js */ "znsw");



function scrapeMotionValuesFromProps(props) {
    var newValues = Object(_html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__[/* scrapeMotionValuesFromProps */ "a"])(props);
    for (var key in props) {
        if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__[/* isMotionValue */ "a"])(props[key])) {
            var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "MoBN":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: isNodeOrChild */
/*! exports used: isNodeOrChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNodeOrChild; });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "NC/v":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/LayoutGroupContext.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: LayoutGroupContext */
/*! exports used: LayoutGroupContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutGroupContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @internal
 */
var LayoutGroupContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);




/***/ }),

/***/ "NSMt":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/is-browser.js ***!
  \***************************************************************************************************************************/
/*! exports provided: isBrowser */
/*! exports used: isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
var isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "O//8":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/noop.js ***!
  \*********************************************************************************************************************/
/*! exports provided: noop */
/*! exports used: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
function noop(any) {
    return any;
}




/***/ }),

/***/ "OJpj":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/variants.js ***!
  \********************************************************************************************************************************/
/*! exports provided: checkIfControllingVariants, checkIfVariantNode, isVariantLabel, isVariantLabels, resolveVariant, resolveVariantFromProps */
/*! exports used: checkIfControllingVariants, checkIfVariantNode, isVariantLabel, isVariantLabels, resolveVariant, resolveVariantFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkIfControllingVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkIfVariantNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isVariantLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isVariantLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resolveVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return resolveVariantFromProps; });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    return typeof definition === "function"
        ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)
        : definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "OmUF":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/is-ref-object.js ***!
  \******************************************************************************************************************************/
/*! exports provided: isRefObject */
/*! exports used: isRefObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isRefObject; });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "P4OU":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: useTapGesture */
/*! exports used: useTapGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTapGesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-node-or-child.js */ "MoBN");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "tjOG");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "IzYB");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "Kaa3");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/utils/types.js */ "yCfH");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag/utils/lock.js */ "Z5EU");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var cancelPointerEndListeners = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Tap, false);
        return !Object(_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_6__[/* isDragActive */ "b"])();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !Object(_utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_1__[/* isNodeOrChild */ "a"])(visualElement.getInstance(), event.target)
            ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info)
            : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_4__[/* pipe */ "a"])(Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__[/* addPointerEvent */ "a"])(window, "pointerup", onPointerUp), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__[/* addPointerEvent */ "a"])(window, "pointercancel", onPointerCancel));
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Tap, true);
    }
    Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__[/* usePointerEvent */ "b"])(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
    Object(_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_3__[/* useUnmountEffect */ "a"])(removePointerEndListener);
}




/***/ }),

/***/ "Q8RA":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createHtmlRenderState */
/*! exports used: createHtmlRenderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHtmlRenderState; });
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };




/***/ }),

/***/ "R1L6":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/path.js ***!
  \********************************************************************************************************************************/
/*! exports provided: buildSVGPath */
/*! exports used: buildSVGPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildSVGPath; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "IGs+");


// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"].transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}




/***/ }),

/***/ "RPpE":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/is-numerical-string.js ***!
  \************************************************************************************************************************************/
/*! exports provided: isNumericalString */
/*! exports used: isNumericalString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNumericalString; });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };




/***/ }),

/***/ "RR/9":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/number.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: numberValueTypes */
/*! exports used: numberValueTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numberValueTypes; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "IGs+");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "xnaF");
/* harmony import */ var _type_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.js */ "JoU2");



var numberValueTypes = {
    // Border props
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* scale */ "c"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* scale */ "c"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* scale */ "c"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* scale */ "c"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* degrees */ "a"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* alpha */ "a"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* progressPercentage */ "c"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* progressPercentage */ "c"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"],
    // Misc
    zIndex: _type_int_js__WEBPACK_IMPORTED_MODULE_2__[/* int */ "a"],
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* alpha */ "a"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* alpha */ "a"],
    numOctaves: _type_int_js__WEBPACK_IMPORTED_MODULE_2__[/* int */ "a"],
};




/***/ }),

/***/ "RXZR":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: useMotionRef */
/*! exports used: useMotionRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMotionRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "OmUF");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__[/* isRefObject */ "a"])(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "RjtN":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/use-props.js ***!
  \********************************************************************************************************************************/
/*! exports provided: copyRawValuesOnly, useHTMLProps, useStyle */
/*! exports used: copyRawValuesOnly, useHTMLProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copyRawValuesOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useHTMLProps; });
/* unused harmony export useStyle */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.js */ "TXsS");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "VeK9");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "fWZv");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/create-render-state.js */ "Q8RA");







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__[/* isMotionValue */ "a"])(source[key]) && !Object(_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__[/* isForcedMotionValue */ "a"])(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var state = Object(_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_5__[/* createHtmlRenderState */ "a"])();
        Object(_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__[/* buildHTMLStyles */ "a"])(state, visualState, undefined, undefined, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag)) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout =
            "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-" + (props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "Sg46":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/layout/utils.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: calcRelativeOffset, calcRelativeOffsetAxis, checkIfParentHasChanged, tweenAxis */
/*! exports used: calcRelativeOffset, checkIfParentHasChanged, tweenAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcRelativeOffset; });
/* unused harmony export calcRelativeOffsetAxis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkIfParentHasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tweenAxis; });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "D9XU");


function tweenAxis(target, prev, next, p) {
    target.min = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__[/* mix */ "a"])(prev.min, next.min, p);
    target.max = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__[/* mix */ "a"])(prev.max, next.max, p);
}
function calcRelativeOffsetAxis(parent, child) {
    return {
        min: child.min - parent.min,
        max: child.max - parent.min,
    };
}
function calcRelativeOffset(parent, child) {
    return {
        x: calcRelativeOffsetAxis(parent.x, child.x),
        y: calcRelativeOffsetAxis(parent.y, child.y),
    };
}
function checkIfParentHasChanged(prev, next) {
    var prevId = prev.getLayoutId();
    var nextId = next.getLayoutId();
    return prevId !== nextId || (nextId === undefined && prev !== next);
}




/***/ }),

/***/ "TNMq":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/components/AnimatePresence/index.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AnimatePresence */
/*! exports used: AnimatePresence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatePresence; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_use_force_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-force-update.js */ "sRQv");
/* harmony import */ var _PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PresenceChild.js */ "1Ek1");
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/SharedLayoutContext.js */ "fai2");







function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var forceRender = Object(_utils_use_force_update_js__WEBPACK_IMPORTED_MODULE_2__[/* useForceUpdate */ "a"])();
    var layoutContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__[/* SharedLayoutContext */ "b"]);
    if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__[/* isSharedLayout */ "c"])(layoutContext)) {
        forceRender = layoutContext.forceUpdate;
    }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, filteredChildren.map(function (child) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__[/* PresenceChild */ "a"], { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(filteredChildren));
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__[/* PresenceChild */ "a"], { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__[/* PresenceChild */ "a"], { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child); })));
};




/***/ }),

/***/ "TXsS":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: isForcedMotionValue */
/*! exports used: isForcedMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isForcedMotionValue; });
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/projection/scale-correction.js */ "VgKG");
/* harmony import */ var _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/html/utils/transform.js */ "loru");



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return (Object(_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__[/* isTransformProp */ "b"])(key) ||
        Object(_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__[/* isTransformOriginProp */ "a"])(key) ||
        ((layout || layoutId !== undefined) &&
            (!!_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__[/* valueScaleCorrection */ "b"][key] || key === "opacity")));
}




/***/ }),

/***/ "U2vs":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/is-draggable.js ***!
  \************************************************************************************************************************************/
/*! exports provided: isDraggable */
/*! exports used: isDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDraggable; });
function isDraggable(visualElement) {
    var _a = visualElement.getProps(), drag = _a.drag, _dragX = _a._dragX;
    return drag && !_dragX;
}




/***/ }),

/***/ "VeK9":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/utils/is-motion-value.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: isMotionValue */
/*! exports used: isMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMotionValue; });
var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};




/***/ }),

/***/ "VgKG":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: addScaleCorrection, valueScaleCorrection */
/*! exports used: addScaleCorrection, valueScaleCorrection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addScaleCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return valueScaleCorrection; });
var valueScaleCorrection = {};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}




/***/ }),

/***/ "WfZt":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/layout/Measure.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: MeasureContextProvider */
/*! exports used: MeasureContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureContextProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SharedLayoutContext.js */ "fai2");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "yuMh");





/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement = _a.visualElement;
        Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(syncLayout) && syncLayout.register(visualElement);
        Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(framerSyncLayout) &&
            framerSyncLayout.register(visualElement);
        visualElement.onUnmount(function () {
            if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(syncLayout)) {
                syncLayout.remove(visualElement);
            }
            if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(framerSyncLayout)) {
                framerSyncLayout.remove(visualElement);
            }
        });
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__[/* snapshotViewportBox */ "c"])(visualElement);
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var syncLayout = this.props.syncLayout;
        if (!Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* isSharedLayout */ "c"])(syncLayout))
            syncLayout.flush();
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
function MeasureContextProvider(props) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* SharedLayoutContext */ "b"]);
    var framerSyncLayout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__[/* FramerTreeLayoutContext */ "a"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Measure, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })));
}




/***/ }),

/***/ "X1Oo":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/animate.js ***!
  \****************************************************************************************************************************/
/*! exports provided: animate */
/*! exports used: animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animate; });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value/index.js */ "JOb6");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "VeK9");
/* harmony import */ var _utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transitions.js */ "gXOV");




/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `AnimationPlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */
function animate(from, to, transition) {
    if (transition === void 0) { transition = {}; }
    var value = Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(from) ? from : Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__[/* motionValue */ "a"])(from);
    Object(_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__[/* startAnimation */ "b"])("", value, to, transition);
    return {
        stop: function () { return value.stop(); },
    };
}




/***/ }),

/***/ "XC9P":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/MotionContext/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: MotionContext, useVisualElementContext */
/*! exports used: MotionContext, useVisualElementContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useVisualElementContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function useVisualElementContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MotionContext).visualElement;
}




/***/ }),

/***/ "XcfJ":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: createBatcher */
/*! exports used: createBatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "aJ2Q");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "yuMh");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/utils/batch-layout.js */ "u1pq");
/* harmony import */ var _render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../render/utils/compare-by-depth.js */ "84eJ");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types.js */ "lLdc");







/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    layoutReady: function (child) { return child.notifyLayoutReady(); },
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    return {
        add: function (child) { return queue.add(child); },
        flush: function (_a) {
            var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
            Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__[/* batchLayout */ "a"])(function (read, write) {
                var order = Array.from(queue).sort(_render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_4__[/* compareByDepth */ "a"]);
                var ancestors = parent
                    ? Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* collectProjectingAncestors */ "a"])(parent)
                    : [];
                write(function () {
                    var allElements = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(ancestors)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(order));
                    allElements.forEach(function (element) { return element.resetTransform(); });
                });
                read(function () {
                    order.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* updateLayoutMeasurement */ "d"]);
                });
                write(function () {
                    ancestors.forEach(function (element) { return element.restoreTransform(); });
                    order.forEach(layoutReady);
                });
                read(function () {
                    /**
                     * After all children have started animating, ensure any Entering components are set to Present.
                     * If we add deferred animations (set up all animations and then start them in two loops) this
                     * could be moved to the start loop. But it needs to happen after all the animations configs
                     * are generated in AnimateSharedLayout as this relies on presence data
                     */
                    order.forEach(function (child) {
                        if (child.isPresent)
                            child.presence = _types_js__WEBPACK_IMPORTED_MODULE_5__[/* Presence */ "a"].Present;
                    });
                });
                write(function () {
                    /**
                     * Starting these animations will have queued jobs on the frame loop. In some situations,
                     * like when removing an element, these will be processed too late after the DOM is manipulated,
                     * leaving a flash of incorrectly-projected content. By manually flushing these jobs
                     * we ensure there's no flash.
                     */
                    framesync__WEBPACK_IMPORTED_MODULE_1__[/* flushSync */ "c"].preRender();
                    framesync__WEBPACK_IMPORTED_MODULE_1__[/* flushSync */ "c"].render();
                });
                read(function () {
                    /**
                     * Schedule a callback at the end of the following frame to assign the latest projection
                     * box to the prevViewportBox snapshot. Once global batching is in place this could be run
                     * synchronously. But for now it ensures that if any nested `AnimateSharedLayout` top-level
                     * child attempts to calculate its previous relative position against a prevViewportBox
                     * it will be against its latest projection box instead, as the snapshot is useless beyond this
                     * render.
                     */
                    framesync__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].postRender(function () {
                        return order.forEach(assignProjectionToSnapshot);
                    });
                    queue.clear();
                });
            });
            // TODO: Need to find a layout-synchronous way of flushing this
            Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__[/* flushLayout */ "b"])();
        },
    };
}
function assignProjectionToSnapshot(child) {
    child.prevViewportBox = child.projection.target;
}




/***/ }),

/***/ "YOCv":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/visual-element.js ***!
  \************************************************************************************************************************************/
/*! exports provided: svgVisualElement */
/*! exports used: svgVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return svgVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "zxV/");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "LXGA");
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/visual-element.js */ "n4oP");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.js */ "7wiS");
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.js */ "mCRY");
/* harmony import */ var _utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/camel-case-attrs.js */ "EvRE");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/utils/transform.js */ "loru");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.js */ "kNKl");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "jcGD");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../html/utils/build-projection-transform.js */ "wnxH");












var svgVisualElement = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__[/* visualElement */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _html_visual_element_js__WEBPACK_IMPORTED_MODULE_3__[/* htmlConfig */ "a"]), { getBaseTarget: function (props, key) {
        return props[key];
    },
    readValueFromInstance: function (domElement, key) {
        var _a;
        if (Object(_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__[/* isTransformProp */ "b"])(key)) {
            return ((_a = Object(_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_9__[/* getDefaultValueType */ "a"])(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !_utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_6__[/* camelCaseAttributes */ "a"].has(key) ? Object(_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_5__[/* camelToDash */ "a"])(key) : key;
        return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_2__[/* scrapeMotionValuesFromProps */ "a"],
    build: function (_element, renderState, latestValues, projection, layoutState, options, props) {
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__[/* buildSVGAttrs */ "a"])(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__[/* buildLayoutProjectionTransform */ "a"] : undefined, isProjectionTranform
            ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__[/* buildLayoutProjectionTransformOrigin */ "b"]
            : undefined);
    }, render: _utils_render_js__WEBPACK_IMPORTED_MODULE_8__[/* renderSVG */ "a"] }));




/***/ }),

/***/ "YQkc":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/drag.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: drag */
/*! exports used: drag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drag; });
/* harmony import */ var _gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/drag/use-drag.js */ "Dy76");
/* harmony import */ var _gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.js */ "2WEo");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "HWGT");




var drag = {
    pan: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__[/* makeRenderlessComponent */ "a"])(_gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__[/* usePanGesture */ "a"]),
    drag: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__[/* makeRenderlessComponent */ "a"])(_gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_0__[/* useDrag */ "a"]),
};




/***/ }),

/***/ "Ydnp":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: calcSVGTransformOrigin */
/*! exports used: calcSVGTransformOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcSVGTransformOrigin; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "IGs+");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* px */ "d"].transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}




/***/ }),

/***/ "Z5EU":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: createLock, getGlobalLock, isDragActive */
/*! exports used: getGlobalLock, isDragActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createLock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobalLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDragActive; });
function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "ZFqS":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/is-animatable.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: isAnimatable */
/*! exports used: isAnimatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAnimatable; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "NN0J");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* complex */ "a"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "ZqXb":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: isKeyframesTarget */
/*! exports used: isKeyframesTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isKeyframesTarget; });
var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};




/***/ }),

/***/ "b5yH":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: isAnimationControls */
/*! exports used: isAnimationControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAnimationControls; });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "bLeo":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/animation-state.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: createAnimationState, variantPriorityOrder, variantsHaveChanged */
/*! exports used: createAnimationState, variantPriorityOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAnimationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return variantPriorityOrder; });
/* unused harmony export variantsHaveChanged */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "b5yH");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.js */ "ZqXb");
/* harmony import */ var _utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/shallow-compare.js */ "sz48");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation.js */ "4JHn");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "yCfH");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variants.js */ "OJpj");








var variantPriorityOrder = [
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Animate,
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Hover,
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Tap,
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Drag,
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Focus,
    _types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Exit,
];
var reversePriorityOrder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function (animations) {
        return Promise.all(animations.map(function (_a) {
            var animation = _a.animation, options = _a.options;
            return Object(_animation_js__WEBPACK_IMPORTED_MODULE_4__[/* animateVisualElement */ "a"])(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    var buildResolvedTypeValues = function (acc, definition) {
        var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__[/* resolveVariant */ "e"])(visualElement, definition);
        if (resolved) {
            resolved.transition; var transitionEnd = resolved.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(resolved, ["transition", "transitionEnd"]);
            acc = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, acc), target), transitionEnd);
        }
        return acc;
    };
    function isAnimated(key) {
        return allAnimatedKeys[key] !== undefined;
    }
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        var props = visualElement.getProps();
        var context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            var propIsVariant = Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__[/* isVariantLabel */ "c"])(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_1__[/* isAnimationControls */ "a"])(prop) ||
                typeof prop === "boolean") {
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            var definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
            var allKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, prevResolvedValues), resolvedValues);
            var markToAnimate = function (key) {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (var key in allKeys) {
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if (Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__[/* isKeyframesTarget */ "a"])(next) && Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__[/* isKeyframesTarget */ "a"])(prev)) {
                        if (!Object(_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__[/* shallowCompare */ "a"])(next, prev)) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, encounteredKeys), resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push.apply(animations, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(definitionList.map(function (animation) { return ({
                    animation: animation,
                    options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ type: type }, options),
                }); }))));
            }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
            _loop_1(i);
        }
        allAnimatedKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, encounteredKeys);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            var fallbackAnimation_1 = {};
            removedKeys.forEach(function (key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation_1[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        return animateChanges(options, type);
    }
    return {
        isAnimated: isAnimated,
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function () { return state; },
    };
}
function variantsHaveChanged(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__[/* isVariantLabels */ "d"])(next)) {
        return !Object(_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__[/* shallowCompare */ "a"])(next, prev);
    }
    return false;
}
function createTypeState(isActive) {
    if (isActive === void 0) { isActive = false; }
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    var _a;
    return _a = {},
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Animate] = createTypeState(true),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Hover] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Tap] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Drag] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Focus] = createTypeState(),
        _a[_types_js__WEBPACK_IMPORTED_MODULE_5__[/* AnimationType */ "a"].Exit] = createTypeState(),
        _a;
}




/***/ }),

/***/ "cI+i":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/events/use-dom-event.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: addDomEvent, useDomEvent */
/*! exports used: addDomEvent, useDomEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDomEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}




/***/ }),

/***/ "cX1E":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/time-conversion.js ***!
  \********************************************************************************************************************************/
/*! exports provided: secondsToMilliseconds */
/*! exports used: secondsToMilliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secondsToMilliseconds; });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };




/***/ }),

/***/ "cfOk":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: VisualElementDragControls, elementDragControls */
/*! exports used: VisualElementDragControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualElementDragControls; });
/* unused harmony export elementDragControls */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "cVtW");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PanSession.js */ "zQZ6");
/* harmony import */ var _utils_lock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/lock.js */ "Z5EU");
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "OmUF");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/use-pointer-event.js */ "tjOG");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "cI+i");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events/event-info.js */ "3Ddo");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "fnZ6");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/each-axis.js */ "yM6x");
/* harmony import */ var _utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/constraints.js */ "8Qy2");
/* harmony import */ var _render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../render/dom/projection/measure.js */ "pSdq");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "D5AQ");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "gXOV");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../render/utils/types.js */ "yCfH");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../render/dom/projection/utils.js */ "yuMh");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! popmotion */ "UqkS");
/* harmony import */ var _render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../render/dom/projection/convert-to-relative.js */ "d1DO");
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../motion/features/layout/utils.js */ "Sg46");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../render/dom/utils/batch-layout.js */ "u1pq");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! framesync */ "aJ2Q");






















var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * The per-axis resolved elastic values.
         *
         * @internal
         */
        this.elastic = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__[/* axisBox */ "a"])();
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        var onSessionStart = function (event) {
            var _a;
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
            /**
             * Save the initial point. We'll use this to calculate the pointer's position rather
             * than the one we receive when the gesture actually starts. By then, the pointer will
             * have already moved, and the perception will be of the pointer "slipping" across the element
             */
            var initialPoint = Object(_events_event_info_js__WEBPACK_IMPORTED_MODULE_7__[/* getViewportPointFromEvent */ "b"])(event).point;
            (_a = _this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(_this);
            _this.cancelLayout = Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__[/* batchLayout */ "a"])(function (read, write) {
                var ancestors = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* collectProjectingAncestors */ "a"])(_this.visualElement);
                var children = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* collectProjectingChildren */ "b"])(_this.visualElement);
                var tree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(ancestors)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(children));
                var hasManuallySetCursorOrigin = false;
                /**
                 * Apply a simple lock to the projection target. This ensures no animations
                 * can run on the projection box while this lock is active.
                 */
                _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
                write(function () {
                    tree.forEach(function (element) { return element.resetTransform(); });
                });
                read(function () {
                    Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* updateLayoutMeasurement */ "d"])(_this.visualElement);
                    children.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* updateLayoutMeasurement */ "d"]);
                });
                write(function () {
                    tree.forEach(function (element) { return element.restoreTransform(); });
                    if (snapToCursor) {
                        hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
                    }
                });
                read(function () {
                    var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
                    if (!isRelativeDrag) {
                        _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
                    }
                    _this.visualElement.scheduleUpdateLayoutProjection();
                    /**
                     * When dragging starts, we want to find where the cursor is relative to the bounding box
                     * of the element. Every frame, we calculate a new bounding box using this relative position
                     * and let the visualElement renderer figure out how to reproject the element into this bounding
                     * box.
                     *
                     * By doing it this way, rather than applying an x/y transform directly to the element,
                     * we can ensure the component always visually sticks to the cursor as we'd expect, even
                     * if the DOM element itself changes layout as a result of React updates the user might
                     * make based on the drag position.
                     */
                    var projection = _this.visualElement.projection;
                    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
                        if (!hasManuallySetCursorOrigin) {
                            var _a = projection.target[axis], min = _a.min, max = _a.max;
                            _this.cursorProgress[axis] = cursorProgress
                                ? cursorProgress[axis]
                                : Object(popmotion__WEBPACK_IMPORTED_MODULE_16__[/* progress */ "a"])(min, max, initialPoint[axis]);
                        }
                        /**
                         * If we have external drag MotionValues, record their origin point. On pointermove
                         * we'll apply the pan gesture offset directly to this value.
                         */
                        var axisValue = _this.getAxisMotionValue(axis);
                        if (axisValue) {
                            _this.originPoint[axis] = axisValue.get();
                        }
                    });
                });
                write(function () {
                    framesync__WEBPACK_IMPORTED_MODULE_20__[/* flushSync */ "c"].update();
                    framesync__WEBPACK_IMPORTED_MODULE_20__[/* flushSync */ "c"].preRender();
                    framesync__WEBPACK_IMPORTED_MODULE_20__[/* flushSync */ "c"].render();
                    framesync__WEBPACK_IMPORTED_MODULE_20__[/* flushSync */ "c"].postRender();
                });
                read(function () { return _this.resolveDragConstraints(); });
            });
        };
        var onStart = function (event, info) {
            var _a, _b, _c;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = Object(_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__[/* getGlobalLock */ "a"])(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__[/* flushLayout */ "b"])();
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
            (_c = _this.visualElement.animationState) === null || _c === void 0 ? void 0 : _c.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__[/* AnimationType */ "a"].Drag, true);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", info.point, offset);
            _this.updateAxis("y", info.point, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onSessionEnd = function (event, info) {
            return _this.stop(event, info);
        };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new _PanSession_js__WEBPACK_IMPORTED_MODULE_2__[/* PanSession */ "a"](originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onSessionEnd: onSessionEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        var layout = this.visualElement.getLayoutState().layoutCorrected;
        if (dragConstraints) {
            this.constraints = Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__[/* isRefObject */ "a"])(dragConstraints)
                ? this.resolveRefConstraints(layout, dragConstraints)
                : Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* calcRelativeConstraints */ "d"])(layout, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        this.elastic = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* resolveDragElastic */ "h"])(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
            Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* rebaseAxisConstraints */ "g"])(layout[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__[/* invariant */ "a"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = Object(_render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_11__[/* getBoundingBox */ "a"])(constraintsElement, transformPagePoint);
        var measuredConstraints = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* calcViewportConstraints */ "e"])(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints(Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__[/* convertAxisBoxToBoundingBox */ "b"])(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__[/* convertBoundingBoxToAxisBox */ "c"])(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        var _a, _b;
        this.visualElement.unlockProjectionTarget();
        (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__[/* AnimationType */ "a"].Drag, false);
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a, _b, _c;
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var velocity = info.velocity;
        this.animateDragEnd(velocity);
        (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (point) {
        var _this = this;
        return Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
            var drag = _this.props.drag;
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var box = _this.visualElement.getLayoutState().layout;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                return true;
            }
        }).includes(true);
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, point, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, point);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* applyConstraints */ "a"])(nextValue, this.constraints[axis], this.elastic[axis])
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, point) {
        var _a;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.getLayoutState().layout[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* calcConstrainedMinPoint */ "b"])(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.setProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? _utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* defaultElastic */ "f"] : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.isLayoutDrag = function () {
        return !this.getAxisMotionValue("x");
    };
    VisualElementDragControls.prototype.isExternalDrag = function () {
        var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
        return _dragX || _dragY;
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        /**
         * Everything beyond the drag gesture should be performed with
         * relative projection so children stay in sync with their parent element.
         */
        var isRelative = Object(_render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_17__[/* convertToRelativeProjection */ "a"])(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
        /**
         * If we had previously resolved constraints relative to the viewport,
         * we need to also convert those to a relative coordinate space for the animation
         */
        var constraints = this.constraints || {};
        if (isRelative &&
            Object.keys(constraints).length &&
            this.isLayoutDrag()) {
            var projectionParent = this.visualElement.getProjectionParent();
            if (projectionParent) {
                var relativeConstraints_1 = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_18__[/* calcRelativeOffset */ "a"])(projectionParent.projection.targetFinal, constraints);
                Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
                    var _a = relativeConstraints_1[axis], min = _a.min, max = _a.max;
                    constraints[axis] = {
                        min: isNaN(min) ? undefined : min,
                        max: isNaN(max) ? undefined : max,
                    };
                });
            }
        }
        var momentumAnimations = Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAnimation(axis, inertia, isRelative);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_13__[/* startAnimation */ "b"])(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__[/* isRefObject */ "a"])(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
            boxProgress[axis] = Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_12__[/* calcOrigin */ "a"])(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.updateConstraints(function () {
            Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__[/* eachAxis */ "a"])(function (axis) {
                if (!shouldDrag(axis, drag, null))
                    return;
                // Calculate the position of the targetBox relative to the constraintsBox using the
                // previously calculated progress
                var _a = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__[/* calcPositionFromProgress */ "c"])(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
                _this.visualElement.setProjectionTargetAxis(axis, min, max);
            });
        });
        /**
         * If any other draggable components are queuing the same tasks synchronously
         * this will wait until they've all been scheduled before flushing.
         */
        setTimeout(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__[/* flushLayout */ "b"], 1);
    };
    VisualElementDragControls.prototype.updateConstraints = function (onReady) {
        var _this = this;
        this.cancelLayout = Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__[/* batchLayout */ "a"])(function (read, write) {
            var ancestors = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* collectProjectingAncestors */ "a"])(_this.visualElement);
            write(function () {
                return ancestors.forEach(function (element) { return element.resetTransform(); });
            });
            read(function () { return Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__[/* updateLayoutMeasurement */ "d"])(_this.visualElement); });
            write(function () {
                return ancestors.forEach(function (element) { return element.restoreTransform(); });
            });
            read(function () {
                _this.resolveDragConstraints();
            });
            if (onReady)
                write(onReady);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__[/* addPointerEvent */ "a"])(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_6__[/* addDomEvent */ "a"])(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging) {
                _this.resolveDragConstraints();
            }
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevDragCursor = visualElement.prevDragCursor;
        if (prevDragCursor) {
            this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
        }
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "d1DO":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: convertToRelativeProjection */
/*! exports used: convertToRelativeProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertToRelativeProjection; });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "Sg46");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "yM6x");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/geometry/delta-apply.js */ "1Ont");




/**
 * Returns a boolean stating whether or not we converted the projection
 * to relative projection.
 */
function convertToRelativeProjection(visualElement, isLayoutDrag) {
    if (isLayoutDrag === void 0) { isLayoutDrag = true; }
    var projectionParent = visualElement.getProjectionParent();
    if (!projectionParent)
        return false;
    var offset;
    if (isLayoutDrag) {
        offset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__[/* calcRelativeOffset */ "a"])(projectionParent.projection.target, visualElement.projection.target);
        Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_2__[/* removeBoxTransforms */ "c"])(offset, projectionParent.getLatestValues());
    }
    else {
        offset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__[/* calcRelativeOffset */ "a"])(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
    }
    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__[/* eachAxis */ "a"])(function (axis) {
        return visualElement.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
    });
    return true;
}




/***/ }),

/***/ "djcL":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/animations.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: animations */
/*! exports used: animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "b5yH");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "tE4L");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "ey9W");
/* harmony import */ var _render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/animation-state.js */ "bLeo");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/types.js */ "yCfH");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "HWGT");









var animations = {
    animation: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__[/* makeRenderlessComponent */ "a"])(function (_a) {
        var visualElement = _a.visualElement, animate = _a.animate;
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = Object(_render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_5__[/* createAnimationState */ "a"])(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if (Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__[/* isAnimationControls */ "a"])(animate)) {
            Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return animate.subscribe(visualElement); }, [animate]);
        }
    }),
    exit: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__[/* makeRenderlessComponent */ "a"])(function (props) {
        var custom = props.custom, visualElement = props.visualElement;
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__[/* usePresence */ "b"])(), 2), isPresent = _a[0], onExitComplete = _a[1];
        var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_4__[/* PresenceContext */ "a"]);
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var _a, _b;
            var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__[/* AnimationType */ "a"].Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
            !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
        }, [isPresent]);
    }),
};




/***/ }),

/***/ "el7g":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: getValueAsType */
/*! exports used: getValueAsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getValueAsType; });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "ey9W":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/PresenceContext.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: PresenceContext */
/*! exports used: PresenceContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresenceContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);




/***/ }),

/***/ "f5ck":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/utils/event-type.js ***!
  \************************************************************************************************************************************/
/*! exports provided: isMouseEvent, isTouchEvent */
/*! exports used: isMouseEvent, isTouchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isTouchEvent; });
function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}




/***/ }),

/***/ "fWZv":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/build-styles.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: buildHTMLStyles */
/*! exports used: buildHTMLStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildHTMLStyles; });
/* harmony import */ var _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/projection/scale-correction.js */ "VgKG");
/* harmony import */ var _build_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-transform.js */ "qf0p");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.js */ "5tO3");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "loru");
/* harmony import */ var _dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.js */ "el7g");
/* harmony import */ var _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dom/value-types/number.js */ "RR/9");







function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (Object(_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__[/* isCSSVariable */ "a"])(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_5__[/* numberValueTypes */ "a"][key];
        var valueAsType = Object(_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_4__[/* getValueAsType */ "a"])(value, valueType);
        if (Object(_transform_js__WEBPACK_IMPORTED_MODULE_3__[/* isTransformProp */ "b"])(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if (Object(_transform_js__WEBPACK_IMPORTED_MODULE_3__[/* isTransformOriginProp */ "a"])(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            /**
             * If layout projection is on, and we need to perform scale correction for this
             * value type, perform it.
             */
            if ((projection === null || projection === void 0 ? void 0 : projection.isHydrated) &&
                (layoutState === null || layoutState === void 0 ? void 0 : layoutState.isHydrated) &&
                _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__[/* valueScaleCorrection */ "b"][key]) {
                var correctedValue = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__[/* valueScaleCorrection */ "b"][key].process(value, layoutState, projection);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__[/* valueScaleCorrection */ "b"][key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        style[applyTo[i]] = correctedValue;
                    }
                }
                else {
                    style[key] = correctedValue;
                }
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (layoutState &&
        projection &&
        buildProjectionTransform &&
        buildProjectionTransformOrigin) {
        style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : undefined);
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildProjectionTransformOrigin(layoutState);
    }
    else {
        if (hasTransform) {
            style.transform = Object(_build_transform_js__WEBPACK_IMPORTED_MODULE_1__[/* buildTransform */ "a"])(state, options, transformIsNone, transformTemplate);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = Object(_build_transform_js__WEBPACK_IMPORTED_MODULE_1__[/* buildTransformOrigin */ "b"])(transformOrigin);
        }
    }
}




/***/ }),

/***/ "fai2":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/SharedLayoutContext.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: FramerTreeLayoutContext, SharedLayoutContext, isSharedLayout */
/*! exports used: FramerTreeLayoutContext, SharedLayoutContext, isSharedLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FramerTreeLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SharedLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSharedLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnimateSharedLayout/utils/batcher.js */ "XcfJ");



var SharedLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(Object(_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__[/* createBatcher */ "a"])());
/**
 * @internal
 */
var FramerTreeLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(Object(_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__[/* createBatcher */ "a"])());
function isSharedLayout(context) {
    return !!context.forceUpdate;
}




/***/ }),

/***/ "fnZ6":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/geometry/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: axisBox, convertAxisBoxToBoundingBox, convertBoundingBoxToAxisBox, copyAxisBox, delta, transformBoundingBox */
/*! exports used: axisBox, convertAxisBoxToBoundingBox, convertBoundingBoxToAxisBox, copyAxisBox, delta, transformBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertAxisBoxToBoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertBoundingBoxToAxisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return copyAxisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return transformBoundingBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "O//8");



/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = _noop_js__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "a"]; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, box.x),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, zeroDelta),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, zeroDelta),
    };
}




/***/ }),

/***/ "fsnc":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: parseDomVariant */
/*! exports used: parseDomVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseDomVariant; });
/* harmony import */ var _css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.js */ "ixEo");
/* harmony import */ var _unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.js */ "lXv+");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = Object(_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__[/* resolveCSSVariables */ "b"])(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return Object(_unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__[/* unitConversion */ "a"])(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "gJo0":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: correctBorderRadius, correctBoxShadow, defaultScaleCorrectors, pixelsToPercent */
/*! exports used: defaultScaleCorrectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctBorderRadius */
/* unused harmony export correctBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultScaleCorrectors; });
/* unused harmony export pixelsToPercent */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "IGs+");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "NN0J");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "D9XU");
/* harmony import */ var _utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/css-variables-conversion.js */ "ixEo");





function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, _layoutState, _a) {
    var target = _a.target;
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* px */ "d"].test(latest)) {
            latest = parseFloat(latest);
        }
        else {
            return latest;
        }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, target.x);
    var y = pixelsToPercent(latest, target.y);
    return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _a) {
    var delta = _a.delta, treeScale = _a.treeScale;
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
        latest = latest.replace(_utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_4__[/* cssVariableRegex */ "a"], function (match) {
            cssVariables.push(match);
            return varToken;
        });
    }
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* complex */ "a"].parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5)
        return original;
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* complex */ "a"].createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[/* mix */ "a"])(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
            var cssVariable = cssVariables[i_1];
            i_1++;
            return cssVariable;
        });
    }
    return output;
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var defaultScaleCorrectors = {
    borderRadius: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};




/***/ }),

/***/ "gUCf":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/definitions.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: featureDefinitions, loadFeatures */
/*! exports used: featureDefinitions, loadFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return featureDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadFeatures; });
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition([
        "layout",
        "layoutId",
        "drag",
        "_layoutResetTransform",
    ]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    layoutAnimation: createDefinition(["layout", "layoutId"]),
};
function loadFeatures(features) {
    for (var key in features) {
        var Component = features[key];
        if (Component !== null)
            featureDefinitions[key].Component = Component;
    }
}




/***/ }),

/***/ "gXOV":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/transitions.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: convertTransitionToAnimationOptions, getDelayFromTransition, getPopmotionAnimationOptions, getValueTransition, getZeroUnit, hydrateKeyframes, isTransitionDefined, isZero, startAnimation */
/*! exports used: getValueTransition, startAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertTransitionToAnimationOptions */
/* unused harmony export getDelayFromTransition */
/* unused harmony export getPopmotionAnimationOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getValueTransition; });
/* unused harmony export getZeroUnit */
/* unused harmony export hydrateKeyframes */
/* unused harmony export isTransitionDefined */
/* unused harmony export isZero */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return startAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "7Ici");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "BmB5");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/time-conversion.js */ "cX1E");
/* harmony import */ var _easing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easing.js */ "geVP");
/* harmony import */ var _is_animatable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-animatable.js */ "ZFqS");
/* harmony import */ var _default_transitions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-transitions.js */ "iB5S");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hey-listen */ "cVtW");
/* harmony import */ var _render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.js */ "soPC");









/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    _a.when; _a.delay; _a.delayChildren; _a.staggerChildren; _a.staggerDirection; _a.repeat; _a.repeatType; _a.repeatDelay; _a.from; var transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, transition);
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_3__[/* secondsToMilliseconds */ "a"])(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_3__[/* secondsToMilliseconds */ "a"])(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = Object(_easing_js__WEBPACK_IMPORTED_MODULE_4__[/* isEasingArray */ "b"])(ease)
            ? ease.map(_easing_js__WEBPACK_IMPORTED_MODULE_4__[/* easingDefinitionToFunction */ "a"])
            : Object(_easing_js__WEBPACK_IMPORTED_MODULE_4__[/* easingDefinitionToFunction */ "a"])(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_7__[/* warning */ "b"])(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(options.to));
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, transition), Object(_default_transitions_js__WEBPACK_IMPORTED_MODULE_6__[/* getDefaultTransition */ "a"])(key, options.to));
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = Object(_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__[/* isAnimatable */ "a"])(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = Object(_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_8__[/* getAnimatableNone */ "a"])(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    var isOriginAnimatable = Object(_is_animatable_js__WEBPACK_IMPORTED_MODULE_5__[/* isAnimatable */ "a"])(key, origin);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_7__[/* warning */ "b"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* inertia */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, options), valueTransition))
            : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__[/* animate */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a;
        value.set(target);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : Object(_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_8__[/* getAnimatableNone */ "a"])("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_3__[/* secondsToMilliseconds */ "a"])(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}




/***/ }),

/***/ "geVP":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/easing.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: easingDefinitionToFunction, isEasingArray */
/*! exports used: easingDefinitionToFunction, isEasingArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return easingDefinitionToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEasingArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "cVtW");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "fGTS");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "gBps");




var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* linear */ "n"],
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* easeIn */ "k"],
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* easeInOut */ "l"],
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* easeOut */ "m"],
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* circIn */ "h"],
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* circInOut */ "i"],
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* circOut */ "j"],
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* backIn */ "b"],
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* backInOut */ "c"],
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* backOut */ "d"],
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* anticipate */ "a"],
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* bounceIn */ "e"],
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* bounceInOut */ "f"],
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_2__[/* bounceOut */ "g"],
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__[/* invariant */ "a"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[/* cubicBezier */ "a"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__[/* invariant */ "a"])(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "gkGT":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/config-motion.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: svgMotionConfig */
/*! exports used: svgMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return svgMotionConfig; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render.js */ "kNKl");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "LXGA");
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "8xU7");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.js */ "wzAs");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.js */ "7wiS");






var svgMotionConfig = {
    useVisualState: Object(_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_2__[/* makeUseVisualState */ "a"])({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__[/* scrapeMotionValuesFromProps */ "a"],
        createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__[/* createSvgRenderState */ "a"],
        onMount: function (props, instance, _a) {
            var renderState = _a.renderState, latestValues = _a.latestValues;
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            if (isPath(instance)) {
                renderState.totalPathLength = instance.getTotalLength();
            }
            Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__[/* buildSVGAttrs */ "a"])(renderState, latestValues, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
            // TODO: Replace with direct assignment
            Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__[/* renderSVG */ "a"])(instance, renderState);
        },
    }),
};
function isPath(element) {
    return element.tagName === "path";
}




/***/ }),

/***/ "hgaj":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: auto */
/*! exports used: auto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};




/***/ }),

/***/ "iB5S":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/animation/utils/default-transitions.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: criticallyDampedSpring, getDefaultTransition, linearTween, underDampedSpring */
/*! exports used: getDefaultTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export criticallyDampedSpring */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDefaultTransition; });
/* unused harmony export linearTween */
/* unused harmony export underDampedSpring */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-keyframes-target.js */ "ZqXb");



var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var criticallyDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (Object(_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_1__[/* isKeyframesTarget */ "a"])(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ to: to }, transitionFactory(to));
};




/***/ }),

/***/ "iHaZ":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/use-props.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: useSVGProps */
/*! exports used: useSVGProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSVGProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/use-props.js */ "RjtN");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.js */ "7wiS");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/create-render-state.js */ "wzAs");






function useSVGProps(props, visualState) {
    var visualProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var state = Object(_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_4__[/* createSvgRenderState */ "a"])();
        Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__[/* buildSVGAttrs */ "a"])(state, visualState, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, state.attrs), { style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        Object(_html_use_props_js__WEBPACK_IMPORTED_MODULE_2__[/* copyRawValuesOnly */ "a"])(rawStyles, props.style, props);
        visualProps.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rawStyles), visualProps.style);
    }
    return visualProps;
}




/***/ }),

/***/ "iv3Y":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/find.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: findValueType */
/*! exports used: findValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findValueType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "LE4C");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "NN0J");
/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensions.js */ "sOMy");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.js */ "qzlZ");





/**
 * A list of all ValueTypes
 */
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_dimensions_js__WEBPACK_IMPORTED_MODULE_3__[/* dimensionValueTypes */ "a"])), [style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* complex */ "a"]]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find(Object(_test_js__WEBPACK_IMPORTED_MODULE_4__[/* testValueType */ "a"])(v)); };




/***/ }),

/***/ "ixEo":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: cssVariableRegex, parseCSSVariable, resolveCSSVariables */
/*! exports used: cssVariableRegex, resolveCSSVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssVariableRegex; });
/* unused harmony export parseCSSVariable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolveCSSVariables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "cVtW");



function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__[/* invariant */ "a"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "jXJC":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/MotionContext/utils.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: getCurrentTreeVariants */
/*! exports used: getCurrentTreeVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentTreeVariants; });
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.js */ "OJpj");


function getCurrentTreeVariants(props, context) {
    if (Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__[/* checkIfControllingVariants */ "a"])(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__[/* isVariantLabel */ "c"])(initial)
                ? initial
                : undefined,
            animate: Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__[/* isVariantLabel */ "c"])(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "jcGD":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: defaultValueTypes, getDefaultValueType */
/*! exports used: getDefaultValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultValueTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDefaultValueType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "LE4C");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "/47t");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "RR/9");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _number_js__WEBPACK_IMPORTED_MODULE_3__[/* numberValueTypes */ "a"]), { 
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], 
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* color */ "a"], filter: style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* filter */ "a"], WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* filter */ "a"] });
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };




/***/ }),

/***/ "kNKl":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/render.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: renderSVG */
/*! exports used: renderSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderSVG; });
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.js */ "mCRY");
/* harmony import */ var _html_utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/render.js */ "zhCj");
/* harmony import */ var _camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camel-case-attrs.js */ "EvRE");




function renderSVG(element, renderState) {
    Object(_html_utils_render_js__WEBPACK_IMPORTED_MODULE_1__[/* renderHTML */ "a"])(element, renderState);
    for (var key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_2__[/* camelCaseAttributes */ "a"].has(key) ? Object(_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_0__[/* camelToDash */ "a"])(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "kX78":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: isSVGComponent */
/*! exports used: isSVGComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSVGComponent; });
/* harmony import */ var _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.js */ "nhcx");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__[/* lowercaseSVGElements */ "a"].indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "kjKA":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/MotionContext/create.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: useCreateMotionContext */
/*! exports used: useCreateMotionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCreateMotionContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "XC9P");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "jXJC");




function useCreateMotionContext(props, isStatic) {
    var _a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* getCurrentTreeVariants */ "a"])(props, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index_js__WEBPACK_IMPORTED_MODULE_1__[/* MotionContext */ "a"])), initial = _a.initial, animate = _a.animate;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({ initial: initial, animate: animate }); }, 
    /**
     * Only break memoisation in static mode
     */
    isStatic
        ? [
            variantLabelsAsDependency(initial),
            variantLabelsAsDependency(animate),
        ]
        : []);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "lLdc":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: Presence, VisibilityAction */
/*! exports used: Presence, VisibilityAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Presence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisibilityAction; });
/**
 * @public
 */
var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
 * @public
 */
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));




/***/ }),

/***/ "lQss":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: setCurrentViewportBox */
/*! exports used: setCurrentViewportBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setCurrentViewportBox; });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "Sg46");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "yM6x");



function setCurrentViewportBox(visualElement) {
    var projectionParent = visualElement.getProjectionParent();
    if (!projectionParent) {
        visualElement.rebaseProjectionTarget();
        return;
    }
    var relativeOffset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__[/* calcRelativeOffset */ "a"])(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__[/* eachAxis */ "a"])(function (axis) {
        visualElement.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
    });
}




/***/ }),

/***/ "lXv+":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: BoundingBoxDimension, unitConversion */
/*! exports used: unitConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BoundingBoxDimension */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unitConversion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "xnaF");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "IGs+");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.js */ "ZqXb");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "cVtW");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../html/utils/transform.js */ "loru");
/* harmony import */ var _value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../value-types/dimensions.js */ "sOMy");







var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* number */ "b"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* px */ "d"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_5__[/* transformProps */ "d"].filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.measureViewportBox();
    var element = visualElement.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    var targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_6__[/* findDimensionValueType */ "b"])(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_3__[/* isKeyframesTarget */ "a"])(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_6__[/* findDimensionValueType */ "b"])(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__[/* invariant */ "a"])(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__[/* invariant */ "a"])(Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_6__[/* findDimensionValueType */ "b"])(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_6__[/* findDimensionValueType */ "b"])(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_2__[/* px */ "d"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "loru":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/transform.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: isTransformOriginProp, isTransformProp, sortTransformProps, transformAxes, transformProps */
/*! exports used: isTransformOriginProp, isTransformProp, sortTransformProps, transformProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTransformOriginProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isTransformProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sortTransformProps; });
/* unused harmony export transformAxes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transformProps; });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}




/***/ }),

/***/ "mCRY":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: camelToDash */
/*! exports used: camelToDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelToDash; });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};




/***/ }),

/***/ "n4oP":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/visual-element.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: getComputedStyle, htmlConfig, htmlVisualElement */
/*! exports used: htmlConfig, htmlVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getComputedStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return htmlVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "zxV/");
/* harmony import */ var _utils_setters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/setters.js */ "ALTg");
/* harmony import */ var _dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/projection/measure.js */ "pSdq");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "fWZv");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/is-css-variable.js */ "5tO3");
/* harmony import */ var _dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.js */ "fsnc");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/transform.js */ "loru");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "znsw");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.js */ "zhCj");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "jcGD");
/* harmony import */ var _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/build-projection-transform.js */ "wnxH");













function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function (domElement, key) {
        if (Object(_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__[/* isTransformProp */ "b"])(key)) {
            var defaultType = Object(_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_10__[/* getDefaultValueType */ "a"])(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            var computedStyle = getComputedStyle(domElement);
            return ((Object(_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_5__[/* isCSSVariable */ "a"])(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0);
        }
    },
    sortNodePosition: function (a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function (props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function (element, _a) {
        var transformPagePoint = _a.transformPagePoint;
        return Object(_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__[/* getBoundingBox */ "a"])(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function (element, domElement, props) {
        var transformTemplate = props.transformTemplate;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform: function (instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function (key, _a) {
        var vars = _a.vars, style = _a.style;
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function (element, _a, _b, isMounted) {
        var transformValues = _b.transformValues;
        if (isMounted === void 0) { isMounted = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["transition", "transitionEnd"]);
        var origin = Object(_utils_setters_js__WEBPACK_IMPORTED_MODULE_2__[/* getOrigin */ "b"])(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            Object(_utils_setters_js__WEBPACK_IMPORTED_MODULE_2__[/* checkTargetForNewValues */ "a"])(element, target, origin);
            var parsed = Object(_dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__[/* parseDomVariant */ "a"])(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ transition: transition,
            transitionEnd: transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_8__[/* scrapeMotionValuesFromProps */ "a"],
    build: function (element, renderState, latestValues, projection, layoutState, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        Object(_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__[/* buildHTMLStyles */ "a"])(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__[/* buildLayoutProjectionTransform */ "a"] : undefined, isProjectionTranform
            ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__[/* buildLayoutProjectionTransformOrigin */ "b"]
            : undefined);
    },
    render: _utils_render_js__WEBPACK_IMPORTED_MODULE_9__[/* renderHTML */ "a"],
};
var htmlVisualElement = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__[/* visualElement */ "a"])(htmlConfig);




/***/ }),

/***/ "nhcx":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: lowercaseSVGElements */
/*! exports used: lowercaseSVGElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lowercaseSVGElements; });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "nzWz":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: useFocusGesture */
/*! exports used: useFocusGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFocusGesture; });
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.js */ "yCfH");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.js */ "cI+i");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement = _a.visualElement;
    var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__[/* AnimationType */ "a"].Focus, true);
    };
    var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__[/* AnimationType */ "a"].Focus, false);
    };
    Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__[/* useDomEvent */ "b"])(visualElement, "focus", whileFocus ? onFocus : undefined);
    Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__[/* useDomEvent */ "b"])(visualElement, "blur", whileFocus ? onBlur : undefined);
}




/***/ }),

/***/ "o4VW":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/create-visual-element.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: createDomVisualElement */
/*! exports used: createDomVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDomVisualElement; });
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/visual-element.js */ "n4oP");
/* harmony import */ var _svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.js */ "YOCv");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "kX78");




var createDomVisualElement = function (Component, options) {
    return Object(_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_2__[/* isSVGComponent */ "a"])(Component)
        ? Object(_svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__[/* svgVisualElement */ "a"])(options, { enableHardwareAcceleration: false })
        : Object(_html_visual_element_js__WEBPACK_IMPORTED_MODULE_0__[/* htmlVisualElement */ "b"])(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "pSdq":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/measure.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: getBoundingBox */
/*! exports used: getBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBoundingBox; });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "fnZ6");


/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* convertBoundingBoxToAxisBox */ "c"])(Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__[/* transformBoundingBox */ "f"])(box, transformPagePoint));
}




/***/ }),

/***/ "qO4Q":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: filterProps */
/*! exports used: filterProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterProps; });
/* harmony import */ var _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.js */ "/1Jk");


var shouldForward = function (key) { return !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__[/* isValidMotionProp */ "a"])(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "CFp/").default;
    shouldForward = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__[/* isValidMotionProp */ "a"])(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__[/* isValidMotionProp */ "a"])(key)) ||
            (!isDom && !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__[/* isValidMotionProp */ "a"])(key))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "qf0p":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/build-transform.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: buildTransform, buildTransformOrigin */
/*! exports used: buildTransform, buildTransformOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buildTransformOrigin; });
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.js */ "loru");


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(_transform_js__WEBPACK_IMPORTED_MODULE_0__[/* sortTransformProps */ "c"]);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}




/***/ }),

/***/ "qzlZ":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/test.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: testValueType */
/*! exports used: testValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testValueType; });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };




/***/ }),

/***/ "rpfO":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/use-transform.js ***!
  \******************************************************************************************************************************/
/*! exports provided: useTransform */
/*! exports used: useTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/transform.js */ "zEtN");
/* harmony import */ var _use_combine_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-combine-values.js */ "yHOS");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-constant.js */ "xRhE");





function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    var transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : Object(_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__[/* transform */ "a"])(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_a, 1), latest = _b[0];
            return transformer(latest);
        });
}
function useListTransform(values, transformer) {
    var latest = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__[/* useConstant */ "a"])(function () { return []; });
    return Object(_use_combine_values_js__WEBPACK_IMPORTED_MODULE_2__[/* useCombineMotionValues */ "a"])(values, function () {
        latest.length = 0;
        var numValues = values.length;
        for (var i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}




/***/ }),

/***/ "sOMy":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: dimensionValueTypes, findDimensionValueType */
/*! exports used: dimensionValueTypes, findDimensionValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dimensionValueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findDimensionValueType; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "xnaF");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "IGs+");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.js */ "qzlZ");
/* harmony import */ var _type_auto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-auto.js */ "hgaj");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* number */ "b"], style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* px */ "d"], style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* percent */ "b"], style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* degrees */ "a"], style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* vw */ "f"], style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* vh */ "e"], _type_auto_js__WEBPACK_IMPORTED_MODULE_3__[/* auto */ "a"]];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find(Object(_test_js__WEBPACK_IMPORTED_MODULE_2__[/* testValueType */ "a"])(v));
};




/***/ }),

/***/ "sRQv":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/use-force-update.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: useForceUpdate */
/*! exports used: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceUpdate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-unmount-effect.js */ "IzYB");




function useForceUpdate() {
    var unloadingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    Object(_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__[/* useUnmountEffect */ "a"])(function () { return (unloadingRef.current = true); });
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
}




/***/ }),

/***/ "sj4y":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/lifecycles.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: createLifecycles */
/*! exports used: createLifecycles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLifecycles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/subscription-manager.js */ "CRHf");



var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    var managers = names.map(function () { return new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__[/* SubscriptionManager */ "a"](); });
    var propSubscriptions = {};
    var lifecycles = {
        clearAllListeners: function () { return managers.forEach(function (manager) { return manager.clear(); }); },
        updatePropListeners: function (props) {
            return names.forEach(function (name) {
                var _a;
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                var on = "on" + name;
                var propListener = props[on];
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach(function (manager, i) {
        lifecycles["on" + names[i]] = function (handler) { return manager.add(handler); };
        lifecycles["notify" + names[i]] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return manager.notify.apply(manager, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(args)));
        };
    });
    return lifecycles;
}




/***/ }),

/***/ "soPC":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: getAnimatableNone */
/*! exports used: getAnimatableNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAnimatableNone; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "/47t");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "NN0J");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "jcGD");



function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* getDefaultValueType */ "a"])(key);
    if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_0__[/* filter */ "a"])
        defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_1__[/* complex */ "a"];
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}




/***/ }),

/***/ "sz48":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/shallow-compare.js ***!
  \********************************************************************************************************************************/
/*! exports provided: shallowCompare */
/*! exports used: shallowCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shallowCompare; });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "t36y":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/context/LazyContext.js ***!
  \******************************************************************************************************************************/
/*! exports provided: LazyContext */
/*! exports used: LazyContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LazyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({ strict: false });




/***/ }),

/***/ "tE4L":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: isPresent, useIsPresent, usePresence */
/*! exports used: isPresent, usePresence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPresent; });
/* unused harmony export useIsPresent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usePresence; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "ey9W");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "xRhE");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__[/* PresenceContext */ "a"]);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent(Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__[/* PresenceContext */ "a"]));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__[/* useConstant */ "a"])(incrementId); };




/***/ }),

/***/ "tVG0":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/use-reduced-motion.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: useReducedMotion */
/*! exports used: useReducedMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useReducedMotion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../value/index.js */ "JOb6");
/* harmony import */ var _value_use_on_change_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value/use-on-change.js */ "+4RR");





// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion;
function initPrefersReducedMotion() {
    prefersReducedMotion = Object(_value_index_js__WEBPACK_IMPORTED_MODULE_2__[/* motionValue */ "a"])(null);
    if (typeof window === "undefined")
        return;
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */
    !prefersReducedMotion && initPrefersReducedMotion();
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(prefersReducedMotion.get()), 2), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    Object(_value_use_on_change_js__WEBPACK_IMPORTED_MODULE_3__[/* useOnChange */ "b"])(prefersReducedMotion, setShouldReduceMotion);
    return shouldReduceMotion;
}




/***/ }),

/***/ "tjOG":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/events/use-pointer-event.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: addPointerEvent, usePointerEvent */
/*! exports used: addPointerEvent, usePointerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usePointerEvent; });
/* harmony import */ var _use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-dom-event.js */ "cI+i");
/* harmony import */ var _event_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.js */ "3Ddo");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "F1M1");




var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* supportsPointerEvents */ "b"])()) {
        return name;
    }
    else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* supportsTouchEvents */ "c"])()) {
        return touchEventNames[name];
    }
    else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* supportsMouseEvents */ "a"])()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return Object(_use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__[/* addDomEvent */ "a"])(target, getPointerEventName(eventName), Object(_event_info_js__WEBPACK_IMPORTED_MODULE_1__[/* wrapHandler */ "c"])(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return Object(_use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__[/* useDomEvent */ "b"])(ref, getPointerEventName(eventName), handler && Object(_event_info_js__WEBPACK_IMPORTED_MODULE_1__[/* wrapHandler */ "c"])(handler, eventName === "pointerdown"), options);
}




/***/ }),

/***/ "u1pq":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: batchLayout, flushLayout */
/*! exports used: batchLayout, flushLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return batchLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flushLayout; });
var unresolvedJobs = new Set();
function pushJob(stack, job, pointer) {
    if (!stack[pointer])
        stack[pointer] = [];
    stack[pointer].push(job);
}
function batchLayout(callback) {
    unresolvedJobs.add(callback);
    return function () { return unresolvedJobs.delete(callback); };
}
function flushLayout() {
    if (!unresolvedJobs.size)
        return;
    var pointer = 0;
    var reads = [[]];
    var writes = [];
    var setRead = function (job) { return pushJob(reads, job, pointer); };
    var setWrite = function (job) {
        pushJob(writes, job, pointer);
        pointer++;
    };
    /**
     * Resolve jobs into their array stacks
     */
    unresolvedJobs.forEach(function (callback) {
        callback(setRead, setWrite);
        pointer = 0;
    });
    unresolvedJobs.clear();
    /**
     * Execute jobs
     */
    var numStacks = writes.length;
    for (var i = 0; i <= numStacks; i++) {
        reads[i] && reads[i].forEach(executeJob);
        writes[i] && writes[i].forEach(executeJob);
    }
}
var executeJob = function (job) { return job(); };




/***/ }),

/***/ "vWOW":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: resolveMotionValue */
/*! exports used: resolveMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveMotionValue; });
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "5j6t");
/* harmony import */ var _is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-motion-value.js */ "VeK9");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = Object(_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(value) ? value.get() : value;
    return Object(_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_0__[/* isCustomValue */ "a"])(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ }),

/***/ "wnxH":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: buildLayoutProjectionTransform, buildLayoutProjectionTransformOrigin, identityProjection */
/*! exports used: buildLayoutProjectionTransform, buildLayoutProjectionTransformOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildLayoutProjectionTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buildLayoutProjectionTransformOrigin; });
/* unused harmony export identityProjection */
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/state.js */ "H5CK");


/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(" + rotate + ") ";
        if (rotateX)
            transform += "rotateX(" + rotateX + ") ";
        if (rotateY)
            transform += "rotateY(" + rotateY + ") ";
    }
    transform += "scale(" + x.scale + ", " + y.scale + ")";
    return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var deltaFinal = _a.deltaFinal;
    return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(_utils_state_js__WEBPACK_IMPORTED_MODULE_0__[/* zeroLayout */ "c"].delta, _utils_state_js__WEBPACK_IMPORTED_MODULE_0__[/* zeroLayout */ "c"].treeScale, { x: 1, y: 1 });




/***/ }),

/***/ "wzAs":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: createSvgRenderState */
/*! exports used: createSvgRenderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSvgRenderState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.js */ "Q8RA");



var createSvgRenderState = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, Object(_html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__[/* createHtmlRenderState */ "a"])()), { attrs: {} })); };




/***/ }),

/***/ "xMup":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/layout/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: layoutAnimations */
/*! exports used: layoutAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return layoutAnimations; });
/* harmony import */ var _Animate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate.js */ "+nIh");
/* harmony import */ var _Measure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Measure.js */ "WfZt");



var layoutAnimations = {
    measureLayout: _Measure_js__WEBPACK_IMPORTED_MODULE_1__[/* MeasureContextProvider */ "a"],
    layoutAnimation: _Animate_js__WEBPACK_IMPORTED_MODULE_0__[/* AnimateLayoutContextProvider */ "a"],
};




/***/ }),

/***/ "xRhE":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/use-constant.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: useConstant */
/*! exports used: useConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useConstant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "yCfH":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/types.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: AnimationType */
/*! exports used: AnimationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationType; });
var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));




/***/ }),

/***/ "yHOS":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/value/use-combine-values.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: useCombineMotionValues */
/*! exports used: useCombineMotionValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCombineMotionValues; });
/* harmony import */ var _use_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-motion-value.js */ "AOjp");
/* harmony import */ var _use_on_change_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-on-change.js */ "+4RR");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "aJ2Q");




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    var value = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_0__[/* useMotionValue */ "a"])(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    var updateValue = function () { return value.set(combineValues()); };
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    Object(_use_on_change_js__WEBPACK_IMPORTED_MODULE_1__[/* useMultiOnChange */ "a"])(values, function () { return framesync__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].update(updateValue, false, true); });
    return value;
}




/***/ }),

/***/ "yM6x":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/each-axis.js ***!
  \**************************************************************************************************************************/
/*! exports provided: eachAxis */
/*! exports used: eachAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eachAxis; });
// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}




/***/ }),

/***/ "yXUS":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/motion/features/use-features.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: useFeatures */
/*! exports used: useFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFeatures; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.js */ "gUCf");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "cVtW");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/LazyContext.js */ "t36y");







var featureNames = Object.keys(_definitions_js__WEBPACK_IMPORTED_MODULE_2__[/* featureDefinitions */ "a"]);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_4__[/* LazyContext */ "a"]);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if ( true &&
        preloadedFeatures &&
        lazyContext.strict) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__[/* invariant */ "a"])(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = _definitions_js__WEBPACK_IMPORTED_MODULE_2__[/* featureDefinitions */ "a"][name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}




/***/ }),

/***/ "yics":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/motion-values.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: updateMotionValuesFromProps */
/*! exports used: updateMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateMotionValuesFromProps; });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.js */ "JOb6");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "VeK9");



function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
        var nextValue = next[key];
        var prevValue = prev[key];
        if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
        }
        else if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(prevValue)) {
            /**
             * If we're swapping to a new motion value, create a new motion value
             * from that
             */
            element.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__[/* motionValue */ "a"])(nextValue));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                element.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__[/* motionValue */ "a"])((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
            }
        }
    }
    // Handle removed values
    for (var key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "yuMh":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/dom/projection/utils.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: collectProjectingAncestors, collectProjectingChildren, snapshotViewportBox, updateLayoutMeasurement */
/*! exports used: collectProjectingAncestors, collectProjectingChildren, snapshotViewportBox, updateLayoutMeasurement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectProjectingAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return collectProjectingChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return snapshotViewportBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateLayoutMeasurement; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "aJ2Q");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "fnZ6");
/* harmony import */ var _utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/compare-by-depth.js */ "84eJ");




function isProjecting(visualElement) {
    var isEnabled = visualElement.projection.isEnabled;
    return isEnabled || visualElement.shouldResetTransform();
}
function collectProjectingAncestors(visualElement, ancestors) {
    if (ancestors === void 0) { ancestors = []; }
    var parent = visualElement.parent;
    if (parent)
        collectProjectingAncestors(parent, ancestors);
    if (isProjecting(visualElement))
        ancestors.push(visualElement);
    return ancestors;
}
function collectProjectingChildren(visualElement) {
    var children = [];
    var addChild = function (child) {
        if (isProjecting(child))
            children.push(child);
        child.children.forEach(addChild);
    };
    visualElement.children.forEach(addChild);
    return children.sort(_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__[/* compareByDepth */ "a"]);
}
/**
 * Update the layoutState by measuring the DOM layout. This
 * should be called after resetting any layout-affecting transforms.
 */
function updateLayoutMeasurement(visualElement) {
    if (visualElement.shouldResetTransform())
        return;
    var layoutState = visualElement.getLayoutState();
    visualElement.notifyBeforeLayoutMeasure(layoutState.layout);
    layoutState.isHydrated = true;
    layoutState.layout = visualElement.measureViewportBox();
    layoutState.layoutCorrected = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__[/* copyAxisBox */ "d"])(layoutState.layout);
    visualElement.notifyLayoutMeasure(layoutState.layout, visualElement.prevViewportBox || layoutState.layout);
    framesync__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].update(function () { return visualElement.rebaseProjectionTarget(); });
}
/**
 * Record the viewport box as it was before an expected mutation/re-render
 */
function snapshotViewportBox(visualElement) {
    if (visualElement.shouldResetTransform())
        return;
    visualElement.prevViewportBox = visualElement.measureViewportBox(false);
    /**
     * Update targetBox to match the prevViewportBox. This is just to ensure
     * that targetBox is affected by scroll in the same way as the measured box
     */
    visualElement.rebaseProjectionTarget(false, visualElement.prevViewportBox);
}




/***/ }),

/***/ "zA0s":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/utils/flat-tree.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: FlatTree */
/*! exports used: FlatTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatTree; });
/* harmony import */ var _utils_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.js */ "0PSf");
/* harmony import */ var _compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.js */ "84eJ");



var FlatTree = /** @class */ (function () {
    function FlatTree() {
        this.children = [];
        this.isDirty = false;
    }
    FlatTree.prototype.add = function (child) {
        Object(_utils_array_js__WEBPACK_IMPORTED_MODULE_0__[/* addUniqueItem */ "a"])(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.remove = function (child) {
        Object(_utils_array_js__WEBPACK_IMPORTED_MODULE_0__[/* removeItem */ "b"])(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.forEach = function (callback) {
        this.isDirty && this.children.sort(_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__[/* compareByDepth */ "a"]);
        this.isDirty = false;
        this.children.forEach(callback);
    };
    return FlatTree;
}());




/***/ }),

/***/ "zEtN":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/utils/transform.js ***!
  \**************************************************************************************************************************/
/*! exports provided: transform */
/*! exports used: transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "jzZ6");



var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__[/* interpolate */ "a"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}




/***/ }),

/***/ "zQZ6":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/gestures/PanSession.js ***!
  \******************************************************************************************************************************/
/*! exports provided: PanSession */
/*! exports used: PanSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/event-type.js */ "f5ck");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event-info.js */ "3Ddo");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "aJ2Q");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/time-conversion.js */ "cX1E");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "tjOG");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popmotion */ "eEvI");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "Kaa3");








/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(popmotion__WEBPACK_IMPORTED_MODULE_6__[/* distance */ "a"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__[/* getFrameData */ "d"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if (Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__[/* isMouseEvent */ "a"])(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            if (_this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__[/* isTouchEvent */ "b"])(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = Object(_events_event_info_js__WEBPACK_IMPORTED_MODULE_2__[/* extractEventInfo */ "a"])(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__[/* getFrameData */ "d"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = Object(popmotion__WEBPACK_IMPORTED_MODULE_7__[/* pipe */ "a"])(Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__[/* addPointerEvent */ "a"])(window, "pointermove", this.handlePointerMove), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__[/* addPointerEvent */ "a"])(window, "pointerup", this.handlePointerUp), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__[/* addPointerEvent */ "a"])(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_3__[/* cancelSync */ "a"].update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_4__[/* secondsToMilliseconds */ "a"])(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "zhCj":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/render.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: renderHTML */
/*! exports used: renderHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderHTML; });
function renderHTML(element, _a) {
    var style = _a.style, vars = _a.vars;
    // Directly assign style into the Element's style prop. In tests Object.assign is the
    // fastest way to assign styles.
    Object.assign(element.style, style);
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "znsw":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: scrapeMotionValuesFromProps */
/*! exports used: scrapeMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrapeMotionValuesFromProps; });
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.js */ "TXsS");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "VeK9");



function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__[/* isMotionValue */ "a"])(style[key]) || Object(_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_0__[/* isForcedMotionValue */ "a"])(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "zxV/":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/framer-motion/dist/es/render/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: visualElement */
/*! exports used: visualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return visualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "aJ2Q");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "Kaa3");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AnimateSharedLayout/types.js */ "lLdc");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/each-axis.js */ "yM6x");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/geometry/index.js */ "fnZ6");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/geometry/delta-apply.js */ "1Ont");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/geometry/delta-calc.js */ "D5AQ");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../value/index.js */ "JOb6");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "VeK9");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html/utils/build-projection-transform.js */ "wnxH");
/* harmony import */ var _utils_animation_state_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/animation-state.js */ "bLeo");
/* harmony import */ var _utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/lifecycles.js */ "sj4y");
/* harmony import */ var _utils_motion_values_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/motion-values.js */ "yics");
/* harmony import */ var _utils_projection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/projection.js */ "2IOs");
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/state.js */ "H5CK");
/* harmony import */ var _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/flat-tree.js */ "zA0s");
/* harmony import */ var _utils_variants_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/variants.js */ "OJpj");
/* harmony import */ var _dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/projection/relative-set.js */ "lQss");
/* harmony import */ var _utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/is-draggable.js */ "U2vs");





















var visualElement = function (_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
    return function (_a, options) {
        var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
        if (options === void 0) { options = {}; }
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        /**
         * The instance of the render-specific node that will be hydrated by the
         * exposed React ref. So for example, this visual element can host a
         * HTMLElement, plain object, or Three.js object. The functions provided
         * in VisualElementConfig allow us to interface with this instance.
         */
        var instance;
        /**
         * Manages the subscriptions for a visual element's lifecycle, for instance
         * onRender and onViewportBoxUpdate.
         */
        var lifecycles = Object(_utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_12__[/* createLifecycles */ "a"])();
        /**
         *
         */
        var projection = Object(_utils_state_js__WEBPACK_IMPORTED_MODULE_15__[/* createProjectionState */ "b"])();
        /**
         * A reference to the nearest projecting parent. This is either
         * undefined if we haven't looked for the nearest projecting parent,
         * false if there is no parent performing layout projection, or a reference
         * to the projecting parent.
         */
        var projectionParent;
        /**
         * This is a reference to the visual state of the "lead" visual element.
         * Usually, this will be this visual element. But if it shares a layoutId
         * with other visual elements, only one of them will be designated lead by
         * AnimateSharedLayout. All the other visual elements will take on the visual
         * appearance of the lead while they crossfade to it.
         */
        var leadProjection = projection;
        var leadLatestValues = latestValues;
        var unsubscribeFromLeadVisualElement;
        /**
         * The latest layout measurements and calculated projections. This
         * is seperate from the target projection data in visualState as
         * many visual elements might point to the same piece of visualState as
         * a target, whereas they might each have different layouts and thus
         * projection calculations needed to project into the same viewport box.
         */
        var layoutState = Object(_utils_state_js__WEBPACK_IMPORTED_MODULE_15__[/* createLayoutState */ "a"])();
        /**
         *
         */
        var crossfader;
        /**
         * Keep track of whether the viewport box has been updated since the
         * last time the layout projection was re-calculated.
         */
        var hasViewportBoxUpdated = false;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        var values = new Map();
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        var valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        var prevMotionValues = {};
        /**
         * x/y motion values that track the progress of initiated layout
         * animations.
         *
         * TODO: Target for removal
         */
        var projectionTargetProgress;
        /**
         * When values are removed from all animation props we need to search
         * for a fallback value to animate to. These values are tracked in baseTarget.
         */
        var baseTarget = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, latestValues);
        // Internal methods ========================
        /**
         * On mount, this will be hydrated with a callback to disconnect
         * this visual element from its parent on unmount.
         */
        var removeFromVariantTree;
        /**
         *
         */
        function render() {
            if (!instance)
                return;
            if (element.isProjectionReady()) {
                /**
                 * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
                 * This is the final box that we will then project into by calculating a transform delta and
                 * applying it to the corrected box.
                 */
                Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__[/* applyBoxTransforms */ "a"])(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
                /**
                 * Update the delta between the corrected box and the final target box, after
                 * user-set transforms are applied to it. This will be used by the renderer to
                 * create a transform style that will reproject the element from its actual layout
                 * into the desired bounding box.
                 */
                Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__[/* updateBoxDelta */ "c"])(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
            }
            triggerBuild();
            renderInstance(instance, renderState);
        }
        function triggerBuild() {
            var valuesToRender = latestValues;
            if (crossfader && crossfader.isActive()) {
                var crossfadedValues = crossfader.getCrossfadeState(element);
                if (crossfadedValues)
                    valuesToRender = crossfadedValues;
            }
            build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
        }
        function update() {
            lifecycles.notifyUpdate(latestValues);
        }
        function updateLayoutProjection() {
            if (!element.isProjectionReady())
                return;
            var delta = layoutState.delta, treeScale = layoutState.treeScale;
            var prevTreeScaleX = treeScale.x;
            var prevTreeScaleY = treeScale.y;
            var prevDeltaTransform = layoutState.deltaTransform;
            Object(_utils_projection_js__WEBPACK_IMPORTED_MODULE_14__[/* updateLayoutDeltas */ "a"])(layoutState, leadProjection, element.path, latestValues);
            hasViewportBoxUpdated &&
                element.notifyViewportBoxUpdate(leadProjection.target, delta);
            hasViewportBoxUpdated = false;
            var deltaTransform = Object(_html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__[/* buildLayoutProjectionTransform */ "a"])(delta, treeScale);
            if (deltaTransform !== prevDeltaTransform ||
                // Also compare calculated treeScale, for values that rely on this only for scale correction
                prevTreeScaleX !== treeScale.x ||
                prevTreeScaleY !== treeScale.y) {
                element.scheduleRender();
            }
            layoutState.deltaTransform = deltaTransform;
        }
        function updateTreeLayoutProjection() {
            element.layoutTree.forEach(fireUpdateLayoutProjection);
        }
        /**
         *
         */
        function bindToMotionValue(key, value) {
            var removeOnChange = value.onChange(function (latestValue) {
                latestValues[key] = latestValue;
                props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].update(update, false, true);
            });
            var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
            valueSubscriptions.set(key, function () {
                removeOnChange();
                removeOnRenderRequest();
            });
        }
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        var initialMotionValues = scrapeMotionValuesFromProps(props);
        for (var key in initialMotionValues) {
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__[/* isMotionValue */ "a"])(value)) {
                value.set(latestValues[key], false);
            }
        }
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        var isControllingVariants = Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__[/* checkIfControllingVariants */ "a"])(props);
        var isVariantNode = Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__[/* checkIfVariantNode */ "b"])(props);
        var element = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ treeType: treeType, 
            /**
             * This is a mirror of the internal instance prop, which keeps
             * VisualElement type-compatible with React's RefObject.
             */
            current: null, 
            /**
             * The depth of this visual element within the visual element tree.
             */
            depth: parent ? parent.depth + 1 : 0, parent: parent, children: new Set(), 
            /**
             * An ancestor path back to the root visual element. This is used
             * by layout projection to quickly recurse back up the tree.
             */
            path: parent ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(parent.path)), [parent]) : [], layoutTree: parent ? parent.layoutTree : new _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_16__[/* FlatTree */ "a"](), 
            /**
             *
             */
            presenceId: presenceId,
            projection: projection, 
            /**
             * If this component is part of the variant tree, it should track
             * any children that are also part of the tree. This is essentially
             * a shadow tree to simplify logic around how to stagger over children.
             */
            variantChildren: isVariantNode ? new Set() : undefined, 
            /**
             * Whether this instance is visible. This can be changed imperatively
             * by AnimateSharedLayout, is analogous to CSS's visibility in that
             * hidden elements should take up layout, and needs enacting by the configured
             * render function.
             */
            isVisible: undefined, 
            /**
             * Normally, if a component is controlled by a parent's variants, it can
             * rely on that ancestor to trigger animations further down the tree.
             * However, if a component is created after its parent is mounted, the parent
             * won't trigger that mount animation so the child needs to.
             *
             * TODO: This might be better replaced with a method isParentMounted
             */
            manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()), 
            /**
             * This can be set by AnimatePresence to force components that mount
             * at the same time as it to mount as if they have initial={false} set.
             */
            blockInitialAnimation: blockInitialAnimation, 
            /**
             * Determine whether this component has mounted yet. This is mostly used
             * by variant children to determine whether they need to trigger their
             * own animations on mount.
             */
            isMounted: function () { return Boolean(instance); }, mount: function (newInstance) {
                instance = element.current = newInstance;
                element.pointTo(element);
                if (isVariantNode && parent && !isControllingVariants) {
                    removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
                }
                parent === null || parent === void 0 ? void 0 : parent.children.add(element);
            },
            /**
             *
             */
            unmount: function () {
                framesync__WEBPACK_IMPORTED_MODULE_1__[/* cancelSync */ "a"].update(update);
                framesync__WEBPACK_IMPORTED_MODULE_1__[/* cancelSync */ "a"].render(render);
                framesync__WEBPACK_IMPORTED_MODULE_1__[/* cancelSync */ "a"].preRender(element.updateLayoutProjection);
                valueSubscriptions.forEach(function (remove) { return remove(); });
                element.stopLayoutAnimation();
                element.layoutTree.remove(element);
                removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
                parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                lifecycles.clearAllListeners();
            },
            /**
             * Add a child visual element to our set of children.
             */
            addVariantChild: function (child) {
                var _a;
                var closestVariantNode = element.getClosestVariantNode();
                if (closestVariantNode) {
                    (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                    return function () { return closestVariantNode.variantChildren.delete(child); };
                }
            },
            sortNodePosition: function (other) {
                /**
                 * If these nodes aren't even of the same type we can't compare their depth.
                 */
                if (!sortNodePosition || treeType !== other.treeType)
                    return 0;
                return sortNodePosition(element.getInstance(), other.getInstance());
            }, 
            /**
             * Returns the closest variant node in the tree starting from
             * this visual element.
             */
            getClosestVariantNode: function () {
                return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
            }, 
            /**
             * A method that schedules an update to layout projections throughout
             * the tree. We inherit from the parent so there's only ever one
             * job scheduled on the next frame - that of the root visual element.
             */
            scheduleUpdateLayoutProjection: parent
                ? parent.scheduleUpdateLayoutProjection
                : function () {
                    return framesync__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].preRender(element.updateTreeLayoutProjection, false, true);
                }, 
            /**
             * Expose the latest layoutId prop.
             */
            getLayoutId: function () { return props.layoutId; }, 
            /**
             * Returns the current instance.
             */
            getInstance: function () { return instance; }, 
            /**
             * Get/set the latest static values.
             */
            getStaticValue: function (key) { return latestValues[key]; }, setStaticValue: function (key, value) { return (latestValues[key] = value); }, 
            /**
             * Returns the latest motion value state. Currently only used to take
             * a snapshot of the visual element - perhaps this can return the whole
             * visual state
             */
            getLatestValues: function () { return latestValues; }, 
            /**
             * Set the visiblity of the visual element. If it's changed, schedule
             * a render to reflect these changes.
             */
            setVisibility: function (visibility) {
                if (element.isVisible === visibility)
                    return;
                element.isVisible = visibility;
                element.scheduleRender();
            },
            /**
             * Make a target animatable by Popmotion. For instance, if we're
             * trying to animate width from 100px to 100vw we need to measure 100vw
             * in pixels to determine what we really need to animate to. This is also
             * pluggable to support Framer's custom value types like Color,
             * and CSS variables.
             */
            makeTargetAnimatable: function (target, canMutate) {
                if (canMutate === void 0) { canMutate = true; }
                return makeTargetAnimatable(element, target, props, canMutate);
            },
            // Motion values ========================
            /**
             * Add a motion value and bind it to this visual element.
             */
            addValue: function (key, value) {
                // Remove existing value if it exists
                if (element.hasValue(key))
                    element.removeValue(key);
                values.set(key, value);
                latestValues[key] = value.get();
                bindToMotionValue(key, value);
            },
            /**
             * Remove a motion value and unbind any active subscriptions.
             */
            removeValue: function (key) {
                var _a;
                values.delete(key);
                (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
                valueSubscriptions.delete(key);
                delete latestValues[key];
                removeValueFromRenderState(key, renderState);
            }, 
            /**
             * Check whether we have a motion value for this key
             */
            hasValue: function (key) { return values.has(key); }, 
            /**
             * Get a motion value for this key. If called with a default
             * value, we'll create one if none exists.
             */
            getValue: function (key, defaultValue) {
                var value = values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__[/* motionValue */ "a"])(defaultValue);
                    element.addValue(key, value);
                }
                return value;
            }, 
            /**
             * Iterate over our motion values.
             */
            forEachValue: function (callback) { return values.forEach(callback); }, 
            /**
             * If we're trying to animate to a previously unencountered value,
             * we need to check for it in our state and as a last resort read it
             * directly from the instance (which might have performance implications).
             */
            readValue: function (key) { var _a; return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options); }, 
            /**
             * Set the base target to later animate back to. This is currently
             * only hydrated on creation and when we first read a value.
             */
            setBaseTarget: function (key, value) {
                baseTarget[key] = value;
            },
            /**
             * Find the base target for a value thats been removed from all animation
             * props.
             */
            getBaseTarget: function (key) {
                if (getBaseTarget) {
                    var target = getBaseTarget(props, key);
                    if (target !== undefined && !Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__[/* isMotionValue */ "a"])(target))
                        return target;
                }
                return baseTarget[key];
            } }, lifecycles), { 
            /**
             * Build the renderer state based on the latest visual state.
             */
            build: function () {
                triggerBuild();
                return renderState;
            },
            /**
             * Schedule a render on the next animation frame.
             */
            scheduleRender: function () {
                framesync__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].render(render, false, true);
            }, 
            /**
             * Synchronously fire render. It's prefered that we batch renders but
             * in many circumstances, like layout measurement, we need to run this
             * synchronously. However in those instances other measures should be taken
             * to batch reads/writes.
             */
            syncRender: render, 
            /**
             * Update the provided props. Ensure any newly-added motion values are
             * added to our map, old ones removed, and listeners updated.
             */
            setProps: function (newProps) {
                props = newProps;
                lifecycles.updatePropListeners(newProps);
                prevMotionValues = Object(_utils_motion_values_js__WEBPACK_IMPORTED_MODULE_13__[/* updateMotionValuesFromProps */ "a"])(element, scrapeMotionValuesFromProps(props), prevMotionValues);
            }, getProps: function () { return props; }, 
            // Variants ==============================
            /**
             * Returns the variant definition with a given name.
             */
            getVariant: function (name) { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; }, 
            /**
             * Returns the defined default transition on this component.
             */
            getDefaultTransition: function () { return props.transition; }, 
            /**
             * Used by child variant nodes to get the closest ancestor variant props.
             */
            getVariantContext: function (startAtParent) {
                if (startAtParent === void 0) { startAtParent = false; }
                if (startAtParent)
                    return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
                if (!isControllingVariants) {
                    var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                    if (props.initial !== undefined) {
                        context_1.initial = props.initial;
                    }
                    return context_1;
                }
                var context = {};
                for (var i = 0; i < numVariantProps; i++) {
                    var name_1 = variantProps[i];
                    var prop = props[name_1];
                    if (Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__[/* isVariantLabel */ "c"])(prop) || prop === false) {
                        context[name_1] = prop;
                    }
                }
                return context;
            },
            // Layout projection ==============================
            /**
             * Enable layout projection for this visual element. Won't actually
             * occur until we also have hydrated layout measurements.
             */
            enableLayoutProjection: function () {
                projection.isEnabled = true;
                element.layoutTree.add(element);
            },
            /**
             * Lock the projection target, for instance when dragging, so
             * nothing else can try and animate it.
             */
            lockProjectionTarget: function () {
                projection.isTargetLocked = true;
            },
            unlockProjectionTarget: function () {
                element.stopLayoutAnimation();
                projection.isTargetLocked = false;
            }, getLayoutState: function () { return layoutState; }, setCrossfader: function (newCrossfader) {
                crossfader = newCrossfader;
            }, isProjectionReady: function () {
                return projection.isEnabled &&
                    projection.isHydrated &&
                    layoutState.isHydrated;
            }, 
            /**
             * Start a layout animation on a given axis.
             */
            startLayoutAnimation: function (axis, transition, isRelative) {
                if (isRelative === void 0) { isRelative = false; }
                var progress = element.getProjectionAnimationProgress()[axis];
                var _a = isRelative
                    ? projection.relativeTarget[axis]
                    : projection.target[axis], min = _a.min, max = _a.max;
                var length = max - min;
                progress.clearListeners();
                progress.set(min);
                progress.set(min); // Set twice to hard-reset velocity
                progress.onChange(function (v) {
                    element.setProjectionTargetAxis(axis, v, v + length, isRelative);
                });
                return element.animateMotionValue(axis, progress, 0, transition);
            },
            /**
             * Stop layout animations.
             */
            stopLayoutAnimation: function () {
                Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__[/* eachAxis */ "a"])(function (axis) {
                    return element.getProjectionAnimationProgress()[axis].stop();
                });
            },
            /**
             * Measure the current viewport box with or without transforms.
             * Only measures axis-aligned boxes, rotate and skew must be manually
             * removed with a re-render to work.
             */
            measureViewportBox: function (withTransform) {
                if (withTransform === void 0) { withTransform = true; }
                var viewportBox = measureViewportBox(instance, options);
                if (!withTransform)
                    Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__[/* removeBoxTransforms */ "c"])(viewportBox, latestValues);
                return viewportBox;
            },
            /**
             * Get the motion values tracking the layout animations on each
             * axis. Lazy init if not already created.
             */
            getProjectionAnimationProgress: function () {
                projectionTargetProgress || (projectionTargetProgress = {
                    x: Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__[/* motionValue */ "a"])(0),
                    y: Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__[/* motionValue */ "a"])(0),
                });
                return projectionTargetProgress;
            },
            /**
             * Update the projection of a single axis. Schedule an update to
             * the tree layout projection.
             */
            setProjectionTargetAxis: function (axis, min, max, isRelative) {
                if (isRelative === void 0) { isRelative = false; }
                var target;
                if (isRelative) {
                    if (!projection.relativeTarget) {
                        projection.relativeTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__[/* axisBox */ "a"])();
                    }
                    target = projection.relativeTarget[axis];
                }
                else {
                    projection.relativeTarget = undefined;
                    target = projection.target[axis];
                }
                projection.isHydrated = true;
                target.min = min;
                target.max = max;
                // Flag that we want to fire the onViewportBoxUpdate event handler
                hasViewportBoxUpdated = true;
                lifecycles.notifySetAxisTarget();
            },
            /**
             * Rebase the projection target on top of the provided viewport box
             * or the measured layout. This ensures that non-animating elements
             * don't fall out of sync differences in measurements vs projections
             * after a page scroll or other relayout.
             */
            rebaseProjectionTarget: function (force, box) {
                if (box === void 0) { box = layoutState.layout; }
                var _a = element.getProjectionAnimationProgress(), x = _a.x, y = _a.y;
                var shouldRebase = !projection.relativeTarget &&
                    !projection.isTargetLocked &&
                    !x.isAnimating() &&
                    !y.isAnimating();
                if (force || shouldRebase) {
                    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__[/* eachAxis */ "a"])(function (axis) {
                        var _a = box[axis], min = _a.min, max = _a.max;
                        element.setProjectionTargetAxis(axis, min, max);
                    });
                }
            },
            /**
             * Notify the visual element that its layout is up-to-date.
             * Currently Animate.tsx uses this to check whether a layout animation
             * needs to be performed.
             */
            notifyLayoutReady: function (config) {
                Object(_dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_18__[/* setCurrentViewportBox */ "a"])(element);
                element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
            }, 
            /**
             * Temporarily reset the transform of the instance.
             */
            resetTransform: function () { return resetTransform(element, instance, props); }, restoreTransform: function () { return restoreTransform(instance, renderState); }, updateLayoutProjection: updateLayoutProjection,
            updateTreeLayoutProjection: function () {
                element.layoutTree.forEach(fireResolveRelativeTargetBox);
                /**
                 * Schedule the projection updates at the end of the current preRender
                 * step. This will ensure that all layout trees will first resolve
                 * relative projection boxes into viewport boxes, and *then*
                 * update projections.
                 */
                framesync__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].preRender(updateTreeLayoutProjection, false, true);
                // sync.postRender(() => element.scheduleUpdateLayoutProjection())
            },
            getProjectionParent: function () {
                if (projectionParent === undefined) {
                    var foundParent = false;
                    // Search backwards through the tree path
                    for (var i = element.path.length - 1; i >= 0; i--) {
                        var ancestor = element.path[i];
                        if (ancestor.projection.isEnabled) {
                            foundParent = ancestor;
                            break;
                        }
                    }
                    projectionParent = foundParent;
                }
                return projectionParent;
            },
            resolveRelativeTargetBox: function () {
                var relativeParent = element.getProjectionParent();
                if (!projection.relativeTarget || !relativeParent)
                    return;
                Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__[/* calcRelativeBox */ "b"])(projection, relativeParent.projection);
                if (Object(_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_19__[/* isDraggable */ "a"])(relativeParent)) {
                    var target = projection.target;
                    Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__[/* applyBoxTransforms */ "a"])(target, target, relativeParent.getLatestValues());
                }
            },
            shouldResetTransform: function () {
                return Boolean(props._layoutResetTransform);
            },
            /**
             *
             */
            pointTo: function (newLead) {
                leadProjection = newLead.projection;
                leadLatestValues = newLead.getLatestValues();
                /**
                 * Subscribe to lead component's layout animations
                 */
                unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
                unsubscribeFromLeadVisualElement = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__[/* pipe */ "a"])(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function () {
                    var _a;
                    if (element.isPresent) {
                        element.presence = _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Presence */ "a"].Present;
                    }
                    else {
                        (_a = element.layoutSafeToRemove) === null || _a === void 0 ? void 0 : _a.call(element);
                    }
                }));
            }, 
            // TODO: Clean this up
            isPresent: true, presence: _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Presence */ "a"].Entering });
        return element;
    };
};
function fireResolveRelativeTargetBox(child) {
    child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
    child.updateLayoutProjection();
}
var variantProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "f"])(["initial"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "d"])(_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_11__[/* variantPriorityOrder */ "b"]));
var numVariantProps = variantProps.length;




/***/ })

}]);
//# sourceMappingURL=npm.framer-motion.js.map