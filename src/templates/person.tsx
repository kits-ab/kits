import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import {
  Breakout,
  ContentHeading,
  Horizontal,
  Image,
  MainHeading,
  SectionHeading,
  Social,
  spacing,
  Tag,
  Text,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"

import { PersonList } from "../components/PersonList"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { FileConnection, MarkdownRemark } from "../types/graphql"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath } from "../utils/imageUtils"
import { edgeToPerson } from "../utils/personUtils"

interface PersonPageProps extends PageProps {
  data: {
    person: MarkdownRemark
    images: FileConnection
  }
}

const StyledImage = styled(Image)`
  height: 400px;
  flex: 0 0 300px;
  max-width: 300px;
  min-width: 300px;

  @media (max-width: ${width.tablet}px) {
    height: 300px;
    flex: 0 0 200px;
    max-width: 200px;
    min-width: 200px;
  }

  @media (max-width: ${width.mobileMenu}px) {
    border-left: 0;
    border-right: 0;
    flex: auto;
    height: auto;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: none;
    min-width: auto;
    position: relative;
    right: 50%;
    width: 100vw;
  }
`

const StyledTag = styled(Tag)`
  margin-bottom: 5px;
  margin-right: 5px;
`

export default ({ data, location }: PersonPageProps) => {
  const person = edgeToPerson({ node: data.person })
  const images = data.images
  const firstname = person.name.split(" ")[0]
  const image =
    findImageByRelativePath(images.edges, person.imageSrc) ||
    findImageByRelativePath(images.edges, "/assets/medarbetare_default.jpg")

  return (
    <DefaultLayout location={location}>
      <Helmet title={person.name} />

      <Horizontal breakpoint={width.mobileMenu} spacing={spacing.large}>
        <StyledImage src={image && image.src} srcSet={image && image.srcSet} />
        <Vertical spacing={spacing.medium} style={{ flex: "1 1 0%" }}>
          <MainHeading style={{ fontSize: 48, textAlign: "left" }}>{person.name}</MainHeading>
          <ContentHeading>{person.tagLine}</ContentHeading>

          {person.tags && (
            <Horizontal wrapRows={true}>
              {person.tags.map((tag: string, index: number) => (
                <StyledTag key={index}>{tag}</StyledTag>
              ))}
            </Horizontal>
          )}
          <Text>{data.person.html}</Text>
          <Horizontal breakpoint={350} separator={true} spacing={spacing.small}>
            {person.phone && (
              <Text>
                <p>
                  <a href={person.phone.toLink()}>{person.phone.toString()}</a>
                </p>
              </Text>
            )}
            {person.email && (
              <Text>
                <p>
                  <a href={person.email.toLink()}>{person.email.toString()}</a>
                </p>
              </Text>
            )}
          </Horizontal>
          <Social info={person.social} />
        </Vertical>
      </Horizontal>

      <Breakout>
        <Wrapper maxWidth={width.max} spacing={spacing.large}>
          <SectionHeading>
            {firstname}
            {firstname.endsWith("s") ? "" : "s"} kollegor
          </SectionHeading>
          <PersonList />
        </Wrapper>
      </Breakout>
    </DefaultLayout>
  )
}

export const query = graphql`
  query PersonPageQuery($href: String) {
    person: markdownRemark(fields: { href: { eq: $href } }) {
      html
      ...PersonFragment
    }

    images: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^medarbetare_[^-]*\\.jpg/" }
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
