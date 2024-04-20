"use strict";
exports.id = 2439;
exports.ids = [2439];
exports.modules = {

/***/ 2439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ events_Events)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/events/EventSingle.js




const EventSingle = ({ event  })=>{
    // dispatch
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { time , date , title , tutor_img , tutor_name , _id  } = event;
    // dispatch(singleEvent(_id))
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "event__item white-bg mb-10 transition-3 p-relative d-lg-flex align-items-center justify-content-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "event__left d-sm-flex align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "event__date",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: date.substring(0, 2)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: date.substring(3, date.length)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "event__content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "event__meta",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        width: "17",
                                                        height: "17",
                                                        viewBox: "0 0 17 17",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M8.49992 9.51253C9.72047 9.51253 10.7099 8.52308 10.7099 7.30253C10.7099 6.08198 9.72047 5.09253 8.49992 5.09253C7.27937 5.09253 6.28992 6.08198 6.28992 7.30253C6.28992 8.52308 7.27937 9.51253 8.49992 9.51253Z",
                                                                stroke: "#5F6160",
                                                                strokeWidth: "1.5"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M2.56416 6.01334C3.95958 -0.120822 13.0475 -0.113738 14.4358 6.02043C15.2504 9.61876 13.0121 12.6646 11.05 14.5488C9.62625 15.9229 7.37375 15.9229 5.94291 14.5488C3.98791 12.6646 1.74958 9.61168 2.56416 6.01334Z",
                                                                stroke: "#5F6160",
                                                                strokeWidth: "1.5"
                                                            })
                                                        ]
                                                    }),
                                                    "New York, US"
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "event__title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/event-details/${_id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "event__person",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `/event-details/${_id}`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: tutor_img,
                                                            alt: ""
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: tutor_name
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "event__right d-sm-flex align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "event__time",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        width: "15",
                                        height: "15",
                                        viewBox: "0 0 15 15",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M13.75 7.50024C13.75 10.9502 10.95 13.7502 7.5 13.7502C4.05 13.7502 1.25 10.9502 1.25 7.50024C1.25 4.05024 4.05 1.25024 7.5 1.25024C10.95 1.25024 13.75 4.05024 13.75 7.50024Z",
                                                stroke: "#258E46",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M9.8188 9.48735L7.8813 8.3311C7.5438 8.1311 7.2688 7.64985 7.2688 7.2561V4.6936",
                                                stroke: "#258E46",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        ]
                                    }),
                                    time
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "event__more ml-30",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/event-details/${_id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "tp-btn-5 tp-btn-7",
                                    children: "View Events "
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const events_EventSingle = (EventSingle);

;// CONCATENATED MODULE: ./components/events/Events.js





const Events = ()=>{
    // allEventsItems
    const allEventsItems = (0,external_react_redux_.useSelector)((state)=>state.events.allEvents
    );
    // status
    const status = (0,external_react_redux_.useSelector)((state)=>state.events.status
    );
    // loader
    (0,external_react_.useEffect)(()=>{
        if (status === 'pending') {
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "loading",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "loading-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "loading-center-absolute",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                id: "loader",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    id: "corners",
                                    d: "m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/img/favicon.png",
                                alt: ""
                            })
                        ]
                    })
                })
            }));
        }
    }, [
        status
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "event__area pt-115",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section__title-wrapper-2 text-center mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "section__title-pre-2",
                                        children: "Featured Courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "section__title-2",
                                        children: "Join our upcoming event"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xxl-12",
                            children: allEventsItems.map((event)=>{
                                /*#__PURE__*/ return jsx_runtime_.jsx(events_EventSingle, {
                                    event: event
                                }, event === null || event === void 0 ? void 0 : event._id);
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const events_Events = (Events);


/***/ })

};
;