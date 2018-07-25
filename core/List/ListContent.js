var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledListContent, StyledListContentHeader, StyledListContentDescription, StyledListContentAction } from './style';

import { PrimaryText, SecondaryText } from '../globals';

import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  tag: "div"
};

var ListContent = function (_React$Component) {
  _inherits(ListContent, _React$Component);

  function ListContent() {
    _classCallCheck(this, ListContent);

    return _possibleConstructorReturn(this, (ListContent.__proto__ || Object.getPrototypeOf(ListContent)).apply(this, arguments));
  }

  _createClass(ListContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          media = _props.media,
          primaryHeader = _props.primaryHeader,
          secondaryHeader = _props.secondaryHeader,
          description = _props.description,
          action = _props.action,
          tag = _props.tag;

      var hasChild = !isChild(children);

      var ElementType = StyledListContent.withComponent(tag);

      return React.createElement(
        ElementType,
        null,
        media,
        React.createElement(
          StyledListContentHeader,
          null,
          React.createElement(
            PrimaryText,
            null,
            primaryHeader
          ),
          React.createElement(
            SecondaryText,
            null,
            secondaryHeader
          ),
          React.createElement(
            StyledListContentDescription,
            null,
            description
          ),
          hasChild && children
        ),
        React.createElement(
          StyledListContentAction,
          null,
          action
        )
      );
    }
  }]);

  return ListContent;
}(React.Component);

ListContent.defaultProps = defaultProps;


export default ListContent;