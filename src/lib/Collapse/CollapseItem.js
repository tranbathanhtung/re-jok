// @flow
import * as React from 'react';

import ReactDOM from 'react-dom';
import Icon from '../Icon';
import { isChild } from '../helpers/typeUtils';


import {
  StyledCollapseItem,
  StyledCollapseItemTitle,
  StyledCollapseItemContent,
  Div,
  StyledArrow
} from './style';

type Props = {
  /** Set style of CollapseItem**/
  style?: Object,
  /** Add more class to Collapse Item**/
  className?: string,
  /** Children of Collapse Item could be anything**/
  children?: any,
  /** Label of collapse item**/
  label?: string | React.Node,
  /** collKey is required**/
  collKey: string,
  /** from Collapse with <3**/
  activeKeys: Array<string>,
  /** from Collapse with <3**/
  onOpenChange?: Function,
  /** from Collapse with <3**/
  accordion?: boolean,
  /** Set icon arrow **/
  iconArrow: boolean,
  /** Set collapse item disable or not**/
  disabled: boolean,

}

const defaultProps = {
  activeKeys: [],
  iconArrow: true,
  disabled: false,

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


  componentDidMount(){
    const childHeight = this.getHeightRaw();
    this.setState({ childHeight });


  }


  componentDidUpdate(prevProps: Props, prevState: State){

    // This set transition when close collapse in accordion mode
    const { accordion, collKey } = this.props;
    const {childHeight} = this.state;



    if(accordion && prevProps.activeKeys.includes(collKey) && prevState.childHeight === childHeight){


      const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);


      const open = prevProps.activeKeys.includes(collKey);

      if(wrapper && wrapper instanceof HTMLElement){

        wrapper.style.height = childHeight;

        this.setHeightRaw(open)
      }

    }

  }

  getHeightRaw = (): string => {
    const node = ReactDOM.findDOMNode(this.refContent.current);
    const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);

    if (node && node instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
      const childHeightRaw = node.offsetHeight || node.clientHeight;


      const childHeight = `${childHeightRaw / 10}rem`;


      return childHeight;

    }
    return "0";
  }


  setHeightRaw = (open: boolean) => {
       const childHeight = this.getHeightRaw();

       const wrapper = ReactDOM.findDOMNode(this.refWrapper.current);


       if (wrapper && wrapper instanceof HTMLElement) {

         wrapper.style.height = `${!open ? childHeight : "0"}`;

       }
  }

  handleCloseCollapse = (open: boolean) => {
    let { childHeight } = this.state;
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

    const { onOpenChange, collKey, disabled } = this.props;

      if(!disabled){
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
    const hasChild = !isChild(children);



    return (
      <StyledCollapseItem>
        <StyledCollapseItemTitle {...rest} onClick={()=> this.handleClick(isOpen)}>
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
            <Div innerRef={this.refContent}>
              {hasChild && children}
            </Div>

        </StyledCollapseItemContent>
      </StyledCollapseItem>
    )
  }
}

export default CollapseItem
