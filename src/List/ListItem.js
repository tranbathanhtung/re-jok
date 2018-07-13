// @flow
import * as React from 'react';
import {
  StyledListItem
}from './style';

import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Override style of List Item**/
  style?: Object,
  /** Add more class to List Item**/
  className?: string,
  /** Active List Item**/
  active: boolean,
  /** Children of ListItem could be anything**/
  children?: any,
  /** Disabled List Item**/
  disabled: boolean,
  /** Click event of List Item**/
  onClick?: Function,
  /** Change tagName of List Item.Default value is div tag**/
  tag: string,
  /** A list can show divisions**/
  divided?: boolean,
  /** A list can selection**/
  selection?: boolean,
  /** If tagName ListItem is you can set href**/
  hrefString?: string,
  /** Set layout list is row or column **/
  horizontal?: boolean,


}

const defaultProps = {
  active: false,
  disabled: false,
  tag: "div"
}


class ListItem extends React.Component<Props>{
  static defaultProps= defaultProps;

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  render(){
    const {
      children,
      tag,
      hrefString,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);


    const ElementType = !hrefString ?StyledListItem.withComponent(tag) : StyledListItem.withComponent('a')

    return (
      <ElementType onClick={this.handleClick} hrefString={hrefString} {...rest}>
        {hasChild && children}
      </ElementType>
    )
  }
}

export default ListItem
