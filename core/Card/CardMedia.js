var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCardMedia } from './style';

var CardMedia = function (_React$Component) {
  _inherits(CardMedia, _React$Component);

  function CardMedia() {
    _classCallCheck(this, CardMedia);

    return _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).apply(this, arguments));
  }

  _createClass(CardMedia, [{
    key: 'render',
    value: function render() {
      return React.createElement(StyledCardMedia, this.props);
    }
  }]);

  return CardMedia;
}(React.Component);

CardMedia._meta = {
  name: 'CardMedia',
  parent: 'Card'
};


export default CardMedia;