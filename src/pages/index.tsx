import {
  Breakout,
  Button,
  Collage,
  colors,
  ContentHeading,
  Horizontal,
  Lead,
  MainHeading,
  spacing,
  SubHeading,
  Text,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { findImagesByRelativePaths } from "../utils/imageUtils"

interface IndexPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    news: MarkdownRemarkConnection
    persons: MarkdownRemarkConnection
    blog: MarkdownRemarkConnection
    avatars: FileConnection
    images: FileConnection
    imagesSmall: FileConnection
    collageImages: FileConnection
  }
}

const StyledBreakout = styled(Breakout)`
  background-color: ${colors.background2};
  background-color: var(--background2);
  padding-bottom: ${spacing.large}px;
  padding-top: ${spacing.large}px;
`

export default ({ data, location }: IndexPageProps) => {
  const page = data.page.edges[0]
  // const bigNews = data.news.edges.slice(0, 2)
  // const smallNews = data.news.edges.slice(2)
  // const avatars = data.avatars.edges
  // const persons = data.persons.edges.map((edge) => edgeToPerson(edge, avatars))
  // const blog = data.blog.edges[0]
  // const images = data.images.edges
  // const imagesSmall = data.imagesSmall.edges

  const collageImages = findImagesByRelativePaths(
    data.collageImages.edges,
    page.node.frontmatter.images
  )

  return (
    <DefaultLayout location={location}>
      <Seo
        title={page.node.frontmatter.title}
        description="KITS är specialister inom systemutveckling, integration och cybersäkerhet. Vi levererar seniora konsulter som bygger och säkrar framtidens digitala lösningar."
        pathname={location.pathname}
      />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <StyledBreakout>
        <Wrapper>
          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            separator={true}
            spacing={spacing.large}
            style={{ alignItems: "stretch" }}
          >
            <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
              <Vertical
                alignHorizontal={types.Alignment.Center}
                spacing={spacing.small}
                className="max-100"
                style={{ flexGrow: 1 }}
              >
                <SubHeading>{page.node.frontmatter.section1.subheading}</SubHeading>
                <ContentHeading>{page.node.frontmatter.section1.heading}</ContentHeading>
                <Text className="is-flexed is-centered max-100">
                  <p>{page.node.frontmatter.section1.content}</p>
                </Text>
              </Vertical>
              <Button href="/tjanster">Läs mer om våra tjänster</Button>
            </Vertical>
            <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
              <Vertical
                alignHorizontal={types.Alignment.Center}
                spacing={spacing.small}
                className="max-100"
                style={{ flexGrow: 1 }}
              >
                <SubHeading>{page.node.frontmatter.section2.subheading}</SubHeading>
                <ContentHeading>{page.node.frontmatter.section2.heading}</ContentHeading>
                <Text className="is-flexed is-centered max-100">
                  <p>{page.node.frontmatter.section2.content}</p>
                </Text>
              </Vertical>
              <Button href="/karriar">Läs mer om att jobba på KITS</Button>
            </Vertical>
          </Horizontal>
        </Wrapper>
      </StyledBreakout>

      <Collage className="collage" images={collageImages.map((img) => ({ ...img, alt: "KITS" }))} />

      {/*
      <SectionHeading>{page.node.frontmatter.section3.heading}</SectionHeading>
      <Vertical>
        <Horizontal breakpoint={width.mobile} distribute={true} spacing={spacing.medium}>
          {bigNews.map((edge: MarkdownRemarkEdge, index: number) => {
            const image = findImageByRelativePath(images, edge.node.frontmatter.image)
            const date = parseISO(edge.node.fields.date)
            return (
              <Image
                href={edge.node.fields.href}
                key={`big_news_${index}`}
                infoText={edge.node.frontmatter.title}
                infoAdditionalText={format(date, "d MMMM yyyy", { locale: sv })}
                src={(image && image.src) || ""}
                srcSet={""}
              />
            )
          })}
        </Horizontal>
        <StyledHorizontal wrapRows={true}>
          {smallNews.map((edge: MarkdownRemarkEdge, index: number) => {
            const image = findImageByRelativePath(imagesSmall, edge.node.frontmatter.image)
            return (
              <Image
                href={edge.node.fields.href}
                key={`news_small_${index}`}
                src={(image && image.src) || ""}
                srcSet={(image && image.srcSet) || ""}
                tooltipText={edge.node.frontmatter.title}
              />
            )
          })}
        </StyledHorizontal>
      </Vertical>
      */}
      {/* Temporarily disabled
      <SectionHeading>{page.node.frontmatter.section4.heading}</SectionHeading>
      <Article
        authors={authors}
        heading={blog.node.frontmatter.title}
        href={blog.node.fields.href}
        publishTime={parseISO(blog.node.fields.date)}
        showAvatars={true}
        showExcerpt={true}
      >
        {blog.node.html.split("<!-- more -->")[0]}
      </Article> */}
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "indexPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            lead
            section1 {
              subheading
              heading
              content
            }
            section2 {
              subheading
              heading
              content
            }
            section3 {
              heading
            }
            section4 {
              heading
            }
            images
          }
        }
      }
    }
    news: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "news" } } }
      sort: { fields: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            href
            date
          }
          frontmatter {
            authors
            title
            heading
            image
          }
          html
        }
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
    blog: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: { date: DESC } }
      limit: 1
    ) {
      edges {
        ...BlogFragment
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
    images: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^nyheter_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragment
        }
      }
    }
    imagesSmall: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^nyheter_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentSmall
        }
      }
    }
    collageImages: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^framsida_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentCollage
        }
      }
    }
  }
`
