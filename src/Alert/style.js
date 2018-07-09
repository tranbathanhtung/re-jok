import styled, {css} from 'styled-components';
import Icon from '../Icon';
import { hexa } from '../globals';

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





 transition: all .2s;

`

export const StyledAlertIcon = styled(Icon)`
  margin-right: 10px;
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
          background: ${ ({theme}) => theme.background.default};

        `
      case 'success':
        return`

          color: ${props.theme.text.default};

          background: ${props.theme.success.main};

        `
      case 'info':
        return`

          color: ${props.theme.text.default};

          background: ${props.theme.info.main};


        `
      case 'warning':
        return`
        color: ${props.theme.text.default};


          background: ${props.theme.warning.main};


        `
      case 'error':
        return`
        color: ${props.theme.text.default};

          background: ${props.theme.error.main};


        `
      default:
        return `
          color: ${props.theme.text.regular};
          background: ${ ({theme}) => theme.background.default};


         `

    }
  }
  else {
    return `
    color: ${props.theme.text.default};
    background: ${props.color};
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
  ${
    props => props.hasBoxshadow && css`
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    `
  }
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
