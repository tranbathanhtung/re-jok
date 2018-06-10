//  @flow
import * as React from 'react'
import {
  StyledModalContent,

} from './style';

type Props = {
  /** Override style of modal content**/
  style?: Object,
  /** Add more class to modal content**/
  className?: string,
  /** set modal fullscreen or not**/
  fullscreen?: boolean,
  /** Children of modal.It should be wrap by modal content**/
  children?: any
}


class ModalContent extends React.Component<Props>{
  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledModalContent {...rest}>
       {children}
      </StyledModalContent>
    )
  }
}


export default ModalContent
