import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogCard from '../BlogCard/BlogCard';
import { ButtonsContainer, CtaButton } from '../StyledComponents/StyledComponents';

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const scrollToTop = () => {
  const element = document.getElementById('blogListContainer');
  if (element) {
    element.scrollIntoView()
  }
}

const BlogList = ({ blogs }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const perPage = 5;

  return (
    <BlogListContainer id='blogListContainer'>
      {
        blogs.slice(currentCount, (currentCount + perPage)).map( ({ node }, index) => {
            return (
            <BlogCard key={node.id} blog={node} index={index}/>
          )})
        }
        <ButtonsContainer>
          {
            currentCount > 0 ? 
            <CtaButton
              onClick={() => 
                {
                  setCurrentCount(currentCount - perPage);
                  scrollToTop();
                }
              }
            >Previous 5</CtaButton> 
            : null
          }
          {
            currentCount  < (blogs.length - perPage) ? 
            <CtaButton
              onClick={() => 
                {
                  setCurrentCount(currentCount + perPage);
                  scrollToTop();
                }
              }
            >Next 5</CtaButton> 
            : null}
        </ButtonsContainer>
    </BlogListContainer>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object),
}

export default BlogList;
