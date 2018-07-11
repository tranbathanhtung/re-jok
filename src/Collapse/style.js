import styled from 'styled-components'




export const StyledCollapse = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0 0 0 1.6rem;
    color: ${ ({theme}) => theme.text.regular};


`


export const StyledCollapseItem = styled.li`
   color: ${ ({theme}) => theme.text.hint};



`
export const StyledCollapseItemTitle = styled.div`
      height: 4.8rem;
      line-height: 4.8rem;
      background-color: ${({theme}) => theme.background.default};
      color: ${ ({theme, disabled}) => disabled ? theme.text.hint : theme.text.regular};
      cursor: ${ ({disabled}) => disabled ? 'not-allowed' : 'pointer'};
      border-bottom: ${props => `.1rem solid ${props.theme.border.primary}`};
      font-size: 1.4rem;
      font-weight: 500;
      transition: border-bottom-color .3s;
      outline: none;
      position: relative;

`

export const StyledCollapseItemContent = styled.div`
    will-change: height;
    background-color: ${({theme}) => theme.background.default};

    box-sizing: border-box;
    height: ${props => !props.open && 0};
    transition: all .25s ease-out;
    overflow: hidden;
    font-size: 1.4rem;
    color: ${ ({theme}) => theme.text.regular};

`

export const Div = styled.div`
  padding-top: 2rem;
`

export const StyledArrow = styled.div`
  position: absolute;
  top: 0;
  right: 1.6rem;
  transition: transform .3s;
  transform: ${props => props.open ? "rotate(0deg)" : "rotate(-90deg)"};
`
