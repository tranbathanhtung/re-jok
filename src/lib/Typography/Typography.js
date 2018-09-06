// @flow
import * as React from 'react';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Span,
} from './style';

import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Children of Typography could be anything**/
  children?: any,
  /** Set tag name of Typography .. default is tag p**/
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'h6' | 'p' | 'span',
  /** Add style of Typography**/
  style?: Object,
  /** Add class of Typography**/
  className?: string,
  /** Set color of text**/
  color?: string,
}

const defaultProps = {
  tag: 'p'
}

class Typography extends React.Component<Props>{

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      tag,
      ...rest
    } = this.props;

    const listTypography = {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      span: Span,
    };

    const ElementType = listTypography[tag];

    const hasChild = !isChild(children);

    return (
      <ElementType {...rest}>
        {hasChild && children}
      </ElementType>
    )
  }
}

export default Typography
