// @flow
import * as React from 'react';
import {
  StyledCheckboxGroup
} from './style';

import Checkbox from './Checkbox';

import {isUndef, isChild} from '../helpers/typeUtils';

type Props = {
  /**Override style of Radio**/
  style?: Object,
  /** Add more class to Radio**/
  className?: string,
  /****/
  children: React.ChildrenArray < React.Element < typeof Checkbox >>,
  /** onChange callback function... params is (e: Event, props: Object)**/
  onChange?: Function,
  /** Set name of input component**/
  name: string,
  /** Set default value**/
  values: Array<mixed>,
  /** Set color of all radio**/
  color?: string,
  /** Set layout of radio button**/
  layout?: 'horizontal' | 'vertical',
  /**Set all toggle mode to Checkbox**/
  toggle?: boolean,

}

const defaultProps = {
  values: [],
  toggle: false

}

type State = {
  values: Array<mixed>
}




class CheckboxGroup extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    this.state = {
       values: isUndef(props.values) ? [] : props.values,
     };
   }

   componentWillReceiveProps(nextProps: Props) {

    if (nextProps.values !== this.props.values && !isUndef(nextProps.values)) {
      this.setState({
        values: nextProps.values,
      });
    }
  }



  handleChange = (e: SyntheticEvent<HTMLInputElement>, propsCheckbox: Object) => {
    const {onChange} = this.props;

    if(propsCheckbox.checked){
      this.setState({
        values: [...this.state.values, propsCheckbox.value],
      }, ()=>{
        onChange && onChange(this.state.values);

      });
    } else {
      this.setState({
        values: this.state.values.filter(v => v !== propsCheckbox.value),
      }, ()=>{
        onChange && onChange(this.state.values);

      });
    }





  }





  render(){
    const {
      children,
      name,
      color,
      toggle,
      onChange,
      ...rest
    } = this.props;


    const hasChild = !isChild(children);
    const {values} = this.state;




    const checkboxes = hasChild && React.Children.map(children, checkbox =>
      React.cloneElement(checkbox, {
        checked: values.includes(checkbox.props.value),
        color: color,
        onChange: this.handleChange,
        toggle: toggle,
      })
    );

    return (
       <StyledCheckboxGroup {...rest}>
         {checkboxes}
       </StyledCheckboxGroup>
    )
  }
}


export default CheckboxGroup
