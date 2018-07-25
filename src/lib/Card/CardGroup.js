// @flow
import * as React from 'react';
import {
  StyledCardGroup
} from './style';

import { CardContext } from './CardContext';

import { isChild } from '../helpers/typeUtils';



type Props = {
  /****/
  children: any,
  /** Number of card in a row**/
  numberCard: number | {|number?: number, xs?: number, sm?: number, md?: number, lg?: number, xl?: number|},
  /** make content card center**/
  center: boolean,
  /** Add more style to card**/
  style?: Object,
  /** Add more class to card**/
  className?: string,
}

const defaultProps = {
  numberCard: 4,
  center: false
}

class CardGroup extends React.Component<Props> {
  static defaultProps= defaultProps;

  render(){
    const {
      numberCard,
      children,
      center,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <CardContext.Provider value={{
          numberCard
        }}>
        <StyledCardGroup {...rest} center={center}>
          {
            hasChild && React.Children.map(children, (ch, i)=>(
              React.cloneElement(ch, {
                key: i,
              })
            ))
          }
        </StyledCardGroup>
      </CardContext.Provider>

    )
  }
}

export default CardGroup
