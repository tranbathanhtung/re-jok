// @flow
import * as React from 'react';
import {
  StyledInputWrapper,
  StyledInput,
  StyledIconInput,
  StyledAddonBefore,
  StyledAddonAfter
} from './style';

import Icon from '../Icon';
import { withTheme } from 'styled-components';




type Props = {
  /**Override style of Input**/
  style?: Object,
  /** Add more class to Input**/
  className?: string,
  /****/
  children?: any,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** onKeyDown callback function ... params is (e: Event, props: Object)**/
  onKeyDown?:  Function,
  /** set size of input component.. default value is default**/
  size: 'small' | 'default' | 'medium' | 'large',
  /** Set Input component mode underline**/
  underline: boolean,
  /** Set value of Input**/
  value: string,
  /** Set component focus when mount or not**/
  focus: boolean,
  /** Adddon before input**/
  addonBefore?: string | React.Node,
  /** Adddon after input**/
  addonAfter?: string | React.Node,
  /** Icon of input component**/
  icon?: string,
  /** Set icon position left or right... default value is left**/
  iconPosition: 'left' | 'right',
  /** from form item with <3 **/
  validateStatus?: 'success' | 'warning' | 'error',
  /** Set name of input component**/
  name?: string,
  /** Set width of Input full**/
  fullWidth: boolean,
  /** Change input tag to textarea tag.. you can set more props like rows and cols**/
  textarea: boolean,
  /** Set autosize of textarea **/
  autosize: boolean,
  /** Set input component blank mode**/
  blank: boolean,
  /**Change color when focus input component**/
  colorFocus?: string,
  /**Disabled input component**/
  disabled: boolean,
}

const defaultProps = {
  size: 'default',
  underline: false,
  focus: false,
  iconPosition: 'left',
  fullWidth: false,
  textarea: false,
  autosize: false,
  blank: false,
  disabled: false,
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

  onKeyDown = (e: SyntheticEvent<HTMLInputElement>) => {
    const el: Object = e.target;

    const {onKeyDown, autosize} = this.props;

    if(autosize) {
      setTimeout(() =>{
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }


    onKeyDown && onKeyDown(e, {...this.props});
  }

  render(){
    const {
      children,
      onChange,
      icon,
      iconPosition,
      textarea,
      ...rest
    } = this.props;


    const props : Object = rest;

    const ElementType = textarea ? StyledInput.withComponent("textarea") : StyledInput;


    return (
      <StyledInputWrapper fullWidth={props.fullWidth}>
        {
          props.addonBefore && !textarea && <StyledAddonBefore validateStatus={rest.validateStatus}>{props.addonBefore}</StyledAddonBefore>
        }

          {
            icon && !textarea && <StyledIconInput iconPosition={iconPosition}>
                      <Icon style={{fontSize: (props.theme: Object).size[props.size].fontSize}} name={icon} />
                    </StyledIconInput>
          }
          <ElementType
            {...rest}
            icon={icon}
            onKeyDown={this.onKeyDown}
            textarea={textarea}
            iconPosition={iconPosition}
            onChange={this.handleChange}
            innerRef={this.setTextInputRef}
          />


      {
        props.addonAfter && !textarea && <StyledAddonAfter validateStatus={rest.validateStatus}>{props.addonAfter}</StyledAddonAfter>
      }

      </StyledInputWrapper>

    )
  }
}


export default withTheme(Input)
