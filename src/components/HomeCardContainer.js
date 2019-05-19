import React from 'react'
import styled, {keyframes} from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(25px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledCardContainer = styled.div`
  min-height: 500px;
  padding: 15px;
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  box-shadow: 0 0.938em 2.188em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07);
  animation: ${slideUp} 0.5s ease 0s 1;
  
  @media (min-width: 768px) {
    grid-template-columns: minmax(400px, 0.25fr) 1fr;
    min-height: 250px;
    height: 100%;
  }
`;

const CardContainer = (props) => {
  return (
    <StyledCardContainer>
      {props.children}
    </StyledCardContainer>
  )
}

export default CardContainer