// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './index';


type Props = {
  /**Theme of project**/
  theme: Object,
  /**Children can be anything**/
  children: any,
}

const defaultProps = {
  theme: {}
}

class JokTheme extends React.Component<Props>{
  static defaultProps= defaultProps;

  checkDefaultTheme = ()=>{
    const {theme} = this.props;
    if(Object.keys(theme).length === 0 && theme.constructor === Object) return true;
    return false;
  }

  render(){
    const {
      children,
      theme
    } = this.props;

    let useDefaultTheme = this.checkDefaultTheme();

    return (
      <ThemeProvider theme={useDefaultTheme? defaultTheme : theme}>
        {children}
      </ThemeProvider>
    )
  }
}

export default JokTheme
