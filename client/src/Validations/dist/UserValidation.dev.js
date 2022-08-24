"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userInitialValue = exports.userSchema = void 0;

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var userSchema = yup.object().shape({
  userName: yup.string().required('user name required'),
  email: yup.string().email('Invalid email').required('email required'),
  password: yup.string().min(8, 'password must be at least 8 characters').max(16, 'password cannot be more than 16 characters').required('password required'),
  confirmPassword: yup.string().min(8).max(16).required('please confirm the password').when('password', {
    is: function is(val) {
      return val && val.length > 0 ? true : false;
    },
    then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same')
  })
});
exports.userSchema = userSchema;
var userInitialValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
exports.userInitialValue = userInitialValue;