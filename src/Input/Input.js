// @flow
import * as React from 'react';
import {
  StyledInputWrapper,
  StyledInput,
  StyledIconInput,
  StyledInputHelper
} from './style';

import Icon from '../Icon';

import { withTheme } from 'styled-components';



type Props = {
  style?: Object,
  className?: string,
  children?: any,
  onChange?: Function,
  size: 'small' | 'default' | 'medium' | 'large',
  underline: boolean,
  value?: string,
  defaultValue?: string,
  focus: boolean,
  addonBefore?: string | React.Node,
  addonAfetr?: string | React.Node,
  icon?: string,
  iconPosition: 'left' | 'right',
  validateStatus?: 'success' | 'warning' | 'error',
  helper?: string,
}

const defaultProps = {
  size: 'default',
  underline: false,
  focus: false,
  iconPosition: 'left'
}


class Input extends React.Component<Props> {

  static defaultProps = defaultProps;

  refInput: React$ElementRef<any>

  setTextInputRef: ?Function

  focusTextInput: ?Function


  constructor(props: Props) {
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



  focusTextInput = () => {

    (this.refInput.current: React$ElementRef<any>).focus();
  }

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {onChange} = this.props;

    if(onChange) onChange(e, {...this.props});
  }






  render(){
    const {
      children,
      value,
      onChange,
      icon,
      iconPosition,
      helper,
      ...rest
    } = this.props;

  


    return (
      <StyledInputWrapper>
        <div style={{position: "relative"}}>
          {
            icon && <StyledIconInput iconPosition={iconPosition}>
                      <Icon style={{fontSize: (rest.theme: Object).size[rest.size].fontSize}} name={icon} />
                    </StyledIconInput>
          }
          <StyledInput
            {...rest}
            icon={icon}
            iconPosition={iconPosition}
            onChange={this.handleChange}
            innerRef={this.setTextInputRef}
          />
        </div>

      {
        helper && <StyledInputHelper validateStatus={rest.validateStatus}>{helper}</StyledInputHelper>
      }

      </StyledInputWrapper>

    )
  }
}


export default withTheme(Input)
