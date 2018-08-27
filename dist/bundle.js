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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getCookie = (key, isString) => {
    const results = new RegExp(key + '=(.*?)(;|$)', 'g').exec(document.cookie)

    if (isString) {
        return results && results[1] ? results[1] : null
    }

    return results && results[1] ? JSON.parse(results[1]) : null
}
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookie;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const setCookie = (key, value, expires) => {
    const result =
        key +
        '=' +
        JSON.stringify(value) +
        ';path=/;expires=' +
        expires.toUTCString()
    document.cookie = result
}
/* harmony export (immutable) */ __webpack_exports__["a"] = setCookie;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_cookie__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_cookie__ = __webpack_require__(0);



const addDays = days => {
    const date = new Date()
    const additionalDays = 1000 * 60 * 60 * 24 * days
    date.setTime(date.getTime() + additionalDays)
    return date
}

const cookieFactory = () => {
    const cookie = {
        getCookie: (key, isString, markAsErasable) => {
            isString = isString || false
            markAsErasable = markAsErasable || false
            const value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_cookie__["a" /* getCookie */])(key, isString)

            if (markAsErasable) {
                this.remove(key)
            }

            return value
        },
        setCookie: (key, value, days) => {
            days = days || 365
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__set_cookie__["a" /* setCookie */])(key, value, addDays(days))
        },
        deleteCookie: key => {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__set_cookie__["a" /* setCookie */])(key, null, addDays(-7))
        }
    }

    return cookie
}

/* harmony default export */ __webpack_exports__["default"] = (cookieFactory());


/***/ })
/******/ ]);