var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledMenuListWrapper, StyledMenuList, StyledMenuListTitle } from './style';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  paddingLeft: 16
};

var MenuList = function (_React$Component) {
  _inherits(MenuList, _React$Component);

  function MenuList() {
    _classCallCheck(this, MenuList);

    return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).apply(this, arguments));
  }

  _createClass(MenuList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          level = _props.level,
          paddingLeft = _props.paddingLeft;


      var style = {};

      style.paddingLeft = level ? level * paddingLeft : paddingLeft;

      var hasChild = !isChild(children);

      return React.createElement(
        StyledMenuListWrapper,
        null,
        title ? React.createElement(
          StyledMenuListTitle,
          { style: style },
          title
        ) : null,
        React.createElement(
          StyledMenuList,
          null,
          hasChild && React.Children.map(children, function (ch, i) {
            return React.cloneElement(ch, {
              key: i,
              level: level && level
            });
          })
        )
      );
    }
  }]);

  return MenuList;
}(React.Component);

MenuList.defaultProps = defaultProps;


export default MenuList;