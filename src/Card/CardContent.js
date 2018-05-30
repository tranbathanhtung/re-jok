// @flow
import * as React from 'react';
import {
  StyledCardContent,
  StyledCardContentTitle
} from './style';


type Props = {
  /**title of card content**/
  title?: React.node | string,
}

class CardContent extends React.Component<{}> {
  render(){
    const {
      title
    } = this.props;
    
    return (
      <StyledCardContent>
        <StyledCardContentTitle>{title}</StyledCardContentTitle>
        {this.props.children}
      </StyledCardContent>
    )
  }
}

export default CardContent
