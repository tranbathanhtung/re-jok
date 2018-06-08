import styled, {css} from 'styled-components';


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
   display: ${props => props.openModal ? "flex" : "none"};
   align-items: center;
   justify-content: center;

`

export const StyledModalBackGround = styled.div`
  ${baseModal};
  transform: ${props => props.openModal? `translateX(120px)`: "translateX(0)"};

  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: opacity 0.5s;
  background-color: rgba(0,0,0,.65);

`

export const StyledModal = styled.div`
  position: relative;
  opacity: ${props=> props.openModal ? "1" : "0"};

  transform: ${props => props.openModal? `translateX(120px)`: "translateX(0)"};

  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${({theme}) => theme.zIndex.modal+1};

  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: .2rem;
  background-color: #fff;
  flex: 0 1 auto;
  margin: 32px;
  width: 40%;
  display: flex;
  outline: none;
  max-height: 90vh;
  flex-direction: column;
`
//================== Modal Header ==================
export const StyledModalHeader = styled.div`
padding: 16px 24px;
border-radius: 4px 4px 0 0;
background: #fff;
color: rgba(0,0,0,.65);
border-bottom: 1px solid #e8e8e8;
`

export const StyledModalHeaderTitle = styled.div`
margin: 0;
font-size: 16px;
line-height: 22px;
font-weight: 500;
color: rgba(0,0,0,.85);
`

// ================== Modal Content ==================
export const StyledModalContent = styled.div`
padding: 24px;
font-size: 14px;
line-height: 1.5;
word-wrap: break-word;
`
