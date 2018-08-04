var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { PlaceHolder, AvatarLoading, AvatarRoundLoading, DividerLoading, NameCardLoading, DateCardLoading, ContentLoading } from './style';

var CardLoading = function (_React$Component) {
  _inherits(CardLoading, _React$Component);

  function CardLoading() {
    _classCallCheck(this, CardLoading);

    return _possibleConstructorReturn(this, (CardLoading.__proto__ || Object.getPrototypeOf(CardLoading)).apply(this, arguments));
  }

  _createClass(CardLoading, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        PlaceHolder,
        null,
        React.createElement(AvatarLoading, null),
        React.createElement(AvatarRoundLoading, null),
        React.createElement(DividerLoading, { height: 8, top: 0, left: 40 }),
        React.createElement(NameCardLoading, null),
        React.createElement(DividerLoading, { height: 12, top: 14, left: 40 }),
        React.createElement(DateCardLoading, null),
        React.createElement(DividerLoading, { height: 16, top: 32, left: 40 }),
        React.createElement(DividerLoading, { height: 20, top: 40, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 60, left: 178 }),
        React.createElement(DividerLoading, { height: 13, top: 66, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 79, left: 340 }),
        React.createElement(DividerLoading, { height: 13, top: 85, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 98, left: 440 }),
        React.createElement(DividerLoading, { height: 13, top: 105, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 118, left: 264 }),
        React.createElement(DividerLoading, { height: 13, top: 124, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 137, left: 378 }),
        React.createElement(DividerLoading, { height: 13, top: 143, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 156, left: 87 }),
        React.createElement(DividerLoading, { height: 13, top: 162, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 175, left: 150 }),
        React.createElement(DividerLoading, { height: 13, top: 181, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 194, left: 420 }),
        React.createElement(DividerLoading, { height: 13, top: 200, left: 0 }),
        React.createElement(ContentLoading, { height: 6, top: 213, left: 267 })
      );
    }
  }]);

  return CardLoading;
}(React.Component);

export default CardLoading;