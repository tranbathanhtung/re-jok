// @flow
import * as React from 'react';
import {
  StyledForm,
  StyledFormItem,
} from './style';


type Props = {
  style?: Object,
  className?: string,
  children?: any,
  onSubmit?: Function,
}


type FormItemProps = {
  style?: Object,
  className?: string,
  children?: any,
}

const FormItem = (props: FormItemProps) => (
  <StyledFormItem {...props}>
    {props.children}
  </StyledFormItem>
)


class Form extends React.Component<Props> {

  static Item = FormItem;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledForm {...rest}>
        {children}
      </StyledForm>
    )
  }
}


export default Form
