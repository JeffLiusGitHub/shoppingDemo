"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Input = exports.InputContainer = exports.Description = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tborder: none;\n\tbackground-color: teal;\n\tcolor: white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tborder: none;\n\tflex: 8;\n\tpadding-left: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 50%;\n\theight: 40px;\n\tbackground-color: white;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 1px solid lightgray;\n\t", ";\n\t", ";\n\t", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 24px;\n\tfont-weight: 300;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\t", ";\n\t", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 70px;\n\tmargin-bottom: 20px;\n\t", ";\n\t", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\theight: 60vh;\n\tbackground-color: #fcf5f5;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Title = _styledComponents["default"].h1(_templateObject2(), (0, _responsive.tablet)({
  fontSize: '60px'
}), (0, _responsive.mobile)({
  fontSize: '50px'
}));

exports.Title = Title;

var Description = _styledComponents["default"].div(_templateObject3(), (0, _responsive.tablet)({
  fontSize: '20px'
}), (0, _responsive.mobile)({
  fontSize: '18px'
}));

exports.Description = Description;

var InputContainer = _styledComponents["default"].div(_templateObject4(), (0, _responsive.mobile)({
  width: '80%'
}), (0, _responsive.tablet)({
  width: '70%'
}), (0, _responsive.laptop)({
  width: '60%'
}));

exports.InputContainer = InputContainer;

var Input = _styledComponents["default"].input(_templateObject5());

exports.Input = Input;

var Button = _styledComponents["default"].button(_templateObject6());

exports.Button = Button;