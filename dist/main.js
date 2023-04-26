/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createAbout(name) {\n  const about = document.createElement(\"div\");\n  about.setAttribute(\"class\", name);\n  about.textContent = \"Voted best ramen of 2022 in the Tri-state area, Aiya Ramen is a family-owned buisness that only uses the freshest ingredients. Try out our award winning ramen today!\";\n  return about;\n}\nfunction createHours(name) {\n  const hours = document.createElement(\"div\");\n  hours.setAttribute(\"class\", name);\n  hours.textContent = \"Hours:\";\n  const list = document.createElement(\"ul\");\n  let openHours = [\"Sunday: 10am - 10pm\", \"Monday - Thursday: 8am - 9pm\", \"Friday: 8am - 11pm\", \"Saturday: 8am - 11pm\"]\n  for(let i = 0; i < openHours.length; i++) {\n    const li = document.createElement(\"li\");\n    li.textContent = openHours[i];\n    list.appendChild(li);\n  }\n  hours.appendChild(list);\n  return hours;\n}\nfunction createExtra(name) {\n  const reserve = document.createElement(\"div\");\n  reserve.setAttribute(\"class\", name);\n  reserve.textContent = \"Call us to reserve or order in advance!\";\n  const br = document.createElement(\"br\");\n  const grubHub = document.createElement(\"img\");\n  grubHub.src = \"https://images.squarespace-cdn.com/content/v1/5e5408489751421bd31438bc/1592606206963-HWBCAT0PINHR80PEUT2B/grubhub.png\";\n  const uberEats = document.createElement(\"img\");\n  uberEats.src = \"https://assets.stickpng.com/images/5f4921b668ecc70004ae7047.png\";\n  reserve.appendChild(br);\n  reserve.appendChild(grubHub);\n  reserve.appendChild(uberEats);\n  return reserve\n}\nfunction renderHome() {\n  const main = document.querySelector(\"main\");\n  const about = createAbout(\"about\");\n  const hours = createHours(\"hours\");\n  const reserve = createExtra(\"reserve\");\n  main.appendChild(about);\n  main.appendChild(hours);\n  main.appendChild(reserve);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialRender */ \"./src/initialRender.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_initialRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialRender.js":
/*!******************************!*\
  !*** ./src/initialRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createBtn(name, text) {\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"class\", name);\n  btn.textContent = text;\n  return btn;\n}\nfunction createNav(name) {\n  const nav = document.createElement(\"nav\");\n  nav.setAttribute(\"class\", name);\n  const title = document.createElement(\"h1\");\n  title.textContent = \"AIYA RAMEN\"\n  nav.appendChild(title);\n  const homeBtn = createBtn(\"homeBtn\", \"Home\");\n  const menuBtn = createBtn(\"menuBtn\", \"Menu\");\n  const contactBtn = createBtn(\"contactBtn\", \"Contact\");\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n  return nav;\n}\nfunction createMain(name) {\n  const main = document.createElement(\"main\");\n  main.setAttribute(\"class\", name);\n  return main;\n}\nfunction createFooter(name) {\n  const footer = document.createElement(\"footer\");\n  footer.setAttribute(\"class\", name);\n  const background = document.createElement(\"div\");\n  const link = document.createElement(\"a\");\n  link.textContent = \"Paulo Doi\";\n  link.href = \"https://unsplash.com/@paulodoi\";\n  background.setAttribute(\"class\", \"background\");\n  background.textContent = \"Photo provided by \"\n  background.appendChild(link);\n  footer.appendChild(background);\n  return footer;\n}\nfunction initialRender() {\n  const content = document.getElementById(\"content\");\n  const nav = createNav(\"nav-bar\");\n  const main = createMain(\"main\");\n  const footer = createFooter(\"footer\");\n  content.appendChild(nav);\n  content.appendChild(main);\n  content.appendChild(footer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialRender);\n\n//# sourceURL=webpack://restaurant-page/./src/initialRender.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;