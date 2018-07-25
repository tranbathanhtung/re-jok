// @flow
import * as React from 'react';
import {
  StyledRow
} from './style';

import Col from './Col';

import {isChild} from '../helpers/typeUtils';

type Props = {
  /** Override style of Row**/
  style?: Object,
  /** Add more class to Row**/
  className?: string,
  /** Spacing between grids. The value could be number or object like { xs: 8, sm: 16, v..v}**/
  gutter: number | {| xs?: number, sm?: number, md?: number, lg?: number, xl?: number |},
  /** Children must be array of Col component**/
  children: React.ChildrenArray < React.Element < typeof Col >>,
  /****/
  justify: 'unset' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around',
  /** Vertical aligment of grid **/
  align: 'unset' | 'flex-start' | 'center' | 'flex-end',


}

const defaultProps = {
  gutter: 0,
  justify: 'unset',
  align: 'unset'
}
class Row extends React.Component<Props> {
  static defaultProps = defaultProps;

  render(){
    const {
      children,
      gutter,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledRow {...rest}>
        {
          hasChild && React.Children.map(children, (ch, i)=>(
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
