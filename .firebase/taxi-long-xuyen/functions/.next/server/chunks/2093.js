"use strict";
exports.id = 2093;
exports.ids = [2093];
exports.modules = {

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "tr": () => (/* binding */ decreaseCartQuantity),
/* harmony export */   "h2": () => (/* binding */ removeFromCart),
/* harmony export */   "NU": () => (/* binding */ getTotal),
/* harmony export */   "LL": () => (/* binding */ clearCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);



const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'cart',
    initialState: {
        cartItems:  false ? 0 : [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0
    },
    reducers: {
        addToCart: (state, { payload  })=>{
            const itemIndex = state.cartItems.findIndex((item)=>item._id === payload._id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                // alert
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.info('Increase Product Quantity', {
                    position: 'top-left'
                });
            } else {
                const tempCartItems = {
                    ...payload,
                    cartQuantity: 1
                };
                state.cartItems.push(tempCartItems);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Course Added To Cart Successfully',
                    timer: 1500
                });
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        //  decrease cart quantity
        decreaseCartQuantity: (state, { payload  })=>{
            const cartItemIndex = state.cartItems.findIndex((item)=>item._id === payload._id
            );
            if (state.cartItems[cartItemIndex].cartQuantity > 1) {
                state.cartItems[cartItemIndex].cartQuantity -= 1;
                // alert
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Decreased cart quantity`, {
                    position: 'top-left'
                });
            } else if (state.cartItems[cartItemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter((item)=>item._id !== payload._id
                );
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Remove from Cart',
                    timer: 1500
                });
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        // removeFromCart
        removeFromCart: (state, { payload  })=>{
            state.cartItems = state.cartItems.filter((item)=>item._id !== payload._id
            );
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                position: 'top-center',
                icon: 'error',
                title: 'Remove from Cart',
                timer: 1500
            });
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        },
        // get total
        getTotal: (state, { payload  })=>{
            let { total , quantity  } = state.cartItems.reduce((cartTotal, cartItem)=>{
                const { price , cartQuantity  } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        // clear cart
        clearCart: (state, action)=>{
            state.cartItems = [];
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems));
        }
    }
});
const { addToCart , decreaseCartQuantity , removeFromCart , getTotal , clearCart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ })

};
;