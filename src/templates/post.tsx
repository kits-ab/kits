import { Article, Lead, MainHeading, spacing, Vertical } from "@kokitotsos/react-components"
import { parseISO } from "date-fns"
import { graphql } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { FileConnection, MarkdownRemark, MarkdownRemarkConnection } from "../../gatsby-types"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { edgeToPerson, findPersonsByIds } from "../utils/personUtils"

interface PostTemplateProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    post: MarkdownRemark
    persons: MarkdownRemarkConnection
    avatars: FileConnection
  }
}

export default ({ data, location }: PostTemplateProps) => {
  const page = data.page.edges[0]
  const post = data.post
  const avatars = data.avatars.edges
  const persons = data.persons.edges.map(edge => edgeToPerson(edge, avatars))
  const authors = findPersonsByIds(persons, post.frontmatter.authors)

  return (
    <DefaultLayout location={location}>
      <Helmet title={post.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <Article
        authors={authors}
        heading={post.frontmatter.title}
        href={post.fields.href}
        key={post.id}
        publishTime={parseISO(post.fields.date)}
        showAvatars={true}
      >
        {post.html}
      </Article>
    </DefaultLayout>
  )
}

export const query = graphql`
  query BlogPostQuery($href: String!) {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "blogPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            lead
          }
        }
      }
    }
    post: markdownRemark(fields: { href: { eq: $href } }) {
      fields {
        date
        href
      }
      frontmatter {
        authors
        title
      }
      html
    }
    persons: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "person" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...PersonFragment
        }
      }
    }
    avatars: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^medarbetare_.*-avatar/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentAvatar
        }
      }
    }
  }
`
