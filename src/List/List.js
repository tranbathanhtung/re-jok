// @flow
import * as React from 'react';

import {
  StyledList,
} from './style';

import ListItem from './ListItem';
import ListContent from './ListContent';




type Props = {
  /** Override style of List**/
  style?: Object,
  /** Add more class to List**/
  className?: string,
  /** Show divisions between list item. Default value is false**/
  divided: boolean,
  /** Set layout list is row or column **/
  horizontal: boolean,
  /** A list can show loading**/
  loading: boolean,
  /** Set list is selection**/
  selection: boolean,
  /** Change tagName of List. Default value is div tag**/
  tag: string,
  /** Children of List must be List Item**/
  children: React.ChildrenArray < React.Element < typeof ListItem >>

}



const defaultProps = {
  divided: false,
  horizontal: false,
  loading: false,
  selection: false,
  tag: "div"
}

class List extends React.Component<Props>{
  static defaultProps = defaultProps;

  static Item = ListItem;
  static Content = ListContent;


  render(){
    const {
      children,
      divided,
      selection,
      tag,
      horizontal,
      ...rest
    } = this.props;




    const ElementType = StyledList.withComponent(tag);

    return (

        <ElementType horizontal={horizontal} {...rest}>
          {
            React.Children.map(children, (ch, i)=>(
              React.cloneElement(ch, {
                key: i,
                divided,
                selection,
                horizontal
              })
            ))
          }
        </ElementType>


    )
  }
}

export default List;
