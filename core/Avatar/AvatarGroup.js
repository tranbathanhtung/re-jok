var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import Avatar from './Avatar';

import Tooltip from '../Tooltip/Tooltip';

import { StyledAvatarGroup, StyledAvatarItem } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  size: "default"
};

var AvatarGroup = function (_React$Component) {
  _inherits(AvatarGroup, _React$Component);

  function AvatarGroup() {
    _classCallCheck(this, AvatarGroup);

    return _possibleConstructorReturn(this, (AvatarGroup.__proto__ || Object.getPrototypeOf(AvatarGroup)).apply(this, arguments));
  }

  _createClass(AvatarGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          children = _props.children;

      var hasChild = !isChild(children);

      return React.createElement(
        StyledAvatarGroup,
        null,
        hasChild && React.Children.count(children) > 0 && React.Children.map(children, function (c, i) {
          return React.createElement(
            StyledAvatarItem,
            { size: size, key: i },
            React.cloneElement(c, {
              key: i,
              size: size
            })
          );
        })
      );
    }
  }]);

  return AvatarGroup;
}(React.Component);

AvatarGroup.defaultProps = defaultProps;


export default AvatarGroup;