webpackHotUpdate("static/development/pages/message.js",{

/***/ "./pages/message.js":
/*!**************************!*\
  !*** ./pages/message.js ***!
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
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/pages/message.js";










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
      blogDtail: "",
      detailData: {},
      commentsList: [],
      commentTotal: 0,
      saytext: "",
      submitDisb: false,
      submitTxt: "提交"
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "getComments",
    value: function () {
      var _getComments = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _apis_blog__WEBPACK_IMPORTED_MODULE_17__["GetBlogComments"](0); // let commentRes = await axios.get(`${apiHost}/v1/blog/messageboard/list`,{
                //   responseType: 'blob'
                // })
                // let commentData = await readStream(commentRes.data);
                // let commentMessage = protobuf.blogComments.deserializeBinary(commentData);
                // commentMessage = commentMessage.toObject();
                // console.log(commentMessage)
                // this.setState({commentsList:commentMessage.listList,commentTotal:commentMessage.total})

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getComments() {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getComments();

              case 2:
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
    key: "subMitComment",
    value: function () {
      var _subMitComment = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this$state, saytext, submitDisb, submitTxt, message, bytes, res;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$state = this.state, saytext = _this$state.saytext, submitDisb = _this$state.submitDisb, submitTxt = _this$state.submitTxt;
                this.setState({
                  submitDisb: true,
                  submitTxt: "提交中"
                });
                message = new _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComment();
                message.setContent(saytext);
                message.setBlogId(0);
                bytes = message.serializeBinary();
                _context3.prev = 6;
                _context3.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/submit"), bytes, {
                  headers: {
                    'Content-Type': 'application/octet-stream'
                  }
                });

              case 9:
                res = _context3.sent;
                _context3.next = 12;
                return this.getComments();

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](6);

                if (_context3.t0 == "Error: Request failed with status code 400") {
                  alert("评论内容不能为空");
                } else if (_context3.t0 == "Error: Request failed with status code 500") {
                  alert("内部出现错误");
                } else if (_context3.t0 == "Error: Request failed with status code 403") {
                  alert("今天您对改博客的评论已达到上限");
                }

              case 17:
                this.setState({
                  submitDisb: false,
                  submitTxt: "提交",
                  saytext: ""
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 14]]);
      }));

      function subMitComment() {
        return _subMitComment.apply(this, arguments);
      }

      return subMitComment;
    }()
  }, {
    key: "makeGood",
    value: function () {
      var _makeGood = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var detailData, id, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detailData = this.state.detailData;
                id = this.props.query.id;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/good/make?blog_id=").concat(id));

              case 4:
                res = _context4.sent;
                detailData.goodNum++;
                this.setState({
                  detailData: detailData
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function makeGood() {
        return _makeGood.apply(this, arguments);
      }

      return makeGood;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          blogDtail = _this$state2.blogDtail,
          detailData = _this$state2.detailData,
          commentsList = _this$state2.commentsList,
          submitDisb = _this$state2.submitDisb,
          saytext = _this$state2.saytext,
          commentTotal = _this$state2.commentTotal,
          submitTxt = _this$state2.submitTxt;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1535078976" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1535078976" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-1535078976" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          style: {
            background: "url(".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"][item.id % _utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"].length], ") no-repeat top 14px left 10px")
          },
          className: "jsx-1535078976",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-1535078976",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1535078976" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-1535078976",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1535078976" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-1535078976" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u5171\u6709", commentTotal, "\u6761\u7559\u8A00")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        value: saytext,
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        onClick: this.subMitComment.bind(this),
        disabled: submitDisb,
        value: submitTxt,
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-1535078976",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1535078976",
        __self: this
      }, ".nextinfo.jsx-1535078976 a.jsx-1535078976{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-1535078976 a.jsx-1535078976:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-1535078976{margin:10px 10px 10px 0;}#plpost.jsx-1535078976 input[type=\"submit\"].jsx-1535078976{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-1535078976{width:618px;outline:none;resize:none;}.saying.jsx-1535078976 span.jsx-1535078976{float:right;}.saying.jsx-1535078976{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-1535078976 h2.jsx-1535078976{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-1535078976{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-1535078976 span.jsx-1535078976{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-1535078976{color:#000;}p.fbinfo.jsx-1535078976{margin:10px 0;word-wrap:break-word;}.fb.jsx-1535078976 ul.jsx-1535078976{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}.news_pl.jsx-1535078976{width:100%;overflow:hidden;margin:0px 0 20px 0;}.nextinfo.jsx-1535078976{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-1535078976>p.jsx-1535078976{padding:4px 10px;border-radius:5px;}.diggit.jsx-1535078976{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-1535078976{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-1535078976{width:100%;overflow:hidden;}.news_title.jsx-1535078976{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-1535078976 li.jsx-1535078976{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR3NCLEFBR2tDLEFBSUssQUFJQSxBQUdaLEFBYUEsQUFLRSxBQUdDLEFBS1ksQUFPakIsQUFRQSxBQVFELEFBR0csQUFJRyxBQU1OLEFBS00sQUFNQSxBQUlMLEFBYU0sQUFRTCxBQUlNLEFBT0osV0EzRGhCLEFBYWlCLEFBb0NFLEFBV0ksQ0FoR1AsQUFLakIsQUFlYSxBQVFBLEFBb0NDLEVBN0VPLEFBb0RFLEFBc0NRLENBWU4sRUFqRlQsQUFtQ2MsQUFXakIsQUFNTyxNQXZDSCxBQVFBLENBN0NqQixBQWlGcUIsQ0FoRUwsRUFpRE0sQUFvQ3BCLENBL0JnQixDQTFDQyxBQW9GRyxFQXhGRixFQXJCUCxDQXNHUSxDQWxEcEIsQUFxQkEsRUEzREQsQ0FvQmEsQUFRQSxDQWdETSxJQVpOLENBN0VGLEFBbUVLLENBWmtCLEFBc0RoQyxDQXBGZSxDQXFDaEIsRUF6Q0EsQUFhaUIsQUFRQSxBQTRERCxDQW5ISixFQXVHb0IsQ0F6RmQsQ0E2RXlCLElBVjNDLEVBN0VXLEFBZ0hFLENBbkhkLEFBc0NvQixJQVNDLEFBUUEsSUE2RG5CLENBdEdlLENBVmpCLE1BZ0U0QixFQTdCZixBQWdFVSxLQXZEdEIsQUFRQSxDQXpDbUIsS0F5Qm5CLE1BbURtQixBQWFxQixPQXhGM0IsQUFxRGIsV0F1QmtCLENBM0VFLGdCQTRFRCxBQVlsQixHQXZGZ0IsZUE0RUQsQ0EzRUMsY0E0RUgsRUEzRWYsV0E0RWdCLGNBQ2YiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL215L2NsaWVudC1wYy9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0LGF2YXRhcnN9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2Jsb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0R0YWlsOlwiXCIsXG4gICAgICBkZXRhaWxEYXRhOnt9LFxuICAgICAgY29tbWVudHNMaXN0OltdLFxuICAgICAgY29tbWVudFRvdGFsOjAsXG4gICAgICBzYXl0ZXh0OlwiXCIsXG4gICAgICBzdWJtaXREaXNiOmZhbHNlLFxuICAgICAgc3VibWl0VHh0Olwi5o+Q5LqkXCJcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKCl7XG4gICAgYXBpLkdldEJsb2dDb21tZW50cygwKVxuICAgIC8vIGxldCBjb21tZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvbWVzc2FnZWJvYXJkL2xpc3RgLHtcbiAgICAvLyAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgLy8gfSlcbiAgICAvLyBsZXQgY29tbWVudERhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGNvbW1lbnRSZXMuZGF0YSk7XG4gICAgLy8gbGV0IGNvbW1lbnRNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0NvbW1lbnRzLmRlc2VyaWFsaXplQmluYXJ5KGNvbW1lbnREYXRhKTtcbiAgICAvLyBjb21tZW50TWVzc2FnZSA9IGNvbW1lbnRNZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgLy8gY29uc29sZS5sb2coY29tbWVudE1lc3NhZ2UpXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmxpc3RMaXN0LGNvbW1lbnRUb3RhbDpjb21tZW50TWVzc2FnZS50b3RhbH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoKXtcbiAgICBjb25zdCB7c2F5dGV4dCxzdWJtaXREaXNiLHN1Ym1pdFR4dH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdERpc2I6dHJ1ZSxzdWJtaXRUeHQ6XCLmj5DkuqTkuK1cIn0pXG4gICAgbGV0IG1lc3NhZ2UgPSBuZXcgcHJvdG9idWYuYmxvZ0NvbW1lbnQoKTtcbiAgICAgICAgbWVzc2FnZS5zZXRDb250ZW50KHNheXRleHQpO1xuICAgICAgICBtZXNzYWdlLnNldEJsb2dJZCgwKTtcbiAgICBsZXQgYnl0ZXMgPSBtZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeSgpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlIb3N0fS92MS9ibG9nL21lc3NhZ2Vib2FyZC9zdWJtaXRgLGJ5dGVzLHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9fSlcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYoZXJyb3IgPT0gXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDBcIil7XG4gICAgICAgIGFsZXJ0KFwi6K+E6K665YaF5a655LiN6IO95Li656m6XCIpXG4gICAgICB9ZWxzZSBpZihlcnJvciA9PSBcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDUwMFwiKXtcbiAgICAgICAgYWxlcnQoXCLlhoXpg6jlh7rnjrDplJnor69cIilcbiAgICAgIH1lbHNlIGlmKGVycm9yID09IFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAzXCIpe1xuICAgICAgICBhbGVydChcIuS7iuWkqeaCqOWvueaUueWNmuWuoueahOivhOiuuuW3sui+vuWIsOS4iumZkFwiKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXREaXNiOmZhbHNlLHN1Ym1pdFR4dDpcIuaPkOS6pFwiLHNheXRleHQ6XCJcIn0pXG4gIH1cblxuICBhc3luYyBtYWtlR29vZCgpe1xuICAgIGxldCB7ZGV0YWlsRGF0YX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpSG9zdH0vdjEvYmxvZy9nb29kL21ha2U/YmxvZ19pZD0ke2lkfWApXG4gICAgZGV0YWlsRGF0YS5nb29kTnVtKytcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxEYXRhfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvZ0R0YWlsLGRldGFpbERhdGEsY29tbWVudHNMaXN0LHN1Ym1pdERpc2Isc2F5dGV4dCxjb21tZW50VG90YWwsc3VibWl0VHh0fSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiNmZmZcIixwYWRkaW5nOiBcIjAgMzBweFwifX0+IFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NsZWFyOidib3RoJ319PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYmtvXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoJHthdmF0YXJzW2l0ZW0uaWQlYXZhdGFycy5sZW5ndGhdfSkgbm8tcmVwZWF0IHRvcCAxNHB4IGxlZnQgMTBweGB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYnRpbWVcIj48c3Bhbj57bW9tZW50KGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj57aXRlbS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNheWluZ1wiIHN0eWxlPXtjb21tZW50c0xpc3QubGVuZ3RoID09IDAgPyB7bWFyZ2luVG9wOiA4fTp7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLGNvbG9yOiBcIiNkZTE1MTNcIn19PuWFseaciXtjb21tZW50VG90YWx95p2h55WZ6KiAPC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICDmnaXor7TkuKTlj6XlkKcuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInNheXRleHRcIiB2YWx1ZT17c2F5dGV4dH0gb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NheXRleHQ6ZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgICB9fSByb3dzPVwiNlwiIGlkPVwic2F5dGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnN1Yk1pdENvbW1lbnQuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3N1Ym1pdERpc2J9IHZhbHVlPXtzdWJtaXRUeHR9IHN0eWxlPXt7b3V0bGluZTogXCJub25lXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV4dGluZm8gYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV4dGluZm8gYTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnl6bSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BscG9zdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzYXl0ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYxOHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXlpbmcgc3BhbiB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgLnNheWluZ3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNhOWE2YTY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgIH0gXG4gICAgICAgICAgIC5uZXdzX3BsIGgye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwMCAycHggc29saWQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWV7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZSBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjdweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJ0aW1le1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYmluZm97XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmIgdWx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjZWNlY2VjIDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDdweCA0N3B4O1xuICAgICAgICAgICB9ICBcbiAgICAgICAgICAgLm5ld3NfcGx7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDBweCAwIDIwcHggMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm97XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mbyA+IHB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZGlnZ2l0e1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0UyNTIzQTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5ld3NfYWJvdXQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgMCAwICNGNkY2RjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8gbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PiAgICAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/message.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context5.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=message.js.4e07805264323ee60553.hot-update.js.map