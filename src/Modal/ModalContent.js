//  @flow
import * as React from 'react'
import {
  StyledModalContent,

} from './style';

type Props = {
  fullscreen?: boolean,
  children?: any
}


class ModalContent extends React.Component<Props>{
  render(){
    return (
      <StyledModalContent {...this.props}>
       {this.props.children}
      </StyledModalContent>
    )
  }
}


export default ModalContent
