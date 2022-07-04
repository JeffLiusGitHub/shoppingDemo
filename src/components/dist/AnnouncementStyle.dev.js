"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.IconContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tcolor: black;\n\tfont-weight: 500;\n\tdisplay: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n\tfont-size: 18px;\n\t", ";\n\t", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmargin-right: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmin-height: 40px;\n\tbackground-color: ", ";\n\tdisplay: flex;\n\tjustify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.color;
});

exports.Container = Container;

var IconContainer = _styledComponents["default"].div(_templateObject2());

exports.IconContainer = IconContainer;

var Text = _styledComponents["default"].div(_templateObject3(), (0, _responsive.laptop)({
  fontSize: '12px'
}), (0, _responsive.tablet)({
  fontSize: '10px'
}));

exports.Text = Text;