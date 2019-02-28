import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import {
  Breakout,
  Button,
  DevelopmentIcon,
  Horizontal,
  IntegrationIcon,
  Lead,
  MainHeading,
  Media,
  Offer,
  OfferType,
  ProjectIcon,
  SectionHeading,
  SecurityIcon,
  spacing,
  Text,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { FileConnection, MarkdownRemarkConnection } from "../types/graphql"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath } from "../utils/imageUtils"

const StyledHorizontal = styled(Horizontal)`
  margin-left: ${-spacing.large}px;
  margin-right: ${-spacing.large}px;
  padding: 25px 0;
`

const StyledOffer = styled(Offer)`
  width: 50%;

  @media (max-width: ${width.tablet}px) {
    width: 100%;
  }
`

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
  const offers = data.offers.edges
  const projects = data.projects.edges
  const images = data.images.edges

  const offerParams: {
    [key: string]: { icon: React.ReactNode; type: OfferType; zIndex: number }
  } = {
    integration: {
      icon: <IntegrationIcon />,
      type: OfferType.Type3,
      zIndex: 2
    },
    projektledning: {
      icon: <ProjectIcon />,
      type: OfferType.Type2,
      zIndex: 1
    },
    sakerhet: {
      icon: <SecurityIcon />,
      type: OfferType.Type4,
      zIndex: 4
    },
    utveckling: {
      icon: <DevelopmentIcon />,
      type: OfferType.Type1,
      zIndex: 3
    }
  }

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.node.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <Breakout style={{ overflowX: "hidden" }}>
        <Wrapper>
          <StyledHorizontal wrapRows={true}>
            {offers.map(edge => {
              const id = edge.node.frontmatter.id
              const offerParam = offerParams[id]
              return (
                <StyledOffer
                  heading={edge.node.frontmatter.title}
                  icon={offerParam.icon}
                  key={`offer_${id}`}
                  type={offerParam.type}
                  zIndex={offerParam.zIndex}
                >
                  {edge.node.html}
                </StyledOffer>
              )
            })}
          </StyledHorizontal>
        </Wrapper>
      </Breakout>

      <SectionHeading>{page.node.frontmatter.section1.heading}</SectionHeading>
      {projects.map(edge => {
        const image = findImageByRelativePath(images, edge.node.frontmatter.image)
        return (
          <Media
            heading={edge.node.frontmatter.title}
            href={edge.node.frontmatter.href}
            key={`project_${edge.node.frontmatter.index}`}
            src={image && image.src}
            srcSet={image && image.srcSet}
          >
            {edge.node.html}
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
  query OfferPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "offerPage" } } }) {
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
          }
        }
      }
    }

    offers: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "offer" } } }
      sort: { order: ASC, fields: [frontmatter___index] }
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

    images: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^projekt_/" }
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
