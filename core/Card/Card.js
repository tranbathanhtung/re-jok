var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledCard } from './style';

import { CardContext } from './CardContext';

import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardContent from './CardContent';
import CardAction from './CardAction';
import CardGroup from './CardGroup';
import CardLoading from './CardLoading';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  hoverable: false,
  loading: false
};

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onClick = _props.onClick,
          loading = _props.loading,
          rest = _objectWithoutProperties(_props, ['children', 'onClick', 'loading']);

      var hasChild = !isChild(children);

      return React.createElement(
        CardContext.Consumer,
        null,
        function (context) {
          return React.createElement(
            StyledCard,
            Object.assign({}, rest, { numberCard: context.numberCard, loading: loading, onClick: _this2.handleClick }),
            loading ? React.createElement(CardLoading, null) : hasChild && children
          );
        }
      );
    }
  }]);

  return Card;
}(React.Component);

Card.defaultProps = defaultProps;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Media = CardMedia;
Card.Content = CardContent;
Card.Action = CardAction;


export default Card;