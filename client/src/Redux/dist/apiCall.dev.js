"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var _axiosRequest = require("../axiosRequest");

var _UserSlice = require("./UserSlice");

var login = function login(dispatch, user) {
  var res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _UserSlice.loginStart)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axiosRequest.publicRequest.post('/auth/login', user));

        case 4:
          res = _context.sent;
          console.log(res.data.userName);
          console.log(res.data.jwtToken);
          dispatch((0, _UserSlice.loginSuccess)(res.data));
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          dispatch((0, _UserSlice.loginFailure)());

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.login = login;

var register = function register(registerData) {
  var res;
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            res = _axiosRequest.publicRequest.post('/auth/register', registerData);
            console.log(res);
          } catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.register = register;