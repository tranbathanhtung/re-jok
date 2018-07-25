var _templateObject = _taggedTemplateLiteral(["\n\n transition: visibility .3s ease;\n\n"], ["\n\n transition: visibility .3s ease;\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\n    width: ", ";\n    height: ", ";\n\n    position: fixed;\n    z-index: ", ";\n    top: 0;\n    left: 0;\n    background-color: rgba(0,0,0, 0.9);\n    overflow-y: auto;\n    overflow-x: hidden;\n    text-align: center;\n    opacity: ", ";\n    transition: opacity .5s;\n\n"], ["\n\n    width: ", ";\n    height: ", ";\n\n    position: fixed;\n    z-index: ", ";\n    top: 0;\n    left: 0;\n    background-color: rgba(0,0,0, 0.9);\n    overflow-y: auto;\n    overflow-x: hidden;\n    text-align: center;\n    opacity: ", ";\n    transition: opacity .5s;\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  width: ", ";\n\n  height: ", ";\n\n  backface-visibility: hidden;\n\n  will-change: transform;\n  z-index: ", ";\n\n\n  box-shadow: 0 .7rem .8rem -.4rem rgba(0, 0, 0, 0.18), 0 1.4rem 2rem .2rem rgba(0, 0, 0, 0.14), 0 .4rem 2.4rem .4rem rgba(0, 0, 0, 0.12);\n  max-height: 100%;\n  border-radius: 0;\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  background: ", ";\n  outline: 0;\n  transform: ", ";\n  transition: transform .4s ease;\n\n"], ["\n  position: fixed;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  width: ", ";\n\n  height: ", ";\n\n  backface-visibility: hidden;\n\n  will-change: transform;\n  z-index: ", ";\n\n\n  box-shadow: 0 .7rem .8rem -.4rem rgba(0, 0, 0, 0.18), 0 1.4rem 2rem .2rem rgba(0, 0, 0, 0.14), 0 .4rem 2.4rem .4rem rgba(0, 0, 0, 0.12);\n  max-height: 100%;\n  border-radius: 0;\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  background: ", ";\n  outline: 0;\n  transform: ", ";\n  transition: transform .4s ease;\n\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n          margin-left: ", "rem;\n        "], ["\n          margin-left: ", "rem;\n        "]),
    _templateObject5 = _taggedTemplateLiteral(["\n          margin-right: ", "rem;\n        "], ["\n          margin-right: ", "rem;\n        "]),
    _templateObject6 = _taggedTemplateLiteral(["\n          margin-top: ", "rem;\n        "], ["\n          margin-top: ", "rem;\n        "]),
    _templateObject7 = _taggedTemplateLiteral(["\n          margin-bottom: ", "rem;\n        "], ["\n          margin-bottom: ", "rem;\n        "]),
    _templateObject8 = _taggedTemplateLiteral([""], [""]),
    _templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  background: inherit;\n  backface-visibility: hidden;\n  overflow: hidden;\n  min-height: 100%;\n\n  z-index: 2;\n  ", "\n  transition: margin .4s ease;\n"], ["\n  position: relative;\n  background: inherit;\n  backface-visibility: hidden;\n  overflow: hidden;\n  min-height: 100%;\n\n  z-index: 2;\n  ", "\n  transition: margin .4s ease;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

export var StyledSidebarWrapper = styled.div(_templateObject);

export var StyledSidebarBackground = styled.div(_templateObject2, function (props) {
  return props.openSidebar && props.opacityMode ? "100%" : "0";
}, function (props) {
  return props.openSidebar && props.opacityMode ? "100%" : "0";
}, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.sidebar;
}, function (props) {
  return props.openSidebar && props.opacityMode ? "0.8" : "0";
});

export var StyledSidebar = styled.div(_templateObject3, function (props) {
  return props.direction !== "bottom" && "0";
}, function (props) {
  return props.direction !== "top" && "0";
}, function (props) {
  return props.direction !== "right" && "0";
}, function (props) {
  return props.direction !== "left" && "0";
}, function (props) {
  return props.direction === "left" || props.direction === "right" ? props.fullScreen ? "100%" : props.width / 10 + "rem" : "100%";
}, function (props) {
  return props.direction === "top" || props.direction === "bottom" ? props.fullScreen ? "100%" : props.height / 10 + "rem" : "100%";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.zIndex.sidebar;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background.default;
}, function (props) {
  return props.openSidebar ? "translate3d(0,0,0)" : "translate3d(" + (props.direction === "left" ? "-110%" : props.direction === "right" ? "110%" : "0") + ",\n     " + (props.direction === "top" ? "-140%" : props.direction === "bottom" ? "110%" : "0") + ",\n     0)";
});
var returnAnimated = function returnAnimated(props) {
  if (props.mode === "push") {
    switch (props.direction) {
      case 'left':
        return css(_templateObject4, props.width / 10);
      case 'right':
        return css(_templateObject5, props.width / 10);
      case 'top':
        return css(_templateObject6, props.height / 10);
      case 'bottom':
        return css(_templateObject7, props.height / 10);
      default:
        return css(_templateObject8);
    }
  }
};

export var StyledSidebarContent = styled.div(_templateObject9, function (props) {
  return props.open && returnAnimated(props);
});