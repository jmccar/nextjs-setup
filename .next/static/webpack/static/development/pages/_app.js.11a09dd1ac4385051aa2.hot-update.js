webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/pressy-button/PressyButton.js":
/*!**************************************************!*\
  !*** ./components/pressy-button/PressyButton.js ***!
  \**************************************************/
/*! exports provided: PressyButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressyButton", function() { return PressyButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./components/pressy-button/actions.js");

var _jsxFileName = "/Users/shaunwassell/repos/next-garbage/components/pressy-button/PressyButton.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 16px;\n    color: white;\n    background-color: red;\n    border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject());

var PressyButtonBase = function PressyButtonBase(_ref) {
  var buttonPresses = _ref.buttonPresses,
      buttonPressed = _ref.buttonPressed;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Welcome, welcome my friends! You've pressed the button ", buttonPresses, " times"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BigButton, {
    onClick: buttonPressed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Press meh"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    buttonPresses: state.buttonPresses
  };
};

var mapDispatchToProps = {
  buttonPressed: _actions__WEBPACK_IMPORTED_MODULE_4__["buttonPressed"]
};
var PressyButton = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PressyButtonBase);

/***/ })

})
//# sourceMappingURL=_app.js.11a09dd1ac4385051aa2.hot-update.js.map