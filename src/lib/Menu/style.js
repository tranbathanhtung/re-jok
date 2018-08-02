import styled, {css} from 'styled-components';

import { hexa} from '../globals';

const returnBoxShadow = color => {
  return `0 1.2rem 2rem -1rem ${hexa(color, 0.28)}, 0 .4rem 2rem 0 rgba(0,0,0,0.12), 0 .7rem .8rem -.5rem ${hexa(color, 0.2)}`;
}


const baseMenuItem = css`
cursor: pointer;
width: 100%;
position: relative;
text-overflow: ellipsis;
line-height: 4rem;
height: 4rem;
padding-right: 1.6rem;
padding-left: 2.4rem;
box-sizing: border-box;
`

//=============== Menu ==================
export const StyledMenu = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
  background: ${props => props.backgroundColor ? props.backgroundColor : props.theme.background.default};
  color: ${props => props.textColor ? props.textColor : props.theme.text.regular};

  font-size: 1.4rem;
  transition: background .3s,width .2s;
  border-right: ${({theme}) => `.1rem solid ${theme.border.primary}`};


  &::before{
    content: "";
    display: table;
  }

  &::after{
    clear: both;
    content: "";
    display: table;
  }
`

//=============== Menu Item ==============
export const StyledMenuItem = styled.li`

  ${baseMenuItem};
  ${
    props => props.activeNormal
    ? (
      css`
      color: ${props => props.active ? props.activeColor ? props.activeColor : props.theme.primary.main : null};
      `
      )
      : css`
      background-color: ${props => props.active ? props.activeColor ? props.activeColor :  props.theme.primary.main : null};
      box-shadow: ${props => props.active ?
        props.activeColor
        ? returnBoxShadow(props.activeColor)
        : returnBoxShadow(props.theme.primary.main)
         : null};
         color: ${props => props.active && props.theme.text.default};
      `
  }



  transition: all .2s;

  ${
    props => props.disabled ? css`
       opacity: .25;
       cursor: not-allowed;

    `: !props.active
      ? css`
      &:hover{

        background-color: rgba(200, 200, 200, 0.2);
        outline: none;
        box-shadow: none;
      }
      `
      : null
  }






`

export const StyledMenuLeftIcon = styled.div`
min-width: 1.4rem;
display: inline-block;
margin-right: 1rem;
`

export const StyledMenuItemText = styled.span`

`
// ============== Menu List ===============
export const StyledMenuListWrapper = styled.li`

`

export const StyledMenuListTitle = styled.div`
color: ${({theme})=> theme.text.secondary};
font-size: 1.4rem;
font-weight: ${({theme}) => theme.typography.subtitle.fontWeight};
line-height: 1.5;
padding: .8rem 1.6rem;
transition: all .3s;

 &:first-child{
   display: inline-flex;
 }
`

export const StyledMenuList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`
// =============== Sub Menu =================
export const StyledSubMenuWrapper = styled.li`

    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const StyledSubMenuTitle = styled.div`
  ${baseMenuItem};
`


export const StyledSubMenuArrow = styled.div`
  position: absolute;
  top: 0;
  right: 1.6rem;
  transition: transform .3s;
  transform: ${props => !props.open ? "rotate(0deg)" : "rotate(180deg)"};
`
export const StyledSubMenu = styled.ul`
  padding: 0;
  border: 0;
  list-style: none;
  margin: 0;

  overflow: hidden;
  height: ${props => !props.open && 0};

  transition: all .25s ease-out;

  border-radius: 0;


`
