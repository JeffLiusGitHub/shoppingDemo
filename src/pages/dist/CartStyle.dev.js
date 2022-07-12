"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Button = exports.SummaryItemPrice = exports.SummaryItemText = exports.SummaryItem = exports.SummaryTitle = exports.Summary = exports.Hr = exports.DeleteContent = exports.DeleteContainer = exports.ProductButton = exports.ProductPrice = exports.ProductAmount = exports.ProductAmountContainer = exports.PriceDetail = exports.ProductSize = exports.ProductColor = exports.ProductId = exports.ProductName = exports.Details = exports.Image = exports.ProductDetail = exports.Product = exports.Info = exports.Bottom = exports.TopText = exports.TopTexts = exports.TopButton = exports.Top = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\tgrid-template-rows: auto auto 1fr auto;\n\tmin-height: 100vh;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tpadding: 10px;\n\tbackground-color: black;\n\tcolor: white;\n\tfont-weight: 600;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 30px 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-weight: ", ";\n\tfont-size: ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 200;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tborder: 0.5px solid lightgray;\n\tborder-radius: 10px;\n\tpadding: 20px;\n\theight: 50vh;\n\tmin-height: 400px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: #eee;\n\tborder: none;\n\theight: 1px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tmargin-bottom: 5px;\n\tcursor: pointer;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 30px;\n\tfont-weight: 200;\n\t", "\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 24px;\n\tmargin: 5px;\n\t", "\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 20px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\twidth: 200px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tflex: 2;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tposition: relative;\n\tjustify-content: space-evenly;\n\t:before {\n\t\tcontent: ' ';\n\t\tborder-bottom-style: dotted;\n\t\tborder-color: lightgray;\n\t\tborder-width: 1px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 90%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t}\n\n\t", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tflex: 3;\n\tflex-wrap: wrap;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\ttext-decoration: underline;\n\tmargin: 0px 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 10px;\n\tfont-weight: 600;\n\tcursor: pointer;\n\tborder: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\t", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 300;\n\ttext-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 20px;\n\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), (0, _responsive.mobile)({
  padding: '10px'
}));

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].h1(_templateObject2());

exports.Title = Title;

var Top = _styledComponents["default"].div(_templateObject3());

exports.Top = Top;

var TopButton = _styledComponents["default"].button(_templateObject4(), function (props) {
  return props.type === 'filled' && 'none';
}, function (props) {
  return props.type === 'filled' ? 'black' : 'transparent';
}, function (props) {
  return props.type === 'filled' && 'white';
}, (0, _responsive.mobile)({
  fontSize: '10px'
}));

exports.TopButton = TopButton;

var TopTexts = _styledComponents["default"].div(_templateObject5(), (0, _responsive.tablet)({
  display: 'none'
}));

exports.TopTexts = TopTexts;

var TopText = _styledComponents["default"].span(_templateObject6());

exports.TopText = TopText;

var Bottom = _styledComponents["default"].div(_templateObject7(), (0, _responsive.tablet)({
  flexDirection: 'column'
}));

exports.Bottom = Bottom;

var Info = _styledComponents["default"].div(_templateObject8());

exports.Info = Info;

var Product = _styledComponents["default"].div(_templateObject9(), (0, _responsive.tablet)({
  flexDirection: 'column'
}));

exports.Product = Product;

var ProductDetail = _styledComponents["default"].div(_templateObject10());

exports.ProductDetail = ProductDetail;

var Image = _styledComponents["default"].img(_templateObject11());

exports.Image = Image;

var Details = _styledComponents["default"].div(_templateObject12());

exports.Details = Details;

var ProductName = _styledComponents["default"].span(_templateObject13());

exports.ProductName = ProductName;

var ProductId = _styledComponents["default"].span(_templateObject14());

exports.ProductId = ProductId;

var ProductColor = _styledComponents["default"].div(_templateObject15(), function (props) {
  return props.color;
});

exports.ProductColor = ProductColor;

var ProductSize = _styledComponents["default"].span(_templateObject16());

exports.ProductSize = ProductSize;

var PriceDetail = _styledComponents["default"].div(_templateObject17());

exports.PriceDetail = PriceDetail;

var ProductAmountContainer = _styledComponents["default"].div(_templateObject18());

exports.ProductAmountContainer = ProductAmountContainer;

var ProductAmount = _styledComponents["default"].div(_templateObject19(), (0, _responsive.mobile)({
  margin: '5px 15px'
}));

exports.ProductAmount = ProductAmount;

var ProductPrice = _styledComponents["default"].div(_templateObject20(), (0, _responsive.mobile)({
  marginBottom: '20px'
}));

exports.ProductPrice = ProductPrice;

var ProductButton = _styledComponents["default"].button(_templateObject21());

exports.ProductButton = ProductButton;

var DeleteContainer = _styledComponents["default"].div(_templateObject22());

exports.DeleteContainer = DeleteContainer;

var DeleteContent = _styledComponents["default"].p(_templateObject23());

exports.DeleteContent = DeleteContent;

var Hr = _styledComponents["default"].hr(_templateObject24());

exports.Hr = Hr;

var Summary = _styledComponents["default"].div(_templateObject25());

exports.Summary = Summary;

var SummaryTitle = _styledComponents["default"].h1(_templateObject26());

exports.SummaryTitle = SummaryTitle;

var SummaryItem = _styledComponents["default"].div(_templateObject27(), function (props) {
  return props.type === 'total' && '500';
}, function (props) {
  return props.type === 'total' && '24px';
});

exports.SummaryItem = SummaryItem;

var SummaryItemText = _styledComponents["default"].span(_templateObject28());

exports.SummaryItemText = SummaryItemText;

var SummaryItemPrice = _styledComponents["default"].span(_templateObject29());

exports.SummaryItemPrice = SummaryItemPrice;

var Button = _styledComponents["default"].button(_templateObject30());

exports.Button = Button;

var Container = _styledComponents["default"].div(_templateObject31());

exports.Container = Container;