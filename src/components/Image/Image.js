import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
  `)

  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === fileName
  )
  if (!image) {
    return null
  }

  return <Img fluid={image.node.fluid} />
};

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default Image
