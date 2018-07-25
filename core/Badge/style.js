var _templateObject = _taggedTemplateLiteral(['\n0%{\n  transform:scale(.9) translateX(-50%);\n\n}\n25%{\n  transform:scale(1.1) translateX(-50%);\n}\n75%{\n  transform:scale(.95) translateX(-50%);\n\n}\n100%{\n  transform:scale(1) translateX(-50%);\n\n}\n'], ['\n0%{\n  transform:scale(.9) translateX(-50%);\n\n}\n25%{\n  transform:scale(1.1) translateX(-50%);\n}\n75%{\n  transform:scale(.95) translateX(-50%);\n\n}\n100%{\n  transform:scale(1) translateX(-50%);\n\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n    line-height: 1.5;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    display: inline-flex;\n    flex-direction: column;\n    line-height: 1;\n    vertical-align: middle;\n    z-index: ', ';\n\n\n\n'], ['\n\n    line-height: 1.5;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    display: inline-flex;\n    flex-direction: column;\n    line-height: 1;\n    vertical-align: middle;\n    z-index: ', ';\n\n\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: ', ';\n  position: absolute;\n  z-index: ', ';\n\n  transform: scale(1) translateX(-50%);\n  top: -1rem;\n  left: ', '\n  height: 2rem;\n  border-radius: 1rem;\n  min-width: 2rem;\n  color: ', ';\n  line-height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap:wrap;\n  padding: ', ';\n  font-size: 1.2rem;\n  font-weight: 400;\n  white-space: nowrap;\n  margin-top: ', ';\n  margin-left:  ', ';\n  animation: ', ' .3s 1 linear both;\n\n\n\n  transform-origin: -10% center;\n\n\n'], ['\n  background: ', ';\n  position: absolute;\n  z-index: ', ';\n\n  transform: scale(1) translateX(-50%);\n  top: -1rem;\n  left: ', '\n  height: 2rem;\n  border-radius: 1rem;\n  min-width: 2rem;\n  color: ', ';\n  line-height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap:wrap;\n  padding: ', ';\n  font-size: 1.2rem;\n  font-weight: 400;\n  white-space: nowrap;\n  margin-top: ', ';\n  margin-left:  ', ';\n  animation: ', ' .3s 1 linear both;\n\n\n\n  transform-origin: -10% center;\n\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { keyframes } from 'styled-components';

var bouncing = keyframes(_templateObject);

export var StyledBadge = styled.span(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.badge;
});

export var StyledSup = styled.sup(_templateObject3, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.theme.primary.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.zIndex.badge;
}, function (props) {
  return props.widthChildren ? props.widthChildren / 10 + 'rem' : 0;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text.default;
}, function (props) {
  return props.count < 10 ? '0 .6rem' : '0 .8rem';
}, function (props) {
  return props.offset[0] / 10 + 'rem';
}, function (props) {
  return props.offset[1] / 10 + 'rem';
}, bouncing);