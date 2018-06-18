import styled, {css} from 'styled-components';


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

transition: all .2s ease-in-out;


&:hover{
   border-color: #c0c4cc;
}

&:focus {
    outline: none;
    ${
      props =>
         props.underline ? css`

             border-bottom: ${({theme}) => `2px solid ${theme.primary.main}`};
             box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);

         `: css`
         border-color: ${({theme}) => theme.primary.main};

         `
    }
}
`
