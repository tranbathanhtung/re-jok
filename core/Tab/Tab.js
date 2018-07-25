var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

import { StyledTabWrapper, StyledTabContent, StyledTab } from './style';

import TabItem from './TabItem';
import { isChild } from '../helpers/typeUtils';

var defaultProps = {
  keyActive: "",
  position: 'top'
};

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    // const nestedChild?

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.onSelect = function (itemInfo) {
      var onSelect = _this.props.onSelect;


      var keyActive = itemInfo.key;

      _this.setState({
        keyActive: keyActive
      });

      //onSelect is function user call
      onSelect && onSelect(Object.assign({}, itemInfo, {
        keyActive: keyActive
      }));
    };

    _this.renderContentTabItem = function (children) {

      if (!children) return;

      if (!children.length) return children.props.children;

      return children.map(function (child) {

        if (child.props.tabKey === _this.state.keyActive) {

          return child.props.children;
        }

        return undefined;
      });
    };

    _this.state = {
      keyActive: !props.keyActive ? props.children ? props.children.length ? props.children[0].props.tabKey : props.children.props.tabKey : "" : props.keyActive
    };

    return _this;
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      var keyActive = this.state.keyActive;


      var hasChild = !isChild(children);

      return React.createElement(
        StyledTabWrapper,
        {
          position: rest.position
        },
        React.createElement(
          StyledTab,
          rest,
          hasChild && React.Children.map(children, function (c, i) {
            return React.cloneElement(c, {
              key: i,
              onSelect: _this2.onSelect,
              position: rest.position,
              color: rest.color,
              keyActive: keyActive
            });
          })
        ),
        React.createElement(
          StyledTabContent,
          null,
          hasChild && this.renderContentTabItem(children)
        )
      );
    }
  }]);

  return Tab;
}(React.Component);

Tab.defaultProps = defaultProps;
Tab.Item = TabItem;


export default Tab;