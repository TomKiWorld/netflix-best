import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { Container } from '../components/StyledComponents/StyledComponents';
import BlogList from '../components//BlogList/BlogList';

const PageTitle = styled.h1`
  z-index: 1;
`;

const ImageGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
`;

export default ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <HeroBanner imageUrl={'https://assets.nflxext.com/ffe/siteui/vlv3/a6fede83-60f5-4588-93a1-b82b099db1d0/96bb3a55-ddc3-4ee5-8f19-bda43790059f/NL-en-20200720-popsignuptwoweeks-perspective_alpha_website_small.jpg'}>
      <PageTitle>Best series</PageTitle>
      <ImageGradient/>
    </HeroBanner>
    <article>
      <Container>
        <h2>Why Netflix?</h2>

        <p>Netflix is one of the major streaming services available for series and movies. 
        If you love bing watching, Netflix is your best friend. 
        It offers the viewer an abundance of genres to pick from.</p>

        <p>Wether you like Drama, Action or SciFi, 
        you can always find something to watch. 
        But with so much to choose from, you are bound to get lost in the content.</p>

        <h2>My choice for the best Netflix series</h2>
        <p>I was busy with my portfolio, and needed an idea for a blog. And yes, you guessed right, 
        I chose to write about my favorite Netflix series.</p>
        <p>The list is short, but a choice had to be made. I'm sorry if I left your favorite series out. <span role='img' aria-label='Grinning Face With Smiling Eyes'>😁</span></p>
      </Container>
        <BlogList blogs={data.allMarkdownRemark.edges} />
      </article>
  </Layout>
);

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___score], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            seasons
            genre
            score
            previewImage
            titleImage
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
