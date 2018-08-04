//@flow
import * as React from 'react';

import {
  StyledProgress,
  StyledProgressWrapper
} from './style';

type Props = {
  /** percent of progress bar.. it just work with mode Determinate**/
  percent: number,
  /** Set progress bar Indeterminate mode or Determinate mode **/
  indeterminate: boolean,
  /** Set color of progress bar **/
  color?: string,
  /** Styled of Progress Componnet**/
  style?: Object,
  /** CLass of Progress Component**/
  className?: string,
  /** Set size of Progress componnet**/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Set Progress fixed or not**/
  fixed: boolean,
}

const defaultProps = {
  percent: 0,
  indeterminate: true,
  size: 'small',
  fixed: false,

}


class Progress extends React.Component<Props>{
  static defaultProps = defaultProps;

  render(){

    const {
      size,
      fixed,
      ...rest
    } = this.props;

    return (
      <StyledProgressWrapper fixed={fixed} size={size}>
        <StyledProgress {...rest}/>
      </StyledProgressWrapper>

    )
  }
}

export default Progress
