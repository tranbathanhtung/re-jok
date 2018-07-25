var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n\n  font-size: 1.4rem;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  display: flex;\n\n  ', ';\n'], ['\n  position: relative;\n\n  font-size: 1.4rem;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  display: flex;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   font-size: 1.4rem;\n   box-sizing: border-box;\n   padding: 0;\n   position: relative;\n   list-style: none;\n\n   display: flex;\n\n   flex-shrink: 0;\n   justify-content: flex-start;\n   ', ';\n\n\n   &::before{\n     content: "";\n     position: absolute;\n     bottom: 0;\n     left: 0;\n     right: 0;\n   }\n\n\n\n'], ['\n   font-size: 1.4rem;\n   box-sizing: border-box;\n   padding: 0;\n   position: relative;\n   list-style: none;\n\n   display: flex;\n\n   flex-shrink: 0;\n   justify-content: flex-start;\n   ', ';\n\n\n   &::before{\n     content: "";\n     position: absolute;\n     bottom: 0;\n     left: 0;\n     right: 0;\n   }\n\n\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: none;\n  position: relative;\n'], ['\n  flex: none;\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n   display: block;\n   text-align: center;\n   padding: .9rem 2rem;\n   color: ', ';\n\n   font-size: 1.2rem;\n   cursor: pointer;\n   text-decoration: none;\n   transition: color .1s ease-in-out;\n   line-height: 2rem;\n\n   ', '\n\n   ', ';\n\n\n   ', '\n\n'], ['\n   display: block;\n   text-align: center;\n   padding: .9rem 2rem;\n   color: ', ';\n\n   font-size: 1.2rem;\n   cursor: pointer;\n   text-decoration: none;\n   transition: color .1s ease-in-out;\n   line-height: 2rem;\n\n   ', '\n\n   ', ';\n\n\n   ', '\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n     &:hover{\n       color: ', ';\n     }\n     '], ['\n     &:hover{\n       color: ', ';\n     }\n     ']),
    _templateObject6 = _taggedTemplateLiteral(['\n       border-color: ', ';\n       color: ', ';\n     '], ['\n       border-color: ', ';\n       color: ', ';\n     ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    flex: 1;\n    color: ', ';\n'], ['\n    flex: 1;\n    color: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var returnPostionTabWrapper = function returnPostionTabWrapper(props) {
  switch (props.position) {
    case 'top':
      return '\n        flex-direction: column;\n\n      ';
    case 'bottom':
      return '\n         flex-direction: column;\n       ';
    case 'left':
      return '\n        flex-direction: row;\n        ';
    case 'right':
      return '\n         flex-direction: row;\n       ';

    default:

  }
};

var returnPostionTab = function returnPostionTab(props) {
  switch (props.position) {
    case 'top':
      return '\n        order: 0;\n        border-bottom: .1rem solid ' + props.theme.border.primary + ';\n        margin: 0 0 1.6rem 0;\n        flex-grow: 1;\n        flex-direction: row;\n\n\n\n\n      ';
    case 'bottom':
      return '\n        order: 1;\n        border-top: .1rem solid ' + props.theme.border.primary + ';\n        margin: 1.6rem 0 0 0;\n        flex-grow: 1;\n        flex-direction: row;\n\n\n      ';
    case 'left':
      return '\n          order: 0;\n          border-right: .1rem solid ' + props.theme.border.primary + ';\n          margin: 0 1.6rem 0 0;\n          flex-grow: 0;\n          flex-direction: column;\n\n\n        ';

    case 'right':
      return '\n         order: 1;\n         border-left: .1rem solid ' + props.theme.border.primary + ';\n         margin: 0 0 0 1.6rem;\n         flex-grow: 0;\n         flex-direction: column;\n\n\n         ';

    default:

  }
};

export var StyledTabWrapper = styled.div(_templateObject, function (props) {
  return returnPostionTabWrapper(props);
});

export var StyledTab = styled.ul(_templateObject2, function (props) {
  return returnPostionTab(props);
});

export var StyledTabItem = styled.li(_templateObject3);

var returnPostionTabItemInner = function returnPostionTabItemInner(props) {
  switch (props.position) {
    case 'top':
      return '\n       border-bottom: .2rem solid transparent;\n\n\n\n      ';
    case 'bottom':
      return '\n       border-top: .2rem solid transparent;\n\n\n\n      ';
    case 'left':
      return '\n        border-right: .2rem solid transparent;\n\n        ';
    case 'right':
      return '\n        border-left: .2rem solid transparent;\n        ';

    default:

  }
};
export var StyledTabItemInner = styled.div(_templateObject4, function (props) {
  return props.disabled ? props.theme.text.hint : props.theme.text.secondary;
}, function (props) {
  return !props.disabled && css(_templateObject5, function (_ref) {
    var theme = _ref.theme;
    return theme.text.regular;
  });
}, function (props) {
  return returnPostionTabItemInner(props);
}, function (props) {
  return props.active && css(_templateObject6, function (_ref2) {
    var theme = _ref2.theme,
        color = _ref2.color;
    return color ? color : theme.primary.main;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.text.regular;
  });
});

export var StyledTabContent = styled.div(_templateObject7, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text.regular;
});