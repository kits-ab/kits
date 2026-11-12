import { Link } from "@kokitotsos/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { ContentCard } from "../components/web/ContentCard"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { ProjectList } from "../components/web/ProjectList"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath } from "../utils/imageUtils"

interface ErbjudandenPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    offers: MarkdownRemarkConnection
    projects: MarkdownRemarkConnection
    images: FileConnection
  }
}

export default ({ data, location }: ErbjudandenPageProps) => {
  const page = data.page.edges[0]
  const { frontmatter } = page.node
  const offers = data.offers.edges
  const projects = data.projects.edges
  const images = data.images.edges

  return (
    <DefaultLayout location={location}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <Grid $columns={2}>
          {offers.map((edge) => (
            <ContentCard
              key={edge.node.frontmatter.id}
              title={edge.node.frontmatter.title}
              headingLevel="h2"
            >
              <Prose html={edge.node.html} />
            </ContentCard>
          ))}
        </Grid>
      </Section>

      <Section tone="raised">
        <ProjectList
          heading={frontmatter.section1.heading}
          items={projects.map((project) => ({
            key: project.node.frontmatter.title,
            title: project.node.frontmatter.title,
            href: project.node.frontmatter.href ?? undefined,
            image: findImageByRelativePath(images, project.node.frontmatter.image),
            html: project.node.html
          }))}
        />
      </Section>

      <ContactBand
        heading={frontmatter.section2.heading}
        text={frontmatter.section2.content}
        action={
          <Link href="mailto:salj@kits.se" variant="button" buttonVariant="primary" size="large">
            Kontakta oss
          </Link>
        }
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query OfferPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "offerPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            section1 {
              heading
            }
            section2 {
              heading
              content
            }
          }
        }
      }
    }
    offers: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "offer" } } }
      sort: { frontmatter: { index: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            id
            title
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { frontmatter: { index: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            index
            title
            image
            href
          }
          html
        }
      }
    }
    images: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^projekt_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentWide
        }
      }
    }
  }
`
