import styled, {css, keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
      ${'' /* visibility: hidden; */}
  }
  to {
    opacity: 1;
      visibility: visible;
  }
`
const fadeOut = keyframes`
0%   {
   opacity:1;
  ${'' /* visibility: hidden; */}
}
50%  {
  opacity:0.5;
  ${'' /* visibility: visible; */}
}
100% {
  opacity:0;
  ${'' /* visibility: visible; */}
 }
`



export const StyledDropdownWrapper = styled.div`
  position: relative;

`

export const StyledDropdown = styled.div`
      max-width: 256px;
    position: absolute;
    ${'' /* display: ${props =>props.open ? "block" : "none"}; */}

    ${'' /* visibility: ${props =>props.open ? "visible" : "hidden"}; */}

    ${'' /* ${
      props =>
      props.open ? css`
       animation: ${fadeIn} .5s;
      ` : css`
        animation: ${fadeOut} .5s;
      `
    } */}
    opacity: ${props =>props.open ? "1" : "0"};
    transition: all .5s;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
    z-index: 10;
    padding: 10px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    font-size: 1.4rem;
    border-radius: 4px;
    box-shadow: 0 5px 12px rgba(0,0,0,0.15);
    transition: all .2s;
`
