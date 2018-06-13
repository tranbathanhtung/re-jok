// @flow
import * as React from 'react';

import FontAwesome from 'react-fontawesome';
import styled from 'styled-components'

const IconContainer = styled.div`
order: ${props => props.iconPosition === "left" ? 0 : 1};
color:  ${props => props.color ? props.theme[props.color].main : null};
display: inline-block;


`

type Props = {
  /**name of icon**/
  name: string,
  /** Size of icon shuold be string like lg, 2x, 3x v..v if you don't want use size you can custom with style**/
  size?: string,
  /**Override style of icon**/
  style?: Object,
  /**Add more class to icon**/
  className?: string,
  /** Set icon spin or not**/
  spin: boolean,
  /** Set color to icon but it just set color like error, warning,success.. i recomment you set in style or class**/
  color?: string,
  /** set postion of icon right or left**/
  iconPosition: 'left' | 'right',
}

const defaultProps = {
  spin: false,
  iconPosition: "left"
}


class Icon extends React.Component<Props> {
  static defaultProps = defaultProps;

  render(){
    const {
      iconPosition,
      name,
      size,
      style,
      className,
      spin,
      color,
    } = this.props;
    return (
      <IconContainer color={color} iconPosition={iconPosition}>
      <FontAwesome
       name={name}
       size={size}
       style={style}
       className={className}
       spin={spin}

      />
      </IconContainer>
    )
  }
}



export default Icon;
