var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import Icon from '../Icon';

import { TextBtn, Label, SpinnerButton } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  disabled: false,
  size: 'default',
  rule: 'button',
  loading: false,
  primary: false,
  secondary: false,
  iconPosition: 'left',
  tag: "button",
  color: "",
  hoverable: false
};

var TextButton = function (_React$Component) {
  _inherits(TextButton, _React$Component);

  function TextButton() {
    _classCallCheck(this, TextButton);

    return _possibleConstructorReturn(this, (TextButton.__proto__ || Object.getPrototypeOf(TextButton)).apply(this, arguments));
  }

  _createClass(TextButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hrefString = _props.hrefString,
          tag = _props.tag,
          children = _props.children,
          loading = _props.loading,
          size = _props.size,
          primary = _props.primary,
          secondary = _props.secondary,
          icon = _props.icon,
          iconPosition = _props.iconPosition;


      var hasChild = !isChild(children);

      var ElementType = !hrefString ? TextBtn.withComponent(tag) : TextBtn.withComponent('a');

      return React.createElement(
        ElementType,
        this.props,
        icon ? loading ? React.createElement(SpinnerButton, { size: size, iconPosition: iconPosition, primary: primary, secondary: secondary }) : React.createElement(Icon, { iconPosition: iconPosition, name: icon }) : '',
        loading && !icon && React.createElement(SpinnerButton, { size: size, iconPosition: iconPosition, primary: primary, secondary: secondary }),
        hasChild && React.createElement(
          Label,
          null,
          children
        )
      );
    }
  }]);

  return TextButton;
}(React.Component);

TextButton.defaultProps = defaultProps;


export default TextButton;