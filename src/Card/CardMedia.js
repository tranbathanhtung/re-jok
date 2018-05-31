// @flow
import * as React from 'react';
import {
  StyledCardMedia
} from './style';




type Props = {
  /** class of card header**/
  className?: string,
  /** url for your image**/
  src?: string,
  /** add more style to card media**/
  style?: Object,


}


class CardMedia extends React.Component<Props> {
  static _meta = {
    name: 'CardMedia',
    parent: 'Card'
  }

  render(){
    return (
      <StyledCardMedia {...this.props} />
    )
  }
}

export default CardMedia
