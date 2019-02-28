import { parse } from "date-fns"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"

import { Article, Lead, MainHeading, spacing, Vertical } from "@kokitotsos/react-components"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { FileConnection, MarkdownRemarkConnection } from "../types/graphql"
import { PageProps } from "../types/PageProps"
import { edgeToPerson, findPersonsByIds } from "../utils/personUtils"

interface BloggPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    blog: MarkdownRemarkConnection
    persons: MarkdownRemarkConnection
    avatars: FileConnection
  }
}

export default ({ data, location }: BloggPageProps) => {
  const page = data.page.edges[0]
  const avatars = data.avatars.edges
  const persons = data.persons.edges.map(edge => edgeToPerson(edge, avatars))
  const posts = data.blog.edges

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.node.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      {posts.map(post => {
        const authors = findPersonsByIds(persons, post.node.frontmatter.authors)
        return (
          <Article
            authors={authors}
            heading={post.node.frontmatter.title}
            href={post.node.fields.href}
            key={post.node.id}
            publishTime={parse(post.node.fields.date)}
            showAvatars={true}
            showExcerpt={true}
          >
            {post.node.html.split("<!-- more -->")[0]}
          </Article>
        )
      })}
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
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

    blog: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        ...BlogFragment
      }
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
