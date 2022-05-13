import { Article, Lead, MainHeading, spacing, Vertical } from "@kokitotsos/react-components"
import { parseISO } from "date-fns"
import { graphql } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { FileConnection, MarkdownRemark, MarkdownRemarkConnection } from "../../gatsby-types"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
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
  const persons = data.persons.edges.map((edge) => edgeToPerson(edge, avatars))
  const authors = findPersonsByIds(persons, news.frontmatter.authors)

  return (
    <DefaultLayout location={location}>
      <Helmet title={news.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <Article
        authors={authors}
        heading={news.frontmatter.title}
        href={news.fields.href}
        key={news.id}
        publishTime={parseISO(news.fields.date)}
        showAvatars={false}
      >
        {news.html}
      </Article>
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
