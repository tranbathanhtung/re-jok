// @flow
import * as React from 'react';

import {
  StyledCollapseItem
} from './style';

type Props = {
  children?: any
}

class CollapseItem extends React.Component<Props> {
  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledCollapseItem {...rest}>
        {children}
      </StyledCollapseItem>
    )
  }
}

export default CollapseItem
