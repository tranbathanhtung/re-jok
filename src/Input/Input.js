// @flow
import * as React from 'react';
import {
  StyledInput,
} from './style';


type Props = {
  style?: Object,
  className?: string,
  children?: any,
  onChange?: Function,
  placeholder?: string,
  size: 'small' | 'default' | 'medium' | 'large',
  underline: boolean,
  value?: string,
  defaultValue?: string,
  type?: string,
  focus: boolean
}

const defaultProps = {
  size: 'default',
  underline: false,
  focus: false
}


class Input extends React.Component<Props> {

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.refInput = null;

    this.setTextInputRef = element => {
      this.refInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.refInput) this.refInput.focus();
    };
  }


  componentDidMount() {
    const {focus} = this.props;

    focus && this.focusTextInput();
  }



  focusTextInput() {

    this.refInput.current.focus();
  }






  render(){
    const {
      children,
      value,
      ...rest
    } = this.props;

    return (
      <StyledInput
        {...rest}
        innerRef={this.setTextInputRef}


         >
        {children}
      </StyledInput>
    )
  }
}


export default Input
