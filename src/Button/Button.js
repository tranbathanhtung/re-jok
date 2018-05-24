import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../Icon';
import {ThemeProvider, withComponent} from 'styled-components';
import {theme} from '../theme';

import {
  Btn,
  OutlineBtn,
  Label,
  SpinnerButton,
  IconBtn
} from './style';

const propTypes = {
  /** Set button unable to click or not **/
  disabled: PropTypes.bool,
  /** Event when user clicked to button **/
  onClick: PropTypes.func,
  /** Set button to a link**/
  hrefString: PropTypes.string,
  /** The size of button . The default size of button is default **/
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
  /** Set shape of button **/
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** Button can show a loading**/
  loading: PropTypes.bool,
  /** Set icon in button**/
  icon: PropTypes.string,
  /** Add more style to button **/
  style: PropTypes.object,
  /** Add more class to button **/
  className: PropTypes.string,
  /** Primary color of button **/
  primary: PropTypes.bool,
  /** Secondary color of button **/
  secondary: PropTypes.bool,
  /** Set width of button to 100%**/
  fullWidth: PropTypes.bool,
  /** move icon to left or right label. The default is left **/
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /** if you don't want use primary or secondary , you can set your color to button **/
  backgroundColor: PropTypes.string,
  /** Make your button animated**/
  animated: PropTypes.oneOf(['classic']),
  /** Change tag name of button ... span, div, a v..v **/
  tag: PropTypes.string,
  /** Change type of button**/
  variant: PropTypes.oneOf(['outline', 'inverted', 'raised', 'icon']),

  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  rule: PropTypes.oneOf(['button', 'reset', 'submit'])
};

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
};

class Button extends Component {
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
      rule,
      fullWidth,
      backgroundColor,
      variant

    } = this.props;
   const ListButton = {
     raised: Btn,
     outline: OutlineBtn,
     inverted: OutlineBtn,
     icon: IconBtn
   }

    const ElementType = !hrefString ? ListButton[variant].withComponent(tag) : ListButton[variant].withComponent('a')

    return (<ThemeProvider theme={theme}>
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
            : (children && <Label>
              {children}
            </Label>)
        }

      </ElementType>
    </ThemeProvider>)
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button
