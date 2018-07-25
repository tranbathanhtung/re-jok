var _templateObject = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  border: 0 none;\n  padding: 0 1rem;\n  background: ", ";\n  color: ", " ;\n  border: ", ";\n  transition: .2s ease-in-out;\n  transition-property: color,background-color,border;\n  height: 3.2rem;\n  vertical-align: middle;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: .2rem;\n\n  cursor: ", ";\n\n  &:hover{\n    border-color: ", " ;\n\n\n  }\n\n  &:focus{\n    outline: none;\n\n  }\n"], ["\n  max-width: 100%;\n  width: 100%;\n  border: 0 none;\n  padding: 0 1rem;\n  background: ", ";\n  color: ", " ;\n  border: ", ";\n  transition: .2s ease-in-out;\n  transition-property: color,background-color,border;\n  height: 3.2rem;\n  vertical-align: middle;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: .2rem;\n\n  cursor: ", ";\n\n  &:hover{\n    border-color: ", " ;\n\n\n  }\n\n  &:focus{\n    outline: none;\n\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\n"], ["\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

export var StyledSelect = styled.select(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.background.default;
}, function (_ref2) {
  var validateStatus = _ref2.validateStatus,
      theme = _ref2.theme;
  return validateStatus ? "" + theme[validateStatus].main : theme.text.regular;
}, function (_ref3) {
  var validateStatus = _ref3.validateStatus,
      theme = _ref3.theme;
  return validateStatus ? "1px solid " + theme[validateStatus].main : "1px solid " + theme.border.primary;
}, function (props) {
  return props.disabled && "not-allowed";
}, function (_ref4) {
  var validateStatus = _ref4.validateStatus,
      theme = _ref4.theme;
  return validateStatus ? "" + theme[validateStatus].main : "#c0c4cc";
});

export var StyledOption = styled.option(_templateObject2);