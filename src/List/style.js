import styled, {css} from 'styled-components';



// ==================== List Item =================
export const StyledListItem = styled.div.attrs({
  href: props => props.hrefString
    ? props.hrefString
    : null
  })`
  display: flex;

  align-items: center;
  padding: 1rem 1rem;
  line-height: 1.8rem;
  cursor: ${props => props.selection || props.hrefString ? "pointer" : "default"};

  ${
    props =>
     props.horizontal
     ? null
     : css`
     border-bottom: ${props => props.divided ? ".1rem solid #e8e8e8" : "none"};

     `
  }

  background: ${props => props.active ? "rgba(0,0,0, .02)" : "transparent"};
  ${
    props =>
      props.selection
      ? css`
         &:hover{
           background: rgba(0,0,0,.02);
         }
      `
      : null
  }
`
//=================== List ===================

export const StyledList = styled.div`
  display: ${props => props.horizontal ? "inline-flex" : "block"};

  ${
    props =>
     props.horizontal
      ?  css`
        // width: 100%;
        > ${StyledListItem} {
          display: inline-flex;
        }
      `
      : null
  }


  font-size: 1.4rem;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${({theme}) => theme.text.regular};
  box-sizing: border-box;



  & * {
    outline: none;

  }

`
// =================== List Content ==================
export const StyledListContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1 1 60%;

`


export const StyledListContentHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const StyledListContentDescription = styled.div`

color: ${({theme}) => theme.text.regular};
font-size: 1.4rem;
line-height: 2rem;
font-weight: 400;
`

export const StyledListContentAction = styled.div`
  display: flex;
  flex: 1 1 30%;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: flex-start;

`
