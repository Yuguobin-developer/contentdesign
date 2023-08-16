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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/attributes/src/index.js");
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

/***/ "./wp-content/plugins/content-design/attributes/src/attributes.js":
/*!************************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/attributes.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  content: {\n    type: 'array',\n    source: 'children',\n    selector: 'h3'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvYXR0cmlidXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9hdHRyaWJ1dGVzL3NyYy9hdHRyaWJ1dGVzLmpzP2ViOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgc2VsZWN0b3I6ICdoMydcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/attributes.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/attributes/src/edit.js":
/*!******************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/edit.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar AttributesEdit = function AttributesEdit(props) {\n  var setAttributes = props.setAttributes,\n      className = props.className;\n\n  var onChangeAttibuteContent = function onChangeAttibuteContent(newContent) {\n    setAttributes({\n      content: newContent\n    });\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'row')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, \"Attributes are used to list voice and tone elements.\")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'heading'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    tagName: \"h3\",\n    onChange: onChangeAttibuteContent,\n    value: props.attributes.content,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Enter heading', 'content-design'),\n    keepPlaceholderOnFocus: true\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'col'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"InnerBlocks\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributesEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvZWRpdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9hdHRyaWJ1dGVzL3NyYy9lZGl0LmpzPzUwNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBBdHRyaWJ1dGVzRWRpdCA9IGZ1bmN0aW9uIEF0dHJpYnV0ZXNFZGl0KHByb3BzKSB7XG4gIHZhciBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuICB2YXIgb25DaGFuZ2VBdHRpYnV0ZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUF0dGlidXRlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICBjb250ZW50OiBuZXdDb250ZW50XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsICdyb3cnKVxuICB9LCBjcmVhdGVFbGVtZW50KEluc3BlY3RvckNvbnRyb2xzLCBudWxsLCBjcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkF0dHJpYnV0ZXMgYXJlIHVzZWQgdG8gbGlzdCB2b2ljZSBhbmQgdG9uZSBlbGVtZW50cy5cIikpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICdoZWFkaW5nJ1xuICB9LCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgdGFnTmFtZTogXCJoM1wiLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUF0dGlidXRlQ29udGVudCxcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuICAgIHBsYWNlaG9sZGVyOiBfXygnRW50ZXIgaGVhZGluZycsICdjb250ZW50LWRlc2lnbicpLFxuICAgIGtlZXBQbGFjZWhvbGRlck9uRm9jdXM6IHRydWVcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICdjb2wnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGVzRWRpdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/edit.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/attributes/src/example.js":
/*!*********************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/example.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  attributes: {\n    content: 'Optimistic'\n  },\n  innerBlocks: [{\n    name: 'core/paragraph',\n    resource: {\n      content: '<b>Eat a good breakfast</b>'\n    }\n  }, {\n    name: 'core/paragraph',\n    resource: {\n      content: 'Breakfast is known to be the most important meal of the day.'\n    }\n  }, {\n    name: 'core/list',\n    resource: {\n      values: '<li>Eggs</li><li>Bacon</li><li>Fresh fruit</li><li>Coffee</li><li>Juice</li>'\n    }\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvZXhhbXBsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9hdHRyaWJ1dGVzL3NyYy9leGFtcGxlLmpzP2JlYWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgY29udGVudDogJ09wdGltaXN0aWMnXG4gIH0sXG4gIGlubmVyQmxvY2tzOiBbe1xuICAgIG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDogJzxiPkVhdCBhIGdvb2QgYnJlYWtmYXN0PC9iPidcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNvbnRlbnQ6ICdCcmVha2Zhc3QgaXMga25vd24gdG8gYmUgdGhlIG1vc3QgaW1wb3J0YW50IG1lYWwgb2YgdGhlIGRheS4nXG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2NvcmUvbGlzdCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdmFsdWVzOiAnPGxpPkVnZ3M8L2xpPjxsaT5CYWNvbjwvbGk+PGxpPkZyZXNoIGZydWl0PC9saT48bGk+Q29mZmVlPC9saT48bGk+SnVpY2U8L2xpPidcbiAgICB9XG4gIH1dXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/attributes/src/icon.js":
/*!******************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/icon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"Page-1\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(-2.000000, -1.000000)\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 1.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 3.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 20.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 22.000000)\",\n  fill: \"#D4D7DC\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"20\",\n  height: \"1\"\n})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  transform: \"translate(2.000000, 6.000000)\",\n  fill: \"#C9007A\",\n  \"fill-rule\": \"nonzero\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"2\",\n  y: \"1\",\n  width: \"6\",\n  height: \"2\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"1\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"3\",\n  width: \"12\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"5\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"5\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"7\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"7\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"9\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"9\",\n  width: \"1\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"12\",\n  y: \"11\",\n  width: \"10\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  x: \"10\",\n  y: \"11\",\n  width: \"1\",\n  height: \"1\"\n}))))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvaWNvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9hdHRyaWJ1dGVzL3NyYy9pY29uLmpzP2I5OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB3aWR0aDogXCIyNHB4XCIsXG4gIGhlaWdodDogXCIyNHB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiUGFnZS0xXCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIFwic3Ryb2tlLXdpZHRoXCI6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMi4wMDAwMDAsIC0xLjAwMDAwMClcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIixcbiAgZmlsbDogXCIjRDREN0RDXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiXG59LCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMlwiLFxuICB5OiBcIjFcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpLCBjcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDMuMDAwMDAwKVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIyXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSksIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLjAwMDAwMCwgMjAuMDAwMDAwKVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIyXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSksIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLjAwMDAwMCwgMjIuMDAwMDAwKVwiLFxuICBmaWxsOiBcIiNENEQ3RENcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIyXCIsXG4gIHk6IFwiMVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSksIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLjAwMDAwMCwgNi4wMDAwMDApXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICBcImZpbGwtcnVsZVwiOiBcIm5vbnplcm9cIlxufSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjJcIixcbiAgeTogXCIxXCIsXG4gIHdpZHRoOiBcIjZcIixcbiAgaGVpZ2h0OiBcIjJcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMFwiLFxuICB5OiBcIjFcIixcbiAgd2lkdGg6IFwiMTJcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMFwiLFxuICB5OiBcIjNcIixcbiAgd2lkdGg6IFwiMTJcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMlwiLFxuICB5OiBcIjVcIixcbiAgd2lkdGg6IFwiMTBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMFwiLFxuICB5OiBcIjVcIixcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEyXCIsXG4gIHk6IFwiN1wiLFxuICB3aWR0aDogXCIxMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiBcIjEwXCIsXG4gIHk6IFwiN1wiLFxuICB3aWR0aDogXCIxXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMTJcIixcbiAgeTogXCI5XCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMTBcIixcbiAgeTogXCI5XCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgeDogXCIxMlwiLFxuICB5OiBcIjExXCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIHg6IFwiMTBcIixcbiAgeTogXCIxMVwiLFxuICB3aWR0aDogXCIxXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSkpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/attributes/src/index.js":
/*!*******************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ \"./wp-content/plugins/content-design/attributes/src/attributes.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./wp-content/plugins/content-design/attributes/src/edit.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/attributes/src/example.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/attributes/src/icon.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ \"./wp-content/plugins/content-design/attributes/src/save.js\");\n\n\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('content-design/attributes', {\n  title: 'Resource',\n  icon: _icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  category: 'content-design',\n  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  example: _example__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvaW5kZXguanM/M2U1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IGV4YW1wbGUgZnJvbSAnLi9leGFtcGxlJztcbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7XG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvbnRlbnQtZGVzaWduL2F0dHJpYnV0ZXMnLCB7XG4gIHRpdGxlOiAnQXR0cmlidXRlcycsXG4gIGljb246IGljb24sXG4gIGNhdGVnb3J5OiAnY29udGVudC1kZXNpZ24nLFxuICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICBleGFtcGxlOiBleGFtcGxlLFxuICBlZGl0OiBlZGl0LFxuICBzYXZlOiBzYXZlXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/attributes/src/save.js":
/*!******************************************************************!*\
  !*** ./wp-content/plugins/content-design/attributes/src/save.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar AttributesSave = function AttributesSave(props) {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([props.attributes.className, 'row'])\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'heading'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].Content, {\n    tagName: \"h3\",\n    value: props.attributes.content\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'col'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"].Content, null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributesSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vYXR0cmlidXRlcy9zcmMvc2F2ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9hdHRyaWJ1dGVzL3NyYy9zYXZlLmpzPzVhMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCB7IElubmVyQmxvY2tzLCBSaWNoVGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgQXR0cmlidXRlc1NhdmUgPSBmdW5jdGlvbiBBdHRyaWJ1dGVzU2F2ZShwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFtwcm9wcy5hdHRyaWJ1dGVzLmNsYXNzTmFtZSwgJ3JvdyddKVxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICdoZWFkaW5nJ1xuICB9LCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICB0YWdOYW1lOiBcImgzXCIsXG4gICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuICB9KSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogJ2NvbCdcbiAgfSwgY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlc1NhdmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/attributes/src/save.js\n");

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