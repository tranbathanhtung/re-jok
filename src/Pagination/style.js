import styled, {css} from 'styled-components';
import { hexa} from '../globals'

export const StyledPagination = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  & > *{

    font-size: 1.4rem;
  }

  & > * > * {
    display: block;

    transition: color .1s;

  }
`

export const StyledPaginationItem = styled.li`
  flex: none;
  position: relative;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  line-height: 3.2rem;
  padding: 0;
  text-align: center;

`


export const StyledPaginationContent = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ ({theme, active, color}) => active ? color ? color : theme.primary.main : theme.text.secondary};

  ${
    props => props.type === "effect" && css`
       box-shadow: ${
         ({active, theme, color}) => active
         ? color ? `0 .3rem .5rem 0 ${hexa(color, .28)}, 0 .1rem 1rem 0 ${hexa(color, .12)}, 0 .2rem .4rem -.1rem ${hexa(color, .2)}`
         : `0 .3rem .5rem 0 ${hexa(theme.primary.main, .28)}, 0 .1rem 1rem 0 ${hexa(theme.primary.main, .12)}, 0 .2rem .4rem -.1rem ${hexa(theme.primary.main, .2)}`
           : null
       };

       color: ${ ({theme, active}) => active ? "#fff" : theme.text.primary};
       background-color: ${ ({active, theme,color}) => active ? color ? color : theme.primary.main : theme.background.default};
       border: 0;
       border-radius: 3rem;
       padding: 0 1.1rem;
       margin: 0 .3rem;
       min-width: 3rem;
       height: 3rem;


    `
  }

`
