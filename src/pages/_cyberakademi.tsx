import { Link, Typography } from "@kokitotsos/kits-ui"
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
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { findImageByRelativePath } from "../utils/imageUtils"

interface CyberAcademyPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    projects: MarkdownRemarkConnection
    projectImages: FileConnection
    pageImages: FileConnection
  }
}

export default ({ data, location }: CyberAcademyPageProps) => {
  const page = data.page.edges[0]
  const { frontmatter } = page.node
  const projects = data.projects.edges
  const images = data.projectImages.edges
  const pageImage = findImageByRelativePath(data.pageImages.edges, frontmatter.images[0])

  return (
    <DefaultLayout location={location}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <SplitSection image={pageImage} stickyImage>
          <Stack $gap={24}>
            <Typography variant="h2" as="h2">
              {frontmatter.content}
            </Typography>
            <Prose html={page.node.html} />
          </Stack>
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
          <Link href="mailto:salj@kits.se" variant="button" buttonVariant="primary" size="large">
            Kontakta oss
          </Link>
        }
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query CyberAcademyPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "cyberacademyPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            content
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
      filter: { frontmatter: { type: { eq: "cyberacademy_project" } } }
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
        relativePath: { regex: "/^cyberacademy_/" }
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
        relativePath: { regex: "/^cyberacademy_/" }
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
