// @flow
import * as React from 'react';

import {
  StyledList
} from './style';

import ListItem from './ListItem';
import ListContent from './ListContent';



type Props = {
  style?: Object,
  className?: string,
  divided: boolean,
  grid?: Object,
  layout: string,
  loading: boolean,
  dataSource?: Array<Object>,
  selection: boolean,
  tag: string,
  collapsed?: boolean,
  children: React.ChildrenArray < React.Element < typeof ListItem >>

}

const defaultProps = {
  divided: false,
  layout: "vertical",
  loading: false,
  selection: false,
  collapsed: false,
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
      ...rest
    } = this.props;
    return (
      <StyledList {...rest}>
        {
          React.Children.map(children, (ch, i)=>(
            React.cloneElement(ch, {
              key: i,
              divided,
              selection
            })
          ))
        }
      </StyledList>
    )
  }
}

export default List;
