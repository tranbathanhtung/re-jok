import styled, {css} from 'styled-components';

export const baseAvatar = css `
   display: flex;
   flex: none;
   align-self: center;
   align-items: center;
   justify-content: center;
   list-style: none;
   text-transform: uppercase;
   box-sizing: border-box;
   margin-right: 0.8rem;
   background: ${props => props.imgSrc
  ? "transparent"
  : "#bdbdbd"} ;
   color: #fafafa;
   margin-bottom: 1.2rem;
   font-size: ${props => props.theme.size[props.size].fontSize};
   line-height: ${props => props.theme.size[props.size].lineHeight};
   width: ${props => props.theme.size[props.size].width};
   height: ${props => props.theme.size[props.size].height};
   padding: 0;

`

export const StyledAvatar = styled.div `
  ${baseAvatar}

  border-radius: ${props => props.shape === "circle" ? '50%' : '.4rem'};

`
export const StyledAvatarImage = styled.img.attrs({
  src: props => props.imgSrc
    ? props.imgSrc
    : "",
  alt: props => props.imgAlt
    ? props.imgAlt
    : ""
})`

  border-radius: inherit;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
`

//=============== Avatar Group ==================
export const StyledAvatarGroup = styled.ul `
  list-style: none;
  display: inline-flex;
  margin-right: .8rem;
  margin-left: .8rem;
  pointer-events: auto;
  order: 1;
`

export const StyledAvatarItem = styled.li `
  margin-left: -.8rem;
  width: ${props => props.theme.size[props.size].width};
  height: ${props => props.theme.size[props.size].height};
  pointer-events: auto;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
  position: relative;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
`
