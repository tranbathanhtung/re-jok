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
  style?: Object,
  className?: string,
  /** Children of tooltip could be anything**/
  children?: React.ChildrenArray < React.Element < typeof TabItem >>,
  keyActive?: string,
  onChange?: Function,
  onSelect?: Function,

}

const defaultProps = {

}

class Tab extends React.Component<Props>{

  static defaultProps = defaultProps;

  static Item = TabItem;

  constructor(props: Object){
    super(props);

    this.state = {
      keyActive: props.keyActive || ""
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

  recursiveCloneChildren = (children) => {

     return React.Children.map(children, child => {


      if(child.props.tabKey === this.state.keyActive){

       // return React.Children.map(child.props.children, c => React.cloneElement(c, {}))
       return child.props.children


      }


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
      <StyledTabWrapper>
        <StyledTab {...rest}>
          {
            hasChild && React.Children.map(children, (c, i) =>
            (
              React.cloneElement(c, {
                key: i,
                onSelect: this.onSelect,
                keyActive
              })
            ))
          }
        </StyledTab>
        <StyledTabContent>
          {this.recursiveCloneChildren(children)[0]}
        </StyledTabContent>
      </StyledTabWrapper>

    )
  }
}

export default Tab
