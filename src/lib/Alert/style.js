import styled from 'styled-components';

import Icon from '../Icon';

import { shadeColor, hexa } from '../globals';

const returnBoxShadow = color => {
  return `0 .3rem .5rem -.1rem ${hexa(color, .2)}, 0 .6rem 1rem 0 rgba(0, 0, 0, 0.14), 0 .1rem 1.8rem 0 ${hexa(color, .12)}`;
}

const returnColor = (color, background, hasBoxShadow) => {
  return `
    color: ${color};
    background: ${shadeColor(background, -5)};
    box-shadow: ${hasBoxShadow ? returnBoxShadow(background) : ''};
  `;
}

export const StyledIconClose = styled(Icon)`
 text-align: center;
 position: absolute;
 cursor: pointer;
 height: 1.6rem;
 width: 1.6rem;
 line-height: 1.6rem;
 vertical-align: middle;
 top: 1.6rem;
 right: 1.6rem;

`

export const StyledAlertIcon = styled(Icon)`
  margin-right: 1rem;
  height: 1.6rem;
  width: 1.6rem;
  line-height: 1.6rem;
  vertical-align: middle;
`


const returnType = props => {

  if(!props.color){
    switch (props.type) {
      case 'none':

        return returnColor(props.theme.text.regular, props.theme.background.paper, props.hasBoxShadow);
      case 'success':

        return returnColor(props.theme.text.default, props.theme.success.main, props.hasBoxShadow);

      case 'info':

        return returnColor(props.theme.text.default, props.theme.info.main, props.hasBoxShadow);

      case 'warning':

        return returnColor(props.theme.text.default, props.theme.warning.main, props.hasBoxShadow);

      case 'error':

        return returnColor(props.theme.text.default, props.theme.error.main, props.hasBoxShadow);

      default:

        return returnColor(props.theme.text.regular, props.theme.background.paper, props.hasBoxShadow);


    }
  }
  else {
    return `
    color: ${props.theme.text.default};
    background: ${hexa(props.color, .85)};
    box-shadow: ${props.hasBoxShadow ? returnBoxShadow(props.color) : ''};


    `
  }

}

export const StyledAlert = styled.div`
  font-size: 1.4rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: .2rem;

  ${props => returnType(props)};
`

export const StyledAlertTitle = styled.strong`
  font-size: 1.4rem;
  color: ${ ({theme,hasColor}) =>hasColor? theme.text.default : theme.text.primary};
  margin-right: 1rem;
`

export const StyledAlertContent =  styled.div`
  font-size: 1.4rem;
`
