// @flow
import * as React from 'react';
import {
  StyledSidebarWrapper,
  StyledSidebarBackground,
  StyledSidebar
} from './style';

import SidebarContent from './SidebarContent';



type Props = {
  style?: Object,
  className?: string,
  children?: React.Node,
  open: boolean,
  direction: 'left' | 'right' | 'top' | 'bottom',
  opacity: boolean,
  fullScreen: boolean,
  onToggle?: Function,
}

const defaultProps = {
  open: false,
  direction: 'left',
  opacity: false,
  fullScreen: false
}






class Sidebar extends React.Component<Props>{

  static defaultProps = defaultProps;

  static Content = SidebarContent;

  render(){
    const {
      open,
      opacity,
      children,
      onToggle,
      ...rest
    } = this.props;
    return (

      <StyledSidebarWrapper openSidebar={open}>
        <StyledSidebarBackground
          opacityMode={opacity}
          onClick={() => opacity && onToggle && onToggle()}
          openSidebar={open}/>
        <StyledSidebar openSidebar={open} {...rest}>
           {children}
        </StyledSidebar>
      </StyledSidebarWrapper>

    )
  }
}

export default Sidebar
