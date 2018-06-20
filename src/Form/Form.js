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

const FormItem = (props: FormItemProps) => (
  <StyledFormItem {...props}>

    {
      props.label && <StyledLabelForm layout={props.layout}>
        <StyledLabel required={props.required}>{props.label}</StyledLabel>
      </StyledLabelForm>
    }
    <Div>
      {<props.children.type {...props.children.props} {...props}/>}
      {props.helper && <StyledInputHelper validateStatus={props.validateStatus}>{props.helper}</StyledInputHelper>}
    </Div>

  </StyledFormItem>
)

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
