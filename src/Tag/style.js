import styled,{css} from 'styled-components';
import { shadeColor } from '../globals';
import Icon from '../Icon';


export const StyledIconClose = styled(Icon)`
 text-align: center;
 position: relative;
 cursor: pointer;
 height: 1.6rem;
 width: 0;
 line-height: 1.6rem;
 vertical-align: middle;
 top: -.1rem;
 right: -.5rem;
 opacity: 0;


 transition: all .2s;

`


export const StyledTag = styled.span`
  display: inline-flex;
  height: ${props => props.theme.size[props.size].height};
  line-height: ${props => props.theme.size[props.size].height};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 1.1rem;
  margin-right: .8rem;
  margin-bottom: .8rem;
  background-color: ${ ({theme, color}) => color ? color : shadeColor(theme.background.default, -5)};
  border: .1rem solid transparent;
  border-radius: .2rem;
  color: ${ ({theme, color}) => color ? theme.text.default : theme.text.secondary};
  cursor: pointer;
  font-size: ${props => props.theme.size[props.size].fontSize};
  position: relative;
  transition: all .2s;

  &:hover{
    color: ${ ({theme, color}) => color ? theme.text.default : theme.text.regular};
    ${
      props => props.closable && css`
         padding-right: 14px;
         & ${StyledIconClose}{
           width: 1.6rem;
           opacity: 1;
           color: ${ ({color, theme}) => color && theme.text.default};
         }
      `
    }
  }
`
