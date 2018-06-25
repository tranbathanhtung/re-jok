// @flow
import * as React from 'react';

import {
  StyledSidebarContent,

} from './style';

type Props = {
  mode?: 'push',
  style?: Object,
  children?: React.Node,
  className?: string,
  direction: 'left' | 'right' | 'top' | 'bottom'
}

const SidebarContent = (props: Props) => {

  return (
    <StyledSidebarContent {...props}>
      {props.children}
    </StyledSidebarContent>
  )
}

SidebarContent.defaultProps = {
  direction: 'left',
}


export default SidebarContent
