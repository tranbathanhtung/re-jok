// @flow
import * as React from 'react'
import Icon from '../Icon';


import {TextBtn, Label, SpinnerButton} from './style';
import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Set button unable to click or not **/
  disabled?: boolean,
  /** Event when user clicked to button **/
  onClick?: Function,
  /** Set button to a link**/
  hrefString?: string,
  /** The size of button . The default size of button is default **/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Set shape of button **/
  shape?: 'circle' | 'rounded',
  /** Button can show a loading**/
  loading: boolean,
  /** Set icon in button**/
  icon?: string,
  /** Add more style to button **/
  style?: Object,
  /** Add more class to button **/
  className?: string,
  /** Primary color of button **/
  primary?: boolean,
  /** Secondary color of button **/
  secondary?: boolean,
  /** move icon to left or right label. The default is left **/
  iconPosition: 'left' | 'right',

  /** Change tag name of button ... span, div, a v..v **/
  tag?: string,
  /** color of text button**/
  color?: string,
  /** Change text color when hover button**/
  colorWhenHover?: string,
  /** animated when hover button**/
  hoverable: boolean,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  rule: 'button' | 'reset' | 'submit',
  /****/
  children?: any,
}


const defaultProps = {
  disabled: false,
  size: 'default',
  rule: 'button',
  loading: false,
  primary: false,
  secondary: false,
  iconPosition: 'left',
  tag: "button",
  color: "",
  hoverable: false,
};

class TextButton extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    const {
      hrefString,
      tag,
      children,
      loading,
      size,
      primary,
      secondary,
      icon,
      iconPosition
    } = this.props;

    const hasChild = !isChild(children);

    const ElementType = !hrefString ? TextBtn.withComponent(tag) : TextBtn.withComponent('a')

    return (
      <ElementType {...this.props}>
        {
          icon
            ? (
              loading
              ? (<SpinnerButton size={size} iconPosition={iconPosition} primary={primary} secondary={secondary}/>)
              : (<Icon iconPosition={iconPosition} name={icon}/>))
            : ('')
        }
        {loading && !icon && <SpinnerButton size={size} iconPosition={iconPosition} primary={primary} secondary={secondary}/>}
        {
           hasChild && <Label>
              {children}
            </Label>
        }

      </ElementType>
  )
  }
}


export default TextButton
