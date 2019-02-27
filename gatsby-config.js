require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://kits.se",
    rssBlogTitle: "KITS - Blogg",
    rssBlogDescription: "Senaste inläggen i KITS blogg"
  },
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
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                site_url: siteUrl
                title: rssBlogTitle
                description: rssBlogDescription
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark, persons } }) => {
              const names = persons.edges.reduce((memo, edge) => {
                memo[edge.node.frontmatter.id] = edge.node.frontmatter.title
                return memo
              }, {})

              const getNames = ids => ids.map(id => names[id]).join(", ")

              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.href,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.href,
                  author: getNames(edge.node.frontmatter.authors)
                })
              })
            },
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allMarkdownRemark(
                  filter: { frontmatter: { type: { eq: "post" } } }
                  sort: { order: DESC, fields: [fields___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        href
                        date
                      }
                      frontmatter {
                        title
                        authors
                      }
                    }
                  }
                }
                persons: allMarkdownRemark(
                  filter: { frontmatter: { type: { eq: "person" } } }
                  sort: { order: ASC, fields: [frontmatter___title] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        id
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/blogg.xml",
            title: "KITS - Blogg"
          }
        ]
      }
    },
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100
      }
    },
    "gatsby-plugin-sitemap",
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
