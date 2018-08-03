import styled,{css} from 'styled-components';



export const StyledSection = styled.div`
  font-size: 1.4rem;
  background-color: ${({theme}) => theme.background.default};
  ${
    props => props.type === "default"
    ? css`
       color: ${({theme}) => theme.text.regular};

       background-color: ${({theme}) => theme.background.default};

    `: props.type === "background" && props.backgroundUrl
    ? css`
      background-image: url(${props.backgroundUrl});
      background-size: cover;
      color: ${({theme}) => theme.text.default};
      background-position: 50% 50%;
      background-repeat: no-repeat;
      height: auto;
    `
    : null
  }
  position: relative;
  box-sizing: border-box;
  padding-top: 4rem;
  padding-bottom: 4rem;

  &:after, &:before {
    content: "";
    display: table;
  }

  &:after{
    clear: both;
  }

  @media (max-width: 960px) {
     padding-top: 7rem;
     padding-bottom: 7rem;
  }
`
