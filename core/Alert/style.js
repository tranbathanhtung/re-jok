var _templateObject = _taggedTemplateLiteral(['\n text-align: center;\n position: absolute;\n cursor: pointer;\n height: 1.6rem;\n width: 1.6rem;\n line-height: 1.6rem;\n vertical-align: middle;\n top: 1.6rem;\n right: 1.6rem;\n\n'], ['\n text-align: center;\n position: absolute;\n cursor: pointer;\n height: 1.6rem;\n width: 1.6rem;\n line-height: 1.6rem;\n vertical-align: middle;\n top: 1.6rem;\n right: 1.6rem;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 1rem;\n  height: 1.6rem;\n  width: 1.6rem;\n  line-height: 1.6rem;\n  vertical-align: middle;\n'], ['\n  margin-right: 1rem;\n  height: 1.6rem;\n  width: 1.6rem;\n  line-height: 1.6rem;\n  vertical-align: middle;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1.5rem 3rem 1.5rem 1.5rem;\n  margin-bottom: 2rem;\n  border-radius: .2rem;\n\n  ', ';\n'], ['\n  font-size: 1.4rem;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1.5rem 3rem 1.5rem 1.5rem;\n  margin-bottom: 2rem;\n  border-radius: .2rem;\n\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n  color: ', ';\n  margin-right: 1rem;\n'], ['\n  font-size: 1.4rem;\n  color: ', ';\n  margin-right: 1rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n'], ['\n  font-size: 1.4rem;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

import Icon from '../Icon';

import { shadeColor, hexa } from '../globals';

var returnBoxShadow = function returnBoxShadow(color) {
  return '0 .3rem .5rem -.1rem ' + hexa(color, .2) + ', 0 .6rem 1rem 0 rgba(0, 0, 0, 0.14), 0 .1rem 1.8rem 0 ' + hexa(color, .12);
};

var returnColor = function returnColor(color, background, hasBoxShadow) {
  return '\n    color: ' + color + ';\n    background: ' + shadeColor(background, -5) + ';\n    box-shadow: ' + (hasBoxShadow ? returnBoxShadow(background) : '') + ';\n  ';
};

export var StyledIconClose = styled(Icon)(_templateObject);

export var StyledAlertIcon = styled(Icon)(_templateObject2);

var returnType = function returnType(props) {

  if (!props.color) {
    switch (props.type) {
      case 'none':

        return returnColor(props.theme.text.regular, props.theme.background.paper, props.hasBoxShadow);
      case 'success':

        return returnColor(props.theme.text.default, props.theme.success.main, props.hasBoxShadow);

      case 'info':

        return returnColor(props.theme.text.default, props.theme.info.main, props.hasBoxShadow);

      case 'warning':

        return returnColor(props.theme.text.default, props.theme.warning.main, props.hasBoxShadow);

      case 'error':

        return returnColor(props.theme.text.default, props.theme.error.main, props.hasBoxShadow);

      default:

        return returnColor(props.theme.text.regular, props.theme.background.paper, props.hasBoxShadow);

    }
  } else {
    return '\n    color: ' + props.theme.text.default + ';\n    background: ' + hexa(props.color, .85) + ';\n    box-shadow: ' + (props.hasBoxShadow ? returnBoxShadow(props.color) : '') + ';\n\n\n    ';
  }
};

export var StyledAlert = styled.div(_templateObject3, function (props) {
  return returnType(props);
});

export var StyledAlertTitle = styled.strong(_templateObject4, function (_ref) {
  var theme = _ref.theme,
      hasColor = _ref.hasColor;
  return hasColor ? theme.text.default : theme.text.primary;
});

export var StyledAlertContent = styled.div(_templateObject5);