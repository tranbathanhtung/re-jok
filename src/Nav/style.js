import styled, {css} from 'styled-components';

import { hexa} from '../globals'



export const StyledNavBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  flex: 1;
  max-width: 1140px;
`

const baseNavBar = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledNavBarLeft = styled.div`
  #{baseNavBar};

`

export const StyledNavBarRight = styled.div`
  ${baseNavBar};
  margin-left: auto;
`

export const StyledNavBarCenter = styled.div`
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);

`

export const StyledNavBarRes = styled.div`
    margin-left: auto;
`

export const StyledNavBar = styled.nav`
  display: flex;
  position: relative;
  min-height: 7rem;
  font-size: 1.4rem;
  ${'' /* margin-bottom: 2rem; */}
  padding: 1rem 0;
  z-index: ${({theme}) => theme.zIndex.nav};



  ${
    props => props.transparent
    ? css`
       background: transparent;
       color: ${({theme}) => theme.text.regular};
    `
    : css`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};
    color: ${props => props.backgroundColor ? props.theme.text.default : props.theme.text.regular};
    box-shadow: ${props => props.backgroundColor ? `0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 12px -5px ${hexa(props.backgroundColor, 0.46)}` : "0 4px 18px 0 rgba(0,0,0,0.12), 0 7px 10px -5px rgba(0,0,0,0.15)"};

    `
  }

  & ${StyledNavBarRes}{
    display: none;
  }

  ${
    props => typeof props.responsive === "number" && css`
    @media (max-width: ${props.responsive}px) {
       & ${StyledNavBarRight}{
         display: none;
       }
       & ${StyledNavBarCenter}{
         display: none;
       }

       & ${StyledNavBarRes}{
         display: block;
       }
    }
    `
  }



`
