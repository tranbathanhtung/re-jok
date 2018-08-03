//@flow
import * as React from 'react';
import {
  StyledSection
} from './style';

import { isChild } from '../helpers/typeUtils';



type Props = {
  /** Add style to Section**/
  style?: Object,
  /** Add class to Section**/
  className?: string,
  /** Children of Section could be anything**/
  children: any,
  /** Type of Section**/
  type: 'default' | 'background',
  /** backgroundUrl work only when type of section is background**/
  backgroundUrl?: string
}

const defaultProps = {
  type: 'default'
}

class Section extends React.Component<Props>{

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledSection {...rest}>

        {hasChild && children}
      </StyledSection>
    )
  }
}

export default Section
