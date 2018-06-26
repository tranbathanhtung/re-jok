import styled, { css} from 'styled-components';



export const StyledSidebarWrapper = styled.div`

 ${'' /* visibility: ${props => props.openSidebar ? "visible" : "hidden" }; */}
 transition: visibility .3s ease;


`



export const StyledSidebarBackground = styled.div`

    width: ${props => props.openSidebar && props.opacityMode ? "100%" : "0"};
    height: ${props => props.openSidebar && props.opacityMode ? "100%" : "0"};

    position: fixed;
    z-index: ${({theme}) => theme.zIndex.sidebar};
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
  width: ${props =>
    props.direction === "left" || props.direction === "right" ?
    props.fullScreen ? "100%"
    : `${props.width /10}rem`
    : "100%" };

  height: ${props =>
    props.direction === "top" || props.direction === "bottom" ?
    props.fullScreen ? "100%"
    : `${props.height / 10}rem`
    : "100%" };

  backface-visibility: hidden;

  will-change: transform;
  z-index: ${({theme}) => theme.zIndex.sidebar};


  box-shadow: 0 .7rem .8rem -.4rem rgba(0, 0, 0, 0.18), 0 1.4rem 2rem .2rem rgba(0, 0, 0, 0.14), 0 .4rem 2.4rem .4rem rgba(0, 0, 0, 0.12);
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
     ${props.direction === "top" ? "-140%" : props.direction === "bottom" ? "110%" : "0"},
     0)`};
  transition: transform .4s ease;

`
const returnAnimated = (props) => {
  if(props.mode === "push"){
    switch (props.direction) {
      case 'left':
        return css`
          margin-left: ${props.width / 10}rem;
        `;
      case 'right':
        return css`
          margin-right: ${props.width / 10}rem;
        `
      case 'top':
        return css`
          margin-top: ${props.height / 10}rem;
        `;
      case 'bottom':
        return css`
          margin-bottom: ${props.height / 10}rem;
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
