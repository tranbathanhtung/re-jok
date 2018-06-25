// @flow
import * as React from 'react';
import {
  StyledSelect,
  StyledOption
} from './style';

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
  /** Event change of select ... params onChange(e: Event)**/
  onChange?: Function,
  /** from Form Item with <3**/
  validateStatus?: 'success' | 'warning' | 'error',
  /** name of select**/
  name?: string

}



class Select extends React.Component<Props>{

  static Option = Option;

  handleChange = (e: SyntheticEvent<HTMLSelectElement>) => {
     const {onChange} = this.props;

     onChange && onChange(e);
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
