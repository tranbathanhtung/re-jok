// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {defaultTheme, setTheme} from './theme';
import {ButtonDemo} from './Button/demo';
import {AvatarDemo} from './Avatar/demo';
import {BadgeDemo} from './Badge/demo';
import CardDemo from './Card/demo';
import ListDemo from './List/demo'; //not done
import GridDemo from './Grid/demo';


ReactDOM.render(


     <ThemeProvider theme={defaultTheme}>
       <React.Fragment>

       {/* <ButtonDemo/> */}
       {/* <AvatarDemo/> */}
       {/* <BadgeDemo/> */}
       <CardDemo/>
       {/* <ListDemo/> */}
       {/* <GridDemo/> */}
       </React.Fragment>
     </ThemeProvider>



  ,
    (document.getElementById('root'): any)
  );
