var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCheckbox, StyledCheckboxLabel, StyledCheckboxWrapper, StyledCheckboxButton } from './style';

import CheckboxGroup from './CheckboxGroup';

import { withTheme } from 'styled-components';

import { isUndef, isChild } from '../helpers/typeUtils';
import { generalId } from '../helpers';

var defaultProps = {
  checked: void 0,
  disabled: false,
  indeterminate: false,
  toggle: false
};

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;


      var checked = e.target.checked;

      isUndef(_this.props.checked) && _this.setState({ checked: checked });

      if (onChange) onChange(e, Object.assign({}, _this.props, { checked: checked }));
    };

    _this.inputId = generalId();

    _this.state = {
      checked: props.checked || false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.props.checked && isUndef(nextProps.checked)) {
        this.setState({
          checked: this.props.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onChange = _props.onChange,
          name = _props.name,
          disabled = _props.disabled,
          indeterminate = _props.indeterminate,
          label = _props.label,
          color = _props.color,
          inactiveColor = _props.inactiveColor,
          toggle = _props.toggle,
          rest = _objectWithoutProperties(_props, ['children', 'onChange', 'name', 'disabled', 'indeterminate', 'label', 'color', 'inactiveColor', 'toggle']);

      var hasChild = !isChild(children);

      var checked = isUndef(this.props.checked) ? this.state.checked : this.props.checked;

      return React.createElement(
        StyledCheckboxWrapper,
        null,
        React.createElement(StyledCheckbox, Object.assign({
          checked: checked,
          name: name,
          id: this.inputId,
          disabled: disabled,
          onChange: this.handleChange,
          indeterminate: indeterminate
        }, rest)),
        React.createElement(
          StyledCheckboxLabel,
          {
            id: this.inputId,
            toggle: toggle,
            color: color,
            disabled: disabled,
            indeterminate: indeterminate

          },
          React.createElement(StyledCheckboxButton, {
            toggle: toggle,
            checked: checked,
            indeterminate: indeterminate,
            disabled: disabled,
            inactiveColor: inactiveColor,
            color: color
          }),
          label ? label : hasChild && children
        )
      );
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.defaultProps = defaultProps;
Checkbox.Group = CheckboxGroup;


export default withTheme(Checkbox);