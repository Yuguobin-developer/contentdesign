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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/community-hero/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/community-hero/src/attributes.js":
/*!****************************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/attributes.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  titleWhite: {\n    type: 'string',\n    selector: 'span',\n    titleWhite: 'Content design'\n  },\n  titlePink: {\n    type: 'string',\n    selector: 'span',\n    titlePink: 'makes it clear'\n  },\n  buttonText: {\n    type: 'string',\n    selector: 'a',\n    default: 'Check the style guide'\n  },\n  content: {\n    type: 'string',\n    source: 'children',\n    selector: 'p',\n    default: 'Our mission is to power prosperity around the world. For content designers, that means we simplify the complex world of tax and accounting and relay it in a familiar tone that builds confidence.'\n  },\n  url: {\n    type: 'string',\n    selector: 'a',\n    default: '/style-guide'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2F0dHJpYnV0ZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2F0dHJpYnV0ZXMuanM/M2U1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlV2hpdGU6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBzZWxlY3RvcjogJ3NwYW4nLFxuICAgIHRpdGxlV2hpdGU6ICdDb250ZW50IGRlc2lnbidcbiAgfSxcbiAgdGl0bGVQaW5rOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgc2VsZWN0b3I6ICdzcGFuJyxcbiAgICB0aXRsZVBpbms6ICdtYWtlcyBpdCBjbGVhcidcbiAgfSxcbiAgYnV0dG9uVGV4dDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIHNlbGVjdG9yOiAnYScsXG4gICAgZGVmYXVsdDogJ0NoZWNrIHRoZSBzdHlsZSBndWlkZSdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICBzZWxlY3RvcjogJ3AnLFxuICAgIGRlZmF1bHQ6ICdPdXIgbWlzc2lvbiBpcyB0byBwb3dlciBwcm9zcGVyaXR5IGFyb3VuZCB0aGUgd29ybGQuIEZvciBjb250ZW50IGRlc2lnbmVycywgdGhhdCBtZWFucyB3ZSBzaW1wbGlmeSB0aGUgY29tcGxleCB3b3JsZCBvZiB0YXggYW5kIGFjY291bnRpbmcgYW5kIHJlbGF5IGl0IGluIGEgZmFtaWxpYXIgdG9uZSB0aGF0IGJ1aWxkcyBjb25maWRlbmNlLidcbiAgfSxcbiAgdXJsOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgc2VsZWN0b3I6ICdhJyxcbiAgICBkZWZhdWx0OiAnL3N0eWxlLWd1aWRlJ1xuICB9XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/attributes.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-hero/src/edit.js":
/*!**********************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/edit.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar AttributesEdit = function AttributesEdit(props) {\n  var setAttributes = props.setAttributes,\n      className = props.className;\n\n  var onChangeTitleWhiteContent = function onChangeTitleWhiteContent(newContent) {\n    setAttributes({\n      titleWhite: newContent\n    });\n  };\n\n  var onChangeTitlePinkContent = function onChangeTitlePinkContent(newContent) {\n    setAttributes({\n      titlePink: newContent\n    });\n  };\n\n  var onChangeContent = function onChangeContent(newContent) {\n    setAttributes({\n      content: newContent\n    });\n  };\n\n  var onChangeButtonText = function onChangeButtonText(buttonText) {\n    setAttributes({\n      buttonText: buttonText\n    });\n  };\n\n  var onChangeUrl = function onChangeUrl(newContent) {\n    setAttributes({\n      url: newContent\n    });\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'community-hero-content'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, \"Attributes are used to list voice and tone elements.\")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    tagName: \"span\",\n    onChange: onChangeTitleWhiteContent,\n    value: props.attributes.titleWhite,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('White heading', 'content-design'),\n    keepPlaceholderOnFocus: true,\n    formattingControls: []\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    tagName: \"span\",\n    onChange: onChangeTitlePinkContent,\n    value: props.attributes.titlePink,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('pink heading', 'content-design'),\n    keepPlaceholderOnFocus: true,\n    className: 'pink',\n    formattingControls: []\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    tagName: \"p\",\n    onChange: onChangeContent,\n    value: props.attributes.content,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Enter blurb', 'content-design'),\n    keepPlaceholderOnFocus: true,\n    formattingControls: []\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    tagName: \"a\",\n    onChange: onChangeButtonText,\n    value: props.attributes.buttonText,\n    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Button text', 'content-design'),\n    keepPlaceholderOnFocus: true,\n    formattingControls: []\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    style: {\n      color: '#fff',\n      padding: '30px 0;'\n    }\n  }, \"Style guide url\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"URLInput\"], {\n    label: \"Style guide url\",\n    value: props.attributes.url,\n    onChange: onChangeUrl\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributesEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2VkaXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2VkaXQuanM/MDgxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIFJpY2hUZXh0LCBfX2V4cGVyaW1lbnRhbExpbmtDb250cm9sIGFzIExpbmtDb250cm9sLCBVUkxJbnB1dCwgVVJMSW5wdXRCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbnZhciBBdHRyaWJ1dGVzRWRpdCA9IGZ1bmN0aW9uIEF0dHJpYnV0ZXNFZGl0KHByb3BzKSB7XG4gIHZhciBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuICB2YXIgb25DaGFuZ2VUaXRsZVdoaXRlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlVGl0bGVXaGl0ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgdGl0bGVXaGl0ZTogbmV3Q29udGVudFxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvbkNoYW5nZVRpdGxlUGlua0NvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZVRpdGxlUGlua0NvbnRlbnQobmV3Q29udGVudCkge1xuICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgdGl0bGVQaW5rOiBuZXdDb250ZW50XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICBjb250ZW50OiBuZXdDb250ZW50XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uQ2hhbmdlQnV0dG9uVGV4dCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQnV0dG9uVGV4dChidXR0b25UZXh0KSB7XG4gICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICBidXR0b25UZXh0OiBidXR0b25UZXh0XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uQ2hhbmdlVXJsID0gZnVuY3Rpb24gb25DaGFuZ2VVcmwobmV3Q29udGVudCkge1xuICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgdXJsOiBuZXdDb250ZW50XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAnY29tbXVuaXR5LWhlcm8tY29udGVudCdcbiAgfSwgY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJBdHRyaWJ1dGVzIGFyZSB1c2VkIHRvIGxpc3Qgdm9pY2UgYW5kIHRvbmUgZWxlbWVudHMuXCIpKSwgY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICB0YWdOYW1lOiBcInNwYW5cIixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VUaXRsZVdoaXRlQ29udGVudCxcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50aXRsZVdoaXRlLFxuICAgIHBsYWNlaG9sZGVyOiBfXygnV2hpdGUgaGVhZGluZycsICdjb250ZW50LWRlc2lnbicpLFxuICAgIGtlZXBQbGFjZWhvbGRlck9uRm9jdXM6IHRydWUsXG4gICAgZm9ybWF0dGluZ0NvbnRyb2xzOiBbXVxuICB9KSwgY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgIHRhZ05hbWU6IFwic3BhblwiLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZVRpdGxlUGlua0NvbnRlbnQsXG4gICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudGl0bGVQaW5rLFxuICAgIHBsYWNlaG9sZGVyOiBfXygncGluayBoZWFkaW5nJywgJ2NvbnRlbnQtZGVzaWduJyksXG4gICAga2VlcFBsYWNlaG9sZGVyT25Gb2N1czogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdwaW5rJyxcbiAgICBmb3JtYXR0aW5nQ29udHJvbHM6IFtdXG4gIH0pKSwgY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgIHRhZ05hbWU6IFwicFwiLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG4gICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCxcbiAgICBwbGFjZWhvbGRlcjogX18oJ0VudGVyIGJsdXJiJywgJ2NvbnRlbnQtZGVzaWduJyksXG4gICAga2VlcFBsYWNlaG9sZGVyT25Gb2N1czogdHJ1ZSxcbiAgICBmb3JtYXR0aW5nQ29udHJvbHM6IFtdXG4gIH0pLCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgdGFnTmFtZTogXCJhXCIsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlQnV0dG9uVGV4dCxcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5idXR0b25UZXh0LFxuICAgIHBsYWNlaG9sZGVyOiBfXygnQnV0dG9uIHRleHQnLCAnY29udGVudC1kZXNpZ24nKSxcbiAgICBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiB0cnVlLFxuICAgIGZvcm1hdHRpbmdDb250cm9sczogW11cbiAgfSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgcGFkZGluZzogJzMwcHggMDsnXG4gICAgfVxuICB9LCBcIlN0eWxlIGd1aWRlIHVybFwiKSwgY3JlYXRlRWxlbWVudChVUkxJbnB1dCwge1xuICAgIGxhYmVsOiBcIlN0eWxlIGd1aWRlIHVybFwiLFxuICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnVybCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VVcmxcbiAgfSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0ZXNFZGl0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/edit.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-hero/src/example.js":
/*!*************************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/example.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  attributes: {\n    titleWhite: 'Content design',\n    titlePink: 'makes it clear',\n    content: 'Our mission is to power prosperity around the world. For content designers, that means we simplify the complex world of tax and accounting and relay it in a familiar tone that builds confidence.',\n    buttonText: 'Check the style guide',\n    url: '/style-guide'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2V4YW1wbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2V4YW1wbGUuanM/OTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZVdoaXRlOiAnQ29udGVudCBkZXNpZ24nLFxuICAgIHRpdGxlUGluazogJ21ha2VzIGl0IGNsZWFyJyxcbiAgICBjb250ZW50OiAnT3VyIG1pc3Npb24gaXMgdG8gcG93ZXIgcHJvc3Blcml0eSBhcm91bmQgdGhlIHdvcmxkLiBGb3IgY29udGVudCBkZXNpZ25lcnMsIHRoYXQgbWVhbnMgd2Ugc2ltcGxpZnkgdGhlIGNvbXBsZXggd29ybGQgb2YgdGF4IGFuZCBhY2NvdW50aW5nIGFuZCByZWxheSBpdCBpbiBhIGZhbWlsaWFyIHRvbmUgdGhhdCBidWlsZHMgY29uZmlkZW5jZS4nLFxuICAgIGJ1dHRvblRleHQ6ICdDaGVjayB0aGUgc3R5bGUgZ3VpZGUnLFxuICAgIHVybDogJy9zdHlsZS1ndWlkZSdcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/example.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-hero/src/icon.js":
/*!**********************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/icon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"post\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M22,3 L22,11 L2,11 L2,3 L22,3 Z M21,4 L3,4 L3,10 L21,10 L21,4 Z\",\n  id: \"Combined-Shape\",\n  fill: \"#C9007A\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"13\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"15\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"17\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"20\",\n  width: \"5\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"8\",\n  y: \"20\",\n  width: \"1\",\n  height: \"1\"\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2ljb24uanM/MTYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHdpZHRoOiBcIjI0cHhcIixcbiAgaGVpZ2h0OiBcIjI0cHhcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJwb3N0XCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIFwic3Ryb2tlLXdpZHRoXCI6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjIsMyBMMjIsMTEgTDIsMTEgTDIsMyBMMjIsMyBaIE0yMSw0IEwzLDQgTDMsMTAgTDIxLDEwIEwyMSw0IFpcIixcbiAgaWQ6IFwiQ29tYmluZWQtU2hhcGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNDOTAwN0FcIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMTNcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxNVwiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjE3XCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNDOTAwN0FcIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMjBcIixcbiAgd2lkdGg6IFwiNVwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiOFwiLFxuICB5OiBcIjIwXCIsXG4gIHdpZHRoOiBcIjFcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSkpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-hero/src/index.js":
/*!***********************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ \"./wp-content/plugins/content-design/community-hero/src/attributes.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example */ \"./wp-content/plugins/content-design/community-hero/src/example.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/community-hero/src/icon.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ \"./wp-content/plugins/content-design/community-hero/src/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ \"./wp-content/plugins/content-design/community-hero/src/save.js\");\n\n\n\n\n\n //http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('content-design/community-hero', {\n  title: 'Community hero',\n  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  icon: _icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  category: 'content-design',\n  example: _example__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL2NvbnRlbnQtZGVzaWduL2NvbW11bml0eS1oZXJvL3NyYy9pbmRleC5qcz9mOWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBleGFtcGxlIGZyb20gJy4vZXhhbXBsZSc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7IC8vaHR0cDovL2pzY2hvZi5jb20vZ3V0ZW5iZXJnLWJsb2Nrcy90dXRvcmlhbC9iZWdpbm5lci1ndXRlbmJlcmctYmxvY2stYW4tZWFzeS1tZWRpYS1ibG9jay13aXRoLW1lZGlhLXVwbG9hZC1hbmQtcmljaHRleHQvXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjb250ZW50LWRlc2lnbi9jb21tdW5pdHktaGVybycsIHtcbiAgdGl0bGU6ICdDb21tdW5pdHkgaGVybycsXG4gIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gIGljb246IGljb24sXG4gIGNhdGVnb3J5OiAnY29udGVudC1kZXNpZ24nLFxuICBleGFtcGxlOiBleGFtcGxlLFxuICBlZGl0OiBlZGl0LFxuICBzYXZlOiBzYXZlXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/index.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/community-hero/src/save.js":
/*!**********************************************************************!*\
  !*** ./wp-content/plugins/content-design/community-hero/src/save.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar AttributesSave = function AttributesSave(props) {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: 'community-hero-content'\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].Content, {\n    tagName: \"span\",\n    value: props.attributes.titleWhite\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].Content, {\n    tagName: \"span\",\n    className: 'pink',\n    value: props.attributes.titlePink\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].Content, {\n    tagName: \"p\",\n    value: props.attributes.content\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: props.attributes.url\n  }, props.attributes.buttonText)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributesSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL3NhdmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vY29tbXVuaXR5LWhlcm8vc3JjL3NhdmUuanM/ZWFhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBMaW5rQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbnZhciBBdHRyaWJ1dGVzU2F2ZSA9IGZ1bmN0aW9uIEF0dHJpYnV0ZXNTYXZlKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogJ2NvbW11bml0eS1oZXJvLWNvbnRlbnQnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICB0YWdOYW1lOiBcInNwYW5cIixcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50aXRsZVdoaXRlXG4gIH0pLCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICB0YWdOYW1lOiBcInNwYW5cIixcbiAgICBjbGFzc05hbWU6ICdwaW5rJyxcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50aXRsZVBpbmtcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICB0YWdOYW1lOiBcInBcIixcbiAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50XG4gIH0pLCBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogcHJvcHMuYXR0cmlidXRlcy51cmxcbiAgfSwgcHJvcHMuYXR0cmlidXRlcy5idXR0b25UZXh0KSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlc1NhdmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/community-hero/src/save.js\n");

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