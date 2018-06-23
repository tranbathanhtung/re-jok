// @flow
import * as React from 'react';
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledCheckboxButton,
} from './style';

import CheckboxGroup from './CheckboxGroup';

import { withTheme } from 'styled-components';


import { isUndef, isChild } from '../helpers/typeUtils';
import { generalId } from '../helpers';




type Props = {
  /**Override style of Checkbox**/
  style?: Object,
  /** Add more class to Checkbox**/
  className?: string,
  /****/
  children?: any,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** Set value of Checkbox**/
  value?: string | number,
  /** Set name of checkbox component**/
  name: string,
  /** Set checkbox component disabled or not**/
  disabled: boolean,
  /** Set checked checkbox property**/
  checked: boolean,
  indeterminate: boolean,
  /** Label of checkbox**/
  label?: string,
  /** Set color of checkbox**/
  color?: string,

  toggle: boolean,


}

const defaultProps = {
  checked: void 0,
  disabled: false,
  indeterminate: false,
  toggle: false,
}

type State = {
  checked: boolean
}


class Checkbox extends React.Component<Props, State>{
  static defaultProps = defaultProps;

  static Group = CheckboxGroup;

  inputId: string;

  constructor(props: Props){
    super(props);

    this.inputId = generalId();

    this.state = {
      checked: props.checked || false,
    }
  }

  componentWillReceiveProps(nextProps: Props) {
   if (nextProps.checked !== this.props.checked && isUndef(nextProps.checked)) {
     this.setState({
       checked: this.props.checked,
     });
   }
 }


  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {onChange} = this.props;

    const checked = (e.target: window.HTMLInputElement).checked;


    isUndef(this.props.checked) && this.setState({ checked });

    if(onChange) onChange(e, {...this.props, checked: checked});

  }


  render(){
    const {
      children,
      onChange,
      name,
      disabled,
      indeterminate,
      label,
      color,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    const checked = isUndef(this.props.checked) ? this.state.checked : this.props.checked;

    return(
      <StyledCheckboxWrapper>
        <StyledCheckbox
          checked={checked}
          name={name}
          id={this.inputId}
          disabled={disabled}
          onChange={this.handleChange}
          indeterminate={indeterminate}
          {...rest}
         />
      <StyledCheckboxLabel
        id={this.inputId}
        color={color}
        disabled={disabled}
        indeterminate={indeterminate}

        >
        <StyledCheckboxButton
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          color={color}
        />
        {label ? label : hasChild && children}
      </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    )
  }
}


export default withTheme(Checkbox)
