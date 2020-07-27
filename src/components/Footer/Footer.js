import React from 'react';
import styled from 'styled-components';

import { CustomLink } from '../StyledComponents/StyledComponents';

const FooterContainer = styled.footer`
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()}, Made with <span>&hearts;</span> by <CustomLink href='https://github.com/TomKiWorld' target='_blank' rel='noopener noreferrer'>TomKiWorld</CustomLink></p>
  </FooterContainer>
);

export default Footer;
