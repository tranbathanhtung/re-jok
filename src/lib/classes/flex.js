import { css } from 'styled-components'


export const ClassFlex = css`
.flex.flex {
  display: flex;
}

.inline-flex.inline-flex {
  display: inline-flex;
}

.flex-left.flex-left {
  justify-content: flex-start;
}

.flex-right.flex-right {
  justify-content: flex-end;
}

.flex-center.flex-center {
  justify-content: center;
}

.flex-between.flex-between {
  justify-content: space-between;
}

.flex-around.flex-around {
  justify-content: space-around;
}

.flex-top.flex-top {
  align-items: flex-start;
}

.flex-center.flex-center {
  align-items: center;
}

.flex-bottom.flex-bottom {
  align-items: flex-end;
}

.flex-wrap.flex-wrap {
  flex-wrap: wrap;
}

.direction-column{
  flex-direction: column;
}
.direction-row {
  flex-direction: row;
}

.direction-column-reverse{
  flex-direction: column-reverse;
}

.direction-row-reverse{
  flex-direction: row-reverse;
}
`
