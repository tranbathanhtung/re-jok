import styled, {css} from 'styled-components';




export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-left: -.8rem;
  margin-right: -8.rem;
  position: relative;
  font-size: 1.6rem;
`

export const StyledCol = styled.div`
  box-sizing: border-box;
  position: relative;
  flex: ${props => `0 0 ${(props.span / 24) * 100}%`};
  max-width: ${props => `${(props.span / 24) * 100}%`};

  ${
    props =>
     typeof props.gutter === "number"
      ? css`
        padding-left: ${props => `${(props.gutter / 2) / 10}rem`};
        padding-right: ${props => `${(props.gutter / 2) / 10}rem`};

      `
      : null
  }

  left: ${props => props.push !== 0 ? `${(props.push / 24) * 100}%` : 'unset'};
  right: ${props => props.pull !== 0 ? `${(props.pull / 24) * 100}%` : 'unset'};

  margin-left: ${props => `${(props.offset / 24) * 100}%`};

`
