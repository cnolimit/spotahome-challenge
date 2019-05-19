import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledHomeCardDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h3 {
    font-size: 1.8em;
    text-align: left;
    margin: 0;
  }
  span {

  }

  @media (min-width: 768px) {
    margin: 0 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    h3 {
      margin-right: 25px;
    }
  }
`;

const StyledPrice = styled.div`
  background-color: black;
  font-weight: 900;
  color: #fcd103;
  font-size: 1.5em;
  text-align: right;
  border-radius: 10px;
  padding: 5px 15px;
  display: inline;
  align-items: center;
  align-self: flex-end;
  
  span {
    font-size: 0.5em;
  }
`;

const HomeCardDetails = (props) => {
  return (
    <StyledHomeCardDetails>
      <h3>{props.title}</h3>
      <StyledPrice>{props.price}<span>{props.currency}</span></StyledPrice>
    </StyledHomeCardDetails>
  )
}

HomeCardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default HomeCardDetails