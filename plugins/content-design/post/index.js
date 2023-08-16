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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/content-design/post/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/content-design/post/src/icon.js":
/*!************************************************************!*\
  !*** ./wp-content/plugins/content-design/post/src/icon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"24px\",\n  height: \"24px\",\n  viewBox: \"0 0 24 24\",\n  version: \"1.1\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n  id: \"post\",\n  stroke: \"none\",\n  \"stroke-width\": \"1\",\n  fill: \"none\",\n  \"fill-rule\": \"evenodd\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M22,3 L22,11 L2,11 L2,3 L22,3 Z M21,4 L3,4 L3,10 L21,10 L21,4 Z\",\n  id: \"Combined-Shape\",\n  fill: \"#C9007A\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"13\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"15\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"17\",\n  width: \"20\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"2\",\n  y: \"20\",\n  width: \"5\",\n  height: \"1\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"rect\", {\n  id: \"Rectangle\",\n  fill: \"#C9007A\",\n  x: \"8\",\n  y: \"20\",\n  width: \"1\",\n  height: \"1\"\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vcG9zdC9zcmMvaWNvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy9jb250ZW50LWRlc2lnbi9wb3N0L3NyYy9pY29uLmpzPzM4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB3aWR0aDogXCIyNHB4XCIsXG4gIGhlaWdodDogXCIyNHB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwicG9zdFwiLFxuICBzdHJva2U6IFwibm9uZVwiLFxuICBcInN0cm9rZS13aWR0aFwiOiBcIjFcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiXG59LCBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIyLDMgTDIyLDExIEwyLDExIEwyLDMgTDIyLDMgWiBNMjEsNCBMMyw0IEwzLDEwIEwyMSwxMCBMMjEsNCBaXCIsXG4gIGlkOiBcIkNvbWJpbmVkLVNoYXBlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjEzXCIsXG4gIHdpZHRoOiBcIjIwXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pLCBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGlkOiBcIlJlY3RhbmdsZVwiLFxuICBmaWxsOiBcIiNDOTAwN0FcIixcbiAgeDogXCIyXCIsXG4gIHk6IFwiMTVcIixcbiAgd2lkdGg6IFwiMjBcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICB4OiBcIjJcIixcbiAgeTogXCIxN1wiLFxuICB3aWR0aDogXCIyMFwiLFxuICBoZWlnaHQ6IFwiMVwiXG59KSwgY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJSZWN0YW5nbGVcIixcbiAgZmlsbDogXCIjQzkwMDdBXCIsXG4gIHg6IFwiMlwiLFxuICB5OiBcIjIwXCIsXG4gIHdpZHRoOiBcIjVcIixcbiAgaGVpZ2h0OiBcIjFcIlxufSksIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwiUmVjdGFuZ2xlXCIsXG4gIGZpbGw6IFwiI0M5MDA3QVwiLFxuICB4OiBcIjhcIixcbiAgeTogXCIyMFwiLFxuICB3aWR0aDogXCIxXCIsXG4gIGhlaWdodDogXCIxXCJcbn0pKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/post/src/icon.js\n");

/***/ }),

/***/ "./wp-content/plugins/content-design/post/src/index.js":
/*!*************************************************************!*\
  !*** ./wp-content/plugins/content-design/post/src/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ \"./wp-content/plugins/content-design/post/src/icon.js\");\n\n\n\n\n // import { apiFetch } from '@wordpress/scripts'\n\n // import classNames from 'classnames'\n// import {MediaUpload} from '@wordpress/editor'\n\n // import edit from './edit'\n// import example from './example'\n//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('content-design/post', {\n  title: 'Post',\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'h2'\n    },\n    link: {\n      type: 'string',\n      selector: 'a'\n    },\n    selectedPost: {\n      type: 'number',\n      default: 0\n    }\n  },\n  icon: _icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  category: 'content-design',\n  example: {\n    attributes: {\n      selectedPost: 99\n    }\n  },\n  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"withSelect\"])(function (select, props) {\n    var _select = select('core'),\n        getMedia = _select.getMedia;\n\n    var selectedPost = props.attributes.selectedPost;\n    var query = {\n      categories: post_block.category_id\n    };\n    console.log('post_block.category_id', post_block.category_id);\n    var posts = select('core').getEntityRecords('postType', 'post', query);\n    var post = posts ? posts.find(function (_ref) {\n      var id = _ref.id;\n      return id === parseInt(selectedPost);\n    }) : null;\n    var media = post && post.featured_media ? getMedia(post.featured_media) : null;\n    return {\n      posts: posts,\n      post: post,\n      media: media\n    };\n  })(function (_ref2) {\n    var posts = _ref2.posts,\n        post = _ref2.post,\n        media = _ref2.media,\n        attributes = _ref2.attributes,\n        setAttributes = _ref2.setAttributes,\n        className = _ref2.className;\n\n    var setSelectedPost = function setSelectedPost(selectedPost) {\n      setAttributes({\n        selectedPost: parseInt(selectedPost)\n      });\n    };\n\n    if (!posts) {\n      return 'Loading...';\n    }\n\n    if (posts && posts.length === 0) {\n      return 'No posts ';\n    }\n\n    var options = posts.map(function (post) {\n      return {\n        value: post.id,\n        label: post.title.rendered,\n        selected: post.id === parseInt(attributes.selectedPost)\n      };\n    });\n    options.unshift({\n      value: 0,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select a Post')\n    });\n    var title = post ? post.title.rendered : 'Select post from sidebar';\n    var body = post ? post.content.rendered : 'This block has no content. To select a post open the sidebar using the sproket, click \\'Block\\' then select a post from the dropdown.';\n    var backgroundImage = media && media.source_url ? media.source_url : '';\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelBody\"], {\n      title: 'Content',\n      initialOpen: true\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"SelectControl\"], {\n      value: attributes.selectedPost,\n      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select a Post'),\n      options: options,\n      onChange: setSelectedPost\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: 'wp-block-content-design-post-image',\n      style: {\n        backgroundImage: 'url(' + backgroundImage + ')'\n      }\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: body\n      }\n    }));\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vcG9zdC9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3BsdWdpbnMvY29udGVudC1kZXNpZ24vcG9zdC9zcmMvaW5kZXguanM/Yjc1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIGdldEJsb2NrRGVmYXVsdENsYXNzTmFtZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzLCBQb3N0RmVhdHVyZWRJbWFnZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFNlbGVjdENvbnRyb2wsIFBhbmVsLCBQYW5lbEJvZHksIFBhbmVsUm93IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJzsgLy8gaW1wb3J0IHsgYXBpRmV0Y2ggfSBmcm9tICdAd29yZHByZXNzL3NjcmlwdHMnXG5cbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnOyAvLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy8gaW1wb3J0IHtNZWRpYVVwbG9hZH0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InXG5cbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7IC8vIGltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCdcbi8vIGltcG9ydCBleGFtcGxlIGZyb20gJy4vZXhhbXBsZSdcbi8vaHR0cDovL2pzY2hvZi5jb20vZ3V0ZW5iZXJnLWJsb2Nrcy90dXRvcmlhbC9iZWdpbm5lci1ndXRlbmJlcmctYmxvY2stYW4tZWFzeS1tZWRpYS1ibG9jay13aXRoLW1lZGlhLXVwbG9hZC1hbmQtcmljaHRleHQvXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjb250ZW50LWRlc2lnbi9wb3N0Jywge1xuICB0aXRsZTogJ1Bvc3QnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdoMidcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdhJ1xuICAgIH0sXG4gICAgc2VsZWN0ZWRQb3N0OiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG4gIGljb246IGljb24sXG4gIGNhdGVnb3J5OiAnY29udGVudC1kZXNpZ24nLFxuICBleGFtcGxlOiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc2VsZWN0ZWRQb3N0OiA5OVxuICAgIH1cbiAgfSxcbiAgZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0LCBwcm9wcykge1xuICAgIHZhciBfc2VsZWN0ID0gc2VsZWN0KCdjb3JlJyksXG4gICAgICAgIGdldE1lZGlhID0gX3NlbGVjdC5nZXRNZWRpYTtcblxuICAgIHZhciBzZWxlY3RlZFBvc3QgPSBwcm9wcy5hdHRyaWJ1dGVzLnNlbGVjdGVkUG9zdDtcbiAgICB2YXIgcXVlcnkgPSB7XG4gICAgICBjYXRlZ29yaWVzOiBwb3N0X2Jsb2NrLmNhdGVnb3J5X2lkXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygncG9zdF9ibG9jay5jYXRlZ29yeV9pZCcsIHBvc3RfYmxvY2suY2F0ZWdvcnlfaWQpO1xuICAgIHZhciBwb3N0cyA9IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnLCBxdWVyeSk7XG4gICAgdmFyIHBvc3QgPSBwb3N0cyA/IHBvc3RzLmZpbmQoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpZCA9IF9yZWYuaWQ7XG4gICAgICByZXR1cm4gaWQgPT09IHBhcnNlSW50KHNlbGVjdGVkUG9zdCk7XG4gICAgfSkgOiBudWxsO1xuICAgIHZhciBtZWRpYSA9IHBvc3QgJiYgcG9zdC5mZWF0dXJlZF9tZWRpYSA/IGdldE1lZGlhKHBvc3QuZmVhdHVyZWRfbWVkaWEpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgICAgcG9zdDogcG9zdCxcbiAgICAgIG1lZGlhOiBtZWRpYVxuICAgIH07XG4gIH0pKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBwb3N0cyA9IF9yZWYyLnBvc3RzLFxuICAgICAgICBwb3N0ID0gX3JlZjIucG9zdCxcbiAgICAgICAgbWVkaWEgPSBfcmVmMi5tZWRpYSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmMi5zZXRBdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWU7XG5cbiAgICB2YXIgc2V0U2VsZWN0ZWRQb3N0ID0gZnVuY3Rpb24gc2V0U2VsZWN0ZWRQb3N0KHNlbGVjdGVkUG9zdCkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHNlbGVjdGVkUG9zdDogcGFyc2VJbnQoc2VsZWN0ZWRQb3N0KVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICghcG9zdHMpIHtcbiAgICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gICAgfVxuXG4gICAgaWYgKHBvc3RzICYmIHBvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdObyBwb3N0cyAnO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcG9zdC5pZCxcbiAgICAgICAgbGFiZWw6IHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgICAgIHNlbGVjdGVkOiBwb3N0LmlkID09PSBwYXJzZUludChhdHRyaWJ1dGVzLnNlbGVjdGVkUG9zdClcbiAgICAgIH07XG4gICAgfSk7XG4gICAgb3B0aW9ucy51bnNoaWZ0KHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgbGFiZWw6IF9fKCdTZWxlY3QgYSBQb3N0JylcbiAgICB9KTtcbiAgICB2YXIgdGl0bGUgPSBwb3N0ID8gcG9zdC50aXRsZS5yZW5kZXJlZCA6ICdTZWxlY3QgcG9zdCBmcm9tIHNpZGViYXInO1xuICAgIHZhciBib2R5ID0gcG9zdCA/IHBvc3QuY29udGVudC5yZW5kZXJlZCA6ICdUaGlzIGJsb2NrIGhhcyBubyBjb250ZW50LiBUbyBzZWxlY3QgYSBwb3N0IG9wZW4gdGhlIHNpZGViYXIgdXNpbmcgdGhlIHNwcm9rZXQsIGNsaWNrIFxcJ0Jsb2NrXFwnIHRoZW4gc2VsZWN0IGEgcG9zdCBmcm9tIHRoZSBkcm9wZG93bi4nO1xuICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2UgPSBtZWRpYSAmJiBtZWRpYS5zb3VyY2VfdXJsID8gbWVkaWEuc291cmNlX3VybCA6ICcnO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSwgY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcbiAgICAgIHRpdGxlOiAnQ29udGVudCcsXG4gICAgICBpbml0aWFsT3BlbjogdHJ1ZVxuICAgIH0sIGNyZWF0ZUVsZW1lbnQoUGFuZWxSb3csIG51bGwsIGNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQb3N0LFxuICAgICAgbGFiZWw6IF9fKCdTZWxlY3QgYSBQb3N0JyksXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgb25DaGFuZ2U6IHNldFNlbGVjdGVkUG9zdFxuICAgIH0pKSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3dwLWJsb2NrLWNvbnRlbnQtZGVzaWduLXBvc3QtaW1hZ2UnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UgKyAnKSdcbiAgICAgIH1cbiAgICB9KSwgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIHRpdGxlKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IGJvZHlcbiAgICAgIH1cbiAgICB9KSk7XG4gIH0pXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wp-content/plugins/content-design/post/src/index.js\n");

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