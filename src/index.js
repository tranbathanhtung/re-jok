// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {ButtonDemo} from './Button/demo'
import {AvatarDemo} from './Avatar/demo'



ReactDOM.render(
   <React.Fragment>
    <ButtonDemo/>
    <AvatarDemo/>

  </React.Fragment>


  ,
    (document.getElementById('root'): any)
  );
