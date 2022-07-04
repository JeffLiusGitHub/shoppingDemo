"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payment = exports.ContactItem = exports.Right = exports.ListItem = exports.List = exports.Title = exports.Center = exports.SocialIcon = exports.SocialContainer = exports.Desc = exports.Logo = exports.Left = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\twidth: 50%;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tcolor: white;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\talign-items: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tpadding: 20px;\n\t", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\twidth: 50%;\n\tmargin-bottom: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tcolor: white;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin-bottom: 30px;\n\tcolor: white;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tpadding: 20px;\n\t", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color: #", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 20px 0px;\n\tpadding: 0 5px;\n\tfont-size: 18px;\n\tfont-weight: 300;\n\tcolor: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tcolor: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tbackground-color: #232323;\n\t", "\n\tmin-height:258px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), (0, _responsive.tablet)({
  flexDirection: 'column'
}));

exports.Container = Container;

var Left = _styledComponents["default"].div(_templateObject2());

exports.Left = Left;

var Logo = _styledComponents["default"].h1(_templateObject3());

exports.Logo = Logo;

var Desc = _styledComponents["default"].p(_templateObject4());

exports.Desc = Desc;

var SocialContainer = _styledComponents["default"].div(_templateObject5());

exports.SocialContainer = SocialContainer;

var SocialIcon = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.color;
});

exports.SocialIcon = SocialIcon;

var Center = _styledComponents["default"].div(_templateObject7(), (0, _responsive.laptop)({
  display: 'none'
}));

exports.Center = Center;

var Title = _styledComponents["default"].h3(_templateObject8());

exports.Title = Title;

var List = _styledComponents["default"].ul(_templateObject9());

exports.List = List;

var ListItem = _styledComponents["default"].li(_templateObject10());

exports.ListItem = ListItem;

var Right = _styledComponents["default"].div(_templateObject11(), (0, _responsive.tablet)({
  backgroundColor: 'Darkgrey'
}));

exports.Right = Right;

var ContactItem = _styledComponents["default"].div(_templateObject12());

exports.ContactItem = ContactItem;

var Payment = _styledComponents["default"].img(_templateObject13());

exports.Payment = Payment;