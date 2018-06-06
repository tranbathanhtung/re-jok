import styled, {css} from 'styled-components';

export const StyledRow = styled.div `
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-left: -.8rem;
  margin-right: -8.rem;
  position: relative;
  font-size: 1.6rem;
  justify-content: ${props => props.justify !== 'unset'
  ? `${props.justify}`
  : null};
  align-items: ${props => props.align !== 'unset'
    ? `${props.align}`
    : null};
`

export const StyledCol = styled.div `
  box-sizing: border-box;
  position: relative;

  flex: ${props => props.span ? `0 0 ${ (props.span / 24) * 100}%` : null};
  max-width: ${props => props.span ? `0 0 ${ (props.span / 24) * 100}%` : null};


${
  props => {
    if(typeof props.gutter === "number"){
      return (
        css`
        padding-left: ${props => `${ (props.gutter / 2) / 10}rem`};
        padding-right: ${props => `${ (props.gutter / 2) / 10}rem`};
        `
      )
    }
    else if(typeof props.gutter === "object"){
      const vals = Object.keys(props.gutter).map(key => {
        if(key === "xs"){
          return css`
          @media(max-width: ${props.theme.grid.sm}px){
            padding-left: ${props => `${ (props.gutter[key] / 2) / 10}rem`};
            padding-right: ${props => `${ (props.gutter[key] / 2) / 10}rem`};
          }
          `
        }
        return css`
          @media(min-width: ${props.theme.grid[key]}px){
            padding-left: ${props => `${ (props.gutter[key] / 2) / 10}rem`};
            padding-right: ${props => `${ (props.gutter[key] / 2) / 10}rem`};
          }
        `
      })

      return vals
    } else return null
  }
}
  order: ${props => props.order};

  left: ${props => props.push !== 0
    ? `${ (props.push / 24) * 100}%`
    : null};
  right: ${props => props.pull !== 0
      ? `${ (props.pull / 24) * 100}%`
      : null};

  margin-left: ${props => props.offset !== 0
        ? `${ (props.offset / 24) * 100}%`
        : null};

        ${
          props =>
             props.xs
             ? typeof props.xs === "number"
               ? css`

                   flex: ${props => `0 0 ${ (props.xs / 24) * 100}%`};
                   max-width: ${props => `${ (props.xs / 24) * 100}%`};

               `
              : typeof props.xs === "object"
                ? css`

                  flex: ${props => `0 0 ${ (props.xs.span / 24) * 100}%`};
                  max-width: ${props => `${ (props.xs.span / 24) * 100}%`};

                  order: ${props => props.xs.order ? props.xs.order : 0};

                  left: ${props => props.xs.push !== 0 || props.xs.push
                    ? `${ (props.xs.push / 24) * 100}%`
                    : null};
                  right: ${props => props.xs.pull !== 0 || props.xs.pull
                      ? `${ (props.xs.pull / 24) * 100}%`
                      : null};

                  margin-left: ${props => props.xs.offset !== 0 || props.xs.offet
                        ? `${ (props.xs.offset / 24) * 100}%`
                        : null};


                `
                  : null
             : null

        }


        ${
          props =>
             props.sm
             ? typeof props.sm === "number"
               ? css`
                 @media (min-width: ${props.theme.grid.sm}px) {
                   flex: ${props => `0 0 ${ (props.sm / 24) * 100}%`};
                   max-width: ${props => `${ (props.sm / 24) * 100}%`};
                 }
               `
              : typeof props.sm === "object"
                ? css`
                @media (min-width: ${props.theme.grid.sm}px) {
                  flex: ${props => `0 0 ${ (props.sm.span / 24) * 100}%`};
                  max-width: ${props => `${ (props.sm.span / 24) * 100}%`};

                  order: ${props => props.sm.order ? props.sm.order : 0};

                  left: ${props => props.sm.push !== 0 || props.sm.push
                    ? `${ (props.sm.push / 24) * 100}%`
                    : null};
                  right: ${props => props.sm.pull !== 0 || props.sm.pull
                      ? `${ (props.sm.pull / 24) * 100}%`
                      : null};

                  margin-left: ${props => props.sm.offset !== 0 || props.sm.offet
                        ? `${ (props.sm.offset / 24) * 100}%`
                        : null};

                }
                `
                  : null
             : null

        }

    ${
      props =>
         props.md
         ? typeof props.md === "number"
           ? css`
             @media (min-width: ${props.theme.grid.md}px) {
               flex: ${props => `0 0 ${ (props.md / 24) * 100}%`};
               max-width: ${props => `${ (props.md / 24) * 100}%`};
             }
           `
          : typeof props.md === "object"
            ? css`
            @media (min-width: ${props.theme.grid.md}px) {
              flex: ${props => `0 0 ${ (props.md.span / 24) * 100}%`};
              max-width: ${props => `${ (props.md.span / 24) * 100}%`};

              order: ${props => props.md.order ? props.md.order : 0};

              left: ${props => props.md.push !== 0 || props.md.push
                ? `${ (props.md.push / 24) * 100}%`
                : null};
              right: ${props => props.md.pull !== 0 || props.md.pull
                  ? `${ (props.md.pull / 24) * 100}%`
                  : null};

              margin-left: ${props => props.md.offset !== 0 || props.md.offet
                    ? `${ (props.md.offset / 24) * 100}%`
                    : null};

            }
            `
              : null
         : null

    }


    ${
      props =>
         props.lg
         ? typeof props.lg === "number"
           ? css`
             @media (min-width: ${props.theme.grid.lg}px) {
               flex: ${props => `0 0 ${ (props.lg / 24) * 100}%`};
               max-width: ${props => `${ (props.lg / 24) * 100}%`};
             }
           `
          : typeof props.lg === "object"
            ? css`
            @media(min-width: ${props.theme.grid.lg}px) {
              flex: ${props => `0 0 ${ (props.lg.span / 24) * 100}%`};
              max-width: ${props => `${ (props.lg.span / 24) * 100}%`};

              order: ${props => props.lg.order ? props.lg.order : 0};

              left: ${props => props.lg.push !== 0 || props.lg.push
                ? `${ (props.lg.push / 24) * 100}%`
                : null};
              right: ${props => props.lg.pull !== 0 || props.lg.pull
                  ? `${ (props.lg.pull / 24) * 100}%`
                  : null};

              margin-left: ${props => props.lg.offset !== 0 || props.lg.offet
                    ? `${ (props.lg.offset / 24) * 100}%`
                    : null};




            }
            `
              : null
         : null

    }


            ${
              props =>
                 props.xl
                 ? typeof props.xl === "number"
                   ? css`
                     @media (min-width: ${props.theme.grid.xl}px) {
                       flex: ${props => `0 0 ${ (props.xl / 24) * 100}%`};
                       max-width: ${props => `${ (props.xl / 24) * 100}%`};
                     }
                   `
                  : typeof props.xl === "object"
                    ? css`
                    @media (min-width: ${props.theme.grid.xl}px) {
                      flex: ${props => `0 0 ${ (props.xl.span / 24) * 100}%`};
                      max-width: ${props => `${ (props.xl.span / 24) * 100}%`};

                      order: ${props => props.xl.order ? props.xl.order : 0};

                      left: ${props => props.xl.push !== 0 || props.xl.push
                        ? `${ (props.xl.push / 24) * 100}%`
                        : null};
                      right: ${props => props.xl.pull !== 0 || props.xl.pull
                          ? `${ (props.xl.pull / 24) * 100}%`
                          : null};

                      margin-left: ${props => props.xl.offset !== 0 || props.xl.offet
                            ? `${ (props.xl.offset / 24) * 100}%`
                            : null};

                    }
                    `
                      : null
                 : null

            }




`
