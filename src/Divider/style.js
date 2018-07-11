import styled, {css} from 'styled-components';

const baseDividerHorizontal = css `
  display: block;
  height: .1rem;
  width: 100%;
  margin: 1.6rem 0;
  clear: both;
`

export const baseDividerVertical = css`
  margin: 0 .8rem;
  display: inline-block;
  height: 1rem;
  width: .1rem;

`

export const StyledDivider = styled.div `

  ${props => props.type === "vertical" ? baseDividerVertical :baseDividerHorizontal};

  vertical-align: middle;
  position: relative;
  top: -.06em;

  ${
props => !props.hasChild || props.type === "vertical"
  ? css `
    font-size: 14px;
    line-height: 1.5;
    color: ${({theme}) => theme.text.regular};
    box-sizing: border-box;

    list-style: none;
    background: ${props => props.theme.border.primary};
    ${
props => props.dashed && css `
      background: none;
      border-top: ${props => `.1rem solid ${props.theme.border.primary}`};
      `}
    ` : css `
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;
    font-weight: 500;
    color: ${({theme}) => theme.text.primary};
    font-size: 1.6rem;
    margin: 1.6rem 0;
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
              border-top: ${props => `.1rem solid ${props.theme.border.primary}`};
              transform: translateY(50%);
             ${
                props => props.textPosition === "left"
                       ? css `

                          width: 5%;
                          `
                       : props.textPosition === "right"
                          ? css `

                             width: 95%;
                           `
                        : null}
               }
            &::after{
              content: "";
display: table-cell;
position: relative;
top: 50%;
width: 50%;
border-top: ${props => `.1rem solid ${props.theme.border.primary}`};
transform: translateY(50%);
${
props => props.textPosition === "left"
  ? css `

   width: 95%;
  `
  : props.textPosition === "right"
    ? css `

    width: 5%;
  `
    : null}
            }
    `}



`

export const StyledDividerContent = styled.div `
  display: inline-block;
  padding: 0 24px;
  font-size: 1.4rem;
  `
