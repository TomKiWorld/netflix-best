module.exports = {
  siteMetadata: {
    title: `The best of Netflix`,
    description: `A Gatsby playground blog about my favorite netflix series.`,
    author: `TomKiWorld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        rule: {
          exclude: `${__dirname}/src/images/icons`
        }
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-best-of-netflix`,
        short_name: `best-netflix`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/netflix-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
