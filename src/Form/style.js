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
  margin-bottom: 2.4rem;
  clear: both;
  vertical-align: top;

`
