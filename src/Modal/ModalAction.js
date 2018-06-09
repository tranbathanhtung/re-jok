//  @flow
import * as React from 'react'
import {
  StyledModalAction
} from './style'


type Props = {
  children?: any
}

class ModalAction extends React.Component<Props>{
  render(){
    return (
      <StyledModalAction>
          {this.props.children}
      </StyledModalAction>
    )
  }
}


export default ModalAction
