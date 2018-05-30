// @flow
import * as React from 'react';
import {
  StyledCard
} from './style';

import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardContent from './CardContent';

class Card extends React.Component {

  static Header = CardHeader;
  static Media = CardMedia;
  static Content = CardContent;

  render(){
    return (
      <StyledCard style={{width: 330}} >
        {this.props.children}
      </StyledCard>
    )
  }
}

export default Card
