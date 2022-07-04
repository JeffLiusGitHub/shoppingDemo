"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Agreement = exports.Input = exports.Form = exports.Title = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\twidth: 40%;\n\tborder: none;\n\tpadding: 15px 20px;\n\tbackground-color: teal;\n\tcolor: white;\n\tcursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 12px;\n\tmargin: 20px 0px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tmin-width: 40%;\n\tmargin: 20px 10px 0px 0px;\n\tpadding: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);

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
  var data = _taggedTemplateLiteral(["\n\twidth: 40%;\n\tpadding: 20px;\n\tbackground-color: white;\n\t", ";\n\t", ";\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: linear-gradient(\n\t\t\trgba(255, 255, 255, 0.5),\n\t\t\trgba(255, 255, 255, 0.5)\n\t\t),\n\t\turl('https://img.freepik.com/free-photo/beach-fashion-concept-flat-lay-girls-accessories-clothes-with-green-leaves-pink-background-fl_248570-2596.jpg')\n\t\t\tcenter;\n\tbackground-size: cover;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);

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

var Agreement = _styledComponents["default"].span(_templateObject6());

exports.Agreement = Agreement;

var Button = _styledComponents["default"].button(_templateObject7());

exports.Button = Button;