"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _CartSlice = _interopRequireDefault(require("./CartSlice"));

var _UserSlice = _interopRequireDefault(require("./UserSlice"));

var _WishListSlice = _interopRequireDefault(require("./WishListSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _toolkit.configureStore)({
  reducer: {
    cart: _CartSlice["default"],
    user: _UserSlice["default"],
    wishList: _WishListSlice["default"]
  }
});

exports["default"] = _default;