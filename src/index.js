// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './theme';
import {ButtonDemo} from './Button/demo'
import {AvatarDemo} from './Avatar/demo'



ReactDOM.render(
   <React.Fragment>

     <ThemeProvider theme={defaultTheme}>
       <ButtonDemo/>
     </ThemeProvider>

    <AvatarDemo/>

  </React.Fragment>


  ,
    (document.getElementById('root'): any)
  );
