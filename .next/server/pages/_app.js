"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.tsx\");\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    console.log('-----------------___APP', {\n        pageProps\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/seanmodd/Dev/GitHubYouTube/kirill-konshin next-redux-wrapper master packages-demo-redux-toolkit/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 12\n        },\n        __self: undefined\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFFaEMsS0FBSyxDQUFDRSxHQUFHLElBQUksQ0FBQ0MsQ0FBQUEsU0FBUyxHQUFFQyxTQUFTLEdBQUMsR0FBSyxDQUFDO0lBQ3JDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF5QiwwQkFBRSxDQUFDRjtRQUFBQSxTQUFTO0lBQUEsQ0FBQztJQUNsRCxNQUFNLHNFQUFFRCxTQUFTO1dBQUtDLFNBQVM7Ozs7Ozs7O0FBQ25DLENBQUM7QUFFRCxpRUFBZUgscURBQWlCLENBQUNDLEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1yZWR1eC10b29sa2l0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3cmFwcGVyfSBmcm9tICcuLi9zdG9yZSc7XG5cbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tX19fQVBQJywge3BhZ2VQcm9wc30pO1xuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store.tsx":
/*!*******************!*\
  !*** ./store.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subjectSlice\": () => (/* binding */ subjectSlice),\n/* harmony export */   \"fetchSubject\": () => (/* binding */ fetchSubject),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper),\n/* harmony export */   \"selectSubject\": () => (/* binding */ selectSubject)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst subjectSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'subject',\n    initialState: {\n    },\n    reducers: {\n        setEnt (state, action) {\n            return action.payload;\n        }\n    },\n    extraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{\n            console.log('HYDRATE', state, action.payload);\n            return {\n                ...state,\n                ...action.payload.subject\n            };\n        }\n    }\n});\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [subjectSlice.name]: subjectSlice.reducer\n        },\n        devTools: true\n    })\n;\nconst fetchSubject = (id)=>async (dispatch)=>{\n        const timeoutPromise = (timeout)=>new Promise((resolve)=>setTimeout(resolve, timeout)\n            )\n        ;\n        await timeoutPromise(200);\n        dispatch(subjectSlice.actions.setEnt({\n            [id]: {\n                id,\n                name: `Subject ${id}`\n            }\n        }));\n    }\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore);\nconst selectSubject = (id)=>{\n    return (state)=>{\n        var ref;\n        return state === null || state === void 0 ? void 0 : (ref = state[subjectSlice.name]) === null || ref === void 0 ? void 0 : ref[id];\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFFaEI7QUFFbEQsS0FBSyxDQUFDSSxZQUFZLEdBQUdILDZEQUFXLENBQUMsQ0FBQztJQUNyQ0ksSUFBSSxFQUFFLENBQVM7SUFFZkMsWUFBWSxFQUFFLENBQUM7SUFBQSxDQUFDO0lBRWhCQyxRQUFRLEVBQUUsQ0FBQztRQUNQQyxNQUFNLEVBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDQSxNQUFNLENBQUNDLE9BQU87UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFREMsYUFBYSxFQUFFLENBQUM7U0FDWFQsdURBQU8sSUFBSU0sS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztZQUMzQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUyxVQUFFTCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTztZQUM1QyxNQUFNLENBQUMsQ0FBQzttQkFDREYsS0FBSzttQkFDTEMsTUFBTSxDQUFDQyxPQUFPLENBQUNJLE9BQU87WUFDN0IsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELEtBQUssQ0FBQ0MsU0FBUyxPQUNYaEIsZ0VBQWMsQ0FBQyxDQUFDO1FBQ1ppQixPQUFPLEVBQUUsQ0FBQzthQUNMYixZQUFZLENBQUNDLElBQUksR0FBR0QsWUFBWSxDQUFDYSxPQUFPO1FBQzdDLENBQUM7UUFDREMsUUFBUSxFQUFFLElBQUk7SUFDbEIsQ0FBQzs7QUFNRSxLQUFLLENBQUNDLFlBQVksSUFBSUMsRUFBTyxVQUFxQkMsUUFBUSxHQUFJLENBQUM7UUFDbEUsS0FBSyxDQUFDQyxjQUFjLElBQUlDLE9BQWUsR0FBSyxHQUFHLENBQUNDLE9BQU8sRUFBQ0MsT0FBTyxHQUFJQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsT0FBTzs7O1FBRTlGLEtBQUssQ0FBQ0QsY0FBYyxDQUFDLEdBQUc7UUFFeEJELFFBQVEsQ0FDSmpCLFlBQVksQ0FBQ3VCLE9BQU8sQ0FBQ25CLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCWSxFQUFFLEdBQUcsQ0FBQztnQkFDSEEsRUFBRTtnQkFDRmYsSUFBSSxHQUFHLFFBQVEsRUFBRWUsRUFBRTtZQUN2QixDQUFDO1FBQ0wsQ0FBQztJQUVULENBQUM7O0FBRU0sS0FBSyxDQUFDUSxPQUFPLEdBQUcxQixpRUFBYSxDQUFXYyxTQUFTO0FBRWpELEtBQUssQ0FBQ2EsYUFBYSxJQUFJVCxFQUFPO1lBQU1YLEtBQWU7WUFBS0EsR0FBMEI7ZUFBMUJBLEtBQUssYUFBTEEsS0FBSyxLQUFMQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLElBQTFCQSxHQUEwQixHQUExQkEsS0FBSyxDQUFHTCxZQUFZLENBQUNDLElBQUksZUFBekJJLEdBQTBCLEtBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxHQUEwQixDQUFHVyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1yZWR1eC10b29sa2l0Ly4vc3RvcmUudHN4P2FhZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd1cmVTdG9yZSwgY3JlYXRlU2xpY2UsIFRodW5rQWN0aW9ufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2NyZWF0ZVdyYXBwZXIsIEhZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmV4cG9ydCBjb25zdCBzdWJqZWN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3N1YmplY3QnLFxuXG4gICAgaW5pdGlhbFN0YXRlOiB7fSBhcyBhbnksXG5cbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRFbnQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBleHRyYVJlZHVjZXJzOiB7XG4gICAgICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuc3ViamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxuICAgIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICAgICAgcmVkdWNlcjoge1xuICAgICAgICAgICAgW3N1YmplY3RTbGljZS5uYW1lXTogc3ViamVjdFNsaWNlLnJlZHVjZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGRldlRvb2xzOiB0cnVlLFxuICAgIH0pO1xuXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248UmV0dXJuVHlwZSwgQXBwU3RhdGUsIHVua25vd24sIEFjdGlvbj47XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1YmplY3QgPSAoaWQ6IGFueSk6IEFwcFRodW5rID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9ICh0aW1lb3V0OiBudW1iZXIpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KSk7XG5cbiAgICBhd2FpdCB0aW1lb3V0UHJvbWlzZSgyMDApO1xuXG4gICAgZGlzcGF0Y2goXG4gICAgICAgIHN1YmplY3RTbGljZS5hY3Rpb25zLnNldEVudCh7XG4gICAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogYFN1YmplY3QgJHtpZH1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxBcHBTdG9yZT4obWFrZVN0b3JlKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN1YmplY3QgPSAoaWQ6IGFueSkgPT4gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGU/LltzdWJqZWN0U2xpY2UubmFtZV0/LltpZF07XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVTbGljZSIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwic3ViamVjdFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0RW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImNvbnNvbGUiLCJsb2ciLCJzdWJqZWN0IiwibWFrZVN0b3JlIiwicmVkdWNlciIsImRldlRvb2xzIiwiZmV0Y2hTdWJqZWN0IiwiaWQiLCJkaXNwYXRjaCIsInRpbWVvdXRQcm9taXNlIiwidGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImFjdGlvbnMiLCJ3cmFwcGVyIiwic2VsZWN0U3ViamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();