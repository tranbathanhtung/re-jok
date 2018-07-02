// @flow
import * as React from 'react';

import {
  StyledHeader
} from './style';

type Props = {
  /** Style of header component**/
  style?: Object,
  /** Class of header component**/
  className?: string,
  /** Children of header component could be anything**/
  children?: any,
  /** Set header fixed or not**/
  fixed: boolean,

}

const defaultProps = {
  fixed: false
}


class Header extends React.Component<Props>{

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledHeader {...rest}>
        {children}
      </StyledHeader>
    )
  }
}

export default Header
