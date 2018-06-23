import styled, {css} from 'styled-components';



export const StyledInputWrapper = styled.div`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   list-style: none;
   position: relative;
   display: table;
   width: ${props => props.fullWidth && "100%"};

`



export const StyledInput = styled.input`
max-width: 100%;
width: 100%;
height: ${props => props.theme.size[props.size].height};

padding: ${props => props.theme.size[props.size].padding};
font-size: ${props => props.theme.size[props.size].fontSize};

color: rgba(0,0,0,.65);

background-image: none;


box-sizing: border-box;
transition: all .2s ease-in-out;
${
  props =>
    props.blank
    ? css`
    background: none;
    border-color: transparent;
    &:focus{
      outline: 0;
    }
    `
    : css`
    border: .1rem solid #e5e5e5;
    background: #fff;
    border-radius: ${props => props.addonAfter || props.addonBefore ? "" : ".4rem"};
    border-color: ${({theme, validateStatus, underline}) => validateStatus && !underline && theme[validateStatus].main};
    border-bottom: ${({theme, validateStatus, underline}) => validateStatus && underline && `.2rem solid ${theme[validateStatus].main}`};

    &:hover{

       border-color: ${({theme, validateStatus, underline}) =>validateStatus && !underline ? theme[validateStatus].main : "#c0c4cc"};
       border-bottom: ${({theme, validateStatus, underline}) => validateStatus && underline && `.2rem solid ${theme[validateStatus].main}`};


    }

    &:focus {
        outline: none;
        ${
          props =>
             props.underline ? css`

                 border-bottom: ${({theme, validateStatus,colorFocus}) => `.2rem solid ${validateStatus ? theme[validateStatus].main : colorFocus ? colorFocus : theme.primary.main}`};
                 box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);

             `: css`
               ${
                 props =>
                  props.validateStatus
                  ? css`
                  border-color: ${({theme, validateStatus}) => theme[validateStatus].main};

                  `
                  : css`
                  border-color: ${({theme, colorFocus}) => colorFocus ? colorFocus : theme.primary.main};

                  `
               }

             `
        }
    }
    `
}


${
  props => props.textarea && css`
    overflow-y: ${props => props.autosize && "hidden"};
    font-family: sans-serif;
    height: auto;
  `
}




${
  props =>
    props.icon && css`
    padding-left: ${props => props.iconPosition === "left" && "3.2rem"};
    padding-right: ${props => props.iconPosition === "right" && "3.2rem"};
 `
}

${
  props =>
    props.disabled && css`
    border-color: #d9d9d9;
    cursor: not-allowed;
    background-color: #f5f5f5;
    `
}




`

export const StyledIconInput = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.iconPosition === "left" && 0};
    right: ${props => props.iconPosition === "right" && 0};
    width: 3.2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.3);
    pointer-events: none;
`



const baseAddon = css`
  padding: 0 1.1rem;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  background-color: #fafafa;
  border: .1rem solid #d9d9d9;
  position: relative;
  transition: all .3s;
  display: table-cell;
  ${
    ({validateStatus, theme}) => validateStatus && css`
      color: ${theme[validateStatus].main};
      border-color: ${theme[validateStatus].main};
      background-color: #fff;
    `
  }
`

export const StyledAddonBefore = styled.div`
  ${baseAddon};
  border-right: 0;
`

export const StyledAddonAfter = styled.div`
  ${baseAddon};
  border-left: 0;
`
