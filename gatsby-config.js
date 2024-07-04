require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Växtbaserat",
    description: "Västbaserat - allt om växtbaserad mat",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-WXVC83RP',
      includeInDevelopment: true,
      defaultDataLayer: { platform: "gatsby" }
},
},

{
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `Satisfy`,
      `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
    ],
    display: 'swap'
  },
},
  ],
};
