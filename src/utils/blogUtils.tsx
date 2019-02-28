import { graphql } from "gatsby"

export const blogFragment = graphql`
  fragment BlogFragment on MarkdownRemarkEdge {
    node {
      fields {
        href
        date
      }
      frontmatter {
        authors
        title
      }
      html
    }
  }
`
