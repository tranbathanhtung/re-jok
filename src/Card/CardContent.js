// @flow
import * as React from 'react';
import {
  StyledCardContent,
  StyledCardContentTitle,
  StyledCardContentSubTitle,
} from './style';


type Props = {
  /**title of card content**/
  title?: React.Node | string,
  /**Add more sub title of card content**/
  subtitle?: React.Node | string,
  /****/
  children?: React.Node | string,
  /** add more style to card**/
  style?: Object,
  /** Add more class to card**/
  className?: string,
}

class CardContent extends React.Component<Props> {
  static _meta = {
    name: 'CardContent',
    parent: 'Card'
  }
  render(){
    const {
      title,
      subtitle,
      ...rest
    } = this.props;

    return (
      <StyledCardContent {...rest}>
        <StyledCardContentTitle>{title}</StyledCardContentTitle>
        <StyledCardContentSubTitle>{subtitle}</StyledCardContentSubTitle>
        {this.props.children}
      </StyledCardContent>
    )
  }
}

export default CardContent
