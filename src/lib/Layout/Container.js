// @flow
import * as React from 'react';

import {
  StyledContainer
} from './style';

type Props = {
  /** Set style of container**/
  style?: Object,
  /** Add more class of container**/
  className?: string,
  /** Children of container could be anything**/
  children?: any,
  /** Set Container is fluid mode or not**/
  isFluid: boolean,
  /** Set container full width in container**/
  fullWidth: boolean,
}

const defaultProps = {
  isFluid: false
}


class Container extends React.Component<Props>{

  static defaultProps = defaultProps;
  
  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledContainer {...rest}>
        {children}
      </StyledContainer>
    )
  }
}

export default Container
