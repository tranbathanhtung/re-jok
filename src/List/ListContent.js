// @flow
import * as React from 'react';
import {StyledListContent, StyledListContentContainer, StyledListContentHeader, StyledListContentDescription, StyledListContentAction} from './style';

import {PrimaryText, SecondaryText} from '../globals'

type Props = {
  style?: Object,
  className?: string,
  position: string,
  primaryHeader?: string | React.Node,
  secondaryHeader?: string | React.Node,
  description?: string | React.Node,
  children?: any,
  tagName: string,
  avatar?: React.Node,
  action?: React.Node | string,

}

const defaultProps = {
  position: "left",
  tagName: "div"
}

class ListContent extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    const {
      children,
      avatar,
      primaryHeader,
      secondaryHeader,
      description,
      action
    } = this.props;
    return (<StyledListContent>

      {avatar}


        <StyledListContentHeader>
          <PrimaryText>{primaryHeader}</PrimaryText>
          <SecondaryText>{secondaryHeader}</SecondaryText>
            <StyledListContentDescription>
              {description}
            </StyledListContentDescription>
        </StyledListContentHeader>




      <StyledListContentAction>
        {action}
      </StyledListContentAction>

    </StyledListContent>)
  }
}

export default ListContent
