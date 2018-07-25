import styled, {css} from 'styled-components';


const returnGridMedia = (props, type) => {

      return props[type]
       ? typeof props[type] === "number"
         ? css`
           @media (min-width: ${props.theme.grid[type]}px) {
             flex: ${props => `0 0 ${ (props[type] / 24) * 100}%`};
             max-width: ${props => `${ (props[type] / 24) * 100}%`};
           }
         `
        : typeof props[type] === "object"
          ? css`
          @media (min-width: ${props.theme.grid[type]}px) {
            flex: ${props => `0 0 ${ (props[type].span / 24) * 100}%`};
            max-width: ${props => `${ (props[type].span / 24) * 100}%`};

            order: ${props => props[type].order ? props[type].order : 0};

            left: ${props => props[type].push !== 0 || props[type].push
              ? `${ (props[type].push / 24) * 100}%`
              : null};
            right: ${props => props[type].pull !== 0 || props[type].pull
                ? `${ (props[type].pull / 24) * 100}%`
                : null};

            margin-left: ${props => props[type].offset !== 0 || props[type].offet
                  ? `${ (props[type].offset / 24) * 100}%`
                  : null};

          }
          `
            : null
       : null

}

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



  ${props => returnGridMedia(props, 'sm')};
  ${props => returnGridMedia(props, 'md')};
  ${props => returnGridMedia(props, 'lg')};
  ${props => returnGridMedia(props, 'xl')};



`
