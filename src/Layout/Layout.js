// @flow
import * as React from 'react';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Side from './Side';

import {
  StyledLayout
} from './style';

type Props = {
  /** Style of layout component**/
  style?: Object,
  /** Class of layout component**/
  className?: string,
  /** Children of layout component could be anything**/
  children?: any,
  /**If child of layout has side it should be true**/
  hasSide: boolean,
}

const defaultProps = {
  hasSide: false
}


class Layout extends React.Component<Props>{

  static defaultProps = defaultProps;

  static Header = Header;

  static Container = Container;

  static Footer = Footer;

  static Side = Side;

  render(){
    const {
      children,
      ...rest
    } = this.props;
    return (
      <StyledLayout {...rest}>
        {children}
      </StyledLayout>
    )
  }
}

export default Layout
