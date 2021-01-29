/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("/* global AFRAME */\nif (typeof AFRAME === \"undefined\") {\n  throw new Error(\"Component attempted to register before AFRAME was available.\");\n}\n\nfunction addDocumentStyles() {\n  document.documentElement.style.position = \"relative\";\n  document.body.style.overflow = \"scroll\";\n  document.body.style.height = \"100vh\";\n}\n\nfunction removeDocumentStyles() {\n  document.documentElement.style.position = \"\";\n  document.body.style.overflow = \"\";\n  document.body.style.height = \"\";\n}\n\nfunction createSwipeUpEl() {\n  const div = document.createElement(\"div\");\n  const style = {\n    position: \"absolute\",\n    top: 0,\n    left: 0,\n    right: 0,\n    height: \"200vh\",\n    backgroundColor: \"rgb(0, 0, 0, 0.5)\",\n    color: \"white\",\n    fontSize: \"24px\",\n    textAlign: \"center\",\n    lineHeight: \"100vh\",\n    zIndex: 999999\n  };\n  Object.keys(style).forEach(key => div.style[key] = style[key]);\n  div.innerText = \"Swipe Up\";\n  return div;\n}\n/**\n * Ios Fullscreen Helper component for A-Frame.\n */\n\n\nAFRAME.registerComponent(\"ios-fullscreen-helper\", {\n  schema: {},\n  multiple: false,\n\n  init() {\n    if (!AFRAME.utils.device.isIOS()) {\n      this.remove();\n      return;\n    }\n\n    this._bindMethods();\n\n    this._addEventListeners();\n\n    this._onOrientationChange();\n  },\n\n  remove() {\n    this._removeEventListeners();\n\n    this._removeSwipeUpEl();\n\n    removeDocumentStyles();\n  },\n\n  _bindMethods() {\n    this._onOrientationChange = AFRAME.utils.bind(this._onOrientationChange, this);\n  },\n\n  _addEventListeners() {\n    window.addEventListener(\"orientationchange\", this._onOrientationChange);\n  },\n\n  _removeEventListeners() {\n    window.removeEventListener(\"orientationchange\", this._onOrientationChange);\n  },\n\n  _addSwipeUpEl() {\n    if (this._swipeUpEl) return;\n    this._swipeUpEl = createSwipeUpEl();\n    document.body.appendChild(this._swipeUpEl);\n    this.el.emit('addswipeup');\n  },\n\n  _removeSwipeUpEl() {\n    if (this._swipeUpEl) document.body.removeChild(this._swipeUpEl);\n    if (this._intervalId) clearInterval(this._intervalId);\n    this._swipeUpEl = null;\n    this._intervalId = null;\n  },\n\n  _onOrientationChange() {\n    const isLandscape = window.orientation !== 0;\n\n    if (isLandscape) {\n      addDocumentStyles();\n\n      this._addSwipeUpEl();\n\n      this._intervalId = setInterval(() => {\n        const screenHeight = Math.min(window.screen.width, window.screen.height);\n        const show = screenHeight - window.innerHeight > 40;\n\n        if (!show) {\n          this._removeSwipeUpEl();\n\n          this.el.emit('removeswipeup');\n        }\n      }, 100);\n    } else {\n      removeDocumentStyles();\n\n      this._removeSwipeUpEl();\n    }\n  }\n\n});\n\n//# sourceURL=webpack://aframe-ios-fullscreen-helper-component/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./index.js");
/******/ })()
;
});