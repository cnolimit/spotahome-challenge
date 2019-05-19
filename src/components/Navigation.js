import React from 'react'
import styled from 'styled-components';
import Menu from './Menu'

const StyledNavigation = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-shadow: 0 0.125em 0.313em rgba(50,50,93,.09), 0 0.063em 0.125em rgba(0,0,0,.07);
  
  h1 {
    padding: 0;
    margin: 0;
  }
  nav{
    visibility: hidden;
  }
  @media (min-width: 768px) {
    nav{
      visibility: visible;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <h1>Spotaroom</h1>
      <Menu />
    </StyledNavigation>
  )
}

export default Navigation