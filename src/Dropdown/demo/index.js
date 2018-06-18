// @flow
import * as React from 'react';
import Dropdown from '../Dropdown';
import Menu from '../../Menu/Menu';
import Divider from '../../Divider';
import Avatar from '../../Avatar/Avatar';


const MenuDemo = ()=> (
  <div style={{ width: 256 }}>
    <Menu style={{marginBottom: 20}}>
      <Menu.List title="Header">
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="1" primaryText="Item 1" />
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="2" primaryText="Item 2"/>
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="3" primaryText="Item 3"/>
      </Menu.List>
      <Divider/>
    <Menu.Item onClick={(e)=> console.log(e)} keyActive="4" primaryText="Item 4"/>


    </Menu>
  </div>
)

class DropdownDemo extends React.Component<{}>{
  render(){
    return (
      <React.Fragment>
        <Dropdown content={<MenuDemo/>} position="bottomLeft">
        <Avatar style={{cursor: "pointer"}} imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>

        </Dropdown>
        <Dropdown
          trigger="click"
          content={<div style={{padding: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>}
          position="bottomCenter">
            <a style={{marginTop: 40,color: "rgba(0,0,0,.5)", cursor: "pointer", fontSize: 14}}>Click me</a>
        </Dropdown>
      </React.Fragment>

    )
  }
}

export default DropdownDemo
