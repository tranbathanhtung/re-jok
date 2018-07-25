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
  children: React.ChildrenArray < React.Element < typeof Radio >>,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** Set name of input component**/
  name: string,
  /** Set default value**/
  value: string | number,
  /** Set default value**/
  defaultValue: string | number,
  /** Set color of all radio**/
  color?: string,
  /** Set layout of radio button**/
  layout?: 'horizontal' | 'vertical'

}

const defaultProps = {
  defaultValue: void 0,
  value: void 0,

}

type State = {
  value: string | number
}




class RadioGroup extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    this.state = {
       value: isUndef(props.value) ? props.defaultValue : props.value,
     };
   }

   componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value && isUndef(nextProps.value)) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  getValue = () => {

    return isUndef(this.props.value) ? this.state.value : this.props.value;
  }


  handleChange = (e: SyntheticEvent<HTMLInputElement>, propsRadio: Object) => {
    const {onChange} = this.props;


    const currentValue = this.getValue();

    if(currentValue === propsRadio.value) return;

    if (isUndef(this.props.value)) {
        this.setState({
          value: propsRadio.value,
        });
    }

    if(onChange) onChange(e, {...propsRadio});


  }





  render(){
    const {
      children,
      name,
      color,
      onChange,
      ...rest
    } = this.props;


    const hasChild = !isChild(children);
    const value = this.getValue();



    const radios = hasChild && React.Children.map(children, radio =>
      React.cloneElement(radio, {
        checked: value === radio.props.value,
        name: name,
        color: color,
        onChange: this.handleChange
      })
    );

    return (
       <StyledRadioGroup {...rest}>
         {radios}
       </StyledRadioGroup>
    )
  }
}


export default RadioGroup
