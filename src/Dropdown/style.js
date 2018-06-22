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
     max-width: 25.6rem;
     position: absolute;
     display: ${props =>props.open ? "block" : "none"};
    ${
      props =>
      props.open && css`
       animation: ${fadeIn} .4s;
      `
    }
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
    z-index: ${({theme}) => theme.zIndex.dropDown};
    padding: 1rem 0;
    background-color: #fff;
    border: .1rem solid #ebeef5;
    font-size: 1.4rem;
    border-radius: .4rem;
    box-shadow: 0 .5rem 1.2rem rgba(0,0,0,0.15);

`
