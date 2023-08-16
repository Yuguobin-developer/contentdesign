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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/src/icon.js":
/*!*******************************************************!*\
  !*** ./wp-content/plugins/content-design/src/icon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * WordPress dependencies\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"SVG\"], {\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"G\"], {\n  stroke: 'none'\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"], {\n  fill: '#35BDFF',\n  cx: 12,\n  cy: 12,\n  r: 12\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"], {\n  fill: '#0096E5',\n  cx: 7.47906977,\n  cy: 12.055814,\n  r: 7.47906977\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"], {\n  fill: '#0077C5',\n  cx: 4.01860465,\n  cy: 12.055814,\n  r: 4.01860465\n})))); //\n// <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n// <g id=\"favicon\">\n// <circle id=\"Oval\" fill=\"#35BDFF\" cx=\"12\" cy=\"12\" r=\"12\"></circle>\n// <circle id=\"Oval\" fill=\"#0096E5\" cx=\"7.47906977\" cy=\"12.055814\" r=\"7.47906977\"></circle>\n// <circle id=\"Oval\" fill=\"#0077C5\" cx=\"4.01860465\" cy=\"12.055814\" r=\"4.01860465\"></circle>\n// </g>\n// </g>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vc3JjL2ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vc3JjL2ljb24uanM/NzBkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgRywgQ2lyY2xlLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChHLCB7XG4gIHN0cm9rZTogJ25vbmUnXG59LCBjcmVhdGVFbGVtZW50KENpcmNsZSwge1xuICBmaWxsOiAnIzM1QkRGRicsXG4gIGN4OiAxMixcbiAgY3k6IDEyLFxuICByOiAxMlxufSksIGNyZWF0ZUVsZW1lbnQoQ2lyY2xlLCB7XG4gIGZpbGw6ICcjMDA5NkU1JyxcbiAgY3g6IDcuNDc5MDY5NzcsXG4gIGN5OiAxMi4wNTU4MTQsXG4gIHI6IDcuNDc5MDY5Nzdcbn0pLCBjcmVhdGVFbGVtZW50KENpcmNsZSwge1xuICBmaWxsOiAnIzAwNzdDNScsXG4gIGN4OiA0LjAxODYwNDY1LFxuICBjeTogMTIuMDU1ODE0LFxuICByOiA0LjAxODYwNDY1XG59KSkpOyAvL1xuLy8gPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuLy8gPGcgaWQ9XCJmYXZpY29uXCI+XG4vLyA8Y2lyY2xlIGlkPVwiT3ZhbFwiIGZpbGw9XCIjMzVCREZGXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTJcIj48L2NpcmNsZT5cbi8vIDxjaXJjbGUgaWQ9XCJPdmFsXCIgZmlsbD1cIiMwMDk2RTVcIiBjeD1cIjcuNDc5MDY5NzdcIiBjeT1cIjEyLjA1NTgxNFwiIHI9XCI3LjQ3OTA2OTc3XCI+PC9jaXJjbGU+XG4vLyA8Y2lyY2xlIGlkPVwiT3ZhbFwiIGZpbGw9XCIjMDA3N0M1XCIgY3g9XCI0LjAxODYwNDY1XCIgY3k9XCIxMi4wNTU4MTRcIiByPVwiNC4wMTg2MDQ2NVwiPjwvY2lyY2xlPlxuLy8gPC9nPlxuLy8gPC9nPiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/src/index.js":
/*!********************************************************!*\
  !*** ./wp-content/plugins/content-design/src/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/src/icon.js\");\n // import { addFilter } from '@wordpress/hooks';\n\n // import assign from 'lodash.assign';\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"updateCategory\"])('content-design', {\n  icon: _icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}); //\n// addFilter(\n//   'blocks.getSaveContent.extraProps',\n//   'content-design/do',\n//   ( props ) => {\n//     return assign( props, { style: { backgroundColor: 'red' } } )\n//   }\n// );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL3NyYy9pbmRleC5qcz9lZTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZGF0ZUNhdGVnb3J5IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnOyAvLyBpbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJzsgLy8gaW1wb3J0IGFzc2lnbiBmcm9tICdsb2Rhc2guYXNzaWduJztcblxudXBkYXRlQ2F0ZWdvcnkoJ2NvbnRlbnQtZGVzaWduJywge1xuICBpY29uOiBpY29uXG59KTsgLy9cbi8vIGFkZEZpbHRlcihcbi8vICAgJ2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcbi8vICAgJ2NvbnRlbnQtZGVzaWduL2RvJyxcbi8vICAgKCBwcm9wcyApID0+IHtcbi8vICAgICByZXR1cm4gYXNzaWduKCBwcm9wcywgeyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnIH0gfSApXG4vLyAgIH1cbi8vICk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/src/index.js\n");

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

/***/ })

/******/ });