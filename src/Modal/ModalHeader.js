//  @flow
import * as React from 'react'
import {
  StyledModalHeader,
  StyledModalHeaderTitle
} from './style'


class ModalHeader extends React.Component<{}>{
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
