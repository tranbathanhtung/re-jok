// @flow
import * as React from 'react';
import {
  StyledSidebarWrapper,
  StyledSidebarBackground,
  StyledSidebar
} from './style';

import { isChild } from '../helpers/typeUtils';

import SidebarContent from './SidebarContent';
import JokBody from '../globals/JokBody';

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
  /** onRequestClose function like hanlde close side bar**/
  onRequestClose?: Function,
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

  componentDidMount(){

    const { open } = this.props;

    open && this.addEventKeydown();
  }

  componentDidUpdate(prevProps: Props){
    if(prevProps.open && !this.props.open){
      this.removeEventKeydown();
    } else if(!prevProps.open && this.props.open){
      this.addEventKeydown();
    }
  }

  componentWillUnmount(){
    const { open } = this.props;

    open && this.removeEventKeydown();
  }

  handleClose = (e: SyntheticEvent<HTMLElement>) => {
    const { onRequestClose } = this.props;

    this.removeEventKeydown();

    onRequestClose && onRequestClose(e, {...this.props}, 'clickaway');
  }

  addEventKeydown = () => {
    document && document.addEventListener('keydown', this.handleKeyDown);
  }

  removeEventKeydown = () => {
    document && document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent) => {

    if(e.which !== 27 || e.keyCode !== 27){
      return;
    }
    const { onRequestClose } = this.props;

    onRequestClose && onRequestClose(e, {...this.props}, 'esc');

  }

  render(){
    const {
      open,
      opacity,
      children,
      onRequestClose,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
    <JokBody>
      <StyledSidebarWrapper openSidebar={open}>
        <StyledSidebarBackground
          opacityMode={opacity}
          onClick={this.handleClose}
          openSidebar={open}/>
        <StyledSidebar openSidebar={open} {...rest}>
           {hasChild && children}
        </StyledSidebar>
      </StyledSidebarWrapper>
    </JokBody>
    )
  }
}

export default Sidebar
