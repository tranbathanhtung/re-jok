var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n\n"], ["\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: ", ";\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  font-size: 1.4rem;\n\n  & * {\n    box-sizing: border-box;\n   \n  }\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: ", ";\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  font-size: 1.4rem;\n\n  & * {\n    box-sizing: border-box;\n   \n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n   min-height: 7rem;\n   margin: 0;\n   line-height: 7rem;\n\n   ", "\n\n"], ["\n   min-height: 7rem;\n   margin: 0;\n   line-height: 7rem;\n\n   ", "\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n        position: fixed;\n        width: 100%;\n        z-index: ", ";\n        top: 0;\n     "], ["\n        position: fixed;\n        width: 100%;\n        z-index: ", ";\n        top: 0;\n     "]),
    _templateObject5 = _taggedTemplateLiteral(["\n      @media(max-width: ", "px){\n         max-width: 54rem;\n      }\n      "], ["\n      @media(max-width: ", "px){\n         max-width: 54rem;\n      }\n      "]),
    _templateObject6 = _taggedTemplateLiteral(["\n      @media(min-width: ", "px){\n         max-width: ", "px;\n      }\n    "], ["\n      @media(min-width: ", "px){\n         max-width: ", "px;\n      }\n    "]),
    _templateObject7 = _taggedTemplateLiteral(["\n   ", ";\n   flex: 1;\n   flex-basis: auto;\n\n   ", ";\n   ", "\n\n\n\n"], ["\n   ", ";\n   flex: 1;\n   flex-basis: auto;\n\n   ", ";\n   ", "\n\n\n\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n     width: 100vw;\n     left: 50%;\n     right: 50%;\n     margin-left: -50vw;\n     margin-right: -50vw;\n   "], ["\n     width: 100vw;\n     left: 50%;\n     right: 50%;\n     margin-left: -50vw;\n     margin-right: -50vw;\n   "]),
    _templateObject9 = _taggedTemplateLiteral(["\n   min-height: 7rem;\n   margin: 0;\n   line-height: 7rem;\n\n\n"], ["\n   min-height: 7rem;\n   margin: 0;\n   line-height: 7rem;\n\n\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n      flex-shrink: 0;\n    \n      overflow: auto;\n"], ["\n      flex-shrink: 0;\n    \n      overflow: auto;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var baseContainer = css(_templateObject);

//=============== Layout ==================
export var StyledLayout = styled.div(_templateObject2, function (props) {
  return props.hasSide ? "row" : "column";
});

//=============== Header ==================
export var StyledHeader = styled.header(_templateObject3, function (props) {
  return props.fixed && css(_templateObject4, function (_ref) {
    var theme = _ref.theme;
    return theme.zIndex.nav;
  });
});
//============== Container ================
var returnContainerResponsive = function returnContainerResponsive(props) {
  var grid = props.theme.grid;

  var vals = Object.keys(grid).map(function (key) {
    if (key === "xs") {
      return css(_templateObject5, grid.sm);
    }
    return css(_templateObject6, grid[key], grid[key] - 60);
  });

  return vals;
};

export var StyledContainer = styled.div(_templateObject7, baseContainer, function (props) {
  return !props.isFluid && returnContainerResponsive(props);
}, function (props) {
  return props.fullWidth && css(_templateObject8);
});

//============== Footer =================
export var StyledFooter = styled.footer(_templateObject9);

//============== Side ===================
export var StyledSide = styled.div(_templateObject10);