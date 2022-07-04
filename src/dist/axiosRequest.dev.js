"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRequest = exports.publicRequest = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "https://iconicshoppingnodejs.herokuapp.com/"; // const BASE_URL = 'http://localhost:8080/api';

var TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTJlMTJkMzBlZjcwMjNlY2ZiOGI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTY2NDIxMywiZXhwIjoxNjQ1Njc1MDEzfQ.wMNj_FwBHJDpxiB4TtUaz7E5uTDkFkMWUbugioVr8Gg";

var publicRequest = _axios["default"].create({
  baseURL: BASE_URL
});

exports.publicRequest = publicRequest;

var userRequest = _axios["default"].create({
  baseURL: BASE_URL,
  header: {
    token: "Bearer ".concat(TOKEN)
  }
});

exports.userRequest = userRequest;