"use strict";
exports.id = 8254;
exports.ids = [8254];
exports.modules = {

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a0": () => (/* binding */ eventData),
/* harmony export */   "G": () => (/* binding */ singleEvent),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export eventSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get all events
const eventData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('events/fetchEvents', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/events');
    const data = response.json();
    return data;
});
// singleEvent
const singleEvent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('event/fetchEvent', async (id = '6222ffacea7975d304c5b7b1')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/event/${id}`);
    const event = response.json();
    return event;
});
const eventSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        allEvents: [],
        event: {},
        status: '',
        eventStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        // all event
        builder.addCase(eventData.fulfilled, (state, action)=>{
            state.allEvents = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(eventData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single event
        builder.addCase(singleEvent.fulfilled, (state, action)=>{
            state.event = action.payload;
            state.eventStatus = 'fulfilled';
        }), builder.addCase(singleEvent.pending, (state, action)=>{
            state.eventStatus = 'pending';
        });
    }
});
// export const {  } = eventSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSlice.reducer);


/***/ })

};
;