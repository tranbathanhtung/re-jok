var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledSidebarWrapper, StyledSidebarBackground, StyledSidebar } from './style';

import { isChild } from '../helpers/typeUtils';

import SidebarContent from './SidebarContent';
import JokBody from '../globals/JokBody';

var defaultProps = {
  open: false,
  direction: 'left',
  opacity: false,
  fullScreen: false,
  width: 256,
  height: 60
};

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggle = function (e) {
      var onToggle = _this.props.onToggle;


      onToggle && onToggle(e, Object.assign({}, _this.props));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          opacity = _props.opacity,
          children = _props.children,
          onToggle = _props.onToggle,
          rest = _objectWithoutProperties(_props, ['open', 'opacity', 'children', 'onToggle']);

      var hasChild = !isChild(children);

      return React.createElement(
        JokBody,
        null,
        React.createElement(
          StyledSidebarWrapper,
          { openSidebar: open },
          React.createElement(StyledSidebarBackground, {
            opacityMode: opacity,
            onClick: this.handleToggle,
            openSidebar: open }),
          React.createElement(
            StyledSidebar,
            Object.assign({ openSidebar: open }, rest),
            hasChild && children
          )
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

Sidebar.defaultProps = defaultProps;
Sidebar.Content = SidebarContent;


export default Sidebar;