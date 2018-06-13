import styled, {css} from 'styled-components';

const baseDividerHorizontal = css `
 display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
  clear: both;
`



export const StyledDivider = styled.div `
  ${baseDividerHorizontal};

  vertical-align: middle;
  position: relative;
  top: -.06em;

  ${
props => props.children === null || props.children === undefined || (Array.isArray(props.children) && props.children.length === 0)
  ? css `
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    background: #e8e8e8;
    ${
      props => props.dashed && css`
      background: none;
border-top: 1px dashed #e8e8e8;
      `
    }
    `
  : css `
    display: table;
white-space: nowrap;
text-align: center;
background: transparent;
font-weight: 500;
color: rgba(0,0,0,.85);
font-size: 16px;
margin: 16px 0;
padding: 0;
    list-style: none;
        box-sizing: border-box;
            line-height: 1.5;
            &:before{
              content: "";
display: table-cell;
position: relative;
top: 50%;
width: 50%;
border-top: 1px solid #e8e8e8;
transform: translateY(50%);
${
  props => props.textPosition === "left" ? css`
  top: 50%;
   width: 5%;
  ` : props.textPosition === "right" ? css`
    top: 50%;
    width: 95%;
  `: null
}
            }
            &::after{
              content: "";
display: table-cell;
position: relative;
top: 50%;
width: 50%;
border-top: 1px solid #e8e8e8;
transform: translateY(50%);
${
  props => props.textPosition === "left" ? css`
  top: 50%;
   width: 95%;
  ` : props.textPosition === "right" ? css`
    top: 50%;
    width: 5%;
  `: null
}
            }
    `}



`

export const StyledDividerContent = styled.div `
  display: inline-block;
  padding: 0 24px;
  font-size: 1.4rem;
  `
