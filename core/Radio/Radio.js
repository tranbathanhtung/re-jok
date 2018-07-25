var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledRadioWrapper, StyledRadio, StyledRadioLabel, StyledRadioButton } from './style';

import { withTheme } from 'styled-components';

import RadioGroup from './RadioGroup';
import { isUndef, isChild, isFunction } from '../helpers/typeUtils';
import { generalId, noop } from '../helpers';

var defaultProps = {
  checked: void 0,
  defaultChecked: false,
  disabled: false,
  onChange: noop
};

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;


      var checked = e.target.checked;

      isFunction(onChange) && onChange(e, Object.assign({}, _this.props));

      isUndef(_this.props.checked) && _this.setState({ checked: checked });
    };

    _this.inputId = generalId();

    _this.state = {
      checked: isUndef(props.checked) ? props.defaultChecked : props.checked
    };
    return _this;
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onChange = _props.onChange,
          name = _props.name,
          disabled = _props.disabled,
          label = _props.label,
          color = _props.color,
          rest = _objectWithoutProperties(_props, ['children', 'onChange', 'name', 'disabled', 'label', 'color']);

      var hasChild = !isChild(children);

      var checked = isUndef(this.props.checked) ? this.state.checked : this.props.checked;

      return React.createElement(
        StyledRadioWrapper,
        null,
        React.createElement(StyledRadio, {
          onChange: this.handleChange,
          checked: checked,
          name: name,
          id: this.inputId,
          disabled: disabled,
          value: rest.value
        }),
        React.createElement(
          StyledRadioLabel,
          Object.assign({
            id: this.inputId,
            color: color,
            disabled: disabled
          }, rest),
          React.createElement(StyledRadioButton, {
            checked: checked,
            disabled: disabled,
            color: color

          }),
          label ? label : hasChild && children
        )
      );
    }
  }]);

  return Radio;
}(React.Component);

Radio.defaultProps = defaultProps;
Radio.Group = RadioGroup;


export default withTheme(Radio);