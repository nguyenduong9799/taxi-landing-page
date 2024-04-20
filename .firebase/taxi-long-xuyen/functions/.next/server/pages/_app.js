(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/features/coursesSlice.js
var coursesSlice = __webpack_require__(6309);
// EXTERNAL MODULE: ./redux/features/blogSlice.js
var blogSlice = __webpack_require__(8272);
// EXTERNAL MODULE: ./redux/features/eventSlice.js
var eventSlice = __webpack_require__(8254);
// EXTERNAL MODULE: ./redux/features/teamSlice.js
var teamSlice = __webpack_require__(2649);
// EXTERNAL MODULE: ./redux/features/categorySlice.js
var categorySlice = __webpack_require__(2293);
;// CONCATENATED MODULE: ./redux/features/courseDetailsSlice.js

// courseDetailsData
const courseDetailsData = (0,toolkit_.createAsyncThunk)('courses/fetchCourses', async (id)=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`);
    const data = response.json();
    return data;
});
const courseDetailsSlice = (0,toolkit_.createSlice)({
    name: 'courses',
    initialState: {
        courseDetails: {},
        status: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(courseDetailsData.fulfilled, (state, action)=>{
            state.courseDetails = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(courseDetailsData.pending, (state, action)=>{
            state.status = 'pending';
        });
    }
});
// export const { increment } = courseDetailsSlice.actions
/* harmony default export */ const features_courseDetailsSlice = (courseDetailsSlice.reducer);

// EXTERNAL MODULE: ./redux/features/cartSlice.js
var cartSlice = __webpack_require__(2093);
// EXTERNAL MODULE: ./redux/features/myOrderSlice.js
var myOrderSlice = __webpack_require__(5575);
;// CONCATENATED MODULE: ./redux/store.js









const store = (0,toolkit_.configureStore)({
    reducer: {
        courses: coursesSlice/* default */.ZP,
        blogs: blogSlice/* default */.ZP,
        events: eventSlice/* default */.ZP,
        teams: teamSlice/* default */.ZP,
        category: categorySlice/* default */.ZP,
        courseDetails: features_courseDetailsSlice,
        cart: cartSlice/* default */.ZP,
        order: myOrderSlice/* default */.ZP
    }
});


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6309);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7881);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_features_blogSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8272);
/* harmony import */ var _redux_features_eventSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8254);
/* harmony import */ var _redux_features_teamSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2649);
/* harmony import */ var _redux_features_categorySlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2293);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3745);
/* harmony import */ var _redux_features_cartSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2093);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_11__]);
firebase_app__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















if (false) {}
const firebaseConfig = {
    apiKey: "AIzaSyBcOqjiLRsrVl0AGy9iLZHz8B08qqmb6Mc",
    authDomain: "eduker-next-js.firebaseapp.com",
    projectId: "eduker-next-js",
    storageBucket: "eduker-next-js.appspot.com",
    messagingSenderId: "672447339636",
    appId: "1:672447339636:web:fff1e3ba982ac13dfa0521"
};
(0,firebase_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(firebaseConfig);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_coursesSlice__WEBPACK_IMPORTED_MODULE_3__/* .coursesData */ .om)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_blogSlice__WEBPACK_IMPORTED_MODULE_7__/* .blogData */ .qm)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_eventSlice__WEBPACK_IMPORTED_MODULE_8__/* .eventData */ .a0)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_teamSlice__WEBPACK_IMPORTED_MODULE_9__/* .teamData */ .aB)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_categorySlice__WEBPACK_IMPORTED_MODULE_10__/* .categoryData */ .eb)());
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store.dispatch */ .h.dispatch((0,_redux_features_cartSlice__WEBPACK_IMPORTED_MODULE_12__/* .getTotal */ .NU)());
    }, [
        _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4582,2093,2293,8272,8254,2649], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();