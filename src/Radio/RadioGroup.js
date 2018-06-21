// @flow
import * as React from 'react';
import {
  StyledRadioGroup
} from './style';

import Radio from './Radio';

import {isUndef, isChild} from '../helpers/typeUtils';




type Props = {
  /**Override style of Radio**/
  style?: Object,
  /** Add more class to Radio**/
  className?: string,
  /****/
  children?: React.ChildrenArray < React.Element < typeof Radio >>,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** Set component focus when mount or not**/
  focus: boolean,
  /** from form item with <3 **/
  validateStatus?: 'success' | 'warning' | 'error',
  /** Set name of input component**/
  name: string,

  defaultValue?: string

}

const defaultProps = {
  defaultValue: void 0,
  value: void 0,
}




class RadioGroup extends React.Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
       value: isUndef(props.value) ? props.defaultValue : props.value,
     };
   }

   componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && isUndef(nextProps.value)) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  getValue = () => {
    const props = this.props;
    const state = this.state;

    return isUndef(props.value) ? state.value : props.value;
  }


  handleChange = (e: SyntheticEvent<HTMLInputElement>, propsRadio) => {
    const {onChange} = this.props;


    const currentValue = this.getValue();

    if(currentValue === propsRadio.value) return;

    if (isUndef(this.props.value)) {
        this.setState({
          value: propsRadio.value,
        });
    }

    if(onChange) onChange(e, {...this.props});


  }





  render(){
    const {
      children,
      onChange,
      name,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);
    const value = this.getValue();

    console.log()


    return (
       <StyledRadioGroup>
         {hasChild && React.Children.map(children, (c, i) =>
           React.cloneElement(c, {
             key: i,
             valueSelect: value,
             onChange: this.handleChange
           })
         )}


       </StyledRadioGroup>
    )
  }
}


export default RadioGroup
