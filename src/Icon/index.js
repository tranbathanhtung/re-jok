import React,{Component} from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import styled from 'styled-components'

const IconContainer = styled.div`
order: ${props => props.iconPosition === "left" ? 0 : 1};
color:  ${props => props.color ? props.theme[props.color].main : null};

`



class Icon extends Component {
  render(){
    const {
      iconPosition,
      name,
      size,
      style,
      className,
      spin,
      color,
    } = this.props;
    return (
      <IconContainer color={color} iconPosition={iconPosition}>
      <FontAwesome
       name={name}
       size={size}
       style={style}
       className={className}
       spin={spin}

      />
      </IconContainer>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
};

Icon.defaultProps = {
  spin: false,
  iconPosition: "left"
}

export default Icon;
