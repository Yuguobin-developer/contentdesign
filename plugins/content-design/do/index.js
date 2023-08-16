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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/do/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/do/src/edit.js":
/*!**********************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/edit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./wp-content/plugins/content-design/do/src/style.js\");\n\n\n\n\nvar DoEdit = function DoEdit(props) {\n  var setAttributes = props.setAttributes,\n      className = props.className;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n    src: do_block.image,\n    style: _style__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2VkaXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2VkaXQuanM/YTBkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5cbnZhciBEb0VkaXQgPSBmdW5jdGlvbiBEb0VkaXQocHJvcHMpIHtcbiAgdmFyIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBzcmM6IGRvX2Jsb2NrLmltYWdlLFxuICAgIHN0eWxlOiBTdHlsZS5pbWdcbiAgfSksIGNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvRWRpdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/edit.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/do/src/example.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/example.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  innerBlocks: [{\n    name: 'core/paragraph',\n    attributes: {\n      content: '<b>Eat a good breakfast</b>'\n    }\n  }, {\n    name: 'core/paragraph',\n    attributes: {\n      content: 'Breakfast is known to be the most important meal of the day.'\n    }\n  }, {\n    name: 'core/list',\n    attributes: {\n      values: '<li>Eggs</li><li>Bacon</li><li>Fresh fruit</li><li>Coffee</li><li>Juice</li>'\n    }\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2V4YW1wbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2V4YW1wbGUuanM/ZmFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGlubmVyQmxvY2tzOiBbe1xuICAgIG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDogJzxiPkVhdCBhIGdvb2QgYnJlYWtmYXN0PC9iPidcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNvbnRlbnQ6ICdCcmVha2Zhc3QgaXMga25vd24gdG8gYmUgdGhlIG1vc3QgaW1wb3J0YW50IG1lYWwgb2YgdGhlIGRheS4nXG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2NvcmUvbGlzdCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdmFsdWVzOiAnPGxpPkVnZ3M8L2xpPjxsaT5CYWNvbjwvbGk+PGxpPkZyZXNoIGZydWl0PC9saT48bGk+Q29mZmVlPC9saT48bGk+SnVpY2U8L2xpPidcbiAgICB9XG4gIH1dXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/do/src/icon.js":
/*!**********************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/icon.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n// const el = wp.element.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"do\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"gray\",\n  transform: \"translate(2.000000, 1.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"0\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"2\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"18\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  x: \"0\",\n  y: \"20\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"green\",\n  transform: \"translate(3.000000, 6.000000)\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"0\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"2\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"4\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"4\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"6\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"6\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"8\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"8\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"8\",\n  y: \"10\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\",\n  x: \"6\",\n  y: \"10\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"circle\", {\n  id: \"Oval\",\n  stroke: \"#2CA01C\",\n  \"stroke-width\": \"0.5\",\n  cx: \"2\",\n  cy: \"2\",\n  r: \"2.25\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M1.75009858,3 C1.69652011,3 1.6161524,2.97260274 1.56257393,2.91780822 L1.0803677,2.42465753 C0.973210765,2.31506849 0.973210765,2.17808219 1.0803677,2.06849315 C1.13394617,2.01369863 1.18752464,1.98630137 1.26789235,1.98630137 C1.34826005,1.98630137 1.40183852,2.01369863 1.45541699,2.06849315 L1.72330934,2.36986301 L2.55377562,1.10958904 C2.60735409,1.02739726 2.68772179,1 2.7680895,1 C2.8484572,1 2.92882491,1.05479452 2.98240338,1.1369863 C3.00919261,1.21917808 3.00919261,1.30136986 2.95561414,1.38356164 L1.96441245,2.89041096 C1.91083398,2.94520548 1.83046628,3 1.75009858,3 L1.75009858,3 Z\",\n  id: \"Path\",\n  fill: \"#2CA01C\",\n  \"fill-rule\": \"nonzero\"\n})))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2ljb24uanM/Nzc2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuLy8gY29uc3QgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgd2lkdGg6IFwiMjRweFwiLFxuICBoZWlnaHQ6IFwiMjRweFwiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG59LCBjcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImRvXCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIFwic3Ryb2tlLXdpZHRoXCI6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiZ3JheVwiLFxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIwXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIyXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICB4OiBcIjBcIixcbiAgeTogXCIxOFwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgeDogXCIwXCIsXG4gIHk6IFwiMjBcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpLCBjcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImdyZWVuXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMy4wMDAwMDAsIDYuMDAwMDAwKVwiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiMyQ0EwMUNcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiNlwiLFxuICB5OiBcIjBcIixcbiAgd2lkdGg6IFwiMTJcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiIzJDQTAxQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIixcbiAgeDogXCI2XCIsXG4gIHk6IFwiMlwiLFxuICB3aWR0aDogXCIxMlwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjMkNBMDFDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjhcIixcbiAgeTogXCI0XCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiMyQ0EwMUNcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiNlwiLFxuICB5OiBcIjRcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjMkNBMDFDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjhcIixcbiAgeTogXCI2XCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiMyQ0EwMUNcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiNlwiLFxuICB5OiBcIjZcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjMkNBMDFDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjhcIixcbiAgeTogXCI4XCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiMyQ0EwMUNcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsXG4gIHg6IFwiNlwiLFxuICB5OiBcIjhcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjMkNBMDFDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjhcIixcbiAgeTogXCIxMFwiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjMkNBMDFDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLFxuICB4OiBcIjZcIixcbiAgeTogXCIxMFwiLFxuICB3aWR0aDogXCIxXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgaWQ6IFwiT3ZhbFwiLFxuICBzdHJva2U6IFwiIzJDQTAxQ1wiLFxuICBcInN0cm9rZS13aWR0aFwiOiBcIjAuNVwiLFxuICBjeDogXCIyXCIsXG4gIGN5OiBcIjJcIixcbiAgcjogXCIyLjI1XCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEuNzUwMDk4NTgsMyBDMS42OTY1MjAxMSwzIDEuNjE2MTUyNCwyLjk3MjYwMjc0IDEuNTYyNTczOTMsMi45MTc4MDgyMiBMMS4wODAzNjc3LDIuNDI0NjU3NTMgQzAuOTczMjEwNzY1LDIuMzE1MDY4NDkgMC45NzMyMTA3NjUsMi4xNzgwODIxOSAxLjA4MDM2NzcsMi4wNjg0OTMxNSBDMS4xMzM5NDYxNywyLjAxMzY5ODYzIDEuMTg3NTI0NjQsMS45ODYzMDEzNyAxLjI2Nzg5MjM1LDEuOTg2MzAxMzcgQzEuMzQ4MjYwMDUsMS45ODYzMDEzNyAxLjQwMTgzODUyLDIuMDEzNjk4NjMgMS40NTU0MTY5OSwyLjA2ODQ5MzE1IEwxLjcyMzMwOTM0LDIuMzY5ODYzMDEgTDIuNTUzNzc1NjIsMS4xMDk1ODkwNCBDMi42MDczNTQwOSwxLjAyNzM5NzI2IDIuNjg3NzIxNzksMSAyLjc2ODA4OTUsMSBDMi44NDg0NTcyLDEgMi45Mjg4MjQ5MSwxLjA1NDc5NDUyIDIuOTgyNDAzMzgsMS4xMzY5ODYzIEMzLjAwOTE5MjYxLDEuMjE5MTc4MDggMy4wMDkxOTI2MSwxLjMwMTM2OTg2IDIuOTU1NjE0MTQsMS4zODM1NjE2NCBMMS45NjQ0MTI0NSwyLjg5MDQxMDk2IEMxLjkxMDgzMzk4LDIuOTQ1MjA1NDggMS44MzA0NjYyOCwzIDEuNzUwMDk4NTgsMyBMMS43NTAwOTg1OCwzIFpcIixcbiAgaWQ6IFwiUGF0aFwiLFxuICBmaWxsOiBcIiMyQ0EwMUNcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCJcbn0pKSkpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/do/src/index.js":
/*!***********************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.js */ \"./wp-content/plugins/content-design/do/src/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./wp-content/plugins/content-design/do/src/edit.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/do/src/example.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ \"./wp-content/plugins/content-design/do/src/save.js\");\n\n\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"registerBlockType\"])('content-design/do', {\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Do', 'content-design'),\n  icon: _icon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  category: 'content-design',\n  example: _example__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  transforms: {\n    from: [{\n      type: 'block',\n      blocks: ['core/paragraph', 'core/lists'],\n      // wildcard - match any block\n      transform: function transform(attributes, innerBlocks) {\n        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"createBlock\"])('content-design/do', attributes, innerBlocks);\n      }\n    }],\n    to: [{\n      type: 'block',\n      blocks: ['content-design/mini-hr'],\n      transform: function transform(attributes, innerBlocks) {\n        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"createBlock\"])('content-design/mini-hr', attributes, innerBlocks);\n      }\n    }]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL2RvL3NyYy9pbmRleC5qcz8wODBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCBjcmVhdGVCbG9jayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IGV4YW1wbGUgZnJvbSAnLi9leGFtcGxlJztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5yZWdpc3RlckJsb2NrVHlwZSgnY29udGVudC1kZXNpZ24vZG8nLCB7XG4gIHRpdGxlOiBfXygnRG8nLCAnY29udGVudC1kZXNpZ24nKSxcbiAgaWNvbjogaWNvbixcbiAgY2F0ZWdvcnk6ICdjb250ZW50LWRlc2lnbicsXG4gIGV4YW1wbGU6IGV4YW1wbGUsXG4gIGVkaXQ6IGVkaXQsXG4gIHNhdmU6IHNhdmUsXG4gIHRyYW5zZm9ybXM6IHtcbiAgICBmcm9tOiBbe1xuICAgICAgdHlwZTogJ2Jsb2NrJyxcbiAgICAgIGJsb2NrczogWydjb3JlL3BhcmFncmFwaCcsICdjb3JlL2xpc3RzJ10sXG4gICAgICAvLyB3aWxkY2FyZCAtIG1hdGNoIGFueSBibG9ja1xuICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0oYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2NrKCdjb250ZW50LWRlc2lnbi9kbycsIGF0dHJpYnV0ZXMsIGlubmVyQmxvY2tzKTtcbiAgICAgIH1cbiAgICB9XSxcbiAgICB0bzogW3tcbiAgICAgIHR5cGU6ICdibG9jaycsXG4gICAgICBibG9ja3M6IFsnY29udGVudC1kZXNpZ24vbWluaS1ociddLFxuICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0oYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2NrKCdjb250ZW50LWRlc2lnbi9taW5pLWhyJywgYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpO1xuICAgICAgfVxuICAgIH1dXG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/do/src/save.js":
/*!**********************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/save.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./wp-content/plugins/content-design/do/src/style.js\");\n\n\n\n\nvar DoSave = function DoSave() {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n    src: do_block.image,\n    style: _style__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"].Content, null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL3NhdmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL3NhdmUuanM/MGYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5cbnZhciBEb1NhdmUgPSBmdW5jdGlvbiBEb1NhdmUoKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgIHNyYzogZG9fYmxvY2suaW1hZ2UsXG4gICAgc3R5bGU6IFN0eWxlLmltZ1xuICB9KSwgY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb1NhdmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/save.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/do/src/style.js":
/*!***********************************************************!*\
  !*** ./wp-content/plugins/content-design/do/src/style.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = {\n  display: 'block',\n  marginBottom: '10px',\n};\nvar Style = {\n  img: img\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Style);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZG8vc3JjL3N0eWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL2RvL3NyYy9zdHlsZS5qcz9mZDVkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbWcgPSB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGhlaWdodDogJzI1cHgnLFxuICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgd2lkdGg6ICc4NHB4J1xufTtcbnZhciBTdHlsZSA9IHtcbiAgaW1nOiBpbWdcbn07XG5leHBvcnQgZGVmYXVsdCBTdHlsZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/do/src/style.js\n");

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