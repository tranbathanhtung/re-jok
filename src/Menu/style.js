import styled, {css} from 'styled-components';


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
  background: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};
  font-size: 1.4rem;
  transition: background .3s,width .2s;


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
  color: ${props => props.active ? props.theme.primary.main : "rgba(0,0,0,.65)"};

  &:hover{
    color: ${({theme, activeColor}) => activeColor ? activeColor : theme.primary.main };
  }




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
`

export const StyledMenuList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`
// =============== Sub Menu =================
export const StyledSubMenuWrapper = styled.li`
    padding-bottom: 0.01px;
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const StyledSubMenuTitle = styled.div`
  ${baseMenuItem};
`
export const StyledSubMenu = styled.ul`
padding: 0;
border: 0;
list-style: none;
margin: 0;
max-height: 0;
overflow: hidden;
transition: max-height .25s ease-out;
box-shadow: none;
border-radius: 0;
background: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};

`
