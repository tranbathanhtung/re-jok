var _templateObject = _taggedTemplateLiteral(['\n0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n'], ['\n0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n'], ['\n0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  content: \'\';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n'], ['\n  content: \'\';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n&::after, &::before{\n  ', ';\n}\n\n&::before{\n      animation: ', ' 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n&::after{\n  animation: ', ' 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      animation-delay: 1.15s;\n\n}\n'], ['\n&::after, &::before{\n  ', ';\n}\n\n&::before{\n      animation: ', ' 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n&::after{\n  animation: ', ' 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      animation-delay: 1.15s;\n\n}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  top: 0;\n  width: ', ';\n  bottom: 0;\n  transition: width .3s linear;\n'], ['\n  top: 0;\n  width: ', ';\n  bottom: 0;\n  transition: width .3s linear;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n  background-color: #ebeef5;\n  line-height: 1.4;\n  ', ';\n  border-radius: 10rem;\n  vertical-align: middle;\n  position: relative;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  z-index: ', ';\n  ', '\n\n'], ['\n  font-size: 1.4rem;\n  background-color: #ebeef5;\n  line-height: 1.4;\n  ', ';\n  border-radius: 10rem;\n  vertical-align: middle;\n  position: relative;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  z-index: ', ';\n  ', '\n\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n         position: fixed;\n         top: 0;\n    '], ['\n         position: fixed;\n         top: 0;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n   border: none;\n   outline: none;\n\n   background: ', ';\n   border-radius: 10rem;\n   color: #fff;\n\n\n   ', ';\n\n\n\n\n\n\n'], ['\n   border: none;\n   outline: none;\n\n   background: ', ';\n   border-radius: 10rem;\n   color: #fff;\n\n\n   ', ';\n\n\n\n\n\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { keyframes, css } from 'styled-components';

var progressBar = keyframes(_templateObject);

var progressBarShort = keyframes(_templateObject2);

var baseProgress = css(_templateObject3);
var returnSize = function returnSize(props) {
  switch (props.size) {
    case 'small':
      return '\n        height: .5rem;\n      ';
    case 'default':
      return '\n        height: 1rem;\n      ';
    case 'medium':
      return '\n        height: 1.4rem;\n      ';
    case 'large':
      return '\n        height: 1.8rem;\n        ';

    default:
      return '\n        height: .5rem;\n      ';

  }
};

var returnIndeterminate = css(_templateObject4, baseProgress, progressBar, progressBarShort);

var returnDeterminate = css(_templateObject5, function (_ref) {
  var percent = _ref.percent;
  return percent + '%';
});

export var StyledProgressWrapper = styled.div(_templateObject6, function (props) {
  return returnSize(props);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.zIndex.progress;
}, function (props) {
  return props.fixed && css(_templateObject7);
});

export var StyledProgress = styled.div(_templateObject8, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return color ? color : theme.primary.main;
}, function (props) {
  return props.indeterminate ? returnIndeterminate : returnDeterminate;
});