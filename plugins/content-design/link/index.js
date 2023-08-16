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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/link/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/link/src/attributes.js":
/*!******************************************************************!*\
  !*** ./wp-content/plugins/content-design/link/src/attributes.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  content: {\n    type: 'array',\n    source: 'children',\n    selector: 'p'\n  },\n  title: {\n    type: 'string',\n    selector: 'a',\n    default: 'Add a link'\n  },\n  href: {\n    type: 'string',\n    default: '#'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vbGluay9zcmMvYXR0cmlidXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9saW5rL3NyYy9hdHRyaWJ1dGVzLmpzPzY3NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgc2VsZWN0b3I6ICdwJ1xuICB9LFxuICB0aXRsZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIHNlbGVjdG9yOiAnYScsXG4gICAgZGVmYXVsdDogJ0xlYXJuIG1vcmUnXG4gIH0sXG4gIGhyZWY6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnIydcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/link/src/attributes.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/link/src/chevron.js":
/*!***************************************************************!*\
  !*** ./wp-content/plugins/content-design/link/src/chevron.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var fill = _ref.fill,\n      className = _ref.className;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"SVG\"], {\n    viewBox: \"0 0 24 24\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: fill\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Path\"], {\n    d: \"\"\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Path\"], {\n    d: \"M0 0h24v24H0z\",\n    fill: 'none'\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vbGluay9zcmMvY2hldnJvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9saW5rL3NyYy9jaGV2cm9uLmpzP2MzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCB7IEcsIFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGZpbGwgPSBfcmVmLmZpbGwsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGZpbGw6IGZpbGxcbiAgfSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gICAgZDogXCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCJcbiAgfSksIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICAgIGQ6IFwiTTAgMGgyNHYyNEgwelwiLFxuICAgIGZpbGw6ICdub25lJ1xuICB9KSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/link/src/chevron.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/link/src/icon.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/link/src/icon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"link\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"8\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"6\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"12\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"14\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"10\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  \"fill-rule\": \"nonzero\",\n  x: \"2\",\n  y: \"17\",\n  width: \"5\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle-Copy\",\n  fill: \"#C9007A\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"17\",\n  width: \"1\",\n  height: \"1\"\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vbGluay9zcmMvaWNvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9saW5rL3NyYy9pY29uLmpzPzdiODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB3aWR0aDogXCIyNHB4XCIsXG4gIGhlaWdodDogXCIyNHB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwibGlua1wiLFxuICBzdHJva2U6IFwibm9uZVwiLFxuICBcInN0cm9rZS13aWR0aFwiOiBcIjFcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjhcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q0RDdEQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiNlwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxMlwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxNFwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxMFwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxN1wiLFxuICB3aWR0aDogXCI1XCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZS1Db3B5XCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI4XCIsXG4gIHk6IFwiMTdcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSkpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/link/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/link/src/index.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/link/src/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ \"./wp-content/plugins/content-design/link/src/attributes.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/link/src/icon.js\");\n/* harmony import */ var _chevron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chevron */ \"./wp-content/plugins/content-design/link/src/chevron.js\");\n\n\n\n\n\n\n\n //http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('content-design/link', {\n  title: 'Link',\n  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  icon: _icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  category: 'content-design',\n  example: {\n    attributes: {\n      selectedPost: 99\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes,\n        className = _ref.className;\n\n    // const setSelectedTarget = (target) => {\n    //   setAttributes({target})\n    // }\n    var setTitle = function setTitle(title) {\n      setAttributes({\n        title: title\n      });\n    };\n\n    var setHref = function setHref(href) {\n      setAttributes({\n        href: href\n      });\n    };\n\n    var options = [{\n      value: '_self',\n      label: 'Open link in the same window',\n      selected: '_self' === attributes.target\n    }, {\n      value: '_blank',\n      label: 'Open link in a new window',\n      selected: '_blank' === attributes.target\n    }];\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelBody\"], {\n      title: 'Link',\n      initialOpen: true\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n      value: attributes.title,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Title'),\n      options: options,\n      onChange: setTitle\n    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n      value: attributes.href,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Href'),\n      options: options,\n      onChange: setHref\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n      href: attributes.href\n    }, attributes.title, \" \", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_chevron__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      fill: '#C9007A'\n    })));\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var href = attributes.href.replace(/\\/+$/, \"\");\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: attributes.className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n      href: href\n    }, attributes.title, \" \", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_chevron__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      fill: '#C9007A'\n    })));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vbGluay9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vbGluay9zcmMvaW5kZXguanM/NDY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzLCBQb3N0RmVhdHVyZWRJbWFnZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sLCBQYW5lbCwgUGFuZWxCb2R5LCBQYW5lbFJvdyB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBJY29uIGZyb20gJy4vY2hldnJvbic7IC8vaHR0cDovL2pzY2hvZi5jb20vZ3V0ZW5iZXJnLWJsb2Nrcy90dXRvcmlhbC9iZWdpbm5lci1ndXRlbmJlcmctYmxvY2stYW4tZWFzeS1tZWRpYS1ibG9jay13aXRoLW1lZGlhLXVwbG9hZC1hbmQtcmljaHRleHQvXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjb250ZW50LWRlc2lnbi9saW5rJywge1xuICB0aXRsZTogJ0xpbmsnLFxuICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICBpY29uOiBpY29uLFxuICBjYXRlZ29yeTogJ2NvbnRlbnQtZGVzaWduJyxcbiAgZXhhbXBsZToge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHNlbGVjdGVkUG9zdDogOTlcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblxuICAgIC8vIGNvbnN0IHNldFNlbGVjdGVkVGFyZ2V0ID0gKHRhcmdldCkgPT4ge1xuICAgIC8vICAgc2V0QXR0cmlidXRlcyh7dGFyZ2V0fSlcbiAgICAvLyB9XG4gICAgdmFyIHNldFRpdGxlID0gZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgc2V0SHJlZiA9IGZ1bmN0aW9uIHNldEhyZWYoaHJlZikge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGhyZWY6IGhyZWZcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IFt7XG4gICAgICB2YWx1ZTogJ19zZWxmJyxcbiAgICAgIGxhYmVsOiAnT3BlbiBsaW5rIGluIHRoZSBzYW1lIHdpbmRvdycsXG4gICAgICBzZWxlY3RlZDogJ19zZWxmJyA9PT0gYXR0cmlidXRlcy50YXJnZXRcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogJ19ibGFuaycsXG4gICAgICBsYWJlbDogJ09wZW4gbGluayBpbiBhIG5ldyB3aW5kb3cnLFxuICAgICAgc2VsZWN0ZWQ6ICdfYmxhbmsnID09PSBhdHRyaWJ1dGVzLnRhcmdldFxuICAgIH1dO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSwgY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcbiAgICAgIHRpdGxlOiAnTGluaycsXG4gICAgICBpbml0aWFsT3BlbjogdHJ1ZVxuICAgIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICBsYWJlbDogX18oJ1RpdGxlJyksXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgb25DaGFuZ2U6IHNldFRpdGxlXG4gICAgfSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmhyZWYsXG4gICAgICBsYWJlbDogX18oJ0hyZWYnKSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZTogc2V0SHJlZlxuICAgIH0pKSkpLCBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBocmVmOiBhdHRyaWJ1dGVzLmhyZWZcbiAgICB9LCBhdHRyaWJ1dGVzLnRpdGxlLCBcIiBcIiwgY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICBmaWxsOiAnI0M5MDA3QSdcbiAgICB9KSkpO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuICAgIHZhciBocmVmID0gYXR0cmlidXRlcy5ocmVmLnJlcGxhY2UoL1xcLyskLywgXCJcIik7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuICAgIH0sIGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGhyZWY6IGhyZWZcbiAgICB9LCBhdHRyaWJ1dGVzLnRpdGxlLCBcIiBcIiwgY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICBmaWxsOiAnI0M5MDA3QSdcbiAgICB9KSkpO1xuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/link/src/index.js\n");

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