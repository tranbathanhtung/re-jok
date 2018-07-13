//  @flow
import * as React from 'react';
import {
  StyledModalHeader,
  StyledModalHeaderTitle
} from './style';

import { isChild } from '../helpers/typeUtils';



type Props = {
  /** Override style of modal header**/
  style?: Object,
  /** Add more class to modal**/
  className?: string,
  /** title of modal**/
  children?: any
}



class ModalHeader extends React.Component<Props>{
  render(){
    const {
      children,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);
    return (
      <StyledModalHeader {...rest}>
        <StyledModalHeaderTitle>
          {hasChild && children}
        </StyledModalHeaderTitle>

      </StyledModalHeader>
    )
  }
}


export default ModalHeader
