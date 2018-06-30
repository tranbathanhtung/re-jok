// @flow
import * as React from 'react';

import {
  StyledCollapse
} from './style';

import CollapseItem from './CollapseItem';
import { isChild } from '../helpers/typeUtils';


type Props = {
  children?: any,
  activeKeys?: Array<string>,
  onOpen?: Function,
  accordion: boolean,
}

type State = {
  activeKeys: Array<string>
}

const defaultProps = {
  accordion: false
}

class Collapse extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  static Item = CollapseItem;

  constructor(props: Props){
    super(props);


    this.state = {
      activeKeys: props.activeKeys || [],
    }

  }


  onOpenChange = (event: Object) => {

    let {activeKeys} = this.state;
    const { accordion, onOpen } = this.props;
    if (accordion) {
      activeKeys = activeKeys[0] === event.key ? [] : [event.key];
    } else {
      activeKeys = [...activeKeys];
      const index = activeKeys.indexOf(event.key);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        activeKeys.splice(index, 1);
      } else {
        activeKeys.push(event.key);
      }
    }
    this.setState({
      activeKeys
    })

    onOpen && onOpen({...event})

  }

  render(){
    const {
      children,
      accordion,
      ...rest
    } = this.props;

    const { activeKeys } = this.state;

    const hasChild = !isChild(children);

    return (
      <StyledCollapse {...rest}>
        {
          hasChild && React.Children.map(children, (c, i) =>
          (
            React.cloneElement(c, {
              key: i,
              activeKeys,
              onOpenChange: this.onOpenChange,
              accordion
            })
          ))
        }
      </StyledCollapse>
    )
  }
}

export default Collapse
