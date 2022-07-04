"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Select = exports.FilterText = exports.Filter = exports.FilterContainer = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\topacity: 0;\n\t-webkit-box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.66);\n\tbox-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.66);\n\tbackground-color: brown;\n\tposition: absolute;\n\tz-index: 10;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 10px;\n\tmargin-right: 20px;\n\tborder-color: #2d6f34b3;\n\tborder-radius: 4px;\n\tborder-width: 1.4px;\n\tbackground-color: #00b3120e;\n\n\tfont-weight: 700;\n\t-webkit-box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);\n\tbox-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 20px;\n\tfont-weight: 600;\n\tmargin-right: 20px;\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 20px;\n\t", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Title = _styledComponents["default"].h1(_templateObject2());

exports.Title = Title;

var FilterContainer = _styledComponents["default"].div(_templateObject3());

exports.FilterContainer = FilterContainer;

var Filter = _styledComponents["default"].div(_templateObject4(), (0, _responsive.mobile)({
  width: '0px 20px',
  display: 'flex',
  flexDirection: 'column'
}));

exports.Filter = Filter;

var FilterText = _styledComponents["default"].span(_templateObject5(), (0, _responsive.mobile)({
  marginRight: '0px'
}));

exports.FilterText = FilterText;

var Select = _styledComponents["default"].select(_templateObject6(), (0, _responsive.mobile)({
  margin: '10px 0px'
}));

exports.Select = Select;

var Option = _styledComponents["default"].option(_templateObject7());

exports.Option = Option;