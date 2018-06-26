// @flow
import * as React from 'react';

import {
  StyledTooltip
} from './style';

type Props = {
  children?: any,
  position: 'top' | 'left' | 'right' | 'bottom',
  label?: string
}

const defaultProps = {
  position: 'bottom'
}

class Tooltip extends React.Component<Props>{

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledTooltip {...rest}>
        {children}
      </StyledTooltip>
    )
  }
}

export default Tooltip
