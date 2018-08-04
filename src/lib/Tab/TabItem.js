// @flow
import * as React from 'react';

import {
  StyledTabItem,
  StyledTabItemInner
} from './style';

type Props = {
  /** Add style to Tab Item component**/
  style?: Object,
  /** Add class to Tab Item component**/
  className?: string,
  /** Children of Tab Item could be anything**/
  children?: any,
  /** from Tab component**/
  keyActive?: string,
  /** key of Tab Item component... it required**/
  tabKey: string,
  /** from Tab component**/
  onSelect?: Function,
  /** Title of Tab Item**/
  label?: string | React.Node,
  /** Set Tab Item disabled or not**/
  disabled: boolean,
  /** from Tab with <3**/
  position?: 'top' | 'right' | 'left' | 'bottom',
  /** from Tab with <3 **/
  color?: string

}

const defaultProps = {
  disabled: false,
}

class TabItem extends React.Component<Props>{

  static defaultProps = defaultProps;

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    const { tabKey, onSelect, disabled } = this.props;

    const info = {
      key: tabKey,
      event: e,
    };

    !disabled && onSelect && onSelect(info);

  }

  render(){
    const {
      children,
      tabKey,
      label,
      keyActive,
      ...rest
    } = this.props;

    const active = tabKey === keyActive;

    return (
      <StyledTabItem
        active={active}
        onClick={this.handleClick}
        >
        <StyledTabItemInner
          {...rest}
          active={active}
          >
          {label}
        </StyledTabItemInner>
      </StyledTabItem>
    )
  }
}

export default TabItem
