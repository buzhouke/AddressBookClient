(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "LdEA":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "MeCZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-intersection-observer-hook/dist/react-intersection-observer-hook.esm.js


var DEFAULT_ROOT_MARGIN = '0px';
var DEFAULT_THRESHOLD = [0]; // For more info:
// https://developers.google.com/web/updates/2016/04/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

function useIntersectionObserver(args) {
  var _args$rootMargin, _args$threshold;

  var rootMargin = (_args$rootMargin = args == null ? void 0 : args.rootMargin) != null ? _args$rootMargin : DEFAULT_ROOT_MARGIN;
  var threshold = (_args$threshold = args == null ? void 0 : args.threshold) != null ? _args$threshold : DEFAULT_THRESHOLD;
  var nodeRef = Object(react["useRef"])(null);
  var rootRef = Object(react["useRef"])(null);
  var observerRef = Object(react["useRef"])(null);

  var _useState = Object(react["useState"])(),
      entry = _useState[0],
      setEntry = _useState[1];

  var unobserve = Object(react["useCallback"])(function () {
    // Disconnect the current observer (if there is one)
    var currentObserver = observerRef.current;
    currentObserver == null ? void 0 : currentObserver.disconnect();
    observerRef.current = null;
  }, []);
  var observe = Object(react["useCallback"])(function () {
    var node = nodeRef.current;

    if (node) {
      var root = rootRef.current;
      var options = {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      }; // Create a observer for current "node" with given options.

      var observer = new IntersectionObserver(function (_ref) {
        var newEntry = _ref[0];
        setEntry(newEntry);
      }, options);
      observer.observe(node);
      observerRef.current = observer;
    }
  }, [rootMargin, threshold]);
  var initializeObserver = Object(react["useCallback"])(function () {
    unobserve();
    observe();
  }, [observe, unobserve]);
  var refCallback = Object(react["useCallback"])(function (node) {
    nodeRef.current = node;
    initializeObserver();
  }, [initializeObserver]);
  var rootRefCallback = Object(react["useCallback"])(function (rootNode) {
    rootRef.current = rootNode;
    initializeObserver();
  }, [initializeObserver]);
  Object(react["useEffect"])(function () {
    // After React 18, StrictMode unmounts and mounts components to be sure
    // if they are resilient effects being mounted and destroyed multiple times.
    // This a behavior to be sure nothing breaks when off-screen components
    // can preserve their state with future React versions.
    // So in StrictMode, React unmounts the component, clean-up of this useEffect gets triggered and
    // we stop observing the node. But we need to start observing after component re-mounts with its preserved state.
    // So to handle this case, we call initializeObserver here.
    // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode
    initializeObserver();
    return function () {
      // We disconnect the observer on unmount to prevent memory leaks etc.
      unobserve();
    };
  }, [initializeObserver, unobserve]);
  return [refCallback, {
    entry: entry,
    rootRef: rootRefCallback
  }];
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function useTrackVisibility(args) {
  var _result$entry;

  var _useIntersectionObser = useIntersectionObserver(args),
      ref = _useIntersectionObser[0],
      result = _useIntersectionObser[1];

  var isVisible = Boolean((_result$entry = result.entry) == null ? void 0 : _result$entry.isIntersecting);

  var _useState = Object(react["useState"])(isVisible),
      wasEverVisible = _useState[0],
      setWasEverVisible = _useState[1];

  Object(react["useEffect"])(function () {
    if (isVisible) {
      setWasEverVisible(isVisible);
    }
  }, [isVisible]);
  return [ref, _extends({}, result, {
    isVisible: isVisible,
    wasEverVisible: wasEverVisible
  })];
}


//# sourceMappingURL=react-intersection-observer-hook.esm.js.map

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js



var DEFAULT_DELAY_IN_MS = 100;

function useInfiniteScroll(_ref) {
  var loading = _ref.loading,
      hasNextPage = _ref.hasNextPage,
      onLoadMore = _ref.onLoadMore,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled,
      _ref$delayInMs = _ref.delayInMs,
      delayInMs = _ref$delayInMs === void 0 ? DEFAULT_DELAY_IN_MS : _ref$delayInMs;

  var _useTrackVisibility = useTrackVisibility({
    rootMargin: rootMargin
  }),
      ref = _useTrackVisibility[0],
      _useTrackVisibility$ = _useTrackVisibility[1],
      rootRef = _useTrackVisibility$.rootRef,
      isVisible = _useTrackVisibility$.isVisible;

  var shouldLoadMore = !disabled && !loading && isVisible && hasNextPage; // eslint-disable-next-line consistent-return

  Object(react["useEffect"])(function () {
    if (shouldLoadMore) {
      // When we trigger 'onLoadMore' and new items are added to the list,
      // right before they become rendered on the screen, 'loading' becomes false
      // and 'isVisible' can be true for a brief time, based on the scroll position.
      // So, it triggers 'onLoadMore' just after the first one is finished.
      // We use a small delay here to prevent this kind of situations.
      // It can be configured by hook args.
      var timer = setTimeout(function () {
        onLoadMore();
      }, delayInMs);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);
  return [ref, {
    rootRef: rootRef
  }];
}

/* harmony default export */ var react_infinite_scroll_hook_esm = __webpack_exports__["a"] = (useInfiniteScroll);
//# sourceMappingURL=react-infinite-scroll-hook.esm.js.map


/***/ }),

/***/ "TVEO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Trans; });

// UNUSED EXPORTS: nodesToString

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("m3Bd");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("T0aG");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("KEM+");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react/index.js
var react = __webpack_require__("ERkP");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/void-elements/index.js
var void_elements = __webpack_require__("nkkX");
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var html_parse_stringify_module_t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function html_parse_stringify_module_n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],(void_elements_default.a[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(html_parse_stringify_module_t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var html_parse_stringify_module_r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,html_parse_stringify_module_i=/^\s*$/,html_parse_stringify_module_s=Object.create(null);function html_parse_stringify_module_a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(html_parse_stringify_module_a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var html_parse_stringify_module_c={parse:function(e,t){t||(t={}),t.components||(t.components=html_parse_stringify_module_s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(html_parse_stringify_module_r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=html_parse_stringify_module_n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=html_parse_stringify_module_n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);html_parse_stringify_module_i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+html_parse_stringify_module_a("",t)},"")}};/* harmony default export */ var html_parse_stringify_module = (html_parse_stringify_module_c);
//# sourceMappingURL=html-parse-stringify.module.js.map

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/html-escaper/esm/index.js
/**
 * Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var replace = ''.replace;

var ca = /[&<>'"]/g;
var es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;

var esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};
var unes = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"'
};

function esm_escape(es) {
  return replace.call(es, ca, pe);
};

function esm_unescape(un) {
  return replace.call(un, es, cape);
};

function pe(m) {
  return esca[m];
}

function cape(m) {
  return unes[m];
}

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/context.js
var es_context = __webpack_require__("snMe");

// EXTERNAL MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/utils.js
var utils = __webpack_require__("AZnI");

// CONCATENATED MODULE: C:/Users/wangweiwei/source/repos/address-book/Source/Clients/node_modules/react-i18next/dist/es/Trans.js



var _excluded = ["format"],
    _excluded2 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return react_default.a.isValidElement(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function mergeProps(source, target) {
  var newTarget = _objectSpread({}, target);

  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}

function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if (react_default.a.isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;

      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      Object(utils["c" /* warn */])("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if (typeof_default()(child) === 'object') {
      var format = child.format,
          clone = objectWithoutProperties_default()(child, _excluded);

      var keys = Object.keys(clone);

      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        Object(utils["c" /* warn */])("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      Object(utils["c" /* warn */])("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if (typeof_default()(child) === 'object' && !react_default.a.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  var ast = html_parse_stringify_module.parse("<0>".concat(targetString, "</0>"));

  var opts = _objectSpread(_objectSpread({}, data), combinedTOpts);

  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }

  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push(react_default.a.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }

  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = react_default.a.isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && typeof_default()(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = typeof_default()(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);

          mem.push(react_default.a.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);

            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(react_default.a.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push(react_default.a.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if (typeof_default()(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push(react_default.a.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push(react_default.a.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;

        var _content = shouldUnescape ? esm_unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

        if (wrapTextNodes) {
          mem.push(react_default.a.createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }

      return mem;
    }, []);
  }

  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      context = _ref.context,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = objectWithoutProperties_default()(_ref, _excluded2);

  var _ref2 = Object(react["useContext"])(es_context["a" /* I18nContext */]) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || Object(es_context["d" /* getI18n */])();

  if (!i18n) {
    Object(utils["d" /* warnOnce */])('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  if (context) tOptions.context = context;

  var reactI18nextOptions = _objectSpread(_objectSpread({}, Object(es_context["c" /* getDefaults */])()), i18n.options && i18n.options.react);

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: _objectSpread(_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };

  var combinedTOpts = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? react_default.a.createElement(useAsParent, additionalProps, content) : content;
}

/***/ }),

/***/ "Udmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserRouter */
/* unused harmony export HashRouter */
/* unused harmony export Link */
/* unused harmony export NavLink */
/* unused harmony export createSearchParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryRouter; });
/* unused harmony export useLinkClickHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useSearchParams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ERkP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SGJe");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H8PI");
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (historyRef.current == null) {
    historyRef.current = Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createBrowserHistory */ "b"])({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (historyRef.current == null) {
    historyRef.current = Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createHashHistory */ "c"])({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    action: history.action,
    location: history.location
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => history.listen(setState), [history]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "c"], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useHref */ "g"])(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let path = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useResolvedPath */ "j"])(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useNavigate */ "i"])();
  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let path = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useResolvedPath */ "j"])(to);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createPath */ "e"])(location) === Object(history__WEBPACK_IMPORTED_MODULE_1__[/* createPath */ "e"])(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? undefined : void 0;
  let defaultSearchParamsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(createSearchParams(defaultInit));
  let location = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  let searchParams = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[/* useNavigate */ "i"])();
  let setSearchParams = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "m3Bd":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("LdEA");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "nkkX":
/***/ (function(module, exports) {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ })

}]);