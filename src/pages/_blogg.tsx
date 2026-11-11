import { types } from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ArticleView } from "../components/web/ArticleView"
import { Hero } from "../components/web/Hero"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
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
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge, avatars))
    .filter((person) => person !== undefined) as types.Person[]
  const posts = data.blog.edges

  return (
    <DefaultLayout location={location}>
      <Seo title={page.node.frontmatter.title} pathname={location.pathname} />
      <Hero
        variant="text"
        heading={page.node.frontmatter.heading}
        lead={page.node.frontmatter.lead}
      />

      <Section spaceTop={96}>
        <Stack $gap={120}>
          {posts.map((post) => (
            <ArticleView
              key={post.node.fields.href}
              title={post.node.frontmatter.title}
              date={post.node.fields.date}
              authors={findPersonsByIds(persons, post.node.frontmatter.authors ?? [])}
              showAvatar={true}
              html={post.node.html.split("<!-- more -->")[0]}
              href={post.node.fields.href}
            />
          ))}
        </Stack>
      </Section>
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
      sort: { fields: { date: DESC } }
    ) {
      edges {
        ...BlogFragment
      }
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
