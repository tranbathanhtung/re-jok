import styled, {css} from 'styled-components';


const baseRadio = css`
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

export const StyledRadioGroup = styled.div`
  ${baseRadio};
`

export const StyledRadioWrapper = styled.div`
  ${baseRadio};
`



export const StyledRadioLabel = styled.label.attrs({
  htmlFor: props=> props.id
})`
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  padding-left: 4.5rem;
`

export const StyledRadioButton = styled.span`
height: 3rem;
  width: 3rem;
  border: 5px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -.4rem;
  &::after{
    content: "";
    display: block;
    height: 1.3rem;
    width: 1.3rem;
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background-color: #55c57a;
opacity: ${props => props.checked ? "1" : "0"};
-webkit-transition: opacity .2s;
transition: opacity .2s;
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
