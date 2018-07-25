var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  text-transform: none;\n  transition: all 0.216s ease;\n\n\n'], ['\n  position: absolute;\n  opacity: 0;\n  text-transform: none;\n  transition: all 0.216s ease;\n\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   position: relative;\n   font-size: 1.4rem;\n   line-height: 1.5;\n   color: ', ';\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n   list-style: none;\n   display: block;\n   visibility: visible;\n\n   &::after{\n     ', ';\n     max-width: 25rem;\n     min-width: 4rem;\n     padding: .6rem .8rem;\n     color: ', ';\n     text-align: left;\n     z-index: ', ';\n\n\n\n     text-decoration: none;\n     background-color: ', ';\n     border-radius: .4rem;\n     box-shadow: 0 .2rem .8rem rgba(0,0,0,.15);\n     min-height: 3.2rem;\n     content: ', ';;\n\n\n\n\n   }\n\n   &::before{\n     ', ';\n     content: "";\n     border-width: .5rem;\n     border-image: initial;\n     width: 0;\n     height: 0;\n     border-color: transparent;\n     border-style: solid;\n     z-index: ', ';\n\n\n\n\n\n   }\n\n   ', '\n\n\n\n\n\n\n'], ['\n   position: relative;\n   font-size: 1.4rem;\n   line-height: 1.5;\n   color: ', ';\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n   list-style: none;\n   display: block;\n   visibility: visible;\n\n   &::after{\n     ', ';\n     max-width: 25rem;\n     min-width: 4rem;\n     padding: .6rem .8rem;\n     color: ', ';\n     text-align: left;\n     z-index: ', ';\n\n\n\n     text-decoration: none;\n     background-color: ', ';\n     border-radius: .4rem;\n     box-shadow: 0 .2rem .8rem rgba(0,0,0,.15);\n     min-height: 3.2rem;\n     content: ', ';;\n\n\n\n\n   }\n\n   &::before{\n     ', ';\n     content: "";\n     border-width: .5rem;\n     border-image: initial;\n     width: 0;\n     height: 0;\n     border-color: transparent;\n     border-style: solid;\n     z-index: ', ';\n\n\n\n\n\n   }\n\n   ', '\n\n\n\n\n\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var returnTooltip = function returnTooltip(props) {
  switch (props.position) {
    case 'bottom':
      return '\n        &::after{\n          top: 100%;\n          transform: translateX(-50%);\n          left: 50%;\n\n        }\n\n        &::before{\n          bottom: 100%;\n          top: calc(100% - 5px);\n          left: 50%;\n          transform: translateX(-50%);\n          border-top-width: 0;\n          border-bottom-color: ' + props.tooltipColor + ';\n        }\n        &:hover:after,\n        &:hover:before {\n          opacity: 1;\n          transform: translateX(-50%) translateY(5px);\n        }\n      ';

    case 'top':
      return '\n        &::after{\n            bottom: 100%;\n            transform: translateX(-50%);\n            left: 50%;\n\n        }\n\n        &::before{\n\n          bottom: calc(100% - 5px);\n          transform: translateX(-50%);\n          left: 50%;\n\n          border-bottom-width: 0;\n          border-top-color: ' + props.tooltipColor + ';\n        }\n        &:hover:after,\n        &:hover:before {\n          opacity: 1;\n          transform: translateX(-50%) translateY(-5px);\n        }\n        ';

    case 'left':
      return '\n       &::after{\n          top: 50%;\n          right: 100%;\n          transform: translateY(-50%);\n\n       }\n\n       &::before{\n\n         top: 50%;\n         right: calc(100% - 5px);\n         transform: translateY(-50%);\n\n\n         border-right-width: 0;\n         border-left-color: ' + props.tooltipColor + ';\n        }\n       &:hover:after,\n       &:hover:before {\n         opacity: 1;\n         transform: translateX(-5px) translateY(-50%);\n        }\n       ';

    case 'right':
      return '\n       &::after{\n          top: 50%;\n          left: 100%;\n          transform: translateY(-50%);\n\n       }\n\n       &::before{\n\n         top: 50%;\n         left: calc(100% - 5px);\n         transform: translateY(-50%);\n\n\n         border-left-width: 0;\n         border-right-color: ' + props.tooltipColor + ';\n        }\n       &:hover:after,\n       &:hover:before {\n         opacity: 1;\n         transform: translateX(5px) translateY(-50%);\n        }\n       ';
    case 'bottomLeft':
      return '\n           &::after{\n             top: 100%;\n             transform: translateX(-50%);\n             left: 25%;\n\n           }\n\n           &::before{\n             bottom: 100%;\n             top: calc(100% - 5px);\n             left: 25%;\n             transform: translateX(-50%);\n\n             border-top-width: 0;\n             border-bottom-color: ' + props.tooltipColor + ';\n           }\n           &:hover:after,\n           &:hover:before {\n             opacity: 1;\n             transform: translateX(-50%) translateY(5px);\n           }\n         ';
    case 'bottomRight':
      return '\n           &::after{\n              top: 100%;\n              transform: translateX(-50%);\n              left: 75%;\n             }\n\n           &::before{\n             bottom: 100%;\n              top: calc(100% - 5px);\n              left: 75%;\n              transform: translateX(-50%);\n\n             border-top-width: 0;\n             border-bottom-color: ' + props.tooltipColor + ';\n             }\n            &:hover:after,\n            &:hover:before {\n             opacity: 1;\n             transform: translateX(-50%) translateY(5px);\n           }\n         ';
    case 'topLeft':
      return '\n             &::after{\n                 bottom: 100%;\n                 transform: translateX(-50%);\n                 left: 25%;\n\n             }\n\n             &::before{\n\n               bottom: calc(100% - 5px);\n               transform: translateX(-50%);\n               left: 25%;\n\n               border-bottom-width: 0;\n               border-top-color: ' + props.tooltipColor + ';\n             }\n             &:hover:after,\n             &:hover:before {\n               opacity: 1;\n               transform: translateX(-50%) translateY(-5px);\n             }\n             ';
    case 'topRight':
      return '\n                 &::after{\n                     bottom: 100%;\n                     transform: translateX(-50%);\n                     left: 75%;\n\n                 }\n\n                 &::before{\n\n                   bottom: calc(100% - 5px);\n                   transform: translateX(-50%);\n                   left: 75%;\n\n                   border-bottom-width: 0;\n                   border-top-color: ' + props.tooltipColor + ';\n                 }\n                 &:hover:after,\n                 &:hover:before {\n                   opacity: 1;\n                   transform: translateX(-50%) translateY(-5px);\n                 }\n                 ';

    default:
      return '\n      &::after{\n        top: 100%;\n        transform: translateX(-50%);\n        left: 50%;\n\n      }\n\n      &::before{\n        bottom: 100%;\n        top: calc(100% - 5px);\n        left: 50%;\n        transform: translateX(-50%);\n\n        border-top-width: 0;\n        border-bottom-color: ' + props.tooltipColor + ';\n      }\n      &:hover:after,\n      &:hover:before {\n        opacity: 1;\n        transform: translateX(-50%) translateY(5px);\n      }\n      ';

  }
};

var baseTooltip = css(_templateObject);

export var StyledTooltip = styled.div(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
}, baseTooltip, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.default;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndex.tooltip;
}, function (props) {
  return props.tooltipColor;
}, function (props) {
  return props.label ? '\'' + props.label + '\'' : "''";
}, baseTooltip, function (_ref4) {
  var theme = _ref4.theme;
  return theme.zIndex.tooltip;
}, function (props) {
  return returnTooltip(props);
});