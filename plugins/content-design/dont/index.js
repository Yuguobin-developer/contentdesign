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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/dont/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/dont/src/edit.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/edit.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./wp-content/plugins/content-design/dont/src/style.js\");\n\n\n\n\nvar DoEdit = function DoEdit(props) {\n  var setAttributes = props.setAttributes,\n      className = props.className;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n    src: dont_block.image,\n    style: _style__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvZWRpdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9kb250L3NyYy9lZGl0LmpzPzEzYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCB7IElubmVyQmxvY2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUnO1xuXG52YXIgRG9FZGl0ID0gZnVuY3Rpb24gRG9FZGl0KHByb3BzKSB7XG4gIHZhciBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiBkb250X2Jsb2NrLmltYWdlLFxuICAgIHN0eWxlOiBTdHlsZS5pbWdcbiAgfSksIGNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvRWRpdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/edit.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/dont/src/example.js":
/*!***************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  innerBlocks: [{\n    name: 'core/paragraph',\n    attributes: {\n      content: '<b>Skip breakfast</b>'\n    }\n  }, {\n    name: 'core/paragraph',\n    attributes: {\n      content: 'If you miss breakfast, you\\'ll feel tired the rest of the day.'\n    }\n  }, {\n    name: 'core/list',\n    attributes: {\n      values: '<li>Too busy</li><li>Late for work</li><li>Gotta run</li><li>No bananas</li><li>Slept in</li>'\n    }\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvZXhhbXBsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9kb250L3NyYy9leGFtcGxlLmpzPzViOWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBpbm5lckJsb2NrczogW3tcbiAgICBuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNvbnRlbnQ6ICc8Yj5Ta2lwIGJyZWFrZmFzdDwvYj4nXG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBjb250ZW50OiAnSWYgeW91IG1pc3MgYnJlYWtmYXN0LCB5b3VcXCdsbCBmZWVsIHRpcmVkIHRoZSByZXN0IG9mIHRoZSBkYXkuJ1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdjb3JlL2xpc3QnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHZhbHVlczogJzxsaT5Ub28gYnVzeTwvbGk+PGxpPkxhdGUgZm9yIHdvcms8L2xpPjxsaT5Hb3R0YSBydW48L2xpPjxsaT5ObyBiYW5hbmFzPC9saT48bGk+U2xlcHQgaW48L2xpPidcbiAgICB9XG4gIH1dXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/dont/src/icon.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/icon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n// const el = wp.element.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"dont\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"gray\",\n  transform: \"translate(2.000000, 1.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"0\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"2\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"18\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"20\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"red\",\n  transform: \"translate(3.000000, 6.000000)\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"0\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"2\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"4\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"4\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"6\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"6\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"8\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"8\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"10\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"10\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"circle\", {\n  id: \"Oval\",\n  stroke: \"#D52B1E\",\n  \"stroke-width\": \"0.5\",\n  cx: \"2\",\n  cy: \"2\",\n  r: \"2.25\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M2.90604726,1.09395651 C2.78077693,0.968681165 2.57829395,0.968681165 2.45302363,1.09395651 L2,1.54699828 L1.54697637,1.09395651 C1.42170605,0.968681165 1.21890268,0.968681165 1.09395274,1.09395651 C0.968682419,1.21923185 0.968682419,1.42172294 1.09395274,1.54699828 L1.54697637,2.00004005 L1.09395274,2.45308182 C0.968682419,2.57835716 0.968682419,2.78116865 1.09395274,2.90612359 C1.15642771,2.96892146 1.23844614,3 1.32046456,3 C1.40248298,3 1.4845014,2.96892146 1.54697637,2.90612359 L2,2.45308182 L2.45302363,2.90612359 C2.5154986,2.96892146 2.59751702,3 2.67953544,3 C2.76155386,3 2.84357229,2.96892146 2.90604726,2.90612359 C3.03131758,2.78116865 3.03131758,2.57835716 2.90604726,2.45308182 L2.45302363,2.00004005 L2.90604726,1.54699828 C3.03131758,1.42172294 3.03131758,1.21923185 2.90604726,1.09395651 Z\",\n  id: \"Path\",\n  fill: \"#D52B1E\",\n  \"fill-rule\": \"nonzero\"\n})))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvaWNvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9kb250L3NyYy9pY29uLmpzPzNiOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbi8vIGNvbnN0IGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHdpZHRoOiBcIjI0cHhcIixcbiAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJkb250XCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIFwic3Ryb2tlLXdpZHRoXCI6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiZ3JheVwiLFxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIwXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIyXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIxOFwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgeDogXCIwXCIsXG4gIHk6IFwiMjBcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpLCBjcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcInJlZFwiLFxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDMuMDAwMDAwLCA2LjAwMDAwMClcIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDUyQjFFXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjZcIixcbiAgeTogXCIwXCIsXG4gIHdpZHRoOiBcIjEyXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNENTJCMUVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiNlwiLFxuICB5OiBcIjJcIixcbiAgd2lkdGg6IFwiMTJcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q1MkIxRVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI4XCIsXG4gIHk6IFwiNFwiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDUyQjFFXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjZcIixcbiAgeTogXCI0XCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q1MkIxRVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI4XCIsXG4gIHk6IFwiNlwiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDUyQjFFXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjZcIixcbiAgeTogXCI2XCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q1MkIxRVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI4XCIsXG4gIHk6IFwiOFwiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjRDUyQjFFXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjZcIixcbiAgeTogXCI4XCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q1MkIxRVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI4XCIsXG4gIHk6IFwiMTBcIixcbiAgd2lkdGg6IFwiMTBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0Q1MkIxRVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI2XCIsXG4gIHk6IFwiMTBcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gIGlkOiBcIk92YWxcIixcbiAgc3Ryb2tlOiBcIiNENTJCMUVcIixcbiAgXCJzdHJva2Utd2lkdGhcIjogXCIwLjVcIixcbiAgY3g6IFwiMlwiLFxuICBjeTogXCIyXCIsXG4gIHI6IFwiMi4yNVwiXG59KSwgY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0yLjkwNjA0NzI2LDEuMDkzOTU2NTEgQzIuNzgwNzc2OTMsMC45Njg2ODExNjUgMi41NzgyOTM5NSwwLjk2ODY4MTE2NSAyLjQ1MzAyMzYzLDEuMDkzOTU2NTEgTDIsMS41NDY5OTgyOCBMMS41NDY5NzYzNywxLjA5Mzk1NjUxIEMxLjQyMTcwNjA1LDAuOTY4NjgxMTY1IDEuMjE4OTAyNjgsMC45Njg2ODExNjUgMS4wOTM5NTI3NCwxLjA5Mzk1NjUxIEMwLjk2ODY4MjQxOSwxLjIxOTIzMTg1IDAuOTY4NjgyNDE5LDEuNDIxNzIyOTQgMS4wOTM5NTI3NCwxLjU0Njk5ODI4IEwxLjU0Njk3NjM3LDIuMDAwMDQwMDUgTDEuMDkzOTUyNzQsMi40NTMwODE4MiBDMC45Njg2ODI0MTksMi41NzgzNTcxNiAwLjk2ODY4MjQxOSwyLjc4MTE2ODY1IDEuMDkzOTUyNzQsMi45MDYxMjM1OSBDMS4xNTY0Mjc3MSwyLjk2ODkyMTQ2IDEuMjM4NDQ2MTQsMyAxLjMyMDQ2NDU2LDMgQzEuNDAyNDgyOTgsMyAxLjQ4NDUwMTQsMi45Njg5MjE0NiAxLjU0Njk3NjM3LDIuOTA2MTIzNTkgTDIsMi40NTMwODE4MiBMMi40NTMwMjM2MywyLjkwNjEyMzU5IEMyLjUxNTQ5ODYsMi45Njg5MjE0NiAyLjU5NzUxNzAyLDMgMi42Nzk1MzU0NCwzIEMyLjc2MTU1Mzg2LDMgMi44NDM1NzIyOSwyLjk2ODkyMTQ2IDIuOTA2MDQ3MjYsMi45MDYxMjM1OSBDMy4wMzEzMTc1OCwyLjc4MTE2ODY1IDMuMDMxMzE3NTgsMi41NzgzNTcxNiAyLjkwNjA0NzI2LDIuNDUzMDgxODIgTDIuNDUzMDIzNjMsMi4wMDAwNDAwNSBMMi45MDYwNDcyNiwxLjU0Njk5ODI4IEMzLjAzMTMxNzU4LDEuNDIxNzIyOTQgMy4wMzEzMTc1OCwxLjIxOTIzMTg1IDIuOTA2MDQ3MjYsMS4wOTM5NTY1MSBaXCIsXG4gIGlkOiBcIlBhdGhcIixcbiAgZmlsbDogXCIjRDUyQjFFXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiXG59KSkpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/dont/src/index.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/dont/src/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./wp-content/plugins/content-design/dont/src/edit.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/dont/src/example.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ \"./wp-content/plugins/content-design/dont/src/save.js\");\n\n // Import the element creator function (React abstraction layer)\n\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"registerBlockType\"])('content-design/dont', {\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Don\\'t', 'content-design'),\n  icon: _icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  category: 'content-design',\n  example: _example__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  transforms: {\n    // from: [\n    //   {\n    //     type: 'block',\n    //     blocks: [ 'core/paragraph', 'core/lists' ], // wildcard - match any block\n    //     transform: function( attributes, innerBlocks ) {\n    //       return createBlock( 'content-design/dont', attributes, innerBlocks );\n    //     },\n    //   },\n    // ],\n    to: [{\n      type: 'block',\n      blocks: ['content-design/do'],\n      transform: function transform(attributes, innerBlocks) {\n        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"createBlock\"])('content-design/do', attributes, innerBlocks);\n      }\n    }]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvaW5kZXguanM/ZjMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgY3JlYXRlQmxvY2sgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7IC8vIEltcG9ydCB0aGUgZWxlbWVudCBjcmVhdG9yIGZ1bmN0aW9uIChSZWFjdCBhYnN0cmFjdGlvbiBsYXllcilcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgZXhhbXBsZSBmcm9tICcuL2V4YW1wbGUnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcbnJlZ2lzdGVyQmxvY2tUeXBlKCdjb250ZW50LWRlc2lnbi9kb250Jywge1xuICB0aXRsZTogX18oJ0RvblxcJ3QnLCAnY29udGVudC1kZXNpZ24nKSxcbiAgaWNvbjogaWNvbixcbiAgY2F0ZWdvcnk6ICdjb250ZW50LWRlc2lnbicsXG4gIGV4YW1wbGU6IGV4YW1wbGUsXG4gIGVkaXQ6IGVkaXQsXG4gIHNhdmU6IHNhdmUsXG4gIHRyYW5zZm9ybXM6IHtcbiAgICAvLyBmcm9tOiBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHR5cGU6ICdibG9jaycsXG4gICAgLy8gICAgIGJsb2NrczogWyAnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9saXN0cycgXSwgLy8gd2lsZGNhcmQgLSBtYXRjaCBhbnkgYmxvY2tcbiAgICAvLyAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiggYXR0cmlidXRlcywgaW5uZXJCbG9ja3MgKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGNyZWF0ZUJsb2NrKCAnY29udGVudC1kZXNpZ24vZG9udCcsIGF0dHJpYnV0ZXMsIGlubmVyQmxvY2tzICk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vIF0sXG4gICAgdG86IFt7XG4gICAgICB0eXBlOiAnYmxvY2snLFxuICAgICAgYmxvY2tzOiBbJ2NvbnRlbnQtZGVzaWduL2RvJ10sXG4gICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybShhdHRyaWJ1dGVzLCBpbm5lckJsb2Nrcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlQmxvY2soJ2NvbnRlbnQtZGVzaWduL2RvJywgYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpO1xuICAgICAgfVxuICAgIH1dXG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/dont/src/save.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/save.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./wp-content/plugins/content-design/dont/src/style.js\");\n\n\n\n\nvar DoSave = function DoSave(props) {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n    src: dont_block.image,\n    style: _style__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"].Content, null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvc2F2ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9kb250L3NyYy9zYXZlLmpzPzgxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCB7IElubmVyQmxvY2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUnO1xuXG52YXIgRG9TYXZlID0gZnVuY3Rpb24gRG9TYXZlKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgIHNyYzogZG9udF9ibG9jay5pbWFnZSxcbiAgICBzdHlsZTogU3R5bGUuaW1nXG4gIH0pLCBjcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvU2F2ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/save.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/dont/src/style.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/dont/src/style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = {\n  display: 'block',\n  marginBottom: '10px',\n};\nvar Style = {\n  img: img\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Style);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvc3R5bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG9udC9zcmMvc3R5bGUuanM/Mjg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW1nID0ge1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBoZWlnaHQ6ICcyNXB4JyxcbiAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIHdpZHRoOiAnODRweCdcbn07XG52YXIgU3R5bGUgPSB7XG4gIGltZzogaW1nXG59O1xuZXhwb3J0IGRlZmF1bHQgU3R5bGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/dont/src/style.js\n");

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