import styled, {css} from 'styled-components'



const returnTooltip = props => {
  switch (props.position) {
    case 'bottom':
      return `
        &::after{
          top: 100%;
          transform: translateX(-50%);
          left: 50%;

        }

        &::before{
          bottom: 100%;
          top: calc(100% - 5px);
          left: 50%;
          transform: translateX(-50%);

          border-top-width: 0px;
          border-bottom-color: rgba(0,0,0,.75);
        }
        &:hover:after,
        &:hover:before {
          opacity: 1;
          transform: translateX(-50%) translateY(5px);
        }
      `

    case 'top':
      return `
        &::after{
            bottom: 100%;
            transform: translateX(-50%);
            left: 50%;

        }

        &::before{

          bottom: calc(100% - 5px);
          transform: translateX(-50%);
          left: 50%;

          border-bottom-width: 0px;
          border-top-color: rgba(0,0,0,.75);
        }
        &:hover:after,
        &:hover:before {
          opacity: 1;
          transform: translateX(-50%) translateY(-5px);
        }
        `

    case 'left':
      return `
       &::after{
          top: 50%;
          right: 100%;
          transform: translateY(-50%);

       }

       &::before{

         top: 50%;
         right: calc(100% - 5px);
         transform: translateY(-50%);


         border-right-width: 0px;
         border-left-color: rgba(0,0,0,.75);
        }
       &:hover:after,
       &:hover:before {
         opacity: 1;
         transform: translateX(-5px) translateY(-50%);
        }
       `

    case 'right':
      return `
       &::after{
          top: 50%;
          left: 100%;
          transform: translateY(-50%);

       }

       &::before{

         top: 50%;
         left: calc(100% - 5px);
         transform: translateY(-50%);


         border-left-width: 0px;
         border-right-color: rgba(0,0,0,.75);
        }
       &:hover:after,
       &:hover:before {
         opacity: 1;
         transform: translateX(5px) translateY(-50%);
        }
       `

    default:
      return `
      &::after{
        top: 100%;
        transform: translateX(-50%);
        left: 50%;

      }

      &::before{
        bottom: 100%;
        top: calc(100% - 5px);
        left: 50%;
        transform: translateX(-50%);

        border-top-width: 0px;
        border-bottom-color: rgba(0,0,0,.75);
      }
      &:hover:after,
      &:hover:before {
        opacity: 1;
        transform: translateX(-50%) translateY(5px);
      }
      `

  }
}


const baseTooltip = css`
  position: absolute;
  opacity: 0;
  text-transform: none;
  transition: all 0.216s ease;


`


export const StyledTooltip = styled.div`
   position: relative;
   font-size: 1.4rem;
   line-height: 1.5;
   color: rgba(0,0,0,.65);
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   list-style: none;
   z-index: 1060;
   display: block;
   visibility: visible;

   &::after{
     ${baseTooltip};
     max-width: 25rem;
     min-width: 4rem;
     padding: .6rem .8rem;
     color: #fff;
     text-align: left;



     text-decoration: none;
     background-color: rgba(0,0,0,.75);
     border-radius: .4rem;
     box-shadow: 0 .2rem .8rem rgba(0,0,0,.15);
     min-height: 3.2rem;
     content: ${props => props.label
       ? `'${CSS.escape(props.label)}'`
       : "''"};;




   }

   &::before{
     ${baseTooltip};
     content: "";
     z-index: 6002;
     border-width: .5rem;
     border-image: initial;
     width: 0;
     height: 0;
     border-color: transparent;
     border-style: solid;





   }

   ${props => returnTooltip(props)}






`
