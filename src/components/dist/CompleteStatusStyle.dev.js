"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductQty = exports.ProductPrice = exports.ProductName = exports.Details = exports.ImageContainer = exports.InnerContainer = exports.Title = exports.OutContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 18px;\n\tfont-weight: 400;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 20px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 30px;\n\tfont-weight: 600;\n\t", ";\n\t", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tflex: 2;\n\tdisplay: flex;\n\tmargin: 20px 0 0 40px;\n\tflex-direction: column;\n\twidth: 10px;\n\talign-items: left;\n\tjustify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\twidth: 40px;\n\theight: 40px;\n\talign-items: center;\n\tjustify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tmargin-top: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 30px;\n\t", ";\n\t", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\theight: 30%;\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OutContainer = _styledComponents["default"].div(_templateObject());

exports.OutContainer = OutContainer;

var Title = _styledComponents["default"].h1(_templateObject2(), (0, _responsive.tablet)({
  fontSize: '25px'
}), (0, _responsive.mobile)({
  fontSize: '20px'
}));

exports.Title = Title;

var InnerContainer = _styledComponents["default"].div(_templateObject3());

exports.InnerContainer = InnerContainer;

var ImageContainer = _styledComponents["default"].div(_templateObject4());

exports.ImageContainer = ImageContainer;

var Details = _styledComponents["default"].div(_templateObject5());

exports.Details = Details;

var ProductName = _styledComponents["default"].p(_templateObject6(), (0, _responsive.tablet)({
  fontSize: '25px'
}), (0, _responsive.mobile)({
  fontSize: '20px'
}));

exports.ProductName = ProductName;

var ProductPrice = _styledComponents["default"].p(_templateObject7());

exports.ProductPrice = ProductPrice;

var ProductQty = _styledComponents["default"].p(_templateObject8());

exports.ProductQty = ProductQty;