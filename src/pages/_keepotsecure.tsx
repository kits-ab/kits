import { Link } from "@kits-ab/kits-ui"
import { PageProps, graphql } from "gatsby"
import * as React from "react"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { Hero } from "../components/web/Hero"
import { ProjectList } from "../components/web/ProjectList"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { SplitSection } from "../components/web/SplitSection"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { findImageByRelativePath } from "../utils/imageUtils"

interface OtSecurityPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    projects: MarkdownRemarkConnection
    projectImages: FileConnection
    pageImages: FileConnection
  }
}

export default ({ data, location }: OtSecurityPageProps) => {
  const page = data.page.edges[0]
  const { frontmatter } = page.node
  const projects = data.projects.edges
  const images = data.projectImages.edges
  const pageImage = findImageByRelativePath(data.pageImages.edges, frontmatter.images[0])

  return (
    <DefaultLayout location={location}>
      <Seo title={frontmatter.title} pathname={location.pathname} />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <SplitSection image={pageImage} stickyImage>
          <Prose html={page.node.html} />
        </SplitSection>
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
          <Link
            href="mailto:otsecurity@kits.se"
            variant="button"
            buttonVariant="primary"
            size="large"
          >
            Kontakta oss
          </Link>
        }
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query KeepOTSecurePageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "OtSecurityPage" } } }) {
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
      filter: { frontmatter: { type: { eq: "ot_security_project" } } }
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
        relativePath: { regex: "/^ot_sakerhet_/" }
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
        relativePath: { regex: "/^ot_sakerhet_/" }
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
