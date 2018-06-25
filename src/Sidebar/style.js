import styled, { css} from 'styled-components';



export const StyledSidebarWrapper = styled.div`

 ${'' /* visibility: ${props => props.openSidebar ? "visible" : "hidden" }; */}
 transition: visibility .3s ease;


`



export const StyledSidebarBackground = styled.div`

    width: ${props => props.openSidebar && props.opacityMode ? "100%" : "0"};
    height: ${props => props.openSidebar && props.opacityMode ? "100%" : "0"};

    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.9);
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    opacity: ${props => props.openSidebar && props.opacityMode ? "0.8" : "0"};
    transition: opacity .5s;

`

export const StyledSidebar = styled.div`
  position: fixed;
  top: ${props => props.direction !== "bottom" && "0"};
  bottom: ${props => props.direction !== "top" && "0"};

  left: ${props => props.direction === "left" && "0"};
  right: ${props => props.direction === "right" && "0"};
  width: ${props => props.direction === "left" || props.direction === "right" ? props.fullScreen ? "100%" : "256px" : "100%" };
  backface-visibility: hidden;

  will-change: transform;
  z-index: 1300;


  height: ${props => props.direction === "top" || props.direction === "bottom" ? props.fullScreen ? "100%" : "60px" : "100%" };
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  max-height: 100%;
  border-radius: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  background: #fff;
  outline: 0;
  transform: ${props =>
    props.openSidebar
     ? "translate3d(0,0,0)"
     : `translate3d(${props.direction === "left" ? "-110%" : props.direction === "right" ? "110%" : "0"},
     ${props.direction === "top" ? "-110%" : props.direction === "bottom" ? "110%" : "0"},
     0)`};
  transition: transform .4s ease;

`
const returnAnimated = (props) => {
  if(props.mode === "push"){
    switch (props.direction) {
      case 'left':
        return css`
          margin-left: 256px;
        `;
      case 'right':
        return css`
          margin-right: -256px;
        `
      case 'top':
        return css`
          margin-top: 60px;
        `;
      case 'bottom':
        return css`
          margin-bottom: -60px;
        `
      default:
        return css``
    }
  }



}

export const StyledSidebarContent = styled.div`
  position: relative;
  background: inherit;
  backface-visibility: hidden;
  overflow: hidden;
  min-height: 100%;

  z-index: 2;
  ${
    props =>
      props.open && returnAnimated(props)

  }
  transition: margin .4s ease;
`
