import styled, {css} from 'styled-components';
import {
  defaultEffectRight,
  defaultEffectLeft,
  defaultEffectTopCenter,
  defaultEffectBottomCenter,
  scaleEffect,
} from './effect';



export const notifTransition = 'notifTransition';



export const returnEffect = config => {
  if(config.effect === "default"){
    switch (config.position) {
      case 'topRight':
        return defaultEffectRight;
      case 'topLeft':
         return defaultEffectLeft;
      case 'topCenter':
         return defaultEffectTopCenter;
      case 'bottomRight':
         return defaultEffectRight;
      case 'bottomLeft':
        return defaultEffectLeft;

      case 'bottomCenter':
         return defaultEffectBottomCenter;


      default:
      return defaultEffectRight;

    }
  }
  if(config.effect === "scale"){
    return scaleEffect;
  }


}



export const returnPosition = config => {
  switch (config.position) {
    case 'topRight':
      return `
        right: 0;
        top: 2.4rem;
        bottom: auto;
        margin-right: 2.4rem;

      `
    case 'topLeft':
       return `
         left: 0;
         top: 2.4rem;
         bottom: auto;
         margin-left: 2.4rem;

       `
    case 'topCenter':
       return`
         left: 50%;
         right: auto
         top: 2.4rem;
         bottom: auto;
         

         transform: translateX(-50%);
       `
    case 'bottomRight':
       return `
         right: 0;
         top: auto;
         bottom: 2.4rem;
         margin-right: 2.4rem;

       `
    case 'bottomLeft':
      return `
       left: 0;
       top: auto;
       margin-left: 2.4rem;

       bottom: 2.4rem;
      `
    case 'bottomCenter':
       return `
        left: 50%;
        right: auto
        top: auto;
        bottom: 2.4rem;
        transform: translateX(-50%);
       `


    default:
      return`
       right: 0;
       top: 2.4rem;
       bottom: auto;
       margin-right: 2.4rem;

      `

  }
}


export const StyledNotificationWrapper = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${ ({theme}) => theme.text.regular};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;
  z-index: ${ ({theme}) => theme.zIndex.notification};
  width: 39rem;
  max-width: calc(100vw - 3.2rem);

  ${props => returnPosition(props.config)};

`

export const StyledNotification = styled.div`
   padding: 1.6rem 2.4rem;
   background: ${({color, theme}) =>color ? color : theme.background.default};

   box-shadow: 0 .4rem 1.2rem rgba(0,0,0,.15);
   border-radius: .4rem;
   margin-bottom: 1.6rem;
   position: relative;
   font-size: 1.4rem;
   z-index: ${ ({theme}) => theme.zIndex.notification};

   ${props => returnEffect(props.config)};




`

export const StyledNotificationContent = styled.div`

  ${
    props => props.hasMedia && css`
       margin-left: 4.8rem;
    `
  }

`

export const StyledNotificationTitle = styled.p`
  font-size: 1.6rem;
  color: ${ ({color, theme}) => color ? theme.text.default : theme.text.regular};
  margin-bottom: .8rem;
  line-height: 2.4rem;
  display: inline-block;
`

export const StyledNotificationMessage = styled.p`
font-size: 1.4rem;
color: ${ ({color, theme}) =>color? theme.text.default : theme.text.secondary};
line-height: 2.4rem;
`

export const StyledNotificationClose = styled.div`
  display: flex;
  width: 100%;
  color: ${ ({color, theme}) =>color? theme.text.default : theme.text.regular};

  margin-top: 1.6rem;
  justify-content: flex-end;
`

export const StyledNotificationMedia = styled.div`
  position: absolute;
  margin-left: -.4rem;

`
