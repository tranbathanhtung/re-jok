var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n\n  & > *{\n\n    font-size: 1.4rem;\n  }\n\n  & > * > * {\n    display: block;\n\n    transition: color .1s;\n\n  }\n'], ['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n\n  & > *{\n\n    font-size: 1.4rem;\n  }\n\n  & > * > * {\n    display: block;\n\n    transition: color .1s;\n\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: none;\n  position: relative;\n  cursor: pointer;\n  width: 3.2rem;\n  height: 3.2rem;\n  line-height: 3.2rem;\n  padding: 0;\n  text-align: center;\n\n'], ['\n  flex: none;\n  position: relative;\n  cursor: pointer;\n  width: 3.2rem;\n  height: 3.2rem;\n  line-height: 3.2rem;\n  padding: 0;\n  text-align: center;\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ', ';\n\n  ', '\n\n'], ['\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ', ';\n\n  ', '\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n       box-shadow: ', ';\n\n       color: ', ';\n       background-color: ', ';\n       border: 0;\n       border-radius: 3rem;\n       padding: 0 1.1rem;\n       margin: 0 .3rem;\n       min-width: 3rem;\n       height: 3rem;\n\n\n    '], ['\n       box-shadow: ', ';\n\n       color: ', ';\n       background-color: ', ';\n       border: 0;\n       border-radius: 3rem;\n       padding: 0 1.1rem;\n       margin: 0 .3rem;\n       min-width: 3rem;\n       height: 3rem;\n\n\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { hexa } from '../globals';

var returnBoxShadow = function returnBoxShadow(color) {
  return '0 .3rem .5rem 0 ' + hexa(color, .28) + ', 0 .1rem 1rem 0 ' + hexa(color, .12) + ', 0 .2rem .4rem -.1rem ' + hexa(color, .2);
};

export var StyledPagination = styled.ul(_templateObject);

export var StyledPaginationItem = styled.li(_templateObject2);

export var StyledPaginationContent = styled.a(_templateObject3, function (_ref) {
  var theme = _ref.theme,
      active = _ref.active,
      color = _ref.color;
  return active ? color ? color : theme.primary.main : theme.text.secondary;
}, function (props) {
  return props.type === "effect" && css(_templateObject4, function (_ref2) {
    var active = _ref2.active,
        theme = _ref2.theme,
        color = _ref2.color;
    return active ? color ? returnBoxShadow(color) : returnBoxShadow(theme.primary.main) : null;
  }, function (_ref3) {
    var theme = _ref3.theme,
        active = _ref3.active;
    return active ? "#fff" : theme.text.primary;
  }, function (_ref4) {
    var active = _ref4.active,
        theme = _ref4.theme,
        color = _ref4.color;
    return active ? color ? color : theme.primary.main : theme.background.default;
  });
});