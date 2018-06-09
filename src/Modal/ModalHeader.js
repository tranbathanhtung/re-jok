//  @flow
import * as React from 'react'
import {
  StyledModalHeader,
  StyledModalHeaderTitle
} from './style'


type Props = {
  children?: any
}



class ModalHeader extends React.Component<Props>{
  render(){
    return (
      <StyledModalHeader>
        <StyledModalHeaderTitle>
          {this.props.children}
        </StyledModalHeaderTitle>

      </StyledModalHeader>
    )
  }
}


export default ModalHeader
