webpackHotUpdate("static/development/pages/article.js",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/pages/article.js";





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      blogList: [],
      leftHeight: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "loadList",
    value: function () {
      var _loadList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tp, name) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_12__["GetBlogList"](tp, name);

              case 2:
                data = _context.sent;
                this.setState({
                  blogList: data.listList
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadList(_x, _x2) {
        return _loadList.apply(this, arguments);
      }

      return loadList;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this$props$query, _this$props$query$tp, tp, _this$props$query$nam, name;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props$query = this.props.query, _this$props$query$tp = _this$props$query.tp, tp = _this$props$query$tp === void 0 ? -1 : _this$props$query$tp, _this$props$query$nam = _this$props$query.name, name = _this$props$query$nam === void 0 ? "" : _this$props$query$nam;
                _context2.next = 3;
                return this.loadList(tp, name);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blogList = _this$state.blogList,
          leftHeight = _this$state.leftHeight;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, blogList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-3565727716" + " " + "right_item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, item.cover && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "jsx-3565727716",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: item.cover,
          className: "jsx-3565727716" + " " + "coverimg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          className: "jsx-3565727716",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, item.recommended == 1 && "[ 顶 ]", " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#222"
          },
          onClick: function onClick() {
            location.href = "/detail?id=".concat(item.id);
          },
          className: "jsx-3565727716" + " " + "blogname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, item.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3565727716",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, item.preface));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3565727716",
        __self: this
      }, ".blogname.jsx-3565727716:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}.coverimg.jsx-3565727716{float:right;clear:right;width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}.coverimg.jsx-3565727716:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform:scale(1.2);}.right_item.jsx-3565727716 p.jsx-3565727716{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-3565727716 h3.jsx-3565727716{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-3565727716 i.jsx-3565727716{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-3565727716{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBR3VDLEFBS2QsQUFTUyxBQUlILEFBU0gsQUFPSCxBQVFxQixZQXBDckIsQUE2QkUsR0FQRyxHQVRBLE1BWk4sRUE2Qk0sTUFQWSxDQWNoQixFQW5DZSxBQVlaLFFBaUJBLEdBT0EsS0F2Qk8sUUFpQlgsQ0FyQ0csQ0E2QkQsQ0FlQSxDQXBDVyxRQThCUixHQWpCVyxDQXBCakIsQUFha0IsQUFnQnJCLENBZVcsUUFkckIsRUE3QkEsRUFPc0IsQUE4QnRCLE9BT0EsT0F4QnNCLEVBUHRCLGtCQVF1QixjQWJOLE9BY2pCLFFBYkEiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL215L2NsaWVudC1wYy9wYWdlcy9hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2Jsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dMaXN0OltdLFxuICAgICAgbGVmdEhlaWdodDowXG4gIH1cblxuICBhc3luYyBsb2FkTGlzdCh0cCxuYW1lKXtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGFwaS5HZXRCbG9nTGlzdCh0cCxuYW1lKVxuICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dMaXN0OmRhdGEubGlzdExpc3R9KVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCB7dHA9LTEsbmFtZT1cIlwifSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgYXdhaXQgdGhpcy5sb2FkTGlzdCh0cCxuYW1lKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2Jsb2dMaXN0LGxlZnRIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAge1xuICAgICAgICAgIGJsb2dMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9pdGVtXCIga2V5PXtrfT5cbiAgICAgICAgICAgICAge2l0ZW0uY292ZXIgJiYgPGk+PGltZyBjbGFzc05hbWU9XCJjb3ZlcmltZ1wiIHNyYz17aXRlbS5jb3Zlcn0gLz48L2k+fVxuICAgICAgICAgICAgICA8aDM+e2l0ZW0ucmVjb21tZW5kZWQgPT0gMSAmJiBcIlsg6aG2IF1cIn0gPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMyMjJcIn19IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGV0YWlsP2lkPSR7aXRlbS5pZH1gXG4gICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImJsb2duYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucHJlZmFjZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmxvZ25hbWU6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY292ZXJpbWd7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjbGVhcjogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb3ZlcmltZzpob3ZlcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBoM3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICNGRkYgMXB4IDFweCAxcHg7XG4gICAgICAgICAgICBjb2xvcjogI2RlNDk0OTtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBpe1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3YjdjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PiAgICBcbiAgICAgICAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/article.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context3.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=article.js.2ff58879602e02b27080.hot-update.js.map