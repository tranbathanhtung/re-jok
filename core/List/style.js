var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n\n  align-items: center;\n  padding: 1rem 1rem;\n  line-height: 1.8rem;\n  cursor: ", ";\n\n  ", "\n\n  background: ", ";\n  ", "\n"], ["\n  display: flex;\n\n  align-items: center;\n  padding: 1rem 1rem;\n  line-height: 1.8rem;\n  cursor: ", ";\n\n  ", "\n\n  background: ", ";\n  ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n     border-bottom: ", ";\n\n     "], ["\n     border-bottom: ", ";\n\n     "]),
    _templateObject3 = _taggedTemplateLiteral(["\n         &:hover{\n           background: rgba(0,0,0,.02);\n         }\n      "], ["\n         &:hover{\n           background: rgba(0,0,0,.02);\n         }\n      "]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: ", ";\n\n  ", "\n\n\n  font-size: 1.4rem;\n  line-height: 1.5;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  color: ", ";\n  box-sizing: border-box;\n\n\n\n  & * {\n    outline: none;\n\n  }\n\n"], ["\n  display: ", ";\n\n  ", "\n\n\n  font-size: 1.4rem;\n  line-height: 1.5;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  color: ", ";\n  box-sizing: border-box;\n\n\n\n  & * {\n    outline: none;\n\n  }\n\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n        // width: 100%;\n        > ", " {\n          display: inline-flex;\n        }\n      "], ["\n        // width: 100%;\n        > ", " {\n          display: inline-flex;\n        }\n      "]),
    _templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex: 1 1 60%;\n\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex: 1 1 60%;\n\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n\ncolor: ", ";\nfont-size: 1.4rem;\nline-height: 2rem;\nfont-weight: 400;\n"], ["\n\ncolor: ", ";\nfont-size: 1.4rem;\nline-height: 2rem;\nfont-weight: 400;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 1 30%;\n  justify-content: flex-end;\n  align-items: flex-start;\n  align-self: flex-start;\n\n"], ["\n  display: flex;\n  flex: 1 1 30%;\n  justify-content: flex-end;\n  align-items: flex-start;\n  align-self: flex-start;\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

// ==================== List Item =================
export var StyledListItem = styled.div.attrs({
  href: function href(props) {
    return props.hrefString ? props.hrefString : null;
  }
})(_templateObject, function (props) {
  return props.selection || props.hrefString ? "pointer" : "default";
}, function (props) {
  return props.horizontal ? null : css(_templateObject2, function (props) {
    return props.divided ? ".1rem solid " + props.theme.border.primary : "none";
  });
}, function (props) {
  return props.active ? "rgba(0,0,0, .02)" : "transparent";
}, function (props) {
  return props.selection ? css(_templateObject3) : null;
});
//=================== List ===================

export var StyledList = styled.div(_templateObject4, function (props) {
  return props.horizontal ? "inline-flex" : "block";
}, function (props) {
  return props.horizontal ? css(_templateObject5, StyledListItem) : null;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
});
// =================== List Content ==================
export var StyledListContent = styled.div(_templateObject6);

export var StyledListContentHeader = styled.div(_templateObject7);
export var StyledListContentDescription = styled.div(_templateObject8, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.regular;
});

export var StyledListContentAction = styled.div(_templateObject9);