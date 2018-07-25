var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import ReactDOM from 'react-dom';

import { StyledBadge, StyledSup } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  count: 0,
  maxCount: 99,
  offset: [0, 0]
};

var Badge = function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge(props) {
    _classCallCheck(this, Badge);

    var _this = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props));

    _this.refChildren = React.createRef();

    _this.state = {
      widthChildren: 0
    };

    return _this;
  }

  _createClass(Badge, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = ReactDOM.findDOMNode(this.refChildren.current);

      if (node && node instanceof HTMLElement) {
        this.setState({ widthChildren: node.offsetWidth });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          count = _props.count,
          children = _props.children,
          maxCount = _props.maxCount;
      var widthChildren = this.state.widthChildren;


      var hasChild = !isChild(children);

      var label = count > maxCount ? maxCount + '+' : count;

      return React.createElement(
        StyledBadge,
        null,
        hasChild && React.Children.count(children) === 1 ? React.createElement(children.type, Object.assign({}, children.props, { ref: this.refChildren })) : null,
        React.createElement(
          StyledSup,
          Object.assign({ widthChildren: widthChildren }, this.props),
          label
        )
      );
    }
  }]);

  return Badge;
}(React.Component);

Badge.defaultProps = defaultProps;


export default Badge;