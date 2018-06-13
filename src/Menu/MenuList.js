// @flow
import * as React from 'react';
import {
  StyledMenuListWrapper,
  StyledMenuList,
  StyledMenuListTitle
} from './style';

type Props = {
  /** Children of Menu List is anything but it should be MenuItem**/
  children?: any,
  /** title of Menu List **/
  title?: string | React.Node,
  /** from parent SubMenu with <3**/
  level?: number,
  /** controll padding of title menu list default is 16px**/
  paddingLeft: number
}

const defaultProps = {
  paddingLeft: 16
}

class MenuList extends React.Component<Props>{
  static defaultProps = defaultProps;

  render(){
    const {
      children,
      title,
      level,
      paddingLeft
    } = this.props;

    let style = {};

    style.paddingLeft = level ? level * paddingLeft : paddingLeft;
    return (
      <StyledMenuListWrapper>
        {
          title
          ? (
            <StyledMenuListTitle style={style}>
               {title}
            </StyledMenuListTitle>
          ): null
        }
        <StyledMenuList>
          {
            React.Children.map(children, (ch, i)=>(
              React.cloneElement(ch, {
                key: i,
                level: level && level,
              })
            ))
          }
        </StyledMenuList>

      </StyledMenuListWrapper>
    )
  }
}

export default MenuList;
