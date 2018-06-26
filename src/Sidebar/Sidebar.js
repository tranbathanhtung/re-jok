// @flow
import * as React from 'react';
import {
  StyledSidebarWrapper,
  StyledSidebarBackground,
  StyledSidebar
} from './style';

import SidebarContent from './SidebarContent';



type Props = {
  /** Override style in Sidebar**/
  style?: Object,
  /** Add more class to Sidebar**/
  className?: string,
  /** Children element of Sidebar**/
  children?: React.Node,
  /** Set sidebar open or not**/
  open: boolean,
  /** Set position when open of sidebar**/
  direction: 'left' | 'right' | 'top' | 'bottom',
  /** Set side opacity mode... should be use with onToggle**/
  opacity: boolean,
  /** Set fullScreen mode sidebar... should be use with onToggle**/
  fullScreen: boolean,
  /** onToggle function like hanlde close side bar**/
  onToggle?: Function,
  /** Set width of side bar**/
  width: number,
  /** Set height of side bar**/
  height: number
}

const defaultProps = {
  open: false,
  direction: 'left',
  opacity: false,
  fullScreen: false,
  width: 256,
  height: 60,
}






class Sidebar extends React.Component<Props>{

  static defaultProps = defaultProps;

  static Content = SidebarContent;

  handleToggle = (e: SyntheticEvent<HTMLElement>) => {
    const { onToggle } = this.props;

    onToggle && onToggle(e, {...this.props});
  }

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
          onClick={this.handleToggle}
          openSidebar={open}/>
        <StyledSidebar openSidebar={open} {...rest}>
           {children}
        </StyledSidebar>
      </StyledSidebarWrapper>

    )
  }
}

export default Sidebar
