"use strict";
exports.id = 2649;
exports.ids = [2649];
exports.modules = {

/***/ 2649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aB": () => (/* binding */ teamData),
/* harmony export */   "Z": () => (/* binding */ singleTeam),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export teamSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// get all teams
const teamData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('team/fetchTeams', async ()=>{
    const response = await fetch('https://obscure-shelf-38503.herokuapp.com/teams');
    const data = response.json();
    return data;
});
// single team
const singleTeam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('team/fetchTeam', async (id = '62231bdcea7975d304d117bf')=>{
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/team/${id}`);
    const event = response.json();
    return event;
});
const teamSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState: {
        allTeams: [],
        status: '',
        team: {},
        teamStatus: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(teamData.fulfilled, (state, action)=>{
            state.allTeams = action.payload;
            state.status = 'fulfilled';
        }), builder.addCase(teamData.pending, (state, action)=>{
            state.status = 'pending';
        });
        // single team
        builder.addCase(singleTeam.fulfilled, (state, action)=>{
            state.team = action.payload;
            state.teamStatus = 'fulfilled';
        }), builder.addCase(singleTeam.pending, (state, action)=>{
            state.teamStatus = 'pending';
        });
    }
});
// export const {  } = teamSlice.actions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamSlice.reducer);


/***/ })

};
;