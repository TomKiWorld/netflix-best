import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from '../StyledComponents/StyledComponents';
import NetflixLogo from '../NetflixLogo/NetflixLogo';

const HeaderContainer = styled.header`
  background-color: #E50914;
`;

const TitleContainer = styled.div`
  @media screen and (min-width: 42rem) {
    display: flex;
    justify-content: center;
  }
`;

const SubTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 0.5rem auto;
  width: fit-content;
  color: #000;
  font-weight: bold;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
    <TitleContainer>
      <Link
        to='/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <SubTitle>
          The best of
          <NetflixLogo />
        </SubTitle>
      </Link>
    </TitleContainer>
    </Container>
  </HeaderContainer>
);

export default Header;
