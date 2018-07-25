var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import ReactDOM from 'react-dom';
import Icon from '../Icon';
import { isChild } from '../helpers/typeUtils';

import { StyledCollapseItem, StyledCollapseItemTitle, StyledCollapseItemContent, Div, StyledArrow } from './style';

var defaultProps = {
  activeKeys: [],
  iconArrow: true,
  disabled: false

};

var CollapseItem = function (_React$Component) {
  _inherits(CollapseItem, _React$Component);

  function CollapseItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CollapseItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollapseItem.__proto__ || Object.getPrototypeOf(CollapseItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = { childHeight: "0" }, _this.refContent = React.createRef(), _this.refWrapper = React.createRef(), _this.getHeightRaw = function () {
      var node = ReactDOM.findDOMNode(_this.refContent.current);
      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (node && node instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
        var childHeightRaw = node.offsetHeight || node.clientHeight;

        var _childHeight = childHeightRaw / 10 + 'rem';

        return _childHeight;
      }
      return "0";
    }, _this.setHeightRaw = function (open) {
      var childHeight = _this.getHeightRaw();

      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {

        wrapper.style.height = '' + (!open ? childHeight : "0");
      }
    }, _this.handleCloseCollapse = function (open) {
      var childHeight = _this.state.childHeight;

      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {

        wrapper.style.height = childHeight;

        _this.setHeightRaw(open);
      }
    }, _this.handleOpenCollapse = function (open) {
      _this.setHeightRaw(open);
    }, _this.handleClick = function (open) {
      var _this$props = _this.props,
          onOpenChange = _this$props.onOpenChange,
          collKey = _this$props.collKey,
          disabled = _this$props.disabled;


      if (!disabled) {
        if (!open) {

          _this.handleOpenCollapse(open);
        } else {

          _this.handleCloseCollapse(open);
        }

        onOpenChange && onOpenChange({
          key: collKey,
          item: _this,
          open: open
        });
      }
    }, _this.onTransitionEnd = function (e, isOpen) {
      var wrapper = ReactDOM.findDOMNode(_this.refWrapper.current);

      if (wrapper && wrapper instanceof HTMLElement) {
        wrapper.style.height = '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollapseItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var childHeight = this.getHeightRaw();
      this.setState({ childHeight: childHeight });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      // This set transition when close collapse in accordion mode
      var _props = this.props,
          accordion = _props.accordion,
          collKey = _props.collKey;
      var childHeight = this.state.childHeight;


      if (accordion && prevProps.activeKeys.includes(collKey) && prevState.childHeight === childHeight) {

        var wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

        var open = prevProps.activeKeys.includes(collKey);

        if (wrapper && wrapper instanceof HTMLElement) {

          wrapper.style.height = childHeight;

          this.setHeightRaw(open);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          label = _props2.label,
          activeKeys = _props2.activeKeys,
          collKey = _props2.collKey,
          iconArrow = _props2.iconArrow,
          rest = _objectWithoutProperties(_props2, ['children', 'label', 'activeKeys', 'collKey', 'iconArrow']);

      var isOpen = activeKeys.includes(collKey);
      var hasChild = !isChild(children);

      return React.createElement(
        StyledCollapseItem,
        null,
        React.createElement(
          StyledCollapseItemTitle,
          Object.assign({}, rest, { onClick: function onClick() {
              return _this2.handleClick(isOpen);
            } }),
          label,
          iconArrow && React.createElement(
            StyledArrow,
            { open: isOpen },
            React.createElement(Icon, { name: 'angle-down' })
          )
        ),
        React.createElement(
          StyledCollapseItemContent,
          {
            open: isOpen,
            innerRef: this.refWrapper,
            onTransitionEnd: function onTransitionEnd(e) {
              return _this2.onTransitionEnd(e, isOpen);
            },
            childHeight: this.state.childHeight

          },
          React.createElement(
            Div,
            { innerRef: this.refContent },
            hasChild && children
          )
        )
      );
    }
  }]);

  return CollapseItem;
}(React.Component);

CollapseItem.defaultProps = defaultProps;


export default CollapseItem;