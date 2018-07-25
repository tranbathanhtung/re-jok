var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledDropdownWrapper, StyledDropdown } from './style';
import ReactDOM from 'react-dom';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  position: 'bottomLeft',
  trigger: 'hover'
};

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      top: 0,
      left: 0,
      open: false
    }, _this.refParent = React.createRef(), _this.refChildren = React.createRef(), _this.refDropdown = React.createRef(), _this.resetDropdown = function () {

      _this.setState({
        top: 0,
        left: 0,
        open: false
      });
    }, _this.handleEvent = function (e) {
      var trigger = _this.props.trigger;


      var wrapper = ReactDOM.findDOMNode(_this.refParent.current);
      var node = ReactDOM.findDOMNode(_this.refChildren.current);
      var dropdown = ReactDOM.findDOMNode(_this.refDropdown.current);
      var open = _this.state.open;


      if (node && node instanceof HTMLElement && dropdown && dropdown instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
        if (node.contains(e.target) || dropdown.contains(e.target) || wrapper.contains(e.target)) {
          var rectChild = _this.getPositionElement(node);
          var rectParent = _this.getPositionElement(wrapper);

          var _this$realElement = _this.realElement(dropdown),
              width = _this$realElement.width,
              height = _this$realElement.height;

          var _this$getRealPosition = _this.getRealPosition(rectChild, rectParent, width, height),
              _top = _this$getRealPosition.top,
              _left = _this$getRealPosition.left;

          if (open) {
            if (trigger === 'hover') return;
            setTimeout(function () {
              _this.resetDropdown();
            }, 150);
          } else {
            _this.setState({
              top: _top,
              left: _left,
              open: true
            });
          }
        } else {
          if (trigger === 'hover') return;
          _this.resetDropdown();
        }
      }
    }, _this.realElement = function (el) {
      var clone = el.cloneNode(true);

      clone.style.display = "block";
      clone.style.top = "-9999px";
      clone.style.left = "-9999px";
      if (!document.body) throw new Error("Unexpectedly missing <body>.");
      var body = document.body;
      body.appendChild(clone);
      var height = clone.offsetHeight;
      var width = clone.offsetWidth;

      clone.remove();
      return {
        width: width,
        height: height
      };
    }, _this.getPositionElement = function (el) {
      var rect = el.getBoundingClientRect();

      var height = el.offsetHeight || el.clientHeight;
      var width = el.offsetWidth || el.clientWidth;

      return {
        top: rect.top,
        left: rect.left,
        height: height,
        width: width
      };
    }, _this.getRealPosition = function (rectChild, rectParent, width, height) {
      var position = _this.props.position;


      var top = 0;
      var left = 0;
      switch (position) {
        case 'bottomLeft':
          top = rectChild.top - rectParent.top + rectChild.height + 10;
          left = rectChild.left - rectParent.left;
          break;
        case 'topLeft':
          top = rectChild.top - height - rectParent.top - 10;
          left = rectChild.left - rectParent.left;
          break;
        case 'bottomRight':
          top = rectChild.top - rectParent.top + rectChild.height + 10;
          left = rectChild.left - rectParent.left - width + rectChild.width;
          break;
        case 'topRight':
          top = rectChild.top - height - rectParent.top - 10;
          left = rectChild.left - rectParent.left - width + rectChild.width;
          break;
        case 'bottomCenter':
          top = rectChild.top - rectParent.top + rectChild.height + 10;
          left = rectChild.left - rectParent.left - width / 2 + rectChild.width / 2;
          break;
        case 'topCenter':
          top = rectChild.top - height - rectParent.top - 10;
          left = rectChild.left - rectParent.left - width / 2 + rectChild.width / 2;
          break;
        default:
          return {
            top: top,
            left: left
          };

      }

      return {
        top: top,
        left: left
      };
    }, _this.onMouseEnter = function (e) {

      var wrapper = ReactDOM.findDOMNode(_this.refParent.current);
      if (wrapper && wrapper instanceof HTMLElement) wrapper.contains(e.target) && _this.timer && clearTimeout(_this.timer);

      _this.handleEvent(e);
    }, _this.onMouseLeave = function () {

      _this.timer = setTimeout(function () {

        _this.resetDropdown();
      }, 300);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var trigger = this.props.trigger;


      trigger === "click" && document.addEventListener('mousedown', this.handleEvent);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var trigger = this.props.trigger;


      trigger === "click" && document.removeEventListener('mousedown', this.handleEvent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          content = _props.content,
          trigger = _props.trigger,
          rest = _objectWithoutProperties(_props, ['children', 'content', 'trigger']);

      var hasChild = !isChild(children);

      var mouseEvent = {
        onMouseLeave: trigger === 'click' ? null : this.onMouseLeave,
        onMouseEnter: trigger === 'click' ? null : this.onMouseEnter
      };

      return React.createElement(
        StyledDropdownWrapper,
        Object.assign({}, mouseEvent, {
          innerRef: this.refParent }),
        hasChild && React.Children.count(children) === 1 ? React.createElement(children.type, Object.assign({}, children.props, {
          ref: this.refChildren })) : null,
        React.createElement(
          StyledDropdown,
          Object.assign({}, rest, { innerRef: this.refDropdown }, this.state),
          content
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.defaultProps = defaultProps;


export default Dropdown;