import styled, {css} from 'styled-components';


const baseRadio = css`
font-size: 14px;
line-height: 1.5;
color: ${({theme}) => theme.text.regular};
box-sizing: border-box;
padding: 0;
list-style: none;
display: inline-block;
position: relative;
white-space: nowrap;
cursor: pointer;
`

export const StyledRadioGroup = styled.div`
  ${baseRadio};
  display: flex;
  flex-direction: ${props => props.layout === "horizontal" ? "row" : "column"};
`

export const StyledRadioWrapper = styled.div`
  ${baseRadio};
`




export const StyledRadioButton = styled.span`
  height: 1.6rem;

  width: 1.6rem;

  border:  ${props => props.checked ? props.color ? `1px solid ${props.color}` : `1px solid ${props.theme.primary.main}` : `1px solid ${props.theme.border.primary}`};
  border-radius: 50%;
  background: ${({theme}) => theme.background.default};
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  ${
    props => props.disabled && css`
    border-color: #d9d9d9!important;
    background-color: #f5f5f5;
    cursor: not-allowed;
    `
  }

  &::after{
    content: "";
    display: block;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(.875);
    background-color: ${({color, theme}) => color ? `${color}` : `${theme.primary.main}`};
    opacity: ${props => props.checked ? "1" : "0"};

    transition: all .3s cubic-bezier(.78,.14,.15,.86);

    ${
      props => props.disabled && css`

      background-color: #ccc;
      `
    }
  }
`

export const StyledRadio = styled.input.attrs({
  type: "radio",
  id: props =>props.id,
  name: props => props.name,
  checked: props=> props.checked
})`
position: fixed;
opacity: 0;
pointer-events: none;
margin: 0;
padding: 0;
width: 0;
height: 0;


`


export const StyledRadioLabel = styled.label.attrs({
  htmlFor: props=> props.id
})`
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  color: ${props => props.disabled && "rgba(0,0,0,.25)"};
  cursor: ${props => props.disabled && "not-allowed"};

  &:hover ${StyledRadioButton}{
    ${
      props => !props.disabled && css`
      border: ${({color, theme}) => color ? `1px solid ${color}` : `1px solid ${theme.primary.main}`};

      `
    }

  }
`
