module.exports = {
  siteMetadata: {
    title: `Bitlogic Web`,
    description: `Bitlogic Web`,
    author: `Bitlogic`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bitlogic Web`,
        short_name: `Bitlogic`,
        start_url: `/`,
        background_color: `#74C8D2`,
        theme_color: `#74C8D2`,
        display: `minimal-ui`,
        icon: `src/images/isotipo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/homepage`,
        name: `homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/aboutUs`,
        name: `aboutUs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/services`,
        name: `services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/culture`,
        name: `culture`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/contact`,
        name: `contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
  ],
};
