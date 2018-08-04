var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    border: none;\n    text-decoration: none;\n    text-align: center;\n\n    font-size: ', ';\n\n\n      div + span,\n      span + span {\n        margin: 0 .8rem;\n      }\n\n\n\n\n// =======================Button=====================\n\n\n'], ['\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    border: none;\n    text-decoration: none;\n    text-align: center;\n\n    font-size: ', ';\n\n\n      div + span,\n      span + span {\n        margin: 0 .8rem;\n      }\n\n\n\n\n// =======================Button=====================\n\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n&:hover {\n    transform: translateY(-.3rem);\n    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);\n\n    &::after {\n        transform: scaleX(1.4) scaleY(1.6);\n        opacity: 0;\n    }\n}\n\n\n&:active {\n    outline: none;\n    transform: translateY(-.1rem);\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);\n}\n'], ['\n&:hover {\n    transform: translateY(-.3rem);\n    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);\n\n    &::after {\n        transform: scaleX(1.4) scaleY(1.6);\n        opacity: 0;\n    }\n}\n\n\n&:active {\n    outline: none;\n    transform: translateY(-.1rem);\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n&:hover{\n  border-color:', ';\n  box-shadow: ', ';\n\n}\n\n\n&:active{\n  box-shadow: -.1rem .1rem .4rem rgba(0, 0, 0, 0.4);\n}\n'], ['\n&:hover{\n  border-color:', ';\n  box-shadow: ', ';\n\n}\n\n\n&:active{\n  box-shadow: -.1rem .1rem .4rem rgba(0, 0, 0, 0.4);\n}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n\n\n\n  background-color: ', ';\n\n  color: ', ';\n\n    width: ', ';\n\n\n  border: .1rem solid transparent;\n  border-color: ', ';\n\n\n  ', '\n\n     transition: all .2s;\n', '\n\n&::before {\nposition: absolute;\ntop: -1px;\nleft: -1px;\nbottom: -1px;\nright: -1px;\nbackground: #fff;\nopacity: .35;\ncontent: "";\nborder-radius: inherit;\nz-index: 1;\ntransition: opacity .2s;\npointer-events: none;\ndisplay: ', ';\n}\n\n', '\n\n'], ['\n  ', '\n\n\n\n  background-color: ', ';\n\n  color: ', ';\n\n    width: ', ';\n\n\n  border: .1rem solid transparent;\n  border-color: ', ';\n\n\n  ', '\n\n     transition: all .2s;\n', '\n\n&::before {\nposition: absolute;\ntop: -1px;\nleft: -1px;\nbottom: -1px;\nright: -1px;\nbackground: #fff;\nopacity: .35;\ncontent: "";\nborder-radius: inherit;\nz-index: 1;\ntransition: opacity .2s;\npointer-events: none;\ndisplay: ', ';\n}\n\n', '\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    padding: ', ';\n    border-radius: ', ';\n    line-height: ', ';\n\n      '], ['\n    padding: ', ';\n    border-radius: ', ';\n    line-height: ', ';\n\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      width: ', ';\n      height: ', ';\n      border-radius: 50%;\n      padding: 0;\n    '], ['\n      width: ', ';\n      height: ', ';\n      border-radius: 50%;\n      padding: 0;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        border-radius: 10rem;\n        padding: ', ';\n        line-height: ', ';\n    '], ['\n        border-radius: 10rem;\n        padding: ', ';\n        line-height: ', ';\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    &:hover{\n      background-color: ', ';\n\n    }\n    '], ['\n    &:hover{\n      background-color: ', ';\n\n    }\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n  background-color: #fff;\n  border-color: ', ';\n  color: ', ';\n\n  ', '\n\n    ', '\n\n\n\n'], ['\n  background-color: #fff;\n  border-color: ', ';\n  color: ', ';\n\n  ', '\n\n    ', '\n\n\n\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n       &:hover{\n            border-color: ', ';\n\n            color: ', ';\n       }\n     '], ['\n       &:hover{\n            border-color: ', ';\n\n            color: ', ';\n       }\n     ']),
    _templateObject11 = _taggedTemplateLiteral(['\n         &:hover{\n           background-color: ', ';\n            color: ', ';\n         }\n         '], ['\n         &:hover{\n           background-color: ', ';\n            color: ', ';\n         }\n         ']),
    _templateObject12 = _taggedTemplateLiteral(['\n   border: none;\n   color: ', ';\n   width: ', ';\n   height: ', ';\n   border-radius: 50%;\n   padding: 0;\n   background-color: transparent;\n   &:hover{\n        border-color: ', ';\n\n        color: ', ';\n   }\n\n'], ['\n   border: none;\n   color: ', ';\n   width: ', ';\n   height: ', ';\n   border-radius: 50%;\n   padding: 0;\n   background-color: transparent;\n   &:hover{\n        border-color: ', ';\n\n        color: ', ';\n   }\n\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  &:before{\n    content: "";\nposition: absolute;\nbottom: 0;\nleft: 0;\nright: 100%;\nborder-bottom: .1rem solid #222;\ntransition: right .3s ease-out;\n  }\n  &:hover:before{\n    right: 0;\n  }\n'], ['\n  &:before{\n    content: "";\nposition: absolute;\nbottom: 0;\nleft: 0;\nright: 100%;\nborder-bottom: .1rem solid #222;\ntransition: right .3s ease-out;\n  }\n  &:hover:before{\n    right: 0;\n  }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n ', '\n letter-spacing: 0.08rem;\n background: transparent;\n background-image: none;\n\n color: ', ';\n\n padding: ', ';\n &:hover{\n\n   color: ', ';\n\n    border-color: transparent;\n\n }\n &:active{\n   color: ', ';\nborder-color: transparent;\n }\n\n', '\n\n\n\n'], ['\n ', '\n letter-spacing: 0.08rem;\n background: transparent;\n background-image: none;\n\n color: ', ';\n\n padding: ', ';\n &:hover{\n\n   color: ', ';\n\n    border-color: transparent;\n\n }\n &:active{\n   color: ', ';\nborder-color: transparent;\n }\n\n', '\n\n\n\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  display: block;\n  flex: 0 0 auto;\n  line-height: inherit;\n  color: inherit;\n  align-self: center;\n  margin: auto;\n'], ['\n  display: block;\n  flex: 0 0 auto;\n  line-height: inherit;\n  color: inherit;\n  align-self: center;\n  margin: auto;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  to {transform: rotate(360deg);}\n'], ['\n  to {transform: rotate(360deg);}\n']),
    _templateObject17 = _taggedTemplateLiteral(['\ndisplay: inline-block;\nwidth: ', ';\nheight: ', ';\nmin-width: ', ';\nmin-height: ', ';\nposition: ', ';\ncolor: inherit;\nflex: 0 0 ', ';\norder: ', ';\n  &::before{\n    content: \'\';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: ', ';\n  height: ', ';\n  margin-top: calc(', ' / -2);\n  margin-left: calc(', ' / -2);\n  border-radius: 50%;\n  border-color: ', ';\n  border-top: .2rem solid;\n  border-right: .2rem solid transparent;\n  animation: ', ' .6s linear infinite;\n  }\n'], ['\ndisplay: inline-block;\nwidth: ', ';\nheight: ', ';\nmin-width: ', ';\nmin-height: ', ';\nposition: ', ';\ncolor: inherit;\nflex: 0 0 ', ';\norder: ', ';\n  &::before{\n    content: \'\';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: ', ';\n  height: ', ';\n  margin-top: calc(', ' / -2);\n  margin-left: calc(', ' / -2);\n  border-radius: 50%;\n  border-color: ', ';\n  border-top: .2rem solid;\n  border-right: .2rem solid transparent;\n  animation: ', ' .6s linear infinite;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css, keyframes } from 'styled-components';

import { hexa, shadeColor } from '../globals';

var returnBoxShadow = function returnBoxShadow(color) {

  return '0 1.4rem 2.6rem -1.2rem ' + hexa(color, 0.42) + ', 0 .4rem 2.3rem 0 rgba(0,0,0,0.12), 0 .8rem 1rem -.5rem ' + hexa(color, 0.2);
};

export var baseButton = css(_templateObject, function (props) {
  return props.theme.size[props.size].fontSize;
});
var classicAnimated = css(_templateObject2);

var basicAnimated = css(_templateObject3, function (props) {
  return props.backgroundColor ? hexa(props.backgroundColor, 0.9) : props.primary ? hexa(props.theme.primary.main, 0.9) : props.secondary ? hexa(props.theme.secondary.main, 0.9) : "#fff";
}, function (props) {
  return props.backgroundColor ? returnBoxShadow(props.backgroundColor) : props.primary ? returnBoxShadow(props.theme.primary.main) : props.secondary ? returnBoxShadow(props.theme.secondary.main) : "0 1.4rem 2.6rem -1.2rem rgba(0, 0, 0, 0.42), 0 .4rem 2.3rem 0 rgba(0,0,0,0.12), 0 .8rem 1rem -.5rem rgba(0, 0, 0, 0.2)";
});

var Btn = styled.button.attrs({
  href: function href(props) {
    return props.hrefString ? props.hrefString : null;
  },
  type: function type(props) {
    return props.tag === "button" ? props.rule : null;
  },
  disabled: function disabled(props) {
    return props.disabled || props.loading;
  }
})(_templateObject4, baseButton, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "#fff";
}, function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  return props.backgroundColor || props.primary || props.secondary ? theme.text.default : "rgba(0, 0, 0, .68)";
}, function (props) {
  return props.fullWidth && props.shape !== "circle" ? "100%" : "unset";
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "#d9d9d9";
}, function (props) {
  return !props.shape ? css(_templateObject5, function (props) {
    return props.theme.size[props.size].padding;
  }, function (props) {
    return props.theme.size[props.size].borderRadius;
  }, function (props) {
    return props.theme.size[props.size].lineHeight;
  }) : props.shape === "circle" && props.variant !== 'icon' ? css(_templateObject6, function (props) {
    return props.theme.size[props.size].width;
  }, function (props) {
    return props.theme.size[props.size].height;
  }) : css(_templateObject7, function (props) {
    return props.theme.size[props.size].padding;
  }, function (props) {
    return props.theme.size[props.size].lineHeight;
  });
}, function (props) {
  return props.variant === 'icon' ? null : props.variant === "outline" ? null : css(_templateObject8, function (props) {
    return props.backgroundColor ? hexa(props.backgroundColor, 0.9) : props.primary ? hexa(props.theme.primary.main, 0.9) : props.secondary ? hexa(props.theme.secondary.main, 0.9) : "#fff";
  });
}, function (props) {
  return props.disabled || props.loading ? "block" : 'none';
}, function (props) {
  return props.variant === "raised" ? !props.animated && props.hasBoxShadow ? basicAnimated : props.animated === "classic" ? classicAnimated : null : null;
});

//==================== Outline Button ====================
export { Btn };
var OutlineBtn = Btn.extend(_templateObject9, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "rgba(0,0,0,.16)";
}, function (_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['theme']);

  return props.backgroundColor ? props.backgroundColor : props.primary ? theme.primary.main : props.secondary ? theme.secondary.main : "rgba(0, 0, 0, .68)";
}, function (props) {
  return props.variant === "outline" ? css(_templateObject10, function (props) {
    return props.backgroundColor ? shadeColor(props.backgroundColor, -5) : props.primary ? shadeColor(props.theme.primary.main, -5) : props.secondary ? shadeColor(props.theme.secondary.main, -5) : "rgba(0,0,0,.54)";
  }, function (props) {
    return props.backgroundColor ? shadeColor(props.backgroundColor, -5) : props.primary ? shadeColor(props.theme.primary.main, -5) : props.secondary ? shadeColor(props.theme.secondary.main, -5) : "rgba(0, 0, 0, .68)";
  }) : props.variant === "inverted" ? css(_templateObject11, function (props) {
    return props.backgroundColor ? props.backgroundColor : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "rgba(0,0,0,.54)";
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.text.default;
  }) : null;
}, function (props) {
  return props.hasBoxShadow ? basicAnimated : null;
});

//=================== Icon Button =======================
export { OutlineBtn };
export var IconBtn = Btn.extend(_templateObject12, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "rgba(0, 0, 0, .68)";
}, function (props) {
  return props.theme.size[props.size].width;
}, function (props) {
  return props.theme.size[props.size].height;
}, function (props) {
  return props.backgroundColor ? shadeColor(props.backgroundColor, -15) : props.primary ? shadeColor(props.theme.primary.main, -15) : props.secondary ? shadeColor(props.theme.secondary.main, -15) : "rgba(0,0,0,.54)";
}, function (props) {
  return props.backgroundColor ? shadeColor(props.backgroundColor, -15) : props.primary ? shadeColor(props.theme.primary.main, -15) : props.secondary ? shadeColor(props.theme.secondary.main, -15) : "rgba(0, 0, 0, .68)";
});

//==================== Text Button =======================

var animationTextButton = css(_templateObject13);

export var TextBtn = styled.button.attrs({
  href: function href(props) {
    return props.hrefString ? props.hrefString : null;
  },
  type: function type(props) {
    return props.tag === "button" ? props.rule : null;
  },
  disabled: function disabled(props) {
    return props.disabled || props.loading;
  }
})(_templateObject14, baseButton, function (props) {
  return props.color ? props.color : props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : "rgba(0, 0, 0, .68)";
}, function (props) {
  return props.theme.size[props.size].padding;
}, function (props) {
  return props.colorWhenHover ? hexa(props.colorWhenHover) : props.color ? hexa(props.color, 0.8) : props.primary ? hexa(props.theme.primary.main, 0.8) : props.secondary ? hexa(props.theme.secondary.main, 0.8) : "rgba(0, 0, 0, .85)";
}, function (props) {
  return props.colorWhenHover ? hexa(props.colorWhenHover) : props.color ? hexa(props.color, 0.8) : props.primary ? hexa(props.theme.primary.main, 0.8) : props.secondary ? hexa(props.theme.secondary.main, 0.8) : "rgba(0, 0, 0, .85)";
}, function (props) {
  return props.hoverable && animationTextButton;
});

// =================== Sub Component for Button ========================

export var Label = styled.span(_templateObject15);

var spin = keyframes(_templateObject16);

export var SpinnerButton = styled.div(_templateObject17, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.shape === "circle" ? "" : "relative";
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.shape !== "circle" ? props.iconPosition === "left" ? 0 : 1 : 0;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.primary || props.secondary ? "#fff" : "#d9d9d9";
}, spin);