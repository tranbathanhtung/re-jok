var _templateObject = _taggedTemplateLiteral(['\n0%, 80%, 100% {\n\n transform: scale(0);\n} 40% {\n\n transform: scale(1.0);\n}\n'], ['\n0%, 80%, 100% {\n\n transform: scale(0);\n} 40% {\n\n transform: scale(1.0);\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n\n & > div{\n    ', ';\n    background-color: ', ';\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: ', ' 1.4s ease-in-out 0s infinite both;\n            animation: ', ' 1.4s ease-in-out 0s infinite both;\n }\n'], ['\n\n\n & > div{\n    ', ';\n    background-color: ', ';\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: ', ' 1.4s ease-in-out 0s infinite both;\n            animation: ', ' 1.4s ease-in-out 0s infinite both;\n }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\nanimation-delay: -0.32s !important;\n'], ['\n\nanimation-delay: -0.32s !important;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\nanimation-delay: -0.16s !important;\n'], ['\n\nanimation-delay: -0.16s !important;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  to {transform: rotate(360deg);}\n'], ['\n  to {transform: rotate(360deg);}\n']),
    _templateObject7 = _taggedTemplateLiteral(['\ndisplay: inline-block;\nwidth: ', ';\nheight: ', ';\nmin-width: ', ';\nmin-height: ', ';\nposition: relative;\ncolor: ', ';\n\n  &::before{\n    content: \'\';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: ', ';\n  height: ', ';\n  margin-top: calc(', ' / -2);\n  margin-left: calc(', ' / -2);\n  border-radius: 50%;\n\n  border-top: .2rem solid;\n  border-right: .2rem solid transparent;\n  animation: ', ' .6s linear infinite;\n  }\n'], ['\ndisplay: inline-block;\nwidth: ', ';\nheight: ', ';\nmin-width: ', ';\nmin-height: ', ';\nposition: relative;\ncolor: ', ';\n\n  &::before{\n    content: \'\';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: ', ';\n  height: ', ';\n  margin-top: calc(', ' / -2);\n  margin-left: calc(', ' / -2);\n  border-radius: 50%;\n\n  border-top: .2rem solid;\n  border-right: .2rem solid transparent;\n  animation: ', ' .6s linear infinite;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';

import styled, { keyframes } from 'styled-components';


//Bounce Spinner
//This size  is different size another component
var returnSizeSpinner = function returnSizeSpinner(props) {
  switch (props.size) {
    case 'small':
      return '\n        width: 1.2rem;\n        height: 1.2rem;\n      ';
    case 'default':
      return '\n        width: 1.4rem;\n        height: 1.4rem;\n      ';
    case 'medium':
      return '\n        width: 1.6rem;\n        height: 1.6rem;\n      ';
    case 'large':
      return '\n       width: 2rem;\n       height: 2rem;\n      ';
    default:
      return '\n       width: 1.4rem;\n       height: 1.4rem;\n     ';
  }
};

var skBouncedelay = keyframes(_templateObject);

export var StyledSpinnerContainer = styled.div(_templateObject2, function (props) {
  return returnSizeSpinner(props);
}, function (props) {
  return props.color ? props.color : "rgba(0, 0, 0, .85)";
}, skBouncedelay, skBouncedelay);

export var StyledSpinnerBounce1 = styled.div(_templateObject3);

export var StyledSpinnerBounce2 = styled.div(_templateObject4);
export var StyledSpinnerBounce3 = styled.div(_templateObject5);

//Default Spinner
var spin = keyframes(_templateObject6);

export var StypedSpinnerDefault = styled.div(_templateObject7, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.color ? props.color : "rgba(0, 0, 0, .85)";
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, spin);

export var SpinBounce = function SpinBounce(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      StyledSpinnerContainer,
      props,
      React.createElement(StyledSpinnerBounce1, null),
      React.createElement(StyledSpinnerBounce2, null),
      React.createElement(StyledSpinnerBounce3, null)
    )
  );
};

export var SpinDefault = function SpinDefault(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(StypedSpinnerDefault, props)
  );
};