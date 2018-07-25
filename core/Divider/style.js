var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  height: .1rem;\n  width: 100%;\n  margin: 1.6rem 0;\n  clear: both;\n"], ["\n  display: block;\n  height: .1rem;\n  width: 100%;\n  margin: 1.6rem 0;\n  clear: both;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 .8rem;\n  display: inline-block;\n  height: 1rem;\n  width: .1rem;\n\n"], ["\n  margin: 0 .8rem;\n  display: inline-block;\n  height: 1rem;\n  width: .1rem;\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n\n  ", ";\n\n  vertical-align: middle;\n  position: relative;\n  top: -.06em;\n\n  ", "\n\n\n\n"], ["\n\n  ", ";\n\n  vertical-align: middle;\n  position: relative;\n  top: -.06em;\n\n  ", "\n\n\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    font-size: 1.4rem;\n    line-height: 1.5;\n    color: ", ";\n    box-sizing: border-box;\n\n    list-style: none;\n    background: ", ";\n    ", "\n    "], ["\n    font-size: 1.4rem;\n    line-height: 1.5;\n    color: ", ";\n    box-sizing: border-box;\n\n    list-style: none;\n    background: ", ";\n    ", "\n    "]),
    _templateObject5 = _taggedTemplateLiteral(["\n      background: none;\n      border-top: ", ";\n      "], ["\n      background: none;\n      border-top: ", ";\n      "]),
    _templateObject6 = _taggedTemplateLiteral(["\n    display: table;\n    white-space: nowrap;\n    text-align: center;\n    background: transparent;\n    font-weight: 500;\n    color: ", ";\n    font-size: 1.6rem;\n    margin: 1.6rem 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    line-height: 1.5;\n            &:before{\n              content: \"\";\n              display: table-cell;\n              position: relative;\n              top: 50%;\n              width: 50%;\n              border-top: ", ";\n              transform: translateY(50%);\n             ", "\n               }\n            &::after{\n              content: \"\";\n              display: table-cell;\n              position: relative;\n              top: 50%;\n              width: 50%;\n              border-top: ", ";\n              transform: translateY(50%);\n              ", "\n            }\n    "], ["\n    display: table;\n    white-space: nowrap;\n    text-align: center;\n    background: transparent;\n    font-weight: 500;\n    color: ", ";\n    font-size: 1.6rem;\n    margin: 1.6rem 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    line-height: 1.5;\n            &:before{\n              content: \"\";\n              display: table-cell;\n              position: relative;\n              top: 50%;\n              width: 50%;\n              border-top: ", ";\n              transform: translateY(50%);\n             ", "\n               }\n            &::after{\n              content: \"\";\n              display: table-cell;\n              position: relative;\n              top: 50%;\n              width: 50%;\n              border-top: ", ";\n              transform: translateY(50%);\n              ", "\n            }\n    "]),
    _templateObject7 = _taggedTemplateLiteral(["\n\n                          width: 5%;\n                          "], ["\n\n                          width: 5%;\n                          "]),
    _templateObject8 = _taggedTemplateLiteral(["\n\n                             width: 95%;\n                           "], ["\n\n                             width: 95%;\n                           "]),
    _templateObject9 = _taggedTemplateLiteral(["\n                      width: 95%;\n                          "], ["\n                      width: 95%;\n                          "]),
    _templateObject10 = _taggedTemplateLiteral(["\n                      width: 5%;\n                       "], ["\n                      width: 5%;\n                       "]),
    _templateObject11 = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 0 2.4rem;\n  font-size: 1.4rem;\n  "], ["\n  display: inline-block;\n  padding: 0 2.4rem;\n  font-size: 1.4rem;\n  "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var baseDividerHorizontal = css(_templateObject);

export var baseDividerVertical = css(_templateObject2);

export var StyledDivider = styled.div(_templateObject3, function (props) {
  return props.type === "vertical" ? baseDividerVertical : baseDividerHorizontal;
}, function (props) {
  return !props.hasChild || props.type === "vertical" ? css(_templateObject4, function (_ref) {
    var theme = _ref.theme;
    return theme.text.regular;
  }, function (props) {
    return props.theme.border.primary;
  }, function (props) {
    return props.dashed && css(_templateObject5, function (props) {
      return ".1rem solid " + props.theme.border.primary;
    });
  }) : css(_templateObject6, function (_ref2) {
    var theme = _ref2.theme;
    return theme.text.primary;
  }, function (props) {
    return ".1rem solid " + props.theme.border.primary;
  }, function (props) {
    return props.textPosition === "left" ? css(_templateObject7) : props.textPosition === "right" ? css(_templateObject8) : null;
  }, function (props) {
    return ".1rem solid " + props.theme.border.primary;
  }, function (props) {
    return props.textPosition === "left" ? css(_templateObject9) : props.textPosition === "right" ? css(_templateObject10) : null;
  });
});
export var StyledDividerContent = styled.div(_templateObject11);