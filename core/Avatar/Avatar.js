var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import Icon from '../Icon';

import AvatarGroup from './AvatarGroup';

import { StyledAvatar, StyledAvatarImage } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  size: 'default',
  shape: 'circle'
};

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          imgAlt = _props.imgAlt,
          imgSrc = _props.imgSrc,
          icon = _props.icon,
          rest = _objectWithoutProperties(_props, ['children', 'imgAlt', 'imgSrc', 'icon']);

      var hasChild = !isChild(children);
      return React.createElement(
        StyledAvatar,
        Object.assign({ imgSrc: imgSrc }, rest),
        imgSrc ? React.createElement(StyledAvatarImage, { imgAlt: imgAlt, imgSrc: imgSrc }) : icon ? React.createElement(Icon, { name: icon }) : hasChild && children
      );
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.defaultProps = defaultProps;
Avatar.Group = AvatarGroup;


export default Avatar;