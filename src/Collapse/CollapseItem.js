// @flow
import * as React from 'react';

import ReactDOM from 'react-dom';
import Icon from '../Icon';

import {
  StyledCollapseItem,
  StyledCollapseItemTitle,
  StyledCollapseItemContent,
  StyledArrow
} from './style';

type Props = {
  children?: any,
  label?: string | React.Node,
  collKey: string,
  activeKeys: Array<string>,
  onOpenChange?: Function,
  accordion?: boolean,
  iconArrow: boolean
}

const defaultProps = {
  activeKeys: [],
  iconArrow: true
}

type State = {
  childHeight: string
}

class CollapseItem extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  state = { childHeight: "0" };


  refContent: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  refWrapper: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  returnWrapper = () => {
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);
    if(wrapper && wrapper instanceof HTMLElement){
      return wrapper
    }
  }


  componentDidUpdate(prevProps: Props){

    // This set transition when close collapse in accordion mode
    const { accordion, collKey } = this.props;
    const {childHeight} = this.state;
    if(accordion && prevProps.activeKeys.includes(collKey)){
      const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

      const open = prevProps.activeKeys.includes(collKey);

      if(wrapper && wrapper instanceof HTMLElement){
        wrapper.style.height = childHeight;

        this.setHeightRaw(open)
      }

    }

  }

  setHeightRaw = (open: boolean) => {
    const node = ReactDOM.findDOMNode(this.refContent.current);
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);


    if (node && node instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
      const childHeightRaw = node.offsetHeight || node.clientHeight;


      const childHeight = `${childHeightRaw / 10}rem`;
      this.setState({
        childHeight,
      })

       wrapper.style.height = `${!open ? childHeight : "0"}`;


    }
  }

  handleCloseCollapse = (open: boolean) => {
    const {childHeight} = this.state;
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

    if(wrapper && wrapper instanceof HTMLElement){
      wrapper.style.height = childHeight;

      this.setHeightRaw(open);
     }

   }

  handleOpenCollapse = (open: boolean) => {
    this.setHeightRaw(open);

  }

  handleClick = (open: boolean) => {

    const { onOpenChange, collKey } = this.props;

      if(!open){

         this.handleOpenCollapse(open);

      } else {

        this.handleCloseCollapse(open);

      }


    onOpenChange && onOpenChange({
      key: collKey,
      item: this,
      open,
    });




  }

  onTransitionEnd = (e: SyntheticEvent<HTMLInputElement>, isOpen: boolean)=> {
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

    if(wrapper && wrapper instanceof HTMLElement){
      wrapper.style.height = '';

    }

  }
  render(){
    const {
      children,
      label,
      activeKeys,
      collKey,
      iconArrow,
      ...rest
    } = this.props;


    let isOpen = activeKeys.includes(collKey);



    return (
      <StyledCollapseItem {...rest}>
        <StyledCollapseItemTitle onClick={()=> this.handleClick(isOpen)}>
          {label}
         {iconArrow && <StyledArrow open={isOpen}>
            <Icon name="angle-down"/>
        </StyledArrow> }
        </StyledCollapseItemTitle>
        <StyledCollapseItemContent
          open={isOpen}
          innerRef={this.refWrapper}
          onTransitionEnd={(e) => this.onTransitionEnd(e, isOpen)}
          childHeight={this.state.childHeight}


          >
            <div ref={this.refContent}>
              {children}
            </div>

        </StyledCollapseItemContent>
      </StyledCollapseItem>
    )
  }
}

export default CollapseItem
