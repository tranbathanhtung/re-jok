var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledMenuItem, StyledMenuItemText, StyledMenuLeftIcon } from './style';

import { isChild } from '../helpers/typeUtils';

import { connectMenu } from './MenuContext';

var defaultProps = {
  paddingLeft: 24,
  disable: false
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          keyActive = _this$props.keyActive,
          onClick = _this$props.onClick,
          disable = _this$props.disable,
          rest = _objectWithoutProperties(_this$props, ['keyActive', 'onClick', 'disable']);

      if (disable) return;

      var _rest$context = rest.context,
          multiple = _rest$context.multiple,
          onSelect = _rest$context.onSelect,
          selectedKeys = _rest$context.selectedKeys,
          onDeselect = _rest$context.onDeselect;


      var isSelected = selectedKeys.indexOf(keyActive) !== -1;
      var info = {
        key: keyActive,
        keyPath: [keyActive],
        item: _this,
        domEvent: e
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          keyActive = _props.keyActive,
          level = _props.level,
          paddingLeft = _props.paddingLeft,
          primaryText = _props.primaryText,
          leftIcon = _props.leftIcon,
          disable = _props.disable,
          rest = _objectWithoutProperties(_props, ['children', 'keyActive', 'level', 'paddingLeft', 'primaryText', 'leftIcon', 'disable']);

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
          disable: disable,
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