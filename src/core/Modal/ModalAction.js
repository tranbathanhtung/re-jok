//  @flow
import * as React from 'react';
import {
  StyledModalAction
} from './style';


type Props = {
  /** Override style of modal action**/
  style?: Object,
  /** Add more class to modal action**/
  className?: string,
  /** Children of modal action**/
  action?: Array<React.Node>,
}

class ModalAction extends React.Component<Props>{
  render(){
    const {
      action,
      ...rest
    } = this.props;



    return (
      <StyledModalAction {...rest}>
        {
         action && React.Children.map(action, (at, i)=>(
            React.cloneElement(at, {
              key: i
            })
          ))
        }
      </StyledModalAction>
    )
  }
}


export default ModalAction
