import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 42rem) {
    height: 60vh;
  }

  @media screen and (min-width: 75rem) {
    height: 90vh;
  }
`;

const HeroBanner =({ imageUrl, children }) => (
  <HeroBannerContainer imageUrl={imageUrl}>
    { children }
  </HeroBannerContainer>
);

HeroBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeroBanner;
