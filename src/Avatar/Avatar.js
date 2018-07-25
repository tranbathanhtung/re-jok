// @flow
import * as React from 'react'

import Icon from '../Icon';

import AvatarGroup from './AvatarGroup';

import {StyledAvatar, StyledAvatarImage} from './style';

import { isChild } from '../helpers/typeUtils';

type Props = {
  /** Set size of avatar.The default size is default **/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Set shape of avatar.The default shape is circle**/
  shape: 'circle' | 'square',
  /** Set incon in avatar**/
  icon?: string,
  /** Set alt attribute to image avatar**/
  imgAlt?: string,
  /** Set src attribute to image avatar**/
  imgSrc?: string,
  /** Add more class to avatar**/
  className?: string,
  /**Overrie or add style to root avatar**/
  style?: Object,
  /****/
  children?: any
}

const defaultProps = {
  size: 'default',
  shape: 'circle'
}

class Avatar extends React.Component<Props> {
  static defaultProps = defaultProps;

  static Group = AvatarGroup;

  render() {
    const {
      children,
      imgAlt,
      imgSrc,
      icon,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);
    return (<StyledAvatar imgSrc={imgSrc} {...rest}>
      {
        imgSrc
          ? (<StyledAvatarImage imgAlt={imgAlt} imgSrc={imgSrc}/>)
          : icon
            ? (<Icon name={icon}/>)
            : hasChild && children

      }

    </StyledAvatar>)
  }
}

export default Avatar;
