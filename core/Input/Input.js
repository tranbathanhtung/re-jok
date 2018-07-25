var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledInputWrapper, StyledInput, StyledIconInput, StyledAddonBefore, StyledAddonAfter } from './style';

import Icon from '../Icon';
import { withTheme } from 'styled-components';

var defaultProps = {
  size: 'default',
  underline: false,
  focus: false,
  iconPosition: 'left',
  fullWidth: false,
  textarea: false,
  autosize: false,
  blank: false,
  disabled: false
};

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.focusTextInput = function () {

      _this.refInput.current.focus();
    };

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;


      if (onChange) onChange(e, Object.assign({}, _this.props));
    };

    _this.onKeyDown = function (e) {
      var el = e.target;

      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          autosize = _this$props.autosize;


      if (autosize) {
        setTimeout(function () {
          el.style.cssText = 'height:auto; padding:0';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
      }

      onKeyDown && onKeyDown(e, Object.assign({}, _this.props));
    };

    _this.refInput = null;

    _this.setTextInputRef = function (element) {
      _this.refInput = element;
    };

    _this.focusTextInput = function () {
      // Focus the text input using the raw DOM API
      if (_this.refInput) _this.refInput.focus();
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var focus = this.props.focus;


      focus && this.focusTextInput();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onChange = _props.onChange,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          textarea = _props.textarea,
          rest = _objectWithoutProperties(_props, ['children', 'onChange', 'icon', 'iconPosition', 'textarea']);

      var props = rest;

      var ElementType = textarea ? StyledInput.withComponent("textarea") : StyledInput;

      return React.createElement(
        StyledInputWrapper,
        { fullWidth: props.fullWidth },
        props.addonBefore && !textarea && React.createElement(
          StyledAddonBefore,
          { validateStatus: rest.validateStatus },
          props.addonBefore
        ),
        icon && !textarea && React.createElement(
          StyledIconInput,
          { iconPosition: iconPosition },
          React.createElement(Icon, { style: { fontSize: props.theme.size[props.size].fontSize }, name: icon })
        ),
        React.createElement(ElementType, Object.assign({}, rest, {
          icon: icon,
          onKeyDown: this.onKeyDown,
          textarea: textarea,
          iconPosition: iconPosition,
          onChange: this.handleChange,
          innerRef: this.setTextInputRef
        })),
        props.addonAfter && !textarea && React.createElement(
          StyledAddonAfter,
          { validateStatus: rest.validateStatus },
          props.addonAfter
        )
      );
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = defaultProps;


export default withTheme(Input);