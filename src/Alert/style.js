import styled from 'styled-components';
import Icon from '../Icon';
import { shadeColor, hexa } from '../globals';

const returnBoxShadow = color => {
  return `0 .3rem .5rem -.1rem ${hexa(color, .2)}, 0 .6rem 1rem 0 rgba(0, 0, 0, 0.14), 0 .1rem 1.8rem 0 ${hexa(color, .12)}`
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
        return `
          color: ${props.theme.text.regular};
          background: ${shadeColor(props.theme.background.default, -5)};
          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.background.default)};


        `
      case 'success':
        return`

          color: ${props.theme.text.default};

          background: ${hexa(props.theme.success.main, .85)};
          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.success.main)};


        `
      case 'info':
        return`

          color: ${props.theme.text.default};

          background: ${hexa(props.theme.info.main, .85)};

          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.info.main)};



        `
      case 'warning':
        return`
        color: ${props.theme.text.default};

          background: ${hexa(props.theme.warning.main, .85)};
          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.warning.main)};

        `
      case 'error':
        return`
        color: ${props.theme.text.default};

          background: ${hexa(props.theme.error.main, .85)};
          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.error.main)};

        `
      default:
        return `
          color: ${props.theme.text.regular};
          background: ${ ({theme}) => shadeColor(theme.background.default, -5)};
          box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.theme.background.default)};


         `

    }
  }
  else {
    return `
    color: ${props.theme.text.default};
    background: ${hexa(props.color, .85)};
    box-shadow: ${props.hasBoxShadow && returnBoxShadow(props.color)};


    `
  }

}

export const StyledAlert = styled.div`
  font-size: 1.4rem;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  margin-bottom: 20px;
  border-radius: .2rem;

  ${props => returnType(props)};
`

export const StyledAlertTitle = styled.strong`
  font-size: 1.4rem;
  color: ${ ({theme,hasColor}) =>hasColor? theme.text.default : theme.text.primary};
  margin-right: .5rem;
`

export const StyledAlertContent =  styled.div`
  font-size: 1.4rem;
`
