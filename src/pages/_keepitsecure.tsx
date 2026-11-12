import { Link } from "@kokitotsos/kits-ui"
import { PageProps, graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { Hero } from "../components/web/Hero"
import { ProjectList } from "../components/web/ProjectList"
import { Section } from "../components/web/Section"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { findImageByRelativePath } from "../utils/imageUtils"

// Sidans bild, i full innehållsbredd men inte högre än 480 px.
const PageImage = styled.img`
  display: block;
  width: 100%;
  max-height: 480px;
  object-fit: cover;
`

interface SecurityPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    projects: MarkdownRemarkConnection
    projectImages: FileConnection
    pageImages: FileConnection
  }
}

export default ({ data, location }: SecurityPageProps) => {
  const page = data.page.edges[0]
  const { frontmatter } = page.node
  const projects = data.projects.edges
  const images = data.projectImages.edges
  const pageImage = findImageByRelativePath(data.pageImages.edges, frontmatter.images[0])

  return (
    <DefaultLayout location={location}>
      <Seo title={frontmatter.title} pathname={location.pathname} />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      {pageImage && (
        <Section spaceTop={96}>
          <PageImage src={pageImage.src} srcSet={pageImage.srcSet} alt="" />
        </Section>
      )}

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
  query SecurityPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "securityPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            lead
            section1 {
              heading
            }
            section2 {
              heading
              content
            }
            images
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "security_project" } } }
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
    pageImages: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^sakerhet_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentWide
        }
      }
    }
    projectImages: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^sakerhet_/" }
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
