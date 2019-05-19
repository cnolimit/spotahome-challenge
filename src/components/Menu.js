import React from 'react'
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    
    li {
      display: inline-block;
      margin: 0 5px;
      a {
        text-decoration: none;
        font-size: 1.2em;
        font-weight: 600;
        color: #000;
        transition: text-decoration 0.2s, color 0.2s;
        &:hover {
        color: #3d8f31;
          text-decoration: underline;
        }
      }
    }
  }
`;
const Menu = () => {
  return (
    <StyledNav>
      <ul>
        <li><a href="#">The Company</a></li> -{" "}
        <li><a href="#">How We Work</a></li> -{" "}
        <li><a href="#">Contact Us</a></li>
      </ul>
    </StyledNav>
  )
}

export default Menu