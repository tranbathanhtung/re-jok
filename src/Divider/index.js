// @flow
import * as React from 'react';
import {
  StyledDivider,
  StyledDividerContent,
} from './style';

import {
  isChild
} from '../helpers/typeUtils';

type Props = {
  /** Override style of divider**/
  style?: Object,
  /** Add more class to  divider**/
  className?: string,
  /** Children could be anything**/
  children?: any,
  /** Set type of divider is vertical or horizontal**/
  type: 'vertical' | 'horizontal',
  /** Set divider is dashed or not.. Note: it's not work with divider has children **/
  dashed?: boolean,
  /** Set text in divider left or right**/
  textPosition?: 'left' | 'right',
}

const defaultProps = {
  dashed: false,
  type: 'horizontal'
}

class Divider extends React.Component<Props> {

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      type,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledDivider hasChild={hasChild} type={type} {...rest}>
        {children && type !== "vertical" && <StyledDividerContent>{children}</StyledDividerContent>}
      </StyledDivider>
    )
  }
}

export default Divider
