module.exports = {
  siteMetadata: {
    title: `Safeguards.io`,
    description: `Safeguards is a tool for validaitng the security and opertional compliance of your infrastructure before it is provisioned.`,
    author: `@safeguards-io`,
  },
  plugins: [
    'gatsby-plugin-less',
    `gatsby-plugin-react-helmet`,
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
        name: `markdown-safeguards`,
        path: `${__dirname}/src/safeguards`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safeguards.io`,
        short_name: `safeguards`,
        start_url: `/`,
        background_color: `#F7F7F7`,
        theme_color: `#ff3366`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "Y5cc92523d07d7e0c63915d7e",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
