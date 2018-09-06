// @flow
import * as React from 'react';
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLeft,
  StyledNavBarRight,
  StyledNavBarRes,
  StyledNavBarCenter
} from './style';

import { isChild } from '../helpers/typeUtils';

type Props = {
  /**Override style of nav bar**/
  style?: Object,
  /** Add more class to nav bar**/
  className?: string,
  /** Children of Navbar ... This is element left content**/
  children?: any,
  /** This is element right content**/
  elementRight?: any,
  /** This is element center content... i just recommend use this to set logo**/
  elementCenter?: any,
  /** Set navbar transparent or not**/
  transparent: boolean,
  /** Set backgroundColor primary or not**/
  primary: boolean,
  /** Set backgroundColor secondary or not**/
  secondary: boolean,
  /** Set background color of navbar**/
  backgroundColor?: string,
  /** Set display none right or left element**/
  responsive: number,
  /** Element display when responsive work**/
  elementResponsive?: any,
  /** Set navbar has box-shadow or not **/
  hasBoxShadow: boolean
}

const defaultProps = {
  transparent: false,
  responsive: 1000,
  primary: false,
  secondary: false,
  hasBoxShadow: false
}


class Nav extends React.Component<Props> {

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      elementRight,
      elementCenter,
      elementResponsive,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);

    return (
      <StyledNavBar {...rest}>
        <StyledNavBarContainer>
          <StyledNavBarLeft>
            {hasChild && children}
          </StyledNavBarLeft>

          {
            elementResponsive
            && <StyledNavBarRes>
              {elementResponsive}
            </StyledNavBarRes>
          }

          {elementCenter && <StyledNavBarCenter>{elementCenter}</StyledNavBarCenter>}
          {elementRight && <StyledNavBarRight>{elementRight}</StyledNavBarRight>}
        </StyledNavBarContainer>

      </StyledNavBar>
    )
  }
}

export default Nav
