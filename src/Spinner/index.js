//@flow
import * as React from 'react'
import {
  SpinBounce,
  SpinDefault
} from './style';


export type Props = {
  /** Set size of spinner component... default value is default**/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Set type of spinner component... default value is default**/
  type: 'default' | 'bounce'
}

const defaultProps = {
  size: 'default',
  type: 'default'
}


class Spinner extends React.Component<Props> {

  static defaultProps = defaultProps;

  render(){
    const {
      type
    } = this.props;
    return(
      type === "default" ? <SpinDefault {...this.props}/> : <SpinBounce {...this.props}/>
    )
  }
}

export default Spinner
