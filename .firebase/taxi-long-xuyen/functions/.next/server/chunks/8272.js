"use strict";
exports.id = 8272;
exports.ids = [8272];
exports.modules = {

/***/ 8272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qm": () => (/* binding */ blogData),
/* harmony export */   "Ch": () => (/* binding */ singleBlog),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export blogSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// all blogs get
const blogData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('blogs/fetchBlogs', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/blog');
    const data = response.json();
    return data;
});
// get single blog
const singleBlog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('event/fetchEvent', async (id = '62208badea7975d304d76830')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/blog/${id}`);
    const event = response.json();
    return event;
});
// blogSlice
const blogSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'blog',
    initialState: {
        allBlogs: [],
        status: '',
        blog: {},
        blogStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(blogData.fulfilled, (state, action)=>{
            state.allBlogs = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(blogData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single blog
        builder.addCase(singleBlog.fulfilled, (state, action)=>{
            state.blog = action.payload;
            state.blogStatus = 'fulfilled';
        }), builder.addCase(singleBlog.pending, (state, action)=>{
            state.blogStatus = 'pending';
        });
    }
});
// export const {  } = blogSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogSlice.reducer);


/***/ })

};
;