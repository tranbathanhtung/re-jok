import React from 'react';




export const MenuContext = React.createContext({
  selectedKeys: [],
  openKeys: [],
  onSelect: () => {},
  onDeselect: ()=> {},
  onOpenChange: ()=> {},
  multiple: false,
  activeColor: "",
  activeNormal: true,
})

// This function to connect context of Menu to another children of Menu

export function connectMenu(Component) {

  return function MenuComponent(props) {

    return (
      <MenuContext.Consumer>
        {context => <Component {...props} context={context} />}
      </MenuContext.Consumer>
    );
  };
}
