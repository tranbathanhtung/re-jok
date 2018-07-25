var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n  line-height: 1.5;\n  color: ', ';\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  z-index: ', ';\n  width: 39rem;\n  max-width: calc(100vw - 3.2rem);\n\n  ', ';\n\n'], ['\n  font-size: 1.4rem;\n  line-height: 1.5;\n  color: ', ';\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  z-index: ', ';\n  width: 39rem;\n  max-width: calc(100vw - 3.2rem);\n\n  ', ';\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   padding: 1.6rem 2.4rem;\n   background: ', ';\n\n   box-shadow: 0 .4rem 1.2rem rgba(0,0,0,.15);\n   border-radius: .4rem;\n   margin-bottom: 1.6rem;\n   position: relative;\n   font-size: 1.4rem;\n   z-index: ', ';\n\n   ', ';\n\n\n\n\n'], ['\n   padding: 1.6rem 2.4rem;\n   background: ', ';\n\n   box-shadow: 0 .4rem 1.2rem rgba(0,0,0,.15);\n   border-radius: .4rem;\n   margin-bottom: 1.6rem;\n   position: relative;\n   font-size: 1.4rem;\n   z-index: ', ';\n\n   ', ';\n\n\n\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\n  ', '\n\n'], ['\n\n  ', '\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n       margin-left: 4.8rem;\n    '], ['\n       margin-left: 4.8rem;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 1.6rem;\n  color: ', ';\n  margin-bottom: .8rem;\n  line-height: 2.4rem;\n  display: inline-block;\n'], ['\n  font-size: 1.6rem;\n  color: ', ';\n  margin-bottom: .8rem;\n  line-height: 2.4rem;\n  display: inline-block;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\nfont-size: 1.4rem;\ncolor: ', ';\nline-height: 2.4rem;\n'], ['\nfont-size: 1.4rem;\ncolor: ', ';\nline-height: 2.4rem;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  color: ', ';\n\n  margin-top: 1.6rem;\n  justify-content: flex-end;\n'], ['\n  display: flex;\n  width: 100%;\n  color: ', ';\n\n  margin-top: 1.6rem;\n  justify-content: flex-end;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: absolute;\n  margin-left: -.4rem;\n\n'], ['\n  position: absolute;\n  margin-left: -.4rem;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { defaultEffectRight, defaultEffectLeft, defaultEffectTopCenter, defaultEffectBottomCenter, scaleEffect } from './effect';

export var notifTransition = 'notifTransition';

export var returnEffect = function returnEffect(config) {
  if (config.effect === "default") {
    switch (config.position) {
      case 'topRight':
        return defaultEffectRight;
      case 'topLeft':
        return defaultEffectLeft;
      case 'topCenter':
        return defaultEffectTopCenter;
      case 'bottomRight':
        return defaultEffectRight;
      case 'bottomLeft':
        return defaultEffectLeft;

      case 'bottomCenter':
        return defaultEffectBottomCenter;

      default:
        return defaultEffectRight;

    }
  }
  if (config.effect === "scale") {
    return scaleEffect;
  }
};

export var returnPosition = function returnPosition(config) {
  switch (config.position) {
    case 'topRight':
      return '\n        right: 0;\n        top: 2.4rem;\n        bottom: auto;\n        margin-right: 2.4rem;\n\n      ';
    case 'topLeft':
      return '\n         left: 0;\n         top: 2.4rem;\n         bottom: auto;\n         margin-left: 2.4rem;\n\n       ';
    case 'topCenter':
      return '\n         left: 50%;\n         right: auto\n         top: 2.4rem;\n         bottom: auto;\n         \n\n         transform: translateX(-50%);\n       ';
    case 'bottomRight':
      return '\n         right: 0;\n         top: auto;\n         bottom: 2.4rem;\n         margin-right: 2.4rem;\n\n       ';
    case 'bottomLeft':
      return '\n       left: 0;\n       top: auto;\n       margin-left: 2.4rem;\n\n       bottom: 2.4rem;\n      ';
    case 'bottomCenter':
      return '\n        left: 50%;\n        right: auto\n        top: auto;\n        bottom: 2.4rem;\n        transform: translateX(-50%);\n       ';

    default:
      return '\n       right: 0;\n       top: 2.4rem;\n       bottom: auto;\n       margin-right: 2.4rem;\n\n      ';

  }
};

export var StyledNotificationWrapper = styled.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.zIndex.notification;
}, function (props) {
  return returnPosition(props.config);
});

export var StyledNotification = styled.div(_templateObject2, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return color ? color : theme.background.default;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.zIndex.notification;
}, function (props) {
  return returnEffect(props.config);
});

export var StyledNotificationContent = styled.div(_templateObject3, function (props) {
  return props.hasMedia && css(_templateObject4);
});

export var StyledNotificationTitle = styled.p(_templateObject5, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color ? theme.text.default : theme.text.regular;
});

export var StyledNotificationMessage = styled.p(_templateObject6, function (_ref6) {
  var color = _ref6.color,
      theme = _ref6.theme;
  return color ? theme.text.default : theme.text.secondary;
});

export var StyledNotificationClose = styled.div(_templateObject7, function (_ref7) {
  var color = _ref7.color,
      theme = _ref7.theme;
  return color ? theme.text.default : theme.text.regular;
});

export var StyledNotificationMedia = styled.div(_templateObject8);