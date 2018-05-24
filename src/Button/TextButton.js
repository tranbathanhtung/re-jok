import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../Icon';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';

import {TextBtn, Label, SpinnerButton} from './style';

const propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  hrefString: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
  loading: PropTypes.bool,
  icon: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.string,
  animated: PropTypes.oneOf(['classic']),
  tag: PropTypes.string,

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
  tag: "button",
  color: "",
};

class TextButton extends Component {
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

TextButton.propTypes = propTypes;
TextButton.defaultProps = defaultProps;

export default TextButton
