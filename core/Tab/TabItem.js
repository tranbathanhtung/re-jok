var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledTabItem, StyledTabItemInner } from './style';

var defaultProps = {
  disabled: false
};

var TabItem = function (_React$Component) {
  _inherits(TabItem, _React$Component);

  function TabItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabItem.__proto__ || Object.getPrototypeOf(TabItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          tabKey = _this$props.tabKey,
          onSelect = _this$props.onSelect,
          disabled = _this$props.disabled;


      var info = {
        key: tabKey,
        event: e
      };

      !disabled && onSelect && onSelect(info);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          tabKey = _props.tabKey,
          label = _props.label,
          keyActive = _props.keyActive,
          rest = _objectWithoutProperties(_props, ['children', 'tabKey', 'label', 'keyActive']);

      var active = tabKey === keyActive;

      return React.createElement(
        StyledTabItem,
        {
          active: active,
          onClick: this.handleClick
        },
        React.createElement(
          StyledTabItemInner,
          Object.assign({}, rest, {
            active: active
          }),
          label
        )
      );
    }
  }]);

  return TabItem;
}(React.Component);

TabItem.defaultProps = defaultProps;


export default TabItem;