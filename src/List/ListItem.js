// @flow
import * as React from 'react';
import {
  StyledListItem
}from './style';

type Props = {
  style?: Object,
  className?: string,
  active: boolean,
  children?: any,
  disabled: boolean,
  onClick?: Function,
  tag: string,
  divided?: boolean,
  selection?: boolean,


}

const defaultProps = {
  active: false,
  disabled: false,
  tag: "div"
}


class ListItem extends React.Component<Props>{
  static defaultProps= defaultProps;
  render(){
    const {
      children,
      tag,
      ...rest
    } = this.props;

    const ElementType = StyledListItem.withComponent(tag);
    return (
      <ElementType {...rest}>
        {children}
      </ElementType>
    )
  }
}

export default ListItem
