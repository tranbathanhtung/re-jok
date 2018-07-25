var _templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n\n"], ["\n  position: relative;\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n     max-width: 25.6rem;\n     position: absolute;\n     display: ", ";\n    ", "\n    top: ", ";\n    left: ", ";\n    z-index: ", ";\n    padding: 1rem 0;\n    background-color: ", ";\n    border: ", ";\n    font-size: 1.4rem;\n    border-radius: .4rem;\n    box-shadow: 0 .5rem 1.2rem rgba(0,0,0,0.15);\n\n"], ["\n     max-width: 25.6rem;\n     position: absolute;\n     display: ", ";\n    ", "\n    top: ", ";\n    left: ", ";\n    z-index: ", ";\n    padding: 1rem 0;\n    background-color: ", ";\n    border: ", ";\n    font-size: 1.4rem;\n    border-radius: .4rem;\n    box-shadow: 0 .5rem 1.2rem rgba(0,0,0,0.15);\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n       animation: ", " .4s;\n      "], ["\n       animation: ", " .4s;\n      "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css, keyframes } from 'styled-components';

var fadeIn = keyframes(_templateObject);

export var StyledDropdownWrapper = styled.div(_templateObject2);

export var StyledDropdown = styled.div(_templateObject3, function (props) {
  return props.open ? "block" : "none";
}, function (props) {
  return props.open && css(_templateObject4, fadeIn);
}, function (props) {
  return props.top + "px";
}, function (props) {
  return props.left + "px";
}, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.dropDown;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background.default;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.primary;
});