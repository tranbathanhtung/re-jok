// @flow
import * as React from 'react';
import {
  StyledTag,
  StyledIconClose,
} from './style';



import { isFunction } from '../helpers/typeUtils';
import { noop } from '../helpers';



type Props = {
  /** Style of Tag Component**/
  style?: Object,
  /** Class of Tag Component**/
  className?: string,
  /** Children of Tag Component could be anything**/
  children?: any,
  /** If you want to add more tag.. you should use tag key**/
  tagKey?: string | number,
  /** Set color of Tag **/
  color?: string,
  /** Set tag is closable or not**/
  closable: boolean,
  /** Set size of Tag**/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Callback function when close Tag... it must be work with closable**/
  onClose: Function,
}

const defaultProps = {
  closable: false,
  size: 'default',
  onClose: noop
}


class Tag extends React.Component<Props>{

  static defaultProps = defaultProps;

  handleClose = (e: SyntheticEvent<HTMLElement>) => {
    const { onClose } = this.props;

   isFunction(onClose) && onClose(e, {...this.props});
  }

  render(){
    const {
      children,
      closable,
      ...rest
    } =  this.props;
    return (
      <StyledTag closable={closable} {...rest}>
        {children}
        { closable && <StyledIconClose onClick={this.handleClose} name="times"/> }
      </StyledTag>
    )
  }
}

export default Tag
