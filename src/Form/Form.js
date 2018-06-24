// @flow
import * as React from 'react';
import {
  StyledForm,
  StyledFormItem,
  StyledInputHelper,
  Div,
  StyledLabelForm,
  StyledLabel,
} from './style';

import {isChild} from '../helpers/typeUtils';


type Props = {
  /**Override style of Form**/
  style?: Object,
  /** Add more class to Form**/
  className?: string,
  /** Children of form should be Form Item**/
  children?: any,
  /** obSubmit function **/
  onSubmit?: Function,
}


type FormItemProps = {
  /**Override style of Form Item**/
  style?: Object,
  /** Add more class to Form Item**/
  className?: string,
  /** Children of form item could be anything**/
  children: React$Element<any>,
  /** Label of form item**/
  label?: string,
  /** Can set validate status is success, warning or error**/
  validateStatus?: 'success' | 'warning' | 'error',
  /** Text helper**/
  helper?: string,
  /** Set field is required or not**/
  required: boolean,
  /** Set Form Item layout.default value is horizontal **/
  layout: 'horizontal' | 'vertical'
}

const FormItem = (props: FormItemProps) => {
  const {children, ...rest} = props;
  return (
    <StyledFormItem {...rest}>

      {
        rest.label && <StyledLabelForm layout={rest.layout}>
          <StyledLabel required={rest.required}>{rest.label}</StyledLabel>
        </StyledLabelForm>
      }
      <Div>
        {!isChild(children) &&  <children.type {...children.props} {...rest} />}
        {rest.helper && <StyledInputHelper validateStatus={rest.validateStatus}>{rest.helper}</StyledInputHelper>}
      </Div>

    </StyledFormItem>
  )

}

FormItem.defaultProps = {
  required: false,
  layout: 'horizontal'
}

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
