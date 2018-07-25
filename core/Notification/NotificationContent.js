var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledNotification, StyledNotificationContent, StyledNotificationTitle, StyledNotificationMessage, StyledNotificationClose, StyledNotificationMedia } from './style';

import { StyledIconClose } from '../Alert/style';

import store from './store';

var dispatch = store.dispatch;

var NotificationContent = function (_React$Component) {
  _inherits(NotificationContent, _React$Component);

  function NotificationContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationContent.__proto__ || Object.getPrototypeOf(NotificationContent)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function () {
      var id = _this.props.id;


      dispatch({ type: 'REMOVE', payload: { id: id } });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          timeout = _props.timeout,
          notif = _props.notif;
      var onShow = notif.onShow;


      if (typeof timeout === 'number') {
        this.closeTimer = setTimeout(function () {
          _this2.handleClose();
        }, timeout);
      }

      onShow && onShow(Object.assign({}, this.props));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
      }

      this.props.notif && this.props.notif.onClose && this.props.notif.onClose(Object.assign({}, this.props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          notif = _props2.notif,
          config = _props2.config;

      var closable = notif.closable,
          message = notif.message,
          title = notif.title,
          customClose = notif.customClose,
          customContent = notif.customContent,
          media = notif.media,
          color = notif.color,
          rest = _objectWithoutProperties(notif, ['closable', 'message', 'title', 'customClose', 'customContent', 'media', 'color']);

      return React.createElement(
        StyledNotification,
        Object.assign({ color: color, config: config }, rest),
        customContent ? customContent : React.createElement(
          React.Fragment,
          null,
          closable && React.createElement(StyledIconClose, { color: color, onClick: this.handleClose, name: 'times' }),
          media && React.createElement(
            StyledNotificationMedia,
            null,
            media
          ),
          React.createElement(
            StyledNotificationContent,
            { hasMedia: media },
            title && React.createElement(
              StyledNotificationTitle,
              { color: color },
              title
            ),
            message && React.createElement(
              StyledNotificationMessage,
              { color: color },
              message
            )
          ),
          React.createElement(
            StyledNotificationClose,
            null,
            customClose
          )
        )
      );
    }
  }]);

  return NotificationContent;
}(React.Component);

export default NotificationContent;