// @flow
import * as React from 'react';
import {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
  StyledRadioButton
} from './style';

import { withTheme } from 'styled-components';

import RadioGroup from './RadioGroup';
import { isUndef, isChild, isFunction } from '../helpers/typeUtils';
import { generalId, noop } from '../helpers';


type Props = {
  /**Add style of Radio**/
  style?: Object,
  /** Add more class to Radio**/
  className?: string,
  /**Children could be anything**/
  children?: any,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange: Function,
  /** Set value of Radio**/
  value?: string | number,
  /** Set name of radio component**/
  name: string,
  /** Set radio component disabled or not**/
  disabled: boolean,
  /** Set checked radio property**/
  checked: boolean,
  /** Set radio default checked or not**/
  defaultChecked: boolean,
  /** Label of radio**/
  label?: string,
  /** Set color of radio**/
  color?: string,

}

const defaultProps = {
  checked: void 0,
  defaultChecked: false,
  disabled: false,
  onChange: noop,
}

type State = {
  checked: boolean
}

class Radio extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  static Group = RadioGroup;

  inputId: string;

  constructor(props: Props){
    super(props);

    this.inputId = generalId();

    this.state = {
      checked: isUndef(props.checked)
      ? props.defaultChecked
      : props.checked,
    }
  }



  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {onChange} = this.props;

    const checked = (e.target: window.HTMLInputElement).checked;

    isFunction(onChange) && onChange(e, {...this.props});

    isUndef(this.props.checked) && this.setState({ checked });
  }

  render(){
    const {
      children,
      onChange,
      name,
      disabled,
      label,
      color,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    const checked = isUndef(this.props.checked) ? this.state.checked : this.props.checked;


    return (
      <StyledRadioWrapper>

        <StyledRadio
          onChange={this.handleChange}
          checked={checked}
          name={name}
          id={this.inputId}
          disabled={disabled}
          value={rest.value}
        />
      <StyledRadioLabel
        id={this.inputId}
        color={color}
        disabled={disabled}
        {...rest}
        >
        <StyledRadioButton
          checked={checked}
          disabled={disabled}
          color={color}

        />

      {label ? label : hasChild && children}
      </StyledRadioLabel>
      </StyledRadioWrapper>
    )
  }
}


export default withTheme(Radio)
