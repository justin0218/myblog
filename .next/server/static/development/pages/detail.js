module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/blog.js":
/*!**********************!*\
  !*** ./apis/blog.js ***!
  \**********************/
/*! exports provided: GetBlogList, GetBlogDetail, GetBlogTypes, GetBlogRanking, GetBlogRecommend, GetBlogComments, SubMitComment, ReadNetFile, MakeGood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogList", function() { return GetBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogDetail", function() { return GetBlogDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogTypes", function() { return GetBlogTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogRanking", function() { return GetBlogRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogRecommend", function() { return GetBlogRecommend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogComments", function() { return GetBlogComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMitComment", function() { return SubMitComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadNetFile", function() { return ReadNetFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeGood", function() { return MakeGood; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proto/resp_pb */ "./proto/resp_pb.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_proto_resp_pb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../proto/blogComment_pb */ "./proto/blogComment_pb.js");
/* harmony import */ var _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proto/errors_pb */ "./proto/errors_pb.js");
/* harmony import */ var _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_proto_errors_pb__WEBPACK_IMPORTED_MODULE_7__);








var GetBlogList =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tp, name) {
    var res, data, message;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/list?tp=").concat(tp, "&name=").concat(name), {
              responseType: 'blob'
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 5:
            data = _context.sent;
            message = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(data);
            data = message.toObject();
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetBlogList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var GetBlogDetail =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var meDetail, medata, meMessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/detail?id=").concat(id), {
              responseType: 'blob'
            });

          case 2:
            meDetail = _context2.sent;
            _context2.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(meDetail.data);

          case 5:
            medata = _context2.sent;
            meMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_detail.deserializeBinary(medata);
            return _context2.abrupt("return", meMessage.toObject());

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function GetBlogDetail(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var GetBlogTypes =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var res, data, message;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/types"), {
              responseType: 'blob'
            });

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 5:
            data = _context3.sent;
            message = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_types.deserializeBinary(data);
            return _context3.abrupt("return", message.toObject());

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function GetBlogTypes() {
    return _ref3.apply(this, arguments);
  };
}();
var GetBlogRanking =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var limit,
        rankingRes,
        rankingData,
        rankingMessage,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            limit = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 5;
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/ranking?limit=").concat(limit), {
              responseType: 'blob'
            });

          case 3:
            rankingRes = _context4.sent;
            _context4.next = 6;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(rankingRes.data);

          case 6:
            rankingData = _context4.sent;
            rankingMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(rankingData);
            return _context4.abrupt("return", rankingMessage.toObject());

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function GetBlogRanking() {
    return _ref4.apply(this, arguments);
  };
}();
var GetBlogRecommend =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var recommendRes, recommendData, recommendMessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/recommend"), {
              responseType: 'blob'
            });

          case 2:
            recommendRes = _context5.sent;
            _context5.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(recommendRes.data);

          case 5:
            recommendData = _context5.sent;
            recommendMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(recommendData);
            return _context5.abrupt("return", recommendMessage.toObject());

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function GetBlogRecommend() {
    return _ref5.apply(this, arguments);
  };
}();
var GetBlogComments =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var id,
        commentRes,
        commentData,
        commentMessage,
        _args6 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : 0;
            _context6.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/comment/list?blog_id=").concat(id), {
              responseType: 'blob'
            });

          case 3:
            commentRes = _context6.sent;
            _context6.next = 6;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(commentRes.data);

          case 6:
            commentData = _context6.sent;
            commentMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_comments.deserializeBinary(commentData);
            return _context6.abrupt("return", commentMessage.toObject());

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function GetBlogComments() {
    return _ref6.apply(this, arguments);
  };
}();
var SubMitComment =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(saytext, blogId) {
    var message, bytes, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            message = new _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6___default.a.blog_comment();
            message.setContent(saytext);
            message.setBlogId(blogId);
            bytes = message.serializeBinary();
            _context7.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/comment/submit"), bytes, {
              responseType: 'blob',
              headers: {
                'Content-Type': 'application/octet-stream'
              }
            });

          case 6:
            res = _context7.sent;
            _context7.next = 9;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 9:
            data = _context7.sent;
            data = _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7___default.a.resp.deserializeBinary(data);
            return _context7.abrupt("return", data.toObject());

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function SubMitComment(_x4, _x5) {
    return _ref7.apply(this, arguments);
  };
}();
var ReadNetFile =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(url) {
    var hres, hdata, hmessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/public/netfile/read?key=").concat(url), {
              responseType: 'blob'
            });

          case 2:
            hres = _context8.sent;
            _context8.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(hres.data);

          case 5:
            hdata = _context8.sent;
            hmessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.file_content.deserializeBinary(hdata);
            return _context8.abrupt("return", hmessage.toObject());

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function ReadNetFile(_x6) {
    return _ref8.apply(this, arguments);
  };
}();
var MakeGood =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(blogId) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/good/make?blog_id=").concat(blogId));

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function MakeGood(_x7) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./common/loading.js":
/*!***************************!*\
  !*** ./common/loading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/justin/Desktop/my/client-pc/common/loading.js";


var Loading = function Loading(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-gear",
    style: {
      width: "100%",
      "height": "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: 12,
      textAlign: "center",
      color: "#ff7f21"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u6781\u7B80\u4E3B\u4E49"));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/left */ "./components/left.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/loading */ "./common/loading.js");
var _jsxFileName = "/Users/justin/Desktop/my/client-pc/components/layout.js";








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'simple' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover",
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/editormd.min.css",
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "/static/js/ispc.js",
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: 't',
    className: "jsx-857662289" + " " + "shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    style: {
      width: 1000,
      margin: "0 auto"
    },
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_left__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "rbox",
    className: "jsx-857662289" + " " + "right_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      clear: "both"
    },
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u5907\u6848\u53F7\uFF1A\u4EACICP\u590716020525\u53F7")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-857662289" + " " + "cd-top cd-is-visible cd-fade-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Top")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "loading",
    className: "jsx-857662289" + " " + "lds-css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "100%",
      "height": "100%"
    },
    className: "jsx-857662289" + " " + "lds-gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: 12
    },
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontSize: 12,
      textAlign: "center",
      color: "#ff7f21"
    },
    className: "jsx-857662289",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Simple")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2046458229",
    __self: this
  }, ".cd-top.cd-is-visible.jsx-857662289{visibility:visible;opacity:1;}.cd-top.jsx-857662289{display:inline-block;height:40px;width:40px;position:fixed;bottom:40px;right:10px;box-shadow:0 0 10px rgba(0,0,0,0.05);overflow:hidden;text-indent:100%;white-space:nowrap;background:rgba(0,0,0,0.8) url(/static/images/top.png) no-repeat center;visibility:hidden;opacity:0;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}footer.jsx-857662289{width:100%;color:#a5a4a4;text-align:center;padding-bottom:20px;clear:both;text-shadow:#fff 1px 0 2px,#fff 0 1px 2px,#fff -1px 0 2px,#fff 0 -1px 2px;}#starlist.jsx-857662289 li.jsx-857662289{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-857662289 li.jsx-857662289 a.jsx-857662289{-webkit-text-decoration:none;text-decoration:none;color:#555;}.right_box.jsx-857662289{width:680px;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RnQixBQUc4QixBQUlFLEFBa0JaLEFBUUUsQUFNUSxBQUlWLFdBakJHLEFBUUUsQ0FVTCxPQXhDQyxFQUlFLEdBcUNoQixDQWxCb0IsQUFRRyxJQTlCdkIsSUFJZSxVQW1CTyxDQWxCSCxBQTBCQSxNQUlOLFNBN0JHLEFBMEJoQixFQUlBLEVBWmEsUUFqQkUsR0FrQmdFLFFBakJuQyxxQ0FDeEIsZ0JBQ0MsYUFnQnJCLElBZnVCLG1CQUN3RCx3RUFDekQsa0JBQ1IsVUFDa0IsNEJBQ0gseUJBQ0wsZ0RBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtCdXR0b24sSW5wdXR9IGZyb20gJ2FudGQnXG5pbXBvcnQgTGVmdCBmcm9tICcuLi9jb21wb25lbnRzL2xlZnQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tbW9uL2xvYWRpbmcnXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnc2ltcGxlJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aSwgdmlld3BvcnQtZml0PWNvdmVyXCIgLz4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvZWRpdG9ybWQubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0Lmpzb25cIj48L2xpbms+XG4gICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvanMvaXNwYy5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8TmF2IC8+XG4gICAgPGRpdiBpZD17J3QnfSBjbGFzc05hbWU9e2BzaGFkb3dgfT5cbiAgICAgIDxhcnRpY2xlIHN0eWxlPXt7d2lkdGg6MTAwMCxtYXJnaW46XCIwIGF1dG9cIn19PlxuICAgICAgICAgIDxMZWZ0IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9ib3hcIiBpZD1cInJib3hcIj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjpcImJvdGhcIn19PjwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHA+5aSH5qGI5Y+377ya5LqsSUNQ5aSHMTYwMjA1MjXlj7c8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2QtdG9wIGNkLWlzLXZpc2libGUgY2QtZmFkZS1vdXRcIj5Ub3A8L2E+XG4gICAgPC9kaXY+XG4gICAgey8qIGxvYWRpbmcgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtY3NzXCIgaWQ9XCJsb2FkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1nZWFyXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixcImhlaWdodFwiOlwiMTAwJVwifX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxMn19PjwvZGl2PlxuICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZToxMix0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNmZjdmMjFcIn19PlNpbXBsZTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2QtdG9wLmNkLWlzLXZpc2libGUge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIC5jZC10b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCkgdXJsKC9zdGF0aWMvaW1hZ2VzL3RvcC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgfVxuICAgICAgZm9vdGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICNhNWE0YTQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAxcHggMCAycHgsICNmZmYgMCAxcHggMnB4LCAjZmZmIC0xcHggMCAycHgsICNmZmYgMCAtMXB4IDJweDtcbiAgICAgIH1cbiAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cbiAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgIHdpZHRoOjY4MHB4O1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICp7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgcGFkZGluZzowOyBcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250OiAxNXB4IFwiTWljcm9zb2Z0IFlhSGVpXCI7XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGxkcy1nZWFyIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsZHMtZ2VhciB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1nZWFyIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1nZWFyIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgIGhlaWdodDogMTkycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmN2YyMTtcbiAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIHdpZHRoOiAxNTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1MnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDYwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNjBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtZ2VhciA+IGRpdiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtZ2VhciB7XG4gICAgICAgICAgd2lkdGg6IDU5cHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDU5cHggIWltcG9ydGFudDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yOS41cHgsIC0yOS41cHgpIHNjYWxlKDAuMjk1KSB0cmFuc2xhdGUoMjkuNXB4LCAyOS41cHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yOS41cHgsIC0yOS41cHgpIHNjYWxlKDAuMjk1KSB0cmFuc2xhdGUoMjkuNXB4LCAyOS41cHgpO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtY3Nze1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA1OXB4O1xuICAgICAgICAgIGhlaWdodDogNTlweDtcbiAgICAgICAgfVxuICAgICAgICAuc2hhZG93e1xuICAgICAgICAgIC8qIHBvc2l0aW9uOidyZWxhdGl2ZSc7ICovXG4gICAgICAgICAgLyogLXdlYmtpdC1maWx0ZXI6Ymx1cigycHgpO1xuICAgICAgICAgIGZpbHRlcjpibHVyKDJweCk7ICovXG4gICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjoxcztcbiAgICAgICAgfVxuICAgICAgICAuc2hhZG93bm9uZXtcbiAgICAgICAgICAvKiBwb3NpdGlvbjoncmVsYXRpdmUnOyAqL1xuICAgICAgICAgIC8qIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcbiAgICAgICAgICBmaWx0ZXI6Ymx1cigwcHgpOyAqL1xuICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246MXM7XG4gICAgICAgIH0gIFxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/components/layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3676369133",
    __self: this
  }, "*{margin:0;padding:0;}body{font:15px \"Microsoft YaHei\";color:#555;background:#efefef;line-height:1.5;margin:0;padding:0;}@-webkit-keyframes lds-gear{0%{-webkit-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes lds-gear{0%{-webkit-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes lds-gear{0%{-webkit-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.lds-gear>div{-webkit-transform-origin:100px 100px;-webkit-transform-origin:100px 100px;-ms-transform-origin:100px 100px;transform-origin:100px 100px;-webkit-animation:lds-gear 1s infinite linear;-webkit-animation:lds-gear 1s infinite linear;animation:lds-gear 1s infinite linear;position:relative;}.lds-gear>div div{position:absolute;width:26px;height:192px;background:#ff7f21;left:100px;top:100px;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.lds-gear>div div:nth-child(1){width:152px;height:152px;border-radius:50%;}.lds-gear>div div:nth-child(3){-webkit-transform:translate(-50%,-50%) rotate(30deg);-webkit-transform:translate(-50%,-50%) rotate(30deg);-ms-transform:translate(-50%,-50%) rotate(30deg);transform:translate(-50%,-50%) rotate(30deg);}.lds-gear>div div:nth-child(4){-webkit-transform:translate(-50%,-50%) rotate(60deg);-webkit-transform:translate(-50%,-50%) rotate(60deg);-ms-transform:translate(-50%,-50%) rotate(60deg);transform:translate(-50%,-50%) rotate(60deg);}.lds-gear>div div:nth-child(5){-webkit-transform:translate(-50%,-50%) rotate(90deg);-webkit-transform:translate(-50%,-50%) rotate(90deg);-ms-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg);}.lds-gear>div div:nth-child(6){-webkit-transform:translate(-50%,-50%) rotate(120deg);-webkit-transform:translate(-50%,-50%) rotate(120deg);-ms-transform:translate(-50%,-50%) rotate(120deg);transform:translate(-50%,-50%) rotate(120deg);}.lds-gear>div div:nth-child(7){-webkit-transform:translate(-50%,-50%) rotate(150deg);-webkit-transform:translate(-50%,-50%) rotate(150deg);-ms-transform:translate(-50%,-50%) rotate(150deg);transform:translate(-50%,-50%) rotate(150deg);}.lds-gear>div div:nth-child(8){width:80px;height:80px;background:#fff;border-radius:50%;}.lds-gear{width:59px !important;height:59px !important;-webkit-transform:translate(-29.5px,-29.5px) scale(0.295) translate(29.5px,29.5px);-webkit-transform:translate(-29.5px,-29.5px) scale(0.295) translate(29.5px,29.5px);-ms-transform:translate(-29.5px,-29.5px) scale(0.295) translate(29.5px,29.5px);transform:translate(-29.5px,-29.5px) scale(0.295) translate(29.5px,29.5px);}.lds-css{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:59px;height:59px;}.shadow{opacity:0;-webkit-transition:1s;transition:1s;-webkit-transition:1s;}.shadownone{opacity:1;-webkit-transition:1s;transition:1s;-webkit-transition:1s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZ3QixBQUdtQixBQUlvQixBQVNLLEFBSUUsQUFJQSxBQU1GLEFBSUUsQUFJQSxBQUtFLEFBT25CLEFBVU4sQUFLMEMsQUFJQSxBQUlBLEFBSUMsQUFJQSxBQUk1QyxBQU1XLEFBTUosQUFhVCxBQVFBLFNBbEhBLENBMkdLLEFBUUEsQ0FqQ0YsQ0F6QkMsTUFWRixBQStDSixDQTdGVCxHQXVGeUIsQ0FMUCxFQXpCRSxBQXFDVixHQTNGRyxDQTRDRSxFQW5DWSxBQWNBLEVBVkUsQUFJQSxBQVVBLEFBSUEsQUE2RHJCLElBeER1QixFQW5DVixBQStFRCxBQWFULEdBaERVLENBVXJCLEVBOEJ1RixDQW1CaEUsQUFRQSxFQWxCVCxLQXBDa0MsQUFJQSxBQUlBLENBSUMsQUFJQSxHQU9qRCxDQS9Fa0IsRUE2RkwsQ0FqREEsT0EyRGIsQUFRQSxHQWpCYyxDQWpERixFQTVDRixRQTZDZ0MsQ0E1Qy9CLEFBNkZYLFVBNUZBLG1CQUtFLEFBY0EsUUFWQSxBQUlBLEFBVUEsQUFJQSxDQWlCZ0MsT0FxQzZDLFFBakQvQiw4Q0FDUixrQkFxQnhDLEFBSUEsQUFJQSxJQUlBLEFBSUEsc0JBekJBLHdDQVhvQixrQkFDcEIsaUZBK0NBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtCdXR0b24sSW5wdXR9IGZyb20gJ2FudGQnXG5pbXBvcnQgTGVmdCBmcm9tICcuLi9jb21wb25lbnRzL2xlZnQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tbW9uL2xvYWRpbmcnXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnc2ltcGxlJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aSwgdmlld3BvcnQtZml0PWNvdmVyXCIgLz4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvZWRpdG9ybWQubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc3RhdGljL21hbmlmZXN0Lmpzb25cIj48L2xpbms+XG4gICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvanMvaXNwYy5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8TmF2IC8+XG4gICAgPGRpdiBpZD17J3QnfSBjbGFzc05hbWU9e2BzaGFkb3dgfT5cbiAgICAgIDxhcnRpY2xlIHN0eWxlPXt7d2lkdGg6MTAwMCxtYXJnaW46XCIwIGF1dG9cIn19PlxuICAgICAgICAgIDxMZWZ0IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodF9ib3hcIiBpZD1cInJib3hcIj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjpcImJvdGhcIn19PjwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHA+5aSH5qGI5Y+377ya5LqsSUNQ5aSHMTYwMjA1MjXlj7c8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2QtdG9wIGNkLWlzLXZpc2libGUgY2QtZmFkZS1vdXRcIj5Ub3A8L2E+XG4gICAgPC9kaXY+XG4gICAgey8qIGxvYWRpbmcgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtY3NzXCIgaWQ9XCJsb2FkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1nZWFyXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixcImhlaWdodFwiOlwiMTAwJVwifX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxMn19PjwvZGl2PlxuICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZToxMix0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNmZjdmMjFcIn19PlNpbXBsZTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2QtdG9wLmNkLWlzLXZpc2libGUge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIC5jZC10b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCkgdXJsKC9zdGF0aWMvaW1hZ2VzL3RvcC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgfVxuICAgICAgZm9vdGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICNhNWE0YTQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAxcHggMCAycHgsICNmZmYgMCAxcHggMnB4LCAjZmZmIC0xcHggMCAycHgsICNmZmYgMCAtMXB4IDJweDtcbiAgICAgIH1cbiAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cbiAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgIHdpZHRoOjY4MHB4O1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICp7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgcGFkZGluZzowOyBcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250OiAxNXB4IFwiTWljcm9zb2Z0IFlhSGVpXCI7XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGxkcy1nZWFyIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsZHMtZ2VhciB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1nZWFyIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1nZWFyIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgIGhlaWdodDogMTkycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmN2YyMTtcbiAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIHdpZHRoOiAxNTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1MnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmxkcy1nZWFyID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDYwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNjBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtZ2VhciA+IGRpdiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAubGRzLWdlYXIgPiBkaXYgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtZ2VhciB7XG4gICAgICAgICAgd2lkdGg6IDU5cHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDU5cHggIWltcG9ydGFudDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yOS41cHgsIC0yOS41cHgpIHNjYWxlKDAuMjk1KSB0cmFuc2xhdGUoMjkuNXB4LCAyOS41cHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yOS41cHgsIC0yOS41cHgpIHNjYWxlKDAuMjk1KSB0cmFuc2xhdGUoMjkuNXB4LCAyOS41cHgpO1xuICAgICAgICB9XG4gICAgICAgIC5sZHMtY3Nze1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA1OXB4O1xuICAgICAgICAgIGhlaWdodDogNTlweDtcbiAgICAgICAgfVxuICAgICAgICAuc2hhZG93e1xuICAgICAgICAgIC8qIHBvc2l0aW9uOidyZWxhdGl2ZSc7ICovXG4gICAgICAgICAgLyogLXdlYmtpdC1maWx0ZXI6Ymx1cigycHgpO1xuICAgICAgICAgIGZpbHRlcjpibHVyKDJweCk7ICovXG4gICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjoxcztcbiAgICAgICAgfVxuICAgICAgICAuc2hhZG93bm9uZXtcbiAgICAgICAgICAvKiBwb3NpdGlvbjoncmVsYXRpdmUnOyAqL1xuICAgICAgICAgIC8qIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcbiAgICAgICAgICBmaWx0ZXI6Ymx1cigwcHgpOyAqL1xuICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246MXM7XG4gICAgICAgIH0gIFxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/components/layout.js */"));
});

/***/ }),

/***/ "./components/left.js":
/*!****************************!*\
  !*** ./components/left.js ***!
  \****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/components/left.js";





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
      path: "",
      orderIndex: [],
      tps: [],
      rankingList: [],
      name: "",
      recommends: [],
      leftStyle: {},
      medata: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "registerKeyUp",
    value: function registerKeyUp() {
      var _this2 = this;

      document.getElementById("keyboard").onkeyup = function (event) {
        var e = event || window.event;

        if (e && e.keyCode == 13) {
          //回车键的键值为13
          location.href = "/article?name=".concat(_this2.state.name);
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var medata, data, rankingData, recommendData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("start"); //关于我的信息

                _context.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_12__["GetBlogDetail"](35);

              case 3:
                medata = _context.sent;
                medata = medata.currentArticle; //所有类型的博客数

                _context.next = 7;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_12__["GetBlogTypes"]();

              case 7:
                data = _context.sent;
                _context.next = 10;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_12__["GetBlogRanking"](5);

              case 10:
                rankingData = _context.sent;
                _context.next = 13;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_12__["GetBlogRecommend"]();

              case 13:
                recommendData = _context.sent;
                this.setState({
                  tps: data.blogTypeListList,
                  rankingList: rankingData.blogArticleListList,
                  recommends: recommendData.blogArticleListList
                });

                if (location.pathname == "/article" || location.pathname == "/detail") {
                  this.setState({
                    orderIndex: [2, 3, 7, 4, 8, 6],
                    medata: medata
                  }, this.registerKeyUp);
                } else {
                  this.setState({
                    orderIndex: [0, 2, 3, 4, 5, 6],
                    medata: medata
                  }, this.registerKeyUp);
                }

                _utils_emiter__WEBPACK_IMPORTED_MODULE_11__["default"].on("left-fix", function () {
                  var rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  var leftHeight = document.getElementById("left_box").clientHeight;

                  if (leftHeight < rightHeight) {
                    // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    _this3.setState({
                      leftStyle: {
                        position: "fixed",
                        top: 20
                      }
                    });
                  }
                });
                _utils_emiter__WEBPACK_IMPORTED_MODULE_11__["default"].on("left-static", function (h) {
                  var rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  var leftHeight = document.getElementById("left_box").clientHeight;

                  if (leftHeight < rightHeight) {
                    _this3.setState({
                      leftStyle: {
                        position: "static",
                        marginTop: h
                      }
                    });
                  }
                });
                this.setState({
                  loadings: {
                    "me": false
                  }
                });
                setTimeout(function () {
                  document.getElementById("t").setAttribute("class", "shadownone");
                  document.getElementById("loading").style.display = "none";
                }, 500);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          path = _this$state.path,
          orderIndex = _this$state.orderIndex,
          tps = _this$state.tps,
          name = _this$state.name,
          rankingList = _this$state.rankingList,
          recommends = _this$state.recommends,
          leftStyle = _this$state.leftStyle,
          medata = _this$state.medata;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "left_box",
        style: leftStyle,
        className: "jsx-1005062761" + " " + "left_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, orderIndex.map(function (item) {
        var _React$createElement;

        switch (item) {
          case 0:
            // 关于
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 12
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
              className: "jsx-1005062761" + " " + "about_me_i",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "http://momoman.cn/redources/images/c4dd4d91-8702-4470-9b4b-96368140239c.jpeg",
              style: {
                width: 120
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              style: {
                lineHeight: "22px",
                "fontSize": 14,
                marginTop: -6
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            }, "\u80E1\u661F"), "\uFF0C", medata.preface)));

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, "\u76F8\u518C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
              style: {
                padding: 10,
                overflow: "hidden",
                listStyle: "none",
                margin: 0
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }))));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              style: {
                marginBottom: 20
              },
              className: "jsx-1005062761" + " " + "search",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", (_React$createElement = {
              className: "keyboard",
              id: "keyboard",
              onChange: function onChange(e) {
                _this4.setState({
                  name: e.target.value
                });
              },
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8BCD",
              style: {
                color: "#000"
              },
              type: "text"
            }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "className", "jsx-1005062761" + " " + "input_text"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__source", {
              fileName: _jsxFileName,
              lineNumber: 109
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              onClick: function onClick() {
                location.href = "/article?name=".concat(name);
              },
              className: "jsx-1005062761" + " " + "input_submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            }, "\u641C\u7D22"));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, tps.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  location.href = "/article?tp=".concat(item.id);
                },
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
                },
                __self: this
              }, item.lable, "\uFF08", item.blogNum, "\uFF09");
            })));

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, rankingList.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                onClick: function onClick() {
                  location.href = "/detail?id=".concat(item.id);
                },
                key: k,
                style: {
                  backgroundImage: "url(/static/images/li.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: 9,
                  textIndent: 13
                },
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: 265,
                  display: "block"
                },
                className: "jsx-1005062761",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                },
                __self: this
              }, item.name));
            })));

          case 5:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-1005062761" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }, "\u767E\u5EA6")));

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              },
              __self: this
            }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              style: {
                width: "86%",
                background: "#fff",
                padding: 19
              },
              src: "/static/images/erweima.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            })));

          case 7:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: this
            }, "\u7AD9\u957F\u63A8\u8350"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }, recommends.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  location.href = "/detail?id=".concat(item.id);
                },
                style: {
                  backgroundImage: "url(/static/images/li.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: 9,
                  textIndent: 13
                },
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: 265,
                  display: "block"
                },
                className: "jsx-1005062761",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                },
                __self: this
              }, item.name));
            })));

          case 8:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 174
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175
              },
              __self: this
            }, "\u6807\u7B7E\u4E91"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              href: "/article?name=golang",
              style: {
                background: "#036564"
              },
              className: "jsx-1005062761" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              },
              __self: this
            }, "golang"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              href: "/article?name=docker",
              style: {
                background: "#3299BB"
              },
              className: "jsx-1005062761" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            }, "docker"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                clear: "both"
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1005062761",
        __self: this
      }, ".tag.jsx-1005062761{line-height:24px;height:24px;display:block;background:#999;float:left;padding:3px 11px;margin:10px 10px 0 0;border-radius:8px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;color:#FFF;-webkit-text-decoration:none;text-decoration:none;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761{margin-bottom:10px;margin-left:10px;cursor:pointer;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761:hover{color:#222;}.search.jsx-1005062761{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-1005062761 .input_submit.jsx-1005062761{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:8%;cursor:pointer;}.search.jsx-1005062761 input.input_text.jsx-1005062761{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-1005062761 p.jsx-1005062761{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-1005062761 h3.jsx-1005062761{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-1005062761 i.jsx-1005062761{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-1005062761{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-1005062761{width:300px;float:left;}.left_item.jsx-1005062761{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761 img.jsx-1005062761{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-1005062761 h2.jsx-1005062761{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-1005062761{width:680px;float:right;}.about_me_i.jsx-1005062761{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9sZWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlMb0IsQUFHNEIsQUFnQkUsQUFLVCxBQUdZLEFBTVQsQUFVQSxBQVFPLEFBU0gsQUFPSCxBQVFxQixBQU90QixBQUlzQixBQUt2QixBQVFDLEFBUUEsQUFRQSxBQUlDLFNBckZHLEFBVUksQ0FnREgsQ0FuRXBCLEFBMkVnQixBQVFHLENBeENELEFBZUosQUFpQ0MsQUFJQSxHQTNETSxFQXpEUCxDQWdETyxDQWhDRixHQVFELEFBT0QsQ0FpRGYsQUFpQjhCLEFBb0JqQixDQUpiLEVBeEVnQixBQXdCRyxBQXdCTixBQWdCTSxHQXhHTCxHQXlEaUIsQ0ExQmQsQUF3Q0YsQUFXTSxDQW1DRCxDQXJFRixDQWhDSCxDQXlFRCxDQWpFWSxBQWlCWixLQXhDRSxBQWdFRSxBQXdDRSxHQXpFRSxBQXdDSixFQTlCSSxDQWdERixFQXpFdEIsQUFnQzJCLEFBZ0RFLENBZFQsQUFtQ0EsT0FwSFAsQUFnRUcsRUFSRSxBQWdERSxDQWpDRixFQWhERSxBQVFMLEVBVUksQ0FnREUsQ0FQbkIsQUFtQ0EsRUFwSGlCLENBZ0VFLEVBakNOLENBZ0JpQixDQVNwQixDQWVXLEFBd0JDLENBVXZCLEVBaEVDLEdBbEJGLEFBU3FCLEVBeUJuQixBQWdDQSxFQWdCQSxDQXhHcUIsQ0FnRXJCLE9BT0EsRUF2Q0EsS0Flc0IsTUE5Q0osY0ErQ0ssRUErQ1IsRUE3RlUsWUE4RnpCLEtBL0NBLFFBOUM0Qiw0QkFDTCx1QkFDSCxnREFDVCxXQUNVLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvbXkvY2xpZW50LXBjL2NvbXBvbmVudHMvbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYmxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcGF0aDpcIlwiLFxuICAgIG9yZGVySW5kZXg6W10sXG4gICAgdHBzOltdLFxuICAgIHJhbmtpbmdMaXN0OltdLFxuICAgIG5hbWU6XCJcIixcbiAgICByZWNvbW1lbmRzOltdLFxuICAgIGxlZnRTdHlsZTp7fSxcbiAgICBtZWRhdGE6e31cbiAgfVxuXG4gIHJlZ2lzdGVyS2V5VXAoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleWJvYXJkXCIpLm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgaWYgKGUgJiYgZS5rZXlDb2RlID09IDEzKSB7IC8v5Zue6L2m6ZSu55qE6ZSu5YC85Li6MTNcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT9uYW1lPSR7dGhpcy5zdGF0ZS5uYW1lfWBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpXG4gICAgLy/lhbPkuo7miJHnmoTkv6Hmga9cbiAgICBsZXQgbWVkYXRhID0gYXdhaXQgYXBpLkdldEJsb2dEZXRhaWwoMzUpO1xuICAgIG1lZGF0YSA9IG1lZGF0YS5jdXJyZW50QXJ0aWNsZTtcbiAgICAvL+aJgOacieexu+Wei+eahOWNmuWuouaVsFxuICAgIGxldCBkYXRhID0gYXdhaXQgYXBpLkdldEJsb2dUeXBlcygpO1xuICAgIC8v5o6S6KGM5qac5pWw5o2uICBcbiAgICBsZXQgcmFua2luZ0RhdGEgPSBhd2FpdCBhcGkuR2V0QmxvZ1JhbmtpbmcoNSk7XG4gICAgLy/ojrflj5bmjqjojZDmlbDmja5cbiAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IGFwaS5HZXRCbG9nUmVjb21tZW5kKClcbiAgICB0aGlzLnNldFN0YXRlKHt0cHM6ZGF0YS5ibG9nVHlwZUxpc3RMaXN0LHJhbmtpbmdMaXN0OnJhbmtpbmdEYXRhLmJsb2dBcnRpY2xlTGlzdExpc3QscmVjb21tZW5kczpyZWNvbW1lbmREYXRhLmJsb2dBcnRpY2xlTGlzdExpc3R9KTtcbiAgICBpZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9hcnRpY2xlXCIgfHwgbG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZGV0YWlsXCIpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJJbmRleDpbMiwzLDcsNCw4LDZdLG1lZGF0YX0sdGhpcy5yZWdpc3RlcktleVVwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVySW5kZXg6WzAsMiwzLDQsNSw2XSxtZWRhdGF9LHRoaXMucmVnaXN0ZXJLZXlVcCk7XG4gICAgfVxuICAgIEV2ZW50Lm9uKFwibGVmdC1maXhcIiwoKT0+e1xuICAgICAgbGV0IHJpZ2h0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpZ2h0X2JveFwiKVswXS5jbGllbnRIZWlnaHQ7XG4gICAgICBsZXQgbGVmdEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9ib3hcIikuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYobGVmdEhlaWdodCA8IHJpZ2h0SGVpZ2h0KXtcbiAgICAgICAgLy8gdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0U3R5bGU6e1xuICAgICAgICAgIHBvc2l0aW9uOlwiZml4ZWRcIixcbiAgICAgICAgICB0b3A6MjBcbiAgICAgICAgfX0pXG4gICAgICB9XG4gICAgfSlcbiAgICBFdmVudC5vbihcImxlZnQtc3RhdGljXCIsKGgpPT57XG4gICAgICBsZXQgcmlnaHRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlnaHRfYm94XCIpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgIGxldCBsZWZ0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2JveFwiKS5jbGllbnRIZWlnaHQ7XG4gICAgICBpZihsZWZ0SGVpZ2h0IDwgcmlnaHRIZWlnaHQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0U3R5bGU6e1xuICAgICAgICAgIHBvc2l0aW9uOlwic3RhdGljXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOmhcbiAgICAgICAgfX0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nczp7XCJtZVwiOmZhbHNlfX0pXG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzaGFkb3dub25lXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0sNTAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwYXRoLG9yZGVySW5kZXgsdHBzLG5hbWUscmFua2luZ0xpc3QscmVjb21tZW5kcyxsZWZ0U3R5bGUsbWVkYXRhfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfYm94XCIgaWQ9XCJsZWZ0X2JveFwiIHN0eWxlPXtsZWZ0U3R5bGV9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVySW5kZXgubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBzd2l0Y2goaXRlbSl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgLy8g5YWz5LqOXG4gICAgICAgICAgICAgICAgICByZXR1cm4gIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWFs+S6jjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMn19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFib3V0X21lX2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL21vbW9tYW4uY24vcmVkb3VyY2VzL2ltYWdlcy9jNGRkNGQ5MS04NzAyLTQ0NzAtOWI0Yi05NjM2ODE0MDIzOWMuanBlZ1wiIHN0eWxlPXt7d2lkdGg6MTIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIycHhcIixcImZvbnRTaXplXCI6IDE0LG1hcmdpblRvcDogLTZ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPuiDoeaYnzwvYj7vvIx7bWVkYXRhLnByZWZhY2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPuebuOWGjDwvaDI+XG4gICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3twYWRkaW5nOiAxMCxvdmVyZmxvdzogXCJoaWRkZW5cIixsaXN0U3R5bGU6XCJub25lXCIsbWFyZ2luOjB9fT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cInNlYXJjaFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIiBpZD1cImtleWJvYXJkXCIgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6ZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiaW5wdXRfdGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YWz6ZSu5a2X6K+NXCIgc3R5bGU9e3tjb2xvcjogXCIjMDAwXCJ9fSAgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0X3N1Ym1pdFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT9uYW1lPSR7bmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIH19PuaQnOe0ojwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7liIbnsbs8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdHBzLm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2FydGljbGU/dHA9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+e2l0ZW0ubGFibGV977yIe2l0ZW0uYmxvZ051bX3vvIk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+54K55Ye75o6S6KGMPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5raW5nTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGV0YWlsP2lkPSR7aXRlbS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGtleT17a30gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL3N0YXRpYy9pbWFnZXMvbGkucG5nKVwiLGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsYmFja2dyb3VuZFBvc2l0aW9uWTogOSx0ZXh0SW5kZW50OiAxM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTogXCJub3dyYXBcIixvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDogMjY1LGRpc3BsYXk6IFwiYmxvY2tcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5Y+L5oOF6ZO+5o6lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPueZvuW6pjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lhbPms6jmiJE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCI4NiVcIixiYWNrZ3JvdW5kOiBcIiNmZmZcIixwYWRkaW5nOiAxOX19IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+56uZ6ZW/5o6o6I2QPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRzLm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIga2V5PXtrfSBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuagh+etvuS6kTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9hcnRpY2xlP25hbWU9Z29sYW5nYH0gY2xhc3NOYW1lPVwidGFnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAzNjU2NFwifX0+Z29sYW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvYXJ0aWNsZT9uYW1lPWRvY2tlcmB9IGNsYXNzTmFtZT1cInRhZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMzMjk5QkJcIn19PmRvY2tlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9ICBcbiAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWd7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDExcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0X2l0ZW0gLmNhdGlvbl9pdGVte1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0X2l0ZW0gLmNhdGlvbl9pdGVtOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggLmlucHV0X3N1Ym1pdCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICByaWdodDogOCU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaCBpbnB1dC5pbnB1dF90ZXh0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogI0ZGRiAxcHggMXB4IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGU0OTQ5O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGl7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICM3OTdiN2M7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9ib3h7XG4gICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaSBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIGgye1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfYm94e1xuICAgICAgICAgICAgd2lkdGg6NjgwcHg7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0X21lX2l7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/components/left.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/components/nav.js";



 // import banner from '../images/banner'


var timer = null;

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
      path: "",
      headerTop: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var rightHeight, leftHeight;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.onscroll = function () {
                  rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  leftHeight = document.getElementById("left_box").clientHeight;

                  if (leftHeight == 0 && rightHeight == 0) {
                    return;
                  }

                  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                  if (scrollTop > 62 + 20) {
                    _this2.setState({
                      headerTop: -61
                    });
                  } else {
                    _this2.setState({
                      headerTop: 0
                    });
                  }

                  if (scrollTop > 42 && scrollTop < rightHeight - leftHeight + 45) {
                    _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-fix");
                  } else if (scrollTop < 62 + 20) {
                    _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-static", 0);
                  } else if (scrollTop > rightHeight - leftHeight + 45) {
                    _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-static", rightHeight - leftHeight); // if(location.pathname == "/detail"){
                    //   Event.emit("left-static",rightHeight - leftHeight + 20)
                    // }else{
                    //   Event.emit("left-static",rightHeight - leftHeight)
                    // }
                  }
                }; //document.getElementById("t").setAttribute("class","shadownone")
                //}, 1000);
                // let rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                // if (scrollTop > 62 + 20){
                // }


                this.setState({
                  path: location.pathname
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
          path = _this$state.path,
          headerTop = _this$state.headerTop;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          height: 61,
          transition: "0.3s",
          WebkitTransition: "0.3s",
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "fixed",
          borderBottom: "1px solid #ddd",
          boxShadow: "0 1px 1px rgba(0,0,0,.04)",
          zIndex: 999,
          top: headerTop
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: 1000,
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: 'left'
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        style: {
          float: "right",
          margin: 0
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/message",
        style: path == "/message" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/me",
        style: path == "/me" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u5173\u4E8E"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2773910157",
        __self: this
      }, "#starlist.jsx-2773910157 li.jsx-2773910157{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-2773910157 li.jsx-2773910157 a.jsx-2773910157{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VvQixBQUcwQixBQU1RLFdBTEwsY0FDSyxtQkFDSixNQUlOLFNBSGIsRUFJQSIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvbXkvY2xpZW50LXBjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcbmltcG9ydCB0cHMgZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSAnLi4vaW1hZ2VzL2Jhbm5lcidcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xudmFyIHRpbWVyID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBwYXRoOlwiXCIsXG4gICAgICBoZWFkZXJUb3A6MFxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIGxldCByaWdodEhlaWdodFxuICAgICAgbGV0IGxlZnRIZWlnaHRcbiAgICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICByaWdodEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodF9ib3hcIilbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICBsZWZ0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2JveFwiKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmKGxlZnRIZWlnaHQgPT0gMCAmJiByaWdodEhlaWdodCA9PSAwKXtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPiA2MiArIDIwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDotNjF9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDowfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Nyb2xsVG9wID4gNDIgJiYgc2Nyb2xsVG9wIDwgKHJpZ2h0SGVpZ2h0IC0gbGVmdEhlaWdodCkrNDUpe1xuICAgICAgICAgICAgRXZlbnQuZW1pdChcImxlZnQtZml4XCIpXG4gICAgICAgIH1lbHNlIGlmKHNjcm9sbFRvcCA8IDYyICsgMjApe1xuICAgICAgICAgICAgRXZlbnQuZW1pdChcImxlZnQtc3RhdGljXCIsMClcbiAgICAgICAgfWVsc2UgaWYoc2Nyb2xsVG9wID4gKHJpZ2h0SGVpZ2h0IC0gbGVmdEhlaWdodCkrNDUpe1xuICAgICAgICAgIEV2ZW50LmVtaXQoXCJsZWZ0LXN0YXRpY1wiLHJpZ2h0SGVpZ2h0IC0gbGVmdEhlaWdodClcbiAgICAgICAgICAvLyBpZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kZXRhaWxcIil7XG4gICAgICAgICAgLy8gICBFdmVudC5lbWl0KFwibGVmdC1zdGF0aWNcIixyaWdodEhlaWdodCAtIGxlZnRIZWlnaHQgKyAyMClcbiAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAvLyAgIEV2ZW50LmVtaXQoXCJsZWZ0LXN0YXRpY1wiLHJpZ2h0SGVpZ2h0IC0gbGVmdEhlaWdodClcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzaGFkb3dub25lXCIpXG4gICAgICAvL30sIDEwMDApO1xuXG4gICAgICBcbiAgICAgIC8vIGxldCByaWdodEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodF9ib3hcIilbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgLy8gaWYgKHNjcm9sbFRvcCA+IDYyICsgMjApe1xuICAgICAgICBcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6bG9jYXRpb24ucGF0aG5hbWV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwYXRoLGhlYWRlclRvcH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6NjEsdHJhbnNpdGlvbjpcIjAuM3NcIixXZWJraXRUcmFuc2l0aW9uOlwiMC4zc1wiLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLHBvc2l0aW9uOlwiZml4ZWRcIixib3JkZXJCb3R0b206XCIxcHggc29saWQgI2RkZFwiLGJveFNoYWRvdzpcIjAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNClcIix6SW5kZXg6OTk5LHRvcDpoZWFkZXJUb3B9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MTAwMCxtYXJnaW46XCIwIGF1dG9cIixoZWlnaHQ6XCIxMDAlXCIsbGluZUhlaWdodDpcIjYwcHhcIixmb250U2l6ZToyMn19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OidsZWZ0J319PlNpbXBsZTwvZGl2PiAgICAgICAgXG4gICAgICAgICAgICA8dWwgaWQ9XCJzdGFybGlzdFwiIHN0eWxlPXt7ZmxvYXQ6XCJyaWdodFwiLG1hcmdpbjowfX0+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIHN0eWxlPXtwYXRoID09IFwiL1wiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+6aaW6aG1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi9hcnRpY2xlXCIgfHwgcGF0aCA9PSBcIi9kZXRhaWxcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuaWh+eroDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVzc2FnZVwiIHN0eWxlPXtwYXRoID09IFwiL21lc3NhZ2VcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PueVmeiogDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVcIiBzdHlsZT17cGF0aCA9PSBcIi9tZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5YWz5LqOPC9hPjwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Ojc1fX0+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjc3Rhcmxpc3QgbGkge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/components/nav.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/client-pc/pages/detail.js";











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
        var id, commentMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.query.id;
                _context.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["GetBlogComments"](id);

              case 3:
                commentMessage = _context.sent;
                this.setState({
                  commentsList: commentMessage.blogCommentListList,
                  commentTotal: commentMessage.total
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
        var id, res, data, fileContent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.query.id;
                _context2.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["GetBlogDetail"](id);

              case 3:
                res = _context2.sent;
                data = res.currentArticle;
                _context2.next = 7;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["ReadNetFile"](data.htmlTxtUrl);

              case 7:
                fileContent = _context2.sent;
                _context2.next = 10;
                return this.getComments();

              case 10:
                this.setState({
                  blogDtail: fileContent.txt,
                  detailData: data
                });

              case 11:
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
        var saytext, id, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                saytext = this.state.saytext;
                id = this.props.query.id;
                this.setState({
                  submitDisb: true,
                  submitTxt: "提交中"
                });
                _context3.next = 5;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_18__["SubMitComment"](saytext, id);

              case 5:
                res = _context3.sent;

                if (!(res.code != 0)) {
                  _context3.next = 10;
                  break;
                }

                alert(res.msg);
                _context3.next = 12;
                break;

              case 10:
                _context3.next = 12;
                return this.getComments();

              case 12:
                this.setState({
                  submitDisb: false,
                  submitTxt: "提交",
                  saytext: ""
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
        var detailData, id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detailData = this.state.detailData;
                id = this.props.query.id;
                _apis_blog__WEBPACK_IMPORTED_MODULE_18__["MakeGood"](id);
                detailData.goodNum++;
                this.setState({
                  detailData: detailData
                });

              case 5:
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

      var _this$state = this.state,
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData,
          commentsList = _this$state.commentsList,
          submitDisb = _this$state.submitDisb,
          submitTxt = _this$state.submitTxt,
          saytext = _this$state.saytext,
          commentTotal = _this$state.commentTotal;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-3300475911" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3300475911" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", detailData.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto"
        },
        className: "jsx-3300475911" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-3300475911" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: this.makeGood.bind(this),
        className: "jsx-3300475911" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, detailData.goodNum), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, detailData.prev ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.prev.id),
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, detailData.prev.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868")), detailData.next ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.next.id),
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, detailData.next.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "news_pl",
        className: "jsx-3300475911" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3300475911" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-3300475911" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          style: {
            background: "url(".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"][item.id % _utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"].length], ") no-repeat top 14px left 10px")
          },
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3300475911" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-3300475911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3300475911" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-3300475911" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u5171\u6709", commentTotal, "\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        value: saytext,
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
        className: "jsx-3300475911",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3300475911",
        __self: this
      }, ".nextinfo.jsx-3300475911 a.jsx-3300475911{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-3300475911 a.jsx-3300475911:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-3300475911{margin:10px 10px 10px 0;}#plpost.jsx-3300475911 input[type=\"submit\"].jsx-3300475911{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-3300475911{width:618px;outline:none;resize:none;}.saying.jsx-3300475911 span.jsx-3300475911{float:right;}.saying.jsx-3300475911{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-3300475911 h2.jsx-3300475911{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-3300475911{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-3300475911 span.jsx-3300475911{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-3300475911{color:#000;}p.fbinfo.jsx-3300475911{margin:10px 0;word-wrap:break-word;}.fb.jsx-3300475911 ul.jsx-3300475911{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}.news_pl.jsx-3300475911{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-3300475911{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-3300475911>p.jsx-3300475911{padding:4px 10px;border-radius:5px;}.diggit.jsx-3300475911{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-3300475911{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-3300475911{width:100%;overflow:hidden;}.news_title.jsx-3300475911{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-3300475911 li.jsx-3300475911{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1osQUFhQSxBQUtFLEFBR0MsQUFLWSxBQU9qQixBQVFBLEFBUUQsQUFHRyxBQUlHLEFBTUksQUFLSixBQU1BLEFBSUwsQUFhTSxBQVFMLEFBSU0sQUFPSixXQTNEaEIsQUFpRG1CLEFBV0ksQ0FoR1AsQUFLakIsQUFlYSxBQVFBLEFBb0NDLEVBN0VPLEFBb0RFLEFBc0NRLENBWU4sRUFqRlQsQUFtQ2MsQUFXakIsQUFNTyxJQVhQLEVBNUJJLEFBUUEsQ0E3Q2pCLEFBaUZxQixDQWhFTCxFQXFGZCxDQS9CZ0IsQ0ExQ0MsQUFvRkcsRUF4RkYsQ0F5Q0YsQ0E5REwsQ0FzR1EsQ0FsRHBCLEFBcUJBLEVBM0RELENBb0JhLEFBUUEsQ0FnRE0sSUFaTixDQTdFRixBQW1FSyxDQVprQixBQXNEaEMsQ0FwRmUsRUFxQ2hCLENBekNBLEFBYWlCLEFBUUEsQUE0REQsQ0FuSEosRUF1R29CLENBekZkLENBNkV5QixJQVYzQyxFQTdFVyxBQWdIRSxDQW5IZCxBQXNDb0IsSUFTQyxBQVFBLElBNkRuQixDQXRHZSxDQVZqQixNQWdFNEIsRUE3QmYsQUFnRVUsS0F2RHRCLEFBUUEsQ0F6Q21CLEtBeUJuQixNQW1EbUIsQUFhcUIsT0F4RjNCLEFBcURiLFdBdUJrQixDQTNFRSxnQkE0RUQsQUFZbEIsR0F2RmdCLGVBNEVELENBM0VDLGNBNEVILEVBM0VmLFdBNEVnQixjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9jbGllbnQtcGMvcGFnZXMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0LGF2YXRhcnN9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ibG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dEdGFpbDpcIlwiLFxuICAgICAgZGV0YWlsRGF0YTp7fSxcbiAgICAgIGNvbW1lbnRzTGlzdDpbXSxcbiAgICAgIGNvbW1lbnRUb3RhbDowLFxuICAgICAgc2F5dGV4dDpcIlwiLFxuICAgICAgc3VibWl0RGlzYjpmYWxzZSxcbiAgICAgIHN1Ym1pdFR4dDpcIuaPkOS6pFwiXG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cygpe1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgbGV0IGNvbW1lbnRNZXNzYWdlID0gYXdhaXQgYXBpLkdldEJsb2dDb21tZW50cyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmJsb2dDb21tZW50TGlzdExpc3QsY29tbWVudFRvdGFsOmNvbW1lbnRNZXNzYWdlLnRvdGFsfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5HZXRCbG9nRGV0YWlsKGlkKTtcbiAgICAgIGxldCBkYXRhID0gcmVzLmN1cnJlbnRBcnRpY2xlO1xuICAgICAgbGV0IGZpbGVDb250ZW50ID0gYXdhaXQgYXBpLlJlYWROZXRGaWxlKGRhdGEuaHRtbFR4dFVybClcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dEdGFpbDpmaWxlQ29udGVudC50eHQsZGV0YWlsRGF0YTpkYXRhfSlcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoKXtcbiAgICBjb25zdCB7c2F5dGV4dH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0RGlzYjp0cnVlLHN1Ym1pdFR4dDpcIuaPkOS6pOS4rVwifSlcbiAgICBsZXQgcmVzID0gYXdhaXQgYXBpLlN1Yk1pdENvbW1lbnQoc2F5dGV4dCxpZCk7XG4gICAgaWYgKHJlcy5jb2RlICE9IDApe1xuICAgICAgYWxlcnQocmVzLm1zZyk7XG4gICAgfWVsc2V7XG4gICAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdERpc2I6ZmFsc2Usc3VibWl0VHh0Olwi5o+Q5LqkXCIsc2F5dGV4dDpcIlwifSlcbiAgfVxuXG4gIGFzeW5jIG1ha2VHb29kKCl7XG4gICAgbGV0IHtkZXRhaWxEYXRhfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgYXBpLk1ha2VHb29kKGlkKVxuICAgIGRldGFpbERhdGEuZ29vZE51bSsrXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsRGF0YX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2dEdGFpbCxkZXRhaWxEYXRhLGNvbW1lbnRzTGlzdCxzdWJtaXREaXNiLHN1Ym1pdFR4dCxzYXl0ZXh0LGNvbW1lbnRUb3RhbH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3NfdGl0bGVcIj57ZGV0YWlsRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoZGV0YWlsRGF0YS50eXBlKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lclwiPnttb21lbnQoZGV0YWlsRGF0YS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpZXdcIj57ZGV0YWlsRGF0YS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2RldGFpbERhdGEucHJlZmFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYmxvZ0R0YWlsfX0gY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBlZGl0b3JtZC1wcmV2aWV3LWNvbnRhaW5lclwiIHByZXZpZXdjb250YWluZXI9XCJ0cnVlXCIgc3R5bGU9e3t3aWR0aDpcImF1dG9cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRpZ2dpdFwiIG9uQ2xpY2s9e3RoaXMubWFrZUdvb2QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICA8YT7lvojotZ7lk6bvvIE8L2E+KDxiPntkZXRhaWxEYXRhLmdvb2ROdW19PC9iPilcbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGV0YWlsRGF0YS5wcmV2ID8gPHA+5LiK5LiA56+H77yaPGEgaHJlZj17YC9kZXRhaWw/aWQ9JHtkZXRhaWxEYXRhLnByZXYuaWR9YH0+e2RldGFpbERhdGEucHJldi5uYW1lfTwvYT48L3A+OjxwPuS4iuS4gOevh++8mjxhIGhyZWY9e2AvYXJ0aWNsZWB9PuWbnuWIsOWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRldGFpbERhdGEubmV4dCA/IDxwPuS4i+S4gOevh++8mjxhIGhyZWY9e2AvZGV0YWlsP2lkPSR7ZGV0YWlsRGF0YS5uZXh0LmlkfWB9PntkZXRhaWxEYXRhLm5leHQubmFtZX08L2E+PC9wPjo8cD7kuIvkuIDnr4fvvJo8YSBocmVmPXtgL2FydGljbGVgfT7lm57liLDliJfooag8L2E+PC9wPlxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIiBpZD1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgICA8aDI+5paH56ug6K+E6K66PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdia29cIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHNMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgke2F2YXRhcnNbaXRlbS5pZCVhdmF0YXJzLmxlbmd0aF19KSBuby1yZXBlYXQgdG9wIDE0cHggbGVmdCAxMHB4YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzAwMFwifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZidGltZVwiPjxzcGFuPnttb21lbnQoaXRlbS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPntpdGVtLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCIgc3R5bGU9e2NvbW1lbnRzTGlzdC5sZW5ndGggPT0gMCA/IHttYXJnaW5Ub3A6IDh9Ont9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsY29sb3I6IFwiI2RlMTUxM1wifX0+5YWx5pyJe2NvbW1lbnRUb3RhbH3mnaHor4Torro8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHZhbHVlPXtzYXl0ZXh0fSBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2F5dGV4dDplLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH19IHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZUZpZWxkXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3ViTWl0Q29tbWVudC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17c3VibWl0RGlzYn0gdmFsdWU9e3N1Ym1pdFR4dH0gc3R5bGU9e3tvdXRsaW5lOiBcIm5vbmVcIixjdXJzb3I6IFwicG9pbnRlclwifX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5leHRpbmZvIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHRpbmZvIGE6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55em0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbHBvc3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2F5dGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MThweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F5aW5nIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgIC5zYXlpbmd7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYTlhNmE2O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICB9IFxuICAgICAgICAgICAubmV3c19wbCBoMntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAgMnB4IHNvbGlkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1le1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWUgc3BhbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY3cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZidGltZXtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJpbmZve1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZiIHVse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogI2VjZWNlYyAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ3cHggNDdweDtcbiAgICAgICAgICAgfSAgXG4gICAgICAgICAgIC5uZXdzX3Bse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/client-pc/pages/detail.js */"));
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



/***/ }),

/***/ "./proto/blogArticle_pb.js":
/*!*********************************!*\
  !*** ./proto/blogArticle_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_article', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_article = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_article, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_article.displayName = 'proto.blog_article';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_article.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_article.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_article} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_article.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      cover: jspb.Message.getFieldWithDefault(msg, 2, ""),
      goodNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
      view: jspb.Message.getFieldWithDefault(msg, 4, 0),
      recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
      type: jspb.Message.getFieldWithDefault(msg, 6, 0),
      preface: jspb.Message.getFieldWithDefault(msg, 7, ""),
      htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
      name: jspb.Message.getFieldWithDefault(msg, 9, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 10, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 11, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_article();
  return proto.blog_article.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setGoodNum(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setView(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setRecommended(value);
        break;

      case 6:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setType(value);
        break;

      case 7:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPreface(value);
        break;

      case 8:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setHtmlTxtUrl(value);
        break;

      case 9:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 10:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 11:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_article.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_article.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getGoodNum();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }

  f = message.getView();

  if (f !== 0) {
    writer.writeInt64(4, f);
  }

  f = message.getRecommended();

  if (f !== 0) {
    writer.writeInt64(5, f);
  }

  f = message.getType();

  if (f !== 0) {
    writer.writeInt64(6, f);
  }

  f = message.getPreface();

  if (f.length > 0) {
    writer.writeString(7, f);
  }

  f = message.getHtmlTxtUrl();

  if (f.length > 0) {
    writer.writeString(8, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(9, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(10, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(11, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_article.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string cover = 2;
 * @return {string}
 */


proto.blog_article.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional int64 good_num = 3;
 * @return {number}
 */


proto.blog_article.prototype.getGoodNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setGoodNum = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int64 view = 4;
 * @return {number}
 */


proto.blog_article.prototype.getView = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setView = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * optional int64 recommended = 5;
 * @return {number}
 */


proto.blog_article.prototype.getRecommended = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setRecommended = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * optional int64 type = 6;
 * @return {number}
 */


proto.blog_article.prototype.getType = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 6, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setType = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};
/**
 * optional string preface = 7;
 * @return {string}
 */


proto.blog_article.prototype.getPreface = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 7, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setPreface = function (value) {
  jspb.Message.setProto3StringField(this, 7, value);
};
/**
 * optional string html_txt_url = 8;
 * @return {string}
 */


proto.blog_article.prototype.getHtmlTxtUrl = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 8, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setHtmlTxtUrl = function (value) {
  jspb.Message.setProto3StringField(this, 8, value);
};
/**
 * optional string name = 9;
 * @return {string}
 */


proto.blog_article.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 9, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 9, value);
};
/**
 * optional string create_time = 10;
 * @return {string}
 */


proto.blog_article.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 10, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 10, value);
};
/**
 * optional string update_time = 11;
 * @return {string}
 */


proto.blog_article.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 11, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 11, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogComment_pb.js":
/*!*********************************!*\
  !*** ./proto/blogComment_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_comment', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_comment = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_comment, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comment.displayName = 'proto.blog_comment';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comment.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comment.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comment} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comment.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogId: jspb.Message.getFieldWithDefault(msg, 2, 0),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      name: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comment();
  return proto.blog_comment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogId(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comment.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comment.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogId();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_comment.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_id = 2;
 * @return {number}
 */


proto.blog_comment.prototype.getBlogId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setBlogId = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blog_comment.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string name = 4;
 * @return {string}
 */


proto.blog_comment.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string create_time = 5;
 * @return {string}
 */


proto.blog_comment.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string update_time = 6;
 * @return {string}
 */


proto.blog_comment.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogType_pb.js":
/*!******************************!*\
  !*** ./proto/blogType_pb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_type = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_type, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_type.displayName = 'proto.blog_type';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_type.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_type.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_type} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_type.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
      lable: jspb.Message.getFieldWithDefault(msg, 3, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 5, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_type();
  return proto.blog_type.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogNum(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setLable(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_type.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_type.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_type} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_type.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogNum();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getLable();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_type.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_num = 2;
 * @return {number}
 */


proto.blog_type.prototype.getBlogNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setBlogNum = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string lable = 3;
 * @return {string}
 */


proto.blog_type.prototype.getLable = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setLable = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string create_time = 4;
 * @return {string}
 */


proto.blog_type.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string update_time = 5;
 * @return {string}
 */


proto.blog_type.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blog_pb.js":
/*!**************************!*\
  !*** ./proto/blog_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blogComment', null, global);
goog.exportSymbol('proto.blogComments', null, global);
goog.exportSymbol('proto.blogListRes', null, global);
goog.exportSymbol('proto.detailRes', null, global);
goog.exportSymbol('proto.fileReadRes', null, global);
goog.exportSymbol('proto.tp', null, global);
goog.exportSymbol('proto.tps', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.detailRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.detailRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.detailRes.displayName = 'proto.detailRes';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.detailRes.prototype.toObject = function (opt_includeInstance) {
    return proto.detailRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.detailRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.detailRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      view: jspb.Message.getFieldWithDefault(msg, 2, 0),
      preface: jspb.Message.getFieldWithDefault(msg, 3, ""),
      htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
      recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
      createTime: jspb.Message.getFieldWithDefault(msg, 6, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 7, ""),
      type: jspb.Message.getFieldWithDefault(msg, 8, 0),
      name: jspb.Message.getFieldWithDefault(msg, 9, ""),
      goodNum: jspb.Message.getFieldWithDefault(msg, 10, 0),
      next: (f = msg.getNext()) && proto.detailRes.toObject(includeInstance, f),
      prev: (f = msg.getPrev()) && proto.detailRes.toObject(includeInstance, f),
      cover: jspb.Message.getFieldWithDefault(msg, 13, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.detailRes}
 */


proto.detailRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.detailRes();
  return proto.detailRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.detailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.detailRes}
 */


proto.detailRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setView(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPreface(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setHtmlTxtUrl(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setRecommended(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 7:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      case 8:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setType(value);
        break;

      case 9:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 10:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setGoodNum(value);
        break;

      case 11:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.setNext(value);
        break;

      case 12:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.setPrev(value);
        break;

      case 13:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.detailRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.detailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.detailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.detailRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getView();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getPreface();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getHtmlTxtUrl();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getRecommended();

  if (f !== 0) {
    writer.writeInt32(5, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(7, f);
  }

  f = message.getType();

  if (f !== 0) {
    writer.writeInt32(8, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(9, f);
  }

  f = message.getGoodNum();

  if (f !== 0) {
    writer.writeInt32(10, f);
  }

  f = message.getNext();

  if (f != null) {
    writer.writeMessage(11, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getPrev();

  if (f != null) {
    writer.writeMessage(12, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(13, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.detailRes.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 view = 2;
 * @return {number}
 */


proto.detailRes.prototype.getView = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setView = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string preface = 3;
 * @return {string}
 */


proto.detailRes.prototype.getPreface = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setPreface = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string html_txt_url = 4;
 * @return {string}
 */


proto.detailRes.prototype.getHtmlTxtUrl = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setHtmlTxtUrl = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional int32 recommended = 5;
 * @return {number}
 */


proto.detailRes.prototype.getRecommended = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setRecommended = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * optional string create_time = 6;
 * @return {string}
 */


proto.detailRes.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};
/**
 * optional string update_time = 7;
 * @return {string}
 */


proto.detailRes.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 7, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 7, value);
};
/**
 * optional int32 type = 8;
 * @return {number}
 */


proto.detailRes.prototype.getType = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 8, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setType = function (value) {
  jspb.Message.setProto3IntField(this, 8, value);
};
/**
 * optional string name = 9;
 * @return {string}
 */


proto.detailRes.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 9, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 9, value);
};
/**
 * optional int32 good_num = 10;
 * @return {number}
 */


proto.detailRes.prototype.getGoodNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 10, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setGoodNum = function (value) {
  jspb.Message.setProto3IntField(this, 10, value);
};
/**
 * optional detailRes next = 11;
 * @return {?proto.detailRes}
 */


proto.detailRes.prototype.getNext = function () {
  return (
    /** @type{?proto.detailRes} */
    jspb.Message.getWrapperField(this, proto.detailRes, 11)
  );
};
/** @param {?proto.detailRes|undefined} value */


proto.detailRes.prototype.setNext = function (value) {
  jspb.Message.setWrapperField(this, 11, value);
};

proto.detailRes.prototype.clearNext = function () {
  this.setNext(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.detailRes.prototype.hasNext = function () {
  return jspb.Message.getField(this, 11) != null;
};
/**
 * optional detailRes prev = 12;
 * @return {?proto.detailRes}
 */


proto.detailRes.prototype.getPrev = function () {
  return (
    /** @type{?proto.detailRes} */
    jspb.Message.getWrapperField(this, proto.detailRes, 12)
  );
};
/** @param {?proto.detailRes|undefined} value */


proto.detailRes.prototype.setPrev = function (value) {
  jspb.Message.setWrapperField(this, 12, value);
};

proto.detailRes.prototype.clearPrev = function () {
  this.setPrev(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.detailRes.prototype.hasPrev = function () {
  return jspb.Message.getField(this, 12) != null;
};
/**
 * optional string cover = 13;
 * @return {string}
 */


proto.detailRes.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 13, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 13, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.fileReadRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.fileReadRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.fileReadRes.displayName = 'proto.fileReadRes';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fileReadRes.prototype.toObject = function (opt_includeInstance) {
    return proto.fileReadRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fileReadRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.fileReadRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      txt: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fileReadRes}
 */


proto.fileReadRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fileReadRes();
  return proto.fileReadRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fileReadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fileReadRes}
 */


proto.fileReadRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setTxt(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.fileReadRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.fileReadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fileReadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.fileReadRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxt();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};
/**
 * optional string txt = 1;
 * @return {string}
 */


proto.fileReadRes.prototype.getTxt = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/** @param {string} value */


proto.fileReadRes.prototype.setTxt = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogListRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blogListRes.repeatedFields_, null);
};

goog.inherits(proto.blogListRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogListRes.displayName = 'proto.blogListRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blogListRes.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogListRes.prototype.toObject = function (opt_includeInstance) {
    return proto.blogListRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogListRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogListRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.detailRes.toObject, includeInstance),
      page: jspb.Message.getFieldWithDefault(msg, 2, 0),
      size: jspb.Message.getFieldWithDefault(msg, 3, 0),
      total: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogListRes}
 */


proto.blogListRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogListRes();
  return proto.blogListRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogListRes}
 */


proto.blogListRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setPage(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setSize(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogListRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogListRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getPage();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getSize();

  if (f !== 0) {
    writer.writeInt32(3, f);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};
/**
 * repeated detailRes list = 1;
 * @return {!Array.<!proto.detailRes>}
 */


proto.blogListRes.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.detailRes>} */
    jspb.Message.getRepeatedWrapperField(this, proto.detailRes, 1)
  );
};
/** @param {!Array.<!proto.detailRes>} value */


proto.blogListRes.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.detailRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.detailRes}
 */


proto.blogListRes.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.detailRes, opt_index);
};

proto.blogListRes.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * optional int32 page = 2;
 * @return {number}
 */


proto.blogListRes.prototype.getPage = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setPage = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional int32 size = 3;
 * @return {number}
 */


proto.blogListRes.prototype.getSize = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setSize = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int32 total = 4;
 * @return {number}
 */


proto.blogListRes.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.tp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.tp, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.tp.displayName = 'proto.tp';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tp.prototype.toObject = function (opt_includeInstance) {
    return proto.tp.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.tp.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      lable: jspb.Message.getFieldWithDefault(msg, 2, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 3, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      blogNum: jspb.Message.getFieldWithDefault(msg, 5, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tp}
 */


proto.tp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tp();
  return proto.tp.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tp}
 */


proto.tp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setLable(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogNum(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.tp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.tp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getLable();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getBlogNum();

  if (f !== 0) {
    writer.writeInt32(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.tp.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.tp.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string lable = 2;
 * @return {string}
 */


proto.tp.prototype.getLable = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setLable = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string create_time = 3;
 * @return {string}
 */


proto.tp.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string update_time = 4;
 * @return {string}
 */


proto.tp.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional int32 blog_num = 5;
 * @return {number}
 */


proto.tp.prototype.getBlogNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.tp.prototype.setBlogNum = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.tps = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tps.repeatedFields_, null);
};

goog.inherits(proto.tps, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.tps.displayName = 'proto.tps';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.tps.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tps.prototype.toObject = function (opt_includeInstance) {
    return proto.tps.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tps} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.tps.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.tp.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tps}
 */


proto.tps.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tps();
  return proto.tps.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tps}
 */


proto.tps.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.tp();
        reader.readMessage(value, proto.tp.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.tps.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.tps.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.tp.serializeBinaryToWriter);
  }
};
/**
 * repeated tp list = 1;
 * @return {!Array.<!proto.tp>}
 */


proto.tps.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.tp>} */
    jspb.Message.getRepeatedWrapperField(this, proto.tp, 1)
  );
};
/** @param {!Array.<!proto.tp>} value */


proto.tps.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.tp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tp}
 */


proto.tps.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tp, opt_index);
};

proto.tps.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogComment = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blogComment, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogComment.displayName = 'proto.blogComment';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogComment.prototype.toObject = function (opt_includeInstance) {
    return proto.blogComment.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogComment} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogComment.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogId: jspb.Message.getFieldWithDefault(msg, 2, 0),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      name: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogComment}
 */


proto.blogComment.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogComment();
  return proto.blogComment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogComment}
 */


proto.blogComment.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogId(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogComment.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogComment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogComment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogComment.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogId();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blogComment.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blogComment.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_id = 2;
 * @return {number}
 */


proto.blogComment.prototype.getBlogId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogComment.prototype.setBlogId = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blogComment.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string name = 4;
 * @return {string}
 */


proto.blogComment.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string create_time = 5;
 * @return {string}
 */


proto.blogComment.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string update_time = 6;
 * @return {string}
 */


proto.blogComment.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogComments = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blogComments.repeatedFields_, null);
};

goog.inherits(proto.blogComments, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogComments.displayName = 'proto.blogComments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blogComments.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogComments.prototype.toObject = function (opt_includeInstance) {
    return proto.blogComments.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogComments} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogComments.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.blogComment.toObject, includeInstance),
      total: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogComments}
 */


proto.blogComments.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogComments();
  return proto.blogComments.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogComments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogComments}
 */


proto.blogComments.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.blogComment();
        reader.readMessage(value, proto.blogComment.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogComments.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogComments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogComments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogComments.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.blogComment.serializeBinaryToWriter);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }
};
/**
 * repeated blogComment list = 1;
 * @return {!Array.<!proto.blogComment>}
 */


proto.blogComments.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.blogComment>} */
    jspb.Message.getRepeatedWrapperField(this, proto.blogComment, 1)
  );
};
/** @param {!Array.<!proto.blogComment>} value */


proto.blogComments.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.blogComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blogComment}
 */


proto.blogComments.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.blogComment, opt_index);
};

proto.blogComments.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * optional int32 total = 2;
 * @return {number}
 */


proto.blogComments.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogComments.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/errors_pb.js":
/*!****************************!*\
  !*** ./proto/errors_pb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.error_codes', null, global);
goog.exportSymbol('proto.resp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.resp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.resp, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.resp.displayName = 'proto.resp';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.resp.prototype.toObject = function (opt_includeInstance) {
    return proto.resp.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.resp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.resp.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resp();
  return proto.resp.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.resp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.resp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.resp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.resp.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.resp.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.resp.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.resp.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * @enum {number}
 */


proto.error_codes = {
  F: 0,
  OK: 200,
  NOCONTENT: 204,
  INVALID_PARAMS: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  ERROR: 500
};
goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/resp_pb.js":
/*!**************************!*\
  !*** ./proto/resp_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();

var blogArticle_pb = __webpack_require__(/*! ./blogArticle_pb.js */ "./proto/blogArticle_pb.js");

var errors_pb = __webpack_require__(/*! ./errors_pb.js */ "./proto/errors_pb.js");

var blogType_pb = __webpack_require__(/*! ./blogType_pb.js */ "./proto/blogType_pb.js");

var blogComment_pb = __webpack_require__(/*! ./blogComment_pb.js */ "./proto/blogComment_pb.js");

goog.exportSymbol('proto.blog_comments', null, global);
goog.exportSymbol('proto.blog_detail', null, global);
goog.exportSymbol('proto.blog_list', null, global);
goog.exportSymbol('proto.blog_types', null, global);
goog.exportSymbol('proto.file_content', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_list = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_list.repeatedFields_, null);
};

goog.inherits(proto.blog_list, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_list.displayName = 'proto.blog_list';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_list.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_list.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_list.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_list} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_list.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogArticleListList: jspb.Message.toObjectList(msg.getBlogArticleListList(), blogArticle_pb.blog_article.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_list();
  return proto.blog_list.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_list} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.addBlogArticleList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_list.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_list.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_list} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_list.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogArticleListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_list.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_list.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_list.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_list.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_article blog_article_list = 3;
 * @return {!Array.<!proto.blog_article>}
 */


proto.blog_list.prototype.getBlogArticleListList = function () {
  return (
    /** @type{!Array.<!proto.blog_article>} */
    jspb.Message.getRepeatedWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {!Array.<!proto.blog_article>} value */


proto.blog_list.prototype.setBlogArticleListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_article=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_article}
 */


proto.blog_list.prototype.addBlogArticleList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_article, opt_index);
};

proto.blog_list.prototype.clearBlogArticleListList = function () {
  this.setBlogArticleListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_detail = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_detail, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_detail.displayName = 'proto.blog_detail';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_detail.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_detail.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_detail} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_detail.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      currentArticle: (f = msg.getCurrentArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      nextArticle: (f = msg.getNextArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      prevArticle: (f = msg.getPrevArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_detail();
  return proto.blog_detail.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_detail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setCurrentArticle(value);
        break;

      case 4:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setNextArticle(value);
        break;

      case 5:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setPrevArticle(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_detail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_detail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_detail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_detail.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCurrentArticle();

  if (f != null) {
    writer.writeMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getNextArticle();

  if (f != null) {
    writer.writeMessage(4, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getPrevArticle();

  if (f != null) {
    writer.writeMessage(5, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_detail.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_detail.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_detail.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_detail.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional blog_article current_article = 3;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getCurrentArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setCurrentArticle = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.blog_detail.prototype.clearCurrentArticle = function () {
  this.setCurrentArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasCurrentArticle = function () {
  return jspb.Message.getField(this, 3) != null;
};
/**
 * optional blog_article next_article = 4;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getNextArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 4)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setNextArticle = function (value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.blog_detail.prototype.clearNextArticle = function () {
  this.setNextArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasNextArticle = function () {
  return jspb.Message.getField(this, 4) != null;
};
/**
 * optional blog_article prev_article = 5;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getPrevArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 5)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setPrevArticle = function (value) {
  jspb.Message.setWrapperField(this, 5, value);
};

proto.blog_detail.prototype.clearPrevArticle = function () {
  this.setPrevArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasPrevArticle = function () {
  return jspb.Message.getField(this, 5) != null;
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_types = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_types.repeatedFields_, null);
};

goog.inherits(proto.blog_types, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_types.displayName = 'proto.blog_types';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_types.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_types.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_types.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_types} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_types.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogTypeListList: jspb.Message.toObjectList(msg.getBlogTypeListList(), blogType_pb.blog_type.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_types();
  return proto.blog_types.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_types} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogType_pb.blog_type();
        reader.readMessage(value, blogType_pb.blog_type.deserializeBinaryFromReader);
        msg.addBlogTypeList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_types.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_types.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_types} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_types.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogTypeListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogType_pb.blog_type.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_types.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_types.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_types.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_types.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_type blog_type_list = 3;
 * @return {!Array.<!proto.blog_type>}
 */


proto.blog_types.prototype.getBlogTypeListList = function () {
  return (
    /** @type{!Array.<!proto.blog_type>} */
    jspb.Message.getRepeatedWrapperField(this, blogType_pb.blog_type, 3)
  );
};
/** @param {!Array.<!proto.blog_type>} value */


proto.blog_types.prototype.setBlogTypeListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_type=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_type}
 */


proto.blog_types.prototype.addBlogTypeList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_type, opt_index);
};

proto.blog_types.prototype.clearBlogTypeListList = function () {
  this.setBlogTypeListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_comments = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_comments.repeatedFields_, null);
};

goog.inherits(proto.blog_comments, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comments.displayName = 'proto.blog_comments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_comments.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comments.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comments.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comments} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comments.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogCommentListList: jspb.Message.toObjectList(msg.getBlogCommentListList(), blogComment_pb.blog_comment.toObject, includeInstance),
      total: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comments();
  return proto.blog_comments.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogComment_pb.blog_comment();
        reader.readMessage(value, blogComment_pb.blog_comment.deserializeBinaryFromReader);
        msg.addBlogCommentList(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comments.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comments.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogCommentListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogComment_pb.blog_comment.serializeBinaryToWriter);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_comments.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_comments.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_comments.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_comments.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_comment blog_comment_list = 3;
 * @return {!Array.<!proto.blog_comment>}
 */


proto.blog_comments.prototype.getBlogCommentListList = function () {
  return (
    /** @type{!Array.<!proto.blog_comment>} */
    jspb.Message.getRepeatedWrapperField(this, blogComment_pb.blog_comment, 3)
  );
};
/** @param {!Array.<!proto.blog_comment>} value */


proto.blog_comments.prototype.setBlogCommentListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_comment}
 */


proto.blog_comments.prototype.addBlogCommentList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_comment, opt_index);
};

proto.blog_comments.prototype.clearBlogCommentListList = function () {
  this.setBlogCommentListList([]);
};
/**
 * optional int32 total = 4;
 * @return {number}
 */


proto.blog_comments.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_comments.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.file_content = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.file_content, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.file_content.displayName = 'proto.file_content';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_content.prototype.toObject = function (opt_includeInstance) {
    return proto.file_content.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_content} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.file_content.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      txt: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_content}
 */


proto.file_content.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_content();
  return proto.file_content.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_content}
 */


proto.file_content.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setTxt(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.file_content.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.file_content.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getTxt();

  if (f.length > 0) {
    writer.writeString(3, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.file_content.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.file_content.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.file_content.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.file_content.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string txt = 3;
 * @return {string}
 */


proto.file_content.prototype.getTxt = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.file_content.prototype.setTxt = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./utils/blog_types.js":
/*!*****************************!*\
  !*** ./utils/blog_types.js ***!
  \*****************************/
/*! exports provided: getTpValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTpValue", function() { return getTpValue; });
var tps = [{
  label: "笔记",
  value: 1
}, {
  label: "原创",
  value: 3
}, {
  label: "小感想",
  value: 2
}];
var getTpValue = function getTpValue(tp) {
  var finded = tps.find(function (item) {
    return item.value == tp;
  });

  if (finded) {
    return finded.label;
  }

  return "";
};

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: apiHost, avatars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiHost", function() { return apiHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatars", function() { return avatars; });
var apiHost = "//140.143.188.219:14001"; //let apiHost = "//momoman.cn"
//let apiHost = "//10.163.85.169:8888"
// if(location.domain == "www.momoman.cn"){
//     apiHost = "http://127.0.0.1:9000"
// }

var avatars = ['/static/images/avatars/tx2.jpg', '/static/images/avatars/tx3.jpg', '/static/images/avatars/tx4.jpg', '/static/images/avatars/tx5.jpg', '/static/images/avatars/tx6.jpg', '/static/images/avatars/tx7.jpg', '/static/images/avatars/tx8.jpg', '/static/images/avatars/tx9.jpg', '/static/images/avatars/tx10.jpg'];


/***/ }),

/***/ "./utils/emiter.js":
/*!*************************!*\
  !*** ./utils/emiter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Event = {
  // 通过on接口监听事件eventName
  // 如果事件eventName被触发，则执行callback回调函数
  on: function on(eventName, callback) {
    if (!this.handles) {
      this.handles = {};
      Object.defineProperty(this, "handles", {
        //限制下方Object.assign浅拷贝枚举对象
        value: {},
        enumerable: false,
        configurable: true,
        writable: true
      });
    }

    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }

    this.handles[eventName].push(callback);
  },
  // 触发事件 eventName
  emit: function emit(eventName) {
    //你的代码
    if (this.handles && this.handles[arguments[0]]) {
      for (var i = 0; i < this.handles[arguments[0]].length; i++) {
        this.handles[arguments[0]][i](arguments[1]);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./utils/util.js":
/*!***********************!*\
  !*** ./utils/util.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readStream; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_3__);




function readStream(stream) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(stream);

    reader.onload =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (evt.target.readyState == FileReader.DONE) {
                  data = new Uint8Array(evt.target.result);
                  resolve(data);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  });
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justin/Desktop/my/client-pc/pages/detail.js */"./pages/detail.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "google-protobuf":
/*!**********************************!*\
  !*** external "google-protobuf" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-protobuf");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map