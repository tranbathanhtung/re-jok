// @flow
import * as React from 'react';
import {
  StyledAlert,
  StyledIconClose,
  StyledAlertIcon,
  StyledAlertTitle,
  StyledAlertContent
} from './style';

import Icon from '../Icon';



import { isFunction } from '../helpers/typeUtils';
import { noop } from '../helpers';



type Props = {
  /** Style of Tag Component**/
  style?: Object,
  /** Class of Tag Component**/
  className?: string,
  /** Children of Tag Component could be anything**/
  children?: any,
  title?: string,
  /** Set color of Tag **/
  color?: string,
  /** Set tag is closable or not**/
  closable: boolean,
  /** Callback function when close Tag... it must be work with closable**/
  onClose: Function,
  type: 'none' | 'success' | 'info' | 'warning' | 'error',
  icon?: string,
}

const defaultProps = {
  closable: false,
  onClose: noop,
  type: 'none'
}


class Alert extends React.Component<Props>{

  static defaultProps = defaultProps;

  handleClose = (e: SyntheticEvent<HTMLElement>) => {
    const { onClose } = this.props;

   isFunction(onClose) && onClose(e, {...this.props});
  }

  render(){
    const {
      children,
      closable,
      type,
      title,
      icon,
      ...rest
    } =  this.props;

    const listIcon = {
      info: <StyledAlertIcon color="info" name="info-circle" size="lg"/>,
      success: <StyledAlertIcon color="success" name="check-circle" size="lg"/>,
      error: <StyledAlertIcon color="error" name="times-circle" size="lg"/>,
      warning: <StyledAlertIcon color="warning" name="exclamation-circle" size="lg"/>,

    }

    return (
      <StyledAlert closable={closable} {...rest} type={type}>
        {type !== "none" && !icon && !rest.color && listIcon[type]}

        <div>
          {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
          <StyledAlertContent>
            {children}
          </StyledAlertContent>

        </div>

        { closable && <StyledIconClose onClick={this.handleClose} name="times"/> }

      </StyledAlert>
    )
  }
}

export default Alert
