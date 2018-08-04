var _templateObject = _taggedTemplateLiteral(["\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n   list-style: none;\n   position: relative;\n   display: table;\n   width: ", ";\n\n"], ["\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n   list-style: none;\n   position: relative;\n   display: table;\n   width: ", ";\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\nappearance: none;\nmax-width: 100%;\nwidth: 100%;\nheight: ", ";\n\npadding: ", ";\nfont-size: ", ";\n\ncolor: ", ";\nbackground-image: none;\n\n\nbox-sizing: border-box;\ntransition: all .2s ease-in-out;\n", "\n\n\n", "\n\n\n\n\n", "\n\n", "\n\n\n\n\n"], ["\n\nappearance: none;\nmax-width: 100%;\nwidth: 100%;\nheight: ", ";\n\npadding: ", ";\nfont-size: ", ";\n\ncolor: ", ";\nbackground-image: none;\n\n\nbox-sizing: border-box;\ntransition: all .2s ease-in-out;\n", "\n\n\n", "\n\n\n\n\n", "\n\n", "\n\n\n\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    background: none;\n    border-color: transparent;\n    &:focus{\n      outline: 0;\n    }\n    "], ["\n    background: none;\n    border-color: transparent;\n    &:focus{\n      outline: 0;\n    }\n    "]),
    _templateObject4 = _taggedTemplateLiteral(["\n    border: ", ";\n    background: ", ";\n    border-radius: ", ";\n    border-color: ", ";\n    border-bottom: ", ";\n\n    &:hover{\n\n       border-color: ", ";\n       border-bottom: ", ";\n\n\n    }\n\n    &:focus {\n        outline: none;\n        ", "\n    }\n    "], ["\n    border: ", ";\n    background: ", ";\n    border-radius: ", ";\n    border-color: ", ";\n    border-bottom: ", ";\n\n    &:hover{\n\n       border-color: ", ";\n       border-bottom: ", ";\n\n\n    }\n\n    &:focus {\n        outline: none;\n        ", "\n    }\n    "]),
    _templateObject5 = _taggedTemplateLiteral(["\n\n                 border-bottom: ", ";\n                 box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);\n\n             "], ["\n\n                 border-bottom: ", ";\n                 box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);\n\n             "]),
    _templateObject6 = _taggedTemplateLiteral(["\n               ", "\n\n             "], ["\n               ", "\n\n             "]),
    _templateObject7 = _taggedTemplateLiteral(["\n                  border-color: ", ";\n\n                  "], ["\n                  border-color: ", ";\n\n                  "]),
    _templateObject8 = _taggedTemplateLiteral(["\n    overflow-y: ", ";\n    font-family: sans-serif;\n    height: auto;\n  "], ["\n    overflow-y: ", ";\n    font-family: sans-serif;\n    height: auto;\n  "]),
    _templateObject9 = _taggedTemplateLiteral(["\n    padding-left: ", ";\n    padding-right: ", ";\n "], ["\n    padding-left: ", ";\n    padding-right: ", ";\n "]),
    _templateObject10 = _taggedTemplateLiteral(["\n    border-color: #d9d9d9;\n    cursor: not-allowed;\n    background-color: #f5f5f5;\n    "], ["\n    border-color: #d9d9d9;\n    cursor: not-allowed;\n    background-color: #f5f5f5;\n    "]),
    _templateObject11 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: ", ";\n    right: ", ";\n    width: 3.2rem;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    color: ", ";\n    pointer-events: none;\n"], ["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: ", ";\n    right: ", ";\n    width: 3.2rem;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    color: ", ";\n    pointer-events: none;\n"]),
    _templateObject12 = _taggedTemplateLiteral(["\n  padding: 0 1.1rem;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 1;\n  color: ", ";\n  text-align: center;\n  background-color: ", ";\n  border: ", ";\n  position: relative;\n  transition: all .3s;\n  display: table-cell;\n  ", "\n"], ["\n  padding: 0 1.1rem;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 1;\n  color: ", ";\n  text-align: center;\n  background-color: ", ";\n  border: ", ";\n  position: relative;\n  transition: all .3s;\n  display: table-cell;\n  ", "\n"]),
    _templateObject13 = _taggedTemplateLiteral(["\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    "]),
    _templateObject14 = _taggedTemplateLiteral(["\n  ", ";\n  border-right: 0;\n"], ["\n  ", ";\n  border-right: 0;\n"]),
    _templateObject15 = _taggedTemplateLiteral(["\n  ", ";\n  border-left: 0;\n"], ["\n  ", ";\n  border-left: 0;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

export var StyledInputWrapper = styled.div(_templateObject, function (props) {
  return props.fullWidth && "100%";
});

export var StyledInput = styled.input(_templateObject2, function (props) {
  return props.theme.size[props.size].height;
}, function (props) {
  return props.theme.size[props.size].padding;
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.text.regular;
}, function (props) {
  return props.blank ? css(_templateObject3) : css(_templateObject4, function (_ref2) {
    var theme = _ref2.theme;
    return ".1rem solid " + theme.border.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return "" + theme.background.default;
  }, function (props) {
    return props.addonAfter || props.addonBefore ? "" : ".4rem";
  }, function (_ref4) {
    var theme = _ref4.theme,
        validateStatus = _ref4.validateStatus,
        underline = _ref4.underline;
    return validateStatus && !underline && theme[validateStatus].main;
  }, function (_ref5) {
    var theme = _ref5.theme,
        validateStatus = _ref5.validateStatus,
        underline = _ref5.underline;
    return validateStatus && underline && ".2rem solid " + theme[validateStatus].main;
  }, function (_ref6) {
    var theme = _ref6.theme,
        validateStatus = _ref6.validateStatus,
        underline = _ref6.underline;
    return validateStatus && !underline ? theme[validateStatus].main : "#c0c4cc";
  }, function (_ref7) {
    var theme = _ref7.theme,
        validateStatus = _ref7.validateStatus,
        underline = _ref7.underline;
    return validateStatus && underline && ".2rem solid " + theme[validateStatus].main;
  }, function (props) {
    return props.underline ? css(_templateObject5, function (_ref8) {
      var theme = _ref8.theme,
          validateStatus = _ref8.validateStatus,
          colorFocus = _ref8.colorFocus;
      return ".2rem solid " + (validateStatus ? theme[validateStatus].main : colorFocus ? colorFocus : theme.primary.main);
    }) : css(_templateObject6, function (props) {
      return props.validateStatus ? css(_templateObject7, function (_ref9) {
        var theme = _ref9.theme,
            validateStatus = _ref9.validateStatus;
        return theme[validateStatus].main;
      }) : css(_templateObject7, function (_ref10) {
        var theme = _ref10.theme,
            colorFocus = _ref10.colorFocus;
        return colorFocus ? colorFocus : theme.primary.main;
      });
    });
  });
}, function (props) {
  return props.textarea && css(_templateObject8, function (props) {
    return props.autosize && "hidden";
  });
}, function (props) {
  return props.icon && css(_templateObject9, function (props) {
    return props.iconPosition === "left" && "3.2rem";
  }, function (props) {
    return props.iconPosition === "right" && "3.2rem";
  });
}, function (props) {
  return props.disabled && css(_templateObject10);
});

export var StyledIconInput = styled.div(_templateObject11, function (props) {
  return props.iconPosition === "left" && 0;
}, function (props) {
  return props.iconPosition === "right" && 0;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.text.regular;
});

var baseAddon = css(_templateObject12, function (_ref12) {
  var theme = _ref12.theme;
  return theme.text.regular;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.background.default;
}, function (_ref14) {
  var theme = _ref14.theme;
  return ".1rem solid " + theme.border.primary;
}, function (_ref15) {
  var validateStatus = _ref15.validateStatus,
      theme = _ref15.theme;
  return validateStatus && css(_templateObject13, theme[validateStatus].main, theme[validateStatus].main, function (_ref16) {
    var theme = _ref16.theme;
    return theme.background.primary;
  });
});

export var StyledAddonBefore = styled.div(_templateObject14, baseAddon);

export var StyledAddonAfter = styled.div(_templateObject15, baseAddon);