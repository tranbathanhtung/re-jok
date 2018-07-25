var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledList } from './style';

import { isChild } from '../helpers/typeUtils';

import ListItem from './ListItem';
import ListContent from './ListContent';

var defaultProps = {
  divided: false,
  horizontal: false,
  loading: false,
  selection: false,
  tag: "div"
};

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          divided = _props.divided,
          selection = _props.selection,
          tag = _props.tag,
          horizontal = _props.horizontal,
          rest = _objectWithoutProperties(_props, ['children', 'divided', 'selection', 'tag', 'horizontal']);

      var hasChild = !isChild(children);

      var ElementType = StyledList.withComponent(tag);

      return React.createElement(
        ElementType,
        Object.assign({ horizontal: horizontal }, rest),
        hasChild && React.Children.map(children, function (ch, i) {
          return React.cloneElement(ch, {
            key: i,
            divided: divided,
            selection: selection,
            horizontal: horizontal
          });
        })
      );
    }
  }]);

  return List;
}(React.Component);

List.defaultProps = defaultProps;
List.Item = ListItem;
List.Content = ListContent;


export default List;