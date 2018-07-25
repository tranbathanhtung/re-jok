var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon';

import { isChild } from '../helpers/typeUtils';

import { StyledSubMenuWrapper, StyledSubMenuTitle, StyledSubMenu, StyledSubMenuArrow } from './style';

import { connectMenu } from './MenuContext';

var defaultProps = {
  level: 1
};

var SubMenu = function (_React$Component) {
  _inherits(SubMenu, _React$Component);

  function SubMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = { childHeight: "0" }, _this.refWrapper = React.createRef(), _this.refSubMenu = React.createRef(), _this.getHeightRaw = function () {
      var node = ReactDOM.findDOMNode(_this.refSubMenu.current);
      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (node && node instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
        var childHeightRaw = node.offsetHeight || node.clientHeight;

        var _childHeight = childHeightRaw / 10 + 'rem';

        return _childHeight;
      }
      return "0";
    }, _this.setHeightRaw = function (open) {
      var childHeight = _this.getHeightRaw();
      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {

        wrapper.style.height = '' + (!open ? childHeight : "0");
      }
    }, _this.handleCloseCollapse = function (open) {
      var childHeight = _this.state.childHeight;

      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {

        wrapper.style.height = childHeight;

        _this.setHeightRaw(open);
      }
    }, _this.handleOpenCollapse = function (open) {
      _this.setHeightRaw(open);
    }, _this.handleClick = function (open) {
      var _this$props = _this.props,
          openKey = _this$props.openKey,
          rest = _objectWithoutProperties(_this$props, ['openKey']);

      var onOpenChange = rest.context.onOpenChange;


      if (open) {

        _this.handleOpenCollapse(!open);
      } else {

        _this.handleCloseCollapse(!open);
      }

      onOpenChange && onOpenChange({
        key: openKey,
        item: _this,
        open: open
      });
    }, _this.onTransitionEnd = function (e, isOpen) {
      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {

        wrapper.style.height = '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SubMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var childHeight = this.getHeightRaw();
      this.setState({ childHeight: childHeight });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          title = _props.title,
          openKey = _props.openKey,
          level = _props.level,
          rest = _objectWithoutProperties(_props, ['children', 'title', 'openKey', 'level']);

      var style = {};

      style.paddingLeft = level * 24;

      var openKeys = rest.context.openKeys;


      var isOpen = openKeys.includes(this.props.openKey);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledSubMenuWrapper,
        null,
        React.createElement(
          StyledSubMenuTitle,
          { style: style, onClick: function onClick() {
              return _this2.handleClick(!isOpen);
            } },
          title,
          React.createElement(
            StyledSubMenuArrow,
            { open: isOpen },
            React.createElement(Icon, { name: 'angle-down' })
          )
        ),
        React.createElement(
          StyledSubMenu,
          { open: isOpen,
            childHeight: this.state.childHeight,
            innerRef: this.refWrapper,
            onTransitionEnd: function onTransitionEnd(e) {
              return _this2.onTransitionEnd(e, isOpen);
            }

          },
          React.createElement(
            'div',
            { ref: this.refSubMenu },
            hasChild && React.Children.map(children, function (ch, i) {
              return React.cloneElement(ch, {
                key: i,
                level: level + 1
              });
            })
          )
        )
      );
    }
  }]);

  return SubMenu;
}(React.Component);

SubMenu.defaultProps = defaultProps;


export default connectMenu(SubMenu);