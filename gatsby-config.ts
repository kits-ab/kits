import type { GatsbyConfig } from "gatsby"

import { MarkdownRemarkConnection, Site } from "./gatsby-types"

require("dotenv").config()

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://kits.se",
    rssBlogTitle: "KITS - Blogg",
    rssBlogDescription: "Senaste inläggen i KITS blogg"
  },
  flags: { DEV_SSR: false },
  plugins: [
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./static/assets/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/"
      }
    },
    {
      resolve: "gatsby-source-teamtailor",
      options: {
        apiEndpoint: process.env.TEAMTAILOR_API_ENDPOINT,
        apiKey: process.env.TEAMTAILOR_API_KEY
      }
    },
    {
      resolve: "gatsby-source-o365",
      options: {
        clientId: process.env.O365_API_CLIENTID,
        clientSecret: process.env.O365_API_CLIENTSECRET,
        tokenEndpoint: process.env.O365_API_TOKENENDPOINT
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./gatsby-types.ts",
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: "T"
        }
      }
    },
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
            serialize: ({
              query: { site, allMarkdownRemark, persons }
            }: {
              query: {
                site: Site
                allMarkdownRemark: MarkdownRemarkConnection
                persons: MarkdownRemarkConnection
              }
            }) => {
              const names = persons.edges.reduce((memo, edge) => {
                memo[edge.node.frontmatter.id] = edge.node.frontmatter.title
                return memo
              }, {})

              const getNames = (ids: string[]) => ids.map((id) => names[id]).join(", ")

              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.href,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.href,
                  author: getNames(edge.node.frontmatter.authors)
                })
              })
            },
            query: `{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "post"}}}
    sort: {fields: {date: DESC}}
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
    filter: {frontmatter: {type: {eq: "person"}}}
    sort: {frontmatter: {title: ASC}}
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
}`,
            output: "/blogg.xml",
            title: "KITS - Blogg"
          },
          {
            serialize: ({
              query: { site, allMarkdownRemark, persons }
            }: {
              query: {
                site: Site
                allMarkdownRemark: MarkdownRemarkConnection
                persons: MarkdownRemarkConnection
              }
            }) => {
              const names = persons.edges.reduce((memo, edge) => {
                memo[edge.node.frontmatter.id] = edge.node.frontmatter.title
                return memo
              }, {})

              const getNames = (ids: string[]) => ids.map((id) => names[id]).join(", ")

              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.href,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.href,
                  author: getNames(edge.node.frontmatter.authors)
                })
              })
            },
            query: `{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "news"}}}
    sort: {fields: {date: DESC}}
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
    filter: {frontmatter: {type: {eq: "person"}}}
    sort: {frontmatter: {title: ASC}}
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
}`,
            output: "/news.xml",
            title: "KITS - Nyheter"
          }
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto"],
          quality: 100
        }
      }
    },
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
              maxWidth: 1800,
              quality: 100
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
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml"
  ]
}

export default config
