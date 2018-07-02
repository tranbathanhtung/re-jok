// @flow
import * as React from 'react';
import {
  StyledFooter
} from './style';


type Props = {
  /** Style of footer component**/
  style?: Object,
  /** Class of footer component**/
  className?: string,
  /** Children of footer component could be anything**/
  children?: any
}


class Footer extends React.Component<Props>{
  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledFooter {...rest}>
        {children}
      </StyledFooter>
    )
  }
}

export default Footer
