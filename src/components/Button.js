import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  font-size: 1.3em;
  color: white;
  cursor: pointer;
  font-weight: 900;
  padding: 15px 30px;
  border-bottom: 5px solid ${props => props.btnType === 'primary' ? '#146a20' : '#9A6222'};
  background-color: ${props => props.btnType === 'primary' ? '#3d8f31' : '#f09218'};
  box-shadow: 0;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  btnType: PropTypes.oneOf(['primary', 'secondary'])
}

Button.defaultProps = {
  btnType: 'primary'
}


export default Button