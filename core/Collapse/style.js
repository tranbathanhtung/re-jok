var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.4rem;\n    list-style: none;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0 0 0 1.6rem;\n    color: ', ';\n\n\n'], ['\n    font-size: 1.4rem;\n    list-style: none;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0 0 0 1.6rem;\n    color: ', ';\n\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   color: ', ';\n\n\n\n'], ['\n   color: ', ';\n\n\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      height: 4.8rem;\n      line-height: 4.8rem;\n      background-color: ', ';\n      color: ', ';\n      cursor: ', ';\n      border-bottom: ', ';\n      font-size: 1.4rem;\n      font-weight: 500;\n      transition: border-bottom-color .3s;\n      outline: none;\n      position: relative;\n\n'], ['\n      height: 4.8rem;\n      line-height: 4.8rem;\n      background-color: ', ';\n      color: ', ';\n      cursor: ', ';\n      border-bottom: ', ';\n      font-size: 1.4rem;\n      font-weight: 500;\n      transition: border-bottom-color .3s;\n      outline: none;\n      position: relative;\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    will-change: height;\n    background-color: ', ';\n\n    box-sizing: border-box;\n    height: ', ';\n    transition: all .25s ease-out;\n    overflow: hidden;\n    font-size: 1.4rem;\n    color: ', ';\n\n'], ['\n    will-change: height;\n    background-color: ', ';\n\n    box-sizing: border-box;\n    height: ', ';\n    transition: all .25s ease-out;\n    overflow: hidden;\n    font-size: 1.4rem;\n    color: ', ';\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding-top: 2rem;\n'], ['\n  padding-top: 2rem;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 1.6rem;\n  transition: transform .3s;\n  transform: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  right: 1.6rem;\n  transition: transform .3s;\n  transform: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

export var StyledCollapse = styled.ul(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.text.regular;
});

export var StyledCollapseItem = styled.li(_templateObject2, function (_ref2) {
    var theme = _ref2.theme;
    return theme.text.hint;
});
export var StyledCollapseItemTitle = styled.div(_templateObject3, function (_ref3) {
    var theme = _ref3.theme;
    return theme.background.default;
}, function (_ref4) {
    var theme = _ref4.theme,
        disabled = _ref4.disabled;
    return disabled ? theme.text.hint : theme.text.regular;
}, function (_ref5) {
    var disabled = _ref5.disabled;
    return disabled ? 'not-allowed' : 'pointer';
}, function (props) {
    return '.1rem solid ' + props.theme.border.primary;
});

export var StyledCollapseItemContent = styled.div(_templateObject4, function (_ref6) {
    var theme = _ref6.theme;
    return theme.background.default;
}, function (props) {
    return !props.open && 0;
}, function (_ref7) {
    var theme = _ref7.theme;
    return theme.text.regular;
});

export var Div = styled.div(_templateObject5);

export var StyledArrow = styled.div(_templateObject6, function (props) {
    return props.open ? "rotate(0deg)" : "rotate(-90deg)";
});