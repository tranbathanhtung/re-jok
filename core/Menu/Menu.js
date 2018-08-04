var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledMenu } from './style';

import { isArray, isChild } from '../helpers/typeUtils';

import MenuList from './MenuList';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import { MenuContext } from './MenuContext';

var defaultProps = {
  selectable: true,
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  multiple: false,
  activeNormal: true
};

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _initialiseProps.call(_this);

    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;

    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }

    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.state = {
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      multiple: props.multiple
    };

    return _this;
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          multiple = _props.multiple,
          activeColor = _props.activeColor,
          activeNormal = _props.activeNormal,
          rest = _objectWithoutProperties(_props, ['children', 'multiple', 'activeColor', 'activeNormal']);

      var hasChild = !isChild(children);

      var _state = this.state,
          selectedKeys = _state.selectedKeys,
          openKeys = _state.openKeys;

      return React.createElement(
        MenuContext.Provider,
        { value: {
            selectedKeys: selectedKeys,
            openKeys: openKeys,
            onSelect: this.onSelect,
            onDeselect: this.onDeselect,
            onOpenChange: this.onOpenChange,
            multiple: multiple,
            activeColor: activeColor,
            activeNormal: activeNormal
          } },
        React.createElement(
          StyledMenu,
          rest,
          hasChild && children
        )
      );
    }
  }]);

  return Menu;
}(React.Component);

Menu.defaultProps = defaultProps;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Sub = SubMenu;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelect = function (itemInfo) {
    var _props2 = _this2.props,
        selectable = _props2.selectable,
        onSelect = _props2.onSelect,
        multiple = _props2.multiple;


    if (selectable) {
      // root menu
      var _selectedKeys = _this2.state.selectedKeys;

      var selectedKey = itemInfo.key;

      if (multiple) {
        _selectedKeys = [].concat(_toConsumableArray(_selectedKeys), [selectedKey]);
      } else {
        _selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in _this2.props)) {
        _this2.setState({
          selectedKeys: _selectedKeys
        });
      }
      //onSelect is function user call
      onSelect && onSelect(Object.assign({}, itemInfo, {
        selectedKeys: _selectedKeys
      }));
    }
  };

  this.onOpenChange = function (event) {
    var onOpen = _this2.props.onOpen;
    var openKeys = _this2.state.openKeys;

    var changed = false;
    var processSingle = function processSingle(e) {
      var oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {

          openKeys = [].concat(_toConsumableArray(openKeys), [e.key]);
        }
      } else {
        var index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {

          openKeys = openKeys.filter(function (key) {
            return key !== e.key;
          });
        }
      }
      changed = changed || oneChanged;
    };

    isArray(event) ? event.forEach(processSingle) : processSingle(event);

    if (changed) {
      if (!('openKeys' in _this2.props)) {

        _this2.setState({ openKeys: openKeys });
      }
      onOpen && onOpen(event);
    }
  };

  this.onDeselect = function (itemInfo) {
    var _props3 = _this2.props,
        selectable = _props3.selectable,
        onDeselect = _props3.onDeselect;


    if (selectable) {
      var _selectedKeys2 = _this2.state.selectedKeys;

      var selectedKey = itemInfo.key;
      var index = _selectedKeys2.indexOf(selectedKey);
      if (index !== -1) {
        _selectedKeys2.splice(index, 1);
      }
      if (!('selectedKeys' in _this2.props)) {
        _this2.setState({
          selectedKeys: _selectedKeys2
        });
      }
      onDeselect && onDeselect(Object.assign({}, itemInfo, {
        selectedKeys: _selectedKeys2
      }));
    }
  };
};

export default Menu;