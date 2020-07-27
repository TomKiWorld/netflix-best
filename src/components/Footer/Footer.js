import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
`;

const CustomLink = styled.a`
  text-decoration: none;
  color:  #E50914;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()}, Made with <span>&hearts;</span> by <CustomLink href='https://github.com/TomKiWorld' target='_blank' rel='noopener noreferrer'>TomKiWorld</CustomLink></p>
  </FooterContainer>
);

export default Footer;
