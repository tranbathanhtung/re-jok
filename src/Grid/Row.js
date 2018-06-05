// @flow
import * as React from 'react';
import {
  StyledRow
} from './style';

import Col from './Col'

type Props = {
  gutter: number | Object,
  children: React.ChildrenArray < React.Element < typeof Col >>,

}

const defaultProps = {
  gutter: 0
}
class Row extends React.Component<Props> {
  static defaultProps = defaultProps;

  render(){
    const {
      children,
      gutter,
      ...rest
    } = this.props;
    return (
      <StyledRow {...rest}>
        {
          React.Children.map(children, (ch, i)=>(
            React.cloneElement(ch, {
              key: i,
              gutter
            })
          ))
        }
      </StyledRow>
    )
  }
}


export default Row
