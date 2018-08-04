var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledModalWrapper, StyledModalBackGround, StyledModal, StyledAlert, StyledAlertTitle, StyledAlertDescription, CloseButton } from './style';

import Icon from '../Icon';

import { isChild } from '../helpers/typeUtils';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalAction from './ModalAction';
import JokBody from '../globals/JokBody';

var defaultProps = {
  open: false,
  alert: 'none',
  closable: false,
  fullscreen: false,
  scrollable: false
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function (e) {
      var onClose = _this.props.onClose;


      if (onClose) onClose(e, _this.props);
    }, _this.handleStopEvent = function (e) {
      e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          title = _props.title,
          alert = _props.alert,
          action = _props.action,
          alertTitle = _props.alertTitle,
          fullscreen = _props.fullscreen,
          children = _props.children,
          closable = _props.closable,
          styleHeader = _props.styleHeader,
          classNameHeader = _props.classNameHeader,
          styleContent = _props.styleContent,
          classNameContent = _props.classNameContent,
          styleAction = _props.styleAction,
          classNameAction = _props.classNameAction,
          scrollable = _props.scrollable,
          rest = _objectWithoutProperties(_props, ['open', 'title', 'alert', 'action', 'alertTitle', 'fullscreen', 'children', 'closable', 'styleHeader', 'classNameHeader', 'styleContent', 'classNameContent', 'styleAction', 'classNameAction', 'scrollable']);

      var hasChild = !isChild(children);

      var listIcon = {
        info: React.createElement(Icon, { color: 'info', name: 'info-circle', size: 'lg' }),
        success: React.createElement(Icon, { color: 'success', name: 'check-circle', size: 'lg' }),
        error: React.createElement(Icon, { color: 'error', name: 'times-circle', size: 'lg' }),
        warning: React.createElement(Icon, { color: 'warning', name: 'exclamation-circle', size: 'lg' })

      };
      return React.createElement(
        JokBody,
        null,
        React.createElement(
          StyledModalWrapper,
          { openModal: open, onClick: this.handleClose },
          React.createElement(StyledModalBackGround, { openModal: open }),
          React.createElement(
            StyledModal,
            Object.assign({ fullscreen: fullscreen }, rest, { openModal: open, onClick: this.handleStopEvent }),
            closable && React.createElement(CloseButton, { onClick: this.handleClose, variant: 'icon', icon: 'times' }),
            title && alert === "none" ? React.createElement(
              ModalHeader,
              { style: styleHeader, className: classNameHeader },
              title
            ) : null,
            React.createElement(
              ModalContent,
              { scrollable: scrollable, fullscreen: fullscreen, style: styleContent, className: classNameContent },
              alert !== "none" ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  StyledAlert,
                  null,
                  listIcon[alert],
                  alertTitle && React.createElement(
                    StyledAlertTitle,
                    null,
                    alertTitle
                  )
                ),
                React.createElement(
                  StyledAlertDescription,
                  { alert: alert },
                  hasChild && children
                )
              ) : hasChild && children
            ),
            action && React.createElement(ModalAction, { style: styleAction, className: classNameAction, action: action })
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

Modal.defaultProps = defaultProps;


export default Modal;