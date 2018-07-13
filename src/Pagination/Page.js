// @flow
import * as React from 'react';


import {

  StyledPaginationItem,
  StyledPaginationContent
} from './style';

import { isChild } from '../helpers/typeUtils';


type Props = {
  /** Style of Page**/
  style?: Object,
  /** Class of Page**/
  className?: string,
  /** Children of page could be anything**/
  children?: any,
  /** Current Page **/
  page: number,
  /** from Pagination with <3**/
  handleClick?: Function,
  /** from Pagination with <3**/
  type?: 'default' | 'effect',
  /** from Pagination with <3**/
  color?: string,
  /** from Pagination with <3**/
  active?: boolean
}


class Page extends React.Component<Props> {

  onClick = () => {
    const { page, handleClick } = this.props;

    handleClick && handleClick(page);
  }



  render(){
    const {
      children,
      active,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledPaginationItem
       onClick={this.onClick}
        >
        <StyledPaginationContent
          {...rest}
          active={active}>{hasChild && children}</StyledPaginationContent>
      </StyledPaginationItem>
    )
  }
}

export default Page;
