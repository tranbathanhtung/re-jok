import styled, {css, keyframes} from 'styled-components'

// ================ Card =================
const opacityCard = keyframes `
0% {

    opacity: 0;
}
100% {
    opacity: 1;
}
`

export const StyledCard = styled.div `

  display: flex;
  flex-direction: column;
  border: ${({theme}) => `.1rem solid ${theme.border.primary}`};
  border-radius: .5rem;
  max-width: 100%;

  position: relative;
  font-size: 1.4rem;
  color: ${({theme}) => theme.text.regular};
  margin: 0;
  z-index: ${({theme}) => theme.zIndex.card};


  transition: all .2s;
  box-sizing: border-box;
  list-style: none;
  animation: ${opacityCard} .5s;



  ${
    props =>
      {
        if(typeof props.numberCard === "number"){
          return css`
            width: ${props => `calc(${ 100 / props.numberCard}% - 2.4rem)`};
          `
        } else if(typeof props.numberCard === "object"){
          const vals = Object.keys(props.numberCard).map(key => {
            switch (key) {
              case "xs":
               return css`
                @media(max-width: ${props.theme.grid.sm}px){
                  width: ${props => `calc(${ 100 / props.numberCard.xs}% - 2.4rem)`};

                }
                `

              case "sm":
               return css`
                @media(min-width: ${props.theme.grid.sm}px){
                  width: ${props => `calc(${ 100 / props.numberCard.sm}% - 2.4rem)`};

                  }
                  `

              case "md":
                return css`
                 @media(min-width: ${props.theme.grid.md}px){
                   width: ${props => `calc(${ 100 / props.numberCard.md}% - 2.4rem)`};

                    }
                    `

              case "lg":
                return css`
                  @media(min-width: ${props.theme.grid.lg}px){
                    width: ${props => `calc(${ 100 / props.numberCard.lg}% - 2.4rem)`};

                    }
                      `

              case "xl":
                 return css`
                    @media(min-width: ${props.theme.grid.xl}px){
                     width: ${props => `calc(${ 100 / props.numberCard.xl}% - 2.4rem)`};

                    }
                        `


              default:
              return css`
              width: ${props => props.numberCard.number ? `calc(${ 100 / props.numberCard.number}% - 2.4rem)` : '33rem'};

              `
            }

          })

          return vals
        }
        else return css`
           width: 33rem;
        `
      }
  }
  ${
props => props.loading
  ? css `

    padding: 1.4rem;
    height: 40rem;
    border-radius: .5rem;
    `
  : css `
      background: ${({theme}) => theme.background.default};
      height: 100%;
      padding: 0;
    `}




  ${
props => props.hoverable
  ? css `
       &:hover{
         box-shadow: 0 .2rem .8rem rgba(0,0,0,.09);
         border-color: ${({theme}) => theme.border.primary};
       }
     `
  : null}


`
// ================ Card Group ==============
export const StyledCardGroup = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: -1.4rem -.8rem;
  ${
props => props.center
  ? css `
       justify-content: center;
     `
  : null}
  > ${StyledCard}{
      margin: 1.4rem 1.2rem;
  }
`

// ================= Card Header ==============
export const StyledCardHeader = styled.div `
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 1.4rem;

  @media (min-width: 70rem){
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const StyledCardHeaderInfo = styled.div `
   display: flex;
   align-items: center;
   flex: 1 1 70%;

`
export const StyledCardHeaderAction = styled.div `
    flex: 0 0 30%;
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

   & > * {
     margin-right: .6rem;
   }

`

export const StyledCardHeaderText = styled.div `
  display: flex;
  flex-direction: column;


`



//=============== Card Media ===============
export const StyledCardMedia = styled.div `
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 56.25%;
  background-image: ${props => props.src
  ? `url("${props.src}")`
  : ""};
`

//================ Card Content =============
export const StyledCardContent = styled.div `
   clear: both;
   color: ${({theme}) => theme.text.regular};
   padding: 1.4rem;
   font-size: 1.4rem;
   line-height: 2rem;
   font-weight: 400;

   @media (min-width: 70rem){
     padding-left: 1.6rem;
     padding-right: 1.6rem;
   }
`

const baseTitle = css`
text-overflow: ellipsis;
overflow: hidden;
letter-spacing: -.029rem;
margin-bottom: .5rem;
white-space: nowrap;
`

export const StyledCardContentTitle = styled.div `
   font-size: ${({theme}) => theme && theme.typography.title.fontSize};
   color: ${({theme}) => theme && theme.text.primary};
   font-weight: ${({theme}) => theme && theme.typography.title.fontWeight};
   line-height: ${({theme}) => theme && theme.typography.title.lineHeight};
   ${baseTitle}

`

export const StyledCardContentSubTitle = styled.div `
font-size: ${({theme}) => theme && theme.typography.subtitle.fontSize};
color:  ${({theme}) => theme && theme.text.secondary};
font-weight: ${({theme}) => theme && theme.typography.subtitle.fontWeight};
line-height: ${({theme}) => theme && theme.typography.subtitle.lineHeight};
${baseTitle}
`

//================ Card Action =============
export const StyledCardAction = styled.div `
   display: flex;
   box-sizing: border-box;
   align-items: center;
   padding: .8rem 1rem;


`

export const StyledActionRight = styled.div `
  display: flex;
  flex: 0 0 50%;
  justify-content: flex-start;
  align-items: center;
`

export const StyledActionLeft = styled.div `
  display: flex;
  flex: 0 0 50%;
  justify-content: flex-end;
  align-items: center;
`
//============== CardLoading =================
const placeHolderShimmer = keyframes `
  0% {
    transform: translateX(-46.8rem);
  }

  100% {
    transform: translateX(46.8rem);
  }
  `
export const PlaceHolder = styled.div `
  width: 100%;
  overflow: hidden;
  height: 21.9rem;
  background:#fafafa;
  position: relative;
  &:before{
    content: "";
    background-image: linear-gradient(
      to right,
      rgb(246, 247, 249) 0%,
      rgb(233, 235, 238) 20%,
      rgb(246, 247, 249) 40%,
      rgb(246, 247, 249) 100%
    );
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    animation: 1s ${placeHolderShimmer} linear infinite;
  }
  & div {

    background: ${({theme}) => theme.background.default};
    position: absolute;
    right: 0;
  }
  `
const baseAvatarLoading = css `
background: #fafafa !important;
width: 4rem;
height: 4rem;
border: .8rem solid #fafafa;
top: -.8rem;
left: -.8rem;
`
export const AvatarLoading = styled.div `
${baseAvatarLoading}
`

export const AvatarRoundLoading = styled.div `
    ${baseAvatarLoading}
  border-radius: 50%;

  `

export const DividerLoading = styled.div `
  height: ${props => `${props.height / 10}rem`};
  top: ${props => `${props.top / 10}rem`};
  left: ${props => `${props.left / 10}rem`};
`
export const ContentLoading = styled.div `
  height: ${props => `${props.height / 10}rem`};
  top: ${props => `${props.top / 10}rem`};
  left: ${props => `${props.left / 10}rem`};
`

export const NameCardLoading = styled.div `
  height: .6rem;
  top: .8rem;
  left: 13.6rem;
  `
export const DateCardLoading = styled.div `
  height: .6rem;
  top: 2.6rem;
  left: 10rem;
  `
