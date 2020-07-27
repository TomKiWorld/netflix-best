import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from '../StyledComponents/StyledComponents';
import BlogInfo from '../BlogInfo/BlogInfo';

const BlogCardContainer = styled(Link)`
  display: block;
  text-decoration: none;
  color: #FFF;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.2rem solid #222;
`;

const BlogLink = styled.span`
  text-decoration: none;
  color: #E50914;
  display: block;
  width: fit-content;
  margin-left: auto;
  transition: transform .5s cubic-bezier(.25,.45,.45,.95);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const BlogTitle = styled.h3`
  color: #E50914;
  margin-bottom: 1.5rem;
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 42rem) {
    flex-direction: ${({ index }) => index % 2 === 0 ? `row` : `row-reverse`};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 15rem;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const BlogDetails = styled.div`
  width: 100%;
  height: auto;
  padding:  1rem;
`;

const BlogExcerpt = styled.p`
  margin-top:  1rem;
`;


const BlogCard = ({ blog, index }) => (
  <BlogCardContainer to={ blog.fields.slug }>
    <Container>
      <BlogContent index={index}>
        <BlogImage 
          imageUrl={blog.frontmatter.previewImage}
        />
        <BlogDetails>
      <BlogTitle>{ blog.frontmatter.title } - <span>{ blog.frontmatter.score } / 10</span></BlogTitle>
          <BlogInfo info={ blog.frontmatter } />
          <BlogExcerpt>{ blog.excerpt }</BlogExcerpt>
          <BlogLink>Read more</BlogLink>
        </BlogDetails>
      </BlogContent>
    </Container>
  </BlogCardContainer>
);

export default BlogCard;
