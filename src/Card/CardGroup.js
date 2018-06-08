// @flow
import * as React from 'react';
import {
  StyledCardGroup
} from './style';


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
    return (
      <StyledCardGroup {...rest} center={center}>
        {
          React.Children.map(children, (ch, i)=>(
            React.cloneElement(ch, {
              key: i,
              numberCard
            })
          ))
        }
      </StyledCardGroup>
    )
  }
}

export default CardGroup
