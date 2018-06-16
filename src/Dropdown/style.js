import styled, {css, keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`



export const StyledDropdownWrapper = styled.div`
  position: relative;

`

export const StyledDropdown = styled.div`
      max-width: 256px;
    position: absolute;
    display: ${props =>props.open ? "block" : "none"};
    ${
      props =>
      props.open ? css`
       animation: ${fadeIn} .5s;
      ` : null
    }
    top: ${props => `${props.top}px`};
    // top: 40px;
    left: ${props => `${props.left}px`};
    z-index: 10;
    // margin-top: -10px;
    padding: 10px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    font-size: 1.4rem;
    border-radius: 4px;
    box-shadow: 0 5px 12px rgba(0,0,0,0.15);
    transition: all .2s;
`
