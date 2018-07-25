var _templateObject = _taggedTemplateLiteral(["\n   display: flex;\n   flex: none;\n   align-items: center;\n   justify-content: center;\n   list-style: none;\n   text-transform: uppercase;\n   box-sizing: border-box;\n  margin-right: .8rem;\n   background: ", " ;\n   color: #fafafa;\n   font-size: ", ";\n   line-height: ", ";\n   width: ", ";\n   height: ", ";\n   padding: 0;\n\n"], ["\n   display: flex;\n   flex: none;\n   align-items: center;\n   justify-content: center;\n   list-style: none;\n   text-transform: uppercase;\n   box-sizing: border-box;\n  margin-right: .8rem;\n   background: ", " ;\n   color: #fafafa;\n   font-size: ", ";\n   line-height: ", ";\n   width: ", ";\n   height: ", ";\n   padding: 0;\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  z-index: ", ";\n\n\n  border-radius: ", ";\n\n"], ["\n  ", "\n  z-index: ", ";\n\n\n  border-radius: ", ";\n\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  vertical-align: middle;\n  border-style: none;\n"], ["\n\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  vertical-align: middle;\n  border-style: none;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  list-style: none;\n  display: inline-flex;\n  margin-right: .8rem;\n  margin-left: .8rem;\n  pointer-events: auto;\n\n"], ["\n  list-style: none;\n  display: inline-flex;\n  margin-right: .8rem;\n  margin-left: .8rem;\n  pointer-events: auto;\n\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  margin-left: -.8rem;\n  width: ", ";\n  height: ", ";\n  pointer-events: auto;\n  box-shadow: rgb(255, 255, 255) 0 0 0 .2rem;\n  position: relative;\n  border-radius: 50%;\n  \n"], ["\n  margin-left: -.8rem;\n  width: ", ";\n  height: ", ";\n  pointer-events: auto;\n  box-shadow: rgb(255, 255, 255) 0 0 0 .2rem;\n  position: relative;\n  border-radius: 50%;\n  \n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

export var baseAvatar = css(_templateObject, function (props) {
  return props.imgSrc ? "transparent" : "#bdbdbd";
}, function (props) {
  return props.theme.size[props.size].fontSize;
}, function (props) {
  return props.theme.size[props.size].lineHeight;
}, function (props) {
  return props.theme.size[props.size].width;
}, function (props) {
  return props.theme.size[props.size].height;
});

export var StyledAvatar = styled.div(_templateObject2, baseAvatar, function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.avatar;
}, function (props) {
  return props.shape === "circle" ? '50%' : '.4rem';
});
export var StyledAvatarImage = styled.img.attrs({
  src: function src(props) {
    return props.imgSrc ? props.imgSrc : "";
  },
  alt: function alt(props) {
    return props.imgAlt ? props.imgAlt : "";
  }
})(_templateObject3);

//=============== Avatar Group ==================
export var StyledAvatarGroup = styled.ul(_templateObject4);

export var StyledAvatarItem = styled.li(_templateObject5, function (props) {
  return props.theme.size[props.size].width;
}, function (props) {
  return props.theme.size[props.size].height;
});