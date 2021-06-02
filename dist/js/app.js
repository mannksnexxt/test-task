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

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\n\n\nlet appLists =  [\n\t{\n\t\tisSorted: true,\n\t\tisOpen: true,\n\t\titems: [\n\t\t\t{\n\t\t\t\tcolor: '#f1c40f',\n\t\t\t\tquantity: 12,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#2ecc71',\n\t\t\t\tquantity: 8,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#3498db',\n\t\t\t\tquantity: 32,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#9b59b6',\n\t\t\t\tquantity: 1,\n\t\t\t\tselected: false\n\t\t\t}\n\t\t],\n\t\tselectedItems: []\n\t},\n\t{\n\t\tisSorted: true,\n\t\tisOpen: false,\n\t\titems: [\n\t\t\t{\n\t\t\t\tcolor: '#f1c40f',\n\t\t\t\tquantity: 12,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#2ecc71',\n\t\t\t\tquantity: 8,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#3498db',\n\t\t\t\tquantity: 32,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#9b59b6',\n\t\t\t\tquantity: 0,\n\t\t\t\tselected: false\n\t\t\t}\n\t\t],\n\t\tselectedItems: []\n\t},\n\t{\n\t\tisSorted: true,\n\t\tisOpen: false,\n\t\titems: [\n\t\t\t{\n\t\t\t\tcolor: '#e74c3c',\n\t\t\t\tquantity: 40,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#e67e22',\n\t\t\t\tquantity: 7,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#bdc3c7',\n\t\t\t\tquantity: 12,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#34495e',\n\t\t\t\tquantity: 0,\n\t\t\t\tselected: false\n\t\t\t}\n\t\t],\n\t\tselectedItems: []\n\t},\n\t{\n\t\tisSorted: true,\n\t\tisOpen: false,\n\t\titems: [\n\t\t\t{\n\t\t\t\tcolor: '#3498db',\n\t\t\t\tquantity: 1,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#1abc9c',\n\t\t\t\tquantity: 8,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#fd79a8',\n\t\t\t\tquantity: 60,\n\t\t\t\tselected: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tcolor: '#6c5ce7',\n\t\t\t\tquantity: 24,\n\t\t\t\tselected: false\n\t\t\t}\n\t\t],\n\t\tselectedItems: []\n\t},\n];\n\n\n\n\n\nconst vm = new Vue({\n\tel: '#app',\n\tdata: {\n\t\tlists: appLists\n\t},\n\tmethods: {\n\t\tvalidateNumber(item) {\n\t\t\tif (!item.quantity || item.quantity < 0) {\n\t\t\t\titem.quantity = 0;\n\t\t\t}\n\t\t},\n\t\tchangeAllItems(list) {\n\t\t\tif (list.items.length !== list.selectedItems.length) {\n\t\t\t\tlist.items.forEach(item => {\n\t\t\t\t\titem.selected = true;\n\t\t\t\t});\n\t\t\t\tthis.editList(list);\n\t\t\t} else {\n\t\t\t\tlist.items.forEach(item => {\n\t\t\t\t\titem.selected = false;\n\t\t\t\t});\n\t\t\t\tthis.editList(list);\n\t\t\t}\n\t\t},\n\t\teditList(list) {\n\t\t\tlist.selectedItems = list.items.filter(item => item.selected === true);\n\t\t},\n\t\treduceColor(list, color) {\n\t\t\tconst reducedColor = list.selectedItems.find(item => item.color === color);\n\t\t\treducedColor.quantity--;\n\t\t}\n\t},\n\tcomputed: {\n\t\tfilteredList() {\t\n\t\t\treturn this.lists.map(list => {\n\t\t\t\treturn list.selectedItems.map(item => {\n\t\t\t\t\treturn {color: item.color, quantity: item.quantity};\n\t\t\t\t})\n\t\t\t})\n\t\t},\n\t\tunfilteredList() {\n\t\t\treturn this.lists.map(list => {\n\t\t\t\tlet totalColors = [];\n\t\t\t\tlist.selectedItems.forEach(item => {\n\t\t\t\t\tfor (let i = 1; i <= item.quantity; i++) {\n\t\t\t\t\t\ttotalColors.push(item.color);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\treturn totalColors.sort( () => Math.random() - 0.5 );\n\t\t\t});\n\t\t}\n\t}\n});\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

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
/******/ 	__webpack_require__("./js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./scss/style.scss");
/******/ 	
/******/ })()
;