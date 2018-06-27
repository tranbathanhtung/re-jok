import styled, {css} from 'styled-components';

export const StyledTabWrapper = styled.div`
  position: relative;

  font-size: 1.4rem;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
`


export const StyledTab = styled.ul`
   font-size: 1.4rem;
   box-sizing: border-box;
   padding: 0;
   position: relative;
   list-style: none;

   display: flex;
   flex-grow: 1;
   flex-shrink: 0;
   justify-content: flex-start;
   margin: 0 0 16px;

   &::before{
     content: "";
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     border-bottom: 1px solid #e5e5e5;
   }



`

export const StyledTabItem = styled.li`
  flex: none;
  position: relative;
`

export const StyledTabItemInner = styled.div`
   display: block;
   text-align: center;
   padding: 9px 20px;
   color: rgba(0, 0, 0,.48);
   border-bottom: 2px solid transparent;
   font-size: 12px;
   cursor: pointer;
   text-decoration: none;
   transition: color .1s ease-in-out;
   line-height: 20px;

   &:hover{
     color: rgba(0, 0, 0,.65);
   }

   ${
     props => props.active && css`
       border-color: #1e87f0;
       color: rgba(0, 0, 0,.65);
     `
   }

`


export const StyledTabContent = styled.div`

`
