// @flow
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { globalConfig } from './globals/rejok.css.js';
import styled from 'styled-components';

import { setTheme } from './theme/utils';
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
import TabDemo from './Tab/demo';
import CollapseDemo from './Collapse/demo';
import LayoutDemo from './Layout/demo';
import PaginationDemo from './Pagination/demo';
import TagDemo from './Tag/demo';
import AlertDemo from './Alert/demo';
import NotificationDemo from './Notification/demo';
import TypographyDemo from './Typography/demo';
import ImageDemo from './Image/demo';
import SpinnerDemo from './Spinner/demo';
import ProgressDemo from './Progress/demo';
import SectionDemo from './Section/demo';
import Button from './Button/Button';

globalConfig();


const yourCustomTheme1 = {
  primary: {
    main: "#9c27b0"
  },
  secondary: {
    main: "#e91e63"
  },
  text: {
    primary: "rgba(62, 39, 25, .85)",
    regular: "rgba(62, 39, 25, .64)",
    secondary: "rgba(62, 39, 25, .48)",
    hint: "rgba(62, 39, 25, .38)",
    default: "#fff",
  },
  border: {
    primary: "#00000026"
  },
  background: {
    default: "#f7ebd7"
  }
}

const yourCustomTheme2 = {
  primary: {
    main: "#FF7E67"
  },
  secondary: {
    main: "#11D3BC"
  },
  text: {
    primary: "rgba(227, 227, 229, 1)",
    regular: "rgba(227, 227, 229, .85)",
    secondary: "rgba(227, 227, 229, .64)",
    hint: "rgba(227, 227, 229, .48)",
    default: "#fff",
  },
  border: {
    primary: "#ffffff1a"
  },
  background: {
    default: "#4e4e4e"
  },

}
//
const theme1 = setTheme(yourCustomTheme1);

const theme2 = setTheme(yourCustomTheme2);



const Body = styled.div`
  background-color: ${({theme}) => theme.background.default};
  width: 100%;
  height: 100%;
  padding: 3rem;
`

type State = {
  theme: Object,
  currentTheme: number
}

class App extends React.Component<{}, State> {
  state = {
    theme: {},
    currentTheme: 0,
    loading: false,
  }
  toggleTheme = ()=>{

    const { currentTheme } = this.state;
    this.setState({
      loading: true,
    })
    if(currentTheme === 0){


      this.setState({
        theme: theme1,
        currentTheme: 1,
        loading: false,

      })
    }
    if(currentTheme === 1){

      this.setState({
        theme: theme2,
        currentTheme: 2

      })
    }
    if(currentTheme === 2){

      this.setState({
        theme: {},
        currentTheme: 0

      })
    }


  }
  render(){
    console.log(this.state.loading)
    return (
      <JokTheme theme={this.state.theme}>

             <React.Fragment>
               <Body>
                 <Button primary onClick={this.toggleTheme}>Change theme</Button>


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
                 {/* <TooltipDemo/> */}
                 {/* <TabDemo/> */}
                 {/* <CollapseDemo/> */}
                 {/* <LayoutDemo/> */}
                 {/* <PaginationDemo/> */}
                 {/* <TagDemo /> */}
                 {/* <AlertDemo/> */}
                 {/* <NotificationDemo/> */}
                 {/* <TypographyDemo/> */}
                 {/* <ImageDemo/> */}
                 {/* <SpinnerDemo/> */}
                 {/* <ProgressDemo/> */}
                 {/* <SectionDemo/> */}
               </Body>
             </React.Fragment>


     </JokTheme>

    )
  }
}



ReactDOM.render(
  <App/>
  ,
    (document.getElementById('root'): any)
  );
