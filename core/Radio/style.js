var _templateObject = _taggedTemplateLiteral(["\nfont-size: 14px;\nline-height: 1.5;\ncolor: ", ";\nbox-sizing: border-box;\npadding: 0;\nlist-style: none;\ndisplay: inline-block;\nposition: relative;\nwhite-space: nowrap;\ncursor: pointer;\n"], ["\nfont-size: 14px;\nline-height: 1.5;\ncolor: ", ";\nbox-sizing: border-box;\npadding: 0;\nlist-style: none;\ndisplay: inline-block;\nposition: relative;\nwhite-space: nowrap;\ncursor: pointer;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  flex-direction: ", ";\n"], ["\n  ", ";\n  display: flex;\n  flex-direction: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  height: 1.6rem;\n\n  width: 1.6rem;\n\n  border:  ", ";\n  border-radius: 50%;\n  background: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  ", "\n\n  &::after{\n    content: \"\";\n    display: block;\n    height: .8rem;\n    width: .8rem;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%) scale(.875);\n    background-color: ", ";\n    opacity: ", ";\n\n    transition: all .3s cubic-bezier(.78,.14,.15,.86);\n\n    ", "\n  }\n"], ["\n  height: 1.6rem;\n\n  width: 1.6rem;\n\n  border:  ", ";\n  border-radius: 50%;\n  background: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  ", "\n\n  &::after{\n    content: \"\";\n    display: block;\n    height: .8rem;\n    width: .8rem;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%) scale(.875);\n    background-color: ", ";\n    opacity: ", ";\n\n    transition: all .3s cubic-bezier(.78,.14,.15,.86);\n\n    ", "\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    border-color: #d9d9d9!important;\n    background-color: #f5f5f5;\n    cursor: not-allowed;\n    "], ["\n    border-color: #d9d9d9!important;\n    background-color: #f5f5f5;\n    cursor: not-allowed;\n    "]),
    _templateObject6 = _taggedTemplateLiteral(["\n\n      background-color: #ccc;\n      "], ["\n\n      background-color: #ccc;\n      "]),
    _templateObject7 = _taggedTemplateLiteral(["\nposition: fixed;\nopacity: 0;\npointer-events: none;\nmargin: 0;\npadding: 0;\nwidth: 0;\nheight: 0;\n\n\n"], ["\nposition: fixed;\nopacity: 0;\npointer-events: none;\nmargin: 0;\npadding: 0;\nwidth: 0;\nheight: 0;\n\n\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  cursor: pointer;\n  position: relative;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  color: ", ";\n  cursor: ", ";\n\n  &:hover ", "{\n    ", "\n\n  }\n"], ["\n  font-size: 1.4rem;\n  cursor: pointer;\n  position: relative;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  color: ", ";\n  cursor: ", ";\n\n  &:hover ", "{\n    ", "\n\n  }\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n      border: ", ";\n\n      "], ["\n      border: ", ";\n\n      "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var baseRadio = css(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
});

export var StyledRadioGroup = styled.div(_templateObject2, baseRadio, function (props) {
  return props.layout === "horizontal" ? "row" : "column";
});

export var StyledRadioWrapper = styled.div(_templateObject3, baseRadio);

export var StyledRadioButton = styled.span(_templateObject4, function (props) {
  return props.checked ? props.color ? "1px solid " + props.color : "1px solid " + props.theme.primary.main : "1px solid " + props.theme.border.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background.default;
}, function (props) {
  return props.disabled && css(_templateObject5);
}, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return color ? "" + color : "" + theme.primary.main;
}, function (props) {
  return props.checked ? "1" : "0";
}, function (props) {
  return props.disabled && css(_templateObject6);
});

export var StyledRadio = styled.input.attrs({
  type: "radio",
  id: function id(props) {
    return props.id;
  },
  name: function name(props) {
    return props.name;
  },
  checked: function checked(props) {
    return props.checked;
  }
})(_templateObject7);

export var StyledRadioLabel = styled.label.attrs({
  htmlFor: function htmlFor(props) {
    return props.id;
  }
})(_templateObject8, function (props) {
  return props.disabled && "rgba(0,0,0,.25)";
}, function (props) {
  return props.disabled && "not-allowed";
}, StyledRadioButton, function (props) {
  return !props.disabled && css(_templateObject9, function (_ref4) {
    var color = _ref4.color,
        theme = _ref4.theme;
    return color ? "1px solid " + color : "1px solid " + theme.primary.main;
  });
});