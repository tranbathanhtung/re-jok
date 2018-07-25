// @flow
import * as React from 'react';
import {isChild} from '../helpers/typeUtils';

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

    const hasChild = !isChild(children);

    return (
      <StyledSide {...rest}>
        {hasChild && children}
      </StyledSide>
    )
  }
}

export default Side
