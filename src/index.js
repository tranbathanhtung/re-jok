// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

import {setTheme} from './theme';
import JokTheme from './theme/JokTheme';
import {ButtonDemo} from './Button/demo';
import {AvatarDemo} from './Avatar/demo';
import {BadgeDemo} from './Badge/demo';
import CardDemo from './Card/demo';
import ListDemo from './List/demo';
import GridDemo from './Grid/demo';
import ModalDemo from './Modal/demo';
import MenuDemo from './Menu/demo';
import NavDemo from './Nav/demo';
import DividerDemo from './Divider/demo';
import DropdownDemo from './Dropdown/demo';
import FormDemo from './Form/demo';
import SidebarDemo from './Sidebar/demo';
import TooltipDemo from './Tooltip/demo';






const myTheme = {
  primary: {
    main: "#9c27b0"
  },
  secondary: {
    main: "#e91e63"
  },
  background: {
    paper: "#f7ebd7"
  }
}

const Body = styled.div`
  background-color: ${({theme}) => theme.background.paper};
  width: 100%;
  height: 100%;
`

type State = {
  theme: Object
}

class App extends React.Component<{}, State> {
  state = {
    theme: {}
  }
  toggleTheme = ()=>{

    if(Object.keys(this.state.theme).length === 0 && this.state.theme.constructor === Object){
      let theme = setTheme(myTheme);
      this.setState({
        theme
      })
    }
    else this.setState({theme: {}})

  }
  render(){
    // console.log(this.state.theme)
    return (
      <JokTheme theme={this.state.theme}>
       <Body>

         {/* <ButtonDemo/> */}
         {/* <AvatarDemo/> */}
         {/* <BadgeDemo/> */}
         {/* <CardDemo/> */}
         {/* <ListDemo/> */}
         {/* <GridDemo/> */}
         {/* <ModalDemo/> */}
         {/* <MenuDemo/> */}
         {/* <DividerDemo/> */}
         {/* <NavDemo/> */}
         {/* <DropdownDemo/> */}
         {/* <FormDemo/> */}
         {/* <SidebarDemo/> */}
         <TooltipDemo/>
       </Body>
     </JokTheme>

    )
  }
}



ReactDOM.render(
  <App/>
  ,
    (document.getElementById('root'): any)
  );
