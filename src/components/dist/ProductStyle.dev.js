"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Image = exports.Circle = exports.Container = exports.Info = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tdisplay: flex;\n\tbackground-color: white;\n\talign-items: center;\n\tmargin: 10px;\n\tstroke: #e9f5f5;\n\ttransition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\tcursor: pointer;\n\t&:hover {\n\t\tfill: #d01111;\n\t\ttransform: scale(1.3);\n\t}\n\tjustify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\theight: 75%;\n\tz-index: 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 250px;\n\theight: 250px;\n\tborder-radius: 50%;\n\tbackground-color: ", ";\n\tposition: absolute;\n\tcontent: '';\n\tz-index: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tmargin: 5px;\n\tmin-width: 280px;\n\theight: 350px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #f5fbfd;\n\tposition: relative;\n\tz-index: 0;\n\ttext-decoration:none;\n\ttransition: background-color.25s ease-out, color 0.25s ease-out;\n\t&:hover ", " {\n\t\topacity: 1;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\topacity: 0;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 3;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: all 0.5s ease-out;\n\tbackground-color: rgba(0, 0, 0, 0.2);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Info = _styledComponents["default"].div(_templateObject());

exports.Info = Info;

var Container = _styledComponents["default"].li(_templateObject2(), Info);

exports.Container = Container;

var Circle = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.color;
});

exports.Circle = Circle;

var Image = _styledComponents["default"].img(_templateObject4());

exports.Image = Image;

var Icon = _styledComponents["default"].div(_templateObject5());

exports.Icon = Icon;