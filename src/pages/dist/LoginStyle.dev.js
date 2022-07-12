"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkComponent = exports.LinkContainer = exports.Button = exports.ButtonContainer = exports.Input = exports.Form = exports.Title = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 5px 0px;\n\tfont-size: 12px;\n\ttext-decoration: underline;\n\tcursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\talign-self: flex-end;\n\twidth: 40%;\n\tborder: none;\n\tpadding: 15px 20px;\n\tbackground-color: teal;\n\tcolor: white;\n\tcursor: pointer;\n\tmargin-bottom: 10px;\n\tborder-radius: 5px;\n\tbutton:disabled {\n\t\tborder: 1px solid #999999;\n\t\tbackground-color: #cccccc;\n\t\tcolor: #666666;\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tmargin-top: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tmin-width: 40%;\n\tmargin: 10px 0;\n\tpadding: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 24px;\n\tfont-weight: 300;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 35%;\n\tpadding: 20px;\n\tbackground-color: white;\n\tborder-left: 5px solid #d2d8d8;\n\t", ";\n\t", ";\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: linear-gradient(\n\t\t\trgba(255, 255, 255, 0.5),\n\t\t\trgba(255, 255, 255, 0.5)\n\t\t),\n\t\turl('https://previews.123rf.com/images/maximleshkovich/maximleshkovich1710/maximleshkovich171000265/88532663-women-modern-fashion-clothes-and-accessories-background-with-frame-for-text-flat-lay-female-casual-s.jpg')\n\t\t\tcenter;\n\tbackground-size: cover;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Wrapper = _styledComponents["default"].div(_templateObject2(), (0, _responsive.tablet)({
  width: '50%'
}), (0, _responsive.laptop)({
  width: '75%'
}), (0, _responsive.mobile)({
  width: '90%'
}));

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].h1(_templateObject3());

exports.Title = Title;

var Form = _styledComponents["default"].form(_templateObject4());

exports.Form = Form;

var Input = _styledComponents["default"].input(_templateObject5());

exports.Input = Input;

var ButtonContainer = _styledComponents["default"].div(_templateObject6());

exports.ButtonContainer = ButtonContainer;

var Button = _styledComponents["default"].button(_templateObject7());

exports.Button = Button;

var LinkContainer = _styledComponents["default"].div(_templateObject8());

exports.LinkContainer = LinkContainer;

var LinkComponent = _styledComponents["default"].a(_templateObject9());

exports.LinkComponent = LinkComponent;