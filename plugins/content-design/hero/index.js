/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/hero/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzRkMjYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLFVBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/classnames/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/hero/src/example.js":
/*!***************************************************************!*\
  !*** ./wp-content/plugins/content-design/hero/src/example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vaGVyby9zcmMvZXhhbXBsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9oZXJvL3NyYy9leGFtcGxlLmpzPzBhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/hero/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/hero/src/icon.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/hero/src/icon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"hero\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M2,6 L2,18 L22,18 L22,6 L2,6 Z M20,16 L4,16 L4,8 L20,8 L20,16 Z\",\n  id: \"Shape\",\n  fill: \"#C9007A\",\n  \"fill-rule\": \"nonzero\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"3\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"20\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"22\",\n  width: \"20\",\n  height: \"1\"\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vaGVyby9zcmMvaWNvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9oZXJvL3NyYy9pY29uLmpzP2FjYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB3aWR0aDogXCIyNHB4XCIsXG4gIGhlaWdodDogXCIyNHB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiaGVyb1wiLFxuICBzdHJva2U6IFwibm9uZVwiLFxuICBcInN0cm9rZS13aWR0aFwiOiBcIjFcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiXG59LCBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIsNiBMMiwxOCBMMjIsMTggTDIyLDYgTDIsNiBaIE0yMCwxNiBMNCwxNiBMNCw4IEwyMCw4IEwyMCwxNiBaXCIsXG4gIGlkOiBcIlNoYXBlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q0RDdEQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjJcIixcbiAgeTogXCIzXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjIwXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjIyXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/hero/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/hero/src/index.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/hero/src/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/hero/src/icon.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/hero/src/example.js\");\n\n\n\n // import {MediaUpload} from '@wordpress/editor'\n\n // import edit from './edit'\n\n // import save from './save'\n//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"registerBlockType\"])('content-design/hero', {\n  title: 'Hero image',\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'img',\n      attribute: 'src'\n    }\n  },\n  icon: _icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  category: 'content-design',\n  example: {\n    attributes: {\n      mediaURL: 'http://localhost:3000/wp-content/uploads/2019/11/homepage-1024x434.jpg'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes,\n        className = _ref.className,\n        isSelected = _ref.isSelected;\n\n    var selectImage = function selectImage(media) {\n      setAttributes({\n        mediaURL: media.url,\n        mediaID: media.id\n      });\n    };\n\n    var selectedClass = isSelected ? className + '-selected' : '';\n    var classes = [className, selectedClass];\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes)\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"MediaUpload\"], {\n      onSelect: selectImage,\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n          onClick: open\n        }, attributes.mediaURL ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n          className: className + \"-image\",\n          style: {\n            backgroundImage: 'url(' + attributes.mediaURL + ')'\n          }\n        }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n          className: className + \"-button\"\n        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", {\n          className: className + '-big'\n        }, \"Click to select an image.\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", {\n          className: className + '-small'\n        }, \"Minimum size 1440 x 540\"))));\n      }\n    }));\n  },\n  save: function save(_ref3) {\n    var mediaURL = _ref3.attributes.mediaURL;\n    var className = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"getBlockDefaultClassName\"])('content-design/hero');\n    var imageClass = className + '-image';\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, className, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: imageClass,\n      style: {\n        backgroundImage: 'url(' + mediaURL + ')'\n      }\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vaGVyby9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vaGVyby9zcmMvaW5kZXguanM/MDIyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IFJpY2hUZXh0LCBNZWRpYVVwbG9hZCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnOyAvLyBpbXBvcnQge01lZGlhVXBsb2FkfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcidcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJzsgLy8gaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuXG5pbXBvcnQgZXhhbXBsZSBmcm9tICcuL2V4YW1wbGUnOyAvLyBpbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG4vL2h0dHA6Ly9qc2Nob2YuY29tL2d1dGVuYmVyZy1ibG9ja3MvdHV0b3JpYWwvYmVnaW5uZXItZ3V0ZW5iZXJnLWJsb2NrLWFuLWVhc3ktbWVkaWEtYmxvY2std2l0aC1tZWRpYS11cGxvYWQtYW5kLXJpY2h0ZXh0L1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY29udGVudC1kZXNpZ24vaGVybycsIHtcbiAgdGl0bGU6ICdIZXJvIGltYWdlJyxcbiAgYXR0cmlidXRlczoge1xuICAgIG1lZGlhSUQ6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSxcbiAgICBtZWRpYVVSTDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuICAgICAgc2VsZWN0b3I6ICdpbWcnLFxuICAgICAgYXR0cmlidXRlOiAnc3JjJ1xuICAgIH1cbiAgfSxcbiAgaWNvbjogaWNvbixcbiAgY2F0ZWdvcnk6ICdjb250ZW50LWRlc2lnbicsXG4gIGV4YW1wbGU6IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBtZWRpYVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9ob21lcGFnZS0xMDI0eDQzNC5qcGcnXG4gICAgfVxuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQ7XG5cbiAgICB2YXIgc2VsZWN0SW1hZ2UgPSBmdW5jdGlvbiBzZWxlY3RJbWFnZShtZWRpYSkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIG1lZGlhVVJMOiBtZWRpYS51cmwsXG4gICAgICAgIG1lZGlhSUQ6IG1lZGlhLmlkXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHNlbGVjdGVkQ2xhc3MgPSBpc1NlbGVjdGVkID8gY2xhc3NOYW1lICsgJy1zZWxlY3RlZCcgOiAnJztcbiAgICB2YXIgY2xhc3NlcyA9IFtjbGFzc05hbWUsIHNlbGVjdGVkQ2xhc3NdO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc2VzKVxuICAgIH0sIGNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgIG9uU2VsZWN0OiBzZWxlY3RJbWFnZSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICAgIHZhciBvcGVuID0gX3JlZjIub3BlbjtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIG9uQ2xpY2s6IG9wZW5cbiAgICAgICAgfSwgYXR0cmlidXRlcy5tZWRpYVVSTCA/IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lICsgXCItaW1hZ2VcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBhdHRyaWJ1dGVzLm1lZGlhVVJMICsgJyknXG4gICAgICAgICAgfVxuICAgICAgICB9KSA6IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lICsgXCItYnV0dG9uXCJcbiAgICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnLWJpZydcbiAgICAgICAgfSwgXCJDbGljayB0byBzZWxlY3QgYW4gaW1hZ2UuXCIpLCBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnLXNtYWxsJ1xuICAgICAgICB9LCBcIk1pbmltdW0gc2l6ZSAxNDQwIHggNTQwXCIpKSkpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMykge1xuICAgIHZhciBtZWRpYVVSTCA9IF9yZWYzLmF0dHJpYnV0ZXMubWVkaWFVUkw7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSgnY29udGVudC1kZXNpZ24vaGVybycpO1xuICAgIHZhciBpbWFnZUNsYXNzID0gY2xhc3NOYW1lICsgJy1pbWFnZSc7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCBjbGFzc05hbWUsIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBpbWFnZUNsYXNzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBtZWRpYVVSTCArICcpJ1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/hero/src/index.js\n");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });