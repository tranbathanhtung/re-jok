var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledAlert, StyledIconClose, StyledAlertIcon, StyledAlertTitle, StyledAlertContent } from './style';

import { isFunction, isChild } from '../helpers/typeUtils';

import { noop } from '../helpers';

var listIcon = {
  info: React.createElement(StyledAlertIcon, { style: { color: "#fff" }, name: 'info-circle', size: 'lg' }),
  success: React.createElement(StyledAlertIcon, { style: { color: "#fff" }, name: 'check-circle', size: 'lg' }),
  error: React.createElement(StyledAlertIcon, { style: { color: "#fff" }, name: 'times-circle', size: 'lg' }),
  warning: React.createElement(StyledAlertIcon, { style: { color: "#fff" }, name: 'exclamation-circle', size: 'lg' })

};

var defaultProps = {
  closable: false,
  onClose: noop,
  type: 'none',
  hasBoxShadow: false
};

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: true
    }, _this.handleClose = function (e) {
      var onClose = _this.props.onClose;


      _this.setState({
        show: false
      });

      isFunction(onClose) && onClose(e, Object.assign({}, _this.props));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          closable = _props.closable,
          type = _props.type,
          title = _props.title,
          icon = _props.icon,
          rest = _objectWithoutProperties(_props, ['children', 'closable', 'type', 'title', 'icon']);

      var show = this.state.show;


      var hasColor = rest.color || type !== "none";
      var hasChild = !isChild(children);

      return show ? React.createElement(
        StyledAlert,
        Object.assign({ closable: closable }, rest, { type: type }),
        type !== "none" && !icon && !rest.color && listIcon[type],
        type === "none" && icon && React.createElement(StyledAlertIcon, { style: { color: "#fff" }, name: icon, size: 'lg' }),
        title && React.createElement(
          StyledAlertTitle,
          { hasColor: hasColor },
          title,
          '!'
        ),
        React.createElement(
          StyledAlertContent,
          null,
          hasChild && children
        ),
        closable && React.createElement(StyledIconClose, { onClick: this.handleClose, name: 'times' })
      ) : null;
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = defaultProps;


export default Alert;