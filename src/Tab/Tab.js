// @flow
import * as React from 'react';

import {
  StyledTabWrapper,
  StyledTabContent,
  StyledTab
} from './style';

import TabItem from './TabItem';
import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Add style to Tab component**/
  style?: Object,
  /** Add class to Tab component**/
  className?: string,
  /** Children of tooltip could be anything**/
  children: any,
  /** Set default active key of Tab**/
  keyActive?: string,
  /** Callback function when tabitem change... onSelect(data: Object)**/
  onSelect?: Function,
  /** Set position of Tab.. default value is left**/
  position?: 'top' | 'right' | 'left' | 'bottom',
  /** set color active of Tab **/
  color?: string

}

type State = {
  keyActive: string,
}

const defaultProps = {
  keyActive: "",
  position: 'top'
}



class Tab extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  static Item = TabItem;

  constructor(props: Props){
    super(props);

     // const nestedChild?

    this.state = {
      keyActive: !props.keyActive
        ? props.children
        ? props.children.length
        ? props.children[0].props.tabKey
        : props.children.props.tabKey
        : ""
        : props.keyActive
    }


  }

  onSelect = (itemInfo: Object) => {
    const { onSelect } = this.props;

      const keyActive = itemInfo.key;

        this.setState({
          keyActive,
        });

      //onSelect is function user call
      onSelect && onSelect({
        ...itemInfo,
        keyActive,
      });

  }

  renderContentTabItem = (children: any) => {

     if(!children) return;



     if(!children.length) return children.props.children;


     return children.map(child => {


      if(child.props.tabKey === this.state.keyActive){

       return child.props.children

     }

     return undefined


    })
  }

  render(){
    const {
      children,
      ...rest
    } = this.props;

    const {
      keyActive
    } = this.state;

    const hasChild = !isChild(children);

    return (
      <StyledTabWrapper
        position={rest.position}
        >
        <StyledTab {...rest}>
          {
            hasChild && React.Children.map(children, (c, i) =>
            (
              React.cloneElement(c, {
                key: i,
                onSelect: this.onSelect,
                position: rest.position,
                color: rest.color,
                keyActive
              })
            ))
          }
        </StyledTab>
        <StyledTabContent>
          {/* {hasChild && console.log(this.renderContentTabItem(children))} */}
          {hasChild && this.renderContentTabItem(children)}

        </StyledTabContent>
      </StyledTabWrapper>

    )
  }
}

export default Tab
