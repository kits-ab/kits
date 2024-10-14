import {
  Button,
  Image,
  Lead,
  MainHeading,
  Media,
  SectionHeading,
  Text,
  Vertical,
  spacing,
  types
} from "@kokitotsos/react-components"
import { Alignment } from "@kokitotsos/react-components/dist/types"
import { PageProps, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { findImageByRelativePath } from "../utils/imageUtils"

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 400px;

  .image-wrapper {
    position: static;
  }

  .image-image {
    transform: none;
    height: auto;
    max-width: 100%;
  }
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
  const projects = data.projects.edges
  const images = data.projectImages.edges
  const pageImage = findImageByRelativePath(data.pageImages.edges, page.node.frontmatter.images[0])

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.node.frontmatter.title} />
      <Vertical spacing={spacing.large} alignHorizontal={Alignment.Center}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
        {/* TODO This image does not scale nicely */}
        <StyledImage
          src={pageImage && pageImage.src}
          srcSet={pageImage && pageImage.srcSet}
        ></StyledImage>
      </Vertical>

      <SectionHeading>{page.node.frontmatter.section1.heading}</SectionHeading>
      {projects.map((project) => {
        const image = findImageByRelativePath(images, project.node.frontmatter.image)
        return (
          <Media
            heading={project.node.frontmatter.title}
            href={project.node.frontmatter.href}
            key={`project_${project.node.frontmatter.index}`}
            src={image && image.src}
            srcSet={image && image.srcSet}
          >
            {project.node.html}
          </Media>
        )
      })}

      <SectionHeading>{page.node.frontmatter.section2.heading}</SectionHeading>
      <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
        <Text>
          <p>{page.node.frontmatter.section2.content}</p>
        </Text>
        <Button href="mailto:sales@kits.se">Kontakta oss</Button>
      </Vertical>
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
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "kitsstudio_project" } } }
      sort: { order: DESC, fields: [frontmatter___index] }
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
          ...ImageFragment
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
