import styled, {css} from 'styled-components';

const returnShape = props => {
  switch (props.shape) {
    case 'circle':
      return `
        border-radius: 50%;
      `
    case 'rounded':
      return `
        border-radius: .6rem;
      `

    default:

  }
}

export const StyledImage = styled.img`
   ${props => returnShape(props)};
   max-width: 100%;
   height: auto;
   vertical-align: middle;
   ${props => props.hasBoxshadow && css`
       box-shadow: 0 .5rem 1.5rem -.8rem rgba(0,0,0,.24), 0 .8rem 1rem -.5rem rgba(0,0,0,.2);
     `}

    ${
      props => props.thumbnail && css`
       padding: .25rem;
       background-color: #fff;
       border: 1px solid #dee2e6;
       border-radius: .25rem;
      `
    }
`
