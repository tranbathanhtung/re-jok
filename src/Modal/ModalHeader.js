//  @flow
import * as React from 'react'
import {
  StyledModalHeader,
  StyledModalHeaderTitle
} from './style'


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
    return (
      <StyledModalHeader {...rest}>
        <StyledModalHeaderTitle>
          {children}
        </StyledModalHeaderTitle>

      </StyledModalHeader>
    )
  }
}


export default ModalHeader
