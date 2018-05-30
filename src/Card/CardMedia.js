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

}


class CardMedia extends React.Component<Props> {
  render(){

    return (
      <StyledCardMedia {...this.props} />
    )
  }
}

export default CardMedia
