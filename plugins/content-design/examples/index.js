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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/examples/src/index.js");
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

/***/ "./wp-content/plugins/content-design/examples/src/attributes.js":
/*!**********************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/attributes.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  plural: {\n    type: 'string',\n    default: 'plural'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2F0dHJpYnV0ZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2F0dHJpYnV0ZXMuanM/ZDg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHBsdXJhbDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdwbHVyYWwnXG4gIH1cbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/attributes.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/examples/src/edit.js":
/*!****************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/edit.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var className = props.className,\n      setAttributes = props.setAttributes;\n\n  var setPlural = function setPlural(plural) {\n    console.log(plural);\n    setAttributes({\n      plural: plural\n    });\n  };\n\n  var options = [{\n    label: 'Plural',\n    value: 'plural'\n  }, {\n    label: 'Singular',\n    value: 'singular'\n  }];\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'row')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__[\"PanelBody\"], {\n    title: 'Plural',\n    initialOpen: true\n  }, props.attributes.plural, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__[\"RadioControl\"], {\n    label: \"Example(s)\",\n    selected: props.attributes.plural,\n    options: options,\n    onChange: setPlural\n  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'heading'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \"Example\", props.attributes.plural === 'plural' ? 's' : '')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'col'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"], null)));\n}); // export default ExamplesEdit;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2VkaXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2VkaXQuanM/NDZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MsIEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgUmFkaW9Db250cm9sLCBQYW5lbEJvZHkgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuICB2YXIgc2V0UGx1cmFsID0gZnVuY3Rpb24gc2V0UGx1cmFsKHBsdXJhbCkge1xuICAgIGNvbnNvbGUubG9nKHBsdXJhbCk7XG4gICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICBwbHVyYWw6IHBsdXJhbFxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvcHRpb25zID0gW3tcbiAgICBsYWJlbDogJ1BsdXJhbCcsXG4gICAgdmFsdWU6ICdwbHVyYWwnXG4gIH0sIHtcbiAgICBsYWJlbDogJ1Npbmd1bGFyJyxcbiAgICB2YWx1ZTogJ3Npbmd1bGFyJ1xuICB9XTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsICdyb3cnKVxuICB9LCBjcmVhdGVFbGVtZW50KEluc3BlY3RvckNvbnRyb2xzLCBudWxsLCBjcmVhdGVFbGVtZW50KFBhbmVsQm9keSwge1xuICAgIHRpdGxlOiAnUGx1cmFsJyxcbiAgICBpbml0aWFsT3BlbjogdHJ1ZVxuICB9LCBwcm9wcy5hdHRyaWJ1dGVzLnBsdXJhbCwgY3JlYXRlRWxlbWVudChSYWRpb0NvbnRyb2wsIHtcbiAgICBsYWJlbDogXCJFeGFtcGxlKHMpXCIsXG4gICAgc2VsZWN0ZWQ6IHByb3BzLmF0dHJpYnV0ZXMucGx1cmFsLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgb25DaGFuZ2U6IHNldFBsdXJhbFxuICB9KSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICdoZWFkaW5nJ1xuICB9LCBjcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJFeGFtcGxlXCIsIHByb3BzLmF0dHJpYnV0ZXMucGx1cmFsID09PSAncGx1cmFsJyA/ICdzJyA6ICcnKSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogJ2NvbCdcbiAgfSwgY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgbnVsbCkpKTtcbn0pOyAvLyBleHBvcnQgZGVmYXVsdCBFeGFtcGxlc0VkaXQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/edit.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/examples/src/example.js":
/*!*******************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/example.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  attributes: {\n    content: 'Optimistic'\n  },\n  innerBlocks: [{\n    name: 'core/paragraph',\n    attributes: {\n      content: '<b>Eat a good breakfast</b>'\n    }\n  }, {\n    name: 'core/paragraph',\n    attributes: {\n      content: 'Breakfast is known to be the most important meal of the day.'\n    }\n  }, {\n    name: 'core/list',\n    attributes: {\n      values: '<li>Eggs</li><li>Bacon</li><li>Fresh fruit</li><li>Coffee</li><li>Juice</li>'\n    }\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2V4YW1wbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2V4YW1wbGUuanM/Mjg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBjb250ZW50OiAnT3B0aW1pc3RpYydcbiAgfSxcbiAgaW5uZXJCbG9ja3M6IFt7XG4gICAgbmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBjb250ZW50OiAnPGI+RWF0IGEgZ29vZCBicmVha2Zhc3Q8L2I+J1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDogJ0JyZWFrZmFzdCBpcyBrbm93biB0byBiZSB0aGUgbW9zdCBpbXBvcnRhbnQgbWVhbCBvZiB0aGUgZGF5LidcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnY29yZS9saXN0JyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB2YWx1ZXM6ICc8bGk+RWdnczwvbGk+PGxpPkJhY29uPC9saT48bGk+RnJlc2ggZnJ1aXQ8L2xpPjxsaT5Db2ZmZWU8L2xpPjxsaT5KdWljZTwvbGk+J1xuICAgIH1cbiAgfV1cbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/examples/src/icon.js":
/*!****************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/icon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"Page-1\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(-2.000000, -1.000000)\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 1.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 3.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 20.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 22.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 6.000000)\",\n  fill: \"#393a3d\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"6\",\n  height: \"2\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 6.000000)\",\n  fill: \"#C9007A\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"1\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"3\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"5\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"5\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"7\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"7\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"9\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"9\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"11\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"11\",\n  width: \"1\",\n  height: \"1\"\n}))))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2ljb24uanM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHdpZHRoOiBcIjI0cHhcIixcbiAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJQYWdlLTFcIixcbiAgc3Ryb2tlOiBcIm5vbmVcIixcbiAgXCJzdHJva2Utd2lkdGhcIjogXCIxXCIsXG4gIGZpbGw6IFwibm9uZVwiLFxuICBcImZpbGwtcnVsZVwiOiBcImV2ZW5vZGRcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC0yLjAwMDAwMCwgLTEuMDAwMDAwKVwiXG59LCBjcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIyXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSksIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLjAwMDAwMCwgMy4wMDAwMDApXCIsXG4gIGZpbGw6IFwiI0Q0RDdEQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjJcIixcbiAgeTogXCIxXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCAyMC4wMDAwMDApXCIsXG4gIGZpbGw6IFwiI0Q0RDdEQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjJcIixcbiAgeTogXCIxXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCAyMi4wMDAwMDApXCIsXG4gIGZpbGw6IFwiI0Q0RDdEQ1wiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjJcIixcbiAgeTogXCIxXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCA2LjAwMDAwMClcIixcbiAgZmlsbDogXCIjMzkzYTNkXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMlwiLFxuICB5OiBcIjFcIixcbiAgd2lkdGg6IFwiNlwiLFxuICBoZWlnaHQ6IFwiMlwiXG59KSksIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLjAwMDAwMCwgNi4wMDAwMDApXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEwXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIxMlwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEwXCIsXG4gIHk6IFwiM1wiLFxuICB3aWR0aDogXCIxMlwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEyXCIsXG4gIHk6IFwiNVwiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEwXCIsXG4gIHk6IFwiNVwiLFxuICB3aWR0aDogXCIxXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMTJcIixcbiAgeTogXCI3XCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMTBcIixcbiAgeTogXCI3XCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMlwiLFxuICB5OiBcIjlcIixcbiAgd2lkdGg6IFwiMTBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMFwiLFxuICB5OiBcIjlcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEyXCIsXG4gIHk6IFwiMTFcIixcbiAgd2lkdGg6IFwiMTBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMFwiLFxuICB5OiBcIjExXCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpKSkpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/examples/src/index.js":
/*!*****************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ \"./wp-content/plugins/content-design/examples/src/attributes.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./wp-content/plugins/content-design/examples/src/edit.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/examples/src/example.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/examples/src/icon.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ \"./wp-content/plugins/content-design/examples/src/save.js\");\n\n\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('content-design/examples', {\n  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  title: 'Examples',\n  icon: _icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  category: 'content-design',\n  example: _example__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL2V4YW1wbGVzL3NyYy9pbmRleC5qcz9kY2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgZXhhbXBsZSBmcm9tICcuL2V4YW1wbGUnO1xuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5yZWdpc3RlckJsb2NrVHlwZSgnY29udGVudC1kZXNpZ24vZXhhbXBsZXMnLCB7XG4gIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gIHRpdGxlOiAnRXhhbXBsZXMnLFxuICBpY29uOiBpY29uLFxuICBjYXRlZ29yeTogJ2NvbnRlbnQtZGVzaWduJyxcbiAgZXhhbXBsZTogZXhhbXBsZSxcbiAgZWRpdDogZWRpdCxcbiAgc2F2ZTogc2F2ZVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/examples/src/save.js":
/*!****************************************************************!*\
  !*** ./wp-content/plugins/content-design/examples/src/save.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ExamplesSave = function ExamplesSave(props) {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([props.attributes.className, 'row'])\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'heading'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \"Example\", props.attributes.plural === 'plural' ? 's' : '')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'col'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"].Content, null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExamplesSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL3NhdmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vZXhhbXBsZXMvc3JjL3NhdmUuanM/Y2IzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MsIFJpY2hUZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBFeGFtcGxlc1NhdmUgPSBmdW5jdGlvbiBFeGFtcGxlc1NhdmUocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhbcHJvcHMuYXR0cmlidXRlcy5jbGFzc05hbWUsICdyb3cnXSlcbiAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAnaGVhZGluZydcbiAgfSwgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiRXhhbXBsZVwiLCBwcm9wcy5hdHRyaWJ1dGVzLnBsdXJhbCA9PT0gJ3BsdXJhbCcgPyAncycgOiAnJykpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICdjb2wnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbCkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVzU2F2ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/examples/src/save.js\n");

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

/***/ })

/******/ });