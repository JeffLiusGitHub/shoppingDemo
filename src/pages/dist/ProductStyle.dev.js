"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingInfoContainer = exports.Button = exports.Amount = exports.AmountContainer = exports.AddContainer = exports.Error = exports.ErrorContainer = exports.FilterSizeOption = exports.FilterSize = exports.FilterColor = exports.FilterTitle = exports.Filter = exports.FilterContainer = exports.Price = exports.Discount = exports.Desc = exports.Title = exports.InfoContainer = exports.Image = exports.ImgContainer = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n\tmargin-top: 20px;\n\twidth: 70%;\n\t", "\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 15px;\n\tborder: 2px solid teal;\n\tbackground-color: white;\n\tcursor: pointer;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\t&:hover {\n\t\tbackground-color: #f8f4f4;\n\t}\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 10px;\n\tborder: 1px solid teal;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 0px 5px;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-weight: 700;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\twidth: 70%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\t", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tcolor: green;\n\tfont-weight: 300;\n\tfont-size: 20px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\twidth: 70%;\n\tmargin: 30px 0px;\n\t", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\tmargin-left: 10px;\n\tpadding: 5px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\tborder: 1px solid rgba(0, 0, 0, 0.4);\n\tbackground-color: ", ";\n\tmargin: 0px 5px;\n\tcursor: pointer;\n\t:active {\n\t\tborder: 3px solid green;\n\t\ttransition: transform 500ms cubic-bezier(0.355, 0.51, 0.235, 0.925) 0s;\n\t\ttransform: scale(0.9);\n\t}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 20px;\n\tfont-weight: 200;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\twidth: 70%;\n\tmargin: 30px 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 300;\n\tfont-size: 55px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #349c5f;\n\tfont-weight: 900;\n\tmargin-bottom: 10px;\n\t:after {\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\tborder: 4px solid #42abc8;\n\t\tborder-width: 0 1px 1px 0;\n\t\tborder-radius: 0 15%;\n\t\theight: 0.5em;\n\t\tmargin: 0 4px;\n\t\t-webkit-transform: rotate(-45deg) translateY(-0.1em);\n\t\ttransform: rotate(-45deg) translateY(-0.1em);\n\t\twidth: 0.5em;\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 30px;\n\twidth: 70%;\n\tmargin: 20px 0px;\n\ttext-align: left;\n\t", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 400;\n\tfont-size: 80px;\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tflex-direction: column;\n\tflex: 1;\n\tpadding: 0px 50px;\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 90%;\n\theight: 80vh;\n\tobject-fit: cover;\n\t", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 50px;\n\tdisplay: flex;\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: #e4e4e4dc;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Wrapper = _styledComponents["default"].div(_templateObject2(), (0, _responsive.laptop)({
  padding: '10px',
  flexDirection: 'column'
}));

exports.Wrapper = Wrapper;

var ImgContainer = _styledComponents["default"].div(_templateObject3());

exports.ImgContainer = ImgContainer;

var Image = _styledComponents["default"].img(_templateObject4(), (0, _responsive.mobile)({
  height: '40vh'
}));

exports.Image = Image;

var InfoContainer = _styledComponents["default"].div(_templateObject5(), (0, _responsive.mobile)({
  padding: '10px'
}));

exports.InfoContainer = InfoContainer;

var Title = _styledComponents["default"].h1(_templateObject6(), (0, _responsive.laptop)({
  fontSize: '60px'
}));

exports.Title = Title;

var Desc = _styledComponents["default"].p(_templateObject7(), (0, _responsive.laptop)({
  width: '100%',
  fontSize: '25px'
}));

exports.Desc = Desc;

var Discount = _styledComponents["default"].div(_templateObject8());

exports.Discount = Discount;

var Price = _styledComponents["default"].span(_templateObject9());

exports.Price = Price;

var FilterContainer = _styledComponents["default"].div(_templateObject10(), (0, _responsive.laptop)({
  width: '100%'
}));

exports.FilterContainer = FilterContainer;

var Filter = _styledComponents["default"].div(_templateObject11());

exports.Filter = Filter;

var FilterTitle = _styledComponents["default"].span(_templateObject12());

exports.FilterTitle = FilterTitle;

var FilterColor = _styledComponents["default"].div(_templateObject13(), function (props) {
  return props.color;
});

exports.FilterColor = FilterColor;

var FilterSize = _styledComponents["default"].select(_templateObject14());

exports.FilterSize = FilterSize;

var FilterSizeOption = _styledComponents["default"].option(_templateObject15());

exports.FilterSizeOption = FilterSizeOption;

var ErrorContainer = _styledComponents["default"].div(_templateObject16(), (0, _responsive.mobile)({
  width: '100%'
}));

exports.ErrorContainer = ErrorContainer;

var Error = _styledComponents["default"].div(_templateObject17());

exports.Error = Error;

var AddContainer = _styledComponents["default"].div(_templateObject18(), (0, _responsive.laptop)({
  width: '100%'
}));

exports.AddContainer = AddContainer;

var AmountContainer = _styledComponents["default"].div(_templateObject19());

exports.AmountContainer = AmountContainer;

var Amount = _styledComponents["default"].span(_templateObject20());

exports.Amount = Amount;

var Button = _styledComponents["default"].button(_templateObject21());

exports.Button = Button;

var ShippingInfoContainer = _styledComponents["default"].div(_templateObject22(), (0, _responsive.laptop)({
  width: '100%'
}));

exports.ShippingInfoContainer = ShippingInfoContainer;