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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n@license @nocompile\nCopyright (c) 2018 The Polymer Project Authors. All rights reserved.\nThis code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\nThe complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\nThe complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\nCode distributed by Google as part of the polymer project is also\nsubject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n*/\n(function () {\n    'use strict';\n\n    (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement={HTMLElement:function HTMLElement(){return Reflect.construct(a,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js?");

/***/ }),

/***/ "./src/MainMenu.ts":
/*!*************************!*\
  !*** ./src/MainMenu.ts ***!
  \*************************/
/*! exports provided: MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainMenu\", function() { return MainMenu; });\n/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar */ \"./src/TitleBar.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MainMenu = /** @class */ (function (_super) {\n    __extends(MainMenu, _super);\n    function MainMenu() {\n        var _this = _super.call(this) || this;\n        var title = new _TitleBar__WEBPACK_IMPORTED_MODULE_0__[\"TitleBar\"];\n        _this.append(title.render());\n        return _this;\n    }\n    return MainMenu;\n}(HTMLElement));\n\ncustomElements.define('main-menu', MainMenu);\n\n\n//# sourceURL=webpack:///./src/MainMenu.ts?");

/***/ }),

/***/ "./src/TitleBar.ts":
/*!*************************!*\
  !*** ./src/TitleBar.ts ***!
  \*************************/
/*! exports provided: TitleBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleBar\", function() { return TitleBar; });\n/* harmony import */ var _colorPallete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorPallete */ \"./src/colorPallete.ts\");\n\nvar TitleBar = /** @class */ (function () {\n    function TitleBar() {\n    }\n    TitleBar.prototype.render = function () {\n        var divTitle = document.createElement(\"div\");\n        var h2 = document.createElement(\"h2\");\n        divTitle.append(this.styleText(h2));\n        return divTitle;\n    };\n    TitleBar.prototype.styleText = function (h2) {\n        h2.innerText = \"Minhas Listas de Compras\";\n        h2.style.color = _colorPallete__WEBPACK_IMPORTED_MODULE_0__[\"palette\"].defaultTextColor;\n        h2.style.fontFamily = \"Montserrat\";\n        h2.style.fontSize = \"22px\";\n        h2.style.textShadow = \"0px 0px 4px rgba(0, 0, 0, 0.25)\";\n        return h2;\n    };\n    return TitleBar;\n}());\n\n\n\n//# sourceURL=webpack:///./src/TitleBar.ts?");

/***/ }),

/***/ "./src/WebApp.ts":
/*!***********************!*\
  !*** ./src/WebApp.ts ***!
  \***********************/
/*! exports provided: WebApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebApp\", function() { return WebApp; });\n/* harmony import */ var _colorPallete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorPallete */ \"./src/colorPallete.ts\");\n/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu */ \"./src/MainMenu.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar WebApp = /** @class */ (function (_super) {\n    __extends(WebApp, _super);\n    function WebApp() {\n        var _this = _super.call(this) || this;\n        _this.style.width = \"100%\";\n        _this.style.height = \"100%\";\n        _this.style.backgroundColor = _colorPallete__WEBPACK_IMPORTED_MODULE_0__[\"palette\"].defautBackground;\n        _this.append(new _MainMenu__WEBPACK_IMPORTED_MODULE_1__[\"MainMenu\"]);\n        return _this;\n    }\n    return WebApp;\n}(HTMLElement));\n\ncustomElements.define('web-app', WebApp);\n\n\n//# sourceURL=webpack:///./src/WebApp.ts?");

/***/ }),

/***/ "./src/colorPallete.ts":
/*!*****************************!*\
  !*** ./src/colorPallete.ts ***!
  \*****************************/
/*! exports provided: palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palette\", function() { return palette; });\nvar palette = {\n    defautBackground: \"rgba(68, 151, 229, 1)\",\n    defaultTextColor: \"white\"\n};\n\n\n//# sourceURL=webpack:///./src/colorPallete.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcomponents_webcomponentsjs_custom_elements_es5_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webcomponents/webcomponentsjs/custom-elements-es5-adapter */ \"./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js\");\n/* harmony import */ var _webcomponents_webcomponentsjs_custom_elements_es5_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_webcomponentsjs_custom_elements_es5_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WebApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebApp */ \"./src/WebApp.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    // Startup\n    document.body.append(new _WebApp__WEBPACK_IMPORTED_MODULE_1__[\"WebApp\"]);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });