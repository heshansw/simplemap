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

/***/ "./samples/index.ts":
/*!**************************!*\
  !*** ./samples/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/helpers/utils */ \"./src/helpers/utils.ts\");\n/* harmony import */ var _src_helpers_validators_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/helpers/validators/email */ \"./src/helpers/validators/email.ts\");\n/* harmony import */ var _src_helpers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/helpers/enum */ \"./src/helpers/enum.ts\");\n/* harmony import */ var _src_form_form_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/form/form-util */ \"./src/form/form-util.ts\");\n\n\n\n\nvar personOne = {\n    name: 'Test Name',\n    age: 15,\n    country: 'Sweden',\n};\nvar onView = function (element, valueStr) {\n    return element ? (element.innerHTML = \"<pre><code>\".concat(valueStr, \"</code></pre>\")) : null;\n};\n/**\n * 1) extract method\n */\nvar btnOnExtract = document.getElementById('onExtractId');\nvar viewExtract = document.getElementById('viewExtractId');\nvar onExtract = function () {\n    return onView(viewExtract, JSON.stringify((0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.extract)(['name', 'age'])(personOne)));\n};\nif (btnOnExtract) {\n    btnOnExtract.addEventListener('click', onExtract);\n}\nvar studentOne = {\n    name: 'Student Name 1',\n    age: 18,\n};\nvar calcAgeTenYears = function (age) { return age + 10; };\nvar btnOnChangeN = document.getElementById('onChangeNId');\nvar viewChangeN = document.getElementById('viewChangeNId');\nvar onChangeN = function () {\n    return onView(viewChangeN, JSON.stringify((0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.changeN)('age', calcAgeTenYears, 'ageAfterTenYears')(studentOne)));\n};\nif (btnOnChangeN) {\n    btnOnChangeN.addEventListener('click', onChangeN);\n}\nvar studentTwo = {\n    name: 'Student Name 1',\n    dateOfBirth: new Date('1990-01-01'),\n};\nvar calcAge = function (_a, today) {\n    var dateOfBirth = _a.dateOfBirth;\n    if (today === void 0) { today = new Date(); }\n    return (dateOfBirth && today.getMonth() < dateOfBirth.getMonth()) ||\n        (today.getMonth() === dateOfBirth.getMonth() &&\n            today.getDate() < dateOfBirth.getDate())\n        ? today.getFullYear() - dateOfBirth.getFullYear() - 1\n        : today.getFullYear() - dateOfBirth.getFullYear();\n};\nvar btnOnChangeO = document.getElementById('onChangeOId');\nvar viewChangeO = document.getElementById('viewChangeOId');\nvar onChangeO = function () {\n    return onView(viewChangeO, JSON.stringify((0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.changeO)('age', calcAge)(studentTwo)));\n};\nif (btnOnChangeO) {\n    btnOnChangeO.addEventListener('click', onChangeO);\n}\n/**\n * 4) extractA method\n */\nvar studentArray = [\n    { name: 'Student Name 1', age: 18, address: 'Malmö' },\n    { name: 'Student Name 2', age: 17, address: 'Lund' },\n    { name: 'Student Name 3', age: 16, address: 'Stockholm' },\n    { name: 'Student Name 4', age: 18, address: 'Lund' },\n];\nvar stdArrayNameAge = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.extractA)(studentArray, [\n    'name',\n    'age',\n]);\nvar btnOnExtractA = document.getElementById('onExtractAId');\nvar viewExtractA = document.getElementById('viewExtractAId');\nvar onExtractA = function () { return onView(viewExtractA, JSON.stringify(stdArrayNameAge)); };\nif (btnOnExtractA) {\n    btnOnExtractA.addEventListener('click', onExtractA);\n}\n/**\n * 5) extractA method\n */\nvar studentExArray = [\n    { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02') },\n    { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04') },\n    { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14') },\n    { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11') },\n];\nvar stWithAgeArray = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.changeA)(studentExArray, 'age', calcAge);\nvar btnOnChangeA = document.getElementById('onChangeAId');\nvar viewChangeA = document.getElementById('viewChangeAId');\nvar onChangeA = function () { return onView(viewChangeA, JSON.stringify(stWithAgeArray)); };\nif (btnOnChangeA) {\n    btnOnChangeA.addEventListener('click', onChangeA);\n}\n/**\n * 6) sort method\n */\nvar descAgeStudents = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.sort)(stWithAgeArray, 'age', _src_helpers_enum__WEBPACK_IMPORTED_MODULE_2__.SortOrder.DESC);\nvar btnOnSort = document.getElementById('onSortId');\nvar viewSort = document.getElementById('viewSortId');\nvar onSort = function () { return onView(viewSort, JSON.stringify(descAgeStudents)); };\nif (btnOnSort) {\n    btnOnSort.addEventListener('click', onSort);\n}\nvar person = {\n    name: 'Test Person 1',\n    age: 30,\n    location: {\n        city: {\n            name: 'Copanhagen',\n            zipCode: '1050',\n        },\n        country: 'Denmark',\n    },\n};\nvar btnOnGet = document.getElementById('onGetId');\nvar viewGet = document.getElementById('viewGetId');\nvar personCity = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.get)(person, 'location.city');\nvar onGet = function () { return onView(viewGet, JSON.stringify(personCity)); };\nif (btnOnGet) {\n    btnOnGet.addEventListener('click', onGet);\n}\n/**\n * 7) getKey method\n */\nvar btnOnGetKey = document.getElementById('onGetKeyId');\nvar viewGetKey = document.getElementById('viewGetKeyId');\nvar personZipCode = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getKeyVal)(person, 'zipCode');\nvar onGetKey = function () { return onView(viewGetKey, personZipCode); };\nif (btnOnGetKey) {\n    btnOnGetKey.addEventListener('click', onGetKey);\n}\n/**\n * 8) validateEmail method\n */\nvar btnOnValidateEmail = document.getElementById('onEmailId');\nvar viewValidateEmail = document.getElementById('viewEmailId');\nvar valueValidateEmail = document.getElementById('valEmailId');\nvar onSingleEmailValidate = function () {\n    try {\n        return (0,_src_helpers_validators_email__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(valueValidateEmail === null || valueValidateEmail === void 0 ? void 0 : valueValidateEmail.value);\n    }\n    catch (ex) {\n        return ex;\n    }\n};\nvar onValidateEmail = function () { return onView(viewValidateEmail, onSingleEmailValidate()); };\nif (btnOnValidateEmail) {\n    btnOnValidateEmail.addEventListener('click', onValidateEmail);\n}\nvar userData = {\n    name: 'heshan',\n    contact: {\n        email: 'test@test.com',\n        address: 'Malmö',\n    },\n};\nvar btnOnGetEmail = document.getElementById('onGetEmailId');\nvar viewGetEmail = document.getElementById('viewGetEmailId');\nvar onSingleGetEmail = function () {\n    try {\n        return (0,_src_helpers_validators_email__WEBPACK_IMPORTED_MODULE_1__.getEmail)(userData, 'contact.email');\n    }\n    catch (ex) {\n        return ex;\n    }\n};\nvar onGetEmail = function () { return onView(viewGetEmail, onSingleGetEmail()); };\nif (btnOnGetEmail) {\n    btnOnGetEmail.addEventListener('click', onGetEmail);\n}\n/**\n * 10) validateEmailObject Email\n */\nvar btnOnGetEmailObj = document.getElementById('onGetEmailObjId');\nvar viewGetEmailObj = document.getElementById('viewGetEmailObjId');\nvar onGetEmailObj = function () {\n    try {\n        return (0,_src_helpers_validators_email__WEBPACK_IMPORTED_MODULE_1__.validateEmailObject)(userData, 'contact.email');\n    }\n    catch (ex) {\n        return ex;\n    }\n};\nvar onObjEmail = function () { return onView(viewGetEmailObj, onGetEmailObj()); };\nif (btnOnGetEmailObj) {\n    btnOnGetEmailObj.addEventListener('click', onObjEmail);\n}\n/**\n * 11) Auto Validate Email\n */\nvar userDataError = {\n    name: 'heshan',\n    contact: {\n        email: 'test@#.c',\n        address: 'Malmö',\n    },\n};\nvar btnOnAutoGetEmail = document.getElementById('onAutoGetEmailId');\nvar viewAutoGetEmail = document.getElementById('viewAutoGetEmailId');\nvar onAutoGetEmail = function () {\n    try {\n        return (0,_src_helpers_validators_email__WEBPACK_IMPORTED_MODULE_1__.autoValidateEmail)(userDataError);\n    }\n    catch (ex) {\n        return ex;\n    }\n};\nvar onAutoEmail = function () { return onView(viewAutoGetEmail, onAutoGetEmail()); };\nif (btnOnAutoGetEmail) {\n    btnOnAutoGetEmail.addEventListener('click', onAutoEmail);\n}\nvar formMapping = document.getElementById('formDataModel');\nvar formDataElement = document.getElementById('formDataElement');\nif (formMapping && formDataElement) {\n    formMapping.addEventListener('submit', function (e) {\n        try {\n            var formData = (0,_src_form_form_util__WEBPACK_IMPORTED_MODULE_3__.getFormData)(e);\n            formDataElement.innerHTML = \"<pre><code>\".concat(JSON.stringify(formData), \"</code></pre>\");\n        }\n        catch (ex) {\n            formDataElement.innerHTML = \"<pre><code>\".concat(ex, \"</code></pre>\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./samples/index.ts?");

/***/ }),

/***/ "./src/form/form-util.ts":
/*!*******************************!*\
  !*** ./src/form/form-util.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormData: () => (/* binding */ getFormData)\n/* harmony export */ });\n/* harmony import */ var _helpers_validators_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validators/email */ \"./src/helpers/validators/email.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar getFormData = function (e) {\n    e.preventDefault();\n    var target = e.target;\n    if (!!target && target instanceof HTMLFormElement) {\n        var formData_1 = {};\n        target\n            .querySelectorAll('input[name]')\n            .forEach(function (input) {\n            var _a;\n            ;\n            input.type === 'email' &&\n                (0,_helpers_validators_email__WEBPACK_IMPORTED_MODULE_0__.validateEmail)(input === null || input === void 0 ? void 0 : input.value);\n            formData_1 = __assign(__assign({}, formData_1), (_a = {}, _a[input.name] = input === null || input === void 0 ? void 0 : input.value, _a));\n        });\n        return formData_1;\n    }\n    return null;\n};\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./src/form/form-util.ts?");

/***/ }),

/***/ "./src/helpers/const.ts":
/*!******************************!*\
  !*** ./src/helpers/const.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EMAIL_REGEX: () => (/* binding */ EMAIL_REGEX)\n/* harmony export */ });\nvar EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./src/helpers/const.ts?");

/***/ }),

/***/ "./src/helpers/enum.ts":
/*!*****************************!*\
  !*** ./src/helpers/enum.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SortOrder: () => (/* binding */ SortOrder)\n/* harmony export */ });\nvar SortOrder;\n(function (SortOrder) {\n    SortOrder[SortOrder[\"ASC\"] = 1] = \"ASC\";\n    SortOrder[SortOrder[\"DESC\"] = 2] = \"DESC\";\n})(SortOrder || (SortOrder = {}));\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./src/helpers/enum.ts?");

/***/ }),

/***/ "./src/helpers/utils.ts":
/*!******************************!*\
  !*** ./src/helpers/utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeA: () => (/* binding */ changeA),\n/* harmony export */   changeN: () => (/* binding */ changeN),\n/* harmony export */   changeO: () => (/* binding */ changeO),\n/* harmony export */   extract: () => (/* binding */ extract),\n/* harmony export */   extractA: () => (/* binding */ extractA),\n/* harmony export */   findContainKeys: () => (/* binding */ findContainKeys),\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   getKeyVal: () => (/* binding */ getKeyVal),\n/* harmony export */   getKeyValue: () => (/* binding */ getKeyValue),\n/* harmony export */   sort: () => (/* binding */ sort)\n/* harmony export */ });\n/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ \"./src/helpers/enum.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar isKeyOfType = function (key) {\n    return typeof key === 'string';\n};\n/**\n * Extract key values from an object and create a new object\n * @param keys Keys in an object which needs to be extracted\n * @param obj Original Object\n * @returns Partial Object with extracted key values\n */\nvar extract = function (keys) {\n    return function (obj) {\n        return Object.fromEntries(Object.entries(keys.reduce(function (ob, key) {\n            var _a;\n            return (__assign(__assign({}, ob), (_a = {}, _a[key] = isKeyOfType(key)\n                ? obj[key]\n                : undefined, _a)));\n        }, {})).filter(function (_a) {\n            var _ = _a[0], value = _a[1];\n            return value !== undefined;\n        }));\n    };\n};\n/**\n * Create new key value (number) inside an existing object from new calculation\n * @param key Key which contains number value\n * @param callback Callback function which will help to calculate new key value\n * @param newKey New key name\n * @param obj Original object\n * @returns Object or extended object\n */\nvar changeN = function (key, callback, newKey) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[newKey !== null && newKey !== void 0 ? newKey : key] = typeof obj[key] === 'number' ? callback(obj[key]) : null, _a)));\n    };\n};\n/**\n * Add new manipulated key, value to an existing object\n * @param newKey New key to assign manipulated value\n * @param callback Callback method which can be used for new key value manipulation\n * @param obj Original object\n * @returns Updatted object\n */\nvar changeO = function (newKey, callback) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[newKey] = callback(obj), _a)));\n    };\n};\n/**\n * Extract specific keys and create new object array\n * @param arr Original Object Array\n * @param keys Keys which needs to be extracted\n * @returns New key extracted object array\n */\nvar extractA = function (arr, keys) { return arr.map(extract(keys)); };\n/**\n * Change and add new key value to existing array object\n * @param arr Original Object Array\n * @param newKey New Key\n * @param callback Callback method which can be used for new key value manipulation\n * @returns Altered Object Array\n */\nvar changeA = function (arr, newKey, callback) {\n    return arr.map(changeO(newKey, callback));\n};\n/**\n * Sort Arrayt\n * @param arr Original Object Array\n * @param key Sortable Key\n * @param order Optional, Sorting Order\n * @returns Sorted array\n */\nvar sort = function (arr, key, order) {\n    if (order === void 0) { order = _enum__WEBPACK_IMPORTED_MODULE_0__.SortOrder.ASC; }\n    return arr.sort(function (a, b) {\n        return (order === _enum__WEBPACK_IMPORTED_MODULE_0__.SortOrder.ASC ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1;\n    });\n};\nvar getKeyValue = function (currentObject, currentKey) {\n    return (currentObject !== undefined && (currentObject === null || currentObject === void 0 ? void 0 : currentObject[currentKey])\n        ? currentObject === null || currentObject === void 0 ? void 0 : currentObject[currentKey]\n        : undefined);\n};\n/**\n * Get Nested Object key value\n * @param obj Original Object\n * @param path nested key path to value\n * @returns nested path key's value type\n */\nvar get = function (obj, path) { var _a; return (_a = path.split('.')) === null || _a === void 0 ? void 0 : _a.reduce(getKeyValue, obj); };\n/**\n * Get Nested Key Value by giving Object and key\n * @param ob Original Object\n * @param key key which needs to be retrieved\n * @returns found value or undefined\n */\nvar getKeyVal = function (ob, key) {\n    return ob && typeof ob === 'object' && key in ob\n        ? ob[key]\n        : typeof ob === 'object'\n            ? Object.values(ob).reduce(function (acc, val) { return acc || getKeyVal(val, key); }, undefined)\n            : undefined;\n};\n/**\n *\n * @param obj Original Object\n * @param key key contains string\n * @returns array of values\n */\nvar findContainKeys = function (obj, key) {\n    return Object.keys(obj).flatMap(function (keyVal) {\n        return typeof obj[keyVal] === 'object' && obj[keyVal] !== null\n            ? findContainKeys(obj[keyVal], key)\n            : typeof keyVal === 'string' && keyVal.toLowerCase().includes(key)\n                ? [obj[keyVal]]\n                : [];\n    });\n};\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./src/helpers/utils.ts?");

/***/ }),

/***/ "./src/helpers/validators/email.ts":
/*!*****************************************!*\
  !*** ./src/helpers/validators/email.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoValidateEmail: () => (/* binding */ autoValidateEmail),\n/* harmony export */   getEmail: () => (/* binding */ getEmail),\n/* harmony export */   validateEmail: () => (/* binding */ validateEmail),\n/* harmony export */   validateEmailObject: () => (/* binding */ validateEmailObject)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/helpers/utils.ts\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ \"./src/helpers/const.ts\");\n\n\n/**\n * Validate Email\n * @param email email which needs to be validated\n * @returns Email Address or Exception\n */\nvar validateEmail = function (email) {\n    return _const__WEBPACK_IMPORTED_MODULE_1__.EMAIL_REGEX.test(email)\n        ? email\n        : (function () {\n            throw new Error('INVALID_EMAIL');\n        })();\n};\n/**\n * Get Valid Email from an Object\n * @param obj Original Object\n * @param path Key Path\n * @returns Email Address or Exception\n */\nvar getEmail = function (obj, path) {\n    var _a;\n    return validateEmail((_a = path.split('.')) === null || _a === void 0 ? void 0 : _a.reduce(_utils__WEBPACK_IMPORTED_MODULE_0__.getKeyValue, obj));\n};\n/**\n *\n * @param obj Original Object\n * @param email Email Value which is going to be validated\n * @returns Original Object or Exception\n */\nvar validatorEmailRegObj = function (obj, email) {\n    return _const__WEBPACK_IMPORTED_MODULE_1__.EMAIL_REGEX.test(email)\n        ? obj\n        : (function () {\n            throw new Error('INVALID_EMAIL');\n        })();\n};\n/**\n * Get Email from Key Path and Validate it\n * @param obj Original Object\n * @param path Key Path\n * @returns Valid object or Exception\n */\nvar validateEmailObject = function (obj, path) {\n    var _a;\n    return validatorEmailRegObj(obj, (_a = path.split('.')) === null || _a === void 0 ? void 0 : _a.reduce(_utils__WEBPACK_IMPORTED_MODULE_0__.getKeyValue, obj));\n};\n/**\n * Autovalidate emails if object has keys which contains email word\n * @param obj\n * @returns\n */\nvar autoValidateEmail = function (obj) {\n    var emails = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.findContainKeys)(obj, 'email');\n    return emails.length > 0\n        ? validatorEmailRegObj(obj, emails.shift())\n        : obj;\n};\n\n\n//# sourceURL=webpack://simplemap-ts-utility/./src/helpers/validators/email.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./samples/index.ts");
/******/ 	
/******/ })()
;