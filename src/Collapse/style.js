import styled, {css} from 'styled-components'




export const StyledCollapse = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.64);


`


export const StyledCollapseItem = styled.li`


`
export const StyledCollapseItemTitle = styled.div`
      height: 48px;
      line-height: 48px;
      background-color: #fff;
      color: #303133;
      cursor: pointer;
      ${'' /* border-bottom: 1px solid #ebeef5; */}
      font-size: 16px;
      font-weight: 500;
      transition: border-bottom-color .3s;
      outline: none;

`

const returnCollapse = props => {
  switch (props.isTransitionEnd) {
    case 'IDLING':
      return `

        max-height: 0;
      `
    case 'RESIZING':
      return `
        display: none;
      `
    case 'WAITING':
      return `
        max-height: ${props.childHeight};
      `
    case 'DONE':
      return `
        display: block;
      `
    default:
      return `
        display: none;
      `
  }
}

export const StyledCollapseItemContent = styled.div`
  will-change: height;
  background-color: #fff;

  box-sizing: border-box;
  ${'' /* border-bottom: 1px solid #ebeef5;
  padding-bottom: 25px; */}
  ${props => returnCollapse(props)};
  transition: all .15s ease-out;
  overflow: hidden;
    font-size: 13px;
    color: #303133;

`
