// @flow
import * as React from 'react';

import {
  StyledCollapse
} from './style';

import CollapseItem from './CollapseItem';

type Props = {
  children?: any
}

class Collapse extends React.Component<Props> {

  static Item = CollapseItem;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledCollapse {...rest}>
        {children}
      </StyledCollapse>
    )
  }
}

export default Collapse
