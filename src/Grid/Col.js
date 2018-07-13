// @flow
import * as React from 'react';
import {
  StyledCol
} from './style';

import {isChild} from '../helpers/typeUtils';

type Props = {
  /**Number of col in a row **/
  span?: number,
  /**Override style of Col**/
  style?: Object,
  /** Add more class to Col**/
  className?: string,
  /** Children of Col.. anything you want**/
  children: any,
  /** Spacing between grids**/
  gutter?: number | {| xs?: number, sm?: number, md?: number, lg?: number, xl?: number |},
  /** Set offet of Col.Default is 0**/
  offset: number,
  /** Set right position of Col.Default is 0**/
  push: number,
  /** Set left positon of Col.Default is 0**/
  pull: number,
  /**Default is 0**/
  order: number,
  /** <768px **/
  xs?: number | {| offset?: number, push?: number, pull?: number, order?: number, span?: number |},
  /** >=768px **/
  sm?: number | {| offset?: number, push?: number, pull?: number, order?: number, span?: number |},
  /** >= 992px **/
  md?: number | {| offset?: number, push?: number, pull?: number, order?: number, span?: number |},
  /** >= 1200px **/
  lg?: number | {| offset?: number, push?: number, pull?: number, order?: number, span?: number |},
  /** >=1920px **/
  xl?: number | {| offset?: number, push?: number, pull?: number, order?: number, span?: number |},
}

const defaultProps = {
  offset: 0,
  push: 0,
  pull: 0,
  order: 0,
}
class Col extends React.Component<Props> {
  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledCol {...rest}>
        {hasChild && children}
      </StyledCol>
    )
  }
}


export default Col
