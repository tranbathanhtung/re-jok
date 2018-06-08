// @flow
import * as React from 'react';
import {StyledListContent, StyledListContentHeader, StyledListContentDescription, StyledListContentAction} from './style';

import {PrimaryText, SecondaryText} from '../globals'

type Props = {
  /** Override style of List Content**/
  style?: Object,
  /** Add more class to List Content**/
  className?: string,
  /** Primary Content**/
  primaryHeader?: string | React.Node,
  /** Secondary Content**/
  secondaryHeader?: string | React.Node,
  /** Description**/
  description?: string | React.Node,
  /** Children can be anything**/
  children?: any,
  /** Change tagName of List Content. Default value is div tag**/
  tag: string,
  /****/
  media?: React.Node,
  /** action is right element of List**/
  action?: React.Node | string,

}

const defaultProps = {
  tag: "div"
}

class ListContent extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    const {
      children,
      media,
      primaryHeader,
      secondaryHeader,
      description,
      action,
      tag
    } = this.props;

    const ElementType = StyledListContent.withComponent(tag);


    return (<ElementType>

      {media}
      
        <StyledListContentHeader>
          <PrimaryText>{primaryHeader}</PrimaryText>
          <SecondaryText>{secondaryHeader}</SecondaryText>
            <StyledListContentDescription>
              {description}
            </StyledListContentDescription>
              {children}
        </StyledListContentHeader>

      <StyledListContentAction>
        {action}
      </StyledListContentAction>


    </ElementType>)
  }
}

export default ListContent
