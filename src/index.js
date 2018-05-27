// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './theme';
import {ButtonDemo} from './Button/demo'
import {AvatarDemo} from './Avatar/demo'



ReactDOM.render(
  

     <ThemeProvider theme={defaultTheme}>
       <React.Fragment>

       <ButtonDemo/>


       <AvatarDemo/>
       </React.Fragment>
     </ThemeProvider>



  ,
    (document.getElementById('root'): any)
  );
