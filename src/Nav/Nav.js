// @flow
import * as React from 'react';
import {
  StyledNavBar,
  StyledNavBarContainer,
  StyledNavBarLeft,
  StyledNavBarRight,
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
}

const defaultProps = {
  transparent: false
}


class Nav extends React.Component<Props> {

  static defaultProps = defaultProps;

  render(){
    const {
      children,
      elementRight,
      elementCenter,
      ...rest
    } = this.props;
    return (
      <StyledNavBar {...rest}>
        <StyledNavBarContainer>
          <StyledNavBarLeft>
            {children}
          </StyledNavBarLeft>
          {elementCenter && <StyledNavBarCenter>{elementCenter}</StyledNavBarCenter>}
          {elementRight && <StyledNavBarRight>{elementRight}</StyledNavBarRight>}
        </StyledNavBarContainer>

      </StyledNavBar>
    )
  }
}

export default Nav
