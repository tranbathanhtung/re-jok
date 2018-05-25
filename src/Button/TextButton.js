// @flow
import * as React from 'react'
import {Icon} from '../Icon';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';

import {TextBtn, Label, SpinnerButton} from './style';

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
  /** Make your button animated**/
  animated?: string,
  /** Change tag name of button ... span, div, a v..v **/
  tag?: string,

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

    const ElementType = !hrefString ? TextBtn.withComponent(tag) : TextBtn.withComponent('a')

    return (<ThemeProvider theme={theme}>
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
           children && <Label>
              {children}
            </Label>
        }

      </ElementType>
    </ThemeProvider>)
  }
}


export default TextButton
