// @flow
import * as React from 'react';

import {
  StyledImage
} from './style';

type Props = {
  /** Set url of image**/
  src: string,
  /** Set shape of image**/
  shape?: 'circle' | 'rounded',
  /** Style of image**/
  style?: Object,
  /** Add more class to Image Component**/
  className?: string,
  /** Set Image has boxshadow or not**/
  hasBoxshadow: boolean,
  /** Set alt of image**/
  alt?: string,

}

const defaultProps = {
  hasBoxshadow: false
}

class Image extends React.Component<Props>{

  render(){

    return (
      <StyledImage {...this.props}/>
    )
  }
}

export default Image
