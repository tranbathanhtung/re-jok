// @flow
import * as React from 'react';

import {
  StyledCardAction,
  StyledActionRight,
  StyledActionLeft
} from './style';

import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Right element of card action**/
  actionRight?: Array<any>,
  /** Left element of card action**/
  actionLeft?: Array<any>,
  /** Add more style to card action**/
  style?: Object,
  /** Add more class to card**/
  className?: string,
  /**Children**/
  children?: any,
}

class CardAction extends React.Component<Props>{

  static _meta = {
    name: 'CardAction',
    parent: 'Card'
  }
  render(){
    const {
      actionRight,
      actionLeft,
      children,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledCardAction {...rest}>
        <StyledActionRight>
          {
           actionRight &&  React.Children.map(actionRight, (ar, i)=>(
              React.cloneElement(ar, {
                key: i
              })
            ))
          }
        </StyledActionRight>
        <StyledActionLeft>
          {
           actionLeft &&  React.Children.map(actionLeft, (al, i)=>(
              React.cloneElement(al, {
                key: i
              })
            ))
          }
        </StyledActionLeft>
        {hasChild && children}
      </StyledCardAction>
    )
  }
}

export default CardAction;
