import React from 'react';

export var MenuContext = React.createContext({
  selectedKeys: [],
  openKeys: [],
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onOpenChange: function onOpenChange() {},
  multiple: false,
  activeColor: "",
  activeNormal: true
});

// This function to connect context of Menu to another children of Menu

export function connectMenu(Component) {

  return function MenuComponent(props) {

    return React.createElement(
      MenuContext.Consumer,
      null,
      function (context) {
        return React.createElement(Component, Object.assign({}, props, { context: context }));
      }
    );
  };
}