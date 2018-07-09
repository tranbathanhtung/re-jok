export const notifTransition = 'notifTransition';



const defaultEffect = `
&.${notifTransition}-enter.${notifTransition}-enter-active {

    transition: opacity 1s ease;
    transform:   translate(0,0);
    transform: translate3d(0,0,0);
    transition-duration: 250ms;
    transition-property: transform, opacity;
    transition-timing-function: linear;
    }
 &.${notifTransition}-leave {
  opacity: 1;
  transform:   translate(0,0,0);
  transform: translate3d(0,0,0);
  transition-property: transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: linear;
}
`

export const defaultEffectRight = `
&.${notifTransition}-enter {
transform:   translate(25rem,0);
transform: translate3d(25rem,0,0);
}

${defaultEffect};

&.${notifTransition}-leave.${notifTransition}-leave-active {
   opacity: 0;
   transform:   translate(25rem,0);
   transform: translate3d(25rem,0,0);
}
`


export const defaultEffectLeft = `
&.${notifTransition}-enter {

  transform:   translate(-25rem,0);
  transform: translate3d(-25rem,0,0);
}

${defaultEffect};

&.${notifTransition}-leave.${notifTransition}-leave-active {
   opacity: 0;
   transform:   translate(-25rem,0);
   transform: translate3d(-25rem,0,0);
}
`

export const defaultEffectTopCenter = `
&.${notifTransition}-enter {

  transform:   translate(0,-25rem);
  transform: translate3d(0,-25rem,0);
}

${defaultEffect};

&.${notifTransition}-leave.${notifTransition}-leave-active {
   opacity: 0;
   transform:   translate(0, -25rem);
   transform: translate3d(0, -25rem,0);
}
`

export const defaultEffectBottomCenter = `
&.${notifTransition}-enter {

  transform:   translate(0,25rem);
  transform: translate3d(0,25rem,0);
}

${defaultEffect};

&.${notifTransition}-leave.${notifTransition}-leave-active {
   opacity: 0;
   transform:   translate(0, 25rem);
   transform: translate3d(0, 25rem,0);
}
`

export const scaleEffect = `
&.${notifTransition}-enter {
  opacity: 0;
  transform: translate3d(0,40px,0) scale3d(0.1,0.6,1);

}

&.${notifTransition}-enter.${notifTransition}-enter-active {

    opacity: 1;
    transform: translate3d(0,0,0) scale3d(1,1,1);
    transition-duration: 250ms;
    transition-property: transform, opacity;
    transition-timing-function: linear;
    }
 &.${notifTransition}-leave {
  opacity: 1;
  transform: translate3d(0,0,0) scale3d(1,1,1);
  transition-property: transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: linear;
}

&.${notifTransition}-leave.${notifTransition}-leave-active {
  opacity: 0;
  transform: translate3d(0,40px,0) scale3d(0.1,0.6,1);
}
`
