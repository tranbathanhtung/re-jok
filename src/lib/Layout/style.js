import styled, {css} from 'styled-components';

const baseContainer = css`
  width: 100%;
  margin: 0 auto;
  position: relative;

`


//=============== Layout ==================
export const StyledLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${props => props.hasSide ? "row" : "column"};
  flex: 1;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;

  & * {
    box-sizing: border-box;
   
  }
`

//=============== Header ==================
export const StyledHeader = styled.header`
   min-height: 6.4rem;
   margin: 0;

   ${
     props => props.fixed && css`
        position: fixed;
        width: 100%;
        z-index: ${ ({theme}) => theme.zIndex.nav};
        top: 0;
     `
   }

`
//============== Container ================
const returnContainerResponsive = props => {
  const grid = props.theme.grid;

  const vals = Object.keys(grid).map(key => {
    if(key === "xs"){
      return css`
      @media(max-width: ${grid.sm}px){
         max-width: 54rem;
      }
      `
    }
    return css`
      @media(min-width: ${grid[key]}px){
         max-width: ${grid[key] - 60}px;
      }
    `
  })

  return vals

}

export const StyledContainer = styled.div`
   ${baseContainer};
   flex: 1;
   flex-basis: auto;

   ${props => !props.isFluid && returnContainerResponsive(props)};
   ${props => props.fullWidth && css`
     width: 100vw;
     left: 50%;
     right: 50%;
     margin-left: -50vw;
     margin-right: -50vw;
   `}



`

//============== Footer =================
export const StyledFooter = styled.footer`
   min-height: 6.4rem;
   margin: 0;


`


//============== Side ===================
export const StyledSide = styled.div`
      flex-shrink: 0;
    
      overflow: auto;
`
