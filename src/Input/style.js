import styled, {css} from 'styled-components';

import Icon from '../Icon';


export const StyledInputWrapper = styled.div`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   list-style: none;
   position: relative;
   display: inline-block;
   width: 100%;
   width: 220px;

`



export const StyledInput = styled.input`
max-width: 100%;
width: 100%;
height: ${props => props.theme.size[props.size].height};
border: 0 none;
padding: ${props => props.theme.size[props.size].padding};
font-size: ${props => props.theme.size[props.size].fontSize};
background: #fff;
color: rgba(0,0,0,.65);
border: 1px solid #e5e5e5;
background-image: none;
border-radius: .4rem;
box-sizing: border-box;
border-color: ${({theme, validateStatus}) =>validateStatus && theme[validateStatus].main};


transition: all .2s ease-in-out;
${
  props =>
    props.icon && css`
    padding-left: ${props => props.iconPosition === "left" && "3.2rem"};
    padding-right: ${props => props.iconPosition === "right" && "3.2rem"};
 `
}




&:hover{

   border-color: ${({theme, validateStatus}) =>validateStatus ? theme[validateStatus].main : " #c0c4cc"};

}

&:focus {
    outline: none;
    ${
      props =>
         props.underline ? css`

             border-bottom: ${({theme}) => `2px solid ${theme.primary.main}`};
             box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);

         `: css`
           ${
             props =>
              props.validateStatus
              ? css`
              border-color: ${({theme, validateStatus}) => theme[validateStatus].main};

              `
              : css`
              border-color: ${({theme}) => theme.primary.main};

              `
           }

         `
    }
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

export const StyledInputHelper = styled.p`
  color: ${({theme, validateStatus}) => validateStatus ? theme[validateStatus].main : "rgba(0,0,0,.54)"};
  margin: 0;
  font-size: 1.2rem;
  text-align: left;
  margin-top: 8px;
  min-height: 1em;

  line-height: 1em;
`
