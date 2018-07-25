var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledCollapse } from './style';

import CollapseItem from './CollapseItem';
import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  accordion: false
};

var Collapse = function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.onOpenChange = function (event) {
      var activeKeys = _this.state.activeKeys;
      var _this$props = _this.props,
          accordion = _this$props.accordion,
          onOpen = _this$props.onOpen;

      if (accordion) {
        activeKeys = activeKeys[0] === event.key ? [] : [event.key];
      } else {
        activeKeys = [].concat(_toConsumableArray(activeKeys));
        var index = activeKeys.indexOf(event.key);
        var isActive = index > -1;
        if (isActive) {

          activeKeys = activeKeys.filter(function (key) {
            return key !== event.key;
          });
        } else {

          activeKeys = [].concat(_toConsumableArray(activeKeys), [event.key]);
        }
      }
      _this.setState({
        activeKeys: activeKeys
      });

      onOpen && onOpen(Object.assign({}, event));
    };

    _this.state = {
      activeKeys: props.activeKeys || []
    };

    return _this;
  }

  _createClass(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          accordion = _props.accordion,
          rest = _objectWithoutProperties(_props, ['children', 'accordion']);

      var activeKeys = this.state.activeKeys;


      var hasChild = !isChild(children);

      return React.createElement(
        StyledCollapse,
        rest,
        hasChild && React.Children.map(children, function (c, i) {
          return React.cloneElement(c, {
            key: i,
            activeKeys: activeKeys,
            onOpenChange: _this2.onOpenChange,
            accordion: accordion
          });
        })
      );
    }
  }]);

  return Collapse;
}(React.Component);

Collapse.defaultProps = defaultProps;
Collapse.Item = CollapseItem;


export default Collapse;