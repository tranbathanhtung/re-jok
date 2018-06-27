// @flow
import * as React from 'react';

import {
  StyledTabItem,
  StyledTabItemInner
} from './style';

type Props = {
  style?: Object,
  className?: string,
  /** Children of tooltip could be anything**/
  children?: any,
  keyActive?: string,
  tabKey: string,
  onSelect?: Function,
  label?: string,

}

const defaultProps = {

}

class TabItem extends React.Component<Props>{

  static defaultProps = defaultProps;

  handleClick = (e: SyntheticEvent<HTMLElement>) => {
    const { keyActive, tabKey, onSelect, ...rest } = this.props;

    const info = {
      key: tabKey,
      item: this,
      domEvent: e,
    };

    onSelect && onSelect(info);



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
        {...rest}
        >
        <StyledTabItemInner
          active={active}
          >
          {label}
        </StyledTabItemInner>
      </StyledTabItem>
    )
  }
}

export default TabItem
