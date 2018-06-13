// @flow
import * as React from 'react';
import {
  StyledDivider,
  StyledDividerContent,
} from './style';

type Props = {
  style?: Object,
  className?: string,
  children?: any,
  type: 'vertical' | 'horizontal',
  dashed?: boolean,
  textPosition?: 'left' | 'right'
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
      ...rest
    } = this.props;
    return (
      <StyledDivider children={children} {...rest}>
        {children && <StyledDividerContent>{children}</StyledDividerContent>}
      </StyledDivider>
    )
  }
}

export default Divider
