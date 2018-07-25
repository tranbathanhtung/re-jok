var _templateObject = _taggedTemplateLiteral(['\n text-align: center;\n position: relative;\n cursor: pointer;\n height: 1.6rem;\n width: 0;\n line-height: 1.6rem;\n vertical-align: middle;\n top: -.1rem;\n right: -.5rem;\n opacity: 0;\n\n\n transition: all .2s;\n\n'], ['\n text-align: center;\n position: relative;\n cursor: pointer;\n height: 1.6rem;\n width: 0;\n line-height: 1.6rem;\n vertical-align: middle;\n top: -.1rem;\n right: -.5rem;\n opacity: 0;\n\n\n transition: all .2s;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  height: ', ';\n  line-height: ', ';\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  padding: 0 1.1rem;\n  margin-right: .8rem;\n  margin-bottom: .8rem;\n  background-color: ', ';\n  border: .1rem solid transparent;\n  border-radius: .2rem;\n  color: ', ';\n  cursor: pointer;\n  font-size: ', ';\n  position: relative;\n  transition: all .2s;\n\n  &:hover{\n    color: ', ';\n    ', '\n  }\n'], ['\n  display: inline-flex;\n  height: ', ';\n  line-height: ', ';\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  padding: 0 1.1rem;\n  margin-right: .8rem;\n  margin-bottom: .8rem;\n  background-color: ', ';\n  border: .1rem solid transparent;\n  border-radius: .2rem;\n  color: ', ';\n  cursor: pointer;\n  font-size: ', ';\n  position: relative;\n  transition: all .2s;\n\n  &:hover{\n    color: ', ';\n    ', '\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n         padding-right: 1.4rem;\n         & ', '{\n           width: 1.6rem;\n           opacity: 1;\n           color: ', ';\n         }\n      '], ['\n         padding-right: 1.4rem;\n         & ', '{\n           width: 1.6rem;\n           opacity: 1;\n           color: ', ';\n         }\n      ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { shadeColor } from '../globals';
import Icon from '../Icon';

export var StyledIconClose = styled(Icon)(_templateObject);

export var StyledTag = styled.span(_templateObject2, function (props) {
  return props.theme.size[props.size].height;
}, function (props) {
  return props.theme.size[props.size].height;
}, function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color ? color : shadeColor(theme.background.paper, -5);
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return color ? theme.text.default : theme.text.secondary;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return color ? theme.text.default : theme.text.regular;
}, function (props) {
  return props.closable && css(_templateObject3, StyledIconClose, function (_ref4) {
    var color = _ref4.color,
        theme = _ref4.theme;
    return color && theme.text.default;
  });
});