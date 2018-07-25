var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\norder: ', ';\ncolor:  ', ';\ndisplay: inline-block;\n\n\n'], ['\norder: ', ';\ncolor:  ', ';\ndisplay: inline-block;\n\n\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';

import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

var IconContainer = styled.div(_templateObject, function (props) {
  return props.iconPosition === "left" ? 0 : 1;
}, function (props) {
  return props.color ? props.theme[props.color].main : null;
});

var defaultProps = {
  spin: false,
  iconPosition: "left"
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          iconPosition = _props.iconPosition,
          name = _props.name,
          size = _props.size,
          style = _props.style,
          className = _props.className,
          spin = _props.spin,
          color = _props.color,
          rest = _objectWithoutProperties(_props, ['iconPosition', 'name', 'size', 'style', 'className', 'spin', 'color']);

      return React.createElement(
        IconContainer,
        Object.assign({
          style: style,
          className: className,
          color: color,
          iconPosition: iconPosition
        }, rest),
        React.createElement(FontAwesome, {
          name: name,
          size: size,

          spin: spin

        })
      );
    }
  }]);

  return Icon;
}(React.Component);

Icon.defaultProps = defaultProps;


export default Icon;