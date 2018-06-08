//  @flow
import * as React from 'react'
import {
  StyledModalContent,

} from './style'


class ModalContent extends React.Component<{}>{
  render(){
    return (
      <StyledModalContent>
       {this.props.children}
      </StyledModalContent>
    )
  }
}


export default ModalContent
