// @flow
import * as React from 'react';

import {
  StyledHeader
} from './style';

import {isChild} from '../helpers/typeUtils';


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

    const hasChild = !isChild(children);

    return (
      <StyledHeader {...rest}>
        {hasChild && children}

      </StyledHeader>
    )
  }
}

export default Header
