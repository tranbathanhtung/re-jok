var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import { StyledSelect, StyledOption } from './style';

import { isFunction, isChild } from '../helpers/typeUtils';

import { noop } from '../helpers';

var Option = function Option(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ['children']);

  var hasChild = !isChild(children);

  return React.createElement(
    StyledOption,
    rest,
    hasChild && children
  );
};

Option.defaultProps = {
  disabled: false
};

var defaultProps = {
  onChange: noop
};

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var onChange = _this.props.onChange;


      isFunction(onChange) && onChange(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['placeholder', 'children']);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledSelect,
        Object.assign({ onChange: this.handleChange }, rest),
        placeholder && React.createElement(
          Option,
          { value: -1, disabled: true },
          placeholder
        ),
        hasChild && children
      );
    }
  }]);

  return Select;
}(React.Component);

Select.defaultProps = defaultProps;
Select.Option = Option;


export default Select;