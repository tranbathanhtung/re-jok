var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: auto;\n  margin-left: auto;\n  flex: 1;\n  max-width: 100%;\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: auto;\n  margin-left: auto;\n  flex: 1;\n  max-width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n\n'], ['\n  ', ';\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n  margin-left: auto;\n'], ['\n  ', ';\n  margin-left: auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n\n'], ['\n  position: absolute;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    margin-left: auto;\n'], ['\n    margin-left: auto;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  min-height: 6.4rem;\n  font-size: 1.4rem;\n\n  padding: 1rem 0;\n  z-index: ', ';\n\n\n\n  ', '\n\n  & ', '{\n    display: none;\n  }\n\n  ', '\n\n\n\n'], ['\n  display: flex;\n  position: relative;\n  min-height: 6.4rem;\n  font-size: 1.4rem;\n\n  padding: 1rem 0;\n  z-index: ', ';\n\n\n\n  ', '\n\n  & ', '{\n    display: none;\n  }\n\n  ', '\n\n\n\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n       background: transparent;\n       color: ', ';\n    '], ['\n       background: transparent;\n       color: ', ';\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n\n    background-color: ', ';\n    color: ', ';\n    \n    ', '\n\n    '], ['\n\n    background-color: ', ';\n    color: ', ';\n    \n    ', '\n\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n       box-shadow: ', ';\n      '], ['\n       box-shadow: ', ';\n      ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    @media (max-width: ', 'px) {\n       & ', '{\n         display: none;\n       }\n       & ', '{\n         display: none;\n       }\n\n       & ', '{\n         display: block;\n       }\n    }\n    '], ['\n    @media (max-width: ', 'px) {\n       & ', '{\n         display: none;\n       }\n       & ', '{\n         display: none;\n       }\n\n       & ', '{\n         display: block;\n       }\n    }\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

import { hexa } from '../globals';

var returnBoxShadow = function returnBoxShadow(color) {
  return '0 .4rem 2rem 0 rgba(0,0,0,0.14), 0 .7rem 1.2rem -.5rem ' + hexa(color, 0.46);
};

export var StyledNavBarContainer = styled.div(_templateObject);

var baseNavBar = css(_templateObject2);

export var StyledNavBarLeft = styled.div(_templateObject3, baseNavBar);

export var StyledNavBarRight = styled.div(_templateObject4, baseNavBar);

export var StyledNavBarCenter = styled.div(_templateObject5);

export var StyledNavBarRes = styled.div(_templateObject6);

export var StyledNavBar = styled.nav(_templateObject7, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.nav;
}, function (props) {
  return props.transparent ? css(_templateObject8, function (_ref2) {
    var theme = _ref2.theme;
    return theme.text.regular;
  }) : css(_templateObject9, function (props) {
    return props.primary ? props.theme.primary.main : props.secondary ? props.theme.secondary.main : props.backgroundColor ? props.backgroundColor : props.theme.background.default;
  }, function (props) {
    return props.backgroundColor || props.primary || props.secondary ? props.theme.text.default : props.theme.text.regular;
  }, function (props) {
    return props.hasBoxShadow && css(_templateObject10, function (props) {
      return props.primary ? returnBoxShadow(props.theme.primary.main, 0.46) : props.secondary ? returnBoxShadow(props.theme.secondary.main, 0.46) : props.backgroundColor ? returnBoxShadow(props.backgroundColor, 0.46) : "0 .4rem 1.8rem 0 rgba(0,0,0,0.12), 0 .7rem 1rem -.5rem rgba(0,0,0,0.15)";
    });
  });
}, StyledNavBarRes, function (props) {
  return typeof props.responsive === "number" && css(_templateObject11, props.responsive, StyledNavBarRight, StyledNavBarCenter, StyledNavBarRes);
});