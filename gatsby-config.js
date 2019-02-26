require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-source-teamtailor",
      options: {
        apiEndpoint: process.env.TEAMTAILOR_API_ENDPOINT,
        apiKey: process.env.TEAMTAILOR_API_KEY
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1800
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {}
            }
          },
          "gatsby-remark-smartypants"
        ]
      }
    }
  ]
}
