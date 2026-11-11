import { Link, Typography } from "@kits-ab/kits-ui"
import { PageProps, graphql } from "gatsby"
import React from "react"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { Hero } from "../components/web/Hero"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { SplitSection } from "../components/web/SplitSection"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { findImageByRelativePath } from "../utils/imageUtils"

interface KitsStudioPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    projects: MarkdownRemarkConnection
    projectImages: FileConnection
    pageImages: FileConnection
  }
}

export default ({ data, location }: KitsStudioPageProps) => {
  const page = data.page.edges[0]
  const { frontmatter } = page.node
  const pageImage = findImageByRelativePath(data.pageImages.edges, frontmatter.images[0])

  // Vilande: projektlistan (section1 och projects i queryn) visas inte just nu. Se git-historiken
  // för den gamla renderingen.

  return (
    <DefaultLayout location={location}>
      <Seo title={frontmatter.title} pathname={location.pathname} />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <SplitSection image={pageImage} stickyImage>
          <Prose html={page.node.html} />
        </SplitSection>
      </Section>

      <ContactBand
        heading={frontmatter.section2.heading}
        text={
          <Typography variant="body" color="secondary">
            {frontmatter.section2.content}
          </Typography>
        }
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
  query KitsStudioPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "kitsstudioPage" } } }) {
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
          html
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "kitsstudio_project" } } }
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
        relativePath: { regex: "/^kitsstudio_/" }
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
        relativePath: { regex: "/^kitsstudio_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragment
        }
      }
    }
  }
`
