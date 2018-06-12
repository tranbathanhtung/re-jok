// @flow
import * as React from 'react';


export const MenuContext = React.createContext({
  selectedKeys: [],
  openKeys: [],
  onSelect: () => {},
  onDeselect: ()=> {},
  onOpenChange: ()=> {},
  multiple: false
})


// This function takes a component...
export function connectMenu(Component) {
  // ...and returns another component...
  return function MenuComponent(props) {
    // ... and renders the wrapped component with the context data!
    // Notice that we pass through any additional props as well
    return (
      <MenuContext.Consumer>
        {context => <Component {...props} context={context} />}
      </MenuContext.Consumer>
    );
  };
}
