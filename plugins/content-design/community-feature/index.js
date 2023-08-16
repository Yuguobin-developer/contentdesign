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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/community-feature/src/index.js");
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

/***/ "./wp-content/plugins/content-design/community-feature/src/icon.js":
/*!*************************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-feature/src/icon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"post\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M22,3 L22,11 L2,11 L2,3 L22,3 Z M21,4 L3,4 L3,10 L21,10 L21,4 Z\",\n  id: \"Combined-Shape\",\n  fill: \"#C9007A\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"13\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"15\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"17\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"20\",\n  width: \"5\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"8\",\n  y: \"20\",\n  width: \"1\",\n  height: \"1\"\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWZlYXR1cmUvc3JjL2ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWZlYXR1cmUvc3JjL2ljb24uanM/YmQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHdpZHRoOiBcIjI0cHhcIixcbiAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJwb3N0XCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIFwic3Ryb2tlLXdpZHRoXCI6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjIsMyBMMjIsMTEgTDIsMTEgTDIsMyBMMjIsMyBaIE0yMSw0IEwzLDQgTDMsMTAgTDIxLDEwIEwyMSw0IFpcIixcbiAgaWQ6IFwiQ29tYmluZWQtU2hhcGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNDOTAwN0FcIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMTNcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxNVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjE3XCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNDOTAwN0FcIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMjBcIixcbiAgd2lkdGg6IFwiNVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiOFwiLFxuICB5OiBcIjIwXCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-feature/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-feature/src/index.js":
/*!**************************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-feature/src/index.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/community-feature/src/icon.js\");\n\n\n\n\n\n\n\n //http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('content-design/community-feature', {\n  title: 'Community feature',\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'h2'\n    },\n    link: {\n      type: 'string',\n      selector: 'a'\n    },\n    color: {\n      type: 'string',\n      default: '#ffffff'\n    },\n    alignRight: {\n      type: 'boolean',\n      default: false\n    },\n    selectedPost: {\n      type: 'number',\n      default: 0\n    }\n  },\n  icon: _icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  category: 'content-design',\n  example: {\n    attributes: {\n      selectedPost: 99\n    }\n  },\n  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"withSelect\"])(function (select, props) {\n    var _select = select('core'),\n        getMedia = _select.getMedia;\n\n    var selectedPost = props.attributes.selectedPost;\n    var query = {\n      categories: post_block.category_id\n    }; // console.log('post_block.category_id', post_block.category_id)\n\n    var posts = select('core').getEntityRecords('postType', 'post', query);\n    var post = posts ? posts.find(function (_ref) {\n      var id = _ref.id;\n      return id === parseInt(selectedPost);\n    }) : null;\n    var media = post && post.featured_media ? getMedia(post.featured_media) : null;\n    return {\n      posts: posts,\n      post: post,\n      media: media\n    };\n  })(function (_ref2) {\n    var posts = _ref2.posts,\n        post = _ref2.post,\n        media = _ref2.media,\n        attributes = _ref2.attributes,\n        setAttributes = _ref2.setAttributes,\n        className = _ref2.className;\n\n    var setSelectedPost = function setSelectedPost(selectedPost) {\n      setAttributes({\n        selectedPost: parseInt(selectedPost)\n      });\n    };\n\n    var setBackgroundColor = function setBackgroundColor(backgroundColor) {\n      console.log('backgroundColor', backgroundColor.hex);\n      setAttributes({\n        color: backgroundColor.hex\n      });\n    };\n\n    var setAlignLeft = function setAlignLeft(alignRight) {\n      console.log('alignRight', alignRight);\n      setAttributes({\n        alignRight: !alignRight\n      });\n    };\n\n    if (!posts) {\n      return 'Loading...';\n    }\n\n    if (posts && posts.length === 0) {\n      return 'No posts ';\n    }\n\n    var options = posts.map(function (post) {\n      return {\n        value: post.id,\n        label: post.title.rendered,\n        selected: post.id === parseInt(attributes.selectedPost)\n      };\n    });\n    options.unshift({\n      value: 0,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select a Post')\n    });\n    var title = post ? post.title.rendered : 'Select post from sidebar';\n    var body = post ? post.content.rendered : 'This block has no content. To select a post open the sidebar using the sproket, click \\'Block\\' then select a post from the dropdown.';\n    var backgroundImage = media && media.source_url ? media.source_url : '';\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelBody\"], {\n      title: 'Content',\n      initialOpen: true\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"SelectControl\"], {\n      value: attributes.selectedPost,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select a Post'),\n      options: options,\n      onChange: setSelectedPost\n    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, \"Background color\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"ColorPicker\"], {\n      label: 'Background color',\n      color: attributes.color,\n      onChangeComplete: setBackgroundColor,\n      disableAlpha: true\n    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, \"Image alignment\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"ToggleControl\"], {\n      label: attributes.alignRight ? 'Align right' : 'Align left',\n      checked: attributes.alignRight,\n      onChange: function onChange() {\n        setAttributes({\n          alignRight: !attributes.alignRight\n        });\n      }\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('community-feature', {\n        'community-feature-right': attributes.alignRight\n      }),\n      style: {\n        backgroundColor: attributes.color\n      }\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"community-feature-image\",\n      style: {\n        backgroundImage: 'url(' + backgroundImage + ')'\n      }\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"community-feature-content\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"community-feature-content-wrapper\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: body\n      }\n    })))));\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWZlYXR1cmUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL2NvbW11bml0eS1mZWF0dXJlL3NyYy9pbmRleC5qcz84NzA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIFBvc3RGZWF0dXJlZEltYWdlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgU2VsZWN0Q29udHJvbCwgUGFuZWwsIFBhbmVsQm9keSwgUGFuZWxSb3csIENvbG9yUGlja2VyLCBUb2dnbGVDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nOyAvL2h0dHA6Ly9qc2Nob2YuY29tL2d1dGVuYmVyZy1ibG9ja3MvdHV0b3JpYWwvYmVnaW5uZXItZ3V0ZW5iZXJnLWJsb2NrLWFuLWVhc3ktbWVkaWEtYmxvY2std2l0aC1tZWRpYS11cGxvYWQtYW5kLXJpY2h0ZXh0L1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWZlYXR1cmUnLCB7XG4gIHRpdGxlOiAnQ29tbXVuaXR5IGZlYXR1cmUnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdoMidcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdhJ1xuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJyNmZmZmZmYnXG4gICAgfSxcbiAgICBhbGlnblJpZ2h0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgc2VsZWN0ZWRQb3N0OiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG4gIGljb246IGljb24sXG4gIGNhdGVnb3J5OiAnY29udGVudC1kZXNpZ24nLFxuICBleGFtcGxlOiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc2VsZWN0ZWRQb3N0OiA5OVxuICAgIH1cbiAgfSxcbiAgZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0LCBwcm9wcykge1xuICAgIHZhciBfc2VsZWN0ID0gc2VsZWN0KCdjb3JlJyksXG4gICAgICAgIGdldE1lZGlhID0gX3NlbGVjdC5nZXRNZWRpYTtcblxuICAgIHZhciBzZWxlY3RlZFBvc3QgPSBwcm9wcy5hdHRyaWJ1dGVzLnNlbGVjdGVkUG9zdDtcbiAgICB2YXIgcXVlcnkgPSB7XG4gICAgICBjYXRlZ29yaWVzOiBwb3N0X2Jsb2NrLmNhdGVnb3J5X2lkXG4gICAgfTsgLy8gY29uc29sZS5sb2coJ3Bvc3RfYmxvY2suY2F0ZWdvcnlfaWQnLCBwb3N0X2Jsb2NrLmNhdGVnb3J5X2lkKVxuXG4gICAgdmFyIHBvc3RzID0gc2VsZWN0KCdjb3JlJykuZ2V0RW50aXR5UmVjb3JkcygncG9zdFR5cGUnLCAncG9zdCcsIHF1ZXJ5KTtcbiAgICB2YXIgcG9zdCA9IHBvc3RzID8gcG9zdHMuZmluZChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGlkID0gX3JlZi5pZDtcbiAgICAgIHJldHVybiBpZCA9PT0gcGFyc2VJbnQoc2VsZWN0ZWRQb3N0KTtcbiAgICB9KSA6IG51bGw7XG4gICAgdmFyIG1lZGlhID0gcG9zdCAmJiBwb3N0LmZlYXR1cmVkX21lZGlhID8gZ2V0TWVkaWEocG9zdC5mZWF0dXJlZF9tZWRpYSkgOiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0czogcG9zdHMsXG4gICAgICBwb3N0OiBwb3N0LFxuICAgICAgbWVkaWE6IG1lZGlhXG4gICAgfTtcbiAgfSkoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHBvc3RzID0gX3JlZjIucG9zdHMsXG4gICAgICAgIHBvc3QgPSBfcmVmMi5wb3N0LFxuICAgICAgICBtZWRpYSA9IF9yZWYyLm1lZGlhLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYyLnNldEF0dHJpYnV0ZXMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZTtcblxuICAgIHZhciBzZXRTZWxlY3RlZFBvc3QgPSBmdW5jdGlvbiBzZXRTZWxlY3RlZFBvc3Qoc2VsZWN0ZWRQb3N0KSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgc2VsZWN0ZWRQb3N0OiBwYXJzZUludChzZWxlY3RlZFBvc3QpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIHNldEJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kQ29sb3InLCBiYWNrZ3JvdW5kQ29sb3IuaGV4KTtcbiAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBjb2xvcjogYmFja2dyb3VuZENvbG9yLmhleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBzZXRBbGlnbkxlZnQgPSBmdW5jdGlvbiBzZXRBbGlnbkxlZnQoYWxpZ25SaWdodCkge1xuICAgICAgY29uc29sZS5sb2coJ2FsaWduUmlnaHQnLCBhbGlnblJpZ2h0KTtcbiAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBhbGlnblJpZ2h0OiAhYWxpZ25SaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICghcG9zdHMpIHtcbiAgICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gICAgfVxuXG4gICAgaWYgKHBvc3RzICYmIHBvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdObyBwb3N0cyAnO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcG9zdC5pZCxcbiAgICAgICAgbGFiZWw6IHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgICAgIHNlbGVjdGVkOiBwb3N0LmlkID09PSBwYXJzZUludChhdHRyaWJ1dGVzLnNlbGVjdGVkUG9zdClcbiAgICAgIH07XG4gICAgfSk7XG4gICAgb3B0aW9ucy51bnNoaWZ0KHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgbGFiZWw6IF9fKCdTZWxlY3QgYSBQb3N0JylcbiAgICB9KTtcbiAgICB2YXIgdGl0bGUgPSBwb3N0ID8gcG9zdC50aXRsZS5yZW5kZXJlZCA6ICdTZWxlY3QgcG9zdCBmcm9tIHNpZGViYXInO1xuICAgIHZhciBib2R5ID0gcG9zdCA/IHBvc3QuY29udGVudC5yZW5kZXJlZCA6ICdUaGlzIGJsb2NrIGhhcyBubyBjb250ZW50LiBUbyBzZWxlY3QgYSBwb3N0IG9wZW4gdGhlIHNpZGViYXIgdXNpbmcgdGhlIHNwcm9rZXQsIGNsaWNrIFxcJ0Jsb2NrXFwnIHRoZW4gc2VsZWN0IGEgcG9zdCBmcm9tIHRoZSBkcm9wZG93bi4nO1xuICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSBtZWRpYSAmJiBtZWRpYS5zb3VyY2VfdXJsID8gbWVkaWEuc291cmNlX3VybCA6ICcnO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSwgY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcbiAgICAgIHRpdGxlOiAnQ29udGVudCcsXG4gICAgICBpbml0aWFsT3BlbjogdHJ1ZVxuICAgIH0sIGNyZWF0ZUVsZW1lbnQoUGFuZWxSb3csIG51bGwsIGNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQb3N0LFxuICAgICAgbGFiZWw6IF9fKCdTZWxlY3QgYSBQb3N0JyksXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgb25DaGFuZ2U6IHNldFNlbGVjdGVkUG9zdFxuICAgIH0pKSwgY3JlYXRlRWxlbWVudChQYW5lbFJvdywgbnVsbCwgXCJCYWNrZ3JvdW5kIGNvbG9yXCIpLCBjcmVhdGVFbGVtZW50KFBhbmVsUm93LCBudWxsLCBjcmVhdGVFbGVtZW50KENvbG9yUGlja2VyLCB7XG4gICAgICBsYWJlbDogJ0JhY2tncm91bmQgY29sb3InLFxuICAgICAgY29sb3I6IGF0dHJpYnV0ZXMuY29sb3IsXG4gICAgICBvbkNoYW5nZUNvbXBsZXRlOiBzZXRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlQWxwaGE6IHRydWVcbiAgICB9KSksIGNyZWF0ZUVsZW1lbnQoUGFuZWxSb3csIG51bGwsIFwiSW1hZ2UgYWxpZ25tZW50XCIpLCBjcmVhdGVFbGVtZW50KFBhbmVsUm93LCBudWxsLCBjcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBhdHRyaWJ1dGVzLmFsaWduUmlnaHQgPyAnQWxpZ24gcmlnaHQnIDogJ0FsaWduIGxlZnQnLFxuICAgICAgY2hlY2tlZDogYXR0cmlidXRlcy5hbGlnblJpZ2h0LFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBhbGlnblJpZ2h0OiAhYXR0cmlidXRlcy5hbGlnblJpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygnY29tbXVuaXR5LWZlYXR1cmUnLCB7XG4gICAgICAgICdjb21tdW5pdHktZmVhdHVyZS1yaWdodCc6IGF0dHJpYnV0ZXMuYWxpZ25SaWdodFxuICAgICAgfSksXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGF0dHJpYnV0ZXMuY29sb3JcbiAgICAgIH1cbiAgICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjb21tdW5pdHktZmVhdHVyZS1pbWFnZVwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UgKyAnKSdcbiAgICAgIH1cbiAgICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29tbXVuaXR5LWZlYXR1cmUtY29udGVudFwiXG4gICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29tbXVuaXR5LWZlYXR1cmUtY29udGVudC13cmFwcGVyXCJcbiAgICB9LCBjcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgdGl0bGUpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogYm9keVxuICAgICAgfVxuICAgIH0pKSkpKTtcbiAgfSlcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-feature/src/index.js\n");

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

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });