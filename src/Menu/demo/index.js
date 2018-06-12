// @flow
import * as React from 'react';
import Menu from '../Menu';

class MenuDemo extends React.Component<{}>{
  render(){
    return(
      <Menu>
        <Menu.Item keyActive="1">Option 1</Menu.Item>
        <Menu.Item keyActive="2">Option 2</Menu.Item>
          <Menu.List key="g1" title="Item 1">
           <Menu.Item keyActive="3">Option 3</Menu.Item>
           <Menu.Item keyActive="4">Option 4</Menu.Item>
         </Menu.List>

         <Menu.Sub openKey="sub1" title={<span>Navigation One</span>}>
           <Menu.List key="g2" title="Item 2">
            <Menu.Item keyActive="5">Option 5</Menu.Item>
            <Menu.Item keyActive="6">Option 6</Menu.Item>
          </Menu.List>

          <Menu.Sub openKey="sub2" title={<span>Navigation One Inner</span>}>
            <Menu.List key="g3" title="Item 2 Inner">
             <Menu.Item keyActive="7">Option 7</Menu.Item>
             <Menu.Item keyActive="8">Option 8</Menu.Item>
           </Menu.List>
          </Menu.Sub>
         </Menu.Sub>

         <Menu.Sub openKey="sub3" title={<span>Navigation Two</span>}>
           <Menu.List key="g4" title="Item 3">
            <Menu.Item keyActive="9">Option 9</Menu.Item>
          <Menu.Item keyActive="10">Option 10</Menu.Item>
          </Menu.List>
         </Menu.Sub>
      </Menu>
    )
  }
}

export default MenuDemo
