var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCheckboxGroup } from './style';

import Checkbox from './Checkbox';

import { isUndef, isChild } from '../helpers/typeUtils';

var defaultProps = {
  values: [],
  toggle: false

};

var CheckboxGroup = function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

    _this.handleChange = function (e, propsCheckbox) {
      var onChange = _this.props.onChange;


      if (propsCheckbox.checked) {
        _this.setState({
          values: [].concat(_toConsumableArray(_this.state.values), [propsCheckbox.value])
        }, function () {
          onChange && onChange(_this.state.values);
        });
      } else {
        _this.setState({
          values: _this.state.values.filter(function (v) {
            return v !== propsCheckbox.value;
          })
        }, function () {
          onChange && onChange(_this.state.values);
        });
      }
    };

    _this.state = {
      values: isUndef(props.values) ? [] : props.values
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (nextProps.values !== this.props.values && !isUndef(nextProps.values)) {
        this.setState({
          values: nextProps.values
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          name = _props.name,
          color = _props.color,
          toggle = _props.toggle,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['children', 'name', 'color', 'toggle', 'onChange']);

      var hasChild = !isChild(children);
      var values = this.state.values;


      var checkboxes = hasChild && React.Children.map(children, function (checkbox) {
        return React.cloneElement(checkbox, {
          checked: values.includes(checkbox.props.value),
          color: color,
          onChange: _this2.handleChange,
          toggle: toggle
        });
      });

      return React.createElement(
        StyledCheckboxGroup,
        rest,
        checkboxes
      );
    }
  }]);

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = defaultProps;


export default CheckboxGroup;