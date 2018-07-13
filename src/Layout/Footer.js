// @flow
import * as React from 'react';
import {
  StyledFooter
} from './style';

import {isChild} from '../helpers/typeUtils';


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

    const hasChild = !isChild(children);

    return (
      <StyledFooter {...rest}>
        {hasChild && children}
      </StyledFooter>
    )
  }
}

export default Footer
