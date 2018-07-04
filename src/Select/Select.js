// @flow
import * as React from 'react';
import {
  StyledSelect,
  StyledOption
} from './style';

import { isFunction } from '../helpers/typeUtils';

import { noop } from '../helpers';

type PropsSelect = {
  /**Value of option**/
  value?: string | number,
  /** Children of option**/
  children?: string | number,
  /** Set option disabled or not**/
  disabled: boolean

}

const Option = (props: PropsSelect) => {
  const { children, ...rest } = props;

  return (
    <StyledOption {...rest}>{children}</StyledOption>

  )
}

Option.defaultProps = {
  disabled: false,
}

type Props = {
  /** Style of Select**/
  style?: Object,
  /** Add more class to select**/
  className?: string,
  /** Set placeholder of select**/
  placeholder?: string,
  /** Children of select must be option**/
  children: React.ChildrenArray < React.Element < typeof Option >>,
  /** Event change of select ... params onChange(e: Event, props)**/
  onChange: Function,
  /** from Form Item with <3**/
  validateStatus?: 'success' | 'warning' | 'error',
  /** name of select**/
  name?: string

}

const defaultProps = {
  onChange: noop
}



class Select extends React.Component<Props>{

  static defaultProps = defaultProps;

  static Option = Option;

  handleChange = (e: SyntheticEvent<HTMLSelectElement>) => {
     const {onChange} = this.props;

     isFunction(onChange) && onChange(e);
  }

  render(){

    const {
      placeholder,
      children,
      ...rest
    } = this.props;
    return (
      <StyledSelect onChange={this.handleChange} {...rest}>
        {
          placeholder && <Option value={-1} disabled>{placeholder}</Option>
        }
        {
          children
        }


      </StyledSelect>
    )
  }
}

export default Select
