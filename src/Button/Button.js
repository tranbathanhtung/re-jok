// @flow
import * as React from 'react'
import Icon from '../Icon';


import {
  Btn,
  OutlineBtn,
  Label,
  SpinnerButton,
  IconBtn
} from './style';

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
  loading?: boolean,
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
  /** Set width of button to 100%**/
  fullWidth?: boolean,
  /** move icon to left or right label. The default is left **/
  iconPosition: 'left' | 'right',
  /** if you don't want use primary or secondary , you can set your color to button **/
  backgroundColor?: string,
  /** Make your button animated**/
  animated?: string,
  /** Change tag name of button ... span, div, a v..v **/
  tag?: string,
  /** Change type of button**/
  variant: 'outline' | 'inverted' | 'raised' | 'icon',
  /** create button with box shadow or not**/
  hasBoxShadow: boolean,

  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  rule: 'button' | 'reset' | 'submit',
  /**Children element can be string, number, HTML node anything you want**/
  children?: any,
}



const defaultProps = {
  disabled: false,
  size: 'default',
  rule: 'button',
  loading: false,
  primary: false,
  secondary: false,
  fullWidth: false,
  iconPosition: 'left',
  backgroundColor: "",
  tag: "button",
  variant: 'raised',
  hrefString: "",
  hasBoxShadow: false
};

class Button extends React.Component<Props> {
  static defaultProps = defaultProps;

  render() {
    const {
      tag,
      hrefString,
      children,
      loading,
      shape,
      size,
      primary,
      secondary,
      icon,
      iconPosition,
      variant,

    } = this.props;

   const ListButton = {
     raised: Btn,
     outline: OutlineBtn,
     inverted: OutlineBtn,
     icon: IconBtn
   }
   const hasChild = !isChild(children);

    const ElementType = !hrefString ? ListButton[variant].withComponent(tag) : ListButton[variant].withComponent('a')

    return (
      <ElementType {...this.props}>
        {
          icon
            ? (
              loading
              ? (<SpinnerButton size={size} iconPosition={iconPosition} shape={shape} primary={primary} secondary={secondary}/>)
              : (<Icon iconPosition={iconPosition} name={icon}/>))
            : ('')
        }
        {loading && !icon && <SpinnerButton size={size} iconPosition={iconPosition} shape={shape} primary={primary} secondary={secondary}/>}
        {
          shape === "circle" || variant === "icon"
            ? (null)
            : (hasChild && <Label>
              {children}
            </Label>)
        }

      </ElementType>
    )
  }
}

export default Button
