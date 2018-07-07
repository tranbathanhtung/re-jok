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
  color?: string
}

const defaultProps = {
  percent: 0,
  indeterminate: true,

}


class Progress extends React.Component<Props>{
  static defaultProps = defaultProps;
  render(){
    return (
      <StyledProgressWrapper>
        <StyledProgress {...this.props}/>
      </StyledProgressWrapper>

    )
  }
}

export default Progress
