if (process.env != "production") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Situs Resmi Binalindung",
    footerText: "Sekretariat RW.11 Binalindung",
    social: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
    },
    description: `Situs Resmi Komplek Binalindung`,
    author: `Sekretariat Rw11 Binalindung`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        // start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `data/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400`, `source sans pro:300,400,400i,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kabinet`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, //process.env.CONTENTFUL_SPACE_ID
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
