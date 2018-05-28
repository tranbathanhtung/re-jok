import styled from 'styled-components'


export const StyledBadge = styled.span`
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
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

export const StyledSup = styled.sup`
  background: ${props=> props.backgroundColor ? props.backgroundColor : "#f5222d"};
  position: absolute;
  transform: translateX(-50%);
  top: -1rem;
  left: ${props => props.widthChildren ? `${props.widthChildren/10}rem`: 0}
  height: 20px;
  border-radius: 10px;
  min-width: 20px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  padding: ${props => props.count < 10 ? '0 .6rem' : '0 .8rem'};
  font-size: 12px;
  font-weight: 400;
  z-index: 1;
  white-space: nowrap;

  transform-origin: -10% center;


`
