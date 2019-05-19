import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import HomeCardContainer from './HomeCardContainer'
import HomeCardDetails from './HomeCardDetails'
import Button from './Button'
import Image from './Image'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: auto;
    margin: 0 15px;
    &:last-child {
      display: show;
    }

    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
      &:last-child {
        display: none;
      }
    }
  }
`;

const HomeCard = (props) => {
  return (
    <HomeCardContainer>
      <Image src={props.image} />
      <Wrapper>
        <HomeCardDetails title={props.title} price={props.price} currency={props.currency} />
        <ButtonContainer>
          <Button>More Details</Button>
          <Button btnType="secondary">Book Now</Button>
        </ButtonContainer>
      </Wrapper>
    </HomeCardContainer>
  )
}

HomeCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default HomeCard