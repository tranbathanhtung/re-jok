// @flow
import * as React from 'react';
import {
  StyledCol
} from './style';

type Props = {
  span: number,
  style?: Object,
  className?: string,
  children: any,
  gutter: number | Object,
  offset: number,
  push: number,
  pull: number,
}

const defaultProps = {
  span: 24,
  offset: 0,
  push: 0,
  pull: 0
}
class Col extends React.Component<Props> {
  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledCol {...rest}>
        {children}
      </StyledCol>
    )
  }
}


export default Col
