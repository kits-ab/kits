const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ actions: { createNodeField }, getNode, node }) => {
  if (node.internal.type === "MarkdownRemark") {
    const filename = createFilePath({ basePath: "content", getNode, node })
    if (node.frontmatter.type === "post") {
      const [, date, title] = filename.match(/^\/blogg\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)
      const href = `/${slugify(["blogg"].concat([date]).join("-"), "/")}/${title}`
      createNodeField({ node, name: "href", value: href })
      createNodeField({ node, name: "date", value: date })
    } else if (node.frontmatter.type === "news") {
      const [, date, title] = filename.match(/^\/nyheter\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)
      const href = `/${slugify(["nyheter"].concat([date]).join("-"), "/")}/${title}`
      createNodeField({ node, name: "href", value: href })
      createNodeField({ node, name: "date", value: date })
    } else if (node.frontmatter.type === "person") {
      createNodeField({ node, name: "href", value: `/om/${node.frontmatter.id}` })
    } else if (node.frontmatter.type === "conference") {
      createNodeField({ node, name: "href", value: `/kitscon/${node.frontmatter.id}` })
    }
  } else if (node.internal.type === "TeamtailorJob") {
    const href = `/jobb/${slugify(node.attributes.title, { lower: true })}`
    createNodeField({ node, name: "href", value: href })
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                href
              }
              frontmatter {
                alumni
                type
                email
              }
            }
          }
        }
        allTeamtailorJob {
          edges {
            node {
              fields {
                href
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter && node.frontmatter.type === "post") {
          createPage({
            path: node.fields.href,
            component: path.resolve("./src/templates/post.tsx"),
            context: { href: node.fields.href }
          })
        } else if (node.frontmatter && node.frontmatter.type === "news") {
          createPage({
            path: node.fields.href,
            component: path.resolve("./src/templates/news.tsx"),
            context: { href: node.fields.href }
          })
        } else if (
          node.frontmatter &&
          node.frontmatter.type === "person" &&
          node.frontmatter.alumni !== true
        ) {
          /* Disabled person pages
          createPage({
            path: node.fields.href,
            component: path.resolve("./src/templates/person.tsx"),
            context: {
              href: node.fields.href,
              email: node.frontmatter.email ? node.frontmatter.email : ""
            }
          })
          */
        } else if (node.frontmatter && node.frontmatter.type === "conference") {
          createPage({
            path: node.fields.href,
            component: path.resolve("./src/pages/kitscon.tsx"),
            context: { href: node.fields.href }
          })
        }
      })
      result.data.allTeamtailorJob.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.href,
          component: path.resolve("./src/pages/jobb.tsx"),
          context: { href: node.fields.href }
        })
      })
      resolve()
    })
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type TeamtailorJob implements Node {
      fields: TeamtailorJobFields
      attributes: TeamtailorJobAttributes
      links: TeamtailorJobLinks
    }

    type TeamtailorJobFields {
      href: String
    }

    type TeamtailorJobAttributes {
      title: String
      body: String
      apply_button_text: String
      human_status: String
    }

    type TeamtailorJobLinks {
      careersite_job_apply_url: String
      careersite_job_url: String
    }
  `
  createTypes(typeDefs)
}
