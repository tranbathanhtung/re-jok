// @flow
import * as React from 'react';
import {
  StyledMenuListWrapper,
  StyledMenuList,
  StyledMenuListTitle
} from './style';

type Props = {
  children?: any,
  title?: string | React.Node,
  level?: number,
}


class MenuList extends React.Component<Props>{
  render(){
    const {
      children,
      title,
      level
    } = this.props;

    let style = {};

    style.paddingLeft = level ? level * 16 : 16;
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
