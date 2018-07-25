var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledTag, StyledIconClose } from './style';

import { isFunction, isChild } from '../helpers/typeUtils';
import { noop } from '../helpers';

var defaultProps = {
  closable: false,
  size: 'default',
  onClose: noop
};

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function (e) {
      var onClose = _this.props.onClose;


      isFunction(onClose) && onClose(e, Object.assign({}, _this.props));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          closable = _props.closable,
          rest = _objectWithoutProperties(_props, ['children', 'closable']);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledTag,
        Object.assign({ closable: closable }, rest),
        hasChild && children,
        closable && React.createElement(StyledIconClose, { onClick: this.handleClose, name: 'times' })
      );
    }
  }]);

  return Tag;
}(React.Component);

Tag.defaultProps = defaultProps;


export default Tag;