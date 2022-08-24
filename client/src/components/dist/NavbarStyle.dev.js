"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartIcon = exports.MenuItem = exports.Logo = exports.Input = exports.SearchContainer = exports.Language = exports.Right = exports.Center = exports.Left = exports.Wrapper = exports.NavContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\ttransition: all 0.2s ease-out;\n\t:hover {\n\t\ttransform: scale(1.1);\n\t}\n\t", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 14px;\n\tcursor: pointer;\n\tmargin: 15px;\n\t", ";\n\t", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tcolor: white;\n\ttext-decoration: none !important;\n\t", "\n\t:visited {\n\t\tcolor: white !important;\n\t\ttext-decoration: none !important;\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tborder: none;\n\tbackground-color: black;\n\t", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tborder: 0.5px solid lightgray;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 5px;\n\t", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 14px;\n\tcursor: pointer;\n\tmargin-right: 5px;\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\t", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\ttext-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\t", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 10px 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\theight: 60px;\n\t", ";\n\tbackground-color: black;\n\tcolor: white;\n\tposition: sticky;\n\ttop:0px;\n\tz-index:1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavContainer = _styledComponents["default"].div(_templateObject(), (0, _responsive.tablet)({
  height: '50px'
}));

exports.NavContainer = NavContainer;

var Wrapper = _styledComponents["default"].div(_templateObject2(), (0, _responsive.mobile)({
  padding: '10px 0px'
}));

exports.Wrapper = Wrapper;

var Left = _styledComponents["default"].div(_templateObject3(), (0, _responsive.mobile)({
  display: 'none'
}));

exports.Left = Left;

var Center = _styledComponents["default"].div(_templateObject4());

exports.Center = Center;

var Right = _styledComponents["default"].div(_templateObject5(), (0, _responsive.mobile)({
  flex: 2
}));

exports.Right = Right;

var Language = _styledComponents["default"].span(_templateObject6(), (0, _responsive.tablet)({
  display: 'none'
}));

exports.Language = Language;

var SearchContainer = _styledComponents["default"].div(_templateObject7(), (0, _responsive.tablet)({
  display: 'none'
}));

exports.SearchContainer = SearchContainer;

var Input = _styledComponents["default"].input(_templateObject8(), (0, _responsive.mobile)({
  width: '50px'
}));

exports.Input = Input;

var Logo = _styledComponents["default"].h1(_templateObject9(), (0, _responsive.tablet)({
  fontSize: '20px'
}));

exports.Logo = Logo;

var MenuItem = _styledComponents["default"].div(_templateObject10(), (0, _responsive.tablet)({
  fontSize: '10px',
  margin: '10px'
}), (0, _responsive.mobile)({
  fontSize: '9px',
  fontWeight: '900',
  margin: '6px'
}));

exports.MenuItem = MenuItem;

var CartIcon = _styledComponents["default"].div(_templateObject11(), (0, _responsive.mobile)({
  fontSize: '3px'
}));

exports.CartIcon = CartIcon;