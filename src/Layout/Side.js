// @flow
import * as React from 'react';
import {
  StyledSide
} from './style';


type Props = {
  /** Style of side component**/
  style?: Object,
  /** Class of side component**/
  className?: string,
  /** Children of side component could be anything**/
  children?: any
}


class Side extends React.Component<Props>{
  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledSide {...rest}>
        {children}
      </StyledSide>
    )
  }
}

export default Side
