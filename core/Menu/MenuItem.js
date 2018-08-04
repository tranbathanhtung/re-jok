var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledMenuItem, StyledMenuItemText, StyledMenuLeftIcon } from './style';

import { isChild } from '../helpers/typeUtils';
import { generalId } from '../helpers';

import { connectMenu } from './MenuContext';

var defaultProps = {
  paddingLeft: 24,
  disabled: false
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          rest = _objectWithoutProperties(_this$props, ['onClick', 'disabled']);

      var keyActive = _this.state.keyActive;


      if (disabled) return;

      var _rest$context = rest.context,
          multiple = _rest$context.multiple,
          onSelect = _rest$context.onSelect,
          selectedKeys = _rest$context.selectedKeys,
          onDeselect = _rest$context.onDeselect;


      var isSelected = selectedKeys.indexOf(keyActive) !== -1;
      var info = {
        key: keyActive,
        keyPath: [keyActive],
        event: e
      };
      onClick && onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    _this.state = {
      keyActive: props.keyActive || generalId()
    };
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          level = _props.level,
          paddingLeft = _props.paddingLeft,
          primaryText = _props.primaryText,
          leftIcon = _props.leftIcon,
          disabled = _props.disabled,
          rest = _objectWithoutProperties(_props, ['children', 'level', 'paddingLeft', 'primaryText', 'leftIcon', 'disabled']);

      var keyActive = this.state.keyActive;


      var style = {};

      style.paddingLeft = level ? level * paddingLeft : paddingLeft;

      var hasChild = !isChild(children);

      var _rest$context2 = rest.context,
          selectedKeys = _rest$context2.selectedKeys,
          activeColor = _rest$context2.activeColor,
          activeNormal = _rest$context2.activeNormal;


      var active = selectedKeys.includes(keyActive);
      return React.createElement(
        StyledMenuItem,
        Object.assign({
          level: level,
          disabled: disabled,
          activeColor: activeColor,
          activeNormal: activeNormal,
          style: style
        }, rest, {
          active: active,
          onClick: this.handleClick }),
        leftIcon && React.createElement(
          StyledMenuLeftIcon,
          null,
          leftIcon
        ),
        primaryText && React.createElement(
          StyledMenuItemText,
          null,
          primaryText
        ),
        hasChild && children
      );
    }
  }]);

  return MenuItem;
}(React.Component);

MenuItem.defaultProps = defaultProps;


export default connectMenu(MenuItem);