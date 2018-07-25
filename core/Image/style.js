var _templateObject = _taggedTemplateLiteral(['\n   ', ';\n   max-width: 100%;\n   height: auto;\n   vertical-align: middle;\n   ', '\n'], ['\n   ', ';\n   max-width: 100%;\n   height: auto;\n   vertical-align: middle;\n   ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n       box-shadow: 0 .5rem 1.5rem -.8rem rgba(0,0,0,.24), 0 .8rem 1rem -.5rem rgba(0,0,0,.2);\n     '], ['\n       box-shadow: 0 .5rem 1.5rem -.8rem rgba(0,0,0,.24), 0 .8rem 1rem -.5rem rgba(0,0,0,.2);\n     ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var returnShape = function returnShape(props) {
  switch (props.shape) {
    case 'circle':
      return '\n        border-radius: 50%;\n      ';
    case 'rounded':
      return '\n        border-radius: .6rem;\n      ';

    default:

  }
};

export var StyledImage = styled.img(_templateObject, function (props) {
  return returnShape(props);
}, function (props) {
  return props.hasBoxshadow && css(_templateObject2);
});