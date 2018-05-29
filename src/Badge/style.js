import styled, { keyframes} from 'styled-components'

const bouncing = keyframes `
0%{
  transform:scale(.9) translateX(-50%);

}
25%{
  transform:scale(1.1) translateX(-50%);
}
75%{
  transform:scale(.95) translateX(-50%);

}
100%{
  transform:scale(1) translateX(-50%);

}
`

export const StyledBadge = styled.span `

    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    line-height: 1;
    vertical-align: middle;


`

export const StyledSup = styled.sup `
  background: ${props => props.backgroundColor
  ? props.backgroundColor
  : props.theme.primary.main};
  position: absolute;
  transform: scale(1) translateX(-50%);
  top: -1rem;
  left: ${props => props.widthChildren
    ? `${props.widthChildren / 10}rem`
    : 0}
  height: 2rem;
  border-radius: 1rem;
  min-width: 2rem;
  color: #fff;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  padding: ${props => props.count < 10
      ? '0 .6rem'
      : '0 .8rem'};
  font-size: 1.2rem;
  font-weight: 400;
  z-index: 1;
  white-space: nowrap;
  margin-top: ${props => `${props.offset[0] / 10}rem`};
  margin-left:  ${props => `${props.offset[1] / 10}rem`};
  animation: ${bouncing} .3s 1 linear both;



  transform-origin: -10% center;


`
