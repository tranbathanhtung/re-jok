var _templateObject = _taggedTemplateLiteral(['\ncursor: pointer;\nwidth: 100%;\nposition: relative;\ntext-overflow: ellipsis;\nline-height: 4rem;\nheight: 4rem;\npadding-right: 1.6rem;\npadding-left: 2.4rem;\nbox-sizing: border-box;\n'], ['\ncursor: pointer;\nwidth: 100%;\nposition: relative;\ntext-overflow: ellipsis;\nline-height: 4rem;\nheight: 4rem;\npadding-right: 1.6rem;\npadding-left: 2.4rem;\nbox-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  list-style: none;\n  background: ', ';\n  color: ', ';\n\n  font-size: 1.4rem;\n  transition: background .3s,width .2s;\n  border-right: ', ';\n\n\n  &::before{\n    content: "";\n    display: table;\n  }\n\n  &::after{\n    clear: both;\n    content: "";\n    display: table;\n  }\n'], ['\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  list-style: none;\n  background: ', ';\n  color: ', ';\n\n  font-size: 1.4rem;\n  transition: background .3s,width .2s;\n  border-right: ', ';\n\n\n  &::before{\n    content: "";\n    display: table;\n  }\n\n  &::after{\n    clear: both;\n    content: "";\n    display: table;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\n  ', ';\n  ', '\n\n\n\n  transition: all .2s;\n\n  ', '\n\n\n\n\n\n\n'], ['\n\n  ', ';\n  ', '\n\n\n\n  transition: all .2s;\n\n  ', '\n\n\n\n\n\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n      color: ', ';\n      '], ['\n      color: ', ';\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      background-color: ', ';\n      box-shadow: ', ';\n         color: ', ';\n      '], ['\n      background-color: ', ';\n      box-shadow: ', ';\n         color: ', ';\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n       opacity: .25;\n       cursor: not-allowed;\n\n    '], ['\n       opacity: .25;\n       cursor: not-allowed;\n\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      &:hover{\n\n        background-color: rgba(200, 200, 200, 0.2);\n        outline: none;\n        box-shadow: none;\n      }\n      '], ['\n      &:hover{\n\n        background-color: rgba(200, 200, 200, 0.2);\n        outline: none;\n        box-shadow: none;\n      }\n      ']),
    _templateObject8 = _taggedTemplateLiteral(['\nmin-width: 1.4rem;\ndisplay: inline-block;\nmargin-right: 1rem;\n'], ['\nmin-width: 1.4rem;\ndisplay: inline-block;\nmargin-right: 1rem;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject10 = _taggedTemplateLiteral(['\ncolor: ', ';\nfont-size: 1.4rem;\nfont-weight: ', ';\nline-height: 1.5;\npadding: .8rem 1.6rem;\ntransition: all .3s;\n\n &:first-child{\n   display: inline-flex;\n }\n'], ['\ncolor: ', ';\nfont-size: 1.4rem;\nfont-weight: ', ';\nline-height: 1.5;\npadding: .8rem 1.6rem;\ntransition: all .3s;\n\n &:first-child{\n   display: inline-flex;\n }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\nlist-style: none;\nmargin: 0;\npadding: 0;\n'], ['\nlist-style: none;\nmargin: 0;\npadding: 0;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n    \n    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n'], ['\n    \n    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 1.6rem;\n  transition: transform .3s;\n  transform: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  right: 1.6rem;\n  transition: transform .3s;\n  transform: ', ';\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  padding: 0;\n  border: 0;\n  list-style: none;\n  margin: 0;\n\n  overflow: hidden;\n  height: ', ';\n\n  transition: all .25s ease-out;\n\n  border-radius: 0;\n\n\n'], ['\n  padding: 0;\n  border: 0;\n  list-style: none;\n  margin: 0;\n\n  overflow: hidden;\n  height: ', ';\n\n  transition: all .25s ease-out;\n\n  border-radius: 0;\n\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

import { hexa } from '../globals';

var returnBoxShadow = function returnBoxShadow(color) {
  return '0 1.2rem 2rem -1rem ' + hexa(color, 0.28) + ', 0 .4rem 2rem 0 rgba(0,0,0,0.12), 0 .7rem .8rem -.5rem ' + hexa(color, 0.2);
};

var baseMenuItem = css(_templateObject);

//=============== Menu ==================
export var StyledMenu = styled.ul(_templateObject2, function (props) {
  return props.backgroundColor ? props.backgroundColor : props.theme.background.default;
}, function (props) {
  return props.textColor ? props.textColor : props.theme.text.regular;
}, function (_ref) {
  var theme = _ref.theme;
  return '.1rem solid ' + theme.border.primary;
});

//=============== Menu Item ==============
export var StyledMenuItem = styled.li(_templateObject3, baseMenuItem, function (props) {
  return props.activeNormal ? css(_templateObject4, function (props) {
    return props.active ? props.activeColor ? props.activeColor : props.theme.primary.main : null;
  }) : css(_templateObject5, function (props) {
    return props.active ? props.activeColor ? props.activeColor : props.theme.primary.main : null;
  }, function (props) {
    return props.active ? props.activeColor ? returnBoxShadow(props.activeColor) : returnBoxShadow(props.theme.primary.main) : null;
  }, function (props) {
    return props.active && props.theme.text.default;
  });
}, function (props) {
  return props.disable ? css(_templateObject6) : !props.active ? css(_templateObject7) : null;
});

export var StyledMenuLeftIcon = styled.div(_templateObject8);

export var StyledMenuItemText = styled.span(_templateObject9);
// ============== Menu List ===============
export var StyledMenuListWrapper = styled.li(_templateObject9);

export var StyledMenuListTitle = styled.div(_templateObject10, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.subtitle.fontWeight;
});

export var StyledMenuList = styled.ul(_templateObject11);
// =============== Sub Menu =================
export var StyledSubMenuWrapper = styled.li(_templateObject12);

export var StyledSubMenuTitle = styled.div(_templateObject13, baseMenuItem);

export var StyledSubMenuArrow = styled.div(_templateObject14, function (props) {
  return !props.open ? "rotate(0deg)" : "rotate(180deg)";
});
export var StyledSubMenu = styled.ul(_templateObject15, function (props) {
  return !props.open && 0;
});