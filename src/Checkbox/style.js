import styled, {css} from 'styled-components';


const baseCheckbox = css`
font-size: 14px;
line-height: 1.5;
color: rgba(0,0,0,.65);
box-sizing: border-box;
padding: 0;
list-style: none;
display: inline-block;
position: relative;
white-space: nowrap;
cursor: pointer;
`

export const StyledCheckboxGroup = styled.div`
  ${baseCheckbox};
  display: flex;
  flex-direction: ${props => props.layout === "horizontal" ? "row" : "column"};
`

export const StyledCheckboxWrapper = styled.div`
  ${baseCheckbox};
`


export const StyledCheckboxButton = styled.span`
  height: 1.6rem;
  width: 1.6rem;

  border:  ${props => props.checked || props.indeterminate ? props.color ? `1px solid ${props.color}` : `1px solid ${props.theme.primary.main}` : "1px solid #e8e8e8"};
  display: inline-block;
  position: absolute;
  left: 0;
  background-color: ${({color, theme, checked, indeterminate}) => checked  || indeterminate ? color ? color : theme.primary.main : "#fff"};
  top: 0;
  ${
    props => props.disabled && css`
    border-color: #d9d9d9!important;
    background-color: #f5f5f5;
    cursor: not-allowed;
    `
  }

  &::after{
    content: " ";

    position: absolute;

  display: table;

  ${
    props =>
    props.checked
    ?  css`
    left: 4.571429px;
    top: 1.142857px;
    width: 5.71428571px;
    height: 9.14285714px;
    transform: rotate(45deg) scale(1);

    `: props.indeterminate
    ? css`
    left: 2.42857143px;
    top: 5.92857143px;
    width: 9.14285714px;
    height: 1.14285714px;
    transform: scale(1);

    `: null
  }

  border: .2rem solid #fff;
  border-top: 0;
  border-left: 0;
  opacity: ${props => (props.checked || props.indeterminate) && !props.disabled ? "1" : "0"};
  transition: all .1s cubic-bezier(.71,-.46,.88,.6);

    ${
      props => props.disabled && css`

      background-color: #ccc;
      `
    }
  }
`

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",

})`
position: fixed;
opacity: 0;
pointer-events: none;
margin: 0;
padding: 0;
width: 0;
height: 0;


`


export const StyledCheckboxLabel = styled.label.attrs({
  htmlFor: props=> props.id
})`
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  color: ${props => props.disabled && "rgba(0,0,0,.25)"};
  cursor: ${props => props.disabled && "not-allowed"};

  &:hover ${StyledCheckboxButton}{
    ${
      props => !props.disabled && css`
      border: ${({color, theme}) => color ? `1px solid ${color}` : `1px solid ${theme.primary.main}`};

      `
    }

  }
`
