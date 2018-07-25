import styled, {css} from 'styled-components';


const baseForm = css`
font-size: 1.4rem;
position: relative;
max-width: 100%;
color: ${({theme}) => theme.text.regular};
line-height: 1.5;
box-sizing: border-box;
margin: 0;
padding: 0;
`

export const StyledForm = styled.form`
   ${baseForm};


`

export const StyledFormItem = styled.div`
  ${baseForm};
  margin-bottom: 1.4rem;
  clear: both;
  vertical-align: top;

`

export const StyledInputHelper = styled.p`
  color: ${({theme, validateStatus}) => validateStatus ? theme[validateStatus].main : theme.text.regular};
  margin: 0;
  font-size: 1.2rem;
  text-align: left;
  margin-top: .8rem;
  min-height: 1em;

  line-height: 1em;
`

export const Div = styled.div`

`

export const StyledLabelForm = styled.div`
text-align: ${props => props.layout === "horizontal" ? "right" : "left"};
margin-bottom: ${props => props.layout === "vertical" && ".5rem"};
vertical-align: middle;

display: inline-block;
overflow: hidden;
float: ${props => props.layout === "horizontal" && "left"};
min-width: 10rem;
white-space: nowrap;

`

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  color: ${({theme}) => theme.text.primary};

  &::after{
    content: ":";
    margin: 0 .8rem 0 .2rem;
    position: relative;
    top: -.5px;
  }
  ${
    props => props.required && css`
    &::before{
      display: inline-block;
      margin-right: .4rem;
      content: "*";
      font-family: SimSun;
      line-height: 1;
      font-size: 1.4rem;
      color: #f5222d;
    }
    `
  }

`
