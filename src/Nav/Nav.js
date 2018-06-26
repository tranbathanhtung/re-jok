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
  /** Set background color of navbar**/
  backgroundColor?: string,
  /** Set display none right or left element**/
  responsive: number,
  /** Element display when responsive work**/
  elementResponsive?: any,
}

const defaultProps = {
  transparent: false,
  responsive: 1000,
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

    return (
      <StyledNavBar {...rest}>
        <StyledNavBarContainer>
          <StyledNavBarLeft>
            {children}
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
