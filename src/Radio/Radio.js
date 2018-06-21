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
import { isUndef } from '../helpers/typeUtils';


type Props = {
  /**Override style of Radio**/
  style?: Object,
  /** Add more class to Radio**/
  className?: string,
  /****/
  children?: any,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** Set value of Radio**/
  value?: string,
  /** Set component focus when mount or not**/
  focus: boolean,
  /** from form item with <3 **/
  validateStatus?: 'success' | 'warning' | 'error',
  /** Set name of input component**/
  name: string,

  id: string,

  checked: ?boolean,
  defaultChecked: boolean

}

const defaultProps = {
  checked: void 0,
  defaultChecked: false
}



class Radio extends React.Component<Props> {

  static defaultProps = defaultProps;

  static Group = RadioGroup;

  constructor(props: Props){
    super(props);

    this.state = {
      checked: isUndef(props.checked) ? props.defaultChecked : props.checked,
    }
  }



  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {onChange} = this.props;

    const checked = e.target.checked;

    console.log(e.target.value)





    if(onChange) onChange(e, {...this.props});

    isUndef(this.props.checked) && this.setState({ checked });
  }



  render(){
    const {
      children,
      onChange,
      name,
      id,
      ...rest
    } = this.props;

    const checked = isUndef(rest.checked) ? this.state.checked : rest.checked;

    console.log(this.props)


    return (
      <StyledRadioWrapper>

        <StyledRadio
          onChange={this.handleChange}
          checked={checked}
          name={name}
          id={id}
          value={rest.value}
        />
      <StyledRadioLabel
        id={id}>
        <StyledRadioButton
          checked={checked}

        />
        {/* Label A */}
      </StyledRadioLabel>
      </StyledRadioWrapper>
    )
  }
}


export default withTheme(Radio)
