var _templateObject = _taggedTemplateLiteral(["\nfont-size: 1.4rem;\nposition: relative;\nmax-width: 100%;\ncolor: ", ";\nline-height: 1.5;\nbox-sizing: border-box;\nmargin: 0;\npadding: 0;\n"], ["\nfont-size: 1.4rem;\nposition: relative;\nmax-width: 100%;\ncolor: ", ";\nline-height: 1.5;\nbox-sizing: border-box;\nmargin: 0;\npadding: 0;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n   ", ";\n\n\n"], ["\n   ", ";\n\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  margin-bottom: 1.4rem;\n  clear: both;\n  vertical-align: top;\n\n"], ["\n  ", ";\n  margin-bottom: 1.4rem;\n  clear: both;\n  vertical-align: top;\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 0;\n  font-size: 1.2rem;\n  text-align: left;\n  margin-top: .8rem;\n  min-height: 1em;\n\n  line-height: 1em;\n"], ["\n  color: ", ";\n  margin: 0;\n  font-size: 1.2rem;\n  text-align: left;\n  margin-top: .8rem;\n  min-height: 1em;\n\n  line-height: 1em;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n\n"], ["\n\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\ntext-align: ", ";\nmargin-bottom: ", ";\nvertical-align: middle;\n\ndisplay: inline-block;\noverflow: hidden;\nfloat: ", ";\nmin-width: 10rem;\nwhite-space: nowrap;\n\n"], ["\ntext-align: ", ";\nmargin-bottom: ", ";\nvertical-align: middle;\n\ndisplay: inline-block;\noverflow: hidden;\nfloat: ", ";\nmin-width: 10rem;\nwhite-space: nowrap;\n\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  color: ", ";\n\n  &::after{\n    content: \":\";\n    margin: 0 .8rem 0 .2rem;\n    position: relative;\n    top: -.5px;\n  }\n  ", "\n\n"], ["\n  font-size: 1.4rem;\n  color: ", ";\n\n  &::after{\n    content: \":\";\n    margin: 0 .8rem 0 .2rem;\n    position: relative;\n    top: -.5px;\n  }\n  ", "\n\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n    &::before{\n      display: inline-block;\n      margin-right: .4rem;\n      content: \"*\";\n      font-family: SimSun;\n      line-height: 1;\n      font-size: 1.4rem;\n      color: #f5222d;\n    }\n    "], ["\n    &::before{\n      display: inline-block;\n      margin-right: .4rem;\n      content: \"*\";\n      font-family: SimSun;\n      line-height: 1;\n      font-size: 1.4rem;\n      color: #f5222d;\n    }\n    "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var baseForm = css(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
});

export var StyledForm = styled.form(_templateObject2, baseForm);

export var StyledFormItem = styled.div(_templateObject3, baseForm);

export var StyledInputHelper = styled.p(_templateObject4, function (_ref2) {
  var theme = _ref2.theme,
      validateStatus = _ref2.validateStatus;
  return validateStatus ? theme[validateStatus].main : theme.text.regular;
});

export var Div = styled.div(_templateObject5);

export var StyledLabelForm = styled.div(_templateObject6, function (props) {
  return props.layout === "horizontal" ? "right" : "left";
}, function (props) {
  return props.layout === "vertical" && ".5rem";
}, function (props) {
  return props.layout === "horizontal" && "left";
});

export var StyledLabel = styled.label(_templateObject7, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text.primary;
}, function (props) {
  return props.required && css(_templateObject8);
});