import { graphql } from "gatsby"
import * as React from "react"

import { FileConnection, MarkdownRemark, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ArticleView } from "../components/web/ArticleView"
import { Hero } from "../components/web/Hero"
import { Section } from "../components/web/Section"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import type { Person } from "../types/Person"
import { edgeToPerson, findPersonsByIds } from "../utils/personUtils"

interface NewsTemplateProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    news: MarkdownRemark
    persons: MarkdownRemarkConnection
    avatars: FileConnection
  }
}

export default ({ data, location }: NewsTemplateProps) => {
  const page = data.page.edges[0]
  const news = data.news
  const avatars = data.avatars.edges
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge, avatars))
    .filter((person) => person !== undefined) as Person[]
  const authors = findPersonsByIds(persons, news.frontmatter.authors ?? [])

  return (
    <DefaultLayout location={location}>
      <Seo title={news.frontmatter.title} pathname={location.pathname} article={true} />
      <Hero
        variant="text"
        heading={page.node.frontmatter.heading}
        lead={page.node.frontmatter.lead}
      />

      <Section spaceTop={96}>
        <ArticleView
          title={news.frontmatter.title}
          date={news.fields.date}
          authors={authors}
          showAvatar={false}
          html={news.html}
        />
      </Section>
    </DefaultLayout>
  )
}

export const query = graphql`
  query NewsQuery($href: String!) {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "newsPage" } } }) {
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
    news: markdownRemark(fields: { href: { eq: $href } }) {
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
          ...PersonPublicFragment
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
