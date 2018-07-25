var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import Icon from '../Icon';

import { Btn, OutlineBtn, Label, SpinnerButton, IconBtn } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  disabled: false,
  size: 'default',
  rule: 'button',
  loading: false,
  primary: false,
  secondary: false,
  fullWidth: false,
  iconPosition: 'left',
  backgroundColor: "",
  tag: "button",
  variant: 'raised',
  hrefString: "",
  hasBoxShadow: false
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          hrefString = _props.hrefString,
          children = _props.children,
          loading = _props.loading,
          shape = _props.shape,
          size = _props.size,
          primary = _props.primary,
          secondary = _props.secondary,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          variant = _props.variant;


      var ListButton = {
        raised: Btn,
        outline: OutlineBtn,
        inverted: OutlineBtn,
        icon: IconBtn
      };
      var hasChild = !isChild(children);

      var ElementType = !hrefString ? ListButton[variant].withComponent(tag) : ListButton[variant].withComponent('a');

      return React.createElement(
        ElementType,
        this.props,
        icon ? loading ? React.createElement(SpinnerButton, { size: size, iconPosition: iconPosition, shape: shape, primary: primary, secondary: secondary }) : React.createElement(Icon, { iconPosition: iconPosition, name: icon }) : '',
        loading && !icon && React.createElement(SpinnerButton, { size: size, iconPosition: iconPosition, shape: shape, primary: primary, secondary: secondary }),
        shape === "circle" || variant === "icon" ? null : hasChild && React.createElement(
          Label,
          null,
          children
        )
      );
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = defaultProps;


export default Button;