// @flow
import * as React from 'react';
import {
  StyledMenuItem
} from './style';

import {connectMenu} from './MenuContext';

type Props = {
  style?: Object,
  className?: string,
  children?: any,
  backgroundColor?: string,
  textColor?: string,
  activeColor?: string,
  keyActive: string,
  onClick?: Function,
  level?: number,
}

const defaultProps = {

}


class MenuItem extends React.Component<Props>{
  static defaultProps = defaultProps;

  handleClick = (e) => {
    const { keyActive, onClick, ...rest } = this.props;

    const { multiple, onSelect, selectedKeys, onDeselect } = rest.context;

    const isSelected = selectedKeys.indexOf(keyActive) !== -1;
    const info = {
      key: keyActive,
      keyPath: [keyActive],
      item: this,
      domEvent: e,
    };
    onClick && onClick(info);
    if (multiple) {
      if (isSelected) {
        onDeselect(info);
      } else {
        onSelect(info);
      }
    } else if (!isSelected) {
      onSelect(info);
    }
  };

  render(){
    const {
      children,
      keyActive,
      level,
      ...rest
    } = this.props;


    let style = {};

    style.paddingLeft = level ? level * 24 : 24;



    const {selectedKeys} = rest.context;


    let active = selectedKeys.includes(keyActive);
    return (
      <StyledMenuItem style={style} {...rest} active={active} onClick={e => this.handleClick(e)}>
        {children}
      </StyledMenuItem>
    )
  }
}

export default connectMenu(MenuItem);
