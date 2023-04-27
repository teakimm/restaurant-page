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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderContact() {\n    const main = document.querySelector(\"main\");\n    const phone = document.createElement(\"h2\");\n    phone.textContent = \"Call us today: (XXX)XXX-XXXX\"\n    const loc = document.createElement(\"h2\");\n    loc.textContent = \"Visit us at: 9297 Polly Parkway, Danville, USA\"\n    const image = document.createElement(\"img\");\n    image.setAttribute(\"class\", \"locationImg\")\n    image.src = \"https://media.istockphoto.com/id/1323763423/vector/city-map-with-some-location-tags.jpg?s=612x612&w=0&k=20&c=j53gxcfkugcY-VxeDx3kb2Dla1wG3q7AdQhiHaLoMGo=\"\n    main.appendChild(phone);\n    main.appendChild(loc);\n    main.appendChild(image);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialRender */ \"./src/initialRender.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n(0,_initialRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nfunction listenClicks() {\n    const homeBtn = document.querySelector(\".homeBtn\");\n    const menuBtn = document.querySelector(\".menuBtn\");\n    const contactBtn = document.querySelector(\".contactBtn\");\n    const main = document.querySelector(\"main\");\n    document.addEventListener(\"click\", e => {\n        if(e.target.className === \"homeBtn\") {\n            homeBtn.style.color = \"rgb(146, 146, 146)\";\n            menuBtn.style.color = \"white\";\n            contactBtn.style.color = \"white\";\n            main.innerHTML = \"\";\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } else if(e.target.className === \"menuBtn\") {\n            homeBtn.style.color = \"white\";\n            menuBtn.style.color = \"rgb(146, 146, 146)\";\n            contactBtn.style.color = \"white\";\n            main.innerHTML = \"\";\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        } else if(e.target.className === \"contactBtn\") {\n            homeBtn.style.color = \"white\";\n            menuBtn.style.color = \"white\";\n            contactBtn.style.color = \"rgb(146, 146, 146)\";\n            main.innerHTML = \"\";\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        }\n    });\n}\nlistenClicks();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialRender.js":
/*!******************************!*\
  !*** ./src/initialRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createBtn(name, text) {\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"class\", name);\n  btn.textContent = text;\n  return btn;\n}\nfunction createNav(name) {\n  const nav = document.createElement(\"nav\");\n  nav.setAttribute(\"class\", name);\n  const title = document.createElement(\"h1\");\n  title.textContent = \"AIYA RAMEN\"\n  nav.appendChild(title);\n  const homeBtn = createBtn(\"homeBtn\", \"Home\");\n  const menuBtn = createBtn(\"menuBtn\", \"Menu\");\n  const contactBtn = createBtn(\"contactBtn\", \"Contact\");\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n  return nav;\n}\nfunction createMain(name) {\n  const main = document.createElement(\"main\");\n  main.setAttribute(\"class\", name);\n  return main;\n}\nfunction createFooter(name) {\n  const footer = document.createElement(\"footer\");\n  footer.setAttribute(\"class\", name);\n  const background = document.createElement(\"div\");\n  const link = document.createElement(\"a\");\n  link.textContent = \"Paulo Doi\";\n  link.href = \"https://unsplash.com/@paulodoi\";\n  background.setAttribute(\"class\", \"background\");\n  background.textContent = \"Photo provided by \"\n  background.appendChild(link);\n  footer.appendChild(background);\n  return footer;\n}\nfunction initialRender() {\n  const content = document.getElementById(\"content\");\n  const nav = createNav(\"nav-bar\");\n  const main = createMain(\"main\");\n  const footer = createFooter(\"footer\");\n  content.appendChild(nav);\n  content.appendChild(main);\n  content.appendChild(footer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialRender);\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialRender.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createItem(src, name, description) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.setAttribute(\"class\", \"menuItem\")\n    const img = document.createElement(\"img\");\n    img.src = src;\n    const title = document.createElement(\"h3\");\n    title.textContent = name;\n    const desc = document.createElement(\"div\");\n    desc.textContent = description;\n    menuItem.appendChild(title);\n    menuItem.appendChild(img);\n    menuItem.appendChild(desc);\n    return menuItem;\n}\nfunction populateMenu(name) {\n    const menu = document.createElement(\"div\");\n    menu.setAttribute(\"class\", \"menu\");\n    const tonkotsu = createItem(\"https://static.wixstatic.com/media/ac2bd4_ad18cb9194c44fedaeb2cbcbcb413f05~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp\", \"Tonkotsu Ramen\", \"Served with, Pork Chashu, Bamboo Shoot, Wakame, Half Marinated Egg, Nori, Corn, Scallion. (Pork Broth)\");\n    const miso = createItem(\"https://static.wixstatic.com/media/ac2bd4_e8c2b2e01edd43eda4ef8195dc50147c~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp\", \"Miso Ramen\", \"Served with, Pork Chashu, Bamboo Shoot, Wakame, Half Marinated Egg, Nori, Corn, Scallion. (Pork Broth)\");\n    const curry = createItem(\"https://static.wixstatic.com/media/ac2bd4_e7b6776333a14fe8aa93aaaa04548ced~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp\", \"Curry Ramen\", \"Served with, Tonkatsu, Half Marinated Egg, Bamboo Shoots, Corn, Wakame, Scallions, Nori. (Pork Broth)\");\n    const veggie = createItem(\"https://static.wixstatic.com/media/ac2bd4_d4f87f16fb4e4f3794927b39214cf244~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp\", \"Vegetable Ramen\", \"Served with, Carrots, Dried Tofu, Broccoli, Bamboo Shoot, Wakame, Nori, Corn, Scallion. (Vegetable Broth)\");\n    menu.appendChild(tonkotsu);\n    menu.appendChild(miso);\n    menu.appendChild(curry);\n    menu.appendChild(veggie);\n    return menu;\n}\nfunction renderMenu() {\n    const main = document.querySelector(\".main\");\n    const menu = populateMenu(\"menu\");\n    main.appendChild(menu);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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