// @flow
import * as React from 'react';

import {
  StyledSidebarContent,

} from './style';

import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Set mode of sidebar to push**/
  mode?: 'push',
  /** Override style of sidebar content**/
  style?: Object,
  /** Children of sidebar content**/
  children?: any,
  /** Add more class to side bar**/
  className?: string,
  /** direction of sidebar content should be like direction of sidebar**/
  direction: 'left' | 'right' | 'top' | 'bottom',
  /** Set margin of sidebar content**/
  width: number,
  /** Set margin of sidebar content**/
  height: number
}

const SidebarContent = (props: Props) => {

  const hasChild = !isChild(props.children);

  return (
    <StyledSidebarContent {...props}>
      {hasChild && props.children}
    </StyledSidebarContent>
  )
}

SidebarContent.defaultProps = {
  direction: 'left',
  width: 256,
  height: 60
}


export default SidebarContent
