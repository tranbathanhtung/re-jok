import styled, {css} from 'styled-components';


const baseForm = css`
font-size: 1.4rem;
position: relative;
max-width: 100%;
color: rgba(0,0,0,.65);
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
  color: ${({theme, validateStatus}) => validateStatus ? theme[validateStatus].main : "rgba(0,0,0,.54)"};
  margin: 0;
  font-size: 1.2rem;
  text-align: left;
  margin-top: 8px;
  min-height: 1em;

  line-height: 1em;
`

export const Div = styled.div`
${'' /* line-height: 3.2rem; */}
`

export const StyledLabelForm = styled.div`
text-align: ${props => props.layout === "horizontal" ? "right" : "left"};
margin-bottom: ${props => props.layout === "vertical" && ".5rem"};
vertical-align: middle;
${'' /* line-height: 31.9999px; */}
display: inline-block;
overflow: hidden;
float: ${props => props.layout === "horizontal" && "left"};
min-width: 10rem;
white-space: nowrap;

`

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.85);

  &::after{
    content: ":";
    margin: 0 8px 0 2px;
    position: relative;
    top: -.5px;
  }
  ${
    props => props.required && css`
    &::before{
      display: inline-block;
      margin-right: 4px;
      content: "*";
      font-family: SimSun;
      line-height: 1;
      font-size: 14px;
      color: #f5222d;
    }
    `
  }

`
