import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import BlogInfo from '../components/BlogInfo/BlogInfo';
import { Container, ButtonsContainer, CtaButton } from '../components/StyledComponents/StyledComponents';

const DetailsContainer = styled.div`
  width: 60%;
  min-width: 18rem;
  max-width: 32rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0 0 1rem;
  z-index: 1;
  background: linear-gradient(
    to right,#171717 0,
    rgba(23,23,23,.98) 20%,
    rgba(23,23,23,.97) 25%,
    rgba(23,23,23,.95) 35%,
    rgba(23,23,23,.94) 40%,
    rgba(23,23,23,.92) 45%,
    rgba(23,23,23,.9) 50%,
    rgba(23,23,23,.87) 55%,
    rgba(23,23,23,.82) 60%,
    rgba(23,23,23,.75) 65%,
    rgba(23,23,23,.63) 70%,
    rgba(23,23,23,.45) 75%,
    rgba(23,23,23,.27) 80%,
    rgba(23,23,23,.15) 85%,
    rgba(23,23,23,.08) 90%,
    rgba(23,23,23,.03) 95%,
    rgba(23,23,23,0) 100%);

  @media screen and (min-width: 42rem) {
    padding: 4rem 0 0 4rem;
  }
`;

const TitleImage = styled.img`
  display: block;
  width: 18rem;
  height: 6rem;

  @media screen and (min-width: 42rem) {
    width: 32rem;
    height: 12rem;
  }
`;

const NetflixLink = styled.a`
  display: block;
  margin-top: 1rem;
  color: #E50914;
  text-decoration: none;
`;

const TrailerIframe = styled.iframe`
  display: block;
  width: 80%;
  min-width: 19rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
  height: 12rem;
  border: 0;

  @media screen and (min-width: 42rem) {
    height: 18rem;
  }
`;

const CtaLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
`;

const BackLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;

  &:hover,
  &:focus {
    color: #222;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  const info = post.frontmatter;
  const blogs = data.allMarkdownRemark.edges;
  
  const currentBlogIndex = blogs.findIndex(blog => blog.node.fields.slug === post.fields.slug);
  let previousBlogSlug = null;
  let nextBlogSlug = null;

  if (currentBlogIndex > 0 ) {
    previousBlogSlug = blogs[currentBlogIndex - 1].node.fields.slug;
  }

  if (currentBlogIndex < (blogs.length - 1) ) {
    nextBlogSlug = blogs[currentBlogIndex + 1].node.fields.slug;
  }

  return (
    <Layout>
      <HeroBanner imageUrl={ info.previewImage }>
        <DetailsContainer>
          <TitleImage
            src={ info.titleImage }
            alt={ info.title }
          />
          <BlogInfo info={info} />
          <NetflixLink
            href={ info.netflixUrl }
            target={`_blank`}
            title={`View it on Netflix`}
          >View it on Netflix</NetflixLink>
        </DetailsContainer>
      </HeroBanner>
      <Container>
      <BackLink to={`/`}>&#8701; Back to overview &#10523;</BackLink>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>View the trailer:</h3>
        <TrailerIframe
          src={ info.trailer }
          allow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`}
          frameborder={`0`}
          allowfullscreen
        />
      <ButtonsContainer>
        {
          previousBlogSlug ? 
          <CtaButton>
            <CtaLink to={`/${previousBlogSlug}`} >Previous</CtaLink>
          </CtaButton> 
          : null
        }
        {
          nextBlogSlug ? 
          <CtaButton>
            <CtaLink to={`/${nextBlogSlug}`} >Next</CtaLink>
          </CtaButton> 
          : null}
      </ButtonsContainer>
      </Container>
    </Layout>
  )
};

export const query = graphql`
query($slug: String!) {
  allMarkdownRemark(sort: {fields: [frontmatter___score], order: DESC}) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
  markdownRemark( fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
      date
      seasons
      genre
      score
      previewImage
      titleImage
      netflixUrl
      trailer
    }
    fields {
      slug
    }
  }
}
`;
