var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCardGroup } from './style';

import { CardContext } from './CardContext';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  numberCard: 4,
  center: false
};

var CardGroup = function (_React$Component) {
  _inherits(CardGroup, _React$Component);

  function CardGroup() {
    _classCallCheck(this, CardGroup);

    return _possibleConstructorReturn(this, (CardGroup.__proto__ || Object.getPrototypeOf(CardGroup)).apply(this, arguments));
  }

  _createClass(CardGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          numberCard = _props.numberCard,
          children = _props.children,
          center = _props.center,
          rest = _objectWithoutProperties(_props, ['numberCard', 'children', 'center']);

      var hasChild = !isChild(children);

      return React.createElement(
        CardContext.Provider,
        { value: {
            numberCard: numberCard
          } },
        React.createElement(
          StyledCardGroup,
          Object.assign({}, rest, { center: center }),
          hasChild && React.Children.map(children, function (ch, i) {
            return React.cloneElement(ch, {
              key: i
            });
          })
        )
      );
    }
  }]);

  return CardGroup;
}(React.Component);

CardGroup.defaultProps = defaultProps;


export default CardGroup;