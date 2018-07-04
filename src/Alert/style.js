import styled from 'styled-components';
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
          color: ${props.theme.success.main};
          background: ${hexa(props.theme.success.main, .28)};

        `
      case 'info':
        return`
          color: ${props.theme.info.main};
          background: ${hexa(props.theme.info.main, .28)};

        `
      case 'warning':
        return`
          color: ${props.theme.warning.main};
          background: ${hexa(props.theme.warning.main, .28)};

        `
      case 'error':
        return`
          color: ${props.theme.error.main};
          background: ${hexa(props.theme.error.main, .28)};

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
  ${props => returnType(props)};
`

export const StyledAlertTitle = styled.span`
  font-size: 1.6rem;
  color: ${ ({theme}) => theme.text.primary};
`

export const StyledAlertContent =  styled.div`
  font-size: 1.4rem;
`
