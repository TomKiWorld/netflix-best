import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogInfoContainer = styled.div`
  font-size: 0.8rem;
  width: 100%;
  height: auto;
`;

const BlogInfo = ({ info }) => (
  <BlogInfoContainer>
    <span>{ info.date }</span> | 
    <span> { info.seasons } Seasons</span> | 
    <span> { info.genre }</span>
  </BlogInfoContainer>
);

BlogInfo.propTypes = {
  info: PropTypes.object,
}

export default BlogInfo;
