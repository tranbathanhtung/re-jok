import styled, {css} from 'styled-components';
import Button from '../Button/Button';


const baseModal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  outline: 0;
  z-index: ${({theme}) => theme.zIndex.modal};
`

export const StyledModalWrapper = styled.div`
   ${baseModal};
   display: flex;
   visibility: ${props => props.openModal ? "visibility" : "hidden" };
   align-items: center;
   justify-content: center;
   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
   max-width: calc(100% - 0.01px) !important;


`

export const StyledModalBackGround = styled.div`
  ${baseModal};
  opacity: ${props => props.openModal ? "1" : "0"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgba(0,0,0,.65);

`

export const StyledModal = styled.div`
  position: relative;
  opacity: ${props=> props.openModal ? "1" : "0"};

  transform: ${props=>
     props.openModal
     ?
     "translateX(0)"
     : props.slide === "top"
      ? `translateY(-50%)`
      : props.slide === "bottom"
      ? `translateY(50%)`
      : props.slide === "right"
       ? `translateX(50%)`
       : props.slide === "left"
        ? `translateX(-50%)`
        : "none"
   };


  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${({theme}) => theme.zIndex.modal+1};

  box-shadow: 0 1.1rem 1.5rem -.7rem rgba(0, 0, 0, 0.2), 0 2.4rem 3.8rem .3rem rgba(0, 0, 0, 0.14), 0 .9rem 4.6rem .8rem rgba(0, 0, 0, 0.12);
  border-radius: .2rem;
  background-color: ${({theme}) => theme.background.default};
  flex: 0 1 auto;
  margin: ${props => props.fullscreen ? "0" : "3.2rem"};
  width: ${props => props.fullscreen ? "100%": "550px"};
  display: flex;
  outline: none;
  height: ${props => props.fullscreen ? "100%": "auto"};
  max-height: ${props => props.fullscreen ? null : "90vh"};
  flex-direction: column;



  ${
    ({theme, fullscreen}) => !fullscreen && css`
    @media (max-width: ${theme.grid.xs}px) {
      width: auto !important;
      margin: 1rem;
    }

    `
  }


`
//================== Modal Header ==================
export const StyledModalHeader = styled.div`
padding: 1.5rem 3rem;
border-radius: .4rem .4rem 0 0;
background: ${({theme}) => theme.background.default};
color: ${({theme}) => theme.text.regular};
border-bottom: ${({theme}) => `.1rem solid ${theme.border.primary}`};
`

export const StyledModalHeaderTitle = styled.div`
margin: 0;
font-size: 2rem;
line-height: 1.3;
font-weight: 500;
color: ${({theme}) => theme.text.primary};
`

// ================== Modal Content ==================
export const StyledModalContent = styled.div`
padding: 3rem 3rem;
font-size: 1.6rem;
line-height: 1.5;
word-wrap: break-word;
max-height: ${props => props.fullscreen ? null : "35rem"};
overflow: auto;
`

export const StyledAlert = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

`

export const StyledAlertTitle = styled.span`
    color: ${({theme}) => theme.text.primary};
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.3;
    margin-left: 1rem;
    text-transform: uppercase;
`

export const StyledAlertDescription = styled.div`
    margin-top: 1.6rem;
    display: flex;
    color: ${props => props.alert !== "none" ? props.theme[props.alert].main : null}
    justify-content: center;

`
//============= Modal Footer ==============
export const StyledModalAction = styled.div`
  padding: 1.5rem 3rem;
  border-top: ${({theme}) => `.1rem solid ${theme.border.primary}`};
  background: ${({theme}) => theme.background.default};
  display: inline-flex;
  justify-content: flex-end;
  border-radius: 0 0 .4rem .4rem;
  & > * {
    margin-left: 1rem;
  }

`
//=========== Helper Modal=================
export const CloseButton = styled(Button)`
 position: absolute !important;
 color: ${({theme}) => theme.text.primary} !important;
 top: 1rem;
 right: 1rem;
`
