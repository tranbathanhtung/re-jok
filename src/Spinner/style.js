//@flow
import * as React from 'react';

import styled, { keyframes } from 'styled-components';
import type { Props } from './index';

//Bounce Spinner
//This size  is different size another component
const returnSizeSpinner = props => {
  switch (props.size) {
    case 'small':
      return `
        width: 1.2rem;
        height: 1.2rem;
      `
    case 'default':
      return `
        width: 1.4rem;
        height: 1.4rem;
      `
    case 'medium' :
      return `
        width: 1.6rem;
        height: 1.6rem;
      `
    case 'large' :
      return `
       width: 2rem;
       height: 2rem;
      `
    default:
     return `
       width: 1.4rem;
       height: 1.4rem;
     `
  }
}


const skBouncedelay = keyframes`
0%, 80%, 100% {

 transform: scale(0);
} 40% {

 transform: scale(1.0);
}
`;


export const StyledSpinnerContainer = styled.div`


 & > div{
    ${props => returnSizeSpinner(props)};
    background-color: ${props => props.color ? props.color : "rgba(0, 0, 0, .85)"};
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBouncedelay} 1.4s ease-in-out 0s infinite both;
            animation: ${skBouncedelay} 1.4s ease-in-out 0s infinite both;
 }
`

export const StyledSpinnerBounce1 = styled.div`

animation-delay: -0.32s !important;
`

export const StyledSpinnerBounce2 = styled.div`

animation-delay: -0.16s !important;
`
export const StyledSpinnerBounce3 = styled.div`

`

//Default Spinner
const spin = keyframes `
  to {transform: rotate(360deg);}
`;

export const StypedSpinnerDefault = styled.div `
display: inline-block;
width: ${props => props.theme.size[props.size].fontSize};
height: ${props => props.theme.size[props.size].fontSize};
min-width: ${props => props.theme.size[props.size].fontSize};
min-height: ${props => props.theme.size[props.size].fontSize};
position: relative;
color: ${props => props.color ? props.color : "rgba(0, 0, 0, .85)"};

  &::before{
    content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.theme.size[props.size].fontSize};
  height: ${props => props.theme.size[props.size].fontSize};
  margin-top: calc(${props => props.theme.size[props.size].fontSize} / -2);
  margin-left: calc(${props => props.theme.size[props.size].fontSize} / -2);
  border-radius: 50%;

  border-top: 2px solid;
  border-right: 2px solid transparent;
  animation: ${spin} .6s linear infinite;
  }
`


export const SpinBounce = (props: Props) => (
  <React.Fragment>
    <StyledSpinnerContainer {...props}>
      <StyledSpinnerBounce1 />
      <StyledSpinnerBounce2 />
      <StyledSpinnerBounce3 />
    </StyledSpinnerContainer>
  </React.Fragment>
)

export const SpinDefault = (props: Props) => (
  <React.Fragment>
    <StypedSpinnerDefault {...props} />
  </React.Fragment>
)
