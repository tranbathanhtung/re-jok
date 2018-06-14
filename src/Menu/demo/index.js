// @flow
import * as React from 'react';
import Menu from '../Menu';
import Icon from '../../Icon';

import Divider from '../../Divider';

type State = {
  collapsed: boolean
}

class MenuDemo extends React.Component<{}, State>{

  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    return(
      <React.Fragment>
          <div style={{ width: 256 }}>
            <Menu style={{marginBottom: 20}}>
              <Menu.List title="Header">
                <Menu.Item keyActive="1" primaryText="Item 1" />
                <Menu.Item keyActive="2" primaryText="Item 2"/>
                <Menu.Item keyActive="3" primaryText="Item 3"/>
              </Menu.List>
              <Divider/>
            <Menu.Item keyActive="4" primaryText="Item 4"/>


            </Menu>

        {/* Basic */}
        <Menu activeNormal={false} style={{marginBottom: 20}} defaultSelectedKeys={["3"]} defaultOpenKeys={["sub1"]}>
          <Menu.Item keyActive="1" primaryText="Option 1" />
        <Menu.Item keyActive="2" primaryText="Option 2" />
            <Menu.List key="g1" title="Item 1">
             <Menu.Item keyActive="3" primaryText="Option 3" />
           <Menu.Item keyActive="4" primaryText="Option 4" />
           </Menu.List>

           <Menu.Sub openKey="sub1" title={<span>Navigation One</span>}>
             <Menu.List key="g2" title="Item 2">
              <Menu.Item keyActive="5" primaryText="Option 5" />
            <Menu.Item keyActive="6" primaryText="Option 6" />
            </Menu.List>

            <Menu.Sub openKey="sub2" title={<span>Navigation One Inner</span>}>

               <Menu.Item keyActive="7" primaryText="Option 7" />
             <Menu.Item keyActive="8" primaryText="Option 8" />

            </Menu.Sub>
           </Menu.Sub>

           <Menu.Sub openKey="sub3" title={<span>Navigation Two</span>}>
             <Menu.List key="g4" title="Item 3">
              <Menu.Item keyActive="9" primaryText="Option 9" />
            <Menu.Item keyActive="10" primaryText="Option 10" />
            </Menu.List>
           </Menu.Sub>
        </Menu>

        {/* Collapse */}

       {/* <Button type="primary" icon="bars" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>

       </Button> */}
       <Menu
         backgroundColor="#545c64"
         textColor="#fff"
         activeColor="#ffd04b"
         activeNormal={false}
         defaultSelectedKeys={['1']}
         defaultOpenKeys={['sub1']}

         inlineCollapsed={this.state.collapsed}
       >
         <Menu.Item keyActive="1" primaryText="Option 1" leftIcon={<Icon name="pied-piper-pp" />}>

         </Menu.Item>
         <Menu.Item disable keyActive="2" primaryText="Option 2" leftIcon={<Icon name="pied-piper" />}>


         </Menu.Item>
         <Menu.Item keyActive="3" primaryText="Option 2" leftIcon={<Icon name="pied-piper-alt" />}>

         </Menu.Item>
         <Menu.Sub openKey="sub1" title={<span><Icon name="envelope" style={{marginRight: 10}} /><span>Navigation One</span></span>}>
           <Menu.Item keyActive="5">Option 5</Menu.Item>
           <Menu.Item keyActive="6">Option 6</Menu.Item>
           <Menu.Item keyActive="7">Option 7</Menu.Item>
           <Menu.Item keyActive="8">Option 8</Menu.Item>
       </Menu.Sub>
         <Menu.Sub openKey="sub2" title={<span><Icon name="apple" style={{marginRight: 10}} /><span>Navigation Two</span></span>}>
           <Menu.Item keyActive="9">Option 9</Menu.Item>
           <Menu.Item keyActive="10">Option 10</Menu.Item>
         <Menu.Sub openKey="sub3" title="Submenu">
             <Menu.Item keyActive="11">Option 11</Menu.Item>
             <Menu.Item keyActive="12">Option 12</Menu.Item>
         </Menu.Sub>
       </Menu.Sub>
       </Menu>
     </div>
      </React.Fragment>

    )
  }
}

export default MenuDemo
