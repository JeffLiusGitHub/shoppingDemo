"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Info = exports.Image = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tcolor: white;\n\tmargin-bottom: 20px;\n\tposition: absolute;\n\tbottom: 18px;\n\tleft: 18px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tmargin: 3px;\n\theight: 70vh;\n\tposition: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].li(_templateObject());

exports.Container = Container;

var Image = _styledComponents["default"].img(_templateObject2(), (0, _responsive.mobile)({
  height: '20vh'
}));

exports.Image = Image;

var Info = _styledComponents["default"].div(_templateObject3());

exports.Info = Info;

var Title = _styledComponents["default"].h1(_templateObject4());

exports.Title = Title;