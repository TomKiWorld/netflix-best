import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NetflixIcon from '../../images/icons/netflix.svg';

const NetflixIconContainer= styled.span`
  display: inline-block;
  margin: 0 1rem;
`;

const NetflixLogo = ( { width } ) => (
  <NetflixIconContainer>
    <NetflixIcon width={ width }/>
  </NetflixIconContainer>
);

NetflixLogo.propTypes = {
  width: PropTypes.string,
};

NetflixLogo.defaultProps = {
  width: `8rem`,
};

export default NetflixLogo
