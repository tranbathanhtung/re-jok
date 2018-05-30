// @flow
import * as React from 'react';
import {
  StyledCardHeader,
  PrimaryText,
  SecondaryText,
  StyledCardHeaderInfo,
  StyledCardHeaderText,
  StyledCardHeaderAction
} from './style';


import Avatar from '../Avatar/Avatar'


type Props = {
  /** Avatar **/
  avatar?: React.Element <typeof Avatar>,
  /** class of card header**/
  className?: string,
  /** primary text**/
  title?: string,
  /** secondary text**/
  subheader?: string,
  /** action **/
   action?: any,
   
}


class CardHeader extends React.Component<Props> {
  render(){
    const {
      avatar,
      title,
      subheader,
      action,
      ...rest
    } = this.props;

    return (
      <StyledCardHeader {...rest}>
        <StyledCardHeaderInfo>
          {avatar}
          <StyledCardHeaderText>
            <PrimaryText>{title}</PrimaryText>
          <SecondaryText>{subheader}</SecondaryText>
          </StyledCardHeaderText>

        </StyledCardHeaderInfo>
        <StyledCardHeaderAction>
           {action}
        </StyledCardHeaderAction>
      </StyledCardHeader>
    )
  }
}

export default CardHeader
