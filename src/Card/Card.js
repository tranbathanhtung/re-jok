// @flow
import * as React from 'react';
import {
  StyledCard
} from './style';

import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardContent from './CardContent';
import CardAction from './CardAction';
import CardGroup from './CardGroup';
import CardLoading  from './CardLoading';

type Props = {
  /**Number of card in a row**/
  numberCard?: number,
  /** Children of card**/
  children?: any,
  /** add hover affect **/
  hoverable: boolean,
  /**add more style to card**/
  style?: Object,
  /** add more class to card**/
  className?: string,
  /** Event when user clicked to button **/
  onClick?: Function,
  /** Loading content of card**/
  loading: boolean
}

const defaultProps = {
  hoverable: false,
  loading: false,
}

class Card extends React.Component<Props> {
  static defaultProps = defaultProps;

  static Group = CardGroup;
  static Header = CardHeader;
  static Media = CardMedia;
  static Content = CardContent;
  static Action = CardAction;

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  render(){
    const{
      children,
      onClick,
      loading,
      ...rest
    } = this.props;

    return (
      <StyledCard {...rest} loading={loading} onClick={this.handleClick}>
        {
          loading
          ? <CardLoading/>
        : children
        }

      </StyledCard>
    )
  }
}

export default Card
