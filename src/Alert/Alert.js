// @flow
import * as React from 'react';
import {
  StyledAlert,
  StyledIconClose,
  StyledAlertIcon,
  StyledAlertTitle,
  StyledAlertContent
} from './style';




import { isFunction, isChild } from '../helpers/typeUtils';
import { noop } from '../helpers';



type Props = {
  /** Style of Tag Component**/
  style?: Object,
  /** Class of Tag Component**/
  className?: string,
  /** Children of Tag Component could be anything**/
  children?: any,
  /** Set title of Alert**/
  title?: string,
  /** Set color of Tag **/
  color?: string,
  /** Set tag is closable or not**/
  closable: boolean,
  /** Callback function when close Tag... it must be work with closable**/
  onClose: Function,
  /** Set type of Alert Component **/
  type: 'none' | 'success' | 'info' | 'warning' | 'error',
  /** Set icon of Alert**/
  icon?: string,
  /** Set Alert has box shadow or not**/
  hasBoxshadow: boolean,
}

type State = {
  show: boolean
}

const defaultProps = {
  closable: false,
  onClose: noop,
  type: 'none',
  hasBoxshadow: false
}


class Alert extends React.Component<Props, State>{

  state = {
    show: true
  }

  static defaultProps = defaultProps;

  handleClose = (e: SyntheticEvent<HTMLElement>) => {
    const { onClose } = this.props;

    this.setState({
      show: false
    })

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

    const { show } = this.state;


    const hasColor = rest.color || type !== "none";
    const hasChild = !isChild(children);

    const listIcon = {
      info: <StyledAlertIcon style={{color: "#fff"}} name="info-circle" size="lg"/>,
      success: <StyledAlertIcon style={{color: "#fff"}} name="check-circle" size="lg"/>,
      error: <StyledAlertIcon style={{color: "#fff"}} name="times-circle" size="lg"/>,
      warning: <StyledAlertIcon style={{color: "#fff"}} name="exclamation-circle" size="lg"/>,

    }

    return (
      show ? (

        <StyledAlert closable={closable} {...rest} type={type}>
          {type !== "none" && !icon && !rest.color && listIcon[type]}

            {title && <StyledAlertTitle hasColor={hasColor}>{title}!</StyledAlertTitle>}
            <StyledAlertContent>
              {hasChild && children}
            </StyledAlertContent>


          { closable && <StyledIconClose onClick={this.handleClose} name="times"/> }

        </StyledAlert>
      ) : null
    )
  }
}

export default Alert
