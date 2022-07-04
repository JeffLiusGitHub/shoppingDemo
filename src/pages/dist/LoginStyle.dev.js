"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Button = exports.Input = exports.Form = exports.Title = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nmargin: 5px 0px;\nfont-size: 12px;\ntext-decoration: underline;\ncursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nalign-self: flex-end;\nwidth: 40%;\nborder: none;\npadding: 15px 20px;\nbackground-color: teal;\ncolor: white;\ncursor: pointer;\nmargin-bottom: 10px;\nbutton:disabled {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nflex: 1;\nmin-width: 40%;\nmargin: 10px 0;\npadding: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-size: 24px;\nfont-weight: 300;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 35%;\npadding: 20px;\nbackground-color: white;\n", ";\n", ";\n", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 100vw;\nheight: 100vh;\nbackground: linear-gradient(\n        rgba(255, 255, 255, 0.5),\n        rgba(255, 255, 255, 0.5)\n    ),\n    url('https://previews.123rf.com/images/maximleshkovich/maximleshkovich1710/maximleshkovich171000265/88532663-women-modern-fashion-clothes-and-accessories-background-with-frame-for-text-flat-lay-female-casual-s.jpg')\n        center;\nbackground-size: cover;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]);

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

var Button = _styledComponents["default"].button(_templateObject6());

exports.Button = Button;

var Link = _styledComponents["default"].a(_templateObject7());

exports.Link = Link;