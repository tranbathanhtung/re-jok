// @flow
import * as React from 'react';
import {
  StyledCardHeader,

  StyledCardHeaderInfo,
  StyledCardHeaderText,
  StyledCardHeaderAction
} from './style';
import {
  PrimaryText,
  SecondaryText,
} from '../globals';


import Avatar from '../Avatar/Avatar';
import AvatarGroup from '../Avatar/AvatarGroup';


type Props = {
  /** Avatar **/
  avatar?: React.Element <typeof Avatar> | React.Element <typeof AvatarGroup>,
  /** class of card header**/
  className?: string,
  /** primary text**/
  title?: React.Node | string,
  /** secondary text**/
  subHeader?: React.Node | string,
  /** action **/
  action?: any,
  /** Add more style to card**/
  style?: Object,


}


class CardHeader extends React.Component<Props> {
  static _meta = {
    name: 'CardHeader',
    parent: 'Card'
  }

  render(){
    const {
      avatar,
      title,
      subHeader,
      action,
      ...rest
    } = this.props;

    return (
      <StyledCardHeader {...rest}>
        <StyledCardHeaderInfo>
          {avatar}
          <StyledCardHeaderText>
            <PrimaryText>{title}</PrimaryText>
          <SecondaryText>{subHeader}</SecondaryText>
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
