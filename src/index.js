// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './theme';
import {ButtonDemo} from './Button/demo'
import {AvatarDemo} from './Avatar/demo'
import {BadgeDemo} from './Badge/demo'
import CardDemo from './Card/demo'



ReactDOM.render(


     <ThemeProvider theme={defaultTheme}>
       <React.Fragment>

       {/* <ButtonDemo/>
       <AvatarDemo/>
       <BadgeDemo/> */}
       <CardDemo/>
       </React.Fragment>
     </ThemeProvider>



  ,
    (document.getElementById('root'): any)
  );
