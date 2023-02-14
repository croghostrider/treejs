/*!
 * treejs
 * @version 1.8.0
 * @see https://github.com/daweilv/treejs
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tree"] = factory();
	else
		root["Tree"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_options) {
  var defaultOptions = {
    method: 'GET',
    url: '',
    async: true,
    success: null,
    failed: null,
    data: {},
    'Content-Type': 'application/json; charset=utf-8'
  };
  var options = Object.assign(defaultOptions, _options);
  var xhr = new XMLHttpRequest();
  var postData = Object.entries(options.data).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    acc.push("".concat(key, "=").concat(value));
    return acc;
  }, []).join('&');
  if (options.method.toUpperCase() === 'POST') {
    xhr.open(options.method, options.url, options.async);
    xhr.setRequestHeader('Content-Type', options['Content-Type']);
    xhr.send(postData);
  } else if (options.method.toUpperCase() === 'GET') {
    var url = options.url;
    if (postData) {
      if (url.indexOf('?') !== -1) {
        url += "&".concat(postData);
      } else {
        url += "&".concat(postData);
      }
    }
    xhr.open(options.method, url, options.async);
    xhr.setRequestHeader('Content-Type', options['Content-Type']);
    xhr.send(null);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var res = xhr.responseText;
      if (options['Content-Type'] === defaultOptions['Content-Type']) {
        res = JSON.parse(res);
      }
      options.success && options.success(res);
    } else {
      options.failed && options.failed(xhr.status);
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 5 */
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".treejs {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n.treejs *:after,\n.treejs *:before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.treejs > .treejs-node {\n  padding-left: 0;\n}\n.treejs .treejs-nodes {\n  list-style: none;\n  padding-left: 20px;\n  overflow: hidden;\n  -webkit-transition: height 150ms ease-out, opacity 150ms ease-out;\n  -o-transition: height 150ms ease-out, opacity 150ms ease-out;\n  transition: height 150ms ease-out, opacity 150ms ease-out;\n}\n.treejs .treejs-node {\n  overflow: hidden;\n}\n.treejs .treejs-node.treejs-placeholder {\n  padding-left: 20px;\n}\n.treejs .treejs-switcher {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  -o-transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n.treejs .treejs-switcher:before {\n  position: absolute;\n  top: 8px;\n  left: 6px;\n  display: block;\n  content: \" \";\n  border: 4px solid transparent;\n  border-top: 4px solid rgba(0, 0, 0, 0.4);\n  -webkit-transition: border-color 150ms;\n  -o-transition: border-color 150ms;\n  transition: border-color 150ms;\n}\n.treejs .treejs-switcher:hover:before {\n  border-top: 4px solid rgba(0, 0, 0, 0.65);\n}\n.treejs .treejs-node__close > .treejs-switcher {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.treejs .treejs-node__close > .treejs-nodes {\n  height: 0;\n}\n.treejs .treejs-checkbox {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n}\n.treejs .treejs-checkbox:before {\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  position: absolute;\n  top: 2px;\n  content: \" \";\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n.treejs .treejs-checkbox:hover:before {\n  -webkit-box-shadow: 0 0 2px 1px #1890ff;\n          box-shadow: 0 0 2px 1px #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:after {\n  position: absolute;\n  content: \" \";\n  display: block;\n  top: 4px;\n  left: 5px;\n  width: 5px;\n  height: 9px;\n  border: 2px solid #fff;\n  border-top: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:after {\n  position: absolute;\n  content: \" \";\n  display: block;\n  top: 9px;\n  left: 3px;\n  width: 10px;\n  height: 2px;\n  background-color: #fff;\n}\n.treejs .treejs-node__disabled {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.treejs .treejs-node__disabled .treejs-checkbox {\n  cursor: not-allowed;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:before {\n  cursor: not-allowed;\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5 !important;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:hover:before {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.treejs .treejs-node__disabled .treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled .treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-label {\n  cursor: pointer;\n  vertical-align: middle;\n}\n", "",{"version":3,"sources":["webpack://./src/index.less"],"names":[],"mappings":"AAAA;EACE,8BAA8B;UACtB,sBAAsB;EAC9B,eAAe;AACjB;AACA;;EAEE,8BAA8B;UACtB,sBAAsB;AAChC;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iEAAiE;EACjE,4DAA4D;EAC5D,yDAAyD;AAC3D;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,oDAAoD;EACpD,4CAA4C;EAC5C,uCAAuC;EACvC,oCAAoC;EACpC,sEAAsE;AACxE;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,cAAc;EACd,YAAY;EACZ,6BAA6B;EAC7B,wCAAwC;EACxC,sCAAsC;EACtC,iCAAiC;EACjC,8BAA8B;AAChC;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;AACnC;AACA;EACE,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,oBAAoB;EACpB,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,uCAAuC;UAC/B,+BAA+B;AACzC;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,gCAAgC;MAC5B,4BAA4B;UACxB,wBAAwB;AAClC;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,SAAS;EACT,WAAW;EACX,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,oCAAoC;AACtC;AACA;EACE,mCAAmC;UAC3B,2BAA2B;AACrC;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,sBAAsB;AACxB","sourcesContent":[".treejs {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n.treejs *:after,\n.treejs *:before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.treejs > .treejs-node {\n  padding-left: 0;\n}\n.treejs .treejs-nodes {\n  list-style: none;\n  padding-left: 20px;\n  overflow: hidden;\n  -webkit-transition: height 150ms ease-out, opacity 150ms ease-out;\n  -o-transition: height 150ms ease-out, opacity 150ms ease-out;\n  transition: height 150ms ease-out, opacity 150ms ease-out;\n}\n.treejs .treejs-node {\n  overflow: hidden;\n}\n.treejs .treejs-node.treejs-placeholder {\n  padding-left: 20px;\n}\n.treejs .treejs-switcher {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  -o-transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n.treejs .treejs-switcher:before {\n  position: absolute;\n  top: 8px;\n  left: 6px;\n  display: block;\n  content: \" \";\n  border: 4px solid transparent;\n  border-top: 4px solid rgba(0, 0, 0, 0.4);\n  -webkit-transition: border-color 150ms;\n  -o-transition: border-color 150ms;\n  transition: border-color 150ms;\n}\n.treejs .treejs-switcher:hover:before {\n  border-top: 4px solid rgba(0, 0, 0, 0.65);\n}\n.treejs .treejs-node__close > .treejs-switcher {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.treejs .treejs-node__close > .treejs-nodes {\n  height: 0;\n}\n.treejs .treejs-checkbox {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n}\n.treejs .treejs-checkbox:before {\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  position: absolute;\n  top: 2px;\n  content: \" \";\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n.treejs .treejs-checkbox:hover:before {\n  -webkit-box-shadow: 0 0 2px 1px #1890ff;\n          box-shadow: 0 0 2px 1px #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:after {\n  position: absolute;\n  content: \" \";\n  display: block;\n  top: 4px;\n  left: 5px;\n  width: 5px;\n  height: 9px;\n  border: 2px solid #fff;\n  border-top: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:after {\n  position: absolute;\n  content: \" \";\n  display: block;\n  top: 9px;\n  left: 3px;\n  width: 10px;\n  height: 2px;\n  background-color: #fff;\n}\n.treejs .treejs-node__disabled {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.treejs .treejs-node__disabled .treejs-checkbox {\n  cursor: not-allowed;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:before {\n  cursor: not-allowed;\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5 !important;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:hover:before {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.treejs .treejs-node__disabled .treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled .treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-label {\n  cursor: pointer;\n  vertical-align: middle;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 11 */
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Tree; }
/* harmony export */ });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function uniq(arr) {
  var map = {};
  return arr.reduce(function (acc, item) {
    if (!map[item]) {
      map[item] = true;
      acc.push(item);
    }
    return acc;
  }, []);
}
function empty(ele) {
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
}
function animation(duration, callback) {
  requestAnimationFrame(function () {
    callback.enter();
    requestAnimationFrame(function () {
      callback.active();
      setTimeout(function () {
        callback.leave();
      }, duration);
    });
  });
}
function collapseFromLeaf(tree, leafNode) {
  try {
    var nodeLiElement = tree.liElementsById[leafNode.parent.id];
    if (!nodeLiElement.classList.contains('treejs-node__close')) {
      nodeLiElement.getElementsByClassName('treejs-switcher')[0].click();
    }
  } catch (error) {
    return;
  }
  if (leafNode.hasOwnProperty('parent')) {
    collapseFromLeaf(tree, leafNode.parent);
  }
}
function expandFromRoot(tree, root) {
  var nodeLiElement = tree.liElementsById[root.id];
  if (nodeLiElement.classList.contains('treejs-node__close')) {
    nodeLiElement.getElementsByClassName('treejs-switcher')[0].click();
  }
  if (root.hasOwnProperty('children')) {
    var _iterator = _createForOfIteratorHelper(root.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        expandFromRoot(tree, child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
function Tree(container, options) {
  var _this = this;
  var defaultOptions = {
    selectMode: 'checkbox',
    values: [],
    disables: [],
    beforeLoad: null,
    loaded: null,
    url: null,
    method: 'GET',
    closeDepth: null,
    console: false,
    labelClass: '',
    checkboxClass: '',
    liClass: '',
    ulClass: '',
    switcherClass: ''
  };
  this.treeNodes = [];
  this.nodesById = {};
  this.leafNodesById = {};
  this.liElementsById = {};
  this.willUpdateNodesById = {};
  this.container = container;
  this.options = Object.assign(defaultOptions, options);
  Object.defineProperties(this, {
    values: {
      get: function get() {
        return this.getValues();
      },
      set: function set(values) {
        return this.setValues(uniq(values));
      }
    },
    disables: {
      get: function get() {
        return this.getDisables();
      },
      set: function set(values) {
        return this.setDisables(uniq(values));
      }
    },
    selectedNodes: {
      get: function get() {
        var nodes = [];
        var nodesById = this.nodesById;
        for (var id in nodesById) {
          if (nodesById.hasOwnProperty(id) && (nodesById[id].status === 1 || nodesById[id].status === 2)) {
            var node = Object.assign({}, nodesById[id]);
            delete node.parent;
            delete node.children;
            nodes.push(node);
          }
        }
        return nodes;
      }
    },
    disabledNodes: {
      get: function get() {
        var nodes = [];
        var nodesById = this.nodesById;
        for (var id in nodesById) {
          if (nodesById.hasOwnProperty(id) && nodesById[id].disabled) {
            var node = Object.assign({}, nodesById[id]);
            delete node.parent;
            nodes.push(node);
          }
        }
        return nodes;
      }
    }
  });
  if (this.options.url) {
    this.load(function (data) {
      _this.init(data);
    });
  } else {
    this.init(this.options.data);
  }
}
Tree.prototype.init = function (data) {
  if (this.options.console) {
    console.time('init');
  }
  var _Tree$parseTreeData = Tree.parseTreeData(data),
    treeNodes = _Tree$parseTreeData.treeNodes,
    nodesById = _Tree$parseTreeData.nodesById,
    leafNodesById = _Tree$parseTreeData.leafNodesById,
    defaultValues = _Tree$parseTreeData.defaultValues,
    defaultDisables = _Tree$parseTreeData.defaultDisables;
  this.treeNodes = treeNodes;
  this.nodesById = nodesById;
  this.leafNodesById = leafNodesById;
  this.render(this.treeNodes);
  var _this$options = this.options,
    values = _this$options.values,
    disables = _this$options.disables,
    loaded = _this$options.loaded;
  if (values && values.length) defaultValues = values;
  defaultValues.length && this.setValues(defaultValues);
  if (disables && disables.length) defaultDisables = disables;
  defaultDisables.length && this.setDisables(defaultDisables);
  loaded && loaded.call(this);
  if (this.options.console) {
    console.timeEnd('init');
  }
};
Tree.prototype.load = function (callback) {
  var _this2 = this;
  if (this.options.console) {
    console.time('load');
  }
  var _this$options2 = this.options,
    url = _this$options2.url,
    method = _this$options2.method,
    beforeLoad = _this$options2.beforeLoad;
  (0,_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: url,
    method: method,
    success: function success(result) {
      var data = result;
      if (_this2.options.console) {
        console.timeEnd('load');
      }
      if (beforeLoad) {
        data = beforeLoad(result);
      }
      callback(data);
    }
  });
};
Tree.prototype.render = function (treeNodes) {
  var treeEle = Tree.createRootEle();
  treeEle.appendChild(this.buildTree(treeNodes, 0));
  this.bindEvent(treeEle);
  var ele = document.querySelector(this.container);
  empty(ele);
  ele.appendChild(treeEle);
};
Tree.prototype.buildTree = function (nodes, depth) {
  var _this3 = this;
  var rootUlEle = Tree.createUlEle();
  if (nodes && nodes.length) {
    nodes.forEach(function (node) {
      var liEle = Tree.createLiEle(node, depth >= _this3.options.closeDepth - 1);
      _this3.liElementsById[node.id] = liEle;
      var ulEle = null;
      if (node.children && node.children.length) {
        ulEle = _this3.buildTree(node.children, depth + 1);
      }
      ulEle && liEle.appendChild(ulEle);
      rootUlEle.appendChild(liEle);
    });
  }
  return rootUlEle;
};
Tree.prototype.bindEvent = function (ele) {
  var _this4 = this;
  ele.addEventListener('click', function (e) {
    var target = e.target;
    if (target.nodeName === 'SPAN' && (target.classList.contains('treejs-checkbox') || target.classList.contains('treejs-label'))) {
      _this4.onItemClick(target.parentNode.nodeId);
    } else if (target.nodeName === 'SPAN' && target.classList.contains('treejs-switcher')) {
      _this4.onSwitcherClick(target);
    }
  }, false);
};
Tree.prototype.onItemClick = function (id) {
  if (this.options.console) {
    console.time('onItemClick');
  }
  var node = this.nodesById[id];
  var onChange = this.options.onChange;
  if (!node.disabled) {
    this.setValue(id);
    this.updateLiElements();
  }
  onChange && onChange.call(this);
  if (this.options.console) {
    console.timeEnd('onItemClick');
  }
};
Tree.prototype.setValue = function (value) {
  var node = this.nodesById[value];
  if (!node) return;
  var prevStatus = node.status;
  var status = prevStatus === 1 || prevStatus === 2 ? 0 : 2;
  node.status = status;
  this.markWillUpdateNode(node);
  this.walkUp(node, 'status');
  this.walkDown(node, 'status');
};
Tree.prototype.getValues = function () {
  var values = [];
  for (var id in this.leafNodesById) {
    if (this.leafNodesById.hasOwnProperty(id)) {
      if (this.leafNodesById[id].status === 1 || this.leafNodesById[id].status === 2) {
        values.push(id);
      }
    }
  }
  return values;
};
Tree.prototype.setValues = function (values) {
  var _this5 = this;
  this.emptyNodesCheckStatus();
  values.forEach(function (value) {
    _this5.setValue(value);
  });
  this.updateLiElements();
  var onChange = this.options.onChange;
  onChange && onChange.call(this);
};
Tree.prototype.setDisable = function (value) {
  var node = this.nodesById[value];
  if (!node) return;
  var prevDisabled = node.disabled;
  if (!prevDisabled) {
    node.disabled = true;
    this.markWillUpdateNode(node);
    this.walkUp(node, 'disabled');
    this.walkDown(node, 'disabled');
  }
};
Tree.prototype.getDisables = function () {
  var values = [];
  for (var id in this.leafNodesById) {
    if (this.leafNodesById.hasOwnProperty(id)) {
      if (this.leafNodesById[id].disabled) {
        values.push(id);
      }
    }
  }
  return values;
};
Tree.prototype.setDisables = function (values) {
  var _this6 = this;
  this.emptyNodesDisable();
  values.forEach(function (value) {
    _this6.setDisable(value);
  });
  this.updateLiElements();
};
Tree.prototype.emptyNodesCheckStatus = function () {
  this.willUpdateNodesById = this.getSelectedNodesById();
  Object.values(this.willUpdateNodesById).forEach(function (node) {
    if (!node.disabled) node.status = 0;
  });
};
Tree.prototype.emptyNodesDisable = function () {
  this.willUpdateNodesById = this.getDisabledNodesById();
  Object.values(this.willUpdateNodesById).forEach(function (node) {
    node.disabled = false;
  });
};
Tree.prototype.getSelectedNodesById = function () {
  return Object.entries(this.nodesById).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      id = _ref2[0],
      node = _ref2[1];
    if (node.status === 1 || node.status === 2) {
      acc[id] = node;
    }
    return acc;
  }, {});
};
Tree.prototype.getDisabledNodesById = function () {
  return Object.entries(this.nodesById).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      id = _ref4[0],
      node = _ref4[1];
    if (node.disabled) {
      acc[id] = node;
    }
    return acc;
  }, {});
};
Tree.prototype.updateLiElements = function () {
  var _this7 = this;
  Object.values(this.willUpdateNodesById).forEach(function (node) {
    _this7.updateLiElement(node);
  });
  this.willUpdateNodesById = {};
};
Tree.prototype.markWillUpdateNode = function (node) {
  this.willUpdateNodesById[node.id] = node;
};
Tree.prototype.onSwitcherClick = function (target) {
  var liEle = target.parentNode;
  var ele = liEle.lastChild;
  var height = ele.scrollHeight;
  if (liEle.classList.contains('treejs-node__close')) {
    animation(150, {
      enter: function enter() {
        ele.style.height = 0;
        ele.style.opacity = 0;
      },
      active: function active() {
        ele.style.height = "".concat(height, "px");
        ele.style.opacity = 1;
      },
      leave: function leave() {
        ele.style.height = '';
        ele.style.opacity = '';
        liEle.classList.remove('treejs-node__close');
      }
    });
  } else {
    animation(150, {
      enter: function enter() {
        ele.style.height = "".concat(height, "px");
        ele.style.opacity = 1;
      },
      active: function active() {
        ele.style.height = 0;
        ele.style.opacity = 0;
      },
      leave: function leave() {
        ele.style.height = '';
        ele.style.opacity = '';
        liEle.classList.add('treejs-node__close');
      }
    });
  }
};
Tree.prototype.walkUp = function (node, changeState) {
  var parent = node.parent;
  if (parent) {
    if (changeState === 'status') {
      var pStatus = null;
      var statusCount = parent.children.reduce(function (acc, child) {
        if (!isNaN(child.status)) return acc + child.status;
        return acc;
      }, 0);
      if (statusCount) {
        pStatus = statusCount === parent.children.length * 2 ? 2 : 1;
      } else {
        pStatus = 0;
      }
      if (parent.status === pStatus) return;
      parent.status = pStatus;
    } else {
      var pDisabled = parent.children.reduce(function (acc, child) {
        return acc && child.disabled;
      }, true);
      if (parent.disabled === pDisabled) return;
      parent.disabled = pDisabled;
    }
    this.markWillUpdateNode(parent);
    this.walkUp(parent, changeState);
  }
};
Tree.prototype.walkDown = function (node, changeState) {
  var _this8 = this;
  if (node.children && node.children.length) {
    node.children.forEach(function (child) {
      if (changeState === 'status' && child.disabled) return;
      child[changeState] = node[changeState];
      _this8.markWillUpdateNode(child);
      _this8.walkDown(child, changeState);
    });
  }
};
Tree.prototype.updateLiElement = function (node) {
  var classList = this.liElementsById[node.id].classList;
  switch (node.status) {
    case 0:
      classList.remove('treejs-node__halfchecked', 'treejs-node__checked');
      break;
    case 1:
      classList.remove('treejs-node__checked');
      classList.add('treejs-node__halfchecked');
      break;
    case 2:
      classList.remove('treejs-node__halfchecked');
      classList.add('treejs-node__checked');
      break;
  }
  switch (node.disabled) {
    case true:
      if (!classList.contains('treejs-node__disabled')) {
        classList.add('treejs-node__disabled');
      }
      break;
    case false:
      if (classList.contains('treejs-node__disabled')) {
        classList.remove('treejs-node__disabled');
      }
      break;
  }
};
Tree.prototype.collapseAll = function () {
  var leafNodesById = this.leafNodesById;
  for (var id in leafNodesById) {
    var leafNode = leafNodesById[id];
    collapseFromLeaf(this, leafNode);
  }
};
Tree.prototype.expandAll = function () {
  expandFromRoot(this, this.treeNodes[0]);
};
Tree.parseTreeData = function (data) {
  var treeNodes = deepClone(data);
  var nodesById = {};
  var leafNodesById = {};
  var values = [];
  var disables = [];
  var walkTree = function walkTree(nodes, parent) {
    nodes.forEach(function (node) {
      nodesById[node.id] = node;
      if (node.checked) values.push(node.id);
      if (node.disabled) disables.push(node.id);
      if (parent) node.parent = parent;
      if (node.children && node.children.length) {
        walkTree(node.children, node);
      } else {
        leafNodesById[node.id] = node;
      }
    });
  };
  walkTree(treeNodes);
  return {
    treeNodes: treeNodes,
    nodesById: nodesById,
    leafNodesById: leafNodesById,
    defaultValues: values,
    defaultDisables: disables
  };
};
Tree.createRootEle = function () {
  var div = document.createElement('div');
  div.classList.add('treejs');
  return div;
};
Tree.createUlEle = function (options) {
  var ul = document.createElement('ul');
  ul.classList.add('treejs-nodes');
  if (options && options.ulClass) ul.classList.add(options.ulClass);
  return ul;
};
Tree.createLiEle = function (node, closed, options) {
  var li = document.createElement('li');
  li.classList.add('treejs-node');
  if (options && options.liClass) li.classList.add(options.liClass);
  if (closed) li.classList.add('treejs-node__close');
  if (node.children && node.children.length) {
    var switcher = document.createElement('span');
    switcher.classList.add('treejs-switcher');
    if (options && options.switcherClass) switcher.classList.add(options.switcherClass);
    li.appendChild(switcher);
  } else {
    li.classList.add('treejs-placeholder');
  }
  var checkbox = document.createElement('span');
  checkbox.classList.add('treejs-checkbox');
  if (options && options.checkboxClass) checkbox.classList.add(options.checkboxClass);
  li.appendChild(checkbox);
  var label = document.createElement('span');
  label.classList.add('treejs-label');
  if (options && options.labelClass) label.classList.add(options.labelClass);
  var text = document.createTextNode(node.text);
  label.appendChild(text);
  li.appendChild(label);
  li.nodeId = node.id;
  return li;
};
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tree.js.map