import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    width: 100%;
    box-shadow: 0;
    cursor: pointer;
    transition:  box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 0 25px rgba(0,0,0,0.2);
    }
  }
`;

const Image = (props) => {
  return (
    <StyledImage>
      <img src={props.src} alt={props.alt} />
    </StyledImage>
  )
}

export default Image