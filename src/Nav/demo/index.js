// @flow
import * as React from 'react';
import Nav from '../Nav';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import TextButton from '../../Button/TextButton';
import Badge from '../../Badge';
import List from '../../List/List';
import Dropdown from '../../Dropdown/Dropdown';
import Menu from '../../Menu/Menu';
import Divider from '../../Divider';
import Input from '../../Input/Input';
import Sidebar from '../../Sidebar/Sidebar';

const MenuDemo = ()=> (
  <div style={{ width: 256 }}>
    <Menu style={{marginBottom: 20}}>
      <Menu.List title="Header">
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="1" ><a href="https://www.facebook.com/">Home</a></Menu.Item>
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="2" primaryText="Item 2"/>
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="3" primaryText="Item 3"/>
      </Menu.List>
      <Divider/>
    <Menu.Item onClick={(e)=> console.log(e)} keyActive="4" primaryText="Item 4"/>


    </Menu>
  </div>
)

const ActionRight = () => (
  <List horizontal>
    <List.Item>
      <Input
        style={{
          borderRadius: 20
        }}
        colorFocus="#e8e8e8"
        icon="search"
        placeholder="Search something"/>
    </List.Item>


  </List>
)

const ActionRight1 = () => (
  <React.Fragment>
    <List horizontal>
      <List.Item>
        <Badge  count={20}>
        <Button backgroundColor="#e91e63" shape="circle" icon="envelope" />

        </Badge>

      </List.Item>
      <List.Item>
        <Badge  count={20}>
        <Button backgroundColor="#e91e63" shape="circle" icon="bell" />

        </Badge>

      </List.Item>
      <List.Item>
        <Dropdown content={<MenuDemo/>} position="bottomRight">
          <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>

        </Dropdown>
      </List.Item>
    </List>




  </React.Fragment>
)

const ActionRight2 = () => (
  <React.Fragment>
    <List horizontal>
      <List.Item>
        <TextButton size="small" color="#fff">Discover</TextButton>
      </List.Item>

      <List.Item>
        <Button backgroundColor="#e91e63" hasBoxShadow shape="rounded">Sign Up</Button>
      </List.Item>
    </List>
  </React.Fragment>
)

const ActionRight3 = () => (
  <React.Fragment>
    <List horizontal>
      <List.Item>
        <TextButton style={{padding: ".9rem 0"}}  hoverable icon="facebook-square" color="#fff">Facbook</TextButton>
      </List.Item>

      <List.Item>
        <TextButton style={{padding: ".9rem 0"}} hoverable icon="instagram" color="#fff">Instagram</TextButton>
      </List.Item>
      <List.Item>
        <TextButton style={{padding: ".9rem 0"}}  hoverable icon="twitter-square" color="#fff">Twitter</TextButton>
      </List.Item>
    </List>
  </React.Fragment>
)

type State ={
  open: boolean,
}



class NavDemo extends React.Component<{}, State>{
  state = {
    open: false,
  }
  toggleSidebar = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    return (
      <React.Fragment>
        <Nav elementRight={<ActionRight/>}>
          Left Element
        </Nav>

        <Nav
          backgroundColor="#9c27b0"
          elementResponsive={<Button style={{color: "#fff"}} onClick={() => this.toggleSidebar()} icon="bars" variant="icon"/>}
          elementCenter={<a>Center Element</a>}
          elementRight={<ActionRight2/>}>
          Left Element
        </Nav>
        <Sidebar
          opacity

          onToggle={this.toggleSidebar}
          open={this.state.open}>

        </Sidebar>

        <Nav backgroundColor="#212121" elementCenter={<ActionRight/>} elementRight={<ActionRight1/>}>
          Left Element
        </Nav>
        <div style={{
            position: "relative"
          }}>
          <img alt="Cat" style={{
              width: "100%",
              height: "auto",

            }} src="https://www.wallpaperup.com/uploads/wallpapers/2013/04/09/73143/d2c0f4c5943c94fccdad2866782ded2f-700.jpg"/>
          <div style={{
            top: 0,
            left: 0,
            right: 0,
            position: "absolute"
            }}>
            <Nav transparent elementRight={<ActionRight3/>}>
              Left Element
            </Nav>
          </div>


        </div>
      </React.Fragment>

    )
  }
}

export default NavDemo
