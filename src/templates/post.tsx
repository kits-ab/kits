import { types } from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { FileConnection, MarkdownRemark, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ArticleView } from "../components/web/ArticleView"
import { Hero } from "../components/web/Hero"
import { Section } from "../components/web/Section"
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
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge, avatars))
    .filter((person) => person !== undefined) as types.Person[]
  const authors = findPersonsByIds(persons, post.frontmatter.authors ?? [])

  return (
    <DefaultLayout location={location}>
      <Seo title={post.frontmatter.title} pathname={location.pathname} article={true} />
      <Hero
        variant="text"
        heading={page.node.frontmatter.heading}
        lead={page.node.frontmatter.lead}
      />

      <Section spaceTop={96}>
        <ArticleView
          title={post.frontmatter.title}
          date={post.fields.date}
          authors={authors}
          showAvatar={true}
          html={post.html}
        />
      </Section>
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
      sort: { frontmatter: { title: ASC } }
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
