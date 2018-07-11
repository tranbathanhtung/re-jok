import styled, {css} from 'styled-components';


const returnPostionTabWrapper = props => {
  switch (props.position) {
    case 'top':
      return `
        flex-direction: column;

      `
    case 'bottom':
       return `
         flex-direction: column;
       `
    case 'left':
      return `
        flex-direction: row;
        `
    case 'right':
        return `
         flex-direction: row;
       `

    default:

  }
}

const returnPostionTab = props => {
  switch (props.position) {
    case 'top':
      return `
        order: 0;
        border-bottom: .1rem solid ${props.theme.border.primary};
        margin: 0 0 1.6rem 0;
        flex-grow: 1;
        flex-direction: row;




      `
    case 'bottom':
      return `
        order: 1;
        border-top: .1rem solid ${props.theme.border.primary};
        margin: 1.6rem 0 0 0;
        flex-grow: 1;
        flex-direction: row;


      `
   case 'left':
        return `
          order: 0;
          border-right: .1rem solid ${props.theme.border.primary};
          margin: 0 1.6rem 0 0;
          flex-grow: 0;
          flex-direction: column;


        `

    case 'right':
       return `
         order: 1;
         border-left: .1rem solid ${props.theme.border.primary};
         margin: 0 0 0 1.6rem;
         flex-grow: 0;
         flex-direction: column;


         `


    default:

  }
}


export const StyledTabWrapper = styled.div`
  position: relative;

  font-size: 1.4rem;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;

  ${props => returnPostionTabWrapper(props)};
`


export const StyledTab = styled.ul`
   font-size: 1.4rem;
   box-sizing: border-box;
   padding: 0;
   position: relative;
   list-style: none;

   display: flex;

   flex-shrink: 0;
   justify-content: flex-start;
   ${props => returnPostionTab(props)};


   &::before{
     content: "";
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
   }



`

export const StyledTabItem = styled.li`
  flex: none;
  position: relative;
`

const returnPostionTabItemInner = props => {
  switch (props.position) {
    case 'top':
      return `
       border-bottom: .2rem solid transparent;



      `
    case 'bottom':
      return `
       border-top: .2rem solid transparent;



      `
    case 'left':
      return `
        border-right: .2rem solid transparent;

        `
    case 'right':
      return `
        border-left: .2rem solid transparent;
        `

    default:

  }
}
export const StyledTabItemInner = styled.div`
   display: block;
   text-align: center;
   padding: .9rem 2rem;
   color: ${props => props.disabled ? props.theme.text.hint : props.theme.text.secondary};

   font-size: 1.2rem;
   cursor: pointer;
   text-decoration: none;
   transition: color .1s ease-in-out;
   line-height: 2rem;

   ${
     props => !props.disabled && css`
     &:hover{
       color: ${ ({theme})=> theme.text.regular };
     }
     `
   }

   ${props => returnPostionTabItemInner(props)};


   ${
     props => props.active && css`
       border-color: ${ ({theme, color}) => color ? color : theme.primary.main};
       color: ${ ({theme})=> theme.text.regular };
     `
   }

`


export const StyledTabContent = styled.div`
    flex: 1;
    color: ${ ({theme})=> theme.text.regular };
`
