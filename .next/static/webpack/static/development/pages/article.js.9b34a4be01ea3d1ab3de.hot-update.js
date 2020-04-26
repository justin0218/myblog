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
      }, ".blogname.jsx-3565727716:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}.coverimg.jsx-3565727716{float:right;clear:right;width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}.coverimg.jsx-3565727716:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform:scale(1.2);}.right_item.jsx-3565727716 p.jsx-3565727716{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-3565727716 h3.jsx-3565727716{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-3565727716 i.jsx-3565727716{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-3565727716{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBR3VDLEFBS2QsQUFTUyxBQUlILEFBU0gsQUFPSCxBQVFxQixZQXBDckIsQUE2QkUsR0FQRyxHQVRBLE1BWk4sRUE2Qk0sTUFQWSxDQWNoQixFQW5DZSxBQVlaLFFBaUJBLEdBT0EsS0F2Qk8sUUFpQlgsQ0FyQ0csQ0E2QkQsQ0FlQSxDQXBDVyxRQThCUixHQWpCVyxDQXBCakIsQUFha0IsQUFnQnJCLENBZVcsUUFkckIsRUE3QkEsRUFPc0IsQUE4QnRCLE9BT0EsT0F4QnNCLEVBUHRCLGtCQVF1QixjQWJOLE9BY2pCLFFBYkEiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL215L2NsaWVudC1wYy9wYWdlcy9hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2Jsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dMaXN0OltdLFxuICAgICAgbGVmdEhlaWdodDowXG4gIH1cblxuICBhc3luYyBsb2FkTGlzdCh0cCxuYW1lKXtcbiAgICBkYXRhID0gYXdhaXQgYXBpLkdldEJsb2dMaXN0KHRwLG5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7YmxvZ0xpc3Q6ZGF0YS5saXN0TGlzdH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IHt0cD0tMSxuYW1lPVwiXCJ9ID0gdGhpcy5wcm9wcy5xdWVyeTtcbiAgICBhd2FpdCB0aGlzLmxvYWRMaXN0KHRwLG5hbWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7YmxvZ0xpc3QsbGVmdEhlaWdodH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7XG4gICAgICAgICAgYmxvZ0xpc3QubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2l0ZW1cIiBrZXk9e2t9PlxuICAgICAgICAgICAgICB7aXRlbS5jb3ZlciAmJiA8aT48aW1nIGNsYXNzTmFtZT1cImNvdmVyaW1nXCIgc3JjPXtpdGVtLmNvdmVyfSAvPjwvaT59XG4gICAgICAgICAgICAgIDxoMz57aXRlbS5yZWNvbW1lbmRlZCA9PSAxICYmIFwiWyDpobYgXVwifSA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzIyMlwifX0gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiYmxvZ25hbWVcIj57aXRlbS5uYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICA8cD57aXRlbS5wcmVmYWNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ibG9nbmFtZTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb3ZlcmltZ3tcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNsZWFyOiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvdmVyaW1nOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogI0ZGRiAxcHggMXB4IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGU0OTQ5O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGl7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICM3OTdiN2M7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgIFxuICAgICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/article.js */"));
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
//# sourceMappingURL=article.js.9b34a4be01ea3d1ab3de.hot-update.js.map