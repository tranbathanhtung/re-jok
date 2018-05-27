// @flow
import * as React from 'react'
import Avatar from './Avatar'
import {StyledAvatarGroup, StyledAvatarItem} from './style'

type Props = {
  /** Children must be Avatar**/
  children: React.ChildrenArray < React.Element < typeof Avatar >>,
  /** size of avatar group must be like size of avatar**/
  size?: string
}

const defaultProps = {
  size: "default"
}

class AvatarGroup extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    const {size, children} = this.props;
    return (<StyledAvatarGroup>
      {
        children && React.Children.count(children) > 0 && React.Children.map(children, (c, i) => (<StyledAvatarItem size={size} key={i}>
          {c}
        </StyledAvatarItem>))
      }
    </StyledAvatarGroup>)
  }
}

export default AvatarGroup
