import React,{Component} from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import styled from 'styled-components'

const IconContainer = styled.div`
order: ${props => props.iconPosition === "left" ? 0 : 1}

`



class Icon extends Component {
  render(){
    const {
      iconPosition,
      name,
      size,
      style,
      className,
      spin
    } = this.props;
    return (
      <IconContainer iconPosition={iconPosition}>
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
};

Icon.defaultProps = {
  spin: false
}

export default Icon;
