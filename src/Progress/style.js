import styled, { keyframes, css } from 'styled-components';



const progressBar = keyframes`
0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
`;

const progressBarShort = keyframes`
0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
`;

const baseProgress = css`
  content: '';
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
`
const returnSize = props => {
  switch (props.size) {
    case 'small':
      return `
        height: .5rem;
      `
    case 'default':
      return `
        height: 1rem;
      `
    case 'medium':
      return `
        height: 1.4rem;
      `
    case 'large':
      return `
        height: 1.8rem;
        `

    default:
      return `
        height: .5rem;
      `

  }
}

const returnIndeterminate = css`
&::after, &::before{
  ${baseProgress};
}

&::before{
      animation: ${progressBar} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

&::after{
  animation: ${progressBarShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      animation-delay: 1.15s;

}
`

const returnDeterminate = css`
  top: 0;
  width: ${ ({percent}) => `${percent}%`};
  bottom: 0;
  transition: width .3s linear;
`

export const StyledProgressWrapper = styled.div`
  font-size: 1.4rem;
  background-color: #ebeef5;
  line-height: 1.4;
  ${props => returnSize(props)};
  border-radius: 10rem;
  vertical-align: middle;
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  z-index: ${ ({theme}) => theme.zIndex.progress};
  ${
    props => props.fixed && css`
         position: fixed;
         top: 0;
    `
  }

`

export const StyledProgress = styled.div`
   border: none;
   outline: none;

   background: ${ ({color, theme}) => color ? color : theme.primary.main};
   border-radius: 10rem;
   color: #fff;


   ${props => props.indeterminate ? returnIndeterminate : returnDeterminate};






`
