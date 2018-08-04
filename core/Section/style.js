var _templateObject = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  background-color: ", ";\n  ", "\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n\n  &:after, &:before {\n    content: \"\";\n    display: table;\n  }\n\n  &:after{\n    clear: both;\n  }\n\n  @media (max-width: 960px) {\n     padding-top: 7rem;\n     padding-bottom: 7rem;\n  }\n"], ["\n  font-size: 1.4rem;\n  background-color: ", ";\n  ", "\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n\n  &:after, &:before {\n    content: \"\";\n    display: table;\n  }\n\n  &:after{\n    clear: both;\n  }\n\n  @media (max-width: 960px) {\n     padding-top: 7rem;\n     padding-bottom: 7rem;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n       color: ", ";\n\n       background-color: ", ";\n\n    "], ["\n       color: ", ";\n\n       background-color: ", ";\n\n    "]),
    _templateObject3 = _taggedTemplateLiteral(["\n      background-image: url(", ");\n      background-size: cover;\n      color: ", ";\n      background-position: 50% 50%;\n      background-repeat: no-repeat;\n      height: auto;\n    "], ["\n      background-image: url(", ");\n      background-size: cover;\n      color: ", ";\n      background-position: 50% 50%;\n      background-repeat: no-repeat;\n      height: auto;\n    "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

export var StyledSection = styled.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.background.default;
}, function (props) {
  return props.type === "default" ? css(_templateObject2, function (_ref2) {
    var theme = _ref2.theme;
    return theme.text.regular;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.background.default;
  }) : props.type === "background" && props.backgroundUrl ? css(_templateObject3, props.backgroundUrl, function (_ref4) {
    var theme = _ref4.theme;
    return theme.text.default;
  }) : null;
});