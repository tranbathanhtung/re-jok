var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCardHeader, StyledCardHeaderInfo, StyledCardHeaderText, StyledCardHeaderAction } from './style';
import { PrimaryText, SecondaryText } from '../globals';

import Avatar from '../Avatar/Avatar';
import AvatarGroup from '../Avatar/AvatarGroup';

var CardHeader = function (_React$Component) {
  _inherits(CardHeader, _React$Component);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          avatar = _props.avatar,
          title = _props.title,
          subheader = _props.subheader,
          action = _props.action,
          rest = _objectWithoutProperties(_props, ['avatar', 'title', 'subheader', 'action']);

      return React.createElement(
        StyledCardHeader,
        rest,
        React.createElement(
          StyledCardHeaderInfo,
          null,
          avatar,
          React.createElement(
            StyledCardHeaderText,
            null,
            React.createElement(
              PrimaryText,
              null,
              title
            ),
            React.createElement(
              SecondaryText,
              null,
              subheader
            )
          )
        ),
        React.createElement(
          StyledCardHeaderAction,
          null,
          action
        )
      );
    }
  }]);

  return CardHeader;
}(React.Component);

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card'
};


export default CardHeader;