
import React from 'react';

// init data of menu

// type Context = {
//   selectedKeys: Array<string>,
//   openKeys: Array<string>,
//   onSelect:Function,
//   onDeselect: Function,
//   onOpenChange: Function,
//   multiple: boolean,
//   activeColor?: string,
//   activeNormal: boolean
// }



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
